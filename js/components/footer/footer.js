/**
 * Luxe Glow Cosmetics — js/components/footer/footer.js
 * Comportamiento e inicialización del componente Footer reutilizable
 */

const FooterComponent = {
  _mounted: false,

  async init(selector = '#site-footer') {
    if (this._mounted) return;
    const container = document.querySelector(selector);
    if (!container || !window.ComponentLoader) return;

    try {
      await window.ComponentLoader.mount(container, 'components/footer/footer.html');
      this._mounted = true;

      const yearSpan = container.querySelector('#footer-current-year');
      if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
      }
    } catch (err) {
      console.error('No se pudo inicializar el componente Footer:', err);
    }
  }
};

window.FooterComponent = FooterComponent;

