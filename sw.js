// Service worker: permite instalar o app e usá-lo offline.
// Ao publicar uma nova versão, troque o número em V para renovar o cache.
const V = 'rotas-v1';
const ARQUIVOS = ['./', './index.html', './manifest.json', './assets/icons/icon.svg', './assets/icons/icon-192.png', './assets/icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => Promise.all(ARQUIVOS.map(a => c.add(a).catch(() => {})))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

// Rede primeiro (sempre a versão mais nova); sem internet, usa o cache.
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  e.respondWith(
    fetch(r).then(res => { const c = res.clone(); caches.open(V).then(x => x.put(r, c)); return res; })
      .catch(() => caches.match(r).then(m => m || caches.match('./index.html')))
  );
});
