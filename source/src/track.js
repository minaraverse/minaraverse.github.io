/* ===== activity log → Minaraverse sheet ("Ziyarətlər") and Telegram. Anonymous id; the name only when the student typed one. ===== */
const TRACK_ON = () => typeof ADMIN_API === "string" && ADMIN_API && !/claude\.ai|claudeusercontent|localhost|^file:/.test(location.host || location.protocol) && !(typeof SAFI !== "undefined" && SAFI);
const trName = () => { try { const pr = typeof PROFILE === "function" ? PROFILE() : null; return (pr && pr.first ? (pr.first + " " + (pr.last || "")).trim() : "") || NAME || ""; } catch (e) { return NAME || ""; } };
function track(ev, extra) {
  if (!TRACK_ON()) return;
  try { const body = JSON.stringify(Object.assign({ a: "ev", ev, uid: typeof uid === "function" ? uid() : "", name: trName().slice(0, 40), lang: LANG,
      dev: /Mobi|Android|iPhone|iPad/.test(navigator.userAgent) ? "mobile" : "desktop", ref: (document.referrer || "").replace(/^https?:\/\//, "").split("/")[0].slice(0, 60) }, extra || {}));
    fetch(ADMIN_API, { method: "POST", body, keepalive: true, redirect: "follow" }).catch(() => {}); } catch (e) {}
}
/* one "visit" per browser session; one "view" per story per session */
(() => {
  const seen = new Set();
  const look = () => { try {
    if (!sessionStorage.getItem("mv-tv")) { sessionStorage.setItem("mv-tv", "1"); track("visit"); }
    const k = (location.hash.slice(1) || "").split("-")[0]; if (k && typeof STORIES === "object" && STORIES[k] && !seen.has(k)) { seen.add(k); track("view", { story: k }); } } catch (e) {} };
  addEventListener("hashchange", look); addEventListener("load", look);
})();
