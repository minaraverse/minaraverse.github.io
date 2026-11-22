/* ===== "Find my level": a short adaptive placement test inside the app (Duolingo-style) =====
   Starts easy; 3 questions per level, 2 right → the next level, otherwise it stops. "I don't know" is allowed (no guessing).
   Result → "Start from B1" (or one level lower). Uses the 30 graded questions in LEVELQ (option 0 is the right one). */
Object.assign(UI.en, { plT: "Find my level", plP: "3–5 minutes. Questions get harder while you answer correctly.", plGo: "Start", plDk: "I don't know", plQ: "Question", plRes: "Your level", plStart: "Start from {l}", plLower: "Start a bit easier: {l}",
  plAgain: "Take the test again", plScratch: "I'm starting from zero", plScratchS: "Start with the very first words", plFind: "Find my level", plFindS: "A short test, 3–5 minutes", plKnow: "I know my level:", plNote: "This is a quick check. You can always jump ahead on the map with a short test." });
Object.assign(UI.az, { plT: "Səviyyəmi tap", plP: "3–5 dəqiqə. Düz cavab verdikcə suallar çətinləşir.", plGo: "Başla", plDk: "Bilmirəm", plQ: "Sual", plRes: "Sənin səviyyən", plStart: "{l} səviyyəsindən başla", plLower: "Bir az asandan başla: {l}",
  plAgain: "Testi yenidən keç", plScratch: "Sıfırdan başlayıram", plScratchS: "Ən ilk sözlərdən başla", plFind: "Səviyyəmi tap", plFindS: "Qısa test, 3–5 dəqiqə", plKnow: "Səviyyəmi bilirəm:", plNote: "Bu, qısa yoxlamadır. Xəritədə qısa testlə həmişə irəli keçə bilərsən." });
Object.assign(UI.ru, { plT: "Найти мой уровень", plP: "3–5 минут. Пока отвечаешь правильно, вопросы становятся сложнее.", plGo: "Начать", plDk: "Не знаю", plQ: "Вопрос", plRes: "Твой уровень", plStart: "Начать с {l}", plLower: "Начать чуть проще: {l}",
  plAgain: "Пройти тест ещё раз", plScratch: "Начинаю с нуля", plScratchS: "С самых первых слов", plFind: "Найти мой уровень", plFindS: "Короткий тест, 3–5 минут", plKnow: "Я знаю свой уровень:", plNote: "Это быстрая проверка. На карте всегда можно перепрыгнуть вперёд через короткий тест." });

function placeSet(lvl) { const old = lsGet("mv-level", null) || {}; lsSet("mv-level", Object.assign({}, old, { lvl, src: "place", at: Date.now() }));
  if (!lsGet("mv-onb", null)) lsSet("mv-onb", 1); if (typeof pushSync === "function") pushSync(); sfx("unlock"); Router.go("app-learn"); Router.remount(); }
VIEWS.place = root => {
  document.documentElement.classList.add("ap-mode");
  const LV = ["A1", "A2", "B1", "B2", "C1", "C2"], bank = l => shuffle(LEVELQ.filter(q => q[0] === l)).slice(0, 3);
  const st = { li: 0, qs: bank("A1"), k: 0, ok: 0, passed: -1, n: 0, lock: false };
  const shell = inner => { root.innerHTML = `<div class="ap pl"><div class="ap-hud slim">${apBack()}${brandHTML()}</div><main class="ap-main pl-main">${inner}</main></div>`; };
  const intro = () => { shell(`<div class="pl-card"><div class="pl-ic">🧭</div><h1 class="ap-h">${L("plT")}</h1><p class="ap-p">${L("plP")}</p><div class="pl-lvls">${LV.map(l => `<span>${l}</span>`).join("")}</div>
    <button class="ap-cta" data-go>${L("plGo")} →</button></div>`); root.querySelector("[data-go]").onclick = () => { sfx("tap"); q(); }; };
  const q = () => { const [lv, text, opts] = st.qs[st.k], order = shuffle([0, 1, 2, 3]); st.lock = false;
    shell(`<div class="pl-top"><span class="pl-lv">${lv}</span><div class="pl-bar">${LV.map((l, i) => `<i class="${i < st.li ? "ok" : i === st.li ? "on" : ""}"></i>`).join("")}</div><small>${L("plQ")} ${st.n + 1}</small></div>
      <div class="pl-q"><p>${esc(text).replace(/_{2,}/, `<i class="dx-gap">&nbsp;</i>`)}</p></div>
      <div class="pl-opts">${order.map(i => `<button class="pl-o" data-o="${i}">${esc(opts[i])}</button>`).join("")}<button class="pl-o pl-dk" data-o="-1">🤷 ${L("plDk")}</button></div>`);
    root.querySelector(".pl-opts").onclick = e => { const b = e.target.closest("[data-o]"); if (!b || st.lock) return; st.lock = true; const right = +b.dataset.o === 0;
      sfx(right ? "tap" : "miss"); b.classList.add("picked"); st.n++; if (right) st.ok++; st.k++;
      setTimeout(() => { if (st.k < st.qs.length) return q();
        if (st.ok >= 2) { st.passed = st.li; st.li++; } else return result();
        if (st.li >= LV.length) return result(); st.qs = bank(LV[st.li]); st.k = 0; st.ok = 0; q(); }, 260); }; };
  const result = () => { const lvl = LV[Math.max(0, st.passed)], low = LV[Math.max(0, LV.indexOf(lvl) - 1)], it = typeof LV_LIST !== "undefined" ? LV_LIST.find(x => x[0] === lvl) : null;
    sfx("win"); shell(`<div class="pl-card res"><small class="ap-p">${L("plRes")}</small><div class="pl-big">${lvl}</div>${it ? `<p class="pl-name">${it[1]} ${esc(lvT3(it[2]))}</p><p class="ap-p">${esc(lvT3(it[3]))}</p>` : ""}
      <button class="ap-cta" data-set="${lvl}">🚀 ${L("plStart").replace("{l}", lvl)}</button>${low !== lvl ? `<button class="dr-link" data-set="${low}">${L("plLower").replace("{l}", low)}</button>` : ""}
      <button class="dr-link" data-again>↺ ${L("plAgain")}</button><p class="pl-note">💡 ${L("plNote")}</p></div>`);
    root.onclick = e => { const s = e.target.closest("[data-set]"); if (s) return placeSet(s.dataset.set); if (e.target.closest("[data-again]")) { Object.assign(st, { li: 0, qs: bank("A1"), k: 0, ok: 0, passed: -1, n: 0 }); q(); } }; };
  intro(); return {};
};
