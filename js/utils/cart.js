/**
 * Luxe Glow Cosmetics — js/utils/cart.js
 * Gestión del carrito de compras persistente (localStorage), offcanvas y notificaciones Toast
 */

const Cart = {
  storageKey: 'luxe_cart',
  products: [],
  cart: [],
  _initialized: false,

  _load() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          this.cart = parsed.filter(item => item && item.product && item.qty > 0);
        }
      }
    } catch (e) {
      this.cart = [];
    }
  },

  _save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.cart));
    } catch (e) {
      // Ignorar errores de cuota de almacenamiento
    }
  },

  _count() {
    return this.cart.reduce((total, item) => total + item.qty, 0);
  },

  _subtotal() {
    return this.cart.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  },

  async init() {
    this._load();
    try {
      if (window.DataService) {
        this.products = await window.DataService.getPublishedProducts();
      }
    } catch (e) {
      this.products = [];
    }
    this._initialized = true;
    this.updateBadge();
    this.renderOffcanvas();
  },

  updateBadge() {
    const count = this._count();
    const el = document.getElementById('cart-count');
    if (el) el.textContent = count;
    const el2 = document.getElementById('navbar-cart-count');
    if (el2) el2.textContent = count;
  },

  async add(productId, qty = 1) {
    if (this.products.length === 0 && window.DataService) {
      try {
        this.products = await window.DataService.getPublishedProducts();
      } catch (e) {
        // Silencioso
      }
    }

    const numericId = Number(productId);
    const product = this.products.find(p => p.id === numericId || p.id === productId);
    if (!product) return;

    const quantity = Math.max(1, Number(qty) || 1);
    const idx = this.cart.findIndex(i => i.id === product.id);
    if (idx > -1) {
      this.cart[idx].qty += quantity;
      this.cart[idx].product = product;
    } else {
      this.cart.push({ id: product.id, product, qty: quantity });
    }

    this._save();
    this.updateBadge();
    this.renderOffcanvas();

    const label = quantity > 1 ? `${quantity}x ${product.name}` : product.name;
    this.showToast(`¡<b>${label}</b> añadido al carrito!`);

    const off = document.getElementById('cartOffcanvas');
    if (off && window.bootstrap) {
      try {
        window.bootstrap.Offcanvas.getOrCreateInstance(off).show();
      } catch (e) {
        // Ignorar si ya está visible
      }
    }
  },

  remove(productId) {
    const numericId = Number(productId);
    this.cart = this.cart.filter(i => i.id !== numericId && i.id !== productId);
    this._save();
    this.updateBadge();
    this.renderOffcanvas();
  },

  updateQty(productId, delta) {
    const numericId = Number(productId);
    const item = this.cart.find(i => i.id === numericId || i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      this.remove(productId);
    } else {
      this._save();
      this.updateBadge();
      this.renderOffcanvas();
    }
  },

  checkout() {
    this.showToast('¡Pedido simulado con éxito! Gracias por tu preferencia en Luxe Glow.');
    this.cart = [];
    this._save();
    this.updateBadge();
    this.renderOffcanvas();

    const off = document.getElementById('cartOffcanvas');
    if (off && window.bootstrap) {
      try {
        window.bootstrap.Offcanvas.getInstance(off)?.hide();
      } catch (e) {
        // Ignorar
      }
    }
  },

  renderOffcanvas() {
    const body = document.getElementById('cart-body');
    const footer = document.getElementById('cart-footer');
    if (!body || !footer) return;

    const count = this._count();
    if (count === 0) {
      body.innerHTML = `
        <div class="text-center py-5">
          <i class="fas fa-shopping-basket fs-1 text-muted mb-3 opacity-50" aria-hidden="true"></i>
          <p class="text-muted fw-500">Tu bolsa de compras está vacía actualmente.</p>
          <button type="button" class="btn btn-luxe-outline btn-sm mt-2" data-bs-dismiss="offcanvas">
            Explorar Cosméticos
          </button>
        </div>
      `;
      footer.innerHTML = '';
      footer.classList.add('d-none');
      return;
    }

    footer.classList.remove('d-none');
    body.innerHTML = `
      <div class="list-group list-group-flush">
        ${this.cart.map(item => {
          const imgSrc = window.Paths ? window.Paths.resolve(item.product.image) : item.product.image;
          return `
            <div class="list-group-item px-0 py-3 border-bottom">
              <div class="d-flex align-items-center">
                <img src="${imgSrc}" alt="${item.product.imageAlt || item.product.name}" class="cart-item-img me-3">
                <div class="flex-grow-1">
                  <h6 class="mb-0 text-burgundy-dark fw-bold fs-6">${item.product.name}</h6>
                  <small class="text-gold fw-bold">$${item.product.price.toFixed(2)} c/u</small>
                  <div class="d-flex align-items-center mt-2">
                    <button type="button" class="btn btn-sm btn-outline-secondary py-0 px-2 rounded-circle" onclick="Cart.updateQty(${item.id}, -1)" aria-label="Disminuir cantidad de ${item.product.name}">-</button>
                    <span class="mx-2 fw-bold text-dark">${item.qty}</span>
                    <button type="button" class="btn btn-sm btn-outline-secondary py-0 px-2 rounded-circle" onclick="Cart.updateQty(${item.id}, 1)" aria-label="Aumentar cantidad de ${item.product.name}">+</button>
                  </div>
                </div>
                <div class="text-end ms-2">
                  <span class="fw-bold text-burgundy-dark fs-6">$${(item.product.price * item.qty).toFixed(2)}</span>
                  <div>
                    <button type="button" class="btn btn-sm text-danger border-0 p-0 mt-1" onclick="Cart.remove(${item.id})" aria-label="Eliminar ${item.product.name} del carrito">
                      <i class="fas fa-trash-alt" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    footer.innerHTML = `
      <div class="d-flex justify-content-between align-items-center mb-3">
        <span class="fw-bold text-muted">Subtotal:</span>
        <span class="fs-4 fw-bold text-burgundy-dark">$${this._subtotal().toFixed(2)}</span>
      </div>
      <button type="button" class="btn btn-luxe-primary w-100 py-2" onclick="Cart.checkout()">
        Procesar Compra <i class="fas fa-arrow-right ms-2" aria-hidden="true"></i>
      </button>
    `;
  },

  showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
      document.body.appendChild(container);
    }

    const id = 'toast-' + Date.now();
    const html = `
      <div id="${id}" class="toast align-items-center text-white bg-burgundy border-0 show shadow-lg" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body">
            <i class="fas fa-check-circle text-gold me-2" aria-hidden="true"></i> ${message}
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Cerrar notificación"></button>
        </div>
      </div>
    `;

    container.insertAdjacentHTML('beforeend', html);
    const el = document.getElementById(id);
    setTimeout(() => {
      if (el) el.remove();
    }, 4000);
  }
};

window.Cart = Cart;

