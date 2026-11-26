/* Apex Site Brief service worker.
   Network first for the app's own files, so updates always reach users;
   the cached copy is used only when the network fails (offline).
   Lookups to outside data services are never intercepted or cached. */
const CACHE = 'apex-site-brief-v1';
const SCOPE = '/tools/site-brief/';
const SHELL = [SCOPE, SCOPE + 'manifest.webmanifest', SCOPE + 'icon-192.png', SCOPE + 'icon-512.png', SCOPE + 'apple-touch-icon.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).catch(() => {}).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k.startsWith('apex-site-brief-') && k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // only this app's own files; every API lookup goes straight to the network
  if (url.origin !== self.location.origin || !url.pathname.startsWith(SCOPE) || url.pathname.endsWith('/sw.js')) return;
  const isPage = req.mode === 'navigate' || url.pathname === SCOPE || url.pathname === SCOPE + 'index.html';
  const key = isPage ? SCOPE : url.pathname;
  e.respondWith(
    fetch(req).then((res) => {
      if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(key, copy)).catch(() => {}); }
      return res;
    }).catch(() => caches.match(key).then((hit) => hit || Response.error()))
  );
});
