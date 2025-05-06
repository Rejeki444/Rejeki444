
const CACHE_NAME = "rejeki444-cache-v1";
const urlsToCache = [
  "/index.html",
  "/assets/style.css",
  "/assets/jackpot.mp3"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
