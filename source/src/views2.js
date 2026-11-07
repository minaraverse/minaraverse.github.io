/* ===== NEW VIEWS: daily word, level test, exam room, mistake hunters, review ===== */
const UI3 = {
  en: { todayK: "Today", streakNone: "Play one chapter to start your streak", dailyT: "Daily word", dailySub: "Guess the 5-letter word in 6 tries", dailyDone: "Solved today ✓",
    reviewDue: "questions to review", reviewNone: "Nothing to review yet", reviewGo: "Review now",
    levelK: "Placement test", levelH: "What's your English level?", levelP: "30 questions from A1 to C2. About seven minutes, free, and you get your level with a personal plan.", levelBtn: "Start the test",
    examK: "Exam room", examH: "Practise for the real thing", examT: "DİM practice test", examD: "Listening, grammar and reading in the DİM style, in three versions from A1 to C2. Score out of 100 (unofficial).",
    errorsD: "Quick games on the mistakes Azerbaijani and Russian speakers make most, for every level from A1 to C2.", mysteryD: "Find the lost Seven Stars carpet in Baku's Old City. 7 rooms, 7 clues.",
    lvlQ: "Question", lvlResult: "Your level", lvlGo: "Start here", lvlDM: "Want a personal study plan? Message Minara", lvlAgain: "Take it again", lvlBoard: "DEPARTURES · ENGLISH LEVEL",
    exIntro: "Three parts, like the real DİM exam: listening (6), grammar and vocabulary (16), reading (8). You can play the recording twice. Answers and explanations come at the end.",
    exP1: "Part 1 · Listening", exP2: "Part 2 · Grammar & vocabulary", exP3: "Part 3 · Reading", exPlay: "Play the recording", exLeft: "plays left", exStart: "Start the test",
    exNext: "Next part", exFinish: "Finish and see my score", exScore: "Your score", exUnof: "Practice score, not an official DİM result.", exTrans: "Transcript", exAns: "answered", exNeed: "Answer every question to continue",
    dlWin: "Brilliant!", dlLose: "The word was", dlShare: "Copy my result", dlCopied: "Copied!", dlNext: "A new word comes tomorrow", dlShort: "Not enough letters", dlNotWord: "Not in the word list. Try a real English word", dlMean: "Meaning",
    erH: "Hunt the mistakes", erP: "Games on the mistakes our brains make when we think in Azerbaijani or Russian. Every game takes about two minutes.", erPlay: "Play", allGames: "All games",
    rvH: "Review time", rvP: "Questions you got wrong come back after 1, 3, 7 and 21 days. Answer them right and they move further away. That's how words stay in your memory.", rvStart: "Start review",
    exam: "Exam", backQ: "Previous question" },
  az: { todayK: "Bu gün", streakNone: "Ardıcıllığa başlamaq üçün bir fəsil oyna", dailyT: "Günün sözü", dailySub: "5 hərfli sözü 6 cəhddə tap", dailyDone: "Bu gün tapıldı ✓",
    reviewDue: "təkrar sualı", reviewNone: "Hələ təkrar yoxdur", reviewGo: "İndi təkrar et",
    levelK: "Səviyyə testi", levelH: "İngilis dili səviyyən nədir?", levelP: "A1-dən C2-yə 30 sual. Təxminən yeddi dəqiqə, pulsuz. Səviyyəni və fərdi planını öyrənəcəksən.", levelBtn: "Testə başla",
    examK: "İmtahan otağı", examH: "Real imtahana hazırlaş", examT: "DİM sınaq testi", examD: "DİM formatında dinləmə, qrammatika və oxu, A1-dən C2-yə üç variantda. 100 ballıq qiymət (rəsmi deyil).",
    errorsD: "Azərbaycan və rus dilli tələbələrin ən çox etdiyi səhvlər üzrə qısa oyunlar, A1-dən C2-yə hər səviyyə üçün.", mysteryD: "Köhnə şəhərdə itmiş Seven Stars xalçasını tap. 7 otaq, 7 ipucu.",
    lvlQ: "Sual", lvlResult: "Sənin səviyyən", lvlGo: "Buradan başla", lvlDM: "Fərdi dərs planı istəyirsən? Minaraya yaz", lvlAgain: "Yenidən keç", lvlBoard: "UÇUŞLAR · İNGİLİS DİLİ SƏVİYYƏSİ",
    exIntro: "Real DİM imtahanı kimi üç hissə: dinləmə (6), qrammatika və lüğət (16), oxu (8). Səsi iki dəfə dinləyə bilərsən. Cavablar və izahlar sonda göstəriləcək.",
    exP1: "1-ci hissə · Dinləmə", exP2: "2-ci hissə · Qrammatika və lüğət", exP3: "3-cü hissə · Oxu", exPlay: "Səsi dinlə", exLeft: "dinləmə qaldı", exStart: "Testə başla",
    exNext: "Növbəti hissə", exFinish: "Bitir və balımı gör", exScore: "Sənin balın", exUnof: "Sınaq balıdır, rəsmi DİM nəticəsi deyil.", exTrans: "Mətn", exAns: "cavablandı", exNeed: "Davam etmək üçün bütün suallara cavab ver",
    dlWin: "Əla!", dlLose: "Söz bu idi", dlShare: "Nəticəmi kopyala", dlCopied: "Kopyalandı!", dlNext: "Yeni söz sabah gələcək", dlShort: "Hərf azdır", dlNotWord: "Bu söz siyahıda yoxdur. Real ingilis sözü yaz", dlMean: "Mənası",
    erH: "Səhvləri ovla", erP: "Azərbaycanca və ya rusca düşünəndə beynimizin etdiyi səhvlər üzrə oyunlar. Hər oyun təxminən iki dəqiqədir.", erPlay: "Oyna", allGames: "Bütün oyunlar",
    rvH: "Təkrar vaxtı", rvP: "Səhv cavab verdiyin suallar 1, 3, 7 və 21 gündən sonra geri qayıdır. Düzgün cavab versən, daha uzağa gedir. Sözlər yaddaşda belə qalır.", rvStart: "Təkrara başla",
    exam: "İmtahan", backQ: "Əvvəlki sual" },
  ru: { todayK: "Сегодня", streakNone: "Пройди одну главу, чтобы начать серию", dailyT: "Слово дня", dailySub: "Угадай слово из 5 букв за 6 попыток", dailyDone: "Сегодня отгадано ✓",
    reviewDue: "вопросов на повторение", reviewNone: "Пока нечего повторять", reviewGo: "Повторить",
    levelK: "Тест уровня", levelH: "Какой у тебя уровень английского?", levelP: "30 вопросов от A1 до C2. Около семи минут, бесплатно. Ты узнаешь свой уровень и получишь личный план.", levelBtn: "Начать тест",
    examK: "Экзаменационная", examH: "Готовься к настоящему экзамену", examT: "Пробный тест DİM", examD: "Аудирование, грамматика и чтение в формате DİM, три варианта от A1 до C2. Оценка из 100 (неофициальная).",
    errorsD: "Короткие игры на ошибки, которые чаще всего делают азербайджано- и русскоязычные ученики, для всех уровней от A1 до C2.", mysteryD: "Найди пропавший ковёр Seven Stars в Старом городе Баку. 7 комнат, 7 улик.",
    lvlQ: "Вопрос", lvlResult: "Твой уровень", lvlGo: "Начни отсюда", lvlDM: "Хочешь личный план занятий? Напиши Минаре", lvlAgain: "Пройти ещё раз", lvlBoard: "ВЫЛЕТЫ · УРОВЕНЬ АНГЛИЙСКОГО",
    exIntro: "Три части, как на настоящем экзамене DİM: аудирование (6), грамматика и лексика (16), чтение (8). Запись можно прослушать два раза. Ответы и объяснения будут в конце.",
    exP1: "Часть 1 · Аудирование", exP2: "Часть 2 · Грамматика и лексика", exP3: "Часть 3 · Чтение", exPlay: "Слушать запись", exLeft: "прослушивания осталось", exStart: "Начать тест",
    exNext: "Следующая часть", exFinish: "Закончить и узнать балл", exScore: "Твой балл", exUnof: "Пробный балл, не официальный результат DİM.", exTrans: "Текст записи", exAns: "отвечено", exNeed: "Ответь на все вопросы, чтобы продолжить",
    dlWin: "Отлично!", dlLose: "Это было слово", dlShare: "Скопировать результат", dlCopied: "Скопировано!", dlNext: "Новое слово будет завтра", dlShort: "Мало букв", dlNotWord: "Такого слова нет в списке. Введи настоящее английское слово", dlMean: "Значение",
    erH: "Охота на ошибки", erP: "Игры на ошибки, которые делает наш мозг, когда думает по-азербайджански или по-русски. Каждая игра около двух минут.", erPlay: "Играть", allGames: "Все игры",
    rvH: "Время повторения", rvP: "Вопросы с ошибками возвращаются через 1, 3, 7 и 21 день. Ответишь правильно, и они уходят дальше. Так слова остаются в памяти.", rvStart: "Начать повторение",
    exam: "Экзамен", backQ: "Предыдущий вопрос" }
};
for (const k in UI3) Object.assign(UI[k], UI3[k]);

const topBar = (cls = "") => `<header class="v2-top ${cls}">${homeBtn()}${langPill()}</header>`;
const flash = (el, cls) => { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); };
const copyText = (txt, btn, okLabel) => { const done = () => { if (btn) btn.textContent = okLabel; };
  try { navigator.clipboard.writeText(txt).then(done, () => { prompt("", txt); }); } catch (e) { done(); } };

/* ---------- DAILY WORD (Wordle-style) ---------- */
const dailyNo = () => Math.floor((new Date(dayStr(new Date())) - new Date("2026-01-01")) / 864e5);
const dailyWord = () => DAILY[((dailyNo() % DAILY.length) + DAILY.length) % DAILY.length];
const dailyState = () => { const s = lsGet("mv-daily", null); return s && s.day === dayStr(new Date()) ? s : { day: dayStr(new Date()), g: [], done: false, won: false }; };
function scoreGuess(guess, ans) {
  const res = Array(5).fill("ab"), left = [...ans];
  [...guess].forEach((c, i) => { if (c === ans[i]) { res[i] = "ok"; left[i] = null; } });
  [...guess].forEach((c, i) => { if (res[i] === "ok") return; const k = left.indexOf(c); if (k >= 0) { res[i] = "in"; left[k] = null; } });
  return res;
}
VIEWS.daily = root => {
  const [W, az, ru] = dailyWord(); let S = dailyState(), cur = "";
  const stars = Array.from({ length: 70 }, (_, k) => `<i style="left:${(k * 37) % 100}%;top:${(k * 53) % 100}%;--d:${(k % 9) * .4}s;--s:${1 + (k % 3)}px"></i>`).join("");
  root.innerHTML = `<div class="dl"><div class="dl-sky" aria-hidden="true">${stars}<b class="dl-moon"></b></div>${topBar()}
    <main class="dl-main"><p class="dl-k">${L("dailyT")} · #${dailyNo() + 1}</p><h1 class="dl-h">${L("dailySub")}</h1>
    <div class="dl-grid" role="grid" aria-label="${L("dailyT")}"></div><p class="dl-msg" role="status" aria-live="polite"></p><div class="dl-end"></div>
    <div class="dl-kb">${["QWERTYUIOP", "ASDFGHJKL", "↵ZXCVBNM⌫"].map(r => `<div>${[...r].map(c => `<button type="button" data-k="${c}" class="${c === "↵" || c === "⌫" ? "wide" : ""}">${c === "↵" ? "ENTER" : c}</button>`).join("")}</div>`).join("")}</div></main></div>`;
  const grid = root.querySelector(".dl-grid"), msg = root.querySelector(".dl-msg"), end = root.querySelector(".dl-end");
  const draw = (flipRow = -1) => {
    grid.innerHTML = Array.from({ length: 6 }, (_, r) => { const g = S.g[r], res = g ? scoreGuess(g, W) : null, txt = g || (r === S.g.length ? cur : "");
      return `<div class="dl-row" role="row">${Array.from({ length: 5 }, (_, c) => `<span role="gridcell" class="dl-t ${res ? res[c] : txt[c] ? "fill" : ""} ${r === flipRow ? "flip" : ""}" style="--i:${c}">${txt[c] || ""}</span>`).join("")}</div>`; }).join("");
    const keys = {}; S.g.forEach(g => scoreGuess(g, W).forEach((v, i) => { const c = g[i], o = keys[c]; if (v === "ok" || (v === "in" && o !== "ok") || !o) keys[c] = v; }));
    root.querySelectorAll(".dl-kb [data-k]").forEach(b => { b.className = (b.className.includes("wide") ? "wide " : "") + (keys[b.dataset.k] || ""); });
    if (S.done) {
      const grid2 = S.g.map(g => scoreGuess(g, W).map(v => v === "ok" ? "🟨" : v === "in" ? "🟦" : "⬛").join("")).join("\n");
      end.innerHTML = `<div class="dl-card"><p class="dl-res">${S.won ? L("dlWin") : L("dlLose")}</p><p class="dl-word">${W} ${sayBtn(W.toLowerCase(), "big")}</p>
        <p class="dl-mean"><i>${L("dlMean")}</i> AZ: <b>${esc(az)}</b> · RU: <b>${esc(ru)}</b></p>
        <div class="qz-row"><button type="button" class="qz-btn" data-share>${L("dlShare")}</button><a class="qz-btn ghost" href="#">${L("homeBtn")}</a></div><p class="dl-next">${L("dlNext")} · 🔥 ${streak()} ${L("daysL")}</p></div>`;
      end.querySelector("[data-share]").onclick = e => copyText(`Minaraverse Daily #${dailyNo() + 1} ${S.won ? S.g.length : "X"}/6\n${grid2}\n${IG}`, e.target, L("dlCopied"));
    }
  };
  const key = k => {
    if (S.done) return;
    if (k === "⌫" || k === "BACKSPACE") cur = cur.slice(0, -1);
    else if (k === "↵" || k === "ENTER") {
      if (cur.length < 5) { msg.textContent = L("dlShort"); flash(grid.children[S.g.length], "shake"); return; }
      { const lw = cur.toLowerCase(); const ok = typeof W5 === "undefined" || W5.has(lw) || (/s$/.test(lw) && W4.has(lw.slice(0, 4))) || (/(ed|es|er|ly)$/.test(lw) && W5.has(lw.slice(0, 3) + "e" + lw[4]));
        if (!ok) { msg.textContent = L("dlNotWord"); flash(grid.children[S.g.length], "shake"); return; } }
      S.g.push(cur); cur = ""; if (S.g[S.g.length - 1] === W) { S.done = S.won = true; } else if (S.g.length >= 6) S.done = true;
      if (S.done) markDay(); lsSet("mv-daily", S); msg.textContent = ""; draw(S.g.length - 1); return;
    } else if (/^[A-Z]$/.test(k) && cur.length < 5) cur += k;
    msg.textContent = ""; draw();
  };
  root.querySelector(".dl-kb").onclick = e => { const b = e.target.closest("[data-k]"); if (b) key(b.dataset.k); };
  const kd = e => { if (e.ctrlKey || e.metaKey || e.altKey || e.target.matches("input,textarea")) return; const k = e.key.toUpperCase(); if (/^[A-Z]$|^ENTER$|^BACKSPACE$/.test(k)) { e.preventDefault(); key(k); } };
  addEventListener("keydown", kd); draw();
  return { unmount() { removeEventListener("keydown", kd); } };
};

/* ---------- LEVEL TEST (airport split-flap board) ---------- */
const FLAPS = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·/-";
function flapText(el, text, len) {
  const t = text.toUpperCase().padEnd(len).slice(0, len);
  el.innerHTML = [...t].map(() => `<span class="fl-c"><b> </b></span>`).join("");
  [...el.children].forEach((c, i) => { const target = t[i]; if (REDUCED || target === " ") { c.firstChild.textContent = target; return; }
    let n = 0; const steps = 6 + (i % 7); const tm = setInterval(() => { n++; c.firstChild.textContent = n >= steps ? target : FLAPS[(Math.random() * FLAPS.length) | 0]; flash(c, "flip"); if (n >= steps) clearInterval(tm); }, 55); });
}
VIEWS.level = root => {
  let i = 0, picks = [];
  root.innerHTML = `<div class="lv">${topBar()}<main class="lv-main"><div class="lv-board"><p class="lv-bk">✈ ${L("lvlBoard")}</p><div class="lv-flap" id="lvf"></div><div class="lv-flap sm" id="lvf2"></div></div><div class="lv-body"></div></main></div>`;
  const body = root.querySelector(".lv-body"), f1 = root.querySelector("#lvf"), f2 = root.querySelector("#lvf2"), W = innerWidth < 600 ? 14 : 18;
  const intro = () => { flapText(f1, "GATE A1 → C2", W); flapText(f2, "30 QUESTIONS · 7 MIN", W + 6);
    body.innerHTML = `<div class="lv-card"><p class="lv-k">${L("levelK")}</p><h1 class="lv-h">${L("levelH")}</h1><p class="lv-p">${L("levelP")}</p>
      <div class="lv-prof"><p class="lv-k">${L("profK")}</p><div class="lv-pf"><input id="lp-first" placeholder="${L("fFirst")}" autocomplete="given-name" value="${esc(PROFILE().first || NAME.split(" ")[0] || "")}"><input id="lp-last" placeholder="${L("fLast")}" autocomplete="family-name" value="${esc(PROFILE().last || "")}"><input id="lp-age" placeholder="${L("fAge")}" inputmode="numeric" maxlength="3" value="${esc(PROFILE().age || "")}"><input id="lp-ig" placeholder="Instagram (@…)" autocomplete="off" value="${esc(PROFILE().ig || "")}"></div><small>${L("profP")}</small></div>
      <button type="button" class="qz-btn" data-go>${L("levelBtn")} →</button></div>`; };
  const q = () => { const [lv, text, opts] = LEVELQ[i], order = shuffled([text, opts], "lv" + i);
    flapText(f1, `${L("lvlQ")} ${String(i + 1).padStart(2, "0")}/${LEVELQ.length}`.normalize("NFD").replace(/[̀-ͯ]/g, ""), W); flapText(f2, `GATE ${lv}`, W + 6);
    body.innerHTML = `<div class="lv-card q">${i ? `<button type="button" class="lv-back" data-back>← ${L("backQ")}</button>` : ""}<div class="lv-bar"><i style="width:${i / LEVELQ.length * 100}%"></i></div><p class="lv-q">${esc(text)} ${sayBtn(text.replace(/_{2,}/g, "blank"), "sm")}</p>
      <div class="lv-opts">${order.map((oi, k) => `<button type="button" class="lv-opt" data-o="${oi}"><span>${"ABC"[k]}</span>${esc(opts[oi])}</button>`).join("")}</div></div>`; };
  const result = () => {
    const by = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 }; LEVELQ.forEach((x, k) => { if (picks[k] === 0) by[x[0]]++; });
    let lvl = "A1"; for (const l of LVLS) { if (by[l] >= 3) lvl = l; else break; }
    const total = picks.filter(p => p === 0).length, info = LEVEL_INFO[lvl], go = info.go;
    flapText(f1, `LEVEL ${lvl}`, W); flapText(f2, `${total}/${LEVELQ.length} CORRECT · BOARDING`, W + 6);
    const goLabel = go === "exam" ? L("examT") : STORIES[go].title;
    body.innerHTML = `<div class="lv-card res"><p class="lv-k">${L("lvlResult")}</p><div class="lv-big">${lvl}</div><p class="lv-p">${esc(info[LANG] || info.en)}</p>
      <div class="lv-split">${Object.keys(by).map(l => `<div class="${l === lvl ? "on" : ""}"><b>${l}</b><span>${by[l]}/5</span><i style="height:${by[l] / 5 * 100}%"></i></div>`).join("")}</div>
      <a class="lv-go" href="#${go}"><small>${L("lvlGo")}</small><b>${esc(goLabel)}</b><i>→</i></a>
      <div class="lv-plan"><p class="lv-k">${L("yourPlan")}</p>${planHTML(lvl)}</div>
      <div class="lv-send"><label class="qz-name"><span>${L("yourName")}</span><input id="lv-name" type="text" autocomplete="name" placeholder="${L("namePh")}" value="${esc(NAME)}"></label>
      ${RESULTS.form ? `<a class="qz-btn lv-form" data-form href="#" target="_blank" rel="noopener">📤 ${L("sendLevel")}</a><small class="lv-note">${L("sendNote")}</small>` : ""}
      <a class="qz-btn lv-dm" href="${DM}" target="_blank" rel="noopener">💬 ${L("lvlDM")} ↗</a></div>
      <pre class="qz-copy">${esc(`Minaraverse level test\nName: ${NAME || "—"}\nLevel: ${lvl} (${total}/${LEVELQ.length})\n${LVLS.map(l => l + " " + by[l] + "/5").join(" · ")}`)}</pre>
      <button type="button" class="qz-btn ghost" data-again>${L("lvlAgain")}</button></div>`;
    lsSet("mv-level", { lvl, total, day: dayStr(new Date()) }); markDay(); if (typeof track === "function") track("level", { score: lvl + " · " + total + "/" + LEVELQ.length });
    const rec = () => ({ type: "Level test", ...profileFields(), level: lvl, name: (PROFILE().first || NAME || "—"), story: "Level test", chapter: lvl, score: `${total}/${LEVELQ.length}`, riddle: "—", answers: `${LVLS.map(l => l + " " + by[l] + "/5").join(" · ")}`, lang: LANG });
    const ni = body.querySelector("#lv-name"), pre = body.querySelector(".qz-copy");
    ni.oninput = () => { NAME = ni.value.trim(); try { localStorage.setItem("mv-name", NAME); } catch (e) {} pre.textContent = `Minaraverse level test\nName: ${NAME || "—"}\nLevel: ${lvl} (${total}/${LEVELQ.length})\n${rec().answers}`; };
    const fl = body.querySelector("[data-form]"); if (fl) fl.onclick = e => { if (!NAME) { e.preventDefault(); ni.focus(); ni.classList.add("need"); return; }
      if (resultsOn()) { e.preventDefault(); fl.textContent = "…"; sendResult(rec()).then(ok => { fl.textContent = ok ? "✓ " + L("sent") : L("sendFail"); }); return; } fl.href = formLink(rec()); };
  };
  body.onclick = e => {
    if (e.target.closest("[data-go]")) { const g = id => (body.querySelector(id) || {}).value || ""; const pf = { ...PROFILE(), first: g("#lp-first").trim(), last: g("#lp-last").trim(), age: g("#lp-age").trim(), ig: g("#lp-ig").trim().replace(/^@/, "") };
      if (pf.first) { lsSet("mv-profile", pf); NAME = [pf.first, pf.last].filter(Boolean).join(" "); try { localStorage.setItem("mv-name", NAME); } catch (er) {}  if (typeof track === "function") track("reg", { score: "level-test" }); }
      i = 0; picks = []; q(); return; }
    if (e.target.closest("[data-again]")) { intro(); return; }
    if (e.target.closest("[data-back]")) { i = Math.max(0, i - 1); q(); return; }
    const o = e.target.closest("[data-o]"); if (!o || e.target.closest("[data-say]") || body.querySelector(".lv-opt.pick")) return;
    o.classList.add("pick"); picks[i] = +o.dataset.o; setTimeout(() => { i++; i >= LEVELQ.length ? result() : q(); }, REDUCED ? 60 : 380);
  };
  intro();
  return {};
};

/* ---------- EXAM ROOM (DİM-style practice, unofficial) ---------- */
VIEWS.exam = root => {
  const XV = examVersions(), xk = (location.hash.match(/exam-(\w+)/) || [])[1] || (myLevel() ? XV.find(x => x.lv.includes(myLevel())) || XV[1] : XV[1]).id, X = (XV.find(x => x.id === xk) || XV[1]).ex;
  let part = 0, plays = 2; const A = { l: [], g: [], r: [] };
  const parts = [{ k: "l", qs: X.lq, t: L("exP1") }, { k: "g", qs: X.gq, t: L("exP2") }, { k: "r", qs: X.rq, t: L("exP3") }];
  root.innerHTML = `<div class="ex">${topBar()}<main class="ex-main"><div class="ex-paper"></div></main></div>`;
  const P = root.querySelector(".ex-paper");
  const head = () => `<div class="ex-head"><div><b>MINARAVERSE</b><span>${L("examT")} · English</span></div><div class="ex-steps">${parts.map((p, k) => `<i class="${k < part ? "done" : k === part ? "now" : ""}">${k + 1}</i>`).join("")}</div></div>`;
  const bubbleQ = (p, q, k) => { const order = shuffled([q[0], q[1]], p.k + k), open = q[2] === "open", v = A[p.k][k];
    if (open) return `<li class="ex-q open"><p><span>${k + 1}.</span>${esc(q[0])}</p><input type="text" data-open="${k}" value="${esc(v || "")}" autocapitalize="off" spellcheck="false" placeholder="${L("typeHere")}"><small class="ex-w">×2</small></li>`;
    return `<li class="ex-q"><p><span>${k + 1}.</span>${esc(q[0])}</p><div class="ex-bub">${order.map((oi, j) => `<button type="button" class="${v === oi ? "on" : ""}" data-p="${p.k}" data-k="${k}" data-o="${oi}"><i>${"ABCD"[j]}</i>${esc(q[1][oi])}</button>`).join("")}</div></li>`; };
  const intro = () => { P.innerHTML = `${head()}<div class="ex-intro"><p class="ex-k">${L("examK")}</p><h1>${L("examH")}</h1><p>${L("exIntro")}</p><div class="ex-vers">${XV.map(x => `<a class="ex-ver ${x.ex === X ? "on" : ""}" href="#exam-${x.id}"><b>${x.lv.join("–").replace(/–.*–/, "–")}</b><span>${L("exV_" + x.id)}</span></a>`).join("")}</div><p class="ex-unof">⚠ ${L("exUnof")}</p><button type="button" class="qz-btn" data-start>${L("exStart")} →</button></div>`; };
  const drawPart = () => { const p = parts[part];
    const extra = p.k === "l" ? `<div class="ex-audio"><button type="button" class="qz-btn" data-play ${plays ? "" : "disabled"}>🔊 ${L("exPlay")}</button><span>${plays} ${L("exLeft")}</span></div>`
      : p.k === "r" ? `<article class="ex-text">${esc(X.read)}</article>` : "";
    const n = p.qs.length, done = p.qs.filter((q, k) => A[p.k][k] != null && A[p.k][k] !== "").length;
    P.innerHTML = `${head()}<h2 class="ex-pt">${p.t}</h2>${extra}<ol class="ex-qs">${p.qs.map((q, k) => bubbleQ(p, q, k)).join("")}</ol>
      <div class="ex-foot"><span class="ex-count">${done}/${n} ${L("exAns")}</span><button type="button" class="qz-btn" data-next>${part < 2 ? L("exNext") : L("exFinish")} →</button></div><p class="ex-need" hidden>${L("exNeed")}</p>`;
  };
  const results = () => {
    let pts = 0, max = 0; const rows = [];
    parts.forEach(p => p.qs.forEach((q, k) => { const open = q[2] === "open", w = open ? 2 : 1, v = A[p.k][k];
      const ok = open ? norm(v || "") === norm(q[1][0]) : v === 0; max += w; if (ok) pts += w;
      rows.push(`<li class="${ok ? "ok" : "no"}"><span>${ok ? "✓" : "✗"}</span><div><b>${esc(q[0])}</b><small>${L("yourAns")}: ${esc(open ? (v || "—") : v != null ? q[1][v] : "—")}${ok ? "" : ` · ${L("correctAns")}: ${esc(q[1][0])}`}</small></div></li>`); }));
    const score = Math.round(pts / max * 100); markDay(); lsSet("mv-exam", { score, day: dayStr(new Date()) });
    P.innerHTML = `${head()}<div class="ex-res"><p class="ex-k">${L("exScore")}</p><div class="ex-score"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" class="bg"/><circle cx="60" cy="60" r="52" class="fg" style="stroke-dasharray:${score * 3.267} 400"/></svg><b>${score}</b><small>/100</small></div>
      <p class="ex-unof">⚠ ${L("exUnof")}</p>
      <details class="qz-rev" open><summary>${L("review")}</summary><ol>${rows.join("")}</ol></details>
      <details class="trd"><summary>${L("exTrans")} · ${L("exP1")}</summary><p>${esc(X.listen)}</p></details>
      <pre class="qz-copy">${esc(`Minaraverse — ${L("examT")} (unofficial)\nName: ${NAME || "—"}\nScore: ${score}/100 (${pts}/${max})`)}</pre>
      <div class="qz-row"><a class="qz-btn" href="${DM}" target="_blank" rel="noopener">${L("sendMinara")} ↗</a><button type="button" class="qz-btn ghost" data-again>${L("again")}</button></div></div>`;
  };
  P.onclick = e => {
    if (e.target.closest("[data-start]")) { part = 0; drawPart(); return; }
    if (e.target.closest("[data-again]")) { part = 0; plays = 2; A.l = []; A.g = []; A.r = []; intro(); return; }
    if (e.target.closest("[data-play]") && plays > 0) { plays--; say(X.listen); const b = e.target.closest("[data-play]"); b.nextElementSibling.textContent = `${plays} ${L("exLeft")}`; if (!plays) b.disabled = true; return; }
    const o = e.target.closest("[data-o]"); if (o) { A[o.dataset.p][+o.dataset.k] = +o.dataset.o; o.parentNode.querySelectorAll("button").forEach(b => b.classList.toggle("on", b === o)); count(); return; }
    if (e.target.closest("[data-next]")) { const p = parts[part]; if (p.qs.some((q, k) => A[p.k][k] == null || A[p.k][k] === "")) { const nd = P.querySelector(".ex-need"); nd.hidden = false; flash(nd, "shake"); return; }
      if (TTS) speechSynthesis.cancel(); part++; part > 2 ? results() : drawPart(); P.scrollIntoView({ behavior: REDUCED ? "auto" : "smooth" }); }
  };
  const count = () => { const p = parts[part], c = P.querySelector(".ex-count"); if (c) c.textContent = `${p.qs.filter((q, k) => A[p.k][k] != null && A[p.k][k] !== "").length}/${p.qs.length} ${L("exAns")}`; };
  P.oninput = e => { const t = e.target.closest("[data-open]"); if (t) { A.r[+t.dataset.open] = t.value; count(); } };
  intro();
  return { unmount() { if (TTS) speechSynthesis.cancel(); } };
};

/* ---------- MISTAKE HUNTERS ---------- */
VIEWS.errors = root => {
  const S = STORIES.errors, m = location.hash.match(/errors-(\d+)/), gi = m ? +m[1] - 1 : -1;
  if (gi < 0 || !S.units[gi]) {
    root.innerHTML = `<div class="er">${topBar()}<main class="er-main"><p class="er-k">🎯 ${L("examK")}</p><h1 class="er-h">${letters(S.title)}</h1><p class="er-p">${L("erP")}</p>
      <div class="h-chips er-chips">${LVLS.map(l => `<button type="button" data-el="${l}" aria-pressed="${myLevel() === l}">${l}${myLevel() === l ? " · " + L("forYou") : ""}</button>`).join("")}</div>
      <div class="er-grid">${S.units.map((u, k) => [u, k]).sort((a, b) => LVLS.indexOf(a[0].level) - LVLS.indexOf(b[0].level)).map(([u, k]) => { const b = best("errors", k);
        return `<a class="er-tile ${myLevel() && u.level !== myLevel() ? "dim" : ""}" data-l="${u.level}" href="#errors-${k + 1}" style="--i:${k}"><span class="er-lv">${u.level || ""}</span><span class="er-ic">${esc(u.icon)}</span><b>${esc(u.full || u.name)}</b><small>${esc(loc(u) && LANG !== "en" ? loc(u) : u.info)}</small><span class="er-go">${b != null ? `✓ ${b}/${u.qs.length}` : L("erPlay") + " →"}</span><i class="er-cross" aria-hidden="true"></i></a>`; }).join("")}</div></main></div>`;
    riseLetters(root, ".er-h .ch", { stagger: 30 });
    root.querySelector(".er-chips").onclick = e => { const b = e.target.closest("[data-el]"); if (!b) return; const on = b.getAttribute("aria-pressed") !== "true";
      root.querySelectorAll("[data-el]").forEach(x => x.setAttribute("aria-pressed", x === b && on)); root.querySelectorAll(".er-tile").forEach(t => t.classList.toggle("dim", on && t.dataset.l !== b.dataset.el)); };
    return {};
  }
  const u = S.units[gi];
  root.innerHTML = `<div class="er er-game">${topBar()}<main class="er-main"><a class="er-back" href="#errors">← ${L("allGames")}</a>
    <div class="er-info"><span class="er-ic big">${esc(u.icon)}</span><div><p class="er-k">${L("erH")} · ${u.level || ""}</p><h1 class="er-h2">${esc(u.full || u.name)}</h1><p>${esc(u.info)}</p>${trBlock("errors", gi)}</div></div>
    <div class="er-quiz"></div></main></div>`;
  Quiz(root.querySelector(".er-quiz"), { story: "errors", idx: gi, cls: "qz-err", nextLabel: S.units[gi + 1] ? S.units[gi + 1].full : "", onNext: () => Router.go(`errors-${gi + 2}`) });
  return {};
};

/* ---------- REVIEW ---------- */
VIEWS.review = root => {
  const keys = dueKeys();
  root.innerHTML = `<div class="rv">${topBar()}<main class="rv-main"><p class="rv-k">🔁 ${L("reviewT")}</p><h1 class="rv-h">${L("rvH")}</h1><p class="rv-p">${L("rvP")}</p>
    <div class="rv-box">${keys.length ? `<p class="rv-n"><b>${keys.length}</b> ${L("reviewDue")}</p><button type="button" class="qz-btn" data-rv>${L("rvStart")} →</button>` : `<p class="rv-n">${L("reviewNone")} ✓</p><a class="qz-btn ghost" href="#">${L("homeBtn")}</a>`}</div><div class="rv-quiz"></div></main></div>`;
  const b = root.querySelector("[data-rv]");
  if (b) b.onclick = () => { root.querySelector(".rv-box").remove(); Quiz(root.querySelector(".rv-quiz"), { review: keys, cls: "qz-rv" }); };
  return {};
};
