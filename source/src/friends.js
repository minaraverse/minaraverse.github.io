/* ===== Safiverse friends: find by exact username → request → accept. No browsing of users, no emails shown. ===== */
Object.assign(UI.en, { invT: "Invite friends", invP: "Send your link — your friend opens it and sends you a friend request.", invShare: "Invite", invCopy: "Copy link", invQR: "QR code", invCopied: "Link copied ✓", invQRP: "Let your friend scan it with the phone camera", invMsg: u => `Learn English with me on Safiverse! 🚀 My username: @${u}`, invHi: n => `${n} invites you to be friends`, invHiP: "Send a friend request — they confirm with one tap.", invSend: "Send friend request", invLater: "Later", invDone: "Request sent ✓ — wait for the answer", invNeedU: "Choose your username first to invite friends", frT: "Friends", frFind: "Find a friend", frFindP: "Type your friend's exact username", frGo: "Search", frNone: "No one with this username", frSelf: "This is you 🙂",
  frAdd: "Add friend", frSent: "Request sent", frCancel: "Cancel", frAccept: "Accept", frDecline: "Decline", frRemove: "Remove", frIsFriend: "Friends ✓",
  frIn: "Friend requests", frOut: "Waiting for answer", frList: "My friends", frEmpty: "No friends yet — find someone by username.", frWeek: "This week",
  frNoUser: "First choose your username", frMany: "Too many open requests", frSure: "Remove from friends?", frShare: "Your username", frOff: "Friends work on the Safiverse site." });
Object.assign(UI.az, { invT: "Dostlarını dəvət et", invP: "Linkini göndər — dostun açır və sənə dostluq sorğusu göndərir.", invShare: "Dəvət et", invCopy: "Linki kopyala", invQR: "QR kod", invCopied: "Link kopyalandı ✓", invQRP: "Dostun telefon kamerası ilə oxutsun", invMsg: u => `Mənimlə Safiverse-də ingilis dili öyrən! 🚀 Mənim adım: @${u}`, invHi: n => `${n} səni dostluğa dəvət edir`, invHiP: "Dostluq sorğusu göndər — o, bir toxunuşla təsdiqləyəcək.", invSend: "Dostluq sorğusu göndər", invLater: "Sonra", invDone: "Sorğu göndərildi ✓ — cavabı gözlə", invNeedU: "Dəvət etmək üçün əvvəl istifadəçi adını seç", frT: "Dostlar", frFind: "Dost tap", frFindP: "Dostunun dəqiq istifadəçi adını yaz", frGo: "Axtar", frNone: "Bu adla istifadəçi yoxdur", frSelf: "Bu sənsən 🙂",
  frAdd: "Dost əlavə et", frSent: "Sorğu göndərildi", frCancel: "Ləğv et", frAccept: "Qəbul et", frDecline: "Rədd et", frRemove: "Sil", frIsFriend: "Dostsunuz ✓",
  frIn: "Dostluq sorğuları", frOut: "Cavab gözlənilir", frList: "Dostlarım", frEmpty: "Hələ dostun yoxdur — istifadəçi adı ilə tap.", frWeek: "Bu həftə",
  frNoUser: "Əvvəl istifadəçi adını seç", frMany: "Çox açıq sorğu var", frSure: "Dostlardan silinsin?", frShare: "Sənin istifadəçi adın", frOff: "Dostlar Safiverse saytında işləyir." });
Object.assign(UI.ru, { invT: "Пригласи друзей", invP: "Отправь свою ссылку — друг откроет её и пришлёт тебе запрос в друзья.", invShare: "Пригласить", invCopy: "Скопировать ссылку", invQR: "QR-код", invCopied: "Ссылка скопирована ✓", invQRP: "Пусть друг отсканирует его камерой телефона", invMsg: u => `Учи английский со мной в Safiverse! 🚀 Моё имя: @${u}`, invHi: n => `${n} приглашает тебя в друзья`, invHiP: "Отправь запрос в друзья — он подтвердит одним касанием.", invSend: "Отправить запрос в друзья", invLater: "Позже", invDone: "Запрос отправлен ✓ — жди ответа", invNeedU: "Чтобы приглашать, сначала выбери имя пользователя", frT: "Друзья", frFind: "Найти друга", frFindP: "Введи точное имя пользователя друга", frGo: "Искать", frNone: "Пользователя с таким именем нет", frSelf: "Это ты 🙂",
  frAdd: "Добавить в друзья", frSent: "Запрос отправлен", frCancel: "Отменить", frAccept: "Принять", frDecline: "Отклонить", frRemove: "Удалить", frIsFriend: "Вы друзья ✓",
  frIn: "Запросы в друзья", frOut: "Ждём ответа", frList: "Мои друзья", frEmpty: "Пока нет друзей — найди кого-нибудь по имени пользователя.", frWeek: "На этой неделе",
  frNoUser: "Сначала выбери имя пользователя", frMany: "Слишком много открытых запросов", frSure: "Удалить из друзей?", frShare: "Твоё имя пользователя", frOff: "Друзья работают на сайте Safiverse." });

const frAuth = () => { const a = ACCT() || {}; return { email: a.email, token: a.token }; };
const frCall = (a, extra) => sPost(a, Object.assign(frAuth(), extra || {}), 12000);
const frCount = () => (lsGet("mv-fr", null) || { incoming: [] }).incoming.length + (typeof soCount === "function" ? soCount() : 0);
async function frRefresh() { if (!svOn() || !ACCT()) return null; try { const d = await frCall("fr_list"); if (d.ok) { lsSet("mv-fr", d); return d; } if (d.err === "auth") lsSet("mv-acct", null); } catch (e) {} return null; }

/* ---------- invites: personal link safiverse.github.io/#invite=<username>, share sheet, copy, QR ---------- */
const INV_BASE = "https://safiverse.github.io/";
const invLink = u => INV_BASE + "#invite=" + encodeURIComponent(u);
const invCatch = live => { const m = location.hash.match(/^#invite=([a-z0-9._]{3,20})/i); if (!m) return;
  try { localStorage.setItem("mv-inv", JSON.stringify(m[1].toLowerCase())); } catch (e) {}
  if (live && typeof Router !== "undefined") Router.go("app-learn"); else history.replaceState(null, "", location.pathname + location.search + "#app-learn"); };
invCatch(false); addEventListener("hashchange", () => invCatch(true));
function invCopy(link) { const done = () => toast(L("invCopied"), "gold");
  try { navigator.clipboard.writeText(link).then(done, () => { const t = document.createElement("textarea"); t.value = link; document.body.appendChild(t); t.select(); try { document.execCommand("copy"); done(); } catch (e) {} t.remove(); }); } catch (e) {} }
async function invShare(u) { const link = invLink(u), text = L("invMsg")(u);
  if (navigator.share) { try { await navigator.share({ title: "Safiverse", text: text, url: link }); return; } catch (e) { if (e && e.name === "AbortError") return; } }
  invCopy(text + "\n" + link); }
function invQR(u) { if (!window.qrcode) return ""; const q = qrcode(0, "M"); q.addData(invLink(u)); q.make(); const n = q.getModuleCount(); let d = "";
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (q.isDark(r, c)) d += `M${c} ${r}h1v1h-1z`;
  return `<svg class="inv-qr" viewBox="-2 -2 ${n + 4} ${n + 4}" shape-rendering="crispEdges" role="img" aria-label="QR"><rect x="-2" y="-2" width="${n + 4}" height="${n + 4}" fill="#fff"/><path d="${d}" fill="#0d1a15"/></svg>`; }
/* after sign-in: "X invites you" sheet */
async function invPrompt() {
  const u = lsGet("mv-inv", null); if (!u || !svOn() || !ACCT() || document.querySelector(".inv-sheet")) return;
  const a = ACCT(); if (a.user === u) { lsSet("mv-inv", null); return; }
  let d; try { d = await frCall("fr_find", { user: u }); } catch (e) { return; }
  if (!d || !d.ok || !d.found || d.state === "self" || d.state === "friends" || d.state === "out") { lsSet("mv-inv", null); return; }
  const c = d.found, sh = document.createElement("div"); sh.className = "inv-sheet";
  sh.innerHTML = `<div class="inv-card" role="dialog" aria-modal="true"><span class="lg-av big">${avOf(c.av, c.name)}</span><h2>${esc(L("invHi")(c.name))}</h2><small>@${esc(c.user)} · 🔥 ${c.streak} · ⚡ ${c.xp}</small>
    <p>${d.state === "in" ? "" : L("invHiP")}</p><button class="ap-cta" data-ok>${d.state === "in" ? L("frAccept") : L("invSend")}</button><button class="dr-link" data-no>${L("invLater")}</button><p class="sv-err" role="alert"></p></div>`;
  document.body.appendChild(sh);
  sh.onclick = async e => { if (e.target.closest("[data-no]") || e.target === sh) { lsSet("mv-inv", null); sh.remove(); return; }
    if (!e.target.closest("[data-ok]")) return; const b = sh.querySelector("[data-ok]"); b.disabled = true; b.textContent = "…";
    try { const r = await frCall(d.state === "in" ? "fr_ans" : "fr_req", { user: u, yes: true });
      if (r.ok) { lsSet("mv-inv", null); sh.remove(); sfx(r.state === "friends" ? "win" : "pop"); toast(r.state === "friends" ? L("frIsFriend") : L("invDone"), "gold"); frRefresh(); return; }
      if (r.err === "nouser") { sh.remove(); regScreen(document.getElementById("view"), "set"); return; }
      sh.querySelector(".sv-err").textContent = L("svErr"); } catch (x) { sh.querySelector(".sv-err").textContent = L("svErr"); }
    b.disabled = false; b.textContent = L("invSend"); };
}

function friendsView(root, shell) {
  if (!svOn() || !ACCT()) { root.innerHTML = shell("profile", `<h1 class="ap-h">👥 ${L("frT")}</h1><p class="ap-p">${L("frOff")}</p>`); return; }
  const st = { q: "", found: undefined, fstate: "", busy: false, data: lsGet("mv-fr", null) };
  const row = (c, btns) => `<div class="fr-row"><span class="lg-av">${avOf(c.av, c.name)}</span><div class="fr-who"><b>${esc(c.name)}</b><small>@${esc(c.user)} · 🔥 ${c.streak} · ⚡ ${c.xp}</small></div><div class="fr-btns">${btns}</div></div>`;
  const btn = (k, u, t, cls = "") => `<button class="fr-b ${cls}" data-${k}="${esc(u)}">${t}</button>`;
  const stateBtns = (s, u) => s === "none" ? btn("req", u, "➕ " + L("frAdd"), "go") : s === "out" ? `<small class="fr-tag">⏳ ${L("frSent")}</small>` + btn("del", u, L("frCancel"))
    : s === "in" ? btn("yes", u, L("frAccept"), "go") + btn("no", u, L("frDecline")) : s === "friends" ? `<small class="fr-tag ok">${L("frIsFriend")}</small>` : `<small class="fr-tag">${L("frSelf")}</small>`;
  const draw = () => { const d = st.data || { friends: [], incoming: [], outgoing: [] }, a = ACCT() || {};
    const board = [...(d.friends || []), ...(d.me ? [d.me] : [])].sort((x, y) => y.wk - x.wk || y.xp - x.xp);
    root.innerHTML = shell("profile", `<a href="#app-profile" class="fr-back">← ${L("apProfile")}</a><h1 class="ap-h">👥 ${L("frT")}</h1>
      <div class="ap-card fr-me"><small>${L("frShare")}</small><b>@${esc(a.user || "—")}</b>${a.user ? `<p class="inv-p">${L("invP")}</p><div class="inv-btns"><button class="fr-b go" data-share>📤 ${L("invShare")}</button><button class="fr-b" data-copy>🔗 ${L("invCopy")}</button><button class="fr-b" data-qr aria-expanded="${st.qr ? "true" : "false"}">▦ ${L("invQR")}</button></div>${st.qr ? `<div class="inv-qrbox">${invQR(a.user)}<small>${L("invQRP")}</small></div>` : ""}` : `<p class="inv-p">${L("invNeedU")}</p><button class="fr-b go" data-setu>${L("frNoUser")}</button>`}</div>
      <form class="fr-find" novalidate><b>${L("frFind")}</b><small class="fr-hint">${L("frFindP")}</small><div class="fr-in"><input name="q" maxlength="24" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="@username" aria-label="${L("frFindP")}" value="${esc(st.q)}"><button class="ap-cta fr-go">${L("frGo")}</button></div>
        <div class="fr-res" role="status">${st.found === undefined ? "" : st.found === null ? `<p class="ap-p">${L("frNone")}</p>` : row(st.found, stateBtns(st.fstate, st.found.user))}</div><p class="sv-err" role="alert"></p></form>
      ${(d.incoming || []).length ? `<h2 class="ap-h2">${L("frIn")} <em class="fr-n">${d.incoming.length}</em></h2>${d.incoming.map(c => row(c, btn("yes", c.user, L("frAccept"), "go") + btn("no", c.user, L("frDecline")))).join("")}` : ""}
      ${typeof soHTML === "function" ? soHTML(d) : ""}
      <h2 class="ap-h2">${L("frList")}</h2>${(d.friends || []).length ? `<small class="fr-wk">🏆 ${L("frWeek")}</small><ol class="fr-board">${board.map((c, i) => `<li class="${c.me ? "me" : ""}"><div class="fr-line"><span class="fr-rk">${i + 1}</span>${row(c, c.me ? "" : btn("rm", c.user, "✕", "x"))}<b class="fr-x">⚡ ${c.wk}</b></div>${!c.me && typeof soActs === "function" ? soActs(c) : ""}</li>`).join("")}</ol>`
        : `<p class="ap-p">${L("frEmpty")}</p>`}
      ${(d.outgoing || []).length ? `<h2 class="ap-h2">${L("frOut")}</h2>${d.outgoing.map(c => row(c, btn("del", c.user, L("frCancel")))).join("")}` : ""}`);
    wire(); };
  const err = m => { const e = root.querySelector(".sv-err"); if (e) { e.textContent = m; flash(e, "shake"); } sfx("no"); };
  const errOf = d => L({ nouser: "frNoUser", many: "frMany", user: "svUserBad" }[d && d.err] || "svErr");
  const act = async (a, u, extra) => { if (st.busy) return; st.busy = true;
    try { const d = await frCall(a, Object.assign({ user: u }, extra || {})); st.busy = false; if (!d.ok) return err(errOf(d));
      if (st.found && st.found.user === u) st.fstate = d.state; sfx(d.state === "friends" ? "win" : "tap"); const r = await frRefresh(); if (r) st.data = r; draw(); }
    catch (e) { st.busy = false; err(L("svErr")); } };
  const wire = () => {
    const f = root.querySelector(".fr-find");
    f.onsubmit = async e => { e.preventDefault(); st.q = f.q.value.trim(); const u = st.q.toLowerCase().replace(/^@/, "").replace(/\s+/g, "_");
      if (!/^[a-z0-9._]{3,20}$/.test(u)) return err(L("svUserBad")); const b = f.querySelector(".fr-go"); b.disabled = true; b.textContent = "…";
      try { const d = await frCall("fr_find", { user: u }); if (!d.ok) { b.disabled = false; b.textContent = L("frGo"); return err(errOf(d)); } st.found = d.found; st.fstate = d.state || ""; draw(); }
      catch (x) { b.disabled = false; b.textContent = L("frGo"); err(L("svErr")); } };
    root.onclick = e => { const g = k => { const el = e.target.closest(`[data-${k}]`); return el ? el.getAttribute(`data-${k}`) : null; };
      let u; if ((u = g("req")) != null) act("fr_req", u); else if ((u = g("yes")) != null) act("fr_ans", u, { yes: true }); else if ((u = g("no")) != null) act("fr_ans", u, { yes: false });
      else if ((u = g("del")) != null) act("fr_del", u); else if ((u = g("rm")) != null) { if (confirmSheetless(L("frSure"), e.target)) act("fr_del", u); }
      else if (e.target.closest("[data-setu]")) regScreen(root, "set");
      else if (e.target.closest("[data-share]")) invShare(ACCT().user); else if (e.target.closest("[data-copy]")) invCopy(invLink(ACCT().user));
      else if (e.target.closest("[data-qr]")) { st.qr = !st.qr; grabQ(); draw(); } };
    const grabQ = () => { const q = root.querySelector("input[name=q]"); if (q) st.q = q.value; };
  };
  /* inline two-tap confirm (no browser dialogs) */
  const confirmSheetless = (msg, el) => { const b = el.closest("[data-rm]"); if (b.dataset.sure) return true; b.dataset.sure = 1; b.textContent = msg; b.classList.add("warn"); setTimeout(() => { if (b.isConnected) { delete b.dataset.sure; b.textContent = "✕"; b.classList.remove("warn"); } }, 3000); return false; };
  draw(); frRefresh().then(r => { if (r && root.isConnected && /app-friends/.test(location.hash)) { st.data = r; draw(); } });
  if (typeof soRefresh === "function") soRefresh().then(ch => { if (ch && root.isConnected && /app-friends/.test(location.hash)) draw(); });
}
