/* ===== Safiverse social: duels, shared weekly goal, friends' feed + cheers, streak-shield gifts ===== */
Object.assign(UI.en, { soDuels: "Duels", soDuel: "Duel", soPlay: "Play", soYourTurn: n => `${n} challenges you!`, soWaitThem: n => `Waiting for ${n}`, soWin: "You won!", soLose: "You lost", soDraw: "Draw",
  soExpired: "Expired", soDeclined: "Declined", soDecline: "Decline", soDuelSent: "Duel sent ⚔️ — now it's your turn", soOpen: "You already have an open duel with this friend", soQ: (i, n) => `Question ${i} of ${n}`,
  soPickMeaning: "What does it mean?", soPickEn: "How do you say it in English?", soResultWait: "Done! The result appears when your friend plays.", soXp: n => `+${n} XP`,
  soGoal: "Weekly goal together", soGoalT: (n, t) => `You + ${n}: ${t} XP this week`, soGoalWon: "Goal reached! 🏅", soGoalDays: d => `${d} days left`, soGoalNew: "Goal together",
  soGoalBusy: "You or your friend already have a goal this week", soGoalPick: "Choose a goal for this week", soFeed: "Friends' news", soFeedNone: "No news yet",
  soEvStreak: n => `reached a ${n}-day streak 🔥`, soEvLessons: n => `finished ${n} lessons 📚`, soEvLevel: v => `completed level ${v} 🏅`, soEvTier: () => `moved up to a new league 🚀`,
  soGift: "Gift", soGiftSent: "Gift sent 🎁 — their streak is safe today", soGiftWeek: "You can send one gift a week", soGiftPlayed: "Your friend already played today",
  soGiftGot: n => `🎁 ${n} protected your streak today!`, soAgo: "ago", soCheers: n => `${n} 👏`, soNotFriend: "You can only do this with friends" });
Object.assign(UI.az, { soDuels: "Duellər", soDuel: "Duel", soPlay: "Oyna", soYourTurn: n => `${n} səni duelə çağırır!`, soWaitThem: n => `${n} cavab gözlənilir`, soWin: "Qalib gəldin!", soLose: "Uduzdun", soDraw: "Bərabər",
  soExpired: "Vaxtı bitdi", soDeclined: "Rədd edildi", soDecline: "Rədd et", soDuelSent: "Duel göndərildi ⚔️ — indi sənin növbəndir", soOpen: "Bu dostla artıq açıq duelin var", soQ: (i, n) => `Sual ${i} / ${n}`,
  soPickMeaning: "Mənası nədir?", soPickEn: "İngiliscə necə deyilir?", soResultWait: "Hazırdır! Nəticə dostun oynayanda görünəcək.", soXp: n => `+${n} XP`,
  soGoal: "Birgə həftəlik hədəf", soGoalT: (n, t) => `Sən + ${n}: bu həftə ${t} XP`, soGoalWon: "Hədəfə çatdınız! 🏅", soGoalDays: d => `${d} gün qalıb`, soGoalNew: "Birgə hədəf",
  soGoalBusy: "Sənin və ya dostunun bu həftə artıq hədəfi var", soGoalPick: "Bu həftə üçün hədəf seç", soFeed: "Dostların xəbərləri", soFeedNone: "Hələ xəbər yoxdur",
  soEvStreak: n => `${n} günlük seriyaya çatdı 🔥`, soEvLessons: n => `${n} dərsi bitirdi 📚`, soEvLevel: v => `${v} səviyyəsini bitirdi 🏅`, soEvTier: () => `yeni liqaya keçdi 🚀`,
  soGift: "Hədiyyə", soGiftSent: "Hədiyyə göndərildi 🎁 — bu gün seriyası qorunur", soGiftWeek: "Həftədə bir hədiyyə göndərmək olar", soGiftPlayed: "Dostun bu gün artıq dərs keçib",
  soGiftGot: n => `🎁 ${n} bu gün seriyanı qorudu!`, soAgo: "əvvəl", soCheers: n => `${n} 👏`, soNotFriend: "Bunu yalnız dostlarla etmək olar" });
Object.assign(UI.ru, { soDuels: "Дуэли", soDuel: "Дуэль", soPlay: "Играть", soYourTurn: n => `${n} вызывает тебя на дуэль!`, soWaitThem: n => `Ждём ${n}`, soWin: "Ты победил(а)!", soLose: "Ты проиграл(а)", soDraw: "Ничья",
  soExpired: "Время вышло", soDeclined: "Отклонено", soDecline: "Отклонить", soDuelSent: "Дуэль отправлена ⚔️ — теперь твой ход", soOpen: "С этим другом уже есть открытая дуэль", soQ: (i, n) => `Вопрос ${i} из ${n}`,
  soPickMeaning: "Что это значит?", soPickEn: "Как сказать по-английски?", soResultWait: "Готово! Результат появится, когда друг сыграет.", soXp: n => `+${n} XP`,
  soGoal: "Общая цель недели", soGoalT: (n, t) => `Ты + ${n}: ${t} XP за неделю`, soGoalWon: "Цель достигнута! 🏅", soGoalDays: d => `осталось дней: ${d}`, soGoalNew: "Общая цель",
  soGoalBusy: "У тебя или друга уже есть цель на эту неделю", soGoalPick: "Выбери цель на неделю", soFeed: "Новости друзей", soFeedNone: "Пока новостей нет",
  soEvStreak: n => `достиг(ла) серии ${n} дней 🔥`, soEvLessons: n => `прошёл(ла) ${n} уроков 📚`, soEvLevel: v => `завершил(а) уровень ${v} 🏅`, soEvTier: () => `перешёл(ла) в новую лигу 🚀`,
  soGift: "Подарок", soGiftSent: "Подарок отправлен 🎁 — сегодня серия друга защищена", soGiftWeek: "Можно дарить один подарок в неделю", soGiftPlayed: "Друг уже занимался сегодня",
  soGiftGot: n => `🎁 ${n} защитил(а) твою серию сегодня!`, soAgo: "назад", soCheers: n => `${n} 👏`, soNotFriend: "Это можно делать только с друзьями" });

const SO = () => lsGet("mv-so", null);
function soCount() { const s = SO(); return s ? (s.duels || []).filter(d => d.myTurn).length : 0; }
const soCall = (a, extra) => sPost(a, Object.assign(frAuth(), extra || {}), 15000);
const soErr = d => L({ open: "soOpen", busy: "soGoalBusy", week: "soGiftWeek", played: "soGiftPlayed", notfriend: "soNotFriend" }[d && d.err] || "svErr");

/* fetch state; deliver gifts and XP rewards exactly once. Returns true when something changed. */
async function soRefresh() {
  if (!svOn() || !ACCT()) return false; let d;
  try { d = await soCall("so_state"); } catch (e) { return false; }
  if (!d || !d.ok) { if (d && d.err === "auth") lsSet("mv-acct", null); return false; }
  (d.gifts || []).forEach(g => { const sh = lsGet("mv-shield", []); if (!sh.includes(g.day)) { sh.push(g.day); lsSet("mv-shield", sh.slice(-60)); } if (g.from) toast(L("soGiftGot")(g.from.name), "gold"); });
  const got = lsGet("mv-soxp", []); let add = 0;
  (d.duels || []).forEach(x => { if (x.status !== "done" || got.includes("d" + x.id)) return; got.push("d" + x.id); add += x.my > x.their ? 20 : x.my === x.their ? 10 : 5; });
  if (d.goal && d.goal.won && !got.includes("g" + d.goal.id)) { got.push("g" + d.goal.id); add += 50; }
  if (add) { lsSet("mv-soxp", got.slice(-200)); addXp(add); toast("⚡ " + L("soXp")(add), "gold"); if (typeof pushSync === "function") pushSync(); }
  if ((d.gifts || []).length && typeof pushSync === "function") pushSync();
  const before = JSON.stringify(SO()); delete d.gifts; lsSet("mv-so", d); return before !== JSON.stringify(d);
}

/* ---------- blocks inside the Friends screen ---------- */
const soAgo = t => { const m = Math.max(1, Math.round((Date.now() - t) / 6e4)); return m < 60 ? m + "′" : m < 1440 ? Math.round(m / 60) + "h" : Math.round(m / 1440) + "d"; };
function soHTML() {
  const s = SO(); if (!s) return "";
  const nm = c => esc(c ? c.name : "?");
  const duelRow = x => { const o = x.other || { name: "?", av: "" };
    const res = x.status === "done" ? `<b class="so-res ${x.my > x.their ? "w" : x.my < x.their ? "l" : ""}">${x.my} : ${x.their}</b><small>${x.my > x.their ? L("soWin") : x.my < x.their ? L("soLose") : L("soDraw")}</small>`
      : x.status === "expired" ? `<small>${L("soExpired")}</small>` : x.status === "declined" ? `<small>${L("soDeclined")}</small>`
      : x.myTurn ? `<button class="fr-b go" data-so-play="${x.id}">⚔️ ${L("soPlay")}</button>${x.mine ? "" : `<button class="fr-b" data-so-dno="${x.id}">${L("soDecline")}</button>`}` : `<small>⏳ ${L("soWaitThem")(nm(o))}</small>`;
    return `<div class="fr-row so-duel ${x.myTurn ? "turn" : ""}"><span class="lg-av">${avOf(o.av, o.name)}</span><div class="fr-who"><b>${x.myTurn && !x.mine ? esc(L("soYourTurn")(o.name)) : nm(o)}</b><small>⚔️ ${x.n} · ${soAgo(x.at)}</small></div><div class="fr-btns">${res}</div></div>`; };
  const duels = (s.duels || []).filter(x => x.status === "wait" || Date.now() - x.at < 7 * 864e5).slice(0, 6);
  const g = s.goal, pct = g ? Math.min(100, Math.round((g.me + g.them) / g.target * 100)) : 0, a = g ? Math.min(100, g.me / g.target * 100) : 0, b = g ? Math.min(100 - a, g.them / g.target * 100) : 0;
  const goal = g ? `<div class="ap-card so-goal ${g.won ? "won" : ""}"><small>🤝 ${L("soGoal")}</small><b>${esc(L("soGoalT")(g.other ? g.other.name : "?", g.target))}</b>
      <div class="so-bar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><i class="me" style="width:${a}%"></i><i class="them" style="width:${b}%"></i></div>
      <div class="so-gl"><span><i class="dot me"></i>${g.me}</span><span><i class="dot them"></i>${g.them}</span><span>${g.won ? L("soGoalWon") : L("soGoalDays")(g.days)}</span></div></div>` : "";
  const evText = f => ({ streak: L("soEvStreak"), lessons: L("soEvLessons"), level: L("soEvLevel"), tier: L("soEvTier") }[f.type] || (() => ""))(f.val);
  const feed = (s.feed || []).slice(0, 10).map(f => `<div class="so-ev"><span class="lg-av">${avOf(f.who && f.who.av, f.who && f.who.name)}</span><p><b>${f.me ? "⭐ " : ""}${nm(f.who)}</b> ${esc(evText(f))}<small> · ${soAgo(f.at)}</small></p>
      ${f.me ? (f.cheers ? `<em class="so-ch">${L("soCheers")(f.cheers)}</em>` : "") : `<button class="so-clap ${f.cheered ? "on" : ""}" data-so-cheer="${f.id}" aria-pressed="${f.cheered}">👏${f.cheers ? " " + f.cheers : ""}</button>`}</div>`).join("");
  return (duels.length ? `<h2 class="ap-h2">⚔️ ${L("soDuels")}</h2>${duels.map(duelRow).join("")}` : "") + goal
    + `<h2 class="ap-h2">📣 ${L("soFeed")}</h2>${feed ? `<div class="so-feed">${feed}</div>` : `<p class="ap-p">${L("soFeedNone")}</p>`}`;
}
function soActs(c) {
  const s = SO() || {}, open = (s.duels || []).some(x => x.status === "wait" && x.other && x.other.user === c.user);
  return `<div class="so-acts">${open ? "" : `<button class="fr-b" data-so-duel="${esc(c.user)}">⚔️ ${L("soDuel")}</button>`}${s.goal ? "" : `<button class="fr-b" data-so-goal="${esc(c.user)}">🤝 ${L("soGoalNew")}</button>`}${s.giftLeft && !c.today ? `<button class="fr-b" data-so-gift="${esc(c.user)}">🎁 ${L("soGift")}</button>` : ""}</div>`;
}

/* ---------- duel questions from the course words (same for both players, shown in each one's language) ---------- */
function soMakeQs() {
  const pool = []; const top = Math.max(0, curUnit());
  for (let u = 0; u <= top; u++) { const W = UNITS[u] && UNITS[u].W; if (W && W.length >= 4) W.forEach((_, k) => pool.push([u, k])); }
  if (pool.length < 5) for (let u = 0; u < Math.min(3, UNITS.length); u++) UNITS[u].W.forEach((_, k) => pool.push([u, k]));
  return pickN(pool, 5).map(([u, k], i) => { const others = pickN(UNITS[u].W.map((_, j) => j), 3, [k]), o = shuffle([k, ...others]); return { u, k, t: i % 2 ? "n" : "w", o, c: o.indexOf(k) }; });
}
function soPlay(id, qs, back) {
  const root = document.getElementById("view"); document.documentElement.classList.add("ap-mode");
  try { history.replaceState(null, "", location.pathname + location.search + "#app-duel"); } catch (e) {} /* so "✕" and "Continue" (→ #app-friends) really navigate */
  const st = { i: 0, ans: [], t0: Date.now() }, n = qs.length;
  const W = (u, k) => UNITS[u] && UNITS[u].W[k] || { en: "?", az: "?", ru: "?", e: "" };
  const draw = () => { const q = qs[st.i], w = W(q.u, q.k), en = q.t === "w";
    root.innerHTML = `<div class="ap ap-les so-play"><header class="ap-lh"><a href="#app-friends" class="ap-x" aria-label="Close">✕</a>${lhBrand()}<div class="ap-lbar"><i style="width:${st.i / n * 100}%"></i></div><span class="ap-st on">⚔️</span></header>
      <main class="ap-main"><small class="so-qn">${L("soQ")(st.i + 1, n)}</small><h2 class="ap-h2">${en ? L("soPickMeaning") : L("soPickEn")}</h2>
      <div class="so-word">${w.e ? `<span>${w.e}</span>` : ""}<b>${esc(en ? w.en : nat(w))}</b>${en ? sayBtn(w.en) : ""}</div>
      <div class="so-opts">${q.o.map((k, j) => `<button class="so-opt" data-o="${j}">${esc(en ? nat(W(q.u, k)) : W(q.u, k).en)}</button>`).join("")}</div></main></div>`;
    root.querySelector(".so-opts").onclick = async e => { const b = e.target.closest("[data-o]"); if (!b || st.lock) return; st.lock = 1; sfx("tap"); b.classList.add("pick"); st.ans.push(+b.dataset.o);
      setTimeout(async () => { st.lock = 0; st.i++; if (st.i < n) return draw(); await finish(); }, 260); }; };
  const finish = async () => { root.innerHTML = `<div class="ap"><main class="ap-main"><div class="ap-mascot">${mascot("⚔️")}</div><p class="ap-p">…</p></main></div>`;
    let r; try { r = await soCall("du_play", { id, ans: st.ans, ms: Date.now() - st.t0 }); } catch (e) { r = { ok: false }; }
    const right = r && r.right, mine = r && r.ok ? r.my : st.ans.length;
    const review = right ? `<div class="so-rev">${qs.map((q, i) => { const ok = st.ans[i] === right[i], w = W(q.u, q.k); return `<div class="${ok ? "ok" : "no"}">${ok ? "✓" : "✗"} <b>${esc(w.en)}</b> — ${esc(nat(w))}</div>`; }).join("")}</div>` : "";
    const done = r && r.status === "done", head = !r || !r.ok ? L("svErr") : done ? (r.my > r.their ? L("soWin") : r.my < r.their ? L("soLose") : L("soDraw")) : L("soResultWait");
    root.innerHTML = `<div class="ap"><main class="ap-main so-end"><div class="ap-mascot">${mascot(done && r.my > r.their ? "🏆" : "⚔️")}</div><h1 class="ap-h">${esc(head)}</h1>
      <div class="so-score"><b>${mine}</b><span>/ ${n}</span>${done ? `<em>:</em><b>${r.their}</b>` : ""}</div>${review}<a class="ap-cta" href="#app-friends">${L("apContinue")}</a></main></div>`;
    sfx(done && r.my > r.their ? "win" : "pop"); await soRefresh(); };
  draw();
}

/* ---------- clicks (friends screen + duel) ---------- */
document.addEventListener("click", async e => {
  const el = e.target.closest("[data-so-duel],[data-so-play],[data-so-dno],[data-so-goal],[data-so-gift],[data-so-cheer],[data-so-gt]"); if (!el || el.disabled) return;
  const err = m => { const x = document.querySelector(".sv-err"); toast(m); if (x) x.textContent = m; sfx("no"); };
  const busy = () => { el.disabled = true; el.dataset.t = el.textContent; el.textContent = "…"; }, free = () => { el.disabled = false; if (el.dataset.t) el.textContent = el.dataset.t; };
  try {
    if (el.dataset.soDuel) { busy(); const d = await soCall("so_duel_new", { user: el.dataset.soDuel, qs: soMakeQs() }); free(); if (!d.ok) return err(soErr(d)); toast(L("soDuelSent"), "gold"); soRefresh(); soPlay(d.id, d.qs); return; }
    if (el.dataset.soPlay) { busy(); const d = await soCall("du_get", { id: el.dataset.soPlay }); free(); if (!d.ok || d.status !== "wait") { await soRefresh(); return Router.remount(); } soPlay(el.dataset.soPlay, d.qs); return; }
    if (el.dataset.soDno) { busy(); await soCall("du_no", { id: el.dataset.soDno }); await soRefresh(); return Router.remount(); }
    if (el.dataset.soGoal) { const bar = el.closest(".so-acts"); bar.innerHTML = `<small class="so-gp">${L("soGoalPick")}</small>${[200, 300, 500].map(t => `<button class="fr-b ${t === 300 ? "go" : ""}" data-so-gt="${t}" data-u="${esc(el.dataset.soGoal)}">${t} XP</button>`).join("")}`; return; }
    if (el.dataset.soGt) { busy(); const d = await soCall("go_new", { user: el.dataset.u, target: +el.dataset.soGt }); if (!d.ok) { free(); return err(soErr(d)); } sfx("unlock"); await soRefresh(); return Router.remount(); }
    if (el.dataset.soGift) { busy(); const d = await soCall("gi_send", { user: el.dataset.soGift }); if (!d.ok) { free(); return err(soErr(d)); } sfx("win"); toast(L("soGiftSent"), "gold"); await soRefresh(); return Router.remount(); }
    if (el.dataset.soCheer) { const on = !el.classList.contains("on"); el.classList.toggle("on", on); if (on) { sfx("pop"); el.animate([{ transform: "scale(1)" }, { transform: "scale(1.35)" }, { transform: "scale(1)" }], { duration: 320 }); }
      const d = await soCall("so_cheer", { id: el.dataset.soCheer }); if (d.ok) { el.textContent = "👏" + (d.cheers ? " " + d.cheers : ""); el.classList.toggle("on", d.cheered); } return; }
  } catch (x) { free(); err(L("svErr")); }
});
