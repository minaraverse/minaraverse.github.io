/* ===== Safi peeks in: once a day the Safiverse mascot pops up for a few seconds and invites the student to the app.
   Never during reading or a quiz in progress; only on the home screen (after ~20 s) or on a finished-chapter screen. ===== */
(() => {
  if (typeof SAFI !== "undefined" && SAFI) return;
  const PH = {
    az: ["Mənə də baş çək! 🌟", "Safiverse-də səni gözləyirəm!", "Bu gün bir dərs də Safiverse-də?", "Salam! Mən Safiyəm. Gəl birlikdə məşq edək!"],
    ru: ["Не забудь заглянуть и ко мне! 🌟", "Я жду тебя в Safiverse!", "Ещё один урок — в Safiverse?", "Привет! Я Сафи. Давай позанимаемся вместе!"],
    en: ["Don't forget to visit me too! 🌟", "I'm waiting for you in Safiverse!", "One more lesson — in Safiverse?", "Hi! I'm Safi. Let's practise together!"] };
  const BTN = { az: "Safiverse-ə keç", ru: "В Safiverse", en: "Open Safiverse" };
  const key = "mv-peek", today = () => new Date().toISOString().slice(0, 10);
  const seen = () => { try { return localStorage.getItem(key) === today(); } catch (e) { return false; } };
  const mark = () => { try { localStorage.setItem(key, today()); } catch (e) {} };
  const busy = () => { const v = document.body.dataset.view || "home"; if (v === "app" || v === "admin" || v === "level" || v === "lesson") return true;
    const q = document.querySelector(".qz"); return !!(q && !q.classList.contains("qz-done")) || !!document.querySelector(".lv-main, .cert-ov"); };
  let shown = false;
  function show() {
    if (shown || seen() || busy() || typeof safiSVG !== "function") return; shown = true; mark();
    const lang = typeof LANG === "string" && PH[LANG] ? LANG : "en", list = PH[lang], msg = list[(new Date().getDate() + list.length) % list.length];
    const el = document.createElement("div"); el.className = "peek"; el.setAttribute("role", "status");
    el.innerHTML = `<button type="button" class="peek-x" aria-label="close">×</button><div class="peek-safi">${safiSVG("wave")}</div><div class="peek-b"><p>${msg}</p><a href="#app" class="peek-go">${BTN[lang]} →</a></div>`;
    document.body.appendChild(el); requestAnimationFrame(() => el.classList.add("in"));
    const close = () => { el.classList.remove("in"); setTimeout(() => el.remove(), 400); };
    el.querySelector(".peek-x").onclick = close; el.querySelector(".peek-go").onclick = () => { if (typeof track === "function") track("ui", { story: "home", score: "safi-peek" }); close(); };
    setTimeout(close, 6500);
  }
  /* home: ~20 s after arriving · story: when the chapter result screen appears */
  let t = null;
  const arm = () => { clearTimeout(t); if (seen()) return; const v = document.body.dataset.view || "home"; if (v === "home") t = setTimeout(show, 20000); };
  addEventListener("hashchange", () => setTimeout(arm, 50)); addEventListener("load", arm);
  const mo = new MutationObserver(() => { if (!seen() && document.querySelector(".qz-done") && !busy()) setTimeout(show, 1200); });
  addEventListener("load", () => { const v = document.getElementById("view"); if (v) mo.observe(v, { childList: true, subtree: true }); });
})();
