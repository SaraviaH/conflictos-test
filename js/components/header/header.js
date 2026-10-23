/**
 * Luxe Glow Cosmetics — js/components/header/header.js
 * Comportamiento e inicialización del componente Header reutilizable
 */

const HeaderComponent = {
  _mounted: false,
  dropdownKeys: ['ritual', 'ingredientes', 'diario', 'faq', 'envios'],

  async init(selector = '#site-header') {
    if (this._mounted) return;
    const container = document.querySelector(selector);
    if (!container || !window.ComponentLoader) return;

    try {
      await window.ComponentLoader.mount(container, 'components/header/header.html');
      this._mounted = true;
      this.highlightActiveNav(container);
    } catch (err) {
      console.error('No se pudo inicializar el componente Header:', err);
    }
  },

  highlightActiveNav(container) {
    const currentKey = window.Paths ? window.Paths.getCurrentPageKey() : 'index';

    // Marcar enlace activo en barra principal o en menú desplegable
    const navItems = container.querySelectorAll('[data-nav-key]');
    navItems.forEach(link => {
      const key = link.getAttribute('data-nav-key');
      if (key === currentKey) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });

    // Si la página actual pertenece al menú "Descubre", resaltar también el botón padre
    const dropdownToggle = container.querySelector('#navbarDescubreDropdown');
    if (dropdownToggle) {
      dropdownToggle.classList.toggle('active', this.dropdownKeys.includes(currentKey));
    }
  }
};

window.HeaderComponent = HeaderComponent;

