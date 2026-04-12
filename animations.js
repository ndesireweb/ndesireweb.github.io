// animations.js - Gestion des animations au scroll
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in, .card, .game-card, .about-text, .setup-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  elements.forEach(el => {
    // Appliquer le style initial si pas déjà fait
    if (!el.classList.contains('glitch')) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    }
    observer.observe(el);
  });
}

// Rendre la fonction disponible globalement
window.initScrollAnimations = initScrollAnimations;

// Exécuter au chargement si déjà appelé
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
});