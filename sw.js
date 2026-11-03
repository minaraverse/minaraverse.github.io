/* Minaraverse offline cache: page first from network, falls back to cache */
const C = "mv-v7";
self.addEventListener("install", e => { e.waitUntil(caches.open(C).then(c => c.addAll(["./", "./index.html", "./img/minara.jpg"])).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => { const r = e.request; if (r.method !== "GET" || !r.url.startsWith(self.location.origin)) return;
  e.respondWith(fetch(r, r.mode === "navigate" || /index\.html$|\/$/.test(new URL(r.url).pathname) ? { cache: "no-store" } : {}).then(res => { const cp = res.clone(); caches.open(C).then(c => c.put(r, cp)); return res; }).catch(() => caches.match(r).then(m => m || caches.match("./index.html")))); });
