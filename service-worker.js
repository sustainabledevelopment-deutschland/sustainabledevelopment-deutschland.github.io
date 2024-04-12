importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

const {registerRoute, setDefaultHandler} = workbox.routing;
const {CacheableResponsePlugin} = workbox.cacheableResponse;
const {ExpirationPlugin} = workbox.expiration;
const {precacheAndRoute} = workbox.precaching;
const {offlineFallback} = workbox.recipes;

const {
    NetworkFirst,
    StaleWhileRevalidate,
    CacheFirst,
    NetworkOnly,
} = workbox.strategies;
const cacheName = 'install-cache';
setDefaultHandler(new NetworkOnly());
offlineFallback();


// Precache the indicator/goal pages.
self.addEventListener('install', (event) => {
  const populateCache = async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll(["/1/","/2/","/3/","/4/","/5/","/6/","/7/","/8/","/9/","/10/","/11/","/12/","/13/","/14/","/15/","/16/","/17/"]);
    await cache.addAll(["/4-1-b/","/15-1/","/2-1-b/","/12-4/","/5-1-bc/","/17-1/","/6-2-ab/","/2-2/","/1-1-ab/","/3-2-b/","/16-2-ab/","/13-2/","/16-1-x/","/15-2/","/12-1-a/","/8-5-ab/","/7-1-ab/","/11-1-c/","/12-2/","/11-2-c/","/6-1-b/","/8-4/","/12-1-b/","/15-4/","/9-1-b/","/10-2/","/4-1-d/","/9-1-a/","/3-3/","/7-2-a/","/8-1/","/3-1-ab/","/8-3/","/11-1-b/","/15-3-ab/","/4-1-c/","/5-1-a/","/11-4-x/","/5-1-d/","/17-3/","/8-6/","/3-2-a/","/7-2-b/","/8-2-c/","/11-2-a/","/2-1-a/","/3-1-cd/","/16-1/","/10-1/","/8-5-c/","/11-3/","/3-1-e/","/3-1-ab-x/","/6-1-a/","/5-1-f/","/3-1-f/","/13-1-b/","/5-1-e/","/4-1-a/","/14-1-a/","/14-1-b/","/13-1-a/","/11-1-a/","/12-3-abc/","/8-2-ab/","/17-2/","/4-2-ab/","/11-2-b/"]);
    await cache.addAll(["https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/4-1-b.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/15-1.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/2-1-b.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/12-4.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/5-1-bc.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/17-1.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/6-2-ab.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/2-2.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/1-1-ab.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/3-2-b.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/16-2-ab.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/13-2.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/16-1-x.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/15-2.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/12-1-a.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/8-5-ab.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/7-1-ab.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/11-1-c.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/12-2.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/11-2-c.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/6-1-b.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/8-4.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/12-1-b.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/15-4.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/9-1-b.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/10-2.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/4-1-d.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/9-1-a.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/3-3.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/7-2-a.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/8-1.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/3-1-ab.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/8-3.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/11-1-b.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/15-3-ab.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/4-1-c.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/5-1-a.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/11-4-x.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/5-1-d.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/17-3.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/8-6.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/3-2-a.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/7-2-b.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/8-2-c.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/11-2-a.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/2-1-a.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/3-1-cd.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/16-1.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/10-1.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/8-5-c.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/11-3.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/3-1-e.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/3-1-ab-x.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/6-1-a.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/5-1-f.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/3-1-f.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/13-1-b.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/5-1-e.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/4-1-a.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/14-1-a.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/14-1-b.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/13-1-a.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/11-1-a.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/12-3-abc.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/8-2-ab.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/17-2.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/4-2-ab.json","https://dns-indikatoren-dialogfassung.github.io/data-pub/de/comb/11-2-b.json"]);
  };

  event.waitUntil(populateCache());
});


// Cache page navigations (html) with a Network First strategy
registerRoute(
  // Check to see if the request is a navigation to a new page
  ({ request }) => request.mode === 'navigate',
  // Use a Network First caching strategy
  new NetworkFirst({
    cacheName: cacheName,
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
);

// Cache CSS, JS, and Web Worker requests with a Stale While Revalidate strategy
registerRoute(
  // Check to see if the request's destination is style for stylesheets, script for JavaScript, or worker for web worker
  ({ request }) =>
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'worker',
  // Use a Stale While Revalidate caching strategy
  new StaleWhileRevalidate({
    cacheName: cacheName,
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
);

// Cache images/fonts with a Cache First strategy
registerRoute(
  // Check to see if the request's destination is style for an image
  ({ request }) => ['image', 'font'].includes(request.destination),
  // Use a Cache First caching strategy
  new CacheFirst({
    cacheName: cacheName,
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      // Don't cache more than 50 items, and expire them after 30 days
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
      }),
    ],
  }),
);

// Cache json with a Network First strategy.
registerRoute(
  /.*\.(json|geojson|zip|csv)$/,
  new NetworkFirst({
    cacheName: cacheName,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ]
  }),
);
