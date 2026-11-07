/* ===== activity log → Minaraverse sheet ("Ziyarətlər") and Telegram. Anonymous id; name / Instagram only when the student typed them. ===== */
const TRACK_ON = () => typeof ADMIN_API === "string" && ADMIN_API && !/claude\.ai|claudeusercontent|localhost|^file:/.test(location.host || location.protocol) && !(typeof SAFI !== "undefined" && SAFI);
const trName = () => { try { const pr = typeof PROFILE === "function" ? PROFILE() : null; return (pr && pr.first ? (pr.first + " " + (pr.last || "")).trim() : "") || NAME || ""; } catch (e) { return NAME || ""; } };
const trIg = () => { try { const pr = typeof PROFILE === "function" ? PROFILE() : null; return (pr && pr.ig) || ""; } catch (e) { return ""; } };
function track(ev, extra) {
  if (!TRACK_ON()) return;
  try { const body = JSON.stringify(Object.assign({ a: "ev", ev, uid: typeof uid === "function" ? uid() : "", name: trName().slice(0, 40), ig: trIg().slice(0, 40), lang: LANG,
      dev: /Mobi|Android|iPhone|iPad/.test(navigator.userAgent) ? "mobile" : "desktop", ref: (document.referrer || "").replace(/^https?:\/\//, "").split("/")[0].slice(0, 60) }, extra || {}));
    fetch(ADMIN_API, { method: "POST", body, keepalive: true, redirect: "follow" }).catch(() => {}); } catch (e) {}
}
/* one "visit" per browser session; pages, stories and chapters once per session each; UI actions once per kind+story per session */
(() => {
  const seen = new Set(), once = (k, fn) => { if (seen.has(k)) return; seen.add(k); fn(); };
  const look = () => { try {
    if (!sessionStorage.getItem("mv-tv")) { sessionStorage.setItem("mv-tv", "1"); track("visit"); }
    const h = location.hash.slice(1) || "home", k = h.split("-")[0], ch = h.split("-")[1];
    if (typeof STORIES === "object" && STORIES[k]) { once("s:" + k, () => track("view", { story: k })); if (ch && /^\d+$/.test(ch)) once("c:" + h, () => track("chapter", { story: k, ch: String(+ch - 1) })); }
    else if (k !== "home" && k !== "admin") once("p:" + k, () => track("page", { story: k })); } catch (e) {} };
  addEventListener("hashchange", look); addEventListener("load", look);
  document.addEventListener("click", e => { try {
    const st = (location.hash.slice(1) || "").split("-")[0] || "home", t = e.target;
    if (t.closest("[data-say]")) once("u:audio:" + st, () => track("ui", { story: st, score: "audio" }));
    else if (t.closest(".trd summary, .trd > summary, details.trd")) once("u:tr:" + st, () => track("ui", { story: st, score: "translate" }));
    else if (t.closest("[data-siteshare]")) once("u:share", () => track("ui", { story: st, score: "share" }));
    else if (t.closest(".h-app, a[href='#app']")) once("u:app", () => track("ui", { story: st, score: "safiverse" }));
    else if (t.closest("a[href='#level'], .h-cta[href='#level']")) once("u:level", () => track("ui", { story: st, score: "level-cta" }));
    else if (t.closest(".qz-opt, .dx-opt, .hl-opt, [data-i]") && st !== "home") once("u:answer:" + st, () => track("ui", { story: st, score: "answer" }));
  } catch (er) {} }, true);
})();
