/* Safiverse offline cache: network first (fresh version), but if the network is slow (>3.5 s) open the saved copy at once */
const C = "sv-v20";
self.addEventListener("install", e => { e.waitUntil(caches.open(C).then(c => c.addAll(["./", "./index.html"])).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("sv-") && k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => { const r = e.request; if (r.method !== "GET" || !r.url.startsWith(self.location.origin)) return;
  const net = fetch(r, r.mode === "navigate" ? { cache: "no-store" } : {}).then(res => { if (res.ok) { const cp = res.clone(); caches.open(C).then(c => c.put(r, cp)); } return res; });
  const cached = () => caches.match(r).then(m => m || caches.match("./index.html"));
  const slow = new Promise(ok => setTimeout(ok, 3500)).then(cached).then(m => m || net);
  e.respondWith(Promise.race([net.catch(cached), slow]).then(x => x || net)); e.waitUntil(net.catch(() => {})); });
