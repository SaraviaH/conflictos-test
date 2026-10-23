/**
 * Luxe Glow Cosmetics — js/pages/tienda.js
 * Lógica exclusiva de la página de Tienda (pages/tienda.html):
 * Catálogo completo desde data/products.json, filtros sincronizados, búsqueda en vivo y ordenamiento.
 */

const TiendaPage = {
  allProducts: [],
  categories: [],
  currentCategory: 'all',
  searchQuery: '',
  currentSort: 'featured',

  async init() {
    this.readInitialUrlCategory();
    await this.loadCatalog();
    this.bindControls();
  },

  readInitialUrlCategory() {
    try {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get('category');
      if (catParam && catParam.trim() !== '') {
        this.currentCategory = catParam.trim().toLowerCase();
      }
    } catch (e) {
      this.currentCategory = 'all';
    }
  },

  async loadCatalog() {
    const grid = document.getElementById('tienda-product-grid');
    const loadingBox = document.getElementById('tienda-loading-state');
    const errorBox = document.getElementById('tienda-error-state');

    try {
      if (loadingBox) loadingBox.classList.remove('d-none');
      if (errorBox) errorBox.classList.add('d-none');

      const catalog = await window.DataService.getCatalogData();
      this.allProducts = catalog.products;
      this.categories = catalog.categories;

      // Validar que la categoría inicial exista en el catálogo
      if (
        this.currentCategory !== 'all' &&
        !this.categories.some(c => c.id === this.currentCategory)
      ) {
        this.currentCategory = 'all';
      }

      if (loadingBox) loadingBox.classList.add('d-none');

      this.renderCategoryPills();
      await this.renderProducts();
    } catch (err) {
      console.error('Error al cargar el catálogo en Tienda:', err);
      if (loadingBox) loadingBox.classList.add('d-none');
      if (grid) grid.innerHTML = '';
      if (errorBox) errorBox.classList.remove('d-none');
      this.updateCounter(0);
    }
  },

  renderCategoryPills() {
    const container = document.getElementById('tienda-category-pills');
    if (!container || !this.categories.length) return;

    container.innerHTML = this.categories.map(cat => `
      <button type="button"
              class="luxe-filter-pill${cat.id === this.currentCategory ? ' active' : ''}"
              data-filter="${cat.id}"
              aria-pressed="${cat.id === this.currentCategory ? 'true' : 'false'}">
        ${cat.shortName || cat.name}
      </button>
    `).join('');

    container.querySelectorAll('[data-filter]').forEach(pill => {
      pill.addEventListener('click', () => {
        this.currentCategory = pill.getAttribute('data-filter') || 'all';
        container.querySelectorAll('[data-filter]').forEach(p => {
          const active = p === pill;
          p.classList.toggle('active', active);
          p.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        this.renderProducts();
      });
    });
  },

  getFilteredProducts() {
    let list = [...this.allProducts];

    // 1. Filtro por categoría
    if (this.currentCategory !== 'all') {
      list = list.filter(p => p.category === this.currentCategory);
    }

    // 2. Filtro por búsqueda de texto
    if (this.searchQuery.trim() !== '') {
      const q = this.searchQuery.toLowerCase().trim();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.categoryName && p.categoryName.toLowerCase().includes(q)) ||
        (p.ingredients && p.ingredients.toLowerCase().includes(q)) ||
        (p.badge && p.badge.toLowerCase().includes(q))
      );
    }

    // 3. Ordenamiento
    switch (this.currentSort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating-desc':
        list.sort((a, b) => (b.rating || 0) - (a.rating || 0) || (b.reviews || 0) - (a.reviews || 0));
        break;
      case 'name-asc':
        list.sort((a, b) => a.name.localeCompare(b.name, 'es'));
        break;
      case 'featured':
      default:
        list.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || a.id - b.id);
        break;
    }

    return list;
  },

  async renderProducts() {
    const grid = document.getElementById('tienda-product-grid');
    const emptyState = document.getElementById('tienda-empty-state');
    if (!grid) return;

    const products = this.getFilteredProducts();
    this.updateCounter(products.length);

    if (products.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.classList.remove('d-none');
      return;
    }

    if (emptyState) emptyState.classList.add('d-none');

    await window.ProductCardComponent.renderGrid(grid, products, {
      columnClass: 'col-12 col-md-6 col-lg-3 d-flex',
      showQuickView: true
    });
  },

  updateCounter(count) {
    const badge = document.getElementById('products-count-badge');
    if (!badge) return;
    const total = typeof count === 'number' ? count : this.getFilteredProducts().length;
    badge.textContent = `${total} ${total === 1 ? 'producto' : 'productos'}`;
  },

  resetFilters() {
    this.currentCategory = 'all';
    this.searchQuery = '';
    this.currentSort = 'featured';

    const searchInput = document.getElementById('tienda-search');
    if (searchInput) searchInput.value = '';

    const sortSelect = document.getElementById('tienda-sort');
    if (sortSelect) sortSelect.value = 'featured';

    this.renderCategoryPills();
    this.renderProducts();
  },

  bindControls() {
    const searchInput = document.getElementById('tienda-search');
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        this.searchQuery = e.target.value;
        this.renderProducts();
      });
    }

    const sortSelect = document.getElementById('tienda-sort');
    if (sortSelect) {
      sortSelect.addEventListener('change', e => {
        this.currentSort = e.target.value;
        this.renderProducts();
      });
    }

    const resetBtn = document.getElementById('btn-reset-filters');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => this.resetFilters());
    }

    const vipForm = document.getElementById('vip-club-form');
    if (vipForm) {
      vipForm.addEventListener('submit', e => {
        e.preventDefault();
        const emailInput = vipForm.querySelector('input[type="email"]');
        if (emailInput && !emailInput.checkValidity()) {
          emailInput.reportValidity();
          return;
        }
        if (window.Cart) {
          window.Cart.showToast('¡Bienvenida al Círculo Privado! Tu código de 15% es <b>LUXE15</b>');
        }
        vipForm.reset();
      });
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  TiendaPage.init();
});

