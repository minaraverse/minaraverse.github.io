/**
 * Minaraverse admin API (Google Apps Script, bound to the "Minaraverse - cavablar" sheet).
 * Nothing to edit here. Paste, save, Deploy → New deployment → Web app →
 * Execute as: Me, Who has access: Anyone → Deploy, and send the /exec link.
 * The admin code is set from the site (#admin → "Set / change code"): a 6-digit
 * confirmation code is emailed to ADMIN_EMAIL, then a new code can be saved.
 * Only a SHA-256 hash of the admin code is stored (Script Properties).
 */
const ADMIN_EMAIL = "nurlan_kerimov@hotmail.com";
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

function board_(rows) {
  const now = new Date(), monday = new Date(now), first = new Date(now.getFullYear(), now.getMonth(), 1);
  monday.setHours(0, 0, 0, 0); monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
  const who = r => (String(r.name || "").trim() + " " + String(r.surname || "").trim()).trim();
  const show = r => { const s = String(r.surname || "").trim(); return String(r.name || "").trim() + (s ? " " + s[0].toUpperCase() + "." : ""); };
  const sum = list => { const m = {}; list.forEach(r => { const k = who(r).toLowerCase(); if (!k || !/level|chapter/i.test(r.type)) return;
      m[k] = m[k] || { name: show(r), pts: 0, age: Number(r.age) || 0, level: "" }; m[k].pts += points_(r); if (r.level) m[k].level = String(r.level); });
    return Object.values(m).filter(x => x.pts > 0).sort((a, b) => b.pts - a.pts); };
  const week = sum(rows.filter(r => new Date(r._time) >= monday)), month = sum(rows.filter(r => new Date(r._time) >= first));
  const fmt = x => x ? { name: x.name, score: x.pts + " pts", level: x.level } : null;
  const top3 = list => [0, 1, 2].map(i => fmt(list[i]));
  const levels = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 }, last = {};
  rows.filter(r => /level/i.test(r.type)).forEach(r => { last[who(r).toLowerCase()] = String(r.level || r.chapter || ""); });
  Object.values(last).forEach(l => { if (levels[l] !== undefined) levels[l]++; });
  return { week: fmt(week[0]), month: { adults: top3(month.filter(x => !x.age || x.age > KIDS_MAX_AGE)), kids: top3(month.filter(x => x.age && x.age <= KIDS_MAX_AGE)) }, levels: levels };
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

function doGet(e) {
  const p = (e && e.parameter) || {}, a = p.a || (p.board ? "board" : "rows");
  const lock = LockService.getScriptLock(); lock.waitLock(10000);
  try {
    if (a === "lg") return json_(league_(p));
    if (a === "board") return json_({ ok: true, board: board_(readRows_()) });
    if (a === "status") { const sh = sheet_(); return json_({ ok: true, hasCode: !!P.getProperty("KEY"), email: ADMIN_EMAIL.replace(/^(.).*(@.*)$/, "$1***$2"),
      file: SpreadsheetApp.getActiveSpreadsheet().getName(), sheet: sh.getName(), rows: Math.max(0, sh.getLastRow() - 1) }); }
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
