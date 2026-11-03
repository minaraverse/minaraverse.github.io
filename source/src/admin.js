/* ===== ADMIN: private page (#admin) that reads Minara's Google Sheet through her Apps Script ===== */
/* Paste the Apps Script web-app URL here after deployment. The secret code is NOT stored in the site. */
const ADMIN_API = "";

Object.assign(UI.en, { adK: "Admin", adH: "Minaraverse admin", adCode: "Admin code", adLogin: "Log in", adChange: "Set / change code", adSend: "Send a 6-digit code to", adSent: "Code sent. Check the inbox (and spam).", adOtp: "6-digit code from the email", adNewCode: "New admin code (min. 6 characters)", adNewCode2: "Repeat the new code", adSave: "Save new code", adSaved: "Saved! Log in with your new code.", adWait: "Please wait a minute before sending again.", adBadOtp: "The 6-digit code is wrong.", adExpired: "The code expired. Send a new one.", adMismatch: "The two codes are different.", adShort: "Use at least 6 characters.", adBack: "Back to login", adWrong: "Wrong code or the connection is not set up yet.", adSetup: "The admin page is not connected to the Google Sheet yet.",
  adAll: "All", adLeads: "Lesson requests", adLevels: "Level tests", adChapters: "Chapters", adSearch: "Search by name, phone, email…", adTotal: "Total", adToday: "Today", adWeek: "This week",
  adLogout: "Log out", adCsv: "Download CSV", adRefresh: "Refresh", adEmpty: "No entries yet.", adWa: "WhatsApp", adDate: "Date", adWho: "Student", adInfo: "Details", adContact: "Contact", adNew: "new" });
Object.assign(UI.az, { adK: "Admin", adH: "Minaraverse admin paneli", adCode: "Admin kodu", adLogin: "Daxil ol", adChange: "Kodu təyin et / dəyiş", adSend: "6 rəqəmli kodu göndər:", adSent: "Kod göndərildi. Poçtu (və spam qovluğunu) yoxla.", adOtp: "Emaildəki 6 rəqəmli kod", adNewCode: "Yeni admin kodu (ən azı 6 simvol)", adNewCode2: "Yeni kodu təkrar yaz", adSave: "Yeni kodu saxla", adSaved: "Saxlanıldı! Yeni kodla daxil ol.", adWait: "Yenidən göndərmək üçün bir dəqiqə gözlə.", adBadOtp: "6 rəqəmli kod səhvdir.", adExpired: "Kodun vaxtı bitib. Yenisini göndər.", adMismatch: "İki kod eyni deyil.", adShort: "Ən azı 6 simvol yaz.", adBack: "Girişə qayıt", adWrong: "Kod səhvdir və ya bağlantı hələ qurulmayıb.", adSetup: "Admin səhifəsi hələ Google Cədvələ qoşulmayıb.",
  adAll: "Hamısı", adLeads: "Dərs müraciətləri", adLevels: "Səviyyə testləri", adChapters: "Fəsillər", adSearch: "Ad, telefon, email üzrə axtar…", adTotal: "Cəmi", adToday: "Bu gün", adWeek: "Bu həftə",
  adLogout: "Çıxış", adCsv: "CSV yüklə", adRefresh: "Yenilə", adEmpty: "Hələ heç nə yoxdur.", adWa: "WhatsApp", adDate: "Tarix", adWho: "Tələbə", adInfo: "Məlumat", adContact: "Əlaqə", adNew: "yeni" });
Object.assign(UI.ru, { adK: "Админ", adH: "Админ-панель Minaraverse", adCode: "Код админа", adLogin: "Войти", adChange: "Задать / сменить код", adSend: "Отправить 6-значный код на", adSent: "Код отправлен. Проверь почту (и спам).", adOtp: "6-значный код из письма", adNewCode: "Новый код админа (мин. 6 символов)", adNewCode2: "Повтори новый код", adSave: "Сохранить новый код", adSaved: "Сохранено! Войди с новым кодом.", adWait: "Подожди минуту перед повторной отправкой.", adBadOtp: "6-значный код неверный.", adExpired: "Срок кода истёк. Отправь новый.", adMismatch: "Коды не совпадают.", adShort: "Минимум 6 символов.", adBack: "Назад ко входу", adWrong: "Неверный код или подключение ещё не настроено.", adSetup: "Админ-страница ещё не подключена к Google Таблице.",
  adAll: "Все", adLeads: "Заявки на уроки", adLevels: "Тесты уровня", adChapters: "Главы", adSearch: "Поиск по имени, телефону, email…", adTotal: "Всего", adToday: "Сегодня", adWeek: "За неделю",
  adLogout: "Выйти", adCsv: "Скачать CSV", adRefresh: "Обновить", adEmpty: "Пока ничего нет.", adWa: "WhatsApp", adDate: "Дата", adWho: "Ученик", adInfo: "Данные", adContact: "Связь", adNew: "новое" });

const adGet = async q => { const r = await fetch(ADMIN_API + (ADMIN_API.includes("?") ? "&" : "?") + q, { redirect: "follow" }); return r.json(); };

/* hall of fame fills itself from the sheet (names only, never contacts) */
let BOARD_P = null;
function loadBoard() {
  if (!ADMIN_API || /claude\.ai|claudeusercontent/.test(location.host)) return;
  BOARD_P = BOARD_P || adGet("a=board").then(d => { if (d && d.ok && d.board) Object.assign(BOARD, d.board); return true; }).catch(() => false);
  BOARD_P.then(ok => { const s = document.getElementById("h-board"); if (!ok || !s) return; const t = document.createElement("div"); t.innerHTML = boardHTML(); const n = t.firstElementChild; s.replaceWith(n); revealHome(n); });
}

VIEWS.admin = root => {
  let rows = [], tab = "all", q = "";
  const key = () => { try { return sessionStorage.getItem("mv-admin") || ""; } catch (e) { return ""; } };
  const login = () => {
    root.innerHTML = `<div class="ad">${topBar()}<main class="ad-main"><div class="ad-login"><span class="ad-lock">🔐</span><h1>${L("adH")}</h1>
      ${ADMIN_API ? `<form data-login><input type="password" autocomplete="current-password" placeholder="${L("adCode")}" required><button class="qz-btn">${L("adLogin")} →</button></form><p class="ad-err" role="alert"></p><button type="button" class="ad-link" data-reset>🔑 ${L("adChange")}</button>` : `<p class="ad-err">${L("adSetup")}</p>`}</div></main></div>`;
    const f = root.querySelector("[data-login]"); if (!f) return;
    root.querySelector("[data-reset]").onclick = reset;
    f.onsubmit = async e => { e.preventDefault(); const k = f.querySelector("input").value.trim(), er = root.querySelector(".ad-err"); er.textContent = "…";
      try { const d = await adGet("a=rows&key=" + encodeURIComponent(k)); if (!d.ok) throw 0; try { sessionStorage.setItem("mv-admin", k); } catch (x) {} rows = d.rows || []; panel(); }
      catch (x) { er.textContent = L("adWrong"); } };
  };
  const reset = async () => {
    let mail = "";
    try { const d = await adGet("a=status"); mail = d.email || ""; } catch (e) {}
    root.innerHTML = `<div class="ad">${topBar()}<main class="ad-main"><div class="ad-login"><span class="ad-lock">🔑</span><h1>${L("adChange")}</h1>
      <button type="button" class="qz-btn" data-send>✉ ${L("adSend")} ${esc(mail)}</button>
      <form data-set><input name="otp" inputmode="numeric" maxlength="6" autocomplete="one-time-code" placeholder="${L("adOtp")}" required>
        <input name="k1" type="password" autocomplete="new-password" placeholder="${L("adNewCode")}" required><input name="k2" type="password" autocomplete="new-password" placeholder="${L("adNewCode2")}" required>
        <button class="qz-btn">${L("adSave")}</button></form><p class="ad-err" role="alert"></p><button type="button" class="ad-link" data-back>← ${L("adBack")}</button></div></main></div>`;
    const er = root.querySelector(".ad-err"), say2 = (t, ok) => { er.textContent = t; er.style.color = ok ? "#9ff0c0" : ""; };
    root.querySelector("[data-back]").onclick = login;
    root.querySelector("[data-send]").onclick = async e => { const b = e.currentTarget; b.disabled = true; say2("…");
      try { const d = await adGet("a=send"); say2(d.ok ? L("adSent") : d.err === "wait" ? L("adWait") : L("adWrong"), d.ok); } catch (x) { say2(L("adWrong")); } setTimeout(() => b.disabled = false, 60000); };
    root.querySelector("[data-set]").onsubmit = async e => { e.preventDefault(); const fd = new FormData(e.target), k1 = fd.get("k1"), k2 = fd.get("k2");
      if (k1 !== k2) return say2(L("adMismatch")); if (k1.length < 6) return say2(L("adShort")); say2("…");
      try { const d = await adGet("a=set&otp=" + encodeURIComponent(fd.get("otp")) + "&key=" + encodeURIComponent(k1));
        if (d.ok) { say2(L("adSaved"), true); setTimeout(login, 1800); } else say2(d.err === "otp" ? L("adBadOtp") : d.err === "expired" ? L("adExpired") : d.err === "short" ? L("adShort") : L("adWrong")); } catch (x) { say2(L("adWrong")); } };
  };
  const norm2 = r => ({ t: String(r._time || ""), type: r.type || "", name: r.name || "", surname: r.surname || "", age: r.age || "", email: r.email || "", wa: String(r.whatsapp || ""), format: r.format || "",
    level: r.level || "", story: r.story || "", chapter: r.chapter || "", score: r.score || "", message: r.message || "", answers: r.answers || "", lang: r.language || r.lang || "" });
  const panel = () => {
    const R = rows.map(norm2).sort((a, b) => b.t.localeCompare(a.t));
    const today = dayStr(new Date()), wk = new Date(); wk.setDate(wk.getDate() - 7);
    const isT = r => r.t.slice(0, 10) === today, isW = r => new Date(r.t) >= wk;
    const tabs = [["all", L("adAll"), () => true], ["lead", L("adLeads"), r => /lesson/i.test(r.type)], ["level", L("adLevels"), r => /level/i.test(r.type)], ["chap", L("adChapters"), r => /chapter/i.test(r.type)]];
    const list = R.filter(tabs.find(x => x[0] === tab)[2]).filter(r => !q || JSON.stringify(r).toLowerCase().includes(q.toLowerCase()));
    const lv = {}; R.filter(r => /level/i.test(r.type)).forEach(r => { lv[r.level] = (lv[r.level] || 0) + 1; });
    const waLink = n => { const d = n.replace(/[^\d]/g, ""); const full = d.startsWith("994") ? d : d.startsWith("0") ? "994" + d.slice(1) : d; return d ? `https://wa.me/${full}` : ""; };
    root.innerHTML = `<div class="ad">${topBar()}<main class="ad-main wide">
      <header class="ad-head"><div><p class="ad-k">🔐 ${L("adK")}</p><h1>${L("adH")}</h1></div><div class="ad-act"><button class="ad-b" data-rf>↻ ${L("adRefresh")}</button><button class="ad-b" data-csv>⬇ ${L("adCsv")}</button><button class="ad-b ghost" data-out>${L("adLogout")}</button></div></header>
      <div class="ad-stats">${[[L("adTotal"), R.length], [L("adLeads"), R.filter(tabs[1][2]).length], [L("adLevels"), R.filter(tabs[2][2]).length], [L("adToday"), R.filter(isT).length], [L("adWeek"), R.filter(isW).length]].map(([t, n]) => `<div><b>${n}</b><span>${t}</span></div>`).join("")}</div>
      <div class="ad-lv">${LVLS.map(l => `<span><b>${l}</b>${lv[l] || 0}</span>`).join("")}</div>
      <div class="ad-bar"><div class="h-chips">${tabs.map(([k, t, fn]) => `<button data-tab="${k}" aria-pressed="${k === tab}">${t} · ${R.filter(fn).length}</button>`).join("")}</div><input class="ad-q" type="search" placeholder="${L("adSearch")}" value="${esc(q)}"></div>
      <div class="ad-list">${list.length ? list.map(r => `<article class="ad-row ${isT(r) ? "new" : ""}">
          <div class="ad-c1"><span class="ad-type t-${/lesson/i.test(r.type) ? "lead" : /level/i.test(r.type) ? "level" : "chap"}">${esc(r.type || "—")}</span>${isT(r) ? `<i class="ad-new">${L("adNew")}</i>` : ""}<small>${esc(r.t.replace("T", " ").slice(0, 16))}</small></div>
          <div class="ad-c2"><b>${esc(r.name)} ${esc(r.surname)}</b><small>${[r.age ? r.age + " y" : "", r.level, r.format].filter(Boolean).map(esc).join(" · ")}</small>${r.message ? `<p>“${esc(r.message)}”</p>` : ""}</div>
          <div class="ad-c3">${r.story ? `<span>${esc(r.story)}${r.chapter ? " · " + esc(r.chapter) : ""}</span>` : ""}${r.score ? `<b>${esc(r.score)}</b>` : ""}${r.answers && !/lesson/i.test(r.type) ? `<details><summary>…</summary><pre>${esc(r.answers)}</pre></details>` : ""}</div>
          <div class="ad-c4">${r.wa ? `<a class="ad-wa" href="${waLink(r.wa)}" target="_blank" rel="noopener">🟢 ${esc(r.wa)}</a>` : ""}${r.email ? `<a href="mailto:${esc(r.email)}">✉ ${esc(r.email)}</a>` : ""}</div></article>`).join("") : `<p class="ad-empty">${L("adEmpty")}</p>`}</div></main></div>`;
    root.querySelector(".ad-q").oninput = e => { q = e.target.value; const pos = e.target.selectionStart; panel(); const i = root.querySelector(".ad-q"); i.focus(); i.setSelectionRange(pos, pos); };
    root.querySelector(".ad-main").onclick = async e => {
      const t = e.target.closest("[data-tab]"); if (t) { tab = t.dataset.tab; panel(); return; }
      if (e.target.closest("[data-out]")) { try { sessionStorage.removeItem("mv-admin"); } catch (x) {} rows = []; login(); return; }
      if (e.target.closest("[data-rf]")) { try { const d = await adGet("a=rows&key=" + encodeURIComponent(key())); if (d.ok) { rows = d.rows || []; panel(); } } catch (x) {} return; }
      if (e.target.closest("[data-csv]")) { const cols = ["t", "type", "name", "surname", "age", "wa", "email", "format", "level", "story", "chapter", "score", "message"];
        const csv = [cols.join(","), ...list.map(r => cols.map(c => `"${String(r[c]).replace(/"/g, '""')}"`).join(","))].join("\n");
        const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob(["﻿" + csv], { type: "text/csv" })); a.download = `minaraverse-${today}.csv`; a.click(); }
    };
  };
  if (key() && ADMIN_API) adGet("a=rows&key=" + encodeURIComponent(key())).then(d => { if (d.ok) { rows = d.rows || []; panel(); } else login(); }).catch(login); else login();
  return {};
};
