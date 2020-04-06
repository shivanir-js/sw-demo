
self.addEventListener('install', function(evt){
    console.log("install successful");
    evt.waitUntil(
        caches.open('images').then(function(cache) {
            console.log("waitUntil");
            return cache.addAll([
            'app.js',
            'img/img_1.jpg',
            'img/img_2.jpg',
            'img/img_3.jpg',
            'img/img_4.jpg',
            'img/img_5.png',
            'img/img_6.jpg',
            'img/img_7.jpg',
            'img/img_8.jpg',
            'img/img_9.jpg',
            'img/img_10.jpg']);
        })
    );
});

self.addEventListener('fetch', function(evt){
    evt.respondWith(
        caches.open('images').then(function(cache){
            return cache.match(evt.request).then(function (response) {
                console.log("Served from Service worker cache",response);
                return response || fetch(evt.request);
            });
        })
    );
});