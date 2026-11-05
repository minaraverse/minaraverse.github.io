/* ===== Safiverse kids: the animated boy (football) and girl (bunny) =====
   welcome screen · lesson-end celebration · league / streak celebration · "Score a goal!" word game */
Object.assign(UI.en, { kGoal: "GOAL! ⚽", kGoalP: "Perfect lesson — no mistakes!", kHi: "Hi! Let's learn English together!", kLgUp: "New league! 🚀", kStreak7: "Week streak! 🔥",
  fbT: "Score a goal!", fbP: "Right answer — kick the ball in. 5 goals to win!", fbQ: "What does it mean?", fbWin: "You won the match! 🏆", fbLose: "Good game! Try again", fbScore: "Score", fbAgain: "Play again", fbBack: "Back", fbMiss: "Missed!", fbHit: "Goal!" });
Object.assign(UI.az, { kGoal: "QOL! ⚽", kGoalP: "Səhvsiz dərs!", kHi: "Salam! Gəl birlikdə ingiliscə öyrənək!", kLgUp: "Yeni liqa! 🚀", kStreak7: "Bir həftəlik seriya! 🔥",
  fbT: "Qol vur!", fbP: "Düzgün cavab — topu qapıya vur. 5 qol vuran qalib!", fbQ: "Bu nə deməkdir?", fbWin: "Matçı qazandın! 🏆", fbLose: "Yaxşı oyun idi! Yenidən cəhd et", fbScore: "Hesab", fbAgain: "Yenidən oyna", fbBack: "Geri", fbMiss: "Qaçırdın!", fbHit: "Qol!" });
Object.assign(UI.ru, { kGoal: "ГОЛ! ⚽", kGoalP: "Урок без ошибок!", kHi: "Привет! Давай учить английский вместе!", kLgUp: "Новая лига! 🚀", kStreak7: "Неделя подряд! 🔥",
  fbT: "Забей гол!", fbP: "Правильный ответ — бей по воротам. 5 голов — победа!", fbQ: "Что это значит?", fbWin: "Ты выиграл матч! 🏆", fbLose: "Хорошая игра! Попробуй ещё", fbScore: "Счёт", fbAgain: "Играть ещё", fbBack: "Назад", fbMiss: "Мимо!", fbHit: "Гол!" });

const kidImg = (k, cls = "") => `<img class="kid kid-${k} ${cls}" src="img/kid-${k}.webp?v=1" alt="" decoding="async">`;

/* 1 · welcome screen: Safi plus the two kids */
(function () {
  if (typeof welcomeScreen !== "function") return; const orig = welcomeScreen;
  welcomeScreen = function (root) { orig(root); const s = root.querySelector(".sv-safi"); if (!s) return;
    s.outerHTML = `<div class="kid-wel">${kidImg("boy")}<div class="sv-safi">${safiSVG("wave")}</div>${kidImg("girl")}</div><p class="kid-hi">${L("kHi")}</p>`; };
})();

/* also on the first (language) screen of onboarding */
(function () { if (typeof onbScreen !== "function") return; const orig = onbScreen;
  onbScreen = function (root, step) { orig(root, step); const s = root.querySelector(".sv-safi"); if (s && !root.querySelector(".kid-wel")) s.outerHTML = `<div class="kid-wel">${kidImg("boy")}<div class="sv-safi">${safiSVG("wave")}</div>${kidImg("girl")}</div>`; };
})();
/* 2 · lesson end: perfect lesson → the boy scores a goal; otherwise the girl waves with her bunny */
(function () {
  if (typeof dDoneScreen !== "function") return; const orig = dDoneScreen;
  dDoneScreen = function (root, o) { orig(root, o); const p = root.querySelector(".dr-endpix"); if (!p) return;
    const perfect = o && o.perfect; p.classList.add("kid-end"); p.innerHTML = kidImg(perfect ? "boy" : "girl");
    if (perfect) { const h = root.querySelector(".dr-end h1"); if (h) h.textContent = L("kGoal"); const sb = root.querySelector(".dr-sub"); if (sb) sb.textContent = "✨ " + L("kGoalP"); } };
})();

/* 3 · celebrations: moving up a league, and every 7-day streak */
function kidsCelebrate(root, title) {
  const box = document.createElement("div"); box.className = "kid-cel";
  box.innerHTML = `<div class="kid-row">${kidImg("boy")}${kidImg("girl")}</div><b>${esc(title)}</b>`;
  const h = root.querySelector(".dr-end h1, .lg-after h1"); (h ? h.parentNode : root).insertBefore(box, h ? h.nextSibling : null);
}
(function () {
  if (typeof streakScreen === "function") { const orig = streakScreen;
    streakScreen = function (root, then) { orig(root, then); const n = typeof streak === "function" ? streak() : 0; if (n > 0 && n % 7 === 0) kidsCelebrate(root, L("kStreak7")); }; }
  if (typeof lgAfterLesson === "function") { const orig = lgAfterLesson;
    lgAfterLesson = async function (root, back) { const t0 = (lsGet("mv-lg", null) || {}).tier; const r = await orig(root, back);
      const t1 = (lsGet("mv-lg", null) || {}).tier; if (r && t0 != null && t1 > t0) kidsCelebrate(root, L("kLgUp")); return r; }; }
})();

/* 5 · "Score a goal!" — a football word game in Worlds */
const FB_GOALS = 5, FB_SHOTS = 8;
function fbWords() { const out = [], lv = UNITS.slice(0, Math.max(6, curUnit() + 1)); lv.forEach(U => U.W.forEach(w => out.push(w))); return out; }
VIEWS.goal = root => {
  document.documentElement.classList.add("ap-mode");
  const W = fbWords(); let goals = 0, shots = 0, busy = false;
  const pick = () => { const w = W[(Math.random() * W.length) | 0], opts = [w]; while (opts.length < 3) { const o = W[(Math.random() * W.length) | 0]; if (!opts.some(x => x.en === o.en || nat(x) === nat(o))) opts.push(o); } return { w, opts: opts.sort(() => Math.random() - .5) }; };
  const draw = () => { const q = pick();
    root.innerHTML = `<div class="ap fb"><div class="ap-hud slim"><a class="ap-back" href="#app-practice"><span>←</span><b>${L("fbBack")}</b></a>${brandHTML()}</div><main class="ap-main fb-main">
      <h1 class="ap-h">⚽ ${L("fbT")}</h1><div class="fb-score"><span>${L("fbScore")}</span><b>${goals}</b><i>/ ${FB_GOALS}</i><small>${"⚽".repeat(Math.max(0, FB_SHOTS - shots))}</small></div>
      <div class="fb-pitch"><div class="fb-goal"><i class="fb-keeper">🧤</i><i class="fb-net"></i></div><i class="fb-ball">⚽</i>${kidImg("boy", "fb-kid")}<b class="fb-msg"></b></div>
      <div class="fb-q"><small>${L("fbQ")}</small><b>${esc(q.w.en)}</b>${typeof sayBtn === "function" ? sayBtn(q.w.en) : ""}</div>
      <div class="fb-opts">${q.opts.map((o, i) => `<button class="fb-o" data-i="${i}"><span>${o.e || ""}</span>${esc(nat(o))}</button>`).join("")}</div></main></div>`;
    setTimeout(() => typeof say === "function" && say(q.w.en), 300);
    root.onclick = e => { const b = e.target.closest(".fb-o"); if (!b || busy) return; busy = true;
      const ok = q.opts[+b.dataset.i] === q.w; shots++; b.classList.add(ok ? "good" : "bad");
      if (!ok) root.querySelectorAll(".fb-o").forEach((x, i) => { if (q.opts[i] === q.w) x.classList.add("good"); });
      const pitch = root.querySelector(".fb-pitch"), msg = root.querySelector(".fb-msg");
      pitch.classList.add(ok ? "shoot-in" : "shoot-out"); msg.textContent = ok ? L("fbHit") : L("fbMiss");
      if (ok) { goals++; sfx("win"); buzz([30, 40, 80]); } else { sfx("miss"); buzz(40); }
      setTimeout(() => { busy = false; if (goals >= FB_GOALS || shots >= FB_SHOTS) end(); else draw(); }, 1500); }; };
  const end = () => { const won = goals >= FB_GOALS; if (won) { addXp(15); sfx("win"); }
    root.innerHTML = `<div class="ap dr-end fb-end"><div class="dr-endpix kid-end">${kidImg(won ? "boy" : "girl")}</div><h1>${won ? L("fbWin") : L("fbLose")}</h1>
      <p class="dr-sub">⚽ ${goals} / ${FB_GOALS}${won ? " · +15 XP" : ""}</p><button class="ap-cta" data-again>${L("fbAgain")}</button><a class="dr-link" href="#app-practice">${L("fbBack")}</a></div>`;
    root.onclick = e => { if (e.target.closest("[data-again]")) { goals = 0; shots = 0; draw(); } }; };
  draw(); return {};
};
