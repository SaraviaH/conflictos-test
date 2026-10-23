/**
 * Luxe Glow Cosmetics — js/core/component-loader.js
 * Mecanismo compartido de carga y caché de fragmentos HTML reutilizables
 */

const ComponentLoader = {
  _templateCache: {},

  /**
   * Obtiene el contenido HTML de un componente desde /components/ y lo guarda en caché
   * @param {string} componentPath Ruta relativa desde la raíz (ej. 'components/header/header.html')
   * @returns {Promise<string>}
   */
  async fetchTemplate(componentPath) {
    if (this._templateCache[componentPath]) {
      return this._templateCache[componentPath];
    }

    const resolvedUrl = window.Paths ? window.Paths.resolve(componentPath) : componentPath;
    const response = await fetch(resolvedUrl);
    if (!response.ok) {
      throw new Error(`Error al cargar el componente ${componentPath} (HTTP ${response.status})`);
    }

    const html = await response.text();
    this._templateCache[componentPath] = html;
    return html;
  },

  /**
   * Carga un componente HTML en un elemento contenedor del DOM y actualiza sus rutas relativas
   * @param {string|HTMLElement} target Selector o nodo donde inyectar el componente
   * @param {string} componentPath Ruta relativa desde la raíz
   * @returns {Promise<HTMLElement|null>}
   */
  async mount(target, componentPath) {
    const container = typeof target === 'string' ? document.querySelector(target) : target;
    if (!container) return null;

    const html = await this.fetchTemplate(componentPath);
    container.innerHTML = html;

    if (window.Paths) {
      window.Paths.applyRoutes(container);
    }

    return container;
  }
};

window.ComponentLoader = ComponentLoader;

