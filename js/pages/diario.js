/**
 * Luxe Glow Cosmetics — js/pages/diario.js
 * Lógica exclusiva del Diario Botánico (pages/diario.html):
 * Lectura de artículos desde data/articles.json, filtrado por categoría y modal lector.
 */

const DiarioPage = {
  categories: [],
  articles: [],
  currentFilter: 'all',

  async init() {
    await this.loadJournal();
    this.bindNewsletter();
  },

  async loadJournal() {
    const container = document.getElementById('journal-articles-container');
    if (!container) return;

    try {
      const data = await window.DataService.getJournalData();
      this.categories = data.categories;
      this.articles = data.articles;

      this.renderFilterPills();
      this.renderArticles();
    } catch (err) {
      console.error('Error al cargar los artículos del Diario:', err);
      container.innerHTML = `
        <div class="col-12">
          <div class="luxe-state-box">
            <i class="fas fa-circle-exclamation fs-2 text-gold mb-2" aria-hidden="true"></i>
            <h4 class="font-serif fw-bold text-burgundy-dark fs-5 mb-1">No se pudieron cargar los artículos</h4>
            <p class="small text-muted mb-0">Verifica la conexión con el servidor local e inténtalo nuevamente.</p>
          </div>
        </div>
      `;
    }
  },

  renderFilterPills() {
    const bar = document.getElementById('journal-pills-bar');
    if (!bar || !this.categories.length) return;

    bar.innerHTML = this.categories.map(cat => `
      <button type="button"
              class="luxe-filter-pill${cat.id === this.currentFilter ? ' active' : ''}"
              data-filter="${cat.id}"
              aria-pressed="${cat.id === this.currentFilter ? 'true' : 'false'}">
        ${cat.label}
      </button>
    `).join('');

    bar.querySelectorAll('[data-filter]').forEach(pill => {
      pill.addEventListener('click', () => {
        this.currentFilter = pill.getAttribute('data-filter') || 'all';
        bar.querySelectorAll('[data-filter]').forEach(p => {
          const active = p === pill;
          p.classList.toggle('active', active);
          p.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        this.renderArticles();
      });
    });
  },

  renderArticles() {
    const container = document.getElementById('journal-articles-container');
    if (!container) return;

    const list = this.currentFilter === 'all'
      ? this.articles
      : this.articles.filter(a => a.category === this.currentFilter);

    if (list.length === 0) {
      container.innerHTML = `
        <div class="col-12">
          <div class="luxe-state-box">
            <i class="fas fa-book-open fs-2 text-gold mb-2" aria-hidden="true"></i>
            <p class="text-muted mb-0">No hay artículos publicados en esta categoría.</p>
          </div>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(art => `
      <div class="col-md-6 col-lg-4 d-flex">
        <article class="article-card w-100" data-article-id="${art.id}">
          <div class="article-img" aria-hidden="true"><i class="fas ${art.icon}"></i></div>
          <div class="article-body">
            <span class="article-tag">${art.tag}</span>
            <h2 class="article-title">${art.title}</h2>
            <p class="article-excerpt">${art.excerpt}</p>
            <button type="button" class="btn btn-luxe-outline btn-sm mt-auto w-100" data-read-article="${art.id}">
              <i class="fas fa-book-open me-2" aria-hidden="true"></i>Leer Artículo Completo
            </button>
          </div>
        </article>
      </div>
    `).join('');

    container.querySelectorAll('[data-article-id]').forEach(card => {
      const id = card.getAttribute('data-article-id');
      card.addEventListener('click', () => this.openArticle(id));
    });

    container.querySelectorAll('[data-read-article]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        this.openArticle(btn.getAttribute('data-read-article'));
      });
    });
  },

  openArticle(articleId) {
    const art = this.articles.find(a => a.id === articleId);
    if (!art) return;

    const tagEl = document.getElementById('article-modal-tag');
    const titleEl = document.getElementById('article-modal-title');
    const bodyEl = document.getElementById('article-modal-content-body');

    if (tagEl) tagEl.textContent = art.tag;
    if (titleEl) titleEl.textContent = art.title;
    if (bodyEl) bodyEl.innerHTML = art.content;

    const modalEl = document.getElementById('articleModal');
    if (modalEl && window.bootstrap) {
      window.bootstrap.Modal.getOrCreateInstance(modalEl).show();
    }
  },

  bindNewsletter() {
    const form = document.getElementById('journal-newsletter-form');
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && !input.checkValidity()) {
        input.reportValidity();
        return;
      }
      if (window.Cart) {
        window.Cart.showToast('¡Te has suscrito con éxito a la edición mensual del Diario Botánico!');
      }
      form.reset();
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  DiarioPage.init();
});

