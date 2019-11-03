const CACHE_NAME = 'portfolio-kingsley';
const RESOURCES_TO_CACHE = [
  '/',
  '/about',
  '/contact',
  '/main',
  '/projects',
  '/resume',
  '/js/app.js',
  '/js/contact.js',
  '/js/main.js',
  '/js/materialize.js',
  '/js/route.js',
  '/js/router.js',
  '/js/sw.js',
  '/img/angular.png',
  '/img/consul.png',
  '/img/git.png',
  '/img/java.png',
  '/img/javascript.png',
  '/img/jenkins.png',
  '/img/kingzo1.jpg',
  '/img/nodejs.png',
  '/img/orange.png',
  '/img/react.png',
  '/img/spring_boot.png',
  '/img/travis.png',
  '/img/typescript.png',
  '/css/custom.css',
  '/css/materialize.css',
  '/fonts/MaterialIcons-Regular.ttf'
];

self.addEventListener('install', async (event) => {
  const cache = await caches.open(CACHE_NAME);
  event.waitUntil(cache.addAll(RESOURCES_TO_CACHE));
});

self.addEventListener('fetch', async (event) => {
  if (event.request.method === 'GET') {
    event.respondWith(
        caches.match(event.request).then((responseFromCache) => {
          return responseFromCache || fetch(event.request).then((responseFromServer) => {
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseFromServer.clone());
              return responseFromServer;
            });
          });
        })
    );
  }
});
