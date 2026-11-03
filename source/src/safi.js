/* ===== Safiverse accounts: welcome, guest lesson, email-code sign-up, progress sync, own admin ===== */
const SAFI_API = "https://script.google.com/macros/s/AKfycbwJN2bqxRmx6j0o2Es1fcazO83fVs4hE3UYcezoXuIORt-Uasl3-oGFjK-2OIqP9eyD/exec";   /* the Safiverse Apps Script /exec link goes here */
Object.assign(UI.en, { svWelcome: "Welcome to Safiverse!", svWelcomeP: "Learn English step by step: short lessons, stars, quests and a cosmic league.", svReg: "Create my account", svGuest: "Look around as a guest",
  svGuestP: "1 free lesson, then sign up", svHave: "I already have an account", svName: "Your name", svKid: "Child (up to 14)", svAdult: "Adult", svEmail: "Email", svEmailKid: "Parent's email",
  svConsent: "I am the parent and I agree", svPriv: "Your data is seen only by the Safiverse teacher and is never shared.", svSend: "Send me a code", svCodeT: "Enter the 6-digit code", svCodeP: "We sent it to",
  svResend: "Send again", svBad: "Wrong code, try again", svExp: "The code expired — send a new one", svWait: "Wait a minute before sending again", svErr: "Something went wrong. Check the internet and try again.",
  svEmailBad: "Please write a correct email", svNameBad: "Please write your name", svAgeBad: "Choose child or adult", svConsBad: "A parent must agree first",
  svGate: "Great first lesson! 🎉", svGateP: "Create your account to keep your stars, XP and streak — and continue on any phone.", svLogin: "Sign in", svOut: "Sign out", svAcct: "Account",
  svSaved: "Progress saved", svLgReg: "Sign up to join the cosmic league." });
Object.assign(UI.az, { svWelcome: "Safiverse-ə xoş gəldin!", svWelcomeP: "İngilis dilini addım-addım öyrən: qısa dərslər, ulduzlar, tapşırıqlar və kosmik liqa.", svReg: "Hesab yarat", svGuest: "Qonaq kimi bax",
  svGuestP: "1 dərs pulsuz, sonra qeydiyyat", svHave: "Artıq hesabım var", svName: "Adın", svKid: "Uşaq (14 yaşadək)", svAdult: "Böyük", svEmail: "Email", svEmailKid: "Valideynin emaili",
  svConsent: "Valideynəm və razıyam", svPriv: "Məlumatlarını yalnız Safiverse müəllimi görür, heç kimə verilmir.", svSend: "Kod göndər", svCodeT: "6 rəqəmli kodu yaz", svCodeP: "Kodu bu ünvana göndərdik:",
  svResend: "Yenidən göndər", svBad: "Kod səhvdir, yenə yoxla", svExp: "Kodun vaxtı bitib — yenisini göndər", svWait: "Yenidən göndərmək üçün bir dəqiqə gözlə", svErr: "Nəsə alınmadı. İnterneti yoxla və yenə cəhd et.",
  svEmailBad: "Düzgün email yaz", svNameBad: "Adını yaz", svAgeBad: "Uşaq və ya böyük seç", svConsBad: "Əvvəl valideyn razılıq verməlidir",
  svGate: "Əla ilk dərs! 🎉", svGateP: "Ulduzların, XP-n və seriyan itməsin deyə hesab yarat — istənilən telefondan davam et.", svLogin: "Daxil ol", svOut: "Çıxış", svAcct: "Hesab",
  svSaved: "İrəliləyiş yadda saxlandı", svLgReg: "Kosmik liqaya qoşulmaq üçün qeydiyyatdan keç." });
Object.assign(UI.ru, { svWelcome: "Добро пожаловать в Safiverse!", svWelcomeP: "Учи английский шаг за шагом: короткие уроки, звёзды, задания и космическая лига.", svReg: "Создать аккаунт", svGuest: "Посмотреть как гость",
  svGuestP: "1 урок бесплатно, потом регистрация", svHave: "У меня уже есть аккаунт", svName: "Твоё имя", svKid: "Ребёнок (до 14)", svAdult: "Взрослый", svEmail: "Email", svEmailKid: "Email родителя",
  svConsent: "Я родитель и согласен(на)", svPriv: "Твои данные видит только учитель Safiverse, они никому не передаются.", svSend: "Отправить код", svCodeT: "Введи 6-значный код", svCodeP: "Мы отправили его на",
  svResend: "Отправить снова", svBad: "Неверный код, попробуй ещё", svExp: "Код устарел — отправь новый", svWait: "Подожди минуту перед новой отправкой", svErr: "Что-то пошло не так. Проверь интернет и попробуй снова.",
  svEmailBad: "Напиши правильный email", svNameBad: "Напиши своё имя", svAgeBad: "Выбери: ребёнок или взрослый", svConsBad: "Сначала нужно согласие родителя",
  svGate: "Отличный первый урок! 🎉", svGateP: "Создай аккаунт, чтобы сохранить звёзды, XP и серию — и продолжать с любого телефона.", svLogin: "Войти", svOut: "Выйти", svAcct: "Аккаунт",
  svSaved: "Прогресс сохранён", svLgReg: "Зарегистрируйся, чтобы участвовать в космической лиге." });

const ACCT = () => lsGet("mv-acct", null);
const svOn = () => !!SAFI_API && !/claude\.ai|claudeusercontent/.test(location.host);
async function sPost(a, data, ms = 15000) {
  const ctl = new AbortController(), tm = setTimeout(() => ctl.abort(), ms);
  try { const r = await fetch(SAFI_API, { method: "POST", body: JSON.stringify(Object.assign({ a }, data)), redirect: "follow", signal: ctl.signal }); return await r.json(); } finally { clearTimeout(tm); }
}
const SYNC_KEYS = ["mv-drill", "mv-xp", "mv-days", "mv-badges", "mv-goal", "mv-avatar", "mv-qday", "mv-qmonth", "mv-level", "mv-hearts", "mv-course", "mv-family"];
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

/* ---------- gate: welcome → guest (1 lesson) → required sign-up ---------- */
const guest = () => lsGet("mv-guest", null);
function safiGate(root) {
  if (!svOn() || ACCT()) return false;
  const g = guest();
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
  const st = { mode, age: "", email: "", name: NAME || "", step: 1 };
  const draw = () => {
    const kid = st.age === "kid", login = st.mode === "login";
    root.innerHTML = `<div class="ap sv-reg"><div class="ap-hud slim">${apBack()}${brandHTML()}</div><main class="ap-main sv-main">
      ${st.mode === "gate" ? `<div class="sv-crew small">${mascot("🎉")}</div><h1 class="ap-h">${L("svGate")}</h1><p class="ap-p">${L("svGateP")}</p>` : `<h1 class="ap-h">${login ? L("svLogin") : L("svReg")}</h1>`}
      ${st.step === 1 ? `<form class="sv-form" novalidate>
        ${login ? "" : `<label>${L("svName")}<input name="name" maxlength="30" autocomplete="given-name" value="${esc(st.name)}"></label>
        <div class="sv-age"><button type="button" data-age="kid" class="${st.age === "kid" ? "on" : ""}">👧 ${L("svKid")}</button><button type="button" data-age="adult" class="${st.age === "adult" ? "on" : ""}">🧑 ${L("svAdult")}</button></div>`}
        <label>${kid ? L("svEmailKid") : L("svEmail")}<input name="email" type="email" inputmode="email" autocomplete="email" value="${esc(st.email)}"></label>
        ${kid && !login ? `<label class="sv-chk"><input type="checkbox" name="consent"> ${L("svConsent")}</label>` : ""}
        <p class="sv-priv">🔒 ${L("svPriv")}</p><p class="sv-err" role="alert"></p>
        <button class="ap-cta" type="submit">${L("svSend")}</button>
        ${st.mode !== "gate" ? `<button type="button" class="dr-link" data-swap>${login ? L("svReg") : L("svHave")}</button>` : `<button type="button" class="dr-link" data-swap>${L("svHave")}</button>`}</form>`
      : `<div class="sv-form"><p class="ap-p">${L("svCodeP")} <b>${esc(st.email)}</b></p><b class="sv-ct">${L("svCodeT")}</b>
        <div class="av-pin sv-pin">${[0, 1, 2, 3, 4, 5].map(i => `<input inputmode="numeric" maxlength="1" data-pin="${i}" autocomplete="one-time-code">`).join("")}</div><p class="sv-err" role="alert"></p>
        <button class="dr-link" data-resend>${L("svResend")}</button></div>`}</main></div>`;
    wire();
  };
  const err = m => { const e = root.querySelector(".sv-err"); if (e) { e.textContent = m; flash(e, "shake"); } sfx("no"); };
  const send = async () => { try { const d = await sPost("send", { email: st.email }); if (d.ok) return true; err(L(d.err === "wait" ? "svWait" : d.err === "email" ? "svEmailBad" : "svErr")); } catch (e) { err(L("svErr")); } return false; };
  const wire = () => {
    const f = root.querySelector("form.sv-form");
    if (f) {
      f.onclick = e => { const a = e.target.closest("[data-age]"); if (a) { st.name = (f.name && f.name.value) || st.name; st.email = f.email.value; st.age = a.dataset.age; sfx("tap"); draw(); }
        if (e.target.closest("[data-swap]")) { st.mode = st.mode === "login" ? "new" : "login"; draw(); } };
      f.onsubmit = async e => { e.preventDefault(); const login = st.mode === "login";
        st.email = f.email.value.trim().toLowerCase(); if (!login) st.name = f.name.value.trim();
        if (!login && st.name.length < 2) return err(L("svNameBad")); if (!login && !st.age) return err(L("svAgeBad"));
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(st.email)) return err(L("svEmailBad")); if (!login && st.age === "kid" && !f.consent.checked) return err(L("svConsBad"));
        const b = f.querySelector(".ap-cta"); b.disabled = true; b.textContent = "…"; if (await send()) { st.step = 2; sfx("pop"); draw(); } else { b.disabled = false; b.textContent = L("svSend"); } };
      return;
    }
    const ins = [...root.querySelectorAll("[data-pin]")]; setTimeout(() => ins[0] && ins[0].focus(), 200);
    ins.forEach((inp, i) => { inp.oninput = async () => { const v = inp.value.replace(/\D/g, ""); if (v.length > 1) { v.split("").slice(0, 6).forEach((c, k) => { if (ins[k]) ins[k].value = c; }); } else inp.value = v;
        if (inp.value && ins[i + 1]) ins[i + 1].focus(); const code = ins.map(x => x.value).join("");
        if (code.length === 6) { try { const d = await sPost("verify", { email: st.email, code, name: st.name, age: st.age, av: avStr(), parent: st.age === "kid" });
            if (d.ok) { lsSet("mv-acct", { email: st.email, token: d.token, name: d.student.name, age: d.student.age }); lsSet("mv-lgname", d.student.name); NAME = d.student.name; try { localStorage.setItem("mv-name", NAME); } catch (er) {}
              lsSet("mv-guest", null); const sp = d.progress; if (sp && sp["mv-xp"] && sp["mv-xp"].total >= XP().total) applyProgress(sp); else pushSync(true);
              sfx("win"); buzz([30, 40, 80]); toast("✅ " + L("svSaved"), "gold"); Router.go("app-learn"); Router.remount(); }
            else { err(L(d.err === "expired" ? "svExp" : "svBad")); ins.forEach(x => x.value = ""); ins[0].focus(); } } catch (e) { err(L("svErr")); } } };
      inp.onkeydown = e => { if (e.key === "Backspace" && !inp.value && ins[i - 1]) ins[i - 1].focus(); }; });
    root.querySelector("[data-resend]").onclick = async () => { if (await send()) toast("📧 " + st.email); };
  };
  draw();
}

/* ---------- Safiverse admin (#sadmin): its own code, its own students ---------- */
VIEWS.sadmin = root => {
  document.documentElement.classList.add("ap-mode");
  const key = () => { try { return sessionStorage.getItem("sv-key") || ""; } catch (e) { return ""; } };
  const shell = body => `<div class="ap"><div class="ap-hud slim">${apBack()}${brandHTML()}</div><main class="ap-main sv-adm">${body}</main></div>`;
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
    root.innerHTML = shell(`<h1 class="ap-h">👥 ${rows.length}</h1><input class="lg-in sv-q" placeholder="🔍"><div class="sv-tbl">${rows.map(r => `<div class="sv-row" data-q="${esc((r.name + " " + r.email).toLowerCase())}">
      <span class="lg-av">${avOf(r.avatar, r.name)}</span><div><b>${esc(r.name)}</b> <small>${r.age === "kid" ? "👧" : "🧑"} ${esc(r.email)}</small><small>⚡ ${r.xp} · 🔥 ${r.streak} · 📚 ${r.lessons} · ${esc(r.unit || "")}</small><small>🕒 ${dt(r.last)} · ✨ ${dt(r.created)}</small></div></div>`).join("")}</div>`);
    root.querySelector(".sv-q").oninput = e => { const q = e.target.value.toLowerCase(); root.querySelectorAll(".sv-row").forEach(x => x.hidden = q && !x.dataset.q.includes(q)); }; };
  key() ? load() : login();
  return {};
};
