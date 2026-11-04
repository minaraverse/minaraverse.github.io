/**
 * Safiverse server (Google Apps Script, bound to the "Safiverse — tələbələr" spreadsheet).
 * Nothing to edit except ADMIN_EMAIL. Paste, save, Deploy → New deployment → Web app →
 * Execute as: Me, Who has access: Anyone → Deploy, and send the /exec link.
 * Sheets are created automatically: "Tələbələr" (students) and "Liqa" (weekly leagues).
 * Sign-up: a 6-digit code goes to the email once; the student also picks a username and a personal code (4–6 digits).
 * Later sign-in: username + personal code on any phone (email code stays as "forgot my code"). Only hashes are stored.
 */
const ADMIN_EMAIL = "nurlan_kerimov@hotmail.com";
const KIDS_MAX_AGE = 14;
const P = PropertiesService.getScriptProperties();

function hash_(s) { return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, "sv|" + s).map(b => ("0" + ((b + 256) % 256).toString(16)).slice(-2)).join(""); }
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function ss_() {
  try { const a = SpreadsheetApp.getActiveSpreadsheet(); if (a) return a; } catch (e) {}
  const id = P.getProperty("SHEET_ID");
  if (id) { try { return SpreadsheetApp.openById(id); } catch (e) {} }
  const n = SpreadsheetApp.create("Safiverse — tələbələr"); P.setProperty("SHEET_ID", n.getId()); return n;
}
/* Run once from the editor (▶ setup) to create/check the sheet and grant permissions. */
function setup() { const s = ss_(); students_(); lgSheet_(); votesSh_(); Logger.log(s.getUrl()); }
const SH = ["email", "name", "age", "avatar", "created", "last", "xp", "streak", "lessons", "unit", "token", "progress", "parent_ok", "username", "pin"];
function students_() { let sh = ss_().getSheetByName("Tələbələr"); if (!sh) { sh = ss_().insertSheet("Tələbələr"); sh.appendRow(SH); sh.setFrozenRows(1); }
  else if (sh.getLastColumn() < SH.length) sh.getRange(1, 1, 1, SH.length).setValues([SH]); return sh; }
function findUser_(sh, u) { const v = sh.getDataRange().getValues(); for (let i = 1; i < v.length; i++) if (String(v[i][13] || "").toLowerCase() === u) return { row: i + 1, v: v[i] }; return null; }
const normUser = u => String(u || "").trim().toLowerCase();
const okUser = u => /^[a-z0-9._]{3,20}$/.test(u);
const okPin = c => /^\d{4,6}$/.test(String(c || ""));
const pinHash = (u, c) => hash_("pin|" + u + "|" + c);
function find_(sh, email) { const v = sh.getDataRange().getValues(); for (let i = 1; i < v.length; i++) if (String(v[i][0]).toLowerCase() === email) return { row: i + 1, v: v[i] }; return null; }
const okEmail = e => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);
const clean = (s, n) => String(s || "").replace(/[<>"]/g, "").trim().slice(0, n);

/* ---------- sign-in with email code ---------- */
function send_(p) {
  const email = String(p.email || "").trim().toLowerCase(); if (!okEmail(email)) return { ok: false, err: "email" };
  const k = "otp_" + hash_(email), old = JSON.parse(P.getProperty(k) || "{}");
  if (old.at && Date.now() - old.at < 60000) return { ok: false, err: "wait" };
  const code = String(Math.floor(100000 + Math.random() * 900000));
  P.setProperty(k, JSON.stringify({ h: hash_(code), at: Date.now(), tries: 0 }));
  MailApp.sendEmail({ to: email, name: "Safiverse", subject: "Safiverse: " + code, body: "Your Safiverse code / Safiverse kodun / Твой код Safiverse: " + code + "\n\nValid for 10 minutes. 10 dəqiqə etibarlıdır. Действует 10 минут.\n\nIf you did not ask for it, ignore this email." });
  return { ok: true };
}
function verify_(p) {
  const email = String(p.email || "").trim().toLowerCase(), k = "otp_" + hash_(email), o = JSON.parse(P.getProperty(k) || "{}");
  if (!o.h || Date.now() - o.at > 600000 || o.tries >= 5) return { ok: false, err: "expired" };
  if (hash_(String(p.code || "")) !== o.h) { o.tries++; P.setProperty(k, JSON.stringify(o)); return { ok: false, err: "code" }; }
  P.deleteProperty(k);
  const sh = students_(), f = find_(sh, email), token = Utilities.getUuid().replace(/-/g, "") + Utilities.getUuid().replace(/-/g, "");
  const user = normUser(p.user), withCred = okUser(user) && okPin(p.pin), other = withCred ? findUser_(sh, user) : null;
  if (f) { sh.getRange(f.row, 6).setValue(new Date()); sh.getRange(f.row, 11).setValue(hash_(token));
    let u = String(f.v[13] || "");
    if (!u && withCred && (!other || other.row === f.row)) { sh.getRange(f.row, 14, 1, 2).setValues([[user, pinHash(user, p.pin)]]); u = user; }
    return { ok: true, token: token, email: email, student: { name: f.v[1], age: f.v[2], avatar: f.v[3], user: u }, progress: f.v[11] ? JSON.parse(f.v[11]) : null }; }
  const name = clean(p.name, 30); if (!name) return { ok: false, err: "name" };
  if (withCred && other) return { ok: false, err: "taken" };
  sh.appendRow([email, name, clean(p.age, 10), clean(p.av, 30), new Date(), new Date(), 0, 0, 0, "", hash_(token), "", p.parent ? "yes" : "", withCred ? user : "", withCred ? pinHash(user, p.pin) : ""]);
  return { ok: true, token: token, email: email, student: { name: name, age: clean(p.age, 10), avatar: clean(p.av, 30), user: withCred ? user : "" }, progress: null };
}
function auth_(p) { const email = String(p.email || "").trim().toLowerCase(), sh = students_(), f = find_(sh, email);
  if (!f || !p.token || hash_(String(p.token)) !== f.v[10]) return null; return { sh: sh, f: f, email: email }; }

/* ---------- username + personal code ---------- */
function ucheck_(p) { const u = normUser(p.user); if (!okUser(u)) return { ok: false, err: "user" }; return { ok: true, free: !findUser_(students_(), u) }; }
function login_(p) {
  const u = normUser(p.user), lk = "lt_" + hash_(u), lt = JSON.parse(P.getProperty(lk) || "{}");
  if (lt.n >= 5 && Date.now() - lt.at < 900000) return { ok: false, err: "locked" };
  const sh = students_(), f = okUser(u) && okPin(p.pin) ? findUser_(sh, u) : null;
  if (!f || pinHash(u, p.pin) !== String(f.v[14])) { P.setProperty(lk, JSON.stringify({ n: (lt.n >= 5 ? 0 : lt.n || 0) + 1, at: Date.now() })); return { ok: false, err: "bad" }; }
  P.deleteProperty(lk);
  const token = Utilities.getUuid().replace(/-/g, "") + Utilities.getUuid().replace(/-/g, "");
  sh.getRange(f.row, 6).setValue(new Date()); sh.getRange(f.row, 11).setValue(hash_(token));
  return { ok: true, token: token, email: String(f.v[0]).toLowerCase(), student: { name: f.v[1], age: f.v[2], avatar: f.v[3], user: u }, progress: f.v[11] ? JSON.parse(f.v[11]) : null };
}
function setcred_(p) {
  const a = auth_(p); if (!a) return { ok: false, err: "auth" };
  const u = normUser(p.user); if (!okUser(u)) return { ok: false, err: "user" }; if (!okPin(p.pin)) return { ok: false, err: "pin" };
  const other = findUser_(a.sh, u); if (other && other.row !== a.f.row) return { ok: false, err: "taken" };
  a.sh.getRange(a.f.row, 14, 1, 2).setValues([[u, pinHash(u, p.pin)]]); return { ok: true, user: u };
}

/* ---------- progress sync (the copy with more XP wins) ---------- */
function sync_(p) {
  const a = auth_(p); if (!a) return { ok: false, err: "auth" };
  const r = a.f.row, cur = a.f.v[11] ? JSON.parse(a.f.v[11]) : null, inc = p.progress || null, xp = Number(p.xp) || 0;
  const curXp = Number(a.f.v[6]) || 0;
  if (inc && xp >= curXp) a.sh.getRange(r, 4, 1, 9).setValues([[clean(p.av, 30) || a.f.v[3], a.f.v[4], new Date(), xp, Number(p.streak) || 0, Number(p.lessons) || 0, clean(p.unit, 60), a.f.v[10], JSON.stringify(inc).slice(0, 45000)]]);
  else a.sh.getRange(r, 6).setValue(new Date());
  if (p.name) a.sh.getRange(r, 2).setValue(clean(p.name, 30));
  return { ok: true, progress: xp >= curXp ? null : cur };
}

/* ---------- leagues: 10 cosmic tiers, weekly groups of up to 30 ---------- */
const PROMO = [20, 15, 10, 7, 7, 7, 7, 7, 5, 0];
function day_() { return Number(Utilities.formatDate(new Date(), "Asia/Baku", "u")); }
function wk_() { const m = new Date(Date.now() - (day_() - 1) * 864e5); return Utilities.formatDate(m, "Asia/Baku", "yyyy-MM-dd"); }
function lgSheet_() { let sh = ss_().getSheetByName("Liqa"); if (!sh) { sh = ss_().insertSheet("Liqa"); sh.appendRow(["id", "name", "avatar", "tier", "week", "xp", "last", "prev"]); } return sh; }
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
  const a = auth_(p); if (!a) return { ok: false, err: "auth" };
  const id = hash_(a.email).slice(0, 24), sh = lgSheet_(), cur = wk_(); roll_(sh, cur);
  let v = sh.getDataRange().getValues(); let row = -1; for (let i = 1; i < v.length; i++) if (v[i][0] === id) { row = i; break; }
  const name = clean(p.name, 24) || a.f.v[1], av = String(p.av || "").replace(/[^a-z0-9,]/gi, "").slice(0, 30), xp = Math.max(0, Math.min(5000, Number(p.xp) || 0));
  if (row < 0) { sh.appendRow([id, name, av, 0, cur, xp, new Date(), ""]); v = sh.getDataRange().getValues(); row = v.length - 1; }
  else { const r = v[row]; r[1] = name; if (av) r[2] = av; r[5] = Math.max(Number(r[5]) || 0, xp); r[6] = new Date(); sh.getRange(row + 1, 1, 1, 8).setValues([r]); }
  const g = groups_(v).filter(x => x.rows.indexOf(row) > -1)[0], t = g.t;
  const players = g.rows.map(i => ({ name: String(v[i][1]), av: String(v[i][2]), xp: Number(v[i][5]) || 0, me: i === row })).sort((a, b) => b.xp - a.xp);
  let prev = null; try { prev = v[row][7] ? JSON.parse(v[row][7]) : null; } catch (e) {}
  return { ok: true, tier: t, week: cur, days: 8 - day_(), players: players, zones: zones_(t, players.length), prev: prev };
}


/* ---------- language votes: es / it / fr / de, one vote per person per language ---------- */
const VLANGS = ["es", "it", "fr", "de"];
function votesSh_() { let sh = ss_().getSheetByName("Səslər"); if (!sh) { sh = ss_().insertSheet("Səslər"); sh.appendRow(["voter", "lang", "at"]); sh.setFrozenRows(1); } return sh; }
function votes_(p) {
  const v = votesSh_().getDataRange().getValues(), me = p && p.voter ? hash_("v|" + String(p.voter)).slice(0, 24) : "", counts = {}, mine = [];
  VLANGS.forEach(l => counts[l] = 0);
  for (let i = 1; i < v.length; i++) { const l = String(v[i][1]); if (l in counts) { counts[l]++; if (me && v[i][0] === me) mine.push(l); } }
  return { ok: true, counts: counts, mine: mine, goal: Number(P.getProperty("VOTE_GOAL") || 100) };
}
function vote_(p) {
  const l = String(p.lang || ""), id = String(p.voter || ""); if (VLANGS.indexOf(l) < 0 || id.length < 6) return { ok: false };
  const sh = votesSh_(), me = hash_("v|" + id).slice(0, 24), v = sh.getDataRange().getValues();
  for (let i = 1; i < v.length; i++) if (v[i][0] === me && v[i][1] === l) return votes_(p);
  sh.appendRow([me, l, new Date()]); return votes_(p);
}

/* ---------- admin: code by email, then the list of students ---------- */
function admin_(p) {
  if (p.a === "ad_status") return { ok: true, hasCode: !!P.getProperty("KEY"), email: ADMIN_EMAIL.replace(/^(.).*(@.*)$/, "$1***$2") };
  if (p.a === "ad_send") { const last = Number(P.getProperty("AOTP_AT") || 0); if (Date.now() - last < 60000) return { ok: false, err: "wait" };
    const otp = String(Math.floor(100000 + Math.random() * 900000)); P.setProperties({ AOTP: hash_(otp), AOTP_AT: String(Date.now()), AOTP_TRIES: "0" });
    MailApp.sendEmail({ to: ADMIN_EMAIL, name: "Safiverse", subject: "Safiverse admin code: " + otp, body: "Your Safiverse admin confirmation code is: " + otp + "\n\nValid for 10 minutes." }); return { ok: true }; }
  if (p.a === "ad_set") { const at = Number(P.getProperty("AOTP_AT") || 0), tries = Number(P.getProperty("AOTP_TRIES") || 0);
    if (!P.getProperty("AOTP") || Date.now() - at > 600000 || tries >= 5) return { ok: false, err: "expired" };
    if (hash_(String(p.otp || "")) !== P.getProperty("AOTP")) { P.setProperty("AOTP_TRIES", String(tries + 1)); return { ok: false, err: "otp" }; }
    if (String(p.key || "").length < 6) return { ok: false, err: "short" }; P.setProperty("KEY", hash_(p.key)); P.deleteProperty("AOTP"); return { ok: true }; }
  if (p.a === "ad_goal") { if (!P.getProperty("KEY") || hash_(String(p.key || "")) !== P.getProperty("KEY")) return { ok: false };
    const g = Math.max(1, Math.min(100000, Number(p.goal) || 100)); P.setProperty("VOTE_GOAL", String(g)); return votes_({}); }
  if (p.a === "ad_rows") { if (!P.getProperty("KEY") || hash_(String(p.key || "")) !== P.getProperty("KEY")) return { ok: false };
    const v = students_().getDataRange().getValues(); v.shift();
    return { ok: true, rows: v.filter(r => r[0]).map(r => ({ email: r[0], name: r[1], age: r[2], avatar: r[3], created: r[4] instanceof Date ? r[4].toISOString() : String(r[4]), last: r[5] instanceof Date ? r[5].toISOString() : String(r[5]), xp: r[6], streak: r[7], lessons: r[8], unit: r[9], parent_ok: r[12], user: r[13] || "" })) }; }
  return { ok: false };
}

/* ---------- friends: find by exact username, request → accept (safe for kids: no browsing, no emails) ---------- */
function frSheet_() { let sh = ss_().getSheetByName("Dostlar"); if (!sh) { sh = ss_().insertSheet("Dostlar"); sh.appendRow(["from", "to", "status", "created"]); sh.setFrozenRows(1); } return sh; }
const uidOf_ = email => hash_(String(email).toLowerCase()).slice(0, 24);
function people_() { const v = students_().getDataRange().getValues(), by = {}; for (let i = 1; i < v.length; i++) if (v[i][0]) by[uidOf_(v[i][0])] = v[i]; return by; }
function weekXp_() { const sh = lgSheet_(), v = sh.getDataRange().getValues(), cur = wk_(), o = {}; for (let i = 1; i < v.length; i++) if (String(v[i][4]) === cur) o[v[i][0]] = Number(v[i][5]) || 0; return o; }
function card_(r, wx) { const id = uidOf_(r[0]); return { user: String(r[13] || ""), name: String(r[1] || ""), av: String(r[3] || ""), xp: Number(r[6]) || 0, streak: Number(r[7]) || 0, wk: wx ? wx[id] || 0 : 0 }; }
function links_(me) { const sh = frSheet_(), v = sh.getDataRange().getValues(), out = []; for (let i = 1; i < v.length; i++) if (v[i][0] === me || v[i][1] === me) out.push({ row: i + 1, from: v[i][0], to: v[i][1], st: v[i][2] }); return { sh: sh, list: out }; }
function friends_(p) {
  const a = auth_(p); if (!a) return { ok: false, err: "auth" };
  const me = uidOf_(a.email), myUser = String(a.f.v[13] || "");
  if (p.a === "fr_list") { const L = links_(me).list, by = people_(), wx = weekXp_(), fr = [], inc = [], outg = [];
    L.forEach(l => { const other = l.from === me ? l.to : l.from, r = by[other]; if (!r) return; const c = card_(r, wx);
      if (l.st === "ok") fr.push(c); else if (l.to === me) inc.push(c); else outg.push(c); });
    const mine = card_(a.f.v, wx); mine.me = true;
    return { ok: true, me: mine, friends: fr, incoming: inc, outgoing: outg }; }
  const u = normUser(p.user); if (!okUser(u)) return { ok: false, err: "user" };
  const t = findUser_(a.sh, u); if (!t) return { ok: true, found: null };
  const other = uidOf_(t.v[0]); if (other === me) return { ok: true, found: card_(t.v), state: "self" };
  const L = links_(me), l = L.list.filter(x => x.from === other || x.to === other)[0];
  const state = !l ? "none" : l.st === "ok" ? "friends" : l.from === me ? "out" : "in";
  if (p.a === "fr_find") return { ok: true, found: card_(t.v), state: state };
  if (p.a === "fr_req") { if (!myUser) return { ok: false, err: "nouser" };
    if (state === "none") { if (L.list.filter(x => x.from === me && x.st !== "ok").length >= 30) return { ok: false, err: "many" }; L.sh.appendRow([me, other, "wait", new Date()]); return { ok: true, state: "out" }; }
    if (state === "in") { L.sh.getRange(l.row, 3).setValue("ok"); return { ok: true, state: "friends" }; }
    return { ok: true, state: state }; }
  if (p.a === "fr_ans") { if (state !== "in") return { ok: true, state: state };
    if (p.yes) { L.sh.getRange(l.row, 3).setValue("ok"); return { ok: true, state: "friends" }; } L.sh.deleteRow(l.row); return { ok: true, state: "none" }; }
  if (p.a === "fr_del") { if (l) L.sh.deleteRow(l.row); return { ok: true, state: "none" }; }
  return { ok: false };
}

function handle_(p) {
  const lock = LockService.getScriptLock(); lock.waitLock(15000);
  try {
    if (p.a === "send") return send_(p);
    if (p.a === "verify") return verify_(p);
    if (p.a === "login") return login_(p);
    if (p.a === "ucheck") return ucheck_(p);
    if (p.a === "setcred") return setcred_(p);
    if (p.a === "sync") return sync_(p);
    if (p.a === "lg") return league_(p);
    if (p.a === "votes") return votes_(p);
    if (p.a === "vote") return vote_(p);
    if (String(p.a || "").indexOf("fr_") === 0) return friends_(p);
    if (String(p.a || "").indexOf("ad_") === 0) return admin_(p);
    return { ok: false };
  } finally { lock.releaseLock(); }
}
function doPost(e) { let p = {}; try { p = JSON.parse(e.postData.contents || "{}"); } catch (er) {} return json_(handle_(p)); }
function doGet(e) { return json_(handle_((e && e.parameter) || {})); }
