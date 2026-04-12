// utils.js - Fonctions utilitaires diverses
window.Utils = {
  // Formater une date
  formatDate: (date) => {
    return new Date(date).toLocaleDateString('fr-FR');
  },
  
  // Debounce pour les events
  debounce: (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }
};