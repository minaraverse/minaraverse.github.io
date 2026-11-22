/* ===== "Find my level": a short adaptive placement test inside the app (Duolingo-style) =====
   Starts easy; 3 questions per level, 2 right → the next level, otherwise it stops. "I don't know" is allowed (no guessing).
   Result → "Start from B1" (or one level lower). Uses the 30 graded questions in LEVELQ (option 0 is the right one). */
Object.assign(UI.en, { plT: "Find my level", plP: "3–5 minutes. Questions get harder while you answer correctly.", plGo: "Start", plDk: "I don't know", plQ: "Question", plRes: "Your level", plStart: "Start from {l}", plLower: "Start a bit easier: {l}",
  plAgain: "Take the test again", plScratch: "I'm starting from zero", plScratchS: "Start with the very first words", plFind: "Find my level", plFindS: "A short test, 3–5 minutes", plKnow: "I know my level:", plW: "Choose the English word", plS: "What does it mean?", plH: "Which sentence did you hear?", plUnit: "You start from:", plNote: "This is a quick check. You can always jump ahead on the map with a short test." });
Object.assign(UI.az, { plT: "Səviyyəmi tap", plP: "3–5 dəqiqə. Düz cavab verdikcə suallar çətinləşir.", plGo: "Başla", plDk: "Bilmirəm", plQ: "Sual", plRes: "Sənin səviyyən", plStart: "{l} səviyyəsindən başla", plLower: "Bir az asandan başla: {l}",
  plAgain: "Testi yenidən keç", plScratch: "Sıfırdan başlayıram", plScratchS: "Ən ilk sözlərdən başla", plFind: "Səviyyəmi tap", plFindS: "Qısa test, 3–5 dəqiqə", plKnow: "Səviyyəmi bilirəm:", plW: "İngiliscə sözü seç", plS: "Bu nə deməkdir?", plH: "Hansı cümləni eşitdin?", plUnit: "Buradan başlayırsan:", plNote: "Bu, qısa yoxlamadır. Xəritədə qısa testlə həmişə irəli keçə bilərsən." });
Object.assign(UI.ru, { plT: "Найти мой уровень", plP: "3–5 минут. Пока отвечаешь правильно, вопросы становятся сложнее.", plGo: "Начать", plDk: "Не знаю", plQ: "Вопрос", plRes: "Твой уровень", plStart: "Начать с {l}", plLower: "Начать чуть проще: {l}",
  plAgain: "Пройти тест ещё раз", plScratch: "Начинаю с нуля", plScratchS: "С самых первых слов", plFind: "Найти мой уровень", plFindS: "Короткий тест, 3–5 минут", plKnow: "Я знаю свой уровень:", plW: "Выбери английское слово", plS: "Что это значит?", plH: "Какую фразу ты услышал?", plUnit: "Ты начнёшь отсюда:", plNote: "Это быстрая проверка. На карте всегда можно перепрыгнуть вперёд через короткий тест." });

function placeSet(lvl, unit) { const old = lsGet("mv-level", null) || {}; lsSet("mv-level", Object.assign({}, old, { lvl, unit: unit == null ? null : +unit, src: "place", at: Date.now() }));
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
        if (st.ok >= 2) { st.passed = st.li; st.li++; } else return st.passed < 0 ? result("A1", null) : fine(LV[st.passed]);
        if (st.li >= LV.length) return fine(LV[st.passed]); st.qs = bank(LV[st.li]); st.k = 0; st.ok = 0; q(); }, 260); }; };
  /* step 2 (like Duolingo): questions from the course itself — a word, a sentence's meaning, a sentence by ear — find the unit to start from */
  const courseQ = U => { const kinds = shuffle(["w", "s", "h"]), Q = [];
    kinds.forEach(k => { if (k === "w") { const w = pickN(U.W.filter(x => x.en && nat(x)), 1)[0]; if (!w) return; Q.push({ t: "w", p: nat(w), a: w.en, o: shuffle([w.en, ...pickN(U.W.filter(x => x !== w && x.en), 3).map(x => x.en)]) }); }
      else { const s = pickN(U.S.filter(x => x.en && nat(x)), 1)[0]; if (!s) return; const others = pickN(U.S.filter(x => x !== s && x.en), 3);
        Q.push(k === "s" ? { t: "s", p: s.en, a: nat(s), o: shuffle([nat(s), ...others.map(nat)]) } : { t: "h", p: s.en, a: s.en, o: shuffle([s.en, ...others.map(x => x.en)]) }); } });
    return Q; };
  const fine = lvl => { const S = SECTIONS.find(x => x.lv === lvl); if (!S || S.to - S.from < 3) return result(lvl, null);
    const pts = [S.from + Math.floor((S.to - S.from) / 3), S.from + Math.floor((S.to - S.from) * 2 / 3)]; let step = 0, base = S.from;
    const run = () => { if (step >= pts.length) return result(lvl, base); const U = UNITS[pts[step]], Q = courseQ(U); let k = 0, ok = 0;
      const ask = () => { if (k >= Q.length) { if (ok >= 2) { base = pts[step]; step++; return run(); } return result(lvl, base); }
        const x = Q[k]; st.lock = false; window.__plx = x;
        shell(`<div class="pl-top"><span class="pl-lv">${lvl}</span><div class="pl-bar">${LV.map(l => `<i class="${LV.indexOf(l) < LV.indexOf(lvl) || l === lvl ? "ok" : ""}"></i>`).join("")}</div><small>${L("plQ")} ${st.n + 1}</small></div>
          <p class="pl-k">${x.t === "w" ? L("plW") : x.t === "s" ? L("plS") : L("plH")}</p>
          <div class="pl-q">${x.t === "h" ? `<button class="pl-play" data-play>🔊</button>` : `<p>${esc(x.p)}${x.t === "s" ? " " + sayBtn(x.p) : ""}</p>`}</div>
          <div class="pl-opts">${x.o.map((o, i) => `<button class="pl-o" data-o="${i}">${esc(o)}</button>`).join("")}<button class="pl-o pl-dk" data-o="-1">🤷 ${L("plDk")}</button></div>`);
        if (x.t === "h") { const pl = () => say(x.p); setTimeout(pl, 300); root.querySelector("[data-play]").onclick = pl; }
        root.querySelector(".pl-opts").onclick = e => { const b = e.target.closest("[data-o]"); if (!b || st.lock) return; st.lock = true; const right = +b.dataset.o >= 0 && x.o[+b.dataset.o] === x.a;
          sfx(right ? "tap" : "miss"); b.classList.add("picked"); st.n++; if (right) ok++; k++; setTimeout(ask, 260); }; };
      ask(); };
    run(); };
  const result = (lvl, unit) => { const low = LV[Math.max(0, LV.indexOf(lvl) - 1)], it = typeof LV_LIST !== "undefined" ? LV_LIST.find(x => x[0] === lvl) : null, U = unit != null ? UNITS[unit] : null;
    sfx("win"); shell(`<div class="pl-card res"><small class="ap-p">${L("plRes")}</small><div class="pl-big">${lvl}</div>${it ? `<p class="pl-name">${it[1]} ${esc(lvT3(it[2]))}</p><p class="ap-p">${esc(lvT3(it[3]))}</p>` : ""}
      ${U ? `<p class="pl-unit">📍 ${L("plUnit")} <b>${U.e} ${esc(T3(U.t))}</b></p>` : ""}
      <button class="ap-cta" data-set="${lvl}" data-u="${unit == null ? "" : unit}">🚀 ${L("plStart").replace("{l}", lvl)}</button>${low !== lvl ? `<button class="dr-link" data-set="${low}" data-u="">${L("plLower").replace("{l}", low)}</button>` : ""}
      <button class="dr-link" data-again>↺ ${L("plAgain")}</button><p class="pl-note">💡 ${L("plNote")}</p></div>`);
    root.onclick = e => { const s = e.target.closest("[data-set]"); if (s) return placeSet(s.dataset.set, s.dataset.u === "" ? null : s.dataset.u); if (e.target.closest("[data-again]")) { Object.assign(st, { li: 0, qs: bank("A1"), k: 0, ok: 0, passed: -1, n: 0 }); q(); } }; };
  intro(); return {};
};
