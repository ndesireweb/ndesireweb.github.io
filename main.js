// main.js - Point d'entrée JavaScript
(function() {
  console.log('NDesire14 - Site chargé');
  
  // Remplir les jeux en vedette sur l'accueil
  const featuredContainer = document.getElementById('featuredGames');
  if (featuredContainer && window.gamesData) {
    // Prendre les 3 premiers jeux
    const featured = window.gamesData.slice(0, 3);
    featured.forEach(game => {
      const card = document.createElement('div');
      card.className = 'card glass fade-in';
      card.innerHTML = `
        <div class="card-img"><i class="fas ${game.icon}"></i></div>
        <h3>${game.title}</h3>
        <p>${game.rank}</p>
        <span class="tag">${game.tag}</span>
      `;
      featuredContainer.appendChild(card);
    });
  }
  
  // Initialiser les animations au scroll
  if (window.initScrollAnimations) {
    window.initScrollAnimations();
  }
})();