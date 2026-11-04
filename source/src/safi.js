/* ===== Safiverse accounts: welcome, guest lesson, email-code sign-up, progress sync, own admin ===== */
const SAFI_API = "https://script.google.com/macros/s/AKfycbw7xrJ_Y59DlK0dRZ_z2tZJYHLAKqQcXRKmzcCyKckEf_tOmVHvcpBw3MgH3XGftems/exec";   /* the Safiverse Apps Script /exec link goes here */
Object.assign(UI.en, { svUser: "Username", svUserH: "3–20 Latin letters or numbers, no spaces, e.g. safiya_7", svPin: "Your secret code", svPinH: "4–6 digits — only you know it", svUserBad: "Username: 3–20 Latin letters or numbers", svPinBad: "The code must be 4–6 digits", svTaken: "This username is taken — try another", svLoginBad: "Wrong username or code", svLocked: "Too many tries — wait 15 minutes", svForgot: "Forgot your code? Sign in with email", svEmailP: "We will send a 6-digit code to your email.", svSetT: "Choose your username and code", svSetP: "Next time just type them — on any phone.", svLater: "Later", svSave: "Save", svWelcome: "Welcome to Safiverse!", svWelcomeP: "Learn step by step: short lessons, stars, quests and a cosmic league.", svReg: "Create my account", svGuest: "Look around as a guest",
  svGuestP: "1 free lesson, then sign up", svHave: "I already have an account", svName: "Your name", svKid: "Child (up to 14)", svAdult: "Adult", svEmail: "Email", svEmailKid: "Parent's email",
  svConsent: "I am the parent and I agree", svPriv: "Your data is seen only by the Safiverse teacher and is never shared.", svSend: "Send me a code", svCodeT: "Enter the 6-digit code", svCodeP: "We sent it to",
  svResend: "Send again", svBad: "Wrong code, try again", svExp: "The code expired — send a new one", svWait: "Wait a minute before sending again", svErr: "Something went wrong. Check the internet and try again.",
  svEmailBad: "Please write a correct email", svNameBad: "Please write your name", svAgeBad: "Choose child or adult", svConsBad: "A parent must agree first",
  svGate: "Great first lesson! 🎉", svGateP: "Create your account to keep your stars, XP and streak — and continue on any phone.", svLogin: "Sign in", svOut: "Sign out", svAcct: "Account",
  svSaved: "Progress saved", svLgReg: "Sign up to join the cosmic league." });
Object.assign(UI.az, { svUser: "İstifadəçi adı", svUserH: "3–20 latın hərfi və ya rəqəm, boşluqsuz, məs. safiya_7", svPin: "Şəxsi kodun", svPinH: "4–6 rəqəm — yalnız sən bilirsən", svUserBad: "İstifadəçi adı: 3–20 latın hərfi və ya rəqəm", svPinBad: "Kod 4–6 rəqəm olmalıdır", svTaken: "Bu ad artıq tutulub — başqasını yaz", svLoginBad: "Ad və ya kod səhvdir", svLocked: "Çox cəhd oldu — 15 dəqiqə gözlə", svForgot: "Kodu unutmusan? Email ilə daxil ol", svEmailP: "Emailinə 6 rəqəmli kod göndərəcəyik.", svSetT: "İstifadəçi adı və kod seç", svSetP: "Növbəti dəfə sadəcə bunları yaz — istənilən telefondan.", svLater: "Sonra", svSave: "Yadda saxla", svWelcome: "Safiverse-ə xoş gəldin!", svWelcomeP: "Addım-addım öyrən: qısa dərslər, ulduzlar, tapşırıqlar və kosmik liqa.", svReg: "Hesab yarat", svGuest: "Qonaq kimi bax",
  svGuestP: "1 dərs pulsuz, sonra qeydiyyat", svHave: "Artıq hesabım var", svName: "Adın", svKid: "Uşaq (14 yaşadək)", svAdult: "Böyük", svEmail: "Email", svEmailKid: "Valideynin emaili",
  svConsent: "Valideynəm və razıyam", svPriv: "Məlumatlarını yalnız Safiverse müəllimi görür, heç kimə verilmir.", svSend: "Kod göndər", svCodeT: "6 rəqəmli kodu yaz", svCodeP: "Kodu bu ünvana göndərdik:",
  svResend: "Yenidən göndər", svBad: "Kod səhvdir, yenə yoxla", svExp: "Kodun vaxtı bitib — yenisini göndər", svWait: "Yenidən göndərmək üçün bir dəqiqə gözlə", svErr: "Nəsə alınmadı. İnterneti yoxla və yenə cəhd et.",
  svEmailBad: "Düzgün email yaz", svNameBad: "Adını yaz", svAgeBad: "Uşaq və ya böyük seç", svConsBad: "Əvvəl valideyn razılıq verməlidir",
  svGate: "Əla ilk dərs! 🎉", svGateP: "Ulduzların, XP-n və seriyan itməsin deyə hesab yarat — istənilən telefondan davam et.", svLogin: "Daxil ol", svOut: "Çıxış", svAcct: "Hesab",
  svSaved: "İrəliləyiş yadda saxlandı", svLgReg: "Kosmik liqaya qoşulmaq üçün qeydiyyatdan keç." });
Object.assign(UI.ru, { svUser: "Имя пользователя", svUserH: "3–20 латинских букв или цифр, без пробелов, напр. safiya_7", svPin: "Твой личный код", svPinH: "4–6 цифр — знаешь только ты", svUserBad: "Имя: 3–20 латинских букв или цифр", svPinBad: "Код — 4–6 цифр", svTaken: "Это имя занято — попробуй другое", svLoginBad: "Неверное имя или код", svLocked: "Слишком много попыток — подожди 15 минут", svForgot: "Забыл код? Войди через email", svEmailP: "Мы отправим 6-значный код на твой email.", svSetT: "Выбери имя и код", svSetP: "В следующий раз просто введи их — с любого телефона.", svLater: "Позже", svSave: "Сохранить", svWelcome: "Добро пожаловать в Safiverse!", svWelcomeP: "Учись шаг за шагом: короткие уроки, звёзды, задания и космическая лига.", svReg: "Создать аккаунт", svGuest: "Посмотреть как гость",
  svGuestP: "1 урок бесплатно, потом регистрация", svHave: "У меня уже есть аккаунт", svName: "Твоё имя", svKid: "Ребёнок (до 14)", svAdult: "Взрослый", svEmail: "Email", svEmailKid: "Email родителя",
  svConsent: "Я родитель и согласен(на)", svPriv: "Твои данные видит только учитель Safiverse, они никому не передаются.", svSend: "Отправить код", svCodeT: "Введи 6-значный код", svCodeP: "Мы отправили его на",
  svResend: "Отправить снова", svBad: "Неверный код, попробуй ещё", svExp: "Код устарел — отправь новый", svWait: "Подожди минуту перед новой отправкой", svErr: "Что-то пошло не так. Проверь интернет и попробуй снова.",
  svEmailBad: "Напиши правильный email", svNameBad: "Напиши своё имя", svAgeBad: "Выбери: ребёнок или взрослый", svConsBad: "Сначала нужно согласие родителя",
  svGate: "Отличный первый урок! 🎉", svGateP: "Создай аккаунт, чтобы сохранить звёзды, XP и серию — и продолжать с любого телефона.", svLogin: "Войти", svOut: "Выйти", svAcct: "Аккаунт",
  svSaved: "Прогресс сохранён", svLgReg: "Зарегистрируйся, чтобы участвовать в космической лиге." });

const ACCT = () => lsGet("mv-acct", null);
try { navigator.storage && navigator.storage.persist && navigator.storage.persist(); } catch (e) {}
const svOn = () => !!SAFI_API && !/claude\.ai|claudeusercontent/.test(location.host);
async function sPost(a, data, ms = 15000) {
  const ctl = new AbortController(), tm = setTimeout(() => ctl.abort(), ms);
  try { const r = await fetch(SAFI_API, { method: "POST", body: JSON.stringify(Object.assign({ a }, data)), redirect: "follow", signal: ctl.signal }); return await r.json(); } finally { clearTimeout(tm); }
}
const SYNC_KEYS = ["mv-drill", "mv-xp", "mv-days", "mv-badges", "mv-goal", "mv-avatar", "mv-qday", "mv-qmonth", "mv-level", "mv-hearts", "mv-course", "mv-family", "mv-subj", "mv-sk", "mv-onb"];
const gatherProgress = () => { const o = {}; SYNC_KEYS.forEach(k => { const v = lsGet(k, null); if (v != null) o[k] = v; }); return o; };
function applyProgress(p) { if (!p) return; SYNC_KEYS.forEach(k => { if (k in p) lsSet(k, p[k]); }); try { DAYS = lsGet("mv-days", []); } catch (e) {} }
let SYNC_T = 0;
function pushSync(now) {
  const a = ACCT(); if (!svOn() || !a) return; clearTimeout(SYNC_T);
  SYNC_T = setTimeout(async () => { try {
    const u = UNITS[curUnit()], d = await sPost("sync", { email: a.email, token: a.token, progress: gatherProgress(), xp: XP().total, streak: streak(), lessons: drillLessons(), unit: u ? T3(u.t) : "", name: a.name, av: avStr() });
    if (d && d.err === "auth") { lsSet("mv-acct", null); return; }
    if (d && d.progress) { applyProgress(d.progress); Router.remount(); } } catch (e) {} }, now ? 0 : 1500);
}


/* ---------- first questions: which language you speak, what you want to learn (+ votes for new languages) ---------- */
Object.assign(UI.en, { svSpeak: "Which language do you speak?", svSpeakP: "Explanations and buttons will be in this language.", svLearn: "What do you want to learn?", svSoon: "Coming soon — vote!",
  svSoonP: "When a language reaches 100%, we add it to Safiverse.", svVote: "I want this 👍", svVoted: "You voted ✓", svWin: "🎉 This language will be added!", svMore: "Other courses", svVotesW: "votes", svStories: "Story courses (English)" });
Object.assign(UI.az, { svSpeak: "Sən hansı dildə danışırsan?", svSpeakP: "İzahlar və düymələr bu dildə olacaq.", svLearn: "Hansı dili öyrənmək istəyirsən?", svSoon: "Tezliklə — səs ver!",
  svSoonP: "Dil 100%-ə çatanda onu Safiverse-ə əlavə edirik.", svVote: "Bu dili istəyirəm 👍", svVoted: "Səs verdin ✓", svWin: "🎉 Bu dil əlavə olunacaq!", svMore: "Başqa kurslar", svVotesW: "səs", svStories: "Hekayə kursları (ingilis dili)" });
Object.assign(UI.ru, { svSpeak: "На каком языке ты говоришь?", svSpeakP: "Объяснения и кнопки будут на этом языке.", svLearn: "Какой язык ты хочешь учить?", svSoon: "Скоро — голосуй!",
  svSoonP: "Когда язык наберёт 100%, мы добавим его в Safiverse.", svVote: "Хочу этот язык 👍", svVoted: "Ты проголосовал(а) ✓", svWin: "🎉 Этот язык будет добавлен!", svMore: "Другие курсы", svVotesW: "голосов", svStories: "Курсы-истории (английский)" });
const VL = [["es", "🇪🇸", ["Spanish", "İspan dili", "Испанский"]], ["it", "🇮🇹", ["Italian", "İtalyan dili", "Итальянский"]], ["fr", "🇫🇷", ["French", "Fransız dili", "Французский"]], ["de", "🇩🇪", ["German", "Alman dili", "Немецкий"]]];
const voteState = () => lsGet("mv-votec", { counts: {}, goal: 100, mine: [] });
const voterId = () => { const a = ACCT(); return a ? a.email : uid(); };
async function loadVotes(root) { if (!svOn()) return; try { const d = await sPost("votes", { voter: voterId() }, 10000); if (d && d.ok) { const old = voteState(); d.mine = [...new Set([...(d.mine || []), ...(old.mine || [])])]; lsSet("mv-votec", d); drawVotes(root); } } catch (e) {} }
function voteCards() { const v = voteState(), g = v.goal || 100;
  return VL.map(([k, f, n]) => { const c = (v.counts || {})[k] || 0, pc = Math.min(100, Math.round(c / g * 100)), me = (v.mine || []).includes(k), win = pc >= 100;
    return `<div class="sv-vc ${win ? "win" : ""}" data-vc="${k}"><span class="sv-flag">${f}</span><div class="sv-vb"><b>${T3(n)}</b><div class="sv-bar"><i style="width:${pc}%"></i></div><small>${win ? L("svWin") : `${pc}% · ${c}/${g} ${L("svVotesW")}`}</small></div>
      <button class="sv-vote ${me ? "on" : ""}" data-vote="${k}" ${me ? "disabled" : ""}>${me ? L("svVoted") : L("svVote")}</button></div>`; }).join(""); }
function drawVotes(root) { const b = root.querySelector(".sv-votes"); if (b) b.innerHTML = voteCards(); }
function pickHTML() { const s = typeof subj === "function" ? subj() : "en", card = (k, e, t, p) => `<button class="sv-sub ${s === k ? "on" : ""}" data-subj="${k}"><span>${e}</span><b>${t}</b><small>${p}</small><i>›</i></button>`;
  return `<div class="sv-pick">${card("en", "🇬🇧", L("skEnglish"), "A1 → B1 · " + drillLessons() + "/" + UNITS.length * LPU)}
    <h2 class="ap-h2">${L("svSoon")}</h2><p class="sv-soonp">${L("svSoonP")}</p><div class="sv-votes">${voteCards()}</div></div>`; }
function wirePick(root, after) {
  root.onclick = async e => {
    const v = e.target.closest("[data-vote]"); if (v && !v.disabled) { const k = v.dataset.vote, st = voteState(); st.mine = [...new Set([...(st.mine || []), k])]; st.counts = st.counts || {}; st.counts[k] = (st.counts[k] || 0) + 1; lsSet("mv-votec", st);
      sfx("pop"); buzz(20); drawVotes(root); const c = root.querySelector(`[data-vc="${k}"]`); c && flash(c, "pulse");
      if (svOn()) try { const d = await sPost("vote", { lang: k, voter: voterId() }); if (d && d.ok) { d.mine = st.mine; lsSet("mv-votec", d); drawVotes(root); } } catch (er) {} return; }
    const b = e.target.closest("[data-subj]"); if (b) { const k = b.dataset.subj; lsSet("mv-subj", k); if (k === "en") lsSet("mv-course", "milingo"); sfx("tap"); after(k); }
    const st = e.target.closest("[data-stories]"); if (st) Router.go("app-course"); };
  loadVotes(root);
}
function onbScreen(root, step = 1) {
  document.documentElement.classList.add("ap-mode");
  const head = `<div class="ap sv-onb"><div class="ap-hud slim">${apBack()}${brandHTML()}</div><main class="ap-main sv-main">`;
  if (step === 1) {
    root.innerHTML = head + `<div class="sv-crew small">${mascot("👋")}</div><h1 class="ap-h">${L("svSpeak")}</h1><p class="sv-tri">${["az", "ru", "en"].filter(k => k !== LANG).map(k => UI[k].svSpeak).join("<br>")}</p>
      <div class="sv-langs">${[["az", "🇦🇿", "Azərbaycanca"], ["ru", "🇷🇺", "Русский"], ["en", "🇬🇧", "English"]].map(([k, f, n]) => `<button class="sv-sub ${LANG === k ? "on" : ""}" data-sp="${k}"><span>${f}</span><b>${n}</b><i>›</i></button>`).join("")}</div></main></div>`;
    root.onclick = e => { const b = e.target.closest("[data-sp]"); if (!b) return; LANG = b.dataset.sp; try { localStorage.setItem("mv-lang", LANG); } catch (er) {} document.documentElement.lang = LANG; sfx("tap"); onbScreen(root, 2); };
    return;
  }
  root.innerHTML = head + `<h1 class="ap-h">${L("svLearn")}</h1>${pickHTML()}</main></div>`;
  wirePick(root, () => { lsSet("mv-onb", 1); welcomeScreen(root); });
}

/* ---------- gate: welcome → guest (1 lesson) → required sign-up ---------- */
const guest = () => lsGet("mv-guest", null);
function safiGate(root) {
  if (!svOn() || ACCT()) return false;
  const g = guest();
  if (!g && !lsGet("mv-onb", 0)) { onbScreen(root); return true; }
  if (!g) { welcomeScreen(root); return true; }
  if (g.lessons >= 1) { regScreen(root, "gate"); return true; }
  return false;
}
function safiAfterLesson(mode) {
  if (!svOn()) return; if (ACCT()) { pushSync(true); return; }
  const g = guest(); if (g && mode === "lesson") { g.lessons = (g.lessons || 0) + 1; lsSet("mv-guest", g); }
}
function welcomeScreen(root) {
  document.documentElement.classList.add("ap-mode");
  root.innerHTML = `<div class="ap sv-wel"><div class="ap-hud slim">${apBack()}${brandHTML()}</div><main class="ap-main sv-main">
    <div class="sv-crew">${["p0", "p23", "r3", "p8"].map((k, i) => `<span style="--i:${i}">${charSVG(k)}</span>`).join("")}</div>
    <h1 class="ap-h">${L("svWelcome")}</h1><p class="ap-p">${L("svWelcomeP")}</p>
    <div class="sv-btns"><button class="ap-cta" data-reg>${L("svReg")}</button><button class="sv-ghost" data-guest><b>👀 ${L("svGuest")}</b><small>${L("svGuestP")}</small></button>
    <button class="dr-link" data-login>${L("svHave")}</button></div><div class="sv-lang">${langPill()}</div></main></div>`;
  root.onclick = e => { if (e.target.closest("[data-reg]")) regScreen(root, "new"); else if (e.target.closest("[data-login]")) regScreen(root, "login");
    else if (e.target.closest("[data-guest]")) { lsSet("mv-guest", { lessons: 0, at: Date.now() }); sfx("tap"); Router.go("app-learn"); Router.remount(); } };
}
function regScreen(root, mode) {
  document.documentElement.classList.add("ap-mode");
  /* modes: new / gate = sign-up · login = username + personal code · email = forgot code (email) · set = choose username + code */
  const st = { mode, age: "", email: "", name: NAME || "", user: "", pin: "", step: 1 };
  const reg = () => st.mode === "new" || st.mode === "gate";
  const field = (n, lab, extra = "") => `<label>${lab}<input name="${n}" ${extra}></label>`;
  const userF = () => field("user", L("svUser"), `maxlength="20" autocapitalize="none" autocorrect="off" spellcheck="false" autocomplete="username" value="${esc(st.user)}"`) + `<small class="sv-hint">${L("svUserH")}</small>`;
  const pinF = () => field("pin", L("svPin"), `type="password" inputmode="numeric" pattern="[0-9]*" maxlength="6" autocomplete="${reg() || st.mode === "set" ? "new-password" : "current-password"}"`) + `<small class="sv-hint">${L("svPinH")}</small>`;
  const head = () => st.mode === "gate" ? `<div class="sv-crew small">${mascot("🎉")}</div><h1 class="ap-h">${L("svGate")}</h1><p class="ap-p">${L("svGateP")}</p>`
    : `<h1 class="ap-h">${{ new: L("svReg"), login: L("svLogin"), email: L("svLogin"), set: L("svSetT") }[st.mode]}</h1>${st.mode === "set" ? `<p class="ap-p">${L("svSetP")}</p>` : st.mode === "email" ? `<p class="ap-p">${L("svEmailP")}</p>` : ""}`;
  const formBody = () => { const kid = st.age === "kid";
    if (st.mode === "login") return userF() + pinF();
    if (st.mode === "set") return userF() + pinF();
    if (st.mode === "email") return field("email", L("svEmail"), `type="email" inputmode="email" autocomplete="email" value="${esc(st.email)}"`);
    return field("name", L("svName"), `maxlength="30" autocomplete="given-name" value="${esc(st.name)}"`)
      + `<div class="sv-age"><button type="button" data-age="kid" class="${kid ? "on" : ""}">👧 ${L("svKid")}</button><button type="button" data-age="adult" class="${st.age === "adult" ? "on" : ""}">🧑 ${L("svAdult")}</button></div>`
      + field("email", kid ? L("svEmailKid") : L("svEmail"), `type="email" inputmode="email" autocomplete="email" value="${esc(st.email)}"`)
      + userF() + pinF() + (kid ? `<label class="sv-chk"><input type="checkbox" name="consent"> ${L("svConsent")}</label>` : ""); };
  const links = () => st.mode === "login" ? `<button type="button" class="dr-link" data-to="email">${L("svForgot")}</button><button type="button" class="dr-link" data-to="new">${L("svReg")}</button>`
    : st.mode === "email" ? `<button type="button" class="dr-link" data-to="login">← ${L("svLogin")}</button>`
    : st.mode === "set" ? `<button type="button" class="dr-link" data-later>${L("svLater")}</button>`
    : `<button type="button" class="dr-link" data-to="login">${L("svHave")}</button>`;
  const btn = () => st.mode === "login" ? L("svLogin") : st.mode === "set" ? L("svSave") : L("svSend");
  const draw = () => {
    root.innerHTML = `<div class="ap sv-reg"><div class="ap-hud slim">${apBack()}${brandHTML()}</div><main class="ap-main sv-main">${head()}
      ${st.step === 1 ? `<form class="sv-form" novalidate>${formBody()}${reg() ? `<p class="sv-priv">🔒 ${L("svPriv")}</p>` : ""}<p class="sv-err" role="alert"></p>
        <button class="ap-cta" type="submit">${btn()}</button>${links()}</form>`
      : `<div class="sv-form"><p class="ap-p">${L("svCodeP")} <b>${esc(st.email)}</b></p><b class="sv-ct">${L("svCodeT")}</b>
        <div class="av-pin sv-pin">${[0, 1, 2, 3, 4, 5].map(i => `<input inputmode="numeric" maxlength="1" data-pin="${i}" autocomplete="one-time-code">`).join("")}</div><p class="sv-err" role="alert"></p>
        <button class="dr-link" data-resend>${L("svResend")}</button></div>`}</main></div>`;
    wire();
  };
  const err = m => { const e = root.querySelector(".sv-err"); if (e) { e.textContent = m; flash(e, "shake"); } sfx("no"); };
  const errOf = d => L({ wait: "svWait", email: "svEmailBad", taken: "svTaken", user: "svUserBad", pin: "svPinBad", bad: "svLoginBad", locked: "svLocked", expired: "svExp", code: "svBad" }[d && d.err] || "svErr");
  const send = async () => { try { const d = await sPost("send", { email: st.email }); if (d.ok) return true; err(errOf(d)); } catch (e) { err(L("svErr")); } return false; };
  const finish = d => {
    lsSet("mv-acct", { email: d.email || st.email, token: d.token, name: d.student.name, age: d.student.age, user: d.student.user || "" }); lsSet("mv-lgname", d.student.name); NAME = d.student.name; try { localStorage.setItem("mv-name", NAME); } catch (er) {}
    lsSet("mv-guest", null); const sp = d.progress; if (sp && sp["mv-xp"] && sp["mv-xp"].total >= XP().total) applyProgress(sp); else pushSync(true);
    if (!d.student.user) { st.mode = "set"; st.step = 1; st.user = ""; draw(); return; }
    sfx("win"); buzz([30, 40, 80]); toast("✅ " + L("svSaved"), "gold"); Router.go("app-learn"); Router.remount(); };
  const grab = f => { ["name", "email", "user"].forEach(k => { if (f[k]) st[k] = f[k].value; }); if (f.pin) st.pin = f.pin.value; };
  const wire = () => {
    const f = root.querySelector("form.sv-form");
    if (f) {
      f.onclick = e => { const a = e.target.closest("[data-age]"); if (a) { grab(f); st.age = a.dataset.age; sfx("tap"); draw(); }
        const t = e.target.closest("[data-to]"); if (t) { grab(f); st.mode = t.dataset.to; st.step = 1; draw(); }
        if (e.target.closest("[data-later]")) { Router.go("app-learn"); Router.remount(); } };
      f.onsubmit = async e => { e.preventDefault(); grab(f);
        st.email = st.email.trim().toLowerCase(); st.user = st.user.trim().toLowerCase().replace(/\s+/g, "_"); st.name = st.name.trim(); st.pin = st.pin.trim();
        const needCred = reg() || st.mode === "login" || st.mode === "set";
        if (reg() && st.name.length < 2) return err(L("svNameBad")); if (reg() && !st.age) return err(L("svAgeBad"));
        if ((reg() || st.mode === "email") && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(st.email)) return err(L("svEmailBad"));
        if (needCred && !/^[a-z0-9._]{3,20}$/.test(st.user)) return err(L("svUserBad")); if (needCred && !/^\d{4,6}$/.test(st.pin)) return err(L("svPinBad"));
        if (reg() && st.age === "kid" && !f.consent.checked) return err(L("svConsBad"));
        const b = f.querySelector(".ap-cta"); b.disabled = true; b.textContent = "…"; const back = () => { b.disabled = false; b.textContent = btn(); };
        try {
          if (st.mode === "login") { const d = await sPost("login", { user: st.user, pin: st.pin }); if (d.ok) return finish(d); back(); return err(errOf(d)); }
          if (st.mode === "set") { const a = ACCT() || {}, d = await sPost("setcred", { email: a.email, token: a.token, user: st.user, pin: st.pin });
            if (d.ok) { a.user = d.user; lsSet("mv-acct", a); return finish({ email: a.email, token: a.token, student: { name: a.name, age: a.age, user: d.user } }); } back(); return err(errOf(d)); }
          if (reg()) { const c = await sPost("ucheck", { user: st.user }); if (c.ok && !c.free) { back(); return err(L("svTaken")); } }
        } catch (x) { back(); return err(L("svErr")); }
        if (await send()) { st.step = 2; sfx("pop"); draw(); } else back(); };
      return;
    }
    const ins = [...root.querySelectorAll("[data-pin]")]; setTimeout(() => ins[0] && ins[0].focus(), 200);
    ins.forEach((inp, i) => { inp.oninput = async () => { const v = inp.value.replace(/\D/g, ""); if (v.length > 1) { v.split("").slice(0, 6).forEach((c, k) => { if (ins[k]) ins[k].value = c; }); } else inp.value = v;
        if (inp.value && ins[i + 1]) ins[i + 1].focus(); const code = ins.map(x => x.value).join("");
        if (code.length === 6) { try { const d = await sPost("verify", Object.assign({ email: st.email, code }, reg() ? { name: st.name, age: st.age, av: avStr(), parent: st.age === "kid", user: st.user, pin: st.pin } : {}));
            if (d.ok) finish(d);
            else if (d.err === "taken") { st.step = 1; draw(); err(L("svTaken")); }
            else { err(errOf(d.err === "code" || d.err === "expired" ? d : { err: "code" })); ins.forEach(x => x.value = ""); ins[0].focus(); } } catch (e) { err(L("svErr")); } } };
      inp.onkeydown = e => { if (e.key === "Backspace" && !inp.value && ins[i - 1]) ins[i - 1].focus(); }; });
    root.querySelector("[data-resend]").onclick = async () => { if (await send()) toast("📧 " + st.email); };
  };
  draw();
}

/* ---------- Safiverse admin (#sadmin): its own code, its own students ---------- */
VIEWS.sadmin = root => {
  document.documentElement.classList.add("ap-mode");
  const key = () => { try { return sessionStorage.getItem("sv-key") || ""; } catch (e) { return ""; } };
  const shell = body => `<div class="ap"><div class="ap-hud slim"><a class="ap-back" href="#app-profile" aria-label="Back"><span>←</span><b>${L("apProfile")}</b></a>${brandHTML()}</div><main class="ap-main sv-adm">${body}</main></div>`;
  if (!svOn()) { root.innerHTML = shell(`<h1 class="ap-h">Admin</h1><p class="ap-p">Safiverse server is not connected yet.</p>`); return {}; }
  const login = async () => { let s = {}; try { s = await sPost("ad_status", {}); } catch (e) {}
    root.innerHTML = shell(`<h1 class="ap-h">🔐 Safiverse admin</h1>${s.hasCode ? `<form class="sv-form" data-in><label>Admin code<input type="password" name="k" autocomplete="current-password"></label><button class="ap-cta">→</button></form>` : ""}
      <form class="sv-form" data-set><p class="ap-p">${s.hasCode ? "Change code" : "Set a code"} — a 6-digit confirmation goes to ${esc(s.email || "admin email")}.</p><button type="button" class="sv-ghost" data-otp><b>📧 Send confirmation</b></button>
      <label>Confirmation<input name="otp" inputmode="numeric"></label><label>New admin code (6+)<input type="password" name="nk"></label><button class="ap-cta">Save</button></form><p class="sv-err"></p>`);
    const e1 = root.querySelector("[data-in]"), e2 = root.querySelector("[data-set]"), er = m => root.querySelector(".sv-err").textContent = m;
    if (e1) e1.onsubmit = async e => { e.preventDefault(); try { sessionStorage.setItem("sv-key", e1.k.value); } catch (x) {} load(); };
    root.querySelector("[data-otp]").onclick = async () => { const d = await sPost("ad_send", {}).catch(() => ({})); er(d.ok ? "Sent ✓" : "Wait / error"); };
    e2.onsubmit = async e => { e.preventDefault(); const d = await sPost("ad_set", { otp: e2.otp.value, key: e2.nk.value }).catch(() => ({})); if (d.ok) { try { sessionStorage.setItem("sv-key", e2.nk.value); } catch (x) {} load(); } else er("✗ " + (d.err || "error")); }; };
  const load = async () => { let d = {}; try { d = await sPost("ad_rows", { key: key() }); } catch (e) {} if (!d.ok) return login();
    const rows = (d.rows || []).sort((a, b) => String(b.last).localeCompare(String(a.last))), dt = s => s ? new Date(s).toLocaleDateString("az-AZ") : "—";
    let vt = {}; try { vt = await sPost("votes", {}); } catch (e) {}
    const vbox = vt.ok ? `<div class="sv-adv"><b>🗳️ ${VL.map(([k, f]) => `${f} ${(vt.counts || {})[k] || 0}`).join(" · ")}</b><form data-goal><label>🎯 100% =<input name="g" inputmode="numeric" value="${vt.goal}"></label><button class="sv-ghost"><b>✓</b></button></form></div>` : "";
    root.innerHTML = shell(`${vbox}<h1 class="ap-h">👥 ${rows.length}</h1><input class="lg-in sv-q" placeholder="🔍"><div class="sv-tbl">${rows.map(r => `<div class="sv-row" data-q="${esc((r.name + " " + r.email).toLowerCase())}">
      <span class="lg-av">${avOf(r.avatar, r.name)}</span><div><b>${esc(r.name)}</b> <small>${r.age === "kid" ? "👧" : "🧑"} ${esc(r.email)}</small><small>⚡ ${r.xp} · 🔥 ${r.streak} · 📚 ${r.lessons} · ${esc(r.unit || "")}</small><small>🕒 ${dt(r.last)} · ✨ ${dt(r.created)}</small></div></div>`).join("")}</div>`);
    const gf = root.querySelector("[data-goal]"); if (gf) gf.onsubmit = async e => { e.preventDefault(); const d = await sPost("ad_goal", { key: key(), goal: gf.g.value }).catch(() => ({})); toast(d.ok ? "✓ " + d.goal : "✗"); };
    root.querySelector(".sv-q").oninput = e => { const q = e.target.value.toLowerCase(); root.querySelectorAll(".sv-row").forEach(x => x.hidden = q && !x.dataset.q.includes(q)); }; };
  key() ? load() : login();
  return {};
};
