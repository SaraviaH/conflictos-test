/**
 * Luxe Glow Cosmetics — js/core/app-init.js
 * Inicialización centralizada de componentes compartidos (Header, Footer, Carrito y Rutas)
 */

const LuxeApp = {
  _readyPromise: null,
  _initialized: false,

  init() {
    if (this._readyPromise) return this._readyPromise;

    this._readyPromise = (async () => {
      if (this._initialized) return;
      this._initialized = true;

      // Resolver rutas estáticas declaradas en el cuerpo de la página
      if (window.Paths) {
        window.Paths.applyRoutes(document);
      }

      // Cargar Header y Footer en paralelo
      const tasks = [];
      if (window.HeaderComponent) {
        tasks.push(window.HeaderComponent.init());
      }
      if (window.FooterComponent) {
        tasks.push(window.FooterComponent.init());
      }
      await Promise.all(tasks);

      // Inicializar Carrito una vez montado el Header (que contiene el offcanvas y contador)
      if (window.Cart) {
        await window.Cart.init();
      }

      document.dispatchEvent(new CustomEvent('luxe:ready'));
    })();

    return this._readyPromise;
  }
};

window.LuxeApp = LuxeApp;

document.addEventListener('DOMContentLoaded', () => {
  LuxeApp.init();
});

