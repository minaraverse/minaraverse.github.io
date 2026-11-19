/* ---------- one account: a Minaraverse pack buyer (phone + password) is signed in to Safiverse too ----------
   The Minaraverse server checks the phone + password (or the session saved on this device) and signs a short note;
   the Safiverse server accepts that note. Old Safiverse accounts (username + code) work exactly as before. */
const PACK_API = "https://script.google.com/macros/s/AKfycbyvcWi9KVAJ0elYh2XVjc_K0tOInPXsyVq9N1q9noAMDzzo0FTYPtSdF7ANxorwy3nO/exec";
Object.assign(UI.en, { pkBtn: "Minaraverse account (phone + password)", pkT: "Minaraverse account", pkP: "The same phone number and password you use for your pack.", pkPhone: "Phone number", pkPw: "Password", pkBad: "Wrong number or password", pkNone: "No pack found for this number", pkLocked: "Too many attempts. Write to Minara.", pkIn: "Signing you in…" });
Object.assign(UI.az, { pkBtn: "Minaraverse hesabı (nömrə + parol)", pkT: "Minaraverse hesabı", pkP: "Paket üçün istifadə etdiyin eyni nömrə və parol.", pkPhone: "Telefon nömrəsi", pkPw: "Parol", pkBad: "Nömrə və ya parol səhvdir", pkNone: "Bu nömrə ilə paket tapılmadı", pkLocked: "Çox cəhd edildi. Minaraya yaz.", pkIn: "Daxil olursan…" });
Object.assign(UI.ru, { pkBtn: "Аккаунт Minaraverse (номер + пароль)", pkT: "Аккаунт Minaraverse", pkP: "Тот же номер и пароль, что и для пакета.", pkPhone: "Номер телефона", pkPw: "Пароль", pkBad: "Неверный номер или пароль", pkNone: "Пакет с этим номером не найден", pkLocked: "Слишком много попыток. Напиши Минаре.", pkIn: "Входим…" });
const pkStore = { get: k => { let v = null; try { v = localStorage.getItem(k); } catch (e) {} if (v) return v; const m = document.cookie.match(new RegExp("(?:^|; )" + k + "=([^;]*)")); return m ? decodeURIComponent(m[1]) : ""; },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} document.cookie = k + "=" + encodeURIComponent(v) + ";max-age=63072000;path=/;SameSite=Lax;Secure"; } };
async function packLogin(phone, pw, tok) {
  const r = await fetch(PACK_API, { method: "POST", body: JSON.stringify(Object.assign({ a: "pk_auth", phone }, tok ? { tok } : { pw })), redirect: "follow" }), j = await r.json();
  if (!j.ok) return j;
  const d = await sPost("plogin", { phone: j.phone, name: j.name, exp: j.exp, sig: j.sig });
  if (!d.ok) return d;
  pkStore.set("mv-start-phone", j.phone); pkStore.set("mv-pack-tok", j.tok);
  lsSet("mv-acct", { email: d.email, token: d.token, name: d.student.name, age: d.student.age, user: d.student.user || "", status: "ok", hard: !!d.student.hard, pack: 1 });
  lsSet("mv-lgname", d.student.name); NAME = d.student.name; try { localStorage.setItem("mv-name", NAME); } catch (e) {}
  lsSet("mv-guest", null); lsSet("mv-onb", 1);
  const sp = d.progress; if (sp && sp["mv-xp"] && sp["mv-xp"].total >= XP().total) applyProgress(sp); else pushSync(true);
  return { ok: true };
}
let PK_TRIED = false;
const safiGate0 = safiGate;
safiGate = function (root) {
  if (svOn() && !ACCT() && !PK_TRIED && navigator.onLine !== false) { const ph = pkStore.get("mv-start-phone"), tk = pkStore.get("mv-pack-tok");
    if (ph && tk) { PK_TRIED = true; document.documentElement.classList.add("ap-mode");
      root.innerHTML = `<div class="ap sv-wel"><main class="ap-main sv-main"><p class="ap-p">${L("pkIn")}</p></main></div>`;
      packLogin(ph, "", tk).catch(() => null).then(() => Router.remount()); return true; } }
  return safiGate0(root);
};
function packScreen(root) {
  document.documentElement.classList.add("ap-mode");
  root.innerHTML = `<div class="ap sv-reg"><div class="ap-hud slim">${apBack()}${brandHTML()}</div><main class="ap-main sv-main"><h1 class="ap-h">${L("pkT")}</h1><p class="ap-p">${L("pkP")}</p>
    <form class="sv-form" novalidate><label>${L("pkPhone")}<input name="username" type="tel" inputmode="tel" autocomplete="username" value="${esc(pkStore.get("mv-start-phone"))}"></label>
    <label>${L("pkPw")}<input name="password" type="password" autocomplete="current-password"></label><p class="sv-err" role="alert"></p>
    <button class="ap-cta" type="submit">${L("svLogin")}</button><button type="button" class="dr-link" data-pkback>← ${L("svHave")}</button></form></main></div>`;
  const f = root.querySelector("form"), er = root.querySelector(".sv-err"), b = f.querySelector(".ap-cta");
  root.onclick = e => { if (e.target.closest("[data-pkback]")) welcomeScreen(root); };
  f.onsubmit = async e => { e.preventDefault(); if (b.disabled) return; b.disabled = true; er.textContent = "";
    let d = null; try { d = await packLogin(f.username.value, f.password.value, ""); } catch (x) {}
    if (d && d.ok) { sfx("win"); Router.go("app-learn"); Router.remount(); return; }
    b.disabled = false; er.textContent = L({ pw: "pkBad", none: "pkNone", locked: "pkLocked", blocked: "svBlocked" }[d && d.err] || "svErr"); sfx("no"); };
}
const welcomeScreen0 = welcomeScreen;
welcomeScreen = function (root) {
  welcomeScreen0(root);
  const box = root.querySelector(".sv-btns"); if (box) { const x = document.createElement("button"); x.className = "sv-new-b"; x.setAttribute("data-pk", ""); x.textContent = "📱 " + L("pkBtn"); box.appendChild(x); }
  const oc = root.onclick; root.onclick = e => { if (e.target.closest("[data-pk]")) packScreen(root); else if (oc) oc(e); };
};
