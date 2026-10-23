/**
 * Luxe Glow Cosmetics — js/pages/index.js
 * Lógica exclusiva de la página de Inicio (index.html):
 * Inicialización del carrusel, carga de productos destacados desde JSON y filtrado por categoría.
 */

const HomePage = {
  maxFeaturedProducts: 8,
  featuredProducts: [],
  categories: [],
  currentFilter: 'all',

  async init() {
    // 1. Inicializar el componente Carrusel independiente
    if (window.CarouselComponent) {
      window.CarouselComponent.init('#hero-carousel-container');
    }

    // 2. Cargar y representar los productos destacados desde data/products.json
    await this.loadFeaturedCatalog();
  },

  async loadFeaturedCatalog() {
    const grid = document.getElementById('home-featured-grid');
    const stateBox = document.getElementById('home-featured-state');
    if (!grid) return;

    try {
      if (stateBox) {
        stateBox.classList.remove('d-none');
        stateBox.innerHTML = `
          <div class="spinner-border text-gold mb-2" role="status" aria-hidden="true"></div>
          <p class="small text-muted mb-0">Cargando selección destacada...</p>
        `;
      }

      const catalog = await window.DataService.getCatalogData();
      this.featuredProducts = catalog.products
        .filter(p => p.featured === true)
        .slice(0, this.maxFeaturedProducts);

      // Sincronizar categorías disponibles en destacados
      const featuredCatSet = new Set(this.featuredProducts.map(p => p.category));
      this.categories = catalog.categories.filter(
        c => c.id === 'all' || featuredCatSet.has(c.id)
      );

      this.renderFilterPills();
      await this.renderFeaturedProducts();
    } catch (err) {
      console.error('Error al cargar productos destacados en Inicio:', err);
      grid.innerHTML = '';
      if (stateBox) {
        stateBox.classList.remove('d-none');
        stateBox.innerHTML = `
          <i class="fas fa-circle-exclamation fs-2 text-gold mb-2" aria-hidden="true"></i>
          <h4 class="font-serif fw-bold text-burgundy-dark fs-5 mb-1">No pudimos cargar la selección destacada</h4>
          <p class="small text-muted mb-0">Por favor, verifica que estás visualizando el sitio desde un servidor local.</p>
        `;
      }
    }
  },

  renderFilterPills() {
    const filterContainer = document.getElementById('home-featured-filters');
    if (!filterContainer || !this.categories.length) return;

    filterContainer.innerHTML = this.categories.map(cat => `
      <button type="button"
              class="luxe-filter-pill${cat.id === this.currentFilter ? ' active' : ''}"
              data-filter="${cat.id}"
              aria-pressed="${cat.id === this.currentFilter ? 'true' : 'false'}">
        ${cat.name}
      </button>
    `).join('');

    filterContainer.querySelectorAll('[data-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.currentFilter = btn.getAttribute('data-filter') || 'all';
        filterContainer.querySelectorAll('[data-filter]').forEach(b => {
          const isActive = b === btn;
          b.classList.toggle('active', isActive);
          b.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
        this.renderFeaturedProducts();
      });
    });
  },

  async renderFeaturedProducts() {
    const grid = document.getElementById('home-featured-grid');
    const stateBox = document.getElementById('home-featured-state');
    if (!grid) return;

    const list = this.currentFilter === 'all'
      ? this.featuredProducts
      : this.featuredProducts.filter(p => p.category === this.currentFilter);

    if (list.length === 0) {
      grid.innerHTML = '';
      if (stateBox) {
        stateBox.classList.remove('d-none');
        stateBox.innerHTML = `
          <i class="fas fa-sparkles fs-2 text-gold mb-2" aria-hidden="true"></i>
          <p class="text-muted mb-0">No hay productos destacados en esta categoría por el momento.</p>
        `;
      }
      return;
    }

    if (stateBox) {
      stateBox.classList.add('d-none');
      stateBox.innerHTML = '';
    }

    await window.ProductCardComponent.renderGrid(grid, list, {
      columnClass: 'col-12 col-md-6 col-lg-3 d-flex',
      showQuickView: true
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  HomePage.init();
});

