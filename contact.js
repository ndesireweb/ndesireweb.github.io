// contact.js - Validation et envoi AJAX du formulaire (optionnel, Formspree gère déjà)
(function() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    // On peut ajouter une validation supplémentaire ici
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!email.includes('@') || !email.includes('.')) {
      e.preventDefault();
      alert('Veuillez entrer une adresse email valide.');
      return;
    }
    
    if (message.trim().length < 10) {
      e.preventDefault();
      alert('Le message doit contenir au moins 10 caractères.');
      return;
    }
    
    // Sinon, on laisse Formspree faire le travail
    console.log('Formulaire envoyé');
  });
})();