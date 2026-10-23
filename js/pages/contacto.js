/**
 * Luxe Glow Cosmetics — js/pages/contacto.js
 * Lógica exclusiva para validación y envío simulado de formularios en pages/contacto.html
 */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const newsletterForm = document.getElementById('newsletter-form');

  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.classList.add('was-validated');
        return;
      }

      if (window.Cart) {
        window.Cart.showToast('¡Mensaje enviado con éxito! Nuestro equipo de asesoría te responderá en menos de 24 horas.');
      }

      contactForm.reset();
      contactForm.classList.remove('was-validated');
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      if (!input || !input.value || !input.checkValidity()) {
        if (input) input.reportValidity();
        return;
      }

      if (window.Cart) {
        window.Cart.showToast('¡Gracias por suscribirte! Recibirás nuestras novedades y lanzamientos exclusivos.');
      }
      newsletterForm.reset();
    });
  }
});

