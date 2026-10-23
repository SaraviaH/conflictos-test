/**
 * Luxe Glow Cosmetics — js/components/carousel/carousel.js
 * Componente Carrusel independiente, configurable mediante datos JSON,
 * con soporte para controles, indicadores, teclado, gestos táctiles y pausa en hover.
 */

const CarouselComponent = {
  slides: [],
  currentIndex: 0,
  autoplayTimer: null,
  autoplayDelay: 6000,
  container: null,

  /**
   * Inicializa el componente carrusel dentro de un contenedor y carga sus diapositivas.
   * @param {string|HTMLElement} target Selector del contenedor
   * @param {Array} [customSlides] Arreglo opcional de diapositivas; si se omite, lee data/carousel.json
   */
  async init(target = '#hero-carousel-container', customSlides = null) {
    const host = typeof target === 'string' ? document.querySelector(target) : target;
    if (!host || !window.ComponentLoader) return;

    this.container = host;

    try {
      await window.ComponentLoader.mount(host, 'components/carousel/carousel.html');
      this.slides = Array.isArray(customSlides)
        ? customSlides
        : await window.DataService.getCarouselSlides();

      if (!this.slides.length) return;

      this.renderSlides();
      this.bindEvents();
      this.goToSlide(0);
      this.startAutoplay();
    } catch (err) {
      console.error('Error al inicializar el carrusel:', err);
    }
  },

  renderSlides() {
    const track = this.container.querySelector('#luxe-carousel-track');
    const indicators = this.container.querySelector('#luxe-carousel-indicators');
    if (!track || !indicators) return;

    track.innerHTML = this.slides.map((slide, index) => {
      const imgSrc = window.Paths ? window.Paths.resolve(slide.image) : slide.image;
      const primaryHref = slide.primaryBtn && slide.primaryBtn.href
        ? (window.Paths ? window.Paths.resolve(slide.primaryBtn.href) : slide.primaryBtn.href)
        : '#catalogo';
      const secondaryHref = slide.secondaryBtn && slide.secondaryBtn.href
        ? (window.Paths ? window.Paths.resolve(slide.secondaryBtn.href) : slide.secondaryBtn.href)
        : '';

      return `
        <div class="luxe-carousel-slide${index === 0 ? ' is-active' : ''}"
             role="group"
             aria-roledescription="slide"
             aria-label="Diapositiva ${index + 1} de ${this.slides.length}: ${slide.title}"
             aria-hidden="${index === 0 ? 'false' : 'true'}"
             data-slide-index="${index}">
          <img src="${imgSrc}"
               alt="${slide.imageAlt || slide.title}"
               class="luxe-carousel-bg"
               ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}>
          <div class="luxe-carousel-scrim" aria-hidden="true"></div>
          <div class="luxe-carousel-content">
            ${slide.tag ? `
              <span class="luxe-carousel-tag">
                <i class="fas ${slide.tagIcon || 'fa-sparkles'} text-gold" aria-hidden="true"></i>
                ${slide.tag}
              </span>
            ` : ''}
            ${index === 0
              ? `<h1 class="luxe-carousel-title">${slide.title}</h1>`
              : `<h2 class="luxe-carousel-title">${slide.title}</h2>`
            }
            <p class="luxe-carousel-subtitle">${slide.subtitle || ''}</p>
            <div class="d-flex flex-wrap gap-3">
              ${slide.primaryBtn ? `
                <a href="${primaryHref}" class="btn btn-luxe-primary">
                  ${slide.primaryBtn.icon ? `<i class="fas ${slide.primaryBtn.icon} me-2" aria-hidden="true"></i>` : ''}
                  ${slide.primaryBtn.label}
                </a>
              ` : ''}
              ${slide.secondaryBtn ? `
                <a href="${secondaryHref}" class="btn btn-luxe-outline">
                  ${slide.secondaryBtn.label}
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    }).join('');

    indicators.innerHTML = this.slides.map((slide, index) => `
      <button type="button"
              class="luxe-carousel-dot${index === 0 ? ' is-active' : ''}"
              role="tab"
              aria-selected="${index === 0 ? 'true' : 'false'}"
              aria-label="Ir a diapositiva ${index + 1}: ${slide.tag || slide.title}"
              data-slide-to="${index}"></button>
    `).join('');
  },

  goToSlide(index) {
    if (!this.slides.length || !this.container) return;
    const total = this.slides.length;
    this.currentIndex = ((index % total) + total) % total;

    const slideNodes = this.container.querySelectorAll('.luxe-carousel-slide');
    const dotNodes = this.container.querySelectorAll('.luxe-carousel-dot');

    slideNodes.forEach((node, idx) => {
      const active = idx === this.currentIndex;
      node.classList.toggle('is-active', active);
      node.setAttribute('aria-hidden', active ? 'false' : 'true');
    });

    dotNodes.forEach((dot, idx) => {
      const active = idx === this.currentIndex;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-selected', active ? 'true' : 'false');
    });
  },

  next() {
    this.goToSlide(this.currentIndex + 1);
  },

  prev() {
    this.goToSlide(this.currentIndex - 1);
  },

  startAutoplay() {
    this.stopAutoplay();
    if (this.slides.length <= 1) return;
    this.autoplayTimer = setInterval(() => {
      this.next();
    }, this.autoplayDelay);
  },

  stopAutoplay() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
    }
  },

  bindEvents() {
    const prevBtn = this.container.querySelector('#luxe-carousel-prev');
    const nextBtn = this.container.querySelector('#luxe-carousel-next');
    const indicators = this.container.querySelector('#luxe-carousel-indicators');
    const viewport = this.container.querySelector('.luxe-carousel-viewport');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        this.prev();
        this.startAutoplay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.next();
        this.startAutoplay();
      });
    }

    if (indicators) {
      indicators.addEventListener('click', e => {
        const dot = e.target.closest('[data-slide-to]');
        if (!dot) return;
        const targetIndex = Number(dot.getAttribute('data-slide-to'));
        if (!Number.isNaN(targetIndex)) {
          this.goToSlide(targetIndex);
          this.startAutoplay();
        }
      });
    }

    if (viewport) {
      // Pausar reproducción automática al pasar el cursor o enfocar con teclado
      viewport.addEventListener('mouseenter', () => this.stopAutoplay());
      viewport.addEventListener('mouseleave', () => this.startAutoplay());
      viewport.addEventListener('focusin', () => this.stopAutoplay());
      viewport.addEventListener('focusout', () => this.startAutoplay());

      // Soporte de navegación con teclado
      viewport.setAttribute('tabindex', '0');
      viewport.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          this.prev();
          this.startAutoplay();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          this.next();
          this.startAutoplay();
        }
      });

      // Soporte táctil (swipe) para dispositivos móviles
      let touchStartX = 0;
      viewport.addEventListener('touchstart', e => {
        if (e.changedTouches && e.changedTouches[0]) {
          touchStartX = e.changedTouches[0].screenX;
        }
      }, { passive: true });

      viewport.addEventListener('touchend', e => {
        if (!e.changedTouches || !e.changedTouches[0]) return;
        const deltaX = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(deltaX) > 45) {
          if (deltaX < 0) this.next();
          else this.prev();
          this.startAutoplay();
        }
      }, { passive: true });
    }
  }
};

window.CarouselComponent = CarouselComponent;

