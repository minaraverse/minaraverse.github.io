/**
 * Minaraverse admin API (Google Apps Script, bound to the "Minaraverse - cavablar" sheet).
 * Nothing to edit here. Paste, save, Deploy → New deployment → Web app →
 * Execute as: Me, Who has access: Anyone → Deploy, and send the /exec link.
 * The admin code is set from the site (#admin → "Set / change code"): a 6-digit
 * confirmation code is emailed to ADMIN_EMAIL, then a new code can be saved.
 * Only a SHA-256 hash of the admin code is stored (Script Properties).
 */
const ADMIN_EMAIL = "nurlan_kerimov@hotmail.com";
/* Telegram notifications: paste the bot token from @BotFather between the quotes, save,
   send /start to the bot in Telegram, then run setupTelegram() once (▶) — it finds your chat, sends a test and sets the 21:00 digest. */
const TG_TOKEN = "";
const KIDS_MAX_AGE = 14;
const P = PropertiesService.getScriptProperties();

function hash_(s) {
  return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, "mv|" + s)
    .map(b => ("0" + ((b + 256) % 256).toString(16)).slice(-2)).join("");
}
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

/* finds the form-responses sheet (the one with Name/Type columns and the most rows) */
function sheet_() {
  const all = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  const ok = all.filter(sh => { const h = sh.getRange(1, 1, 1, Math.max(1, sh.getLastColumn())).getValues()[0].map(x => String(x).toLowerCase());
    return h.indexOf("name") > -1 && h.indexOf("type") > -1; });
  return (ok.length ? ok : all).sort((a, b) => b.getLastRow() - a.getLastRow())[0];
}
function readRows_() {
  const sh = sheet_();
  const v = sh.getDataRange().getValues();
  const head = v.shift().map(h => String(h).trim().toLowerCase());
  return v.filter(r => r.join("") !== "").map(r => {
    const o = { _time: r[0] instanceof Date ? r[0].toISOString() : String(r[0]) };
    head.forEach((h, i) => { if (i > 0) o[h] = r[i] instanceof Date ? r[i].toISOString() : r[i]; });
    return o;
  });
}

function points_(r) { const m = String(r.score || "").match(/(\d+)\s*\/\s*(\d+)/); return m ? Number(m[1]) : 0; }

/* site activity (Ziyarətlər) as board rows: every finished chapter and level test of a student who typed their name counts automatically */
function evAsRows_() { try { return allRows_().filter(r => r.name && (r.ev === "done" || r.ev === "level")).map(r => { const parts = r.name.trim().split(/\s+/);
    return { _time: r.t.toISOString(), name: parts[0], surname: parts.slice(1).join(" "), type: r.ev === "done" ? "Chapter" : "Level", score: r.ev === "done" ? r.score : "", level: r.ev === "level" ? r.score : "", age: "", _ev: true }; }); } catch (e) { return []; } }
function board_(rows, evRows) {
  const now = new Date(), monday = new Date(now), first = new Date(now.getFullYear(), now.getMonth(), 1);
  monday.setHours(0, 0, 0, 0); monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
  const who = r => (String(r.name || "").trim() + " " + String(r.surname || "").trim()).trim();
  const show = r => (String(r.name || "").trim() + " " + String(r.surname || "").trim()).trim();
  const sum1 = list => { const m = {}; list.forEach(r => { const k = who(r).toLowerCase(); if (!k || !/level|chapter/i.test(r.type)) return;
      m[k] = m[k] || { name: show(r), pts: 0, ch: 0, age: Number(r.age) || 0, level: "" }; m[k].pts += points_(r); if (/chapter/i.test(r.type) && points_(r)) m[k].ch++; if (r.level) m[k].level = String(r.level); if (Number(r.age)) m[k].age = Number(r.age); });
    return m; };
  /* form answers and site activity are two views of the same work: per student take the bigger one, so nothing is counted twice */
  const sum = (list, evList) => { const a = sum1(list), b = sum1(evList || []), m = {};
    Object.keys(Object.assign({}, a, b)).forEach(k => { const x = a[k], y = b[k]; const best = !x ? y : !y ? x : (y.pts > x.pts ? Object.assign({}, y, { age: x.age || y.age, level: y.level || x.level }) : Object.assign({}, x, { level: x.level || y.level })); m[k] = best; });
    return Object.values(m).filter(x => x.pts > 0).sort((a2, b2) => b2.pts - a2.pts); };
  const ev = evRows || [], after = (list, t) => list.filter(r => new Date(r._time) >= t);
  /* week = Monday to now; the second board counts every student since the very first day, so nobody who worked is left out */
  const week = sum(after(rows, monday), after(ev, monday)), month = sum(rows, ev);
  const fmt = x => x ? { name: x.name, score: x.pts + " pts" + (x.ch ? " · " + x.ch + (x.ch === 1 ? " chapter" : " chapters") : ""), level: x.level } : null;
  const top3 = list => list.slice(0, 10).map(fmt);   /* ranked list (up to 10) — every student who finished anything is on the board */
  const levels = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 }, last = {};
  rows.filter(r => /level/i.test(r.type)).forEach(r => { last[who(r).toLowerCase()] = String(r.level || r.chapter || ""); });
  Object.values(last).forEach(l => { if (levels[l] !== undefined) levels[l]++; });
  return { week: fmt(week[0]), weekList: top3(week), month: { adults: top3(month.filter(x => !x.age || x.age > KIDS_MAX_AGE)), kids: top3(month.filter(x => x.age && x.age <= KIDS_MAX_AGE)) }, levels: levels };
}


/* ===== Milingo leagues: 10 tiers, weekly groups of up to 30, promotion/demotion every Monday (Asia/Baku) ===== */
const PROMO = [20, 15, 10, 7, 7, 7, 7, 7, 5, 0];
function day_() { return Number(Utilities.formatDate(new Date(), "Asia/Baku", "u")); }          /* 1 = Monday … 7 = Sunday */
function wk_() { const m = new Date(Date.now() - (day_() - 1) * 864e5); return Utilities.formatDate(m, "Asia/Baku", "yyyy-MM-dd"); }
function lgSheet_() { const ss = SpreadsheetApp.getActiveSpreadsheet(); let sh = ss.getSheetByName("Liqa");
  if (!sh) { sh = ss.insertSheet("Liqa"); sh.appendRow(["id", "name", "avatar", "tier", "week", "xp", "last", "prev"]); } return sh; }
function zones_(t, n) { const up = t >= 9 ? 0 : Math.max(1, Math.round(PROMO[t] / 30 * n)); const down = t === 0 ? 0 : n >= 10 ? 5 : n >= 5 ? Math.round(n / 6) : 0; return { up: n < 2 ? 0 : up, down: down }; }
function groups_(v) { const by = {}; v.forEach((r, i) => { if (i === 0 || !r[0]) return; const t = Number(r[3]) || 0; (by[t] = by[t] || []).push(i); });
  const out = []; Object.keys(by).forEach(t => { for (let k = 0; k < by[t].length; k += 30) out.push({ t: Number(t), rows: by[t].slice(k, k + 30) }); }); return out; }
function roll_(sh, cur) {
  if (P.getProperty("LG_WK") === cur) return;
  const v = sh.getDataRange().getValues();
  groups_(v).forEach(g => { const list = g.rows.slice().sort((a, b) => (Number(v[b][5]) || 0) - (Number(v[a][5]) || 0)), n = list.length, z = zones_(g.t, n);
    list.forEach((i, rank) => { const xp = Number(v[i][5]) || 0; let t = g.t, res = "stay";
      if (rank < z.up && xp > 0) { t = Math.min(9, t + 1); res = "up"; } else if (rank >= n - z.down) { t = Math.max(0, t - 1); res = "down"; }
      v[i][7] = JSON.stringify({ wk: String(v[i][4]), from: g.t, to: t, rank: rank + 1, n: n, res: res, xp: xp }); v[i][3] = t; v[i][4] = cur; v[i][5] = 0; }); });
  if (v.length > 1) sh.getRange(1, 1, v.length, 8).setValues(v);
  P.setProperty("LG_WK", cur);
}
function league_(p) {
  const id = String(p.id || ""); if (!/^[a-z0-9]{10,40}$/i.test(id)) return { ok: false, err: "id" };
  const sh = lgSheet_(), cur = wk_(); roll_(sh, cur);
  let v = sh.getDataRange().getValues(); let row = -1; for (let i = 1; i < v.length; i++) if (v[i][0] === id) { row = i; break; }
  const name = String(p.name || "").replace(/[<>"]/g, "").trim().slice(0, 24), av = String(p.av || "").replace(/[^a-z0-9,]/gi, "").slice(0, 30), xp = Math.max(0, Math.min(5000, Number(p.xp) || 0));
  if (row < 0) { if (!name) return { ok: false, err: "name" }; sh.appendRow([id, name, av, 0, cur, xp, new Date(), ""]); v = sh.getDataRange().getValues(); row = v.length - 1; }
  else { const r = v[row]; if (name) r[1] = name; if (av) r[2] = av; r[5] = Math.max(Number(r[5]) || 0, xp); r[6] = new Date(); sh.getRange(row + 1, 1, 1, 8).setValues([r]); }
  const g = groups_(v).filter(x => x.rows.indexOf(row) > -1)[0], t = g.t;
  const players = g.rows.map(i => ({ name: String(v[i][1]), av: String(v[i][2]), xp: Number(v[i][5]) || 0, me: i === row })).sort((a, b) => b.xp - a.xp);
  let prev = null; try { prev = v[row][7] ? JSON.parse(v[row][7]) : null; } catch (e) {}
  return { ok: true, tier: t, week: cur, days: 8 - day_(), players: players, zones: zones_(t, players.length), prev: prev };
}


/* ---------- visits & activity log ("Ziyarətlər" sheet) + Telegram ---------- */
const EVH = ["time", "uid", "name", "event", "story", "chapter", "score", "lang", "device", "ref", "ig", "text"];
function evSheet_() { const ss = SpreadsheetApp.getActiveSpreadsheet(); let sh = ss.getSheetByName("Ziyarətlər");
  if (!sh) { sh = ss.insertSheet("Ziyarətlər"); sh.appendRow(EVH); sh.setFrozenRows(1); }
  if (sh.getLastColumn() < EVH.length) sh.getRange(1, 1, 1, EVH.length).setValues([EVH]); return sh; }
const cl_ = (s, n) => String(s || "").replace(/[<>"=]/g, "").trim().slice(0, n);
function tg_(text) { const chat = P.getProperty("TG_CHAT"); if (!TG_TOKEN || !chat) return false;
  try { UrlFetchApp.fetch("https://api.telegram.org/bot" + TG_TOKEN + "/sendMessage", { method: "post", contentType: "application/json", muteHttpExceptions: true,
    payload: JSON.stringify({ chat_id: chat, text: text, parse_mode: "HTML", disable_web_page_preview: true }) }); return true; } catch (e) { return false; } }
const STORY_NAMES = { kids: "Little Explorers", cafe: "Baku Café", tapes: "English Tape Club", wild: "Wild English", travel: "Travel", voyage: "Voyage", mystery: "Mystery", movie: "Movie Club", business: "Baku Startup", contract: "Missing Contract", interview: "Job Interview", client: "Angry Client", call: "Video Call", debate: "Debate", ielts: "IELTS", heist: "Heist", exam: "Тест уровня (30 вопросов)", escape: "Escape Room", club: "Weekly Club", errors: "Mistake Hunters", camp: "Summer Camp", firstweek: "First Week in Baku", roommates: "Roommates", trial: "The Trial", podcast: "The Podcast", editor: "The Editor" };
const sname_ = k => STORY_NAMES[k] || k;
const EVS = ["visit", "view", "chapter", "done", "level", "page", "ui", "reg", "write", "poll"];
const PAGE_NAMES = { level: "Тест уровня", practice: "Тренировка", app: "Safiverse", club: "Клуб недели", word: "Слово дня", errors: "Охотники за ошибками", review: "Повтор ошибок", board: "Доска почёта", lesson: "Заявка на урок", pick: "Выбор курса" };
const pname_ = k => PAGE_NAMES[k] || sname_(k);
const who_ = (name, ig) => (name || "Без имени") + (ig ? " (@" + ig + ")" : "");
function event_(p) {
  const ev = cl_(p.ev, 12); if (EVS.indexOf(ev) < 0) return { ok: false };
  const sh = evSheet_(), name = cl_(p.name, 40), ig = cl_(p.ig, 40).replace(/^@/, ""), story = cl_(p.story, 24), ch = cl_(p.ch, 6), score = cl_(p.score, 90);
  const text = cl_(p.text, 700);
  sh.appendRow([new Date(), cl_(p.uid, 32), name, ev, story, ch, score, cl_(p.lang, 4), cl_(p.dev, 8), cl_(p.ref, 60), ig, text]);
  const dev = p.dev === "mobile" ? " 📱" : " 💻";
  if (ev === "write") tg_("✍️ <b>" + who_(name, ig) + "</b> написал(а) своё мнение\n📖 " + sname_(story) + " · Глава " + (Number(ch) + 1 || ch) + "\n\n" + text + dev);
  if (ev === "done") tg_("🎉 <b>" + who_(name, ig) + "</b>\n📖 " + sname_(story) + " · Глава " + (Number(ch) + 1 || ch) + "\n⭐ " + score + dev);
  if (ev === "level") tg_("🎓 <b>" + who_(name, ig) + "</b> прошёл(а) тест уровня: <b>" + score + "</b>" + dev);
  if (ev === "reg" && score !== "lesson-request") tg_("📝 <b>Новая регистрация:</b> " + who_(name, ig) + (score === "lesson-request" ? " — заявка на урок" : " — в тесте уровня") + dev);
  if (ev === "visit" && name) tg_("👋 <b>" + who_(name, ig) + "</b> зашёл(а) на сайт" + dev);
  return { ok: true };
}
function allRows_() { const v = evSheet_().getDataRange().getValues(); v.shift();
  return v.filter(r => r[0] instanceof Date).map(r => ({ t: r[0], uid: String(r[1] || ""), name: String(r[2] || ""), ev: String(r[3] || ""), story: String(r[4] || ""), ch: String(r[5]), score: String(r[6] || ""), lang: String(r[7] || ""), dev: String(r[8] || ""), ref: String(r[9] || ""), ig: String(r[10] || ""), text: String(r[11] || "") })); }
function evRows_(days) { const since = Date.now() - days * 864e5; return allRows_().filter(r => r.t.getTime() >= since).map(r => Object.assign({}, r, { t: r.t.toISOString() })); }
const cnt_ = (list, f) => { const m = {}; list.forEach(x => { const k = f(x); if (k) m[k] = (m[k] || 0) + 1; }); return Object.entries(m).sort((a, b) => b[1] - a[1]); };
const src_ = ref => /instagram/i.test(ref) ? "Instagram" : /t\.co|twitter|x\.com/i.test(ref) ? "X" : /facebook|fb\./i.test(ref) ? "Facebook" : /t\.me|telegram/i.test(ref) ? "Telegram" : /google/i.test(ref) ? "Google" : /youtube|youtu\.be/i.test(ref) ? "YouTube" : /tiktok/i.test(ref) ? "TikTok" : /minaraverse|safiverse/i.test(ref) ? "" : ref ? "Другой сайт" : "Напрямую / WhatsApp";
function summary_(rows, all) {
  const u = new Set(), named = {}, st = {}; let views = 0, done = 0;
  rows.forEach(r => { if (r.uid) u.add(r.uid); if (r.name) named[r.name] = named[r.name] || { ig: r.ig, done: 0 }; if (r.name && r.ig) named[r.name].ig = r.ig; if (r.ev === "view") { views++; st[r.story] = (st[r.story] || 0) + 1; } if (r.ev === "done") { done++; if (r.name) named[r.name].done++; } });
  const top = Object.entries(st).sort((a, b) => b[1] - a[1]).slice(0, 3).map(x => sname_(x[0]) + " (" + x[1] + ")");
  const first = {}; (all || []).forEach(r => { if (r.uid && (!first[r.uid] || r.t < first[r.uid])) first[r.uid] = r.t; });
  const since = rows.length ? Math.min.apply(null, rows.map(r => new Date(r.t).getTime())) : 0;
  const newU = [...u].filter(id => first[id] && first[id].getTime() >= since).length;
  const visits = rows.filter(r => r.ev === "visit");
  const openers = new Set(rows.filter(r => r.ev === "view").map(r => r.uid)).size, starters = new Set(rows.filter(r => r.ev === "chapter").map(r => r.uid)).size, finishers = new Set(rows.filter(r => r.ev === "done").map(r => r.uid)).size;
  return { visitors: u.size, newU: newU, returning: u.size - newU, named: Object.entries(named).map(([n, x]) => who_(n, x.ig) + (x.done ? " — глав пройдено: " + x.done : "")), views: views, done: done, top: top,
    dev: cnt_(visits, r => r.dev === "mobile" ? "с телефона" : "с компьютера"), lang: cnt_(visits, r => r.lang.toUpperCase()), src: cnt_(visits, r => src_(r.ref)),
    funnel: { openers, starters, finishers, chapters: rows.filter(r => r.ev === "chapter").length }, pages: cnt_(rows.filter(r => r.ev === "page"), r => pname_(r.story)).slice(0, 6),
    ui: cnt_(rows.filter(r => r.ev === "ui"), r => r.score), levels: rows.filter(r => r.ev === "level").map(r => r.score), regs: rows.filter(r => r.ev === "reg").map(r => who_(r.name, r.ig)) }; }
function stats_() { const all = allRows_(), iso = r => Object.assign({}, r, { t: r.t.toISOString() }), rows = d => all.filter(r => r.t.getTime() >= Date.now() - d * 864e5).map(iso);
  return { ok: true, today: summary_(rows(1), all), week: summary_(rows(7), all), month: summary_(rows(30), all), last: rows(7).reverse().slice(0, 60) }; }
function todayMain_() { try { const d0 = new Date(); d0.setHours(0, 0, 0, 0); return readRows_().filter(r => new Date(r._time) >= d0); } catch (e) { return []; } }
const UI_NAMES = { audio: "Включали озвучку", translate: "Открывали перевод", share: "Делились сайтом", safiverse: "Переходили в Safiverse", "level-cta": "Нажимали «Узнать уровень»", answer: "Отвечали на вопросы (чел.)" };
const RU_M = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
function ruDate_(d) { const z = new Date(d.getTime() + 4 * 36e5); return z.getUTCDate() + " " + RU_M[z.getUTCMonth()]; }
function dailyDigest() {
  const all = allRows_(), d0 = new Date(); d0.setHours(0, 0, 0, 0);
  const rows = all.filter(r => r.t >= d0).map(r => Object.assign({}, r, { t: r.t.toISOString() })), s = summary_(rows, all), main = todayMain_();
  const date = ruDate_(new Date());
  if (!s.visitors) { tg_("🌙 <b>" + date + "</b>\nСегодня на сайт никто не заходил."); return; }
  const j = (arr, f) => arr.map(x => f ? f(x) : x[0] + " " + x[1]).join(" · ");
  const leads = main.filter(r => /lesson/i.test(String(r.type))).map(r => (r.name + " " + (r.surname || "")).trim()), tests = main.filter(r => /level/i.test(String(r.type)));
  let m = "🌙 <b>Сводка за день — " + date + "</b>\n\n";
  m += "👥 Посетителей: <b>" + s.visitors + "</b> (новых " + s.newU + ", вернулись " + s.returning + ")\n";
  if (s.dev.length) m += "Устройства: " + j(s.dev, x => x[0] + " " + x[1]) + "\n";
  if (s.lang.length) m += "Язык сайта: " + j(s.lang, x => ({ AZ: "азербайджанский", RU: "русский", EN: "английский" })[x[0]] + " " + x[1]) + "\n";
  if (s.src.length) m += "Откуда пришли: " + j(s.src, x => x[0] + " " + x[1]) + "\n";
  m += "\n📖 <b>Истории</b>\nОткрыли историю: " + s.funnel.openers + " чел.\nНачали главу: " + s.funnel.starters + " чел.\nЗакончили главу: " + s.funnel.finishers + " чел.\n";
  m += "Всего: открытий " + s.views + ", начатых глав " + s.funnel.chapters + ", пройденных глав " + s.done + "\n";
  if (s.top.length) m += "Самые популярные: " + s.top.join(", ") + "\n";
  if (s.pages.length) m += "\n🧭 <b>Разделы сайта</b>\n" + s.pages.map(x => x[0] + ": " + x[1]).join("\n") + "\n";
  if (s.ui.length) m += "\n🖱 <b>Действия</b>\n" + s.ui.map(x => (UI_NAMES[x[0]] || x[0]) + ": " + x[1]).join("\n") + "\n";
  if (s.levels.length || tests.length) m += "\n🎓 Прошли тест уровня: " + Math.max(s.levels.length, tests.length) + (s.levels.length ? " (" + s.levels.join(", ") + ")" : "") + "\n";
  if (s.regs.length || leads.length) m += "📝 Зарегистрировались / оставили заявку: " + [...new Set(s.regs.concat(leads))].join(", ") + "\n";
  if (s.named.length) m += "\n🙋 <b>Ученики, чьи имена известны</b>\n" + s.named.slice(0, 25).join("\n") + "\n";
  const polls = {}; rows.filter(r => r.ev === "poll").forEach(r => { const k = sname_(r.story) + " · Глава " + (Number(r.ch) + 1 || r.ch) + "\n" + r.score; polls[k] = polls[k] || {}; polls[k][r.text] = (polls[k][r.text] || 0) + 1; });
  const pk = Object.keys(polls); if (pk.length) m += "\n🔮 <b>Что будет дальше? — голоса учеников</b>\n" + pk.map(k => k + "\n" + Object.entries(polls[k]).sort((a, b) => b[1] - a[1]).map(x => "   • " + x[0] + " — " + x[1]).join("\n")).join("\n") + "\n";
  try { const b = board_(readRows_(), evAsRows_()), nm = x => x ? x.name + " (" + x.score + (x.level ? ", " + x.level : "") + ")" : "—";
    m += "\n🏆 <b>Доска почёта сейчас</b>\nУченик недели: " + nm(b.week) + "\nТоп-3 месяца (взрослые): " + b.month.adults.map(nm).join(", ") + "\nТоп-3 месяца (дети): " + b.month.kids.map(nm).join(", ") + "\n"; } catch (e) {}
  const wr = rows.filter(r => r.ev === "write"); if (wr.length) m += "\n✍️ Написали своё мнение: " + wr.length + " (" + [...new Set(wr.map(r => who_(r.name, r.ig)))].join(", ") + ")\n";
  tg_(m.trim());
}

/* ---------- every Google Form answer (level test, chapter result, lesson request) → Telegram with full details ---------- */
function fv_(nv, k) { const key = Object.keys(nv || {}).find(x => x.trim().toLowerCase() === k); return key ? String((nv[key] || [""])[0] || "").trim() : ""; }
function onNewAnswer(e) {
  const nv = (e && e.namedValues) || {}; const type = fv_(nv, "type"), name = (fv_(nv, "name") + " " + fv_(nv, "surname")).trim();
  if (/lesson/i.test(type)) { tg_("📝 <b>Заявка на урок</b>\n👤 " + (name || "Без имени") + (fv_(nv, "age") ? ", " + fv_(nv, "age") + " лет" : "") + "\n📱 WhatsApp: " + (fv_(nv, "whatsapp") || "—") + "\n✉️ Email: " + (fv_(nv, "email") || "—")
      + "\n📚 Формат: " + (fv_(nv, "format") || "—") + " · Уровень: " + (fv_(nv, "level") || "—") + (fv_(nv, "score") ? " · Тест: " + fv_(nv, "score") : "") + (fv_(nv, "message") ? "\n💬 " + fv_(nv, "message") : "")); return; }
  if (/level/i.test(type)) { tg_("🎓 <b>Результат теста уровня отправлен</b>\n👤 " + (name || "Без имени") + (fv_(nv, "age") ? ", " + fv_(nv, "age") + " лет" : "") + "\n📊 " + (fv_(nv, "level") || fv_(nv, "chapter")) + " · " + fv_(nv, "score")); return; }
  if (/chapter/i.test(type)) tg_("✅ <b>Результат главы отправлен</b>\n👤 " + (name || "Без имени") + "\n📖 " + fv_(nv, "story") + " · " + fv_(nv, "chapter") + " · ⭐ " + fv_(nv, "score"));
}
/* ---------- everything the site has collected so far (run once, or from setupTelegram) ---------- */
function historyReport() {
  const rows = readRows_(), fmt = d => ruDate_(new Date(d));
  const who = r => (String(r.name || "").trim() + " " + String(r.surname || "").trim()).trim() || "Без имени";
  const leads = rows.filter(r => /lesson/i.test(String(r.type))), tests = rows.filter(r => /level/i.test(String(r.type))), chaps = rows.filter(r => /chapter/i.test(String(r.type)));
  const people = {}; rows.forEach(r => { const k = who(r).toLowerCase(); const p = people[k] = people[k] || { name: who(r), tests: 0, chaps: 0, lead: false, last: r._time, level: "" };
    if (/lesson/i.test(String(r.type))) p.lead = true; if (/level/i.test(String(r.type))) { p.tests++; p.level = String(r.level || r.chapter || p.level); } if (/chapter/i.test(String(r.type))) p.chaps++; if (r._time > p.last) p.last = r._time; });
  const P = Object.values(people).sort((a, b) => (b.last > a.last ? 1 : -1));
  const first = rows.length ? rows.map(r => r._time).sort()[0] : null;
  let m = "📚 <b>Всё, что собрал сайт до сегодняшнего дня</b>" + (first ? " (с " + fmt(first) + ")" : "") + "\n\n";
  m += "Всего отправленных результатов: " + rows.length + "\n• тестов уровня: " + tests.length + "\n• результатов глав: " + chaps.length + "\n• заявок на урок: " + leads.length + "\n• людей с именами: " + P.length + "\n";
  if (leads.length) m += "\n📝 <b>Заявки на урок</b>\n" + leads.map(r => "• " + who(r) + (r.age ? ", " + r.age : "") + " — WhatsApp: " + (r.whatsapp || "—") + (r.email ? ", " + r.email : "") + " — " + (r.format || "") + " " + (r.level || "") + " (" + fmt(r._time) + ")").join("\n") + "\n";
  if (P.length) m += "\n🙋 <b>Все ученики</b>\n" + P.slice(0, 60).map(p => "• " + p.name + (p.level ? " — " + p.level : "") + (p.tests ? ", тестов: " + p.tests : "") + (p.chaps ? ", глав: " + p.chaps : "") + (p.lead ? ", заявка ✓" : "") + " (" + fmt(p.last) + ")").join("\n") + "\n";
  const byStory = {}; chaps.forEach(r => { const k = String(r.story || "?"); byStory[k] = (byStory[k] || 0) + 1; });
  const bs = Object.entries(byStory).sort((a, b) => b[1] - a[1]); if (bs.length) m += "\n📖 <b>Главы по историям</b>\n" + bs.map(x => "• " + x[0] + ": " + x[1]).join("\n") + "\n";
  const ev = allRows_(); if (ev.length) m += "\n📈 Учёт посещений включён " + fmt(ev[0].t) + " — с этого дня в сводке будут и посетители, и действия на сайте. Раньше визиты не считались.";
  for (let i = 0; i < m.length; i += 3800) tg_(m.slice(i, i + 3800));
}
/* run once from the editor after pasting TG_TOKEN and sending /start to the bot */
function setupTelegram() {
  if (!TG_TOKEN) throw new Error("TG_TOKEN пуст — вставьте токен от @BotFather в строку 12.");
  const r = JSON.parse(UrlFetchApp.fetch("https://api.telegram.org/bot" + TG_TOKEN + "/getUpdates", { muteHttpExceptions: true }).getContentText());
  const m = (r.result || []).map(x => x.message || x.my_chat_member && { chat: x.my_chat_member.chat }).filter(Boolean).pop();
  if (!m) throw new Error("Откройте бота в Telegram и отправьте ему любое сообщение, затем запустите снова.");
  P.setProperty("TG_CHAT", String(m.chat.id));
  ScriptApp.getProjectTriggers().forEach(t => { if (t.getHandlerFunction() === "dailyDigest") ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger("dailyDigest").timeBased().everyDays(1).atHour(21).inTimezone("Asia/Baku").create();
  ScriptApp.getProjectTriggers().forEach(t => { if (t.getHandlerFunction() === "onNewAnswer") ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger("onNewAnswer").forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet()).onFormSubmit().create();
  tg_("✅ Уведомления Minaraverse подключены!\nКаждая пройденная глава — сразу, сводка — каждый вечер в 21:00.");
  Logger.log("OK — chat " + m.chat.id);
}
function doPost(e) { let p = {}; try { p = JSON.parse(e.postData.contents || "{}"); } catch (er) {}
  if (p.a === "ev") return json_(event_(p)); return json_({ ok: false }); }

function doGet(e) {
  const p = (e && e.parameter) || {}, a = p.a || (p.board ? "board" : "rows");
  const lock = LockService.getScriptLock(); lock.waitLock(10000);
  try {
    if (a === "lg") return json_(league_(p));
    if (a === "board") return json_({ ok: true, board: board_(readRows_(), evAsRows_()) });
    if (a === "status") { const sh = sheet_(); return json_({ ok: true, hasCode: !!P.getProperty("KEY"), email: ADMIN_EMAIL.replace(/^(.).*(@.*)$/, "$1***$2"),
      file: SpreadsheetApp.getActiveSpreadsheet().getName(), sheet: sh.getName(), rows: Math.max(0, sh.getLastRow() - 1) }); }
    if (a === "stats") { const k = P.getProperty("KEY"); if (!k || !p.key || hash_(p.key) !== k) return json_({ ok: false }); return json_(stats_()); }
    if (a === "rows") {
      const k = P.getProperty("KEY");
      if (!k || !p.key || hash_(p.key) !== k) return json_({ ok: false });
      return json_({ ok: true, rows: readRows_() });
    }
    if (a === "send") {
      const last = Number(P.getProperty("OTP_AT") || 0);
      if (Date.now() - last < 60000) return json_({ ok: false, err: "wait" });
      const otp = String(Math.floor(100000 + Math.random() * 900000));
      P.setProperties({ OTP: hash_(otp), OTP_AT: String(Date.now()), OTP_TRIES: "0" });
      MailApp.sendEmail(ADMIN_EMAIL, "Minaraverse admin code: " + otp,
        "Your Minaraverse confirmation code is: " + otp + "\n\nIt is valid for 10 minutes. If you did not ask for it, ignore this email.");
      return json_({ ok: true });
    }
    if (a === "set") {
      const at = Number(P.getProperty("OTP_AT") || 0), tries = Number(P.getProperty("OTP_TRIES") || 0);
      if (!P.getProperty("OTP") || Date.now() - at > 600000 || tries >= 5) return json_({ ok: false, err: "expired" });
      if (hash_(String(p.otp || "")) !== P.getProperty("OTP")) { P.setProperty("OTP_TRIES", String(tries + 1)); return json_({ ok: false, err: "otp" }); }
      if (String(p.key || "").length < 6) return json_({ ok: false, err: "short" });
      P.setProperty("KEY", hash_(p.key)); P.deleteProperty("OTP");
      return json_({ ok: true });
    }
    return json_({ ok: false });
  } finally { lock.releaseLock(); }
}
