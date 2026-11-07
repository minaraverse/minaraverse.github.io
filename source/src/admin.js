/* ===== ADMIN: private page (#admin) that reads Minara's Google Sheet through her Apps Script ===== */
/* Paste the Apps Script web-app URL here after deployment. The secret code is NOT stored in the site. */
const ADMIN_API = "https://script.google.com/macros/s/AKfycbyvcWi9KVAJ0elYh2XVjc_K0tOInPXsyVq9N1q9noAMDzzo0FTYPtSdF7ANxorwy3nO/exec";

Object.assign(UI.en, { adK: "Admin", adH: "Minaraverse admin", adCode: "Admin code", adLogin: "Log in", adChange: "Set / change code", adSend: "Send a 6-digit code to", adSent: "Code sent. Check the inbox (and spam).", adOtp: "6-digit code from the email", adNewCode: "New admin code (min. 6 characters)", adNewCode2: "Repeat the new code", adSave: "Save new code", adSaved: "Saved! Log in with your new code.", adWait: "Please wait a minute before sending again.", adBadOtp: "The 6-digit code is wrong.", adExpired: "The code expired. Send a new one.", adMismatch: "The two codes are different.", adShort: "Use at least 6 characters.", adBack: "Back to login", adWrong: "Wrong code or the connection is not set up yet.", adSetup: "The admin page is not connected to the Google Sheet yet.",
  adStats: "Visits", adVis: "visitors", adViews: "stories opened", adDone: "chapters finished", adLast: "Latest activity", adTodayW: "today", adWeekW: "7 days", adMonthW: "30 days", adAnon: "guest", adTg: "Telegram notifications: set up in the Google script (TG_TOKEN + setupTelegram).", adAll: "All", adLeads: "Lesson requests", adLevels: "Level tests", adChapters: "Chapters", adSearch: "Search by name, phone, email…", adTotal: "Total", adToday: "Today", adWeek: "This week",
  adLogout: "Log out", adCsv: "Download CSV", adRefresh: "Refresh", adEmpty: "No entries yet.", adWa: "WhatsApp", adDate: "Date", adWho: "Student", adInfo: "Details", adContact: "Contact", adNew: "new", adPeople: "Students", adEntries: "entries", adLast: "Last activity", adFile: "Sheet", adNoRows: "The sheet is connected but has no rows yet." });
Object.assign(UI.az, { adK: "Admin", adH: "Minaraverse admin paneli", adCode: "Admin kodu", adLogin: "Daxil ol", adChange: "Kodu təyin et / dəyiş", adSend: "6 rəqəmli kodu göndər:", adSent: "Kod göndərildi. Poçtu (və spam qovluğunu) yoxla.", adOtp: "Emaildəki 6 rəqəmli kod", adNewCode: "Yeni admin kodu (ən azı 6 simvol)", adNewCode2: "Yeni kodu təkrar yaz", adSave: "Yeni kodu saxla", adSaved: "Saxlanıldı! Yeni kodla daxil ol.", adWait: "Yenidən göndərmək üçün bir dəqiqə gözlə.", adBadOtp: "6 rəqəmli kod səhvdir.", adExpired: "Kodun vaxtı bitib. Yenisini göndər.", adMismatch: "İki kod eyni deyil.", adShort: "Ən azı 6 simvol yaz.", adBack: "Girişə qayıt", adWrong: "Kod səhvdir və ya bağlantı hələ qurulmayıb.", adSetup: "Admin səhifəsi hələ Google Cədvələ qoşulmayıb.",
  adStats: "Ziyarətlər", adVis: "ziyarətçi", adViews: "hekayə açılıb", adDone: "fəsil bitirilib", adLast: "Son fəaliyyət", adTodayW: "bu gün", adWeekW: "7 gün", adMonthW: "30 gün", adAnon: "qonaq", adTg: "Telegram bildirişləri Google skriptində qoşulur (TG_TOKEN + setupTelegram).", adAll: "Hamısı", adLeads: "Dərs müraciətləri", adLevels: "Səviyyə testləri", adChapters: "Fəsillər", adSearch: "Ad, telefon, email üzrə axtar…", adTotal: "Cəmi", adToday: "Bu gün", adWeek: "Bu həftə",
  adLogout: "Çıxış", adCsv: "CSV yüklə", adRefresh: "Yenilə", adEmpty: "Hələ heç nə yoxdur.", adWa: "WhatsApp", adDate: "Tarix", adWho: "Tələbə", adInfo: "Məlumat", adContact: "Əlaqə", adNew: "yeni", adPeople: "Tələbələr", adEntries: "qeyd", adLast: "Son fəaliyyət", adFile: "Cədvəl", adNoRows: "Cədvəl qoşulub, amma hələ sətir yoxdur." });
Object.assign(UI.ru, { adK: "Админ", adH: "Админ-панель Minaraverse", adCode: "Код админа", adLogin: "Войти", adChange: "Задать / сменить код", adSend: "Отправить 6-значный код на", adSent: "Код отправлен. Проверь почту (и спам).", adOtp: "6-значный код из письма", adNewCode: "Новый код админа (мин. 6 символов)", adNewCode2: "Повтори новый код", adSave: "Сохранить новый код", adSaved: "Сохранено! Войди с новым кодом.", adWait: "Подожди минуту перед повторной отправкой.", adBadOtp: "6-значный код неверный.", adExpired: "Срок кода истёк. Отправь новый.", adMismatch: "Коды не совпадают.", adShort: "Минимум 6 символов.", adBack: "Назад ко входу", adWrong: "Неверный код или подключение ещё не настроено.", adSetup: "Админ-страница ещё не подключена к Google Таблице.",
  adStats: "Посещения", adVis: "посетителей", adViews: "историй открыто", adDone: "глав пройдено", adLast: "Последняя активность", adTodayW: "сегодня", adWeekW: "7 дней", adMonthW: "30 дней", adAnon: "гость", adTg: "Уведомления Telegram настраиваются в Google-скрипте (TG_TOKEN + setupTelegram).", adAll: "Все", adLeads: "Заявки на уроки", adLevels: "Тесты уровня", adChapters: "Главы", adSearch: "Поиск по имени, телефону, email…", adTotal: "Всего", adToday: "Сегодня", adWeek: "За неделю",
  adLogout: "Выйти", adCsv: "Скачать CSV", adRefresh: "Обновить", adEmpty: "Пока ничего нет.", adWa: "WhatsApp", adDate: "Дата", adWho: "Ученик", adInfo: "Данные", adContact: "Связь", adNew: "новое", adPeople: "Ученики", adEntries: "записей", adLast: "Последняя активность", adFile: "Таблица", adNoRows: "Таблица подключена, но строк пока нет." });

const adGet = async q => { const r = await fetch(ADMIN_API + (ADMIN_API.includes("?") ? "&" : "?") + q, { redirect: "follow" }); return r.json(); };

/* hall of fame fills itself from the sheet (names only, never contacts) */
let BOARD_P = null;
function loadBoard() {
  if (!ADMIN_API || /claude\.ai|claudeusercontent/.test(location.host)) return;
  BOARD_P = BOARD_P || adGet("a=board").then(d => { if (d && d.ok && d.board) Object.assign(BOARD, d.board); return true; }).catch(() => false);
  BOARD_P.then(ok => { const s = document.getElementById("h-board"); if (!ok || !s) return; const t = document.createElement("div"); t.innerHTML = boardHTML(); const n = t.firstElementChild; s.replaceWith(n); revealHome(n); });
}

VIEWS.admin = root => {
  let rows = [], tab = "people", q = "", open = "", info = null, ST = null;
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
    const pkey = r => (r.name + " " + r.surname).trim().toLowerCase() || r.wa || r.email;
    const people = {}; R.forEach(r => { const k = pkey(r); if (!k) return; const p = people[k] = people[k] || { k, name: (r.name + " " + r.surname).trim() || "—", list: [] }; p.list.push(r);
      ["age", "wa", "email", "level", "format"].forEach(f => { if (!p[f] && r[f]) p[f] = r[f]; }); });
    const P = Object.values(people).sort((a, b) => b.list[0].t.localeCompare(a.list[0].t));
    const tabs = [["people", L("adPeople"), null], ["all", L("adAll"), () => true], ["lead", L("adLeads"), r => /lesson/i.test(r.type)], ["level", L("adLevels"), r => /level/i.test(r.type)], ["chap", L("adChapters"), r => /chapter/i.test(r.type)]];
    const list = tab === "people" ? [] : R.filter(tabs.find(x => x[0] === tab)[2]).filter(r => !q || JSON.stringify(r).toLowerCase().includes(q.toLowerCase()));
    const lv = {}; R.filter(r => /level/i.test(r.type)).forEach(r => { lv[r.level] = (lv[r.level] || 0) + 1; });
    const waLink = n => { const d = n.replace(/[^\d]/g, ""); const full = d.startsWith("994") ? d : d.startsWith("0") ? "994" + d.slice(1) : d; return d ? `https://wa.me/${full}` : ""; };
    root.innerHTML = `<div class="ad">${topBar()}<main class="ad-main wide">
      <header class="ad-head"><div><p class="ad-k">🔐 ${L("adK")}</p><h1>${L("adH")}</h1></div><div class="ad-act"><button class="ad-b" data-rf>↻ ${L("adRefresh")}</button><button class="ad-b" data-csv>⬇ ${L("adCsv")}</button><button class="ad-b ghost" data-out>${L("adLogout")}</button></div></header>
      <div class="ad-stats">${[[L("adTotal"), R.length], [L("adLeads"), R.filter(tabs[1][2]).length], [L("adLevels"), R.filter(tabs[2][2]).length], [L("adToday"), R.filter(isT).length], [L("adWeek"), R.filter(isW).length]].map(([t, n]) => `<div><b>${n}</b><span>${t}</span></div>`).join("")}</div>
      <div class="ad-lv">${LVLS.map(l => `<span><b>${l}</b>${lv[l] || 0}</span>`).join("")}</div>
      ${ST ? `<section class="ad-vis"><h2>📈 ${L("adStats")}</h2><div class="ad-vis-g">${[["adTodayW", ST.today], ["adWeekW", ST.week], ["adMonthW", ST.month]].map(([k, x]) => `<div><small>${L(k)}</small><b>${x.visitors}</b><span>${L("adVis")}</span><em>${x.views} ${L("adViews")} · ${x.done} ${L("adDone")}</em>${x.top && x.top.length ? `<i>🔥 ${x.top.join(", ")}</i>` : ""}</div>`).join("")}</div>
        ${ST.last.length ? `<details class="ad-vis-last"><summary>${L("adLast")} · ${ST.last.length}</summary><div>${ST.last.map(r => `<p><time>${new Date(r.t).toLocaleString(LANG === "en" ? "en-GB" : LANG, { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })}</time> ${({ done: "✅", view: "📖", chapter: "▶️", level: "🎓", page: "🧭", ui: "🖱", reg: "📝" })[r.ev] || "👋"} <b>${esc(r.name || L("adAnon"))}</b>${r.ig ? ` <a href="https://instagram.com/${esc(r.ig)}" target="_blank" rel="noopener">@${esc(r.ig)}</a>` : ""} ${r.story ? esc(r.story) : ""} ${r.ch !== "" && r.ch != null && r.ev === "done" ? "· " + (Number(r.ch) + 1) : ""} ${r.score ? "· " + esc(String(r.score)) : ""} ${r.dev === "mobile" ? "📱" : "💻"}</p>`).join("")}</div></details>` : ""}
        <p class="ad-tg">${L("adTg")}</p></section>` : ""}
      <div class="ad-bar"><div class="h-chips">${tabs.map(([k, t, fn]) => `<button data-tab="${k}" aria-pressed="${k === tab}">${k === "people" ? "👥 " : ""}${t} · ${fn ? R.filter(fn).length : P.length}</button>`).join("")}</div><input class="ad-q" type="search" placeholder="${L("adSearch")}" value="${esc(q)}"></div>
      ${tab === "people" ? `<div class="ad-people">${P.filter(p => !q || JSON.stringify(p).toLowerCase().includes(q.toLowerCase())).map(p => `<details class="ad-person" ${open === p.k ? "open" : ""} data-k="${esc(p.k)}"><summary>
          <span class="ad-av">${esc((p.name[0] || "?").toUpperCase())}</span><span class="ad-pn"><b>${esc(p.name)}</b><small>${[p.age ? p.age + " y" : "", p.level, `${p.list.length} ${L("adEntries")}`].filter(Boolean).map(esc).join(" · ")}</small></span>
          <span class="ad-pl">${esc(p.list[0].t.replace("T", " ").slice(0, 16))}</span></summary>
          <div class="ad-pd"><div class="ad-pc">${p.wa ? `<a class="ad-wa" href="${waLink(p.wa)}" target="_blank" rel="noopener">🟢 WhatsApp ${esc(p.wa)}</a>` : ""}${p.email ? `<a href="mailto:${esc(p.email)}">✉ ${esc(p.email)}</a>` : ""}${p.format ? `<span>📚 ${esc(p.format)}</span>` : ""}</div>
          <ol class="ad-hist">${p.list.map(r => `<li><span class="ad-type t-${/lesson/i.test(r.type) ? "lead" : /level/i.test(r.type) ? "level" : "chap"}">${esc(r.type || "—")}</span><small>${esc(r.t.replace("T", " ").slice(0, 16))}</small>
            <div>${esc([r.story && r.story !== r.type ? r.story : "", r.chapter, r.score].filter(Boolean).join(" · "))}${r.message ? ` <i>“${esc(r.message)}”</i>` : ""}</div></li>`).join("")}</ol></div></details>`).join("") || `<p class="ad-empty">${rows.length ? L("adEmpty") : (info && info.rows === 0 ? L("adNoRows") : L("adEmpty"))}</p>`}</div>` : ""}
      ${info && info.file ? `<p class="ad-src">${L("adFile")}: ${esc(info.file)} · ${esc(info.sheet)} · ${info.rows}</p>` : ""}
      <div class="ad-list">${tab === "people" ? "" : list.length ? list.map(r => `<article class="ad-row ${isT(r) ? "new" : ""}">
          <div class="ad-c1"><span class="ad-type t-${/lesson/i.test(r.type) ? "lead" : /level/i.test(r.type) ? "level" : "chap"}">${esc(r.type || "—")}</span>${isT(r) ? `<i class="ad-new">${L("adNew")}</i>` : ""}<small>${esc(r.t.replace("T", " ").slice(0, 16))}</small></div>
          <div class="ad-c2"><b>${esc(r.name)} ${esc(r.surname)}</b><small>${[r.age ? r.age + " y" : "", r.level, r.format].filter(Boolean).map(esc).join(" · ")}</small>${r.message ? `<p>“${esc(r.message)}”</p>` : ""}</div>
          <div class="ad-c3">${r.story ? `<span>${esc(r.story)}${r.chapter ? " · " + esc(r.chapter) : ""}</span>` : ""}${r.score ? `<b>${esc(r.score)}</b>` : ""}${r.answers && !/lesson/i.test(r.type) ? `<details><summary>…</summary><pre>${esc(r.answers)}</pre></details>` : ""}</div>
          <div class="ad-c4">${r.wa ? `<a class="ad-wa" href="${waLink(r.wa)}" target="_blank" rel="noopener">🟢 ${esc(r.wa)}</a>` : ""}${r.email ? `<a href="mailto:${esc(r.email)}">✉ ${esc(r.email)}</a>` : ""}</div></article>`).join("") : `<p class="ad-empty">${L("adEmpty")}</p>`}</div></main></div>`;
    root.querySelector(".ad-q").oninput = e => { q = e.target.value; const pos = e.target.selectionStart; panel(); const i = root.querySelector(".ad-q"); i.focus(); i.setSelectionRange(pos, pos); };
    root.querySelector(".ad-main").onclick = async e => {
      const t = e.target.closest("[data-tab]"); if (t) { tab = t.dataset.tab; panel(); return; }
      const ps = e.target.closest(".ad-person summary"); if (ps) { const d = ps.parentNode; open = d.open ? "" : d.dataset.k; return; }
      if (e.target.closest("[data-out]")) { try { sessionStorage.removeItem("mv-admin"); } catch (x) {} rows = []; login(); return; }
      if (e.target.closest("[data-rf]")) { try { const d = await adGet("a=rows&key=" + encodeURIComponent(key())); if (d.ok) { rows = d.rows || []; panel(); } } catch (x) {} return; }
      if (e.target.closest("[data-csv]")) { const cols = ["t", "type", "name", "surname", "age", "wa", "email", "format", "level", "story", "chapter", "score", "message"];
        const csv = [cols.join(","), ...list.map(r => cols.map(c => `"${String(r[c]).replace(/"/g, '""')}"`).join(","))].join("\n");
        const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob(["﻿" + csv], { type: "text/csv" })); a.download = `minaraverse-${today}.csv`; a.click(); }
    };
  };
  adGet("a=status").then(d => { info = d; }).catch(() => {});
  if (key() && ADMIN_API) adGet("a=stats&key=" + encodeURIComponent(key())).then(d => { if (d && d.ok) { ST = d; if (rows.length) panel(); } }).catch(() => {});
  if (key() && ADMIN_API) adGet("a=rows&key=" + encodeURIComponent(key())).then(d => { if (d.ok) { rows = d.rows || []; panel(); } else login(); }).catch(login); else login();
  return {};
};

/* hidden entrance for the installed app (no address bar): tap the footer line "© Minaraverse" 5 times */
(() => { let n = 0, t; document.addEventListener("click", e => { const f = e.target.closest(".h-small"); if (!f) return;
  n++; clearTimeout(t); t = setTimeout(() => n = 0, 2500); if (n >= 5) { n = 0; Router.go("admin"); } }); })();
