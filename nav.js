// nav.js - Gestion du menu responsive
(function() {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }
  
  // Fermer le menu si on clique en dehors (optionnel)
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
    }
  });
})();