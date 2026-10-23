/**
 * Luxe Glow Cosmetics — js/utils/data-service.js
 * Servicio centralizado de lectura, validación y caché de archivos JSON en /data/
 */

const DataService = {
  _cache: {},

  /**
   * Realiza una petición fetch a un archivo JSON relativo a la raíz y almacena el resultado en caché.
   * @param {string} jsonRelativePath Ruta relativa desde la raíz (ej. 'data/products.json')
   * @returns {Promise<any>}
   */
  async fetchJSON(jsonRelativePath) {
    if (this._cache[jsonRelativePath]) {
      return this._cache[jsonRelativePath];
    }

    const url = window.Paths ? window.Paths.resolve(jsonRelativePath) : jsonRelativePath;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`No se pudo cargar ${jsonRelativePath} (HTTP ${response.status})`);
    }

    const data = await response.json();
    this._cache[jsonRelativePath] = data;
    return data;
  },

  /**
   * Valida que un objeto de producto contenga los campos indispensables para su representación.
   * @param {Object} product
   * @returns {boolean}
   */
  isValidProduct(product) {
    if (!product || typeof product !== 'object') return false;
    const hasRequiredId = typeof product.id === 'number' || (typeof product.id === 'string' && product.id.trim() !== '');
    const hasName = typeof product.name === 'string' && product.name.trim() !== '';
    const hasCategory = typeof product.category === 'string' && product.category.trim() !== '';
    const hasPrice = typeof product.price === 'number' && !Number.isNaN(product.price) && product.price >= 0;
    const hasDesc = typeof product.description === 'string' && product.description.trim() !== '';
    const hasImage = typeof product.image === 'string' && product.image.trim() !== '';
    return hasRequiredId && hasName && hasCategory && hasPrice && hasDesc && hasImage;
  },

  /**
   * Obtiene el catálogo completo desde data/products.json y devuelve los productos publicados y válidos.
   * @returns {Promise<{categories: Array, products: Array}>}
   */
  async getCatalogData() {
    const raw = await this.fetchJSON('data/products.json');
    const allProducts = Array.isArray(raw.products) ? raw.products : [];
    const validPublishedProducts = allProducts.filter(
      p => p.published === true && this.isValidProduct(p)
    );

    // Sincronizar categorías disponibles con los productos publicados
    const publishedCategorySet = new Set(validPublishedProducts.map(p => p.category));
    let categories = Array.isArray(raw.categories) ? raw.categories : [];

    // Filtrar categorías para evitar categorías huérfanas sin productos
    categories = categories.filter(cat => cat.id === 'all' || publishedCategorySet.has(cat.id));

    // Agregar automáticamente cualquier categoría nueva presente en productos pero no declarada en categories
    validPublishedProducts.forEach(p => {
      if (!categories.some(c => c.id === p.category)) {
        categories.push({
          id: p.category,
          name: p.categoryName || p.category,
          shortName: p.categoryName || p.category
        });
      }
    });

    return {
      categories,
      products: validPublishedProducts
    };
  },

  /**
   * Devuelve todos los productos publicados.
   * @returns {Promise<Array>}
   */
  async getPublishedProducts() {
    const { products } = await this.getCatalogData();
    return products;
  },

  /**
   * Devuelve únicamente los productos publicados marcados como destacados (featured: true).
   * @param {number} [limit] Límite opcional de productos a devolver
   * @returns {Promise<Array>}
   */
  async getFeaturedProducts(limit) {
    const products = await this.getPublishedProducts();
    const featured = products.filter(p => p.featured === true);
    if (typeof limit === 'number' && limit > 0) {
      return featured.slice(0, limit);
    }
    return featured;
  },

  /**
   * Obtiene las diapositivas del carrusel desde data/carousel.json
   * @returns {Promise<Array>}
   */
  async getCarouselSlides() {
    const raw = await this.fetchJSON('data/carousel.json');
    return Array.isArray(raw.slides) ? raw.slides : [];
  },

  /**
   * Obtiene los artículos y categorías del Diario Botánico desde data/articles.json
   * @returns {Promise<{categories: Array, articles: Array}>}
   */
  async getJournalData() {
    const raw = await this.fetchJSON('data/articles.json');
    return {
      categories: Array.isArray(raw.categories) ? raw.categories : [],
      articles: Array.isArray(raw.articles) ? raw.articles : []
    };
  }
};

window.DataService = DataService;

