/* SAFI: the same app served as its own product at /safiverse/ */
const SAFI = /\/safiverse(\/|$)/.test(location.pathname) || /safiverse/i.test(location.hostname);
const brandHTML = () => `<span class="ap-brand sv">Safi<i>verse</i></span>`;
/* ===== APP MODE (Duolingo-style): learning path, XP, daily goal, hearts-free practice, profile, badges ===== */
Object.assign(UI.en, { apLearn: "Learn", apPractice: "Practice", apLeague: "Leaderboard", apProfile: "Profile", apXp: "XP", apGoal: "Daily goal", apGoalDone: "Daily goal reached!",
  apStart: "START", apCourse: "Course", apChange: "Change", apUnit: "Unit", apLesson: "Lesson", apContinue: "Continue", apCheck: "Check", apGreat: ["Great job!", "Excellent!", "Nicely done!", "Amazing!", "You got it!"],
  apNo: "Correct answer:", apDone: "Lesson complete!", apEarned: "XP earned", apAccuracy: "Accuracy", apTime: "Time", apBack: "Back to path", apPick: "Pick your daily goal",
  apCasual: "Casual", apRegular: "Regular", apSerious: "Serious", apIntense: "Intense", apMin: "min / day", apWeek: "This week", apTotal: "Total XP", apBadges: "Badges", apDays: "day streak",
  apReview: "Review mistakes", apReviewP: "Questions you got wrong come back", apDaily: "Daily word", apErrors: "Mistake Hunters", apExam: "Exam practice", apLevelT: "Level test",
  apAppMode: "Safiverse", apSite: "Minaraverse", apReadFirst: "Read first", apAllUnits: "All courses", apLeagueP: "Weekly XP on this device. Send your results to Minara to appear on the hall of fame.",
  apSound: "Sound", apOn: "On", apOff: "Off", apName: "Your name", apLocked: "Finish the lesson before to unlock" });
Object.assign(UI.az, { apLearn: "Öyrən", apPractice: "Məşq", apLeague: "Reytinq", apProfile: "Profil", apXp: "XP", apGoal: "Günlük hədəf", apGoalDone: "Günlük hədəf tamamlandı!",
  apStart: "BAŞLA", apCourse: "Kurs", apChange: "Dəyiş", apUnit: "Bölmə", apLesson: "Dərs", apContinue: "Davam et", apCheck: "Yoxla", apGreat: ["Əla!", "Mükəmməl!", "Çox yaxşı!", "Super!", "Düzdür!"],
  apNo: "Düzgün cavab:", apDone: "Dərs bitdi!", apEarned: "Qazanılan XP", apAccuracy: "Dəqiqlik", apTime: "Vaxt", apBack: "Yola qayıt", apPick: "Günlük hədəfini seç",
  apCasual: "Rahat", apRegular: "Adi", apSerious: "Ciddi", apIntense: "İntensiv", apMin: "dəq / gün", apWeek: "Bu həftə", apTotal: "Cəmi XP", apBadges: "Nişanlar", apDays: "gün ardıcıl",
  apReview: "Səhvləri təkrarla", apReviewP: "Səhv cavab verdiyin suallar geri qayıdır", apDaily: "Günün sözü", apErrors: "Səhv ovçuları", apExam: "İmtahan məşqi", apLevelT: "Səviyyə testi",
  apAppMode: "Safiverse", apSite: "Minaraverse", apReadFirst: "Əvvəl oxu", apAllUnits: "Bütün kurslar", apLeagueP: "Bu cihazdakı həftəlik XP. Fəxri lövhəyə düşmək üçün nəticələrini Minaraya göndər.",
  apSound: "Səs", apOn: "Açıq", apOff: "Bağlı", apName: "Adın", apLocked: "Açmaq üçün əvvəlki dərsi bitir" });
Object.assign(UI.ru, { apLearn: "Учиться", apPractice: "Практика", apLeague: "Рейтинг", apProfile: "Профиль", apXp: "XP", apGoal: "Цель дня", apGoalDone: "Цель дня выполнена!",
  apStart: "СТАРТ", apCourse: "Курс", apChange: "Сменить", apUnit: "Раздел", apLesson: "Урок", apContinue: "Продолжить", apCheck: "Проверить", apGreat: ["Отлично!", "Превосходно!", "Молодец!", "Супер!", "Верно!"],
  apNo: "Правильный ответ:", apDone: "Урок пройден!", apEarned: "Получено XP", apAccuracy: "Точность", apTime: "Время", apBack: "К пути", apPick: "Выбери цель дня",
  apCasual: "Легко", apRegular: "Обычно", apSerious: "Серьёзно", apIntense: "Интенсивно", apMin: "мин / день", apWeek: "Эта неделя", apTotal: "Всего XP", apBadges: "Значки", apDays: "дней подряд",
  apReview: "Повторить ошибки", apReviewP: "Вопросы с ошибками возвращаются", apDaily: "Слово дня", apErrors: "Охота на ошибки", apExam: "Экзамен", apLevelT: "Тест уровня",
  apAppMode: "Safiverse", apSite: "Minaraverse", apReadFirst: "Сначала прочитай", apAllUnits: "Все курсы", apLeagueP: "Недельный XP на этом устройстве. Отправь результаты Минаре, чтобы попасть на доску почёта.",
  apSound: "Звук", apOn: "Вкл", apOff: "Выкл", apName: "Твоё имя", apLocked: "Пройди предыдущий урок, чтобы открыть" });

/* ---------- XP, daily goal, sound ---------- */
const XP = () => lsGet("mv-xp", { total: 0, days: {} });
const xpToday = () => XP().days[dayStr(new Date())] || 0;
const goal = () => lsGet("mv-goal", 30);
function addXp(n) { const x = XP(), d = dayStr(new Date()), was = x.days[d] || 0; x.total += n; x.days[d] = was + n; lsSet("mv-xp", x); markDay();
  if (was < goal() && x.days[d] >= goal()) setTimeout(() => toast("🎯 " + L("apGoalDone"), "gold"), 900); refreshHud(); }
const weekXp = () => { const x = XP(); return Array.from({ length: 7 }, (_, k) => { const d = new Date(); d.setDate(d.getDate() - 6 + k); return { d, v: x.days[dayStr(d)] || 0 }; }); };
const soundOn = () => lsGet("mv-sound", true);
let AC = null;
function beep(kind) {
  if (typeof sfx === "function") return sfx(kind === "ok" ? "ok" : kind === "no" ? "no" : "win");
  if (!soundOn()) return; try { AC = AC || new (window.AudioContext || window.webkitAudioContext)(); const t = AC.currentTime;
    const seq = kind === "ok" ? [[784, 0], [1047, .09]] : kind === "no" ? [[220, 0], [180, .12]] : [[523, 0], [659, .1], [784, .2], [1047, .32]];
    seq.forEach(([f, dt]) => { const o = AC.createOscillator(), g = AC.createGain(); o.type = kind === "no" ? "square" : "sine"; o.frequency.value = f;
      g.gain.setValueAtTime(.0001, t + dt); g.gain.exponentialRampToValueAtTime(kind === "no" ? .05 : .16, t + dt + .02); g.gain.exponentialRampToValueAtTime(.0001, t + dt + .22);
      o.connect(g).connect(AC.destination); o.start(t + dt); o.stop(t + dt + .25); }); } catch (e) {}
}
const buzz = ms => { try { navigator.vibrate && navigator.vibrate(ms); } catch (e) {} };
function toast(msg, cls = "") { const t = document.createElement("div"); t.className = "ap-toast " + cls; t.textContent = msg; document.body.appendChild(t); setTimeout(() => t.remove(), 2600); }

/* ---------- hooks from the quiz ---------- */
let LESSON = null;   /* running lesson stats in app mode */
function onQuizAnswer(good, isReview) {
  beep(good ? "ok" : "no"); buzz(good ? 15 : [30, 40, 30]);
  if (good) addXp(isReview ? 5 : 2);
  if (LESSON) { LESSON.n++; if (good) LESSON.ok++; else LESSON.miss++; LESSON.streak = good ? LESSON.streak + 1 : 0;
    const bar = document.querySelector(".ap-lbar i"); if (bar) bar.style.width = Math.min(100, LESSON.n / LESSON.total * 100) + "%";
    if (good && LESSON.streak >= 3 && LESSON.streak % 3 === 0) toast("🔥 " + LESSON.streak + " in a row!", "gold");
    const sheet = document.querySelector(".ap-sheet"); if (sheet) { sheet.className = "ap-sheet show " + (good ? "ok" : "no");
      sheet.querySelector("b").textContent = good ? L("apGreat")[(Math.random() * 5) | 0] : "😕 " + L("wrong"); } }
}
function onLessonDone(story, idx, score, n) {
  const bonus = score === n ? 20 : 10; addXp(bonus); beep("win");
  const first = !lsGet("mv-badges", {}).first; const b = lsGet("mv-badges", {}); if (first) b.first = dayStr(new Date());
  if (score === n) b.perfect = (b.perfect || 0) + 1; if (streak() >= 7) b.week = true; if (XP().total >= 500) b.xp500 = true; if (XP().total >= 2000) b.xp2000 = true;
  if (doneCount(story) === STORIES[story].units.length) b["w_" + story] = true; lsSet("mv-badges", b);
  if (LESSON) { LESSON.end = Date.now(); LESSON.score = score; LESSON.n2 = n; setTimeout(() => lessonDone(story, idx), 600); }
}

/* ---------- HUD (top bar) ---------- */
function hudHTML() { const g = goal(), t = xpToday(), p = Math.min(1, t / g);
  return `<div class="ap-hud">${apBack()}${brandHTML()}<span class="ap-flag" data-go="course">${courseEmoji(curCourse())}</span><span class="ap-st ${playedToday() ? "on" : ""}">🔥 <b>${streak()}</b></span><span class="ap-xp">⚡ <b>${XP().total}</b></span>
    <span class="ap-ring" title="${L("apGoal")}"><svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="15" class="bg"/><circle cx="18" cy="18" r="15" class="fg" style="stroke-dasharray:${(p * 94.2).toFixed(1)} 100"/></svg><b>${t}</b></span></div>`; }
/* one Safiverse app: the top-left button looks the same whether opened on its own or from Minaraverse */
const apBack = () => `<a class="ap-back" href="${SAFI ? "https://minaraverse.github.io/" : "#"}" aria-label="Minaraverse"><span>←</span><b>minara<i>verse</i></b></a>`;
function refreshHud() { document.querySelectorAll(".ap-hud").forEach(h => { const t = document.createElement("div"); t.innerHTML = hudHTML(); h.replaceWith(t.firstElementChild); }); }

/* ---------- course choice ---------- */
const COURSE_EMOJI = { milingo: "🌱", kids: "🧸", cafe: "☕", tapes: "📼", wild: "🐘", travel: "✈️", voyage: "🏴‍☠️", mystery: "🔎", movie: "🎬", business: "💼", ielts: "🎙", debate: "⚖️", heist: "🗝" };
const courseEmoji = k => COURSE_EMOJI[k] || "📘";
if (!lsGet("mv-course2", null)) { lsSet("mv-course", "milingo"); lsSet("mv-course2", 1); }
const curCourse = () => { const c = lsGet("mv-course", null); if (!c || c === "milingo") return "milingo"; if (STORIES[c]) return c; const l = myLevel(); return WORLD_ORDER.find(k => fitsLevel(STORIES[k].level, l)) || "tapes"; };
const noteOf = u => u.note || u.notes || u.log || u.syn || u.statement || u.prompt || "";

/* ---------- views ---------- */
const tabbar = act => `<nav class="ap-tabs">${[["learn", "🏠", L("apLearn")], ["practice", "💪", L("apPractice")], ["quests", "🎯", L("qTitle")], ["league", "🏆", L("apLeague")], ["profile", "👤", L("apProfile")]]
  .map(([k, e, t]) => `<a href="#app-${k}" class="${k === act ? "on" : ""}"><span>${e}</span><small>${t}</small></a>`).join("")}</nav>`;

VIEWS.app = root => {
  document.documentElement.classList.add("ap-mode");
  if (typeof safiGate === "function" && safiGate(root)) return {};
  if (typeof pushSync === "function" && ACCT() && !window.__svPulled) { window.__svPulled = 1; pushSync(true); }
  if (typeof apTheme === "function") apTheme(myThemeSec());
  const sub = (location.hash.match(/app-(\w+)/) || [])[1] || (lsGet("mv-goal", null) ? "learn" : "goal");
  setTimeout(() => { riseLetters(root, ".ap-h .ch", { stagger: 28, dur: 800 }); root.querySelectorAll(".ap-item,.ap-course,.ap-badges>div,.ap-stats>div,.ap-card").forEach((el, k) => el.animate([{ transform: "translateY(24px)", opacity: 0 }, { transform: "none", opacity: 1 }], { duration: REDUCED ? 1 : 600, delay: REDUCED ? 0 : 60 + k * 45, easing: "cubic-bezier(.2,.8,.2,1)", fill: "backwards" })); }, 0);
  const shell = (act, body) => `<div class="ap">${hudHTML()}<main class="ap-main">${body}</main>${tabbar(act)}</div>`;
  if (sub === "goal") {
    root.innerHTML = `<div class="ap ap-onb"><div class="ap-hud slim">${apBack()}${brandHTML()}</div><main class="ap-main"><div class="ap-mascot">${mascot("👋")}</div><h1 class="ap-h">${L("apPick")}</h1>
      <div class="ap-goals">${[[10, "apCasual", 5], [30, "apRegular", 10], [50, "apSerious", 15], [80, "apIntense", 20]].map(([x, k, m]) => `<button data-goal="${x}" class="${goal() === x ? "on" : ""}"><b>${L(k)}</b><span>${m} ${L("apMin")}</span><i>${x} XP</i></button>`).join("")}</div>
      <a class="ap-cta" href="#app-learn">${L("apContinue")}</a></main></div>`;
    root.onclick = e => { const b = e.target.closest("[data-goal]"); if (!b) return; lsSet("mv-goal", +b.dataset.goal); root.querySelectorAll("[data-goal]").forEach(x => x.classList.toggle("on", x === b)); };
    return {};
  }
  if (sub === "course") {
    const lv = myLevel();
    root.innerHTML = shell("learn", `<h1 class="ap-h">${letters(L("apAllUnits"))}</h1><button class="ap-course dr-main-c ${curCourse() === "milingo" ? "on" : ""}" data-course="milingo"><span>🌱</span><b>${L("dCourseName")}</b><small>A1 → B1 · ${drillLessons()}/${UNITS.length * LPU}</small><i>★</i></button><h2 class="ap-h2">${L("dStories")}</h2><div class="ap-courses">${WORLD_ORDER.map(k => { const S = STORIES[k], d = doneCount(k);
      return `<button class="ap-course ${k === curCourse() ? "on" : ""} ${lv && fitsLevel(S.level, lv) ? "fit" : ""}" data-course="${k}"><span>${courseEmoji(k)}</span><b>${esc(S.title)}</b><small>${S.level} · ${d}/${S.units.length}</small>${lv && fitsLevel(S.level, lv) ? `<i>★</i>` : ""}</button>`; }).join("")}</div>`);
    root.onclick = e => { const b = e.target.closest("[data-course]"); if (!b) return; lsSet("mv-course", b.dataset.course); Router.go("app-learn"); };
    return {};
  }
  if (sub === "learn" && curCourse() === "milingo") { root.innerHTML = shell("learn", drillPathHTML()); wireDrillPath(root); return {}; }
  if (sub === "learn") {
    const k = curCourse(), S = STORIES[k], nx = nextIndex(k);
    const nodes = S.units.map((u, i) => { const open = isOpen(k, i), done = isDone(k, i), cur = i === nx && !solved(k, i), off = [0, 60, 90, 60, 0, -60, -90, -60][i % 8];
      return `<div class="ap-node-w" style="--x:${off}px;--i:${i}">${cur ? `<span class="ap-start">${L("apStart")}</span>` : ""}<a class="ap-node ${done ? "done" : ""} ${cur ? "now" : ""} ${open ? "" : "lock"}" href="${open ? `#lesson-${k}-${i}` : "#app-learn"}" aria-label="${esc(u.name)}">
        <span>${done ? (best(k, i) === u.qs.length ? "👑" : "✓") : open ? (u.emoji || courseEmoji(k)) : "🔒"}</span></a><small class="ap-nl">${esc(u.name)}</small></div>`; }).join("");
    root.innerHTML = shell("learn", `<button class="ap-unit" data-go="course"><span><small>${L("apCourse")} · ${S.level}</small><b>${courseEmoji(k)} ${esc(S.title)}</b></span><i>${L("apChange")} ▾</i></button>
      <div class="ap-path">${nodes}<div class="ap-mascot side">${mascot(doneCount(k) ? "💪" : "👋")}</div></div>`);
    root.onclick = e => { if (e.target.closest("[data-go='course']")) Router.go("app-course"); const l = e.target.closest(".ap-node.lock"); if (l) { e.preventDefault(); toast("🔒 " + L("apLocked")); flash(l, "shake"); } };
    setTimeout(() => { const c = root.querySelector(".ap-node.now"); c && c.scrollIntoView({ block: "center", behavior: REDUCED ? "auto" : "smooth" }); }, 200);
    return {};
  }
  if (sub === "quests") { root.innerHTML = shell("quests", questsHTML()); wireQuests(root); return {}; }
  if (sub === "practice") {
    const due = dueKeys().length;
    const items = [["#drill-p", "💪", L("dPracticeAll"), L("dPracticeAllP")], ["#app-course", "📚", L("dStories"), L("apAllUnits")], ["#review", "🔁", L("apReview"), due ? `${due} · ${L("apReviewP")}` : L("reviewNone")], ["#daily", "🔤", L("apDaily"), dailyState().done ? L("dailyDone") : L("dailySub")],
      ["#errors", "🎯", L("apErrors"), "A1–C2"], ["#club", "☕", L("clubK"), L("clubNew")], ["#contract", "💼", "Business English", "B1–C1"], ["#level", "📊", L("apLevelT"), myLevel() ? myLevel() + " · " + lvName(myLevel()) : "A1–C2"]];
    root.innerHTML = shell("practice", `<h1 class="ap-h">${letters(L("apPractice"))}</h1><div class="ap-list">${items.map(([h, e, t, s]) => `<a class="ap-item" href="${h}"><span>${e}</span><b>${t}</b><small>${esc(s)}</small><i>›</i></a>`).join("")}</div>`);
    return {};
  }
  if (sub === "league") { leagueView(root, shell); return {}; }
  /* profile */
  const b = lsGet("mv-badges", {}), x = XP(), lv = myLevel();
  const BADGES = [["first", "🌱", "First lesson"], ...SECTIONS.map((s, i) => ["sec" + i, ["🥉", "🥈", "🥇"][i], T3(s.t) + " · " + s.lv]), ["perfect", "👑", "Perfect lesson"], ["week", "🔥", "7-day streak"], ["xp500", "⚡", "500 XP"], ["xp2000", "💎", "2000 XP"],
    ...WORLD_ORDER.map(k => ["w_" + k, courseEmoji(k), STORIES[k].title])];
  root.innerHTML = shell("profile", `<div class="ap-prof"><button class="ap-av ${myAvatar() ? "has" : ""}" data-av aria-label="${L("avEdit")}">${myAvatar() ? avatarSVG() : esc((NAME || "M")[0].toUpperCase())}<em>✎</em></button><div><input class="ap-name" value="${esc(NAME)}" placeholder="${L("apName")}"><small>${lv ? lv + " · " + lvName(lv) : L("findLevel")}</small></div></div>
    <div class="ap-stats"><div><b>🔥 ${streak()}</b><small>${L("apDays")}</small></div><div><b>⚡ ${x.total}</b><small>${L("apTotal")}</small></div><div><b>🎯 ${goal()}</b><small>${L("apGoal")}</small></div><div><b>📚 ${drillLessons() + WORLD_ORDER.reduce((a, k) => a + doneCount(k), 0)}</b><small>${L("chapters")}</small></div></div>
    <h2 class="ap-h2">${L("apBadges")}</h2><div class="ap-badges">${BADGES.map(([k, e, t]) => `<div class="${b[k] ? "on" : ""}"><span>${e}</span><small>${esc(t)}</small></div>`).join("")}</div>
    <div class="ap-set"><div class="ap-item"><span>❤️</span><b>${L("dHearts")}</b><small>${hearts()} / 5${hearts() >= 5 ? " · " + L("dFull") : ""}</small></div><a href="#app-goal" class="ap-item"><span>🎯</span><b>${L("apGoal")}</b><small>${goal()} XP</small><i>›</i></a>
      <button class="ap-item" data-snd><span>🔊</span><b>${L("apSound")}</b><small>${soundOn() ? L("apOn") : L("apOff")}</small><i>›</i></button>
      <div class="ap-item"><span>🌐</span><b>EN · AZ · RU</b>${langPill()}</div>
      <a href="#" class="ap-item"><span>🌍</span><b>${L("apSite")}</b><small>minaraverse.github.io</small><i>›</i></a>
      ${typeof ACCT === "function" && ACCT() ? `<button class="ap-item" data-out><span>📧</span><b>${esc(ACCT().email)}</b><small>${L("svOut")}</small><i>›</i></button>` : ""}<a href="${typeof svOn === "function" && svOn() ? "#sadmin" : "#admin"}" class="ap-item"><span>🔐</span><b>Admin</b><small>${typeof svOn === "function" && svOn() ? "Safiverse" : "Minaraverse"}</small><i>›</i></a></div>`);
  root.querySelector(".ap-name").oninput = e => { NAME = e.target.value.trim(); try { localStorage.setItem("mv-name", NAME); } catch (er) {} };
  root.querySelector("[data-av]").onclick = () => avatarSheet();
  const so = root.querySelector("[data-out]"); if (so) so.onclick = () => { pushSync(true); setTimeout(() => { ["mv-acct", "mv-lg", "mv-lgname", ...SYNC_KEYS].forEach(k => { try { localStorage.removeItem(k); } catch (e) {} }); lsSet("mv-guest", null); Router.go("app-learn"); location.reload(); }, 1200); };
  root.querySelector("[data-snd]").onclick = () => { lsSet("mv-sound", !soundOn()); Router.remount(); };
  return {};
};

/* ---------- lesson player ---------- */
VIEWS.lesson = root => {
  document.documentElement.classList.add("ap-mode");
  const m = location.hash.match(/lesson-(\w+)-(\d+)/); if (!m || !STORIES[m[1]]) { Router.go("app-learn"); return {}; }
  const k = m[1], i = +m[2], S = STORIES[k], u = S.units[i]; if (!u || !isOpen(k, i)) { Router.go("app-learn"); return {}; }
  const note = noteOf(u);
  LESSON = { k, i, n: 0, ok: 0, miss: 0, streak: 0, total: u.qs.length + Math.min(3, dueKeys(k + "|").filter(x => !x.startsWith(`${k}|${i}|`)).length), start: Date.now() };
  root.innerHTML = `<div class="ap ap-les"><header class="ap-lh">${apBack()}<a href="#app-learn" class="ap-x" aria-label="Close">✕</a><div class="ap-lbar"><i></i></div><span class="ap-st on">🔥 ${streak()}</span></header>
    <main class="ap-main">${note ? `<details class="ap-note" ${isDone(k, i) ? "" : "open"}><summary>📖 ${L("apReadFirst")} · ${esc(u.name)}</summary><p>${esc(note)} ${sayBtn(note)}</p>${trBlock(k, i)}</details>` : ""}
    <div class="ap-qz"></div></main><div class="ap-sheet"><b></b></div></div>`;
  Quiz(root.querySelector(".ap-qz"), { story: k, idx: i, cls: "qz-ap" });
  root.addEventListener("click", e => { if (e.target.closest('[data-q="adv"]')) { const s = root.querySelector(".ap-sheet"); s && (s.className = "ap-sheet"); } }, true);
  return { unmount() { LESSON = null; } };
};
function lessonDone(k, i) {
  const L0 = LESSON; if (!L0) return; const acc = Math.round(L0.ok / Math.max(1, L0.n) * 100), sec = Math.round((L0.end - L0.start) / 1000);
  const earned = L0.ok * 2 + (L0.score === L0.n2 ? 20 : 10);
  const ov = document.createElement("div"); ov.className = "ap-done";
  ov.innerHTML = `<div class="ap-cf">${Array.from({ length: 40 }, (_, j) => `<i style="left:${Math.random() * 100}%;--d:${Math.random()}s;--c:${["#ffcf5a", "#9ff0c0", "#9DB0FF", "#ff9fb0"][j % 4]}"></i>`).join("")}</div>
    <div class="ap-mascot">${mascot("🎉")}</div><h1>${L("apDone")}</h1>
    <div class="ap-res"><div class="y"><small>${L("apEarned")}</small><b>⚡ ${earned}</b></div><div class="g"><small>${L("apAccuracy")}</small><b>🎯 ${acc}%</b></div><div class="b"><small>${L("apTime")}</small><b>⏱ ${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}</b></div></div>
    <div class="ap-goalbar"><span>${L("apGoal")}</span><div><i style="width:${Math.min(100, xpToday() / goal() * 100)}%"></i></div><b>${xpToday()}/${goal()}</b></div>
    <a class="ap-cta" href="#app-learn">${L("apContinue")}</a>`;
  document.body.appendChild(ov); ov.querySelector(".ap-cta").onclick = () => ov.remove();
  addEventListener("hashchange", () => ov.remove(), { once: true });
}

/* ---------- mascot: Pixel the cat ---------- */
function mascot(say, k) {
  return `<span class="ap-pix ch-${k || themeChar()} ${/^p/.test(k || themeChar()) ? "is-p" : ""}">${charSVG(k || themeChar())}<i>${say}</i></span>`;
}

const STANDALONE = matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
/* ---------- Milingo opens only from its button: the home-screen app always starts on Minaraverse ---------- */
if (!SAFI && STANDALONE && /^#(app|lesson|drill)/.test(location.hash)) history.replaceState(null, "", location.pathname + location.search);
addEventListener("hashchange", () => { if (!/^#(app|lesson|drill)/.test(location.hash)) document.documentElement.classList.remove("ap-mode"); });

/* Safiverse: the app itself is the home page */
if (SAFI) { VIEWS.home = root => { Router.go("app-" + (lsGet("mv-goal", null) ? "learn" : "goal")); return {}; };
  for (const k of ["en", "az", "ru"]) UI[k].apAppMode = "Safiverse"; document.title = "Safiverse"; }
