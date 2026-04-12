# 🎮 NDesire14 – Site Officiel

> **Nathan Rehman · 17 ans · Joueur compétitif & speedrunner**  
> *Pas de Discord. Pas d'Insta. Juste ici.*

Bienvenue sur le dépôt de mon site personnel.  
Un espace 100% gaming, sans aucun réseau social, avec un formulaire de contact direct.

## 🚀 Démo en ligne
👉 **[ndesire14.github.io](https://ndesire14.github.io)** *(après déploiement)*

## 📁 Structure du projet
Tous les fichiers sont à la racine (pas de sous-dossiers) pour un déploiement ultra simple.

```
NDesire14.github.io/
├── index.html
├── a-propos.html
├── jeux.html
├── contact.html
├── merci.html
├── 404.html
├── faq.html
├── confidentialite.html
├── mentions-legales.html
├── plan-du-site.html
├── changelog.html
├── setup.html
├── liens.html
├── style.css (importe les autres CSS)
├── base.css
├── layout.css
├── components.css
├── animations.css
├── theme.css
├── responsive.css
├── main.js
├── nav.js
├── contact.js
├── animations.js
├── games-data.js
├── utils.js
├── robots.txt
├── sitemap.xml
├── humans.txt
├── manifest.json
├── service-worker.js
├── avatar.jpg (à fournir)
├── hero-bg.jpg (optionnel)
├── favicon.ico (à générer)
└── README.md
```

## ✨ Fonctionnalités
- **Design gaming sombre** (glassmorphism + néon)
- **100% responsive**
- **Formulaire de contact direct** via Formspree (zéro réseau social)
- **Génération dynamique des jeux** depuis `games-data.js`
- **Pages complètes** : Accueil, À propos, Jeux, Contact, FAQ, mentions légales, etc.
- **Animations au scroll** et effets glitch
- **Service Worker** pour un accès hors ligne basique
- **SEO optimisé** (sitemap, robots, meta tags)

## ⚙️ Configuration du formulaire de contact
1. Crée un compte gratuit sur [Formspree.io](https://formspree.io/).
2. Crée un nouveau formulaire et récupère l'ID dans l'URL (ex: `xlezkywr`).
3. Dans `contact.html`, remplace `xlezkywr` par ton ID :
   ```html
   <form action="https://formspree.io/f/TON_ID" method="POST">
   ```
4. Les messages arriveront directement sur l'email associé à ton compte Formspree.

## 🚀 Déploiement sur GitHub Pages
1. Crée un dépôt nommé **`NDesire14.github.io`** (remplace par ton pseudo GitHub).
2. Pousse tous les fichiers dans ce dépôt.
3. Active GitHub Pages dans `Settings > Pages` (branche `main`).
4. Ton site sera en ligne dans quelques minutes.

## 🎨 Personnalisation
- **Couleurs** : Modifie les variables dans `base.css` (section `:root`).
- **Jeux** : Édite `games-data.js`.
- **Images** : Remplace `avatar.jpg` et ajoute un `hero-bg.jpg` si souhaité.
- **Textes** : Modifie directement les fichiers HTML.

## 📄 Licence
MIT – Tu peux réutiliser ce code librement.

## 🙏 Crédits
- Inspiration : [Lolo'Tech](https://github.com/Lolo-Tech35/lolo-tech) (mon pote Lohann)
- Icônes : Font Awesome
- Formulaire : Formspree

---

**NDesire14 · Nathan Rehman · 17 ans**  
*Construit avec passion, pas par une IA basique.*