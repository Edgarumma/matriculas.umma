
//asignar un nombre y versión al cache
var CACHE_NAME = 'matriculas.umma';
var urlsToCache = [
    '/img/perfil.jpg',
    '/estilos/style.css',
    '/script/lectorqr.js',
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Cache open!');
                return cache.addAll(urlsToCache);
            })
    );
});


self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
