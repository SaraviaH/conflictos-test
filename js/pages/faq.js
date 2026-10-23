/**
 * Luxe Glow Cosmetics — js/pages/faq.js
 * Búsqueda interactiva en vivo para las preguntas frecuentes (pages/faq.html)
 */

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('faq-search-input');
  const accordion = document.getElementById('faqAccordion');
  const emptyBox = document.getElementById('faq-empty-state');
  if (!searchInput || !accordion) return;

  const items = Array.from(accordion.querySelectorAll('.accordion-item'));

  searchInput.addEventListener('input', e => {
    const query = e.target.value.toLowerCase().trim();
    let visibleCount = 0;

    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      const match = query === '' || text.includes(query);
      item.classList.toggle('d-none', !match);
      if (match) visibleCount += 1;
    });

    if (emptyBox) {
      emptyBox.classList.toggle('d-none', visibleCount > 0);
    }
  });
});

