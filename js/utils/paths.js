/**
 * Luxe Glow Cosmetics — js/utils/paths.js
 * Utilidad compartida para resolver rutas relativas entre la raíz (index.html)
 * y las páginas internas ubicadas en /pages/*.html
 */

const Paths = {
  /**
   * Determina el prefijo hacia la raíz del proyecto según la ubicación del documento actual.
   * @returns {string} '.' si estamos en la raíz, '..' si estamos dentro de /pages/
   */
  getRootPrefix() {
    const bodyRoot = document.body ? document.body.getAttribute('data-root') : null;
    if (bodyRoot) {
      return bodyRoot.replace(/\/+$/, '');
    }
    const path = window.location.pathname.replace(/\\/g, '/');
    return path.includes('/pages/') ? '..' : '.';
  },

  /**
   * Convierte una ruta relativa a la raíz del proyecto (ej. 'assets/images/...' o 'pages/tienda.html')
   * en una ruta válida desde la página actual.
   * @param {string} targetPath
   * @returns {string}
   */
  resolve(targetPath) {
    if (!targetPath || typeof targetPath !== 'string') return '';
    const trimmed = targetPath.trim();

    // No modificar anclas locales, URLs absolutas ni esquemas especiales
    if (
      trimmed.startsWith('#') ||
      trimmed.startsWith('http://') ||
      trimmed.startsWith('https://') ||
      trimmed.startsWith('mailto:') ||
      trimmed.startsWith('tel:') ||
      trimmed.startsWith('data:')
    ) {
      return trimmed;
    }

    const cleanTarget = trimmed.replace(/^\.?\//, '');
    const prefix = this.getRootPrefix();
    return `${prefix}/${cleanTarget}`;
  },

  /**
   * Obtiene el identificador de la página actual (ej. 'index', 'tienda', 'nosotros')
   * @returns {string}
   */
  getCurrentPageKey() {
    const bodyPage = document.body ? document.body.getAttribute('data-page') : null;
    if (bodyPage) return bodyPage.toLowerCase();

    const file = (window.location.pathname.replace(/\\/g, '/').split('/').pop() || 'index.html').toLowerCase();
    if (!file || file === '/') return 'index';
    return file.replace('.html', '') || 'index';
  },

  /**
   * Actualiza todos los elementos con atributo [data-route] dentro de un contenedor
   * @param {ParentNode} container
   */
  applyRoutes(container = document) {
    if (!container) return;
    const elements = container.querySelectorAll('[data-route]');
    elements.forEach(el => {
      const route = el.getAttribute('data-route');
      if (!route) return;
      const resolved = this.resolve(route);
      if (el.tagName === 'IMG' || el.tagName === 'SCRIPT') {
        el.setAttribute('src', resolved);
      } else {
        el.setAttribute('href', resolved);
      }
    });
  }
};

window.Paths = Paths;

