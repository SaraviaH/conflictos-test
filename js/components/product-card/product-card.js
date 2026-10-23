/**
 * Luxe Glow Cosmetics — js/components/product-card/product-card.js
 * Componente reutilizable de Tarjeta de Producto y Modal de Vista Rápida compartido
 */

const ProductCardComponent = {
  _templateHtml: null,
  _modalCurrentProduct: null,
  _modalQty: 1,

  /**
   * Carga la plantilla HTML de la tarjeta de producto una sola vez
   * @returns {Promise<string>}
   */
  async ensureTemplate() {
    if (this._templateHtml) return this._templateHtml;
    this._templateHtml = await window.ComponentLoader.fetchTemplate('components/product-card/product-card.html');
    return this._templateHtml;
  },

  /**
   * Construye un nodo DOM de columna + tarjeta de producto a partir de los datos del producto
   * @param {Object} product Objeto producto validado del JSON
   * @param {Object} [options] Opciones adicionales (ej. columnClass, showQuickView)
   * @returns {HTMLElement}
   */
  createCardNode(product, options = {}) {
    const colClass = options.columnClass || 'col-12 col-md-6 col-lg-3 d-flex';
    const showQuickView = options.showQuickView !== false;

    const col = document.createElement('div');
    col.className = colClass;
    col.setAttribute('data-category', product.category || '');
    col.setAttribute('data-product-id', String(product.id));

    const wrapper = document.createElement('div');
    wrapper.innerHTML = this._templateHtml.trim();
    const card = wrapper.firstElementChild;
    card.classList.add('w-100');

    // 1. Etiqueta promocional (solo cuando product.badge existe y no está vacío)
    const badgeEl = card.querySelector('[data-card-badge]');
    if (badgeEl) {
      if (product.badge && String(product.badge).trim() !== '') {
        badgeEl.textContent = product.badge;
        badgeEl.classList.remove('d-none');
      } else {
        badgeEl.remove();
      }
    }

    // 2. Imagen y texto alternativo
    const imgEl = card.querySelector('[data-card-img]');
    if (imgEl) {
      imgEl.src = window.Paths ? window.Paths.resolve(product.image) : product.image;
      imgEl.alt = product.imageAlt || product.name;
    }

    // 3. Categoría
    const catEl = card.querySelector('[data-card-category]');
    if (catEl) {
      catEl.textContent = product.categoryName || product.category;
    }

    // 4. Valoración y opiniones (solo si los datos están disponibles y son coherentes)
    const ratingWrap = card.querySelector('[data-card-rating-wrap]');
    if (ratingWrap) {
      const hasValidRating = typeof product.rating === 'number' && product.rating > 0 && product.rating <= 5;
      const hasValidReviews = typeof product.reviews === 'number' && product.reviews >= 0;
      if (hasValidRating && hasValidReviews) {
        ratingWrap.classList.remove('d-none');
        const ratingVal = card.querySelector('[data-card-rating]');
        const reviewsVal = card.querySelector('[data-card-reviews]');
        if (ratingVal) ratingVal.textContent = product.rating.toFixed(1);
        if (reviewsVal) reviewsVal.textContent = `(${product.reviews})`;
      } else {
        ratingWrap.remove();
      }
    }

    // 5. Título y Descripción
    const titleEl = card.querySelector('[data-card-title]');
    if (titleEl) {
      titleEl.textContent = product.name;
      if (showQuickView) {
        titleEl.setAttribute('role', 'button');
        titleEl.setAttribute('tabindex', '0');
        titleEl.addEventListener('click', () => this.openQuickView(product));
        titleEl.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.openQuickView(product);
          }
        });
      }
    }

    const descEl = card.querySelector('[data-card-desc]');
    if (descEl) {
      descEl.textContent = product.description;
    }

    // 6. Precio actual y precio anterior opcional
    const priceEl = card.querySelector('[data-card-price]');
    if (priceEl) {
      priceEl.textContent = `$${Number(product.price).toFixed(2)}`;
    }

    const oldPriceEl = card.querySelector('[data-card-old-price]');
    if (oldPriceEl) {
      if (typeof product.originalPrice === 'number' && product.originalPrice > product.price) {
        oldPriceEl.textContent = `$${product.originalPrice.toFixed(2)}`;
        oldPriceEl.classList.remove('d-none');
      } else {
        oldPriceEl.remove();
      }
    }

    // 7. Botón Vista Rápida
    const qvBtn = card.querySelector('[data-card-quickview]');
    if (qvBtn) {
      if (showQuickView) {
        qvBtn.classList.remove('d-none');
        qvBtn.setAttribute('aria-label', `Vista rápida de ${product.name}`);
        qvBtn.addEventListener('click', () => this.openQuickView(product));
      } else {
        qvBtn.remove();
      }
    }

    // 8. Botón Añadir al Carrito
    const addBtn = card.querySelector('[data-card-add]');
    if (addBtn) {
      addBtn.setAttribute('aria-label', `Añadir ${product.name} al carrito`);
      addBtn.addEventListener('click', () => {
        if (window.Cart) {
          window.Cart.add(product.id, 1);
        }
      });
    }

    col.appendChild(card);
    return col;
  },

  /**
   * Renderiza una lista de productos dentro de un contenedor grid reutilizando la plantilla
   * @param {HTMLElement|string} container Contenedor o selector
   * @param {Array} products Lista de productos
   * @param {Object} [options] Opciones de configuración
   */
  async renderGrid(container, products, options = {}) {
    const grid = typeof container === 'string' ? document.querySelector(container) : container;
    if (!grid) return;

    await this.ensureTemplate();
    grid.innerHTML = '';

    const fragment = document.createDocumentFragment();
    products.forEach(product => {
      const cardNode = this.createCardNode(product, options);
      fragment.appendChild(cardNode);
    });

    grid.appendChild(fragment);
  },

  /**
   * Asegura que exista el Modal de Vista Rápida en el DOM para mostrar detalles de cualquier producto
   */
  ensureQuickViewModal() {
    let modalEl = document.getElementById('quickViewModal');
    if (modalEl) return modalEl;

    const modalHtml = `
      <div class="modal fade modal-luxe" id="quickViewModal" tabindex="-1" aria-labelledby="qv-title" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <div class="d-flex align-items-center gap-2">
                <span id="qv-badge" class="badge bg-burgundy text-white px-2 py-1 small text-uppercase"></span>
                <span id="qv-category" class="small text-gold fw-bold text-uppercase" style="letter-spacing:1px"></span>
              </div>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div class="modal-body p-4">
              <div class="row g-4">
                <div class="col-md-5 text-center">
                  <img id="qv-img" src="" alt="" class="quick-view-img">
                </div>
                <div class="col-md-7 d-flex flex-column">
                  <div class="d-flex flex-column h-100">
                    <h3 id="qv-title" class="font-serif fw-bold text-burgundy-dark mb-2"></h3>
                    <div class="d-flex align-items-center gap-3 mb-2">
                      <div id="qv-rating" class="small"></div>
                    </div>
                    <div class="d-flex align-items-baseline gap-2 mb-3">
                      <span id="qv-price" class="fs-3 fw-bold text-burgundy-dark"></span>
                      <span id="qv-old-price" class="fs-6 text-muted text-decoration-line-through d-none"></span>
                    </div>
                    <div class="d-flex flex-wrap gap-2 mb-3 small">
                      <span class="badge bg-rose-soft text-burgundy-dark border px-2 py-1"><i class="fas fa-cube me-1 text-gold" aria-hidden="true"></i> <span id="qv-volume"></span></span>
                      <span class="badge bg-rose-soft text-burgundy-dark border px-2 py-1"><i class="fas fa-check me-1 text-gold" aria-hidden="true"></i> <span id="qv-skintype"></span></span>
                    </div>
                    <p id="qv-desc" class="text-muted small mb-3"></p>
                    <div class="mb-3">
                      <h6 class="fw-bold text-burgundy-dark small text-uppercase mb-2">Beneficios Principales</h6>
                      <div id="qv-benefits"></div>
                    </div>
                    <div class="mb-3">
                      <h6 class="fw-bold text-burgundy-dark small text-uppercase mb-1">Activos Clave &amp; INCI</h6>
                      <div id="qv-ingredients" class="inci-tag-box"></div>
                    </div>
                    <div class="mb-4">
                      <h6 class="fw-bold text-burgundy-dark small text-uppercase mb-1">Modo de Aplicación</h6>
                      <p id="qv-howtouse" class="small text-muted mb-0"></p>
                    </div>
                    <div class="d-flex align-items-center gap-3 mt-auto pt-3 border-top">
                      <div class="d-flex align-items-center border rounded-pill px-2 py-1 bg-white">
                        <button type="button" class="btn btn-sm btn-link text-burgundy-dark p-1" id="qv-qty-minus" aria-label="Reducir cantidad"><i class="fas fa-minus" aria-hidden="true"></i></button>
                        <span id="qv-qty-display" class="px-2 fw-bold text-dark">1</span>
                        <button type="button" class="btn btn-sm btn-link text-burgundy-dark p-1" id="qv-qty-plus" aria-label="Aumentar cantidad"><i class="fas fa-plus" aria-hidden="true"></i></button>
                      </div>
                      <button type="button" class="btn btn-luxe-primary flex-grow-1 py-2" id="qv-add-btn">
                        <i class="fas fa-shopping-bag me-2" aria-hidden="true"></i> Añadir a la Bolsa
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    modalEl = document.getElementById('quickViewModal');

    modalEl.querySelector('#qv-qty-minus')?.addEventListener('click', () => this.updateModalQty(-1));
    modalEl.querySelector('#qv-qty-plus')?.addEventListener('click', () => this.updateModalQty(1));
    modalEl.querySelector('#qv-add-btn')?.addEventListener('click', () => this.addCurrentFromModal());

    return modalEl;
  },

  openQuickView(product) {
    if (!product) return;
    const modalEl = this.ensureQuickViewModal();

    this._modalCurrentProduct = product;
    this._modalQty = 1;

    const imgEl = document.getElementById('qv-img');
    if (imgEl) {
      imgEl.src = window.Paths ? window.Paths.resolve(product.image) : product.image;
      imgEl.alt = product.imageAlt || product.name;
    }

    const badgeEl = document.getElementById('qv-badge');
    if (badgeEl) {
      if (product.badge) {
        badgeEl.textContent = product.badge;
        badgeEl.classList.remove('d-none');
      } else {
        badgeEl.classList.add('d-none');
      }
    }

    const catEl = document.getElementById('qv-category');
    if (catEl) catEl.textContent = product.categoryName || product.category;

    const titleEl = document.getElementById('qv-title');
    if (titleEl) titleEl.textContent = product.name;

    const priceEl = document.getElementById('qv-price');
    if (priceEl) priceEl.textContent = `$${Number(product.price).toFixed(2)}`;

    const oldPriceEl = document.getElementById('qv-old-price');
    if (oldPriceEl) {
      if (typeof product.originalPrice === 'number' && product.originalPrice > product.price) {
        oldPriceEl.textContent = `$${product.originalPrice.toFixed(2)}`;
        oldPriceEl.classList.remove('d-none');
      } else {
        oldPriceEl.classList.add('d-none');
      }
    }

    const ratingEl = document.getElementById('qv-rating');
    if (ratingEl) {
      if (typeof product.rating === 'number' && typeof product.reviews === 'number') {
        ratingEl.innerHTML = `
          <i class="fas fa-star text-gold" aria-hidden="true"></i>
          <span class="fw-bold ms-1">${product.rating.toFixed(1)}</span>
          <span class="text-muted ms-1">(${product.reviews} valoraciones verificadas)</span>
        `;
      } else {
        ratingEl.innerHTML = '';
      }
    }

    const volEl = document.getElementById('qv-volume');
    if (volEl) volEl.textContent = product.volume || 'Formato estándar';

    const skinEl = document.getElementById('qv-skintype');
    if (skinEl) skinEl.textContent = product.skinType || 'Todo tipo de piel';

    const descEl = document.getElementById('qv-desc');
    if (descEl) descEl.textContent = product.description;

    const benefitsEl = document.getElementById('qv-benefits');
    if (benefitsEl) {
      if (Array.isArray(product.benefits) && product.benefits.length > 0) {
        benefitsEl.innerHTML = product.benefits.map(b => `
          <div class="benefit-bullet">
            <i class="fas fa-check-circle" aria-hidden="true"></i>
            <span>${b}</span>
          </div>
        `).join('');
      } else {
        benefitsEl.innerHTML = '';
      }
    }

    const ingEl = document.getElementById('qv-ingredients');
    if (ingEl) ingEl.textContent = product.ingredients || 'Extractos botánicos certificados.';

    const howEl = document.getElementById('qv-howtouse');
    if (howEl) howEl.textContent = product.howToUse || 'Aplicar según rutina diaria recomendada.';

    this.updateModalQtyDisplay();

    if (window.bootstrap) {
      window.bootstrap.Modal.getOrCreateInstance(modalEl).show();
    }
  },

  updateModalQty(delta) {
    this._modalQty = Math.max(1, this._modalQty + delta);
    this.updateModalQtyDisplay();
  },

  updateModalQtyDisplay() {
    const qtyEl = document.getElementById('qv-qty-display');
    if (qtyEl) qtyEl.textContent = String(this._modalQty);
  },

  addCurrentFromModal() {
    if (!this._modalCurrentProduct || !window.Cart) return;
    window.Cart.add(this._modalCurrentProduct.id, this._modalQty);

    const modalEl = document.getElementById('quickViewModal');
    if (modalEl && window.bootstrap) {
      window.bootstrap.Modal.getInstance(modalEl)?.hide();
    }
  }
};

window.ProductCardComponent = ProductCardComponent;

