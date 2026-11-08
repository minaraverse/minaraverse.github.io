/* ===== Deep chapters: 7 steps per chapter — words → story → word practice → grammar → dictation → speaking → test.
   Content comes from DEEP[story][chapter] (deepdata.js); exercises for steps 3–5 are generated from it and run on the normal Quiz engine as small virtual stories. ===== */
const DEEP = {};
const deepLesson = (key, ci) => (DEEP[key] && DEEP[key][ci]) || null;
Object.assign(UI.en, { dpWords: "Words", dpStory: "Story", dpPractice: "Practice", dpGrammar: "Grammar", dpDict: "Dictation", dpSpeak: "Speaking", dpTest: "Test", dpStep: "Step", dpKnow: "I know these words", dpRead: "I've read it", dpNextStep: "Next step", dpMatchT: "Match the word and its meaning", dpGapT: "Choose the missing word", dpDictT: "Listen and type the sentence", dpSpeakP: "Listen, then say the sentence aloud. Tap the microphone and speak — or just repeat it and tick it off.", dpSaid: "I said it", dpMic: "Say it", dpListening: "Listening…", dpHeard: "I heard", dpGood: "Great!", dpTry: "Try again", dpExamples: "Examples", dpTestP: "Now the chapter test. Good luck!", dpAllDone: "Chapter complete!", dpSpeakDone: "Speaking done", dpProgress: "steps done" });
Object.assign(UI.az, { dpWords: "Sözlər", dpStory: "Hekayə", dpPractice: "Məşq", dpGrammar: "Qrammatika", dpDict: "Diktant", dpSpeak: "Danışıq", dpTest: "Test", dpStep: "Addım", dpKnow: "Bu sözləri bilirəm", dpRead: "Oxudum", dpNextStep: "Növbəti addım", dpMatchT: "Sözü və mənasını birləşdir", dpGapT: "Çatışmayan sözü seç", dpDictT: "Dinlə və cümləni yaz", dpSpeakP: "Dinlə, sonra cümləni ucadan de. Mikrofona toxun və danış — və ya sadəcə təkrar et və işarələ.", dpSaid: "Dedim", dpMic: "De", dpListening: "Dinləyirəm…", dpHeard: "Eşitdim", dpGood: "Əla!", dpTry: "Yenidən", dpExamples: "Nümunələr", dpTestP: "İndi fəsil testi. Uğurlar!", dpAllDone: "Fəsil tamamlandı!", dpSpeakDone: "Danışıq bitdi", dpProgress: "addım hazırdır" });
Object.assign(UI.ru, { dpWords: "Слова", dpStory: "История", dpPractice: "Практика", dpGrammar: "Грамматика", dpDict: "Диктант", dpSpeak: "Говорение", dpTest: "Тест", dpStep: "Шаг", dpKnow: "Я знаю эти слова", dpRead: "Прочитал(а)", dpNextStep: "Следующий шаг", dpMatchT: "Соедини слово и его значение", dpGapT: "Выбери пропущенное слово", dpDictT: "Послушай и напиши предложение", dpSpeakP: "Послушай, потом скажи предложение вслух. Нажми на микрофон и говори — или просто повтори и отметь.", dpSaid: "Сказал(а)", dpMic: "Сказать", dpListening: "Слушаю…", dpHeard: "Я услышал(а)", dpGood: "Отлично!", dpTry: "Ещё раз", dpExamples: "Примеры", dpTestP: "А теперь тест по главе. Удачи!", dpAllDone: "Глава пройдена!", dpSpeakDone: "Говорение пройдено", dpProgress: "шагов готово" });
const DP_STEPS = [["📚", "dpWords"], ["📖", "dpStory"], ["🧩", "dpPractice"], ["✏️", "dpGrammar"], ["🎧", "dpDict"], ["🎤", "dpSpeak"], ["🏁", "dpTest"]];
let DPS = lsGet("mv-deep", {});
const dpKey = (k, ci) => k + "-" + ci;
const dpDone = (k, ci) => DPS[dpKey(k, ci)] || [];
const dpMark = (k, ci, s) => { const a = dpDone(k, ci).slice(); a[s] = true; DPS[dpKey(k, ci)] = a; lsSet("mv-deep", DPS); };
const trWord = v => LANG === "ru" ? v[2] : LANG === "az" ? v[1] : v[1] + " · " + v[2];
/* virtual story holding generated exercises so the normal Quiz engine can run them */
function dpVirtual(id, title, qs) { STORIES[id] = { title, level: "", unit: "Step", noRiddle: true, virtual: true, units: [{ id, name: title, qs }] }; TR[id] = [[]]; return id; }
function dpExercises(key, ci, d) {
  const r = seedRand(key + ci), vocab = d.vocab.slice(), qs = [];
  const chunk = (a, n) => { const o = []; for (let i = 0; i < a.length; i += n) o.push(a.slice(i, i + n)); return o; };
  chunk(vocab, 4).forEach(c => { if (c.length < 3) return; qs.push([L("dpMatchT"), [c.map(v => v[0] + " = " + trWord(v)).join("; ")], L("dpGood"), { t: "match", pairs: c.map(v => [v[0], trWord(v)]), tr: {} }]); });
  vocab.forEach((v, i) => { if (i % 2) return; const re = new RegExp(v[0].replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"), m = v[3].match(re); if (!m) return;
    const others = vocab.filter(x => x !== v).sort(() => r() - .5).slice(0, 3).map(x => x[0]);
    qs.push([v[3].replace(re, "____"), [m[0], ...others], v[3], { t: "gap", tr: {} }]); });
  return qs;
}
function renderDeep(root, key, ci, cls) {
  const S = STORIES[key], u = S.units[ci], d = DEEP[key][ci], n = S.units.length, done = dpDone(key, ci);
  const m = location.hash.match(/\/s(\d)$/); let step = m ? Math.min(6, Math.max(0, +m[1] - 1)) : Math.min(6, done.findIndex(x => !x) < 0 ? (done.length ? 6 : 0) : done.findIndex(x => !x));
  if (!m) step = done.length ? step : 0;
  const base = `#${key}-${ci + 1}`;
  root.innerHTML = `<div class="gw gw-${key} gw-chv gw-deep">${topBar()}<main class="gw-main"><a class="gw-back" href="#${key}">← ${esc(S.title)}</a>
    <div class="gw-band">${WART[key]()}<div class="gw-bt"><span class="gw-em big">${u.emoji || "✦"}</span><div><p class="gw-k">${S.unit} ${ci + 1}/${n}</p><h1 class="gw-h2">${esc(u.name)}</h1><small>${esc(loc(u) || "")}</small></div></div></div>
    <ol class="dp-steps" aria-label="steps">${DP_STEPS.map(([ic, k], i) => `<li><a href="${base}/s${i + 1}" class="dp-st ${i === step ? "now" : ""} ${dpDone(key, ci)[i] ? "done" : ""}" aria-current="${i === step}"><span>${ic}</span><b>${L(k)}</b></a></li>`).join("")}</ol>
    <p class="dp-prog">${dpDone(key, ci).filter(Boolean).length}/7 ${L("dpProgress")}</p>
    <section class="dp-body"></section></main></div>`;
  const body = root.querySelector(".dp-body");
  const nextBtn = i => `<div class="qz-row dp-next"><a class="qz-btn" href="${base}/s${i + 2}">${L("dpNextStep")}: ${L(DP_STEPS[i + 1][1])} →</a></div>`;
  const finish = (i, html) => { dpMark(key, ci, i); root.querySelector(`.dp-st:nth-child(${i + 1})`); root.querySelectorAll(".dp-st")[i].classList.add("done"); root.querySelector(".dp-prog").textContent = `${dpDone(key, ci).filter(Boolean).length}/7 ${L("dpProgress")}`; if (html != null) body.insertAdjacentHTML("beforeend", html); };
  const stepTitle = i => `<p class="dp-k">${L("dpStep")} ${i + 1}/7 · ${DP_STEPS[i][0]} ${L(DP_STEPS[i][1])}</p>`;
  if (step === 0) {
    body.innerHTML = `${stepTitle(0)}<ul class="dp-words">${d.vocab.map(v => `<li class="dp-w"><div class="dp-wh"><b>${esc(v[0])}</b>${sayBtn(v[0], "sm")}<span class="dp-wt">${esc(trWord(v))}</span></div><p class="dp-we">${esc(v[3])} ${sayBtn(v[3], "sm")}</p></li>`).join("")}</ul>
      <div class="qz-row"><button type="button" class="qz-btn" data-dp="know">✓ ${L("dpKnow")}</button></div>`;
    body.querySelector("[data-dp=know]").onclick = e => { e.target.closest(".qz-row").remove(); finish(0, nextBtn(0)); };
  } else if (step === 1) {
    body.innerHTML = `${stepTitle(1)}<article class="gw-note dp-note"><p>${esc(u.note)} ${sayBtn(u.note)}</p>${trBlock(key, ci)}</article><div class="qz-row"><button type="button" class="qz-btn" data-dp="read">✓ ${L("dpRead")}</button></div>`;
    body.querySelector("[data-dp=read]").onclick = e => { e.target.closest(".qz-row").remove(); finish(1, nextBtn(1)); };
  } else if (step === 2 || step === 3 || step === 4) {
    const id = `${key}~${ci}~${step}`;
    const qs = step === 2 ? dpExercises(key, ci, d) : step === 3 ? d.grammar.qs : d.dict.map(sn => [L("dpDictT"), [sn], sn, { t: "dict", say: sn, tr: {} }]);
    dpVirtual(id, L(DP_STEPS[step][1]), qs);
    body.innerHTML = `${stepTitle(step)}${step === 3 ? `<div class="dp-rule"><h3>${esc(d.grammar.t)}</h3><p>${esc(d.grammar.rule.en)}</p>${LANG !== "en" ? `<p class="dp-rule-tr">${esc(d.grammar.rule[LANG] || "")}</p>` : ""}<p class="dp-exk">${L("dpExamples")}</p><ul>${d.grammar.ex.map(x => `<li>${esc(x)} ${sayBtn(x, "sm")}</li>`).join("")}</ul></div>` : ""}<div class="dp-quiz"></div>`;
    Quiz(body.querySelector(".dp-quiz"), { story: id, idx: 0, cls, slim: true, nextLabel: `${L("dpNextStep")}: ${L(DP_STEPS[step + 1][1])}`, onDone: () => finish(step, null), onNext: () => { location.hash = `${base}/s${step + 2}`; } });
  } else if (step === 5) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition, said = [];
    body.innerHTML = `${stepTitle(5)}<p class="dp-p">${L("dpSpeakP")}</p><ul class="dp-speak">${d.speak.map((sn, i) => `<li class="dp-sp" data-i="${i}"><div class="dp-sph">${sayBtn(sn, "sm")}<b>${esc(sn)}</b></div><div class="dp-spa">${SR ? `<button type="button" class="qz-mini dp-mic" data-mic="${i}">🎤 ${L("dpMic")}</button>` : ""}<button type="button" class="qz-mini dp-ok" data-said="${i}">✓ ${L("dpSaid")}</button><span class="dp-heard"></span></div></li>`).join("")}</ul>`;
    const mark = i => { if (said[i]) return; said[i] = true; body.querySelector(`.dp-sp[data-i="${i}"]`).classList.add("done"); if (d.speak.every((_, k) => said[k])) finish(5, `<p class="dp-okmsg">🎉 ${L("dpSpeakDone")}</p>${nextBtn(5)}`); };
    body.onclick = e => { const b = e.target.closest("[data-said]"), mic = e.target.closest("[data-mic]");
      if (b) mark(+b.dataset.said);
      if (mic && SR) { const i = +mic.dataset.mic, out = mic.parentElement.querySelector(".dp-heard"); out.textContent = L("dpListening"); mic.disabled = true;
        try { const rec = new SR(); rec.lang = "en-US"; rec.interimResults = false; rec.maxAlternatives = 3;
          rec.onresult = ev => { const alts = Array.from(ev.results[0]).map(a => a.transcript), target = norm(d.speak[i]).split(" "), okk = alts.some(a => wordDist(target, norm(a).split(" ")) <= Math.max(1, Math.floor(target.length * .3)));
            out.textContent = `${L("dpHeard")}: “${alts[0]}” — ${okk ? L("dpGood") : L("dpTry")}`; out.className = "dp-heard " + (okk ? "ok" : "no"); if (okk) mark(i); mic.disabled = false; };
          rec.onerror = () => { out.textContent = L("dpTry"); mic.disabled = false; }; rec.onend = () => { mic.disabled = false; if (out.textContent === L("dpListening")) out.textContent = ""; }; rec.start(); } catch (er) { out.textContent = ""; mic.disabled = false; } } };
  } else {
    body.innerHTML = `${stepTitle(6)}<p class="dp-p">${L("dpTestP")}</p><div class="gw-quiz"></div>`;
    Quiz(body.querySelector(".gw-quiz"), { story: key, idx: ci, cls, nextLabel: S.units[ci + 1] ? S.units[ci + 1].name : "", onDone: () => dpMark(key, ci, 6), onNext: () => Router.go(`${key}-${ci + 2}`) });
  }
}
