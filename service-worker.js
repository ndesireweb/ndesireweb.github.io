// service-worker.js - Cache basique pour une expérience offline (optionnel)
const CACHE_NAME = 'ndesire14-v1';
const urlsToCache = [
  '/',
  '/style.css',
  '/base.css',
  '/layout.css',
  '/components.css',
  '/animations.css',
  '/theme.css',
  '/responsive.css',
  '/main.js',
  '/nav.js',
  '/games-data.js',
  '/avatar.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});