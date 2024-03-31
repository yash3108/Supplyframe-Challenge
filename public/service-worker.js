const CACHE_NAME = 'cache-v1';
const urlsToCache = [
    '/',
    '/page1',
    '/css/style.css',
    '/images/coffee_background2.jpg',
    '/images/coffee_logo.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Cache Opened');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            return response || fetch(event.request);
        })
    );
});