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
const SH = ["email", "name", "age", "avatar", "created", "last", "xp", "streak", "lessons", "unit", "token", "progress", "parent_ok", "username", "pin", "mail_off", "last_rem", "status", "group"];
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
  if (f && stOf_(f.v) === "blocked") return { ok: false, err: "blocked" };
  if (f) { sh.getRange(f.row, 6).setValue(new Date()); sh.getRange(f.row, 11).setValue(hash_(token));
    let u = String(f.v[13] || "");
    if (!u && withCred && (!other || other.row === f.row)) { sh.getRange(f.row, 14, 1, 2).setValues([[user, pinHash(user, p.pin)]]); u = user; }
    return { ok: true, token: token, email: email, student: { name: f.v[1], age: f.v[2], avatar: f.v[3], user: u, status: stOf_(f.v) }, progress: f.v[11] ? JSON.parse(f.v[11]) : null }; }
  const name = clean(p.name, 30); if (!name) return { ok: false, err: "name" };
  if (withCred && other) return { ok: false, err: "taken" };
  const group = clean(p.group, 40);
  sh.appendRow([email, name, clean(p.age, 10), clean(p.av, 30), new Date(), new Date(), 0, 0, 0, "", hash_(token), "", p.parent ? "yes" : "", withCred ? user : "", withCred ? pinHash(user, p.pin) : "", "", "", "pending", group]);
  try { MailApp.sendEmail({ to: ADMIN_EMAIL, name: "Safiverse", subject: "⏳ Safiverse: " + name + " təsdiq gözləyir",
    htmlBody: mailHtml_("⏳ Yeni şagird təsdiq gözləyir", `<p style="font-size:15px"><b>${name}</b> · @${withCred ? user : "—"}<br>${clean(p.age, 10) === "kid" ? "👧 uşaq" : "🧑 böyük"} · ${email}${group ? "<br>👥 " + group : ""}</p>`, "Admin → təsdiq et", ""),
    body: "Yeni şagird təsdiq gözləyir: " + name + " (@" + user + "), " + email + (group ? ", qrup: " + group : "") + ". " + APP_URL + "#sadmin" }); } catch (e) {}
  return { ok: true, token: token, email: email, student: { name: name, age: clean(p.age, 10), avatar: clean(p.av, 30), user: withCred ? user : "", status: "pending" }, progress: null };
}
/* account status: "" (accounts made before approval existed) or "ok" = approved, "pending" = waiting for Safiverse, "blocked" */
const stOf_ = r => { const s = String(r[17] || ""); return s === "pending" || s === "blocked" ? s : "ok"; };
function auth_(p) { const email = String(p.email || "").trim().toLowerCase(), sh = students_(), f = find_(sh, email);
  if (!f || !p.token || hash_(String(p.token)) !== f.v[10] || stOf_(f.v) === "blocked") return null; return { sh: sh, f: f, email: email, st: stOf_(f.v) }; }
const authOk_ = p => { const a = auth_(p); return a && a.st === "ok" ? a : null; };

/* ---------- username + personal code ---------- */
function ucheck_(p) { const u = normUser(p.user); if (!okUser(u)) return { ok: false, err: "user" }; return { ok: true, free: !findUser_(students_(), u) }; }
function login_(p) {
  const u = normUser(p.user), lk = "lt_" + hash_(u), lt = JSON.parse(P.getProperty(lk) || "{}");
  if (lt.n >= 5 && Date.now() - lt.at < 900000) return { ok: false, err: "locked" };
  const sh = students_(), f = okUser(u) && okPin(p.pin) ? findUser_(sh, u) : null;
  if (!f || pinHash(u, p.pin) !== String(f.v[14])) { P.setProperty(lk, JSON.stringify({ n: (lt.n >= 5 ? 0 : lt.n || 0) + 1, at: Date.now() })); return { ok: false, err: "bad" }; }
  P.deleteProperty(lk);
  if (stOf_(f.v) === "blocked") return { ok: false, err: "blocked" };
  const token = Utilities.getUuid().replace(/-/g, "") + Utilities.getUuid().replace(/-/g, "");
  sh.getRange(f.row, 6).setValue(new Date()); sh.getRange(f.row, 11).setValue(hash_(token));
  return { ok: true, token: token, email: String(f.v[0]).toLowerCase(), student: { name: f.v[1], age: f.v[2], avatar: f.v[3], user: u, status: stOf_(f.v) }, progress: f.v[11] ? JSON.parse(f.v[11]) : null };
}
/* the app asks "am I approved yet?" */
function st_(p) { const email = String(p.email || "").trim().toLowerCase(), f = find_(students_(), email);
  if (f && stOf_(f.v) === "blocked") return { ok: false, err: "blocked" }; const a = auth_(p); if (!a) return { ok: false, err: "auth" }; return { ok: true, status: a.st }; }
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
  if (inc && xp >= curXp) { try { feedFromSync_(a.email, cur, inc, Number(a.f.v[7]) || 0, Number(p.streak) || 0, Number(a.f.v[8]) || 0, Number(p.lessons) || 0); } catch (e) {} }
  if (inc && xp >= curXp) a.sh.getRange(r, 4, 1, 9).setValues([[clean(p.av, 30) || a.f.v[3], a.f.v[4], new Date(), xp, Number(p.streak) || 0, Number(p.lessons) || 0, clean(p.unit, 60), a.f.v[10], JSON.stringify(inc).slice(0, 45000)]]);
  else a.sh.getRange(r, 6).setValue(new Date());
  if (p.name) a.sh.getRange(r, 2).setValue(clean(p.name, 30));
  return { ok: true, progress: xp >= curXp ? null : cur, status: a.st };
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
      if (rank < z.up && xp > 0) { t = Math.min(9, t + 1); res = "up"; try { evt_(String(v[i][0]), "tier", t); } catch (e) {} } else if (rank >= n - z.down) { t = Math.max(0, t - 1); res = "down"; }
      v[i][7] = JSON.stringify({ wk: String(v[i][4]), from: g.t, to: t, rank: rank + 1, n: n, res: res, xp: xp }); v[i][3] = t; v[i][4] = cur; v[i][5] = 0; }); });
  if (v.length > 1) sh.getRange(1, 1, v.length, 8).setValues(v);
  P.setProperty("LG_WK", cur);
}
/* every approved student is in the league automatically; weekly XP comes from their real progress (not only from opening the leaderboard) */
function enrolAll_(sh, cur) {
  const st = students_().getDataRange().getValues(), v = sh.getDataRange().getValues(), at = {}, okIds = {}; let dirty = false;
  for (let i = 1; i < v.length; i++) if (v[i][0]) at[v[i][0]] = i;
  for (let i = 1; i < st.length; i++) { const r = st[i]; if (!r[0] || stOf_(r) !== "ok") continue; const id = uidOf_(r[0]), wx = Math.min(5000, wkXpRow_(r)); okIds[id] = 1;
    if (at[id] == null) { v.push([id, clean(r[1], 24), String(r[3] || ""), 0, cur, wx, new Date(), ""]); at[id] = v.length - 1; dirty = true; }
    else { const L = v[at[id]]; if (String(L[4]) === cur && wx > (Number(L[5]) || 0)) { L[5] = wx; dirty = true; } if (!L[1] && r[1]) { L[1] = clean(r[1], 24); dirty = true; } if (!L[2] && r[3]) { L[2] = String(r[3]); dirty = true; } } }
  if (dirty) { const w = Math.max(...v.map(x => x.length)); sh.getRange(1, 1, v.length, 8).setValues(v.map(x => { const y = x.slice(0, 8); while (y.length < 8) y.push(""); return y; })); }
  return okIds;
}
function league_(p) {
  const a = authOk_(p); if (!a) return { ok: false, err: auth_(p) ? "pending" : "auth" };
  const id = hash_(a.email).slice(0, 24), sh = lgSheet_(), cur = wk_(); roll_(sh, cur); const okIds = enrolAll_(sh, cur);
  let v = sh.getDataRange().getValues(); let row = -1; for (let i = 1; i < v.length; i++) if (v[i][0] === id) { row = i; break; }
  const name = clean(p.name, 24) || a.f.v[1], av = String(p.av || "").replace(/[^a-z0-9,]/gi, "").slice(0, 30), xp = Math.max(0, Math.min(5000, Number(p.xp) || 0));
  if (row < 0) { sh.appendRow([id, name, av, 0, cur, xp, new Date(), ""]); v = sh.getDataRange().getValues(); row = v.length - 1; }
  else { const r = v[row]; r[1] = name; if (av) r[2] = av; r[5] = Math.max(Number(r[5]) || 0, xp); r[6] = new Date(); sh.getRange(row + 1, 1, 1, 8).setValues([r]); }
  const g = groups_(v).filter(x => x.rows.indexOf(row) > -1)[0], t = g.t;
  const players = g.rows.filter(i => i === row || okIds[v[i][0]]).map(i => ({ name: String(v[i][1]), av: String(v[i][2]), xp: Number(v[i][5]) || 0, me: i === row })).sort((a, b) => b.xp - a.xp);
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
  if (p.a === "ad_st") { if (!P.getProperty("KEY") || hash_(String(p.key || "")) !== P.getProperty("KEY")) return { ok: false };
    const sh = students_(), email = String(p.email || "").toLowerCase(), f = find_(sh, email); if (!f) return { ok: false, err: "nf" }; const was = stOf_(f.v);
    if (p.st === "reject") { if (was !== "pending") return { ok: false, err: "only pending" }; sh.deleteRow(f.row); return { ok: true }; }
    if (p.st === "blocked") { sh.getRange(f.row, 18).setValue("blocked"); sh.getRange(f.row, 11).setValue(""); return { ok: true }; }
    if (p.st === "ok") { sh.getRange(f.row, 18).setValue("ok");
      if (was === "pending") try { MailApp.sendEmail({ to: email, name: "Safiverse", subject: "✅ Safiverse: hesabın təsdiqləndi / аккаунт подтверждён",
        htmlBody: mailHtml_("✅ " + String(f.v[1]) + ", hesabın təsdiqləndi!", `<p style="font-size:15px">Safiverse hesabın təsdiqləndi — dərslərə başla! 🚀<br>Твой аккаунт Safiverse подтверждён — начинай уроки!<br>Your Safiverse account is approved — start learning!</p>`, "Safiverse →", ""),
        body: "Safiverse: hesabın təsdiqləndi / account approved. " + APP_URL }); } catch (e) {}
      return { ok: true }; }
    return { ok: false }; }
  if (p.a === "ad_rows") { if (!P.getProperty("KEY") || hash_(String(p.key || "")) !== P.getProperty("KEY")) return { ok: false };
    const v = students_().getDataRange().getValues(); v.shift();
    return { ok: true, rows: v.filter(r => r[0]).map(r => ({ email: r[0], name: r[1], age: r[2], avatar: r[3], created: r[4] instanceof Date ? r[4].toISOString() : String(r[4]), last: r[5] instanceof Date ? r[5].toISOString() : String(r[5]), xp: r[6], streak: r[7], lessons: r[8], unit: r[9], parent_ok: r[12], user: r[13] || "", status: stOf_(r), group: String(r[18] || "") })) }; }
  return { ok: false };
}

/* ---------- friends: find by exact username, request → accept (safe for kids: no browsing, no emails) ---------- */
function frSheet_() { let sh = ss_().getSheetByName("Dostlar"); if (!sh) { sh = ss_().insertSheet("Dostlar"); sh.appendRow(["from", "to", "status", "created"]); sh.setFrozenRows(1); } return sh; }
const uidOf_ = email => hash_(String(email).toLowerCase()).slice(0, 24);
function people_() { const v = students_().getDataRange().getValues(), by = {}; for (let i = 1; i < v.length; i++) if (v[i][0] && stOf_(v[i]) === "ok") by[uidOf_(v[i][0])] = v[i]; return by; }
function weekXp_() { const sh = lgSheet_(), v = sh.getDataRange().getValues(), cur = wk_(), o = {}; for (let i = 1; i < v.length; i++) if (String(v[i][4]) === cur) o[v[i][0]] = Number(v[i][5]) || 0; return o; }
function card_(r, wx) { return { user: String(r[13] || ""), name: String(r[1] || ""), av: String(r[3] || ""), xp: Number(r[6]) || 0, streak: Number(r[7]) || 0, wk: wkXpRow_(r), today: playedToday_(r) }; }
function links_(me) { const sh = frSheet_(), v = sh.getDataRange().getValues(), out = []; for (let i = 1; i < v.length; i++) if (v[i][0] === me || v[i][1] === me) out.push({ row: i + 1, from: v[i][0], to: v[i][1], st: v[i][2] }); return { sh: sh, list: out }; }
function friends_(p) {
  const a = authOk_(p); if (!a) return { ok: false, err: auth_(p) ? "pending" : "auth" };
  const me = uidOf_(a.email), myUser = String(a.f.v[13] || "");
  if (p.a === "fr_list") { const L = links_(me).list, by = people_(), wx = weekXp_(), fr = [], inc = [], outg = [];
    L.forEach(l => { const other = l.from === me ? l.to : l.from, r = by[other]; if (!r) return; const c = card_(r, wx);
      if (l.st === "ok") fr.push(c); else if (l.to === me) inc.push(c); else outg.push(c); });
    const mine = card_(a.f.v, wx); mine.me = true;
    return { ok: true, me: mine, friends: fr, incoming: inc, outgoing: outg }; }
  const u = normUser(p.user); if (!okUser(u)) return { ok: false, err: "user" };
  const t = findUser_(a.sh, u); if (!t || stOf_(t.v) !== "ok") return { ok: true, found: null };
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

/* =================== SOCIAL: duels, shared weekly goal, feed + cheers, streak gifts =================== */
const TZ = "Asia/Baku";
const today_ = () => Utilities.formatDate(new Date(), TZ, "yyyy-MM-dd");
const weekDays_ = () => { const out = [], m = new Date(Date.now() - (day_() - 1) * 864e5); for (let k = 0; k < 7; k++) out.push(Utilities.formatDate(new Date(m.getTime() + k * 864e5), TZ, "yyyy-MM-dd")); return out; };
const prog_ = r => { try { return r[11] ? JSON.parse(r[11]) : {}; } catch (e) { return {}; } };
function wkXpRow_(r) { const x = (prog_(r)["mv-xp"] || {}).days || {}; return weekDays_().reduce((a, d) => a + (Number(x[d]) || 0), 0); }
function playedToday_(r) { const d = prog_(r)["mv-days"] || []; return d.indexOf(today_()) > -1; }
function sheet_(name, head) { let sh = ss_().getSheetByName(name); if (!sh) { sh = ss_().insertSheet(name); sh.appendRow(head); sh.setFrozenRows(1); } return sh; }
const duelSh_ = () => sheet_("Duellər", ["id", "from", "to", "qs", "from_ans", "to_ans", "from_score", "to_score", "from_ms", "to_ms", "status", "created", "done"]);
const goalSh_ = () => sheet_("Hədəflər", ["id", "a", "b", "week", "target", "status", "created"]);
const feedSh_ = () => sheet_("Lent", ["id", "uid", "type", "val", "date", "cheers"]);
const giftSh_ = () => sheet_("Hədiyyələr", ["from", "to", "day", "status", "created"]);
const newId_ = () => Utilities.getUuid().replace(/-/g, "").slice(0, 12);
function evt_(uid, type, val) { feedSh_().appendRow([newId_(), uid, type, val, new Date(), "[]"]); }
function feedFromSync_(email, oldP, newP, s0, s1, l0, l1) {
  const uid = uidOf_(email);
  [7, 30, 100, 365].forEach(n => { if (s0 < n && s1 >= n) evt_(uid, "streak", n); });
  [10, 50, 100, 250].forEach(n => { if (l0 < n && l1 >= n) evt_(uid, "lessons", n); });
  const b0 = (oldP || {})["mv-badges"] || {}, b1 = (newP || {})["mv-badges"] || {};
  ["sec0", "sec1", "sec2"].forEach((k, i) => { if (b1[k] && !b0[k]) evt_(uid, "level", ["A1", "A2", "B1"][i]); });
}
function isFriend_(me, other) { const v = frSheet_().getDataRange().getValues(); for (let i = 1; i < v.length; i++) if (v[i][2] === "ok" && ((v[i][0] === me && v[i][1] === other) || (v[i][0] === other && v[i][1] === me))) return true; return false; }
function friendIds_(me) { const v = frSheet_().getDataRange().getValues(), o = []; for (let i = 1; i < v.length; i++) if (v[i][2] === "ok") { if (v[i][0] === me) o.push(v[i][1]); else if (v[i][1] === me) o.push(v[i][0]); } return o; }
const J = (s, d) => { try { return s ? JSON.parse(s) : d; } catch (e) { return d; } };
const score_ = (qs, ans) => qs.reduce((a, q, i) => a + (Number(ans[i]) === Number(q.c) ? 1 : 0), 0);

function social_(p) {
  const a = authOk_(p); if (!a) return { ok: false, err: auth_(p) ? "pending" : "auth" };
  const me = uidOf_(a.email), by = people_(), today = today_(), wk = wk_();
  const otherByUser = () => { const u = normUser(p.user); if (!okUser(u)) return null; const t = findUser_(a.sh, u); return t ? uidOf_(t.v[0]) : null; };
  const pub = uid => { const r = by[uid]; return r ? card_(r) : null; };

  if (p.a === "so_state") {
    /* duels */
    const dsh = duelSh_(), dv = dsh.getDataRange().getValues(), duels = [];
    for (let i = dv.length - 1; i >= 1 && duels.length < 15; i--) { const d = dv[i]; if (d[1] !== me && d[2] !== me) continue;
      const mine = d[1] === me, other = mine ? d[2] : d[1], age = Date.now() - new Date(d[11]).getTime();
      if (d[10] === "wait" && age > 48 * 36e5) { dsh.getRange(i + 1, 11).setValue("expired"); d[10] = "expired"; }
      const myAns = J(mine ? d[4] : d[5], null), done = d[10] === "done";
      duels.push({ id: d[0], other: pub(other), mine: mine, status: d[10], myTurn: d[10] === "wait" && !myAns, n: J(d[3], []).length,
        my: done || myAns ? (mine ? d[6] : d[7]) : null, their: done ? (mine ? d[7] : d[6]) : null, myMs: mine ? d[8] : d[9], theirMs: done ? (mine ? d[9] : d[8]) : null, at: new Date(d[11]).getTime() }); }
    /* shared goal this week */
    const gv = goalSh_().getDataRange().getValues(); let goal = null;
    for (let i = gv.length - 1; i >= 1; i--) { const g = gv[i]; if (String(g[3]) !== wk || (g[1] !== me && g[2] !== me)) continue;
      const other = g[1] === me ? g[2] : g[1], ra = by[me], rb = by[other]; const mx = ra ? wkXpRow_(ra) : 0, ox = rb ? wkXpRow_(rb) : 0;
      if (g[5] !== "won" && mx + ox >= Number(g[4])) { goalSh_().getRange(i + 1, 6).setValue("won"); g[5] = "won"; }
      goal = { id: g[0], other: pub(other), target: Number(g[4]), me: mx, them: ox, won: g[5] === "won", days: 8 - day_() }; break; }
    /* feed: me + friends, last 14 days */
    const fr = friendIds_(me), circle = fr.concat([me]), fv = feedSh_().getDataRange().getValues(), feed = [];
    for (let i = fv.length - 1; i >= 1 && feed.length < 25; i--) { const f = fv[i]; if (circle.indexOf(f[1]) < 0) continue; if (Date.now() - new Date(f[4]).getTime() > 14 * 864e5) break;
      const ch = J(f[5], []); feed.push({ id: f[0], who: pub(f[1]), me: f[1] === me, type: f[2], val: f[3], at: new Date(f[4]).getTime(), cheers: ch.length, cheered: ch.indexOf(me) > -1 }); }
    /* gifts: deliver new ones to me, report what I sent this week */
    const gsh = giftSh_(), gfv = gsh.getDataRange().getValues(), gifts = [], sentTo = []; let sentWeek = false; const wd = weekDays_();
    for (let i = 1; i < gfv.length; i++) { const g = gfv[i];
      if (g[1] === me && g[3] === "new") { gifts.push({ day: String(g[2]), from: pub(g[0]) }); gsh.getRange(i + 1, 4).setValue("used"); }
      if (g[0] === me && wd.indexOf(String(g[2])) > -1) { sentWeek = true; if (String(g[2]) === today) sentTo.push(g[1]); } }
    const r = by[me];
    return { ok: true, duels: duels, goal: goal, feed: feed, gifts: gifts, giftLeft: !sentWeek, mailOff: !!(r && r[15]) };
  }
  if (p.a === "so_mail") { a.sh.getRange(a.f.row, 16).setValue(p.off ? "yes" : ""); return { ok: true, mailOff: !!p.off }; }
  if (p.a === "so_cheer") { const sh = feedSh_(), v = sh.getDataRange().getValues();
    for (let i = 1; i < v.length; i++) if (v[i][0] === p.id) { if (v[i][1] === me) return { ok: false };
      const ch = J(v[i][5], []), k = ch.indexOf(me); if (k > -1) ch.splice(k, 1); else ch.push(me); sh.getRange(i + 1, 6).setValue(JSON.stringify(ch)); return { ok: true, cheers: ch.length, cheered: k < 0 }; }
    return { ok: false }; }

  const other = otherByUser(); if (!other || other === me) return { ok: false, err: "user" };
  if (!isFriend_(me, other)) return { ok: false, err: "notfriend" };

  if (p.a === "so_duel_new") {
    const qs = (p.qs || []).slice(0, 5).map(q => ({ u: Number(q.u) || 0, k: Number(q.k) || 0, t: String(q.t || "w").slice(0, 2), o: (q.o || []).slice(0, 4).map(Number), c: Number(q.c) || 0 }));
    if (qs.length < 3) return { ok: false, err: "qs" };
    const v = duelSh_().getDataRange().getValues();
    for (let i = 1; i < v.length; i++) if (v[i][10] === "wait" && ((v[i][1] === me && v[i][2] === other) || (v[i][1] === other && v[i][2] === me)) && Date.now() - new Date(v[i][11]).getTime() < 48 * 36e5) return { ok: false, err: "open" };
    const id = newId_(); duelSh_().appendRow([id, me, other, JSON.stringify(qs), "", "", "", "", "", "", "wait", new Date(), ""]);
    return { ok: true, id: id, qs: qs.map(q => ({ u: q.u, k: q.k, t: q.t, o: q.o })) };
  }
  return { ok: false };
}
/* duel actions that do not need the friend's username */
function duel_(p) {
  const a = authOk_(p); if (!a) return { ok: false, err: auth_(p) ? "pending" : "auth" };
  const me = uidOf_(a.email), sh = duelSh_(), v = sh.getDataRange().getValues();
  for (let i = 1; i < v.length; i++) { const d = v[i]; if (d[0] !== p.id) continue; if (d[1] !== me && d[2] !== me) return { ok: false };
    const mine = d[1] === me, qs = J(d[3], []);
    if (p.a === "du_get") return { ok: true, status: d[10], qs: qs.map(q => ({ u: q.u, k: q.k, t: q.t, o: q.o })) };
    if (p.a === "du_play") { if (d[10] !== "wait") return { ok: false, err: "closed" }; const col = mine ? 5 : 6; if (d[col - 1]) return { ok: false, err: "played" };
      const ans = (p.ans || []).slice(0, qs.length).map(Number), sc = score_(qs, ans), ms = Math.max(0, Math.min(36e5, Number(p.ms) || 0));
      sh.getRange(i + 1, col).setValue(JSON.stringify(ans)); sh.getRange(i + 1, mine ? 7 : 8).setValue(sc); sh.getRange(i + 1, mine ? 9 : 10).setValue(ms);
      const otherAns = mine ? d[5] : d[4]; let status = "wait", their = null, theirMs = null;
      if (otherAns) { status = "done"; sh.getRange(i + 1, 11, 1, 3).setValues([["done", d[11], new Date()]]); their = mine ? d[7] : d[6]; theirMs = mine ? d[9] : d[8]; }
      return { ok: true, status: status, my: sc, their: their, myMs: ms, theirMs: theirMs, right: qs.map(q => q.c) }; }
    if (p.a === "du_no") { if (d[10] === "wait") sh.getRange(i + 1, 11).setValue("declined"); return { ok: true }; }
  }
  return { ok: false };
}
function social2_(p) {
  const a = authOk_(p); if (!a) return { ok: false, err: auth_(p) ? "pending" : "auth" };
  const me = uidOf_(a.email), u = normUser(p.user), t = okUser(u) ? findUser_(a.sh, u) : null; if (!t) return { ok: false, err: "user" };
  const other = uidOf_(t.v[0]); if (other === me || !isFriend_(me, other)) return { ok: false, err: "notfriend" };
  if (p.a === "go_new") { const wk = wk_(), v = goalSh_().getDataRange().getValues();
    for (let i = 1; i < v.length; i++) if (String(v[i][3]) === wk && [me, other].some(x => v[i][1] === x || v[i][2] === x)) return { ok: false, err: "busy" };
    const target = [200, 300, 500].indexOf(Number(p.target)) > -1 ? Number(p.target) : 300;
    goalSh_().appendRow([newId_(), me, other, wk, target, "on", new Date()]); return { ok: true }; }
  if (p.a === "gi_send") { const wd = weekDays_(), v = giftSh_().getDataRange().getValues();
    for (let i = 1; i < v.length; i++) if (v[i][0] === me && wd.indexOf(String(v[i][2])) > -1) return { ok: false, err: "week" };
    if (playedToday_(t.v)) return { ok: false, err: "played" };
    giftSh_().appendRow([me, other, today_(), "new", new Date()]); return { ok: true }; }
  return { ok: false };
}

/* =================== EMAILS: weekly parent report (kids) + evening streak reminder =================== */
/* Run installTriggers once from the editor (choose it next to ▶ Çalıştır). */
function installTriggers() {
  ScriptApp.getProjectTriggers().forEach(t => { if (["weeklyReport", "dailyReminder"].indexOf(t.getHandlerFunction()) > -1) ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger("weeklyReport").timeBased().onWeekDay(ScriptApp.WeekDay.SUNDAY).atHour(19).inTimezone(TZ).create();
  ScriptApp.newTrigger("dailyReminder").timeBased().everyDays(1).atHour(19).inTimezone(TZ).create();
  Logger.log("OK: weeklyReport (Sunday 19:00) + dailyReminder (every day 19:00), Asia/Baku");
}
const APP_URL = "https://safiverse.github.io/";
function unsubLink_(email) { let u = ""; try { u = ScriptApp.getService().getUrl(); } catch (e) {} return u ? u + "?a=unsub&e=" + encodeURIComponent(email) + "&k=" + hash_("unsub|" + email).slice(0, 20) : ""; }
function mailHtml_(title, rows, cta, email) {
  const un = email ? unsubLink_(email) : "";
  return `<div style="font-family:Arial,sans-serif;max-width:520px;margin:auto;background:#0d1a15;color:#eef6f0;border-radius:18px;padding:24px">
    <div style="font-size:22px;font-weight:800">Safi<span style="color:#6fcf8e">verse</span></div><h2 style="margin:14px 0 8px;font-size:20px">${title}</h2>${rows}
    <p style="margin:22px 0"><a href="${APP_URL}" style="background:#6fcf8e;color:#0d1a15;padding:13px 22px;border-radius:14px;text-decoration:none;font-weight:800">${cta}</a></p>
    <p style="font-size:12px;color:#9fb3a8">${un ? `<a href="${un}" style="color:#9fb3a8">Unsubscribe · Abunəlikdən çıx · Отписаться</a>` : ""}</p></div>`;
}
function weeklyReport() {
  const sh = students_(), v = sh.getDataRange().getValues(), wd = weekDays_();
  for (let i = 1; i < v.length; i++) { const r = v[i]; if (!r[0] || r[2] !== "kid" || r[15]) continue; if (MailApp.getRemainingDailyQuota() < 3) break;
    if (stOf_(r) !== "ok") continue;
    const pr = prog_(r), x = (pr["mv-xp"] || {}).days || {}, days = (pr["mv-days"] || []).filter(d => wd.indexOf(d) > -1).length, wx = wkXpRow_(r), name = String(r[1]);
    const row = (e, az, ru, en, val) => `<p style="margin:6px 0;font-size:15px">${e} <b>${val}</b> — ${az} · ${ru} · ${en}</p>`;
    const rows = row("📅", "aktiv gün", "активных дней", "active days", days + " / 7") + row("⚡", "həftəlik XP", "XP за неделю", "XP this week", wx)
      + row("🔥", "seriya", "серия", "streak", Number(r[7]) || 0) + row("📚", "keçilən dərs (cəmi)", "уроков (всего)", "lessons total", Number(r[8]) || 0)
      + (r[9] ? row("📍", "indiki bölmə", "текущий раздел", "current unit", String(r[9]).replace(/[<>]/g, "")) : "")
      + `<p style="margin:14px 0 0;font-size:14px;color:#c9d8cf">${days >= 4 ? "Əla həftə! · Отличная неделя! · Great week!" : days >= 1 ? "Yaxşı başlanğıc — davam! · Хорошее начало! · Good start — keep going!" : "Bu həftə dərs olmayıb — 5 dəqiqə kifayətdir. · На этой неделе уроков не было. · No lessons this week."}</p>`;
    MailApp.sendEmail({ to: String(r[0]), name: "Safiverse", subject: "Safiverse: " + name + " — həftəlik hesabat / недельный отчёт",
      htmlBody: mailHtml_(name + " — həftəlik hesabat · Недельный отчёт · Weekly report", rows, "Safiverse →", String(r[0])), body: name + ": " + days + "/7 days, " + wx + " XP this week. " + APP_URL }); }
}
function dailyReminder() {
  const sh = students_(), v = sh.getDataRange().getValues(), today = today_();
  for (let i = 1; i < v.length; i++) { const r = v[i]; if (!r[0] || r[15] || String(r[16]) === today) continue; const s = Number(r[7]) || 0; if (s < 2 || playedToday_(r) || stOf_(r) !== "ok") continue;
    const pr = prog_(r), days = pr["mv-days"] || [], y = Utilities.formatDate(new Date(Date.now() - 864e5), TZ, "yyyy-MM-dd"); if (days.indexOf(y) < 0) continue;
    if (MailApp.getRemainingDailyQuota() < 3) break;
    const rows = `<p style="font-size:16px">🔥 <b>${s}</b> — seriyan yanmasın! · не дай серии сгореть! · don't lose your streak!</p><p style="font-size:14px;color:#c9d8cf">2 dəqiqəlik dərs kifayətdir · хватит 2-минутного урока · a 2-minute lesson is enough</p>`;
    MailApp.sendEmail({ to: String(r[0]), name: "Safiverse", subject: "🔥 " + s + " — Safiverse", htmlBody: mailHtml_(String(r[1]) + ", 🔥 " + s, rows, "Dərsə başla · Начать · Start →", String(r[0])), body: "🔥 " + s + " " + APP_URL });
    sh.getRange(i + 1, 17).setValue(today); }
}
function unsubPage_(p) {
  const email = String(p.e || "").toLowerCase(), ok = email && String(p.k || "") === hash_("unsub|" + email).slice(0, 20);
  if (ok) { const sh = students_(), f = find_(sh, email); if (f) sh.getRange(f.row, 16).setValue("yes"); }
  return HtmlService.createHtmlOutput(`<div style="font-family:Arial;text-align:center;padding:40px"><h2>${ok ? "✓" : "✗"} Safiverse</h2><p>${ok ? "Emaillər dayandırıldı · Рассылка отключена · You are unsubscribed" : "Link is not valid"}</p><p><a href="${APP_URL}">safiverse.github.io</a></p></div>`);
}

function handle_(p) {
  const lock = LockService.getScriptLock(); lock.waitLock(15000);
  try {
    if (p.a === "send") return send_(p);
    if (p.a === "verify") return verify_(p);
    if (p.a === "login") return login_(p);
    if (p.a === "st") return st_(p);
    if (p.a === "ucheck") return ucheck_(p);
    if (p.a === "setcred") return setcred_(p);
    if (p.a === "sync") return sync_(p);
    if (p.a === "lg") return league_(p);
    if (p.a === "votes") return votes_(p);
    if (p.a === "vote") return vote_(p);
    if (String(p.a || "").indexOf("fr_") === 0) return friends_(p);
    if (String(p.a || "").indexOf("so_") === 0) return social_(p);
    if (String(p.a || "").indexOf("du_") === 0) return duel_(p);
    if (p.a === "go_new" || p.a === "gi_send") return social2_(p);
    if (String(p.a || "").indexOf("ad_") === 0) return admin_(p);
    return { ok: false };
  } finally { lock.releaseLock(); }
}
function doPost(e) { let p = {}; try { p = JSON.parse(e.postData.contents || "{}"); } catch (er) {} return json_(handle_(p)); }
function doGet(e) { const q = (e && e.parameter) || {}; if (q.a === "unsub") return unsubPage_(q); return json_(handle_(q)); }
