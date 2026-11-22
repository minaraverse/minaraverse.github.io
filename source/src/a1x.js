/* ===== New A1 programme: lessons by thirds, "Real life" chat, "Boss" without hints, stage exams,
   80% pass mark, weak words before a new unit, "I know N words", "Now you can…" ===== */
Object.assign(UI.en, { v2Node: ["New words · 1", "New words · 2", "New words · 3", "Real life", "Boss"], v2Chat: "Reply in the chat", v2Emo: "Guess the word from the emoji", v2Odd: "Which word is the odd one out?",
  v2Boss: "Boss · answer by yourself, no hints", v2BossW: "Not quite. You could say:", v2Redo: "You need 80% to pass", v2RedoP: "Your result: {n}%. Do this lesson again — the questions will be new, the words the same.", v2Retry: "Try again",
  v2Stage: "Stage", v2Left: "{n} planets left to {s}", v2LeftL: "{n} planets left to the A1 exam", v2StDone: "Stage passed ✓", v2StLock: "10 planets · opens after the exam", v2Exam: "Stage exam", v2ExamL: "A1 level exam",
  v2ExamP: "80% opens the next stage", v2ExamPL: "80% = A1 certificate", v2ExamEarly: "Feeling strong? Take it now and skip the stage", v2ExamGo: "Start the exam", v2ExamLock: "Finish the stage first", v2ExamOk: "Exam passed!",
  v2ExamFail: "Not yet: {n}%. You need 80%.", v2ExamRep: "Repeat these units, then try again:", v2ExamWait: "Repeat one lesson from the units below — then the exam opens again", v2Know: "I know {n} words", v2New: "+{n} new words",
  v2Can: "Now you can:", v2Nat: "Say it like a native:", v2Weak: "Your weak words — a quick review before the new unit" });
Object.assign(UI.az, { v2Node: ["Yeni sözlər · 1", "Yeni sözlər · 2", "Yeni sözlər · 3", "Real həyat", "Boss"], v2Chat: "Çatda cavab ver", v2Emo: "Emojilərdən sözü tap", v2Odd: "Hansı söz artıqdır?",
  v2Boss: "Boss · özün cavab ver, ipucu yoxdur", v2BossW: "Tam deyil. Belə demək olar:", v2Redo: "Keçmək üçün 80% lazımdır", v2RedoP: "Nəticən: {n}%. Bu dərsi yenidən keç — suallar yeni olacaq, sözlər eyni.", v2Retry: "Yenidən cəhd et",
  v2Stage: "Pillə", v2Left: "{s} pilləsinə {n} planet qalıb", v2LeftL: "A1 imtahanına {n} planet qalıb", v2StDone: "Pillə keçildi ✓", v2StLock: "10 planet · imtahandan sonra açılır", v2Exam: "Pillə imtahanı", v2ExamL: "A1 səviyyə imtahanı",
  v2ExamP: "80% növbəti pilləni açır", v2ExamPL: "80% = A1 sertifikatı", v2ExamEarly: "Güclüsən? İndi ver və pilləni keç", v2ExamGo: "İmtahana başla", v2ExamLock: "Əvvəlcə pilləni bitir", v2ExamOk: "İmtahan keçildi!",
  v2ExamFail: "Hələ yox: {n}%. 80% lazımdır.", v2ExamRep: "Bu bölmələri təkrarla, sonra yenidən cəhd et:", v2ExamWait: "Aşağıdakı bölmələrdən bir dərs təkrarla — sonra imtahan yenidən açılacaq", v2Know: "{n} söz bilirəm", v2New: "+{n} yeni söz",
  v2Can: "İndi bacarırsan:", v2Nat: "Doğma danışan kimi de:", v2Weak: "Zəif sözlərin — yeni bölmədən əvvəl qısa təkrar" });
Object.assign(UI.ru, { v2Node: ["Новые слова · 1", "Новые слова · 2", "Новые слова · 3", "Реальная жизнь", "Босс"], v2Chat: "Ответь в чате", v2Emo: "Угадай слово по эмодзи", v2Odd: "Какое слово лишнее?",
  v2Boss: "Босс · отвечай сам, без подсказок", v2BossW: "Не совсем. Можно сказать так:", v2Redo: "Чтобы пройти, нужно 80%", v2RedoP: "Твой результат: {n}%. Пройди урок ещё раз — вопросы будут другие, слова те же.", v2Retry: "Ещё раз",
  v2Stage: "Ступень", v2Left: "до {s} осталось {n} планет", v2LeftL: "до экзамена A1 осталось {n} планет", v2StDone: "Ступень пройдена ✓", v2StLock: "10 планет · откроется после экзамена", v2Exam: "Экзамен ступени", v2ExamL: "Экзамен уровня A1",
  v2ExamP: "80% открывают следующую ступень", v2ExamPL: "80% = сертификат A1", v2ExamEarly: "Чувствуешь силу? Сдай сейчас и перепрыгни ступень", v2ExamGo: "Начать экзамен", v2ExamLock: "Сначала пройди ступень", v2ExamOk: "Экзамен сдан!",
  v2ExamFail: "Пока нет: {n}%. Нужно 80%.", v2ExamRep: "Повтори эти юниты и попробуй снова:", v2ExamWait: "Повтори один урок из юнитов ниже — и экзамен снова откроется", v2Know: "Я знаю {n} слов", v2New: "+{n} новых слов",
  v2Can: "Теперь ты можешь:", v2Nat: "Скажи как носитель:", v2Weak: "Твои слабые слова — короткое повторение перед новым юнитом" });

/* ---------- lessons: 1–3 new words (a third of the list each) · 4 real life · 5 boss ---------- */
function v2Recipe(U, j) {
  if (j === 4) return [0, 1, 2, 3, 4].map(i => "boss:" + i).join(" ");
  if (j === 3) return shuffle(["build:R", "fill:F", "odd:0", "say:R"]).concat("chat:0").reverse().join(" ");
  const a = j * 4, w = shuffle([a, a + 1, a + 2, a + 3]), Z = "Z" + a + "_" + (a + 4);
  return (j === 0 ? [`img:w${w[0]}`, `hearw:w${w[1]}`, `img:w${w[2]}`, `pairs:${Z}`, `emo:0`]
    : j === 1 ? [`img:w${w[0]}`, `hearw:w${w[1]}`, `build:x${w[2]}`, `odd:0`, `say:x${w[3]}`]
    : [`hearw:w${w[0]}`, `pairs:${Z}`, `build:x${w[2]}`, `emo:1`, `say:x${w[3]}`]).join(" ");
}

/* ---------- 💬 chat · 🧩 emoji riddle · 🔍 odd one out · 👑 boss ---------- */
Object.assign(EX2, {
  chat: {
    make(U) { const c = U.plan && U.plan.chat; return c ? { k: "chat", c, step: 0, err: false } : null; },
    html(x, T) { return T("v2Chat") + `<div class="v2-chat"><div class="v2-msgs"></div><div class="v2-opts"></div></div>`; },
    wire(x, box, ready, live) { const msgs = box.querySelector(".v2-msgs"), op = box.querySelector(".v2-opts"); x.step = 0; x.err = false;
      const bub = (t, me) => { const b = document.createElement("div"); b.className = "v2-b " + (me ? "me" : "bot"); b.innerHTML = me ? esc(t) : `<i class="v2-av">${x.U ? x.U.e : "🙂"}</i><span>${esc(t)}${sayBtn(t)}</span>`; msgs.appendChild(b); b.scrollIntoView({ block: "nearest", behavior: "smooth" }); };
      const turn = () => { const c = x.c[x.step]; bub(c[0]); if (!noListen()) setTimeout(() => window.__dx === x && say(c[0]), 250);
        op.innerHTML = shuffle(c[3]).map(o => `<button class="v2-o" data-o="${esc(o)}">${esc(o)}</button>`).join(""); };
      op.onclick = e => { const b = e.target.closest(".v2-o"); if (!b || !live()) return; const c = x.c[x.step];
        if (b.dataset.o !== c[3][0]) { x.err = true; sfx("no"); flash(b, "shake"); b.disabled = true; b.classList.add("bad"); return; }
        sfx("tap"); op.innerHTML = ""; bub(c[3][0], true); x.step++;
        if (x.step < x.c.length) setTimeout(turn, 500); else ready(true); };
      turn(); },
    judge: x => ({ ok: !x.err }), given: x => x.err ? "✗" : "✓", ans: x => x.c.map(c => c[3][0]).join(" · ")
  },
  emo: {
    make(U, ref) { const E = (U.plan && U.plan.emo) || []; if (!E.length) return null; const r = E[+ref % E.length], a = r[1];
      const pool = [...new Set(UNITS.slice(Math.max(0, U.n - 3), U.n + 1).flatMap(u => u.W.map(w => w.en)).concat(UNITS.slice(Math.max(0, U.n - 3), U.n + 1).flatMap(u => ((u.plan && u.plan.emo) || []).map(e => e[1]))))].filter(w => w !== a);
      return { k: "emo", r, a, opts: shuffle([a, ...pickN(pool, 2)]) }; },
    html: (x, T, opts) => T("v2Emo") + `<div class="v2-emo">${esc(x.r[0])}</div>` + opts(x.opts, o => esc(o), "col"),
    judge: (x, box, sel) => ({ ok: x.opts[sel] === x.a }), ans: x => x.r[0] + " = " + x.a
  },
  odd: {
    make(U) { const g = pickN(U.W.filter(w => !/\s/.test(w.en) || w.en.length < 14), 3); if (g.length < 3) return null;
      const far = UNITS.filter(u => u.v2 && Math.abs(u.n - U.n) >= 3 && (u.plan || {}).t !== (U.plan || {}).t), ou = far[(Math.random() * far.length) | 0], odd = ou && pickN(ou.W.filter(w => !g.some(x => x.en === w.en)), 1)[0];
      if (!odd) return null; return { k: "odd", g, odd, ou, opts: shuffle([...g.map(w => w.en), odd.en]) }; },
    html: (x, T, opts) => T("v2Odd") + opts(x.opts, o => esc(o), "two"),
    judge: (x, box, sel) => ({ ok: x.opts[sel] === x.odd.en, note: `«${esc(x.odd.en)}» → ${x.ou.e} ${esc(T3(x.ou.t))}` }),
    ans: x => x.odd.en
  },
  boss: {
    make(U, ref) { const B = U.plan && U.plan.boss; if (!B) return null; const i = +ref % B.q.length; return { k: "boss", q: B.q[i], t: B.t, i, n: B.q.length, lvl: 0 }; },
    html(x, T) { return T("v2Boss") + `${x.i === 0 ? `<p class="v2-scene">🎬 ${esc(T3(x.t))}</p>` : `<p class="v2-scene sm">👑 ${x.i + 1} / ${x.n}</p>`}<div class="dx-say">${pixMini(x.q[0])}<div class="dx-bub"><b>${esc(x.q[0])}</b>${sayBtn(x.q[0])}</div></div>` + micHTML(!SR_OK); },
    wire(x, box, ready) { micWire(x, box, ready, h => bossOk(x, h) ? 1 + h.length / 1e3 : h.length / 1e3); setTimeout(() => window.__dx === x && say(x.q[0]), 350); },
    judge(x) { const ok = bossOk(x, x.given || ""), heard = x.typing && !x.dict ? "" : `🎙 ${L("e2Heard")} «${esc(x.given || "")}»<br>`;
      return { ok, note: `<span class="dx-heard">${heard}${ok ? `<b>${L("e2Sample")}</b> ` : `<b>${L("v2BossW")}</b> `}${esc(x.q[2])}</span>`, noAns: true }; },
    given: x => x.given || "", ans: x => x.q[2]
  }
});
const bossOk = (x, h) => { const t = " " + dNorm(h) + " "; if (t.trim().length < 2) return false; try { return new RegExp(x.q[1].split("|").map(k => dNorm(k).replace(/[.*+?^${}()[\]\\]/g, "\\$&")).join("|")).test(t); } catch (e) { return false; } };

/* ---------- stages and exams (A1.1 · A1.2 · A1.3 = level exam) ---------- */
const stageUnits = s => UNITS.slice(s * 10, s * 10 + 10).filter(u => u.v2);
const examUnits = s => s >= 2 ? UNITS.filter(u => u.v2) : stageUnits(s);
const examName = s => s >= 2 ? "A1" : "A1." + (s + 1);
const stageDone = s => stageUnits(s).every(u => uDone(u.n) >= LPU);
const examWait = s => { const f = DP()["xf" + s] || [], r = lsGet("mv-xrep", {}), t = DP()["xt" + s] || 0; return f.some(u => r[u] > t) ? [] : f; };
function examOpen(s) { if (!A1_NEW || s < 0 || s > 2 || DP()["x" + s]) return false; if (examWait(s).length) return false; return stageDone(s) || unitOpen(s * 10); }
function examQueue(s) { V2_MISSU.length = 0; const P = examUnits(s), n = s >= 2 ? 20 : 12;
  const kinds = ["writew:r", "hearw:r", "build:R", "fill:F", "writew:r", "listen:R", "odd:0", "emo:0", "writew:r", "build:R", "hearw:r", "fill:F", "say:R", "writew:r", "build:R", "fill:F", "listen:R", "odd:0", "writew:r", "build:R"];
  const UU = shuffle(P), r = kinds.slice(0, n); let k = 0; P.forEach(u => u.ctx = {});
  return r.map(t => { const [kind, ref] = t.split(":"), U = UU[k++ % UU.length]; let x = makeEx(kind, U, ref, U.ctx); if (!x) x = makeEx("writew", U, "r", U.ctx); x.U = U; return x; }).filter(Boolean); }
function examFinish(root, s, acc, st) {
  const p = DP(), sec = Math.round((Date.now() - st.start) / 1000);
  if (acc >= 80) { p["x" + s] = 1; delete p["xf" + s];
    examUnits(s).slice(s >= 2 ? 20 : 0).forEach(u => { if ((p["u" + u.n] || 0) < LPU) p["u" + u.n] = LPU; });
    lsSet("mv-drill", p); addXp(25);
    const b = lsGet("mv-badges", {}); if (s >= 2 && UNITS.filter(u => u.v2).every(u => uDone(u.n) >= LPU)) b.sec0 = true; lsSet("mv-badges", b);
    if (typeof pushSync === "function") pushSync();
    return dDoneScreen(root, { xp: 25, acc, sec, perfect: st.miss === 0, heart: false, title: "🎓 " + L("v2ExamOk") + " · " + examName(s) }); }
  const miss = [...new Set(V2_MISSU)].filter(n => UNITS[n] && UNITS[n].v2).slice(0, 4), rep = miss.length ? miss : examUnits(s).slice(-2).map(u => u.n);
  p["xf" + s] = rep; p["xt" + s] = Date.now(); lsSet("mv-drill", p); sfx("fail");
  root.innerHTML = `<div class="ap dr-end v2-xfail"><div class="dr-endpix sad">${mascot("📚")}</div><h1>${L("v2ExamFail").replace("{n}", acc)}</h1><p class="dr-p">${L("v2ExamRep")}</p>
    <div class="v2-rep">${rep.map(n => `<a href="#drill-${n}-${Math.min(uDone(n), LPU - 1)}"><span>${UNITS[n].e}</span><b>${esc(T3(UNITS[n].t))}</b><i>›</i></a>`).join("")}</div><small class="dr-p">${L("v2ExamWait")}</small><a class="dr-link" href="#app-learn">${L("dQuit")}</a></div>`;
}
/* the stage header on the path: only the current stage is unfolded (others open with a tap) */
const curStage = () => { const c = curUnit(); return A1_NEW && c < A1_NEW ? UNITS[c].stage : -1; };
const stageFold = s => s === curStage() ? "" : "st-fold";
function stageHead(s) { const U = stageUnits(s), left = U.filter(u => uDone(u.n) < LPU).length, cur = s === curStage(), done = !!DP()["x" + s];
  const st = done ? L("v2StDone") : cur ? (s >= 2 ? L("v2LeftL").replace("{n}", left) : L("v2Left").replace("{n}", left).replace("{s}", "A1." + (s + 2))) : unitOpen(s * 10) ? L("v2Left").replace("{n}", left).replace("{s}", s >= 2 ? "A1 ✓" : "A1." + (s + 2)) : L("v2StLock");
  return `<button class="v2-stage ${done ? "done" : ""} ${cur ? "v2-cur open" : ""}" data-stage="${s}"><span class="v2-sbadge">A1.${s + 1}</span><span class="v2-stx"><b>${L("v2Stage")} A1.${s + 1}</b><small>${st}</small></span>${cur ? "" : "<i>▾</i>"}</button>`; }
function examCard(s) { const done = !!DP()["x" + s], ready = stageDone(s), early = !ready && unitOpen(s * 10), wait = examWait(s).length;
  const state = done ? "done" : wait ? "lock" : ready ? "ready" : early ? "early" : "lock";
  return `<div class="v2-exam ${state} ${stageFold(s)}" data-st="${s}"><span class="v2-xi">${done ? "🏅" : "🎓"}</span><span class="v2-xt"><b>${s >= 2 ? L("v2ExamL") : L("v2Exam") + " · A1." + (s + 1)}</b>
    <small>${done ? "✓ " + L("v2ExamOk") : wait ? L("v2ExamWait") : early ? L("v2ExamEarly") : ready ? (s >= 2 ? L("v2ExamPL") : L("v2ExamP")) : L("v2ExamLock")}</small></span>
    ${!done && !wait && (ready || early) ? `<a class="v2-xgo" href="#drill-x-${s}">${L("v2ExamGo")}</a>` : ""}</div>`; }
document.addEventListener("click", e => { const h = e.target.closest("[data-stage]"); if (!h) return; const s = h.dataset.stage, on = !h.classList.contains("open"); h.classList.toggle("open", on);
  document.querySelectorAll(`.dr-unit[data-st="${s}"], .v2-exam[data-st="${s}"]`).forEach(x => x.classList.toggle("st-show", on)); sfx("tap"); });

/* ---------- "Now you can…" and the native phrase under each unit ---------- */
function canLine(U) { const P = U.plan; if (!P) return ""; const done = uDone(U.n) >= LPU;
  return `<div class="v2-foot ${done ? "done" : ""}">${done ? `<p class="v2-can">✅ <b>${L("v2Can")}</b> ${esc(T3(P.can))}</p>` : ""}<p class="v2-nat">🗣 <b>${L("v2Nat")}</b> «${esc(P.nat[0])}»${sayBtn(P.nat[0])} <small>${esc(LANG === "ru" ? P.nat[2] : P.nat[1])}</small></p></div>`; }

/* ---------- "I know N words" ---------- */
const wordsKnown = () => UNITS.reduce((a, U) => { const d = uDone(U.n); return a + (U.v2 ? Math.min(d, 3) * 4 : Math.round(U.W.length * Math.min(d, 4) / 4)); }, 0);
const wordsPill = () => `<div class="v2-know"><span>🧠</span><b>${L("v2Know").replace("{n}", wordsKnown())}</b>${typeof streak === "function" && streak() ? `<i>🔥 ${streak()}</i>` : ""}</div>`;
function v2DoneHTML(unit, li) { const U = UNITS[unit]; if (unit == null || !U || !U.v2 || li == null) return "";
  if (li < 3) return `<p class="v2-dn">✨ ${L("v2New").replace("{n}", 4)} · 🧠 ${L("v2Know").replace("{n}", wordsKnown())}</p>`;
  if (li === 4) return `<p class="v2-dn can">✅ <b>${L("v2Can")}</b> ${esc(T3(U.plan.can))}</p>`; return ""; }

/* ---------- 80%: redo the lesson with new questions ---------- */
function redoScreen(root, ui, li, acc) {
  root.innerHTML = `<div class="ap dr-end"><div class="dr-endpix sad">${mascot("💪")}</div><h1>${L("v2Redo")}</h1><p class="dr-p">${L("v2RedoP").replace("{n}", acc)}</p>
    <button class="ap-cta" data-redo>${L("v2Retry")}</button><a class="dr-link" href="#app-learn">${L("dQuit")}</a></div>`;
  root.querySelector("[data-redo]").onclick = () => Router.remount(); }

/* ---------- weak words: mistakes are kept and come back before the next unit ---------- */
const V2_MISSU = [];
const weakAll = () => lsGet("mv-weak", []);
function weakOf(ui) { return weakAll().filter(w => w[0] < ui && UNITS[w[0]] && UNITS[w[0]].v2).slice(-6); }
function weakClear(ui) { lsSet("mv-weak", weakAll().filter(w => w[0] >= ui)); }
function weakQueue(ui) { const out = [], kinds = ["writew", "hearw", "mean", "writew", "rmean", "hearw"];
  weakOf(ui).forEach(([u, en], i) => { const U = UNITS[u], k = U.W.findIndex(w => w.en === en); if (k < 0) return; U.ctx = U.ctx || {}; const x = makeEx(kinds[i % kinds.length], U, "w" + k, U.ctx); if (x) { x.U = U; out.push(x); } });
  if (out.length < 4) { const U = UNITS[Math.max(0, ui - 1)]; U.ctx = {}; ["writew:r", "hearw:r", "build:R"].slice(0, 4 - out.length).forEach(t => { const [k, r] = t.split(":"), x = makeEx(k, U, r, U.ctx); if (x) { x.U = U; out.push(x); } }); }
  return out; }
const dMissAdd0 = dMissAdd;
dMissAdd = function (x) { dMissAdd0(x); if (!x || !x.U) return; V2_MISSU.push(x.U.n); if (!x.U.v2) return;
  const w = x.w || (x.f && x.f.tw) || (x.s && x.s.xw); if (!w || !w.en) return; const L0 = weakAll().filter(v => !(v[0] === x.U.n && v[1] === w.en)); L0.push([x.U.n, w.en]); lsSet("mv-weak", L0.slice(-30)); };
/* a lesson replayed in a unit the exam asked to repeat → the exam opens again */
function v2AfterLesson(mode, ui) { if (mode !== "lesson" || !UNITS[ui] || !UNITS[ui].v2) return; const r = lsGet("mv-xrep", {}); r[ui] = Date.now(); lsSet("mv-xrep", r); }
