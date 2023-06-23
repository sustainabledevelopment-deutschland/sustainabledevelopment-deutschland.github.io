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
    await cache.addAll(["/1/","/2/","/3/","/4/","/5/","/6/","/7/","/8/","/9/","/10/","/11/","/12/","/13/","/14/","/15/","/16/","/17/","/en/1/","/en/2/","/en/3/","/en/4/","/en/5/","/en/6/","/en/7/","/en/8/","/en/9/","/en/10/","/en/11/","/en/12/","/en/13/","/en/14/","/en/15/","/en/16/","/en/17/"]);
    await cache.addAll(["/10-2/","/7-2-a/","/2-1-a/","/1-1-ab/","/9-1-a/","/6-2-ab/","/15-1/","/12-1-b/","/5-1-e/","/7-1-ab/","/14-1-a/","/13-1-a/","/3-3/","/14-1-b/","/6-1-a/","/4-2-ab/","/5-1-d/","/8-6/","/4-1-a/","/8-5-ab/","/16-3-ab/","/3-1-cd/","/12-3-ab/","/12-1-a/","/10-1/","/17-3/","/3-1-ab/","/13-1-b/","/5-1-a/","/17-1/","/3-1-f/","/17-2/","/16-2/","/11-2-b/","/12-2/","/3-2-b/","/11-4/","/11-1-b/","/3-1-e/","/8-4/","/8-3/","/11-1-c/","/2-2/","/9-1-b/","/2-1-b/","/16-1/","/11-1-a/","/11-2-a/","/8-1/","/6-1-b/","/8-2-ab/","/5-1-bc/","/11-3/","/3-2-a/","/15-3-ab/","/11-2-c/","/8-2-c/","/7-2-b/","/15-2/","/4-1-b/","/en/10-2/","/en/7-2-a/","/en/2-1-a/","/en/1-1-ab/","/en/9-1-a/","/en/6-2-ab/","/en/15-1/","/en/12-1-b/","/en/5-1-e/","/en/7-1-ab/","/en/14-1-a/","/en/13-1-a/","/en/3-3/","/en/14-1-b/","/en/6-1-a/","/en/4-2-ab/","/en/5-1-d/","/en/8-6/","/en/4-1-a/","/en/8-5-ab/","/en/16-3-ab/","/en/3-1-cd/","/en/12-3-ab/","/en/12-1-a/","/en/10-1/","/en/17-3/","/en/3-1-ab/","/en/13-1-b/","/en/5-1-a/","/en/17-1/","/en/3-1-f/","/en/17-2/","/en/16-2/","/en/11-2-b/","/en/12-2/","/en/3-2-b/","/en/11-4/","/en/11-1-b/","/en/3-1-e/","/en/8-4/","/en/8-3/","/en/11-1-c/","/en/2-2/","/en/9-1-b/","/en/2-1-b/","/en/16-1/","/en/11-1-a/","/en/11-2-a/","/en/8-1/","/en/6-1-b/","/en/8-2-ab/","/en/5-1-bc/","/en/11-3/","/en/3-2-a/","/en/15-3-ab/","/en/11-2-c/","/en/8-2-c/","/en/7-2-b/","/en/15-2/","/en/4-1-b/"]);
    await cache.addAll(["https://dns-indikatoren.de/sdg-data-pub/de/comb/10-2.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/7-2-a.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/2-1-a.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/1-1-ab.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/9-1-a.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/6-2-ab.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/15-1.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/12-1-b.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/5-1-e.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/7-1-ab.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/14-1-a.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/13-1-a.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/3-3.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/14-1-b.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/6-1-a.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/4-2-ab.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/5-1-d.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/8-6.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/4-1-a.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/8-5-ab.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/16-3-ab.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/3-1-cd.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/12-3-ab.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/12-1-a.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/10-1.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/17-3.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/3-1-ab.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/13-1-b.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/5-1-a.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/17-1.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/3-1-f.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/17-2.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/16-2.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/11-2-b.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/12-2.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/3-2-b.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/11-4.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/11-1-b.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/3-1-e.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/8-4.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/8-3.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/11-1-c.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/2-2.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/9-1-b.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/2-1-b.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/16-1.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/11-1-a.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/11-2-a.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/8-1.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/6-1-b.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/8-2-ab.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/5-1-bc.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/11-3.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/3-2-a.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/15-3-ab.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/11-2-c.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/8-2-c.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/7-2-b.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/15-2.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/4-1-b.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/10-2.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/7-2-a.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/2-1-a.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/1-1-ab.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/9-1-a.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/6-2-ab.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/15-1.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/12-1-b.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/5-1-e.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/7-1-ab.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/14-1-a.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/13-1-a.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/3-3.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/14-1-b.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/6-1-a.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/4-2-ab.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/5-1-d.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/8-6.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/4-1-a.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/8-5-ab.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/16-3-ab.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/3-1-cd.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/12-3-ab.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/12-1-a.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/10-1.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/17-3.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/3-1-ab.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/13-1-b.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/5-1-a.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/17-1.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/3-1-f.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/17-2.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/16-2.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/11-2-b.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/12-2.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/3-2-b.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/11-4.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/11-1-b.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/3-1-e.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/8-4.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/8-3.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/11-1-c.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/2-2.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/9-1-b.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/2-1-b.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/16-1.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/11-1-a.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/11-2-a.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/8-1.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/6-1-b.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/8-2-ab.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/5-1-bc.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/11-3.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/3-2-a.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/15-3-ab.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/11-2-c.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/8-2-c.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/7-2-b.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/15-2.json","https://dns-indikatoren.de/sdg-data-pub/de/comb/4-1-b.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/10-2.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/7-2-a.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/2-1-a.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/1-1-ab.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/9-1-a.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/6-2-ab.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/15-1.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/12-1-b.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/5-1-e.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/7-1-ab.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/14-1-a.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/13-1-a.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/3-3.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/14-1-b.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/6-1-a.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/4-2-ab.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/5-1-d.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/8-6.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/4-1-a.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/8-5-ab.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/16-3-ab.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/3-1-cd.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/12-3-ab.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/12-1-a.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/10-1.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/17-3.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/3-1-ab.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/13-1-b.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/5-1-a.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/17-1.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/3-1-f.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/17-2.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/16-2.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/11-2-b.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/12-2.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/3-2-b.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/11-4.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/11-1-b.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/3-1-e.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/8-4.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/8-3.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/11-1-c.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/2-2.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/9-1-b.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/2-1-b.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/16-1.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/11-1-a.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/11-2-a.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/8-1.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/6-1-b.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/8-2-ab.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/5-1-bc.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/11-3.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/3-2-a.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/15-3-ab.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/11-2-c.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/8-2-c.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/7-2-b.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/15-2.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/4-1-b.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/10-2.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/7-2-a.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/2-1-a.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/1-1-ab.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/9-1-a.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/6-2-ab.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/15-1.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/12-1-b.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/5-1-e.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/7-1-ab.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/14-1-a.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/13-1-a.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/3-3.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/14-1-b.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/6-1-a.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/4-2-ab.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/5-1-d.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/8-6.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/4-1-a.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/8-5-ab.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/16-3-ab.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/3-1-cd.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/12-3-ab.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/12-1-a.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/10-1.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/17-3.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/3-1-ab.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/13-1-b.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/5-1-a.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/17-1.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/3-1-f.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/17-2.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/16-2.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/11-2-b.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/12-2.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/3-2-b.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/11-4.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/11-1-b.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/3-1-e.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/8-4.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/8-3.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/11-1-c.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/2-2.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/9-1-b.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/2-1-b.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/16-1.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/11-1-a.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/11-2-a.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/8-1.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/6-1-b.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/8-2-ab.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/5-1-bc.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/11-3.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/3-2-a.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/15-3-ab.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/11-2-c.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/8-2-c.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/7-2-b.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/15-2.json","https://dns-indikatoren.de/sdg-data-pub/en/comb/4-1-b.json"]);
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
