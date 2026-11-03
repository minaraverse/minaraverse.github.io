/**
 * Minaraverse admin API (Google Apps Script, bound to the "Minaraverse - cavablar" sheet).
 * 1) Change ADMIN_CODE below to your own secret code (only you should know it).
 * 2) Deploy → New deployment → Web app → Execute as: Me, Who has access: Anyone → Deploy.
 * The site asks for ?key=CODE to read all rows (admin page), and ?board=1 to get the
 * public hall of fame (first names + surname initial only, never contacts).
 */
const ADMIN_CODE = "CHANGE-ME";
const KIDS_MAX_AGE = 14;

function readRows_() {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const v = sh.getDataRange().getValues();
  const head = v.shift().map(h => String(h).trim().toLowerCase());
  return v.filter(r => r.join("") !== "").map(r => {
    const o = { _time: r[0] instanceof Date ? r[0].toISOString() : String(r[0]) };
    head.forEach((h, i) => { if (i > 0) o[h] = r[i] instanceof Date ? r[i].toISOString() : r[i]; });
    return o;
  });
}

function points_(r) {
  const m = String(r.score || "").match(/(\d+)\s*\/\s*(\d+)/);
  return m ? Number(m[1]) : 0;
}

function board_(rows) {
  const now = new Date(), monday = new Date(now), first = new Date(now.getFullYear(), now.getMonth(), 1);
  monday.setHours(0, 0, 0, 0); monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
  const who = r => (String(r.name || "").trim() + " " + String(r.surname || "").trim()).trim();
  const show = r => { const s = String(r.surname || "").trim(); return String(r.name || "").trim() + (s ? " " + s[0].toUpperCase() + "." : ""); };
  const sum = (list) => { const m = {}; list.forEach(r => { const k = who(r).toLowerCase(); if (!k || !/level|chapter/i.test(r.type)) return;
      m[k] = m[k] || { name: show(r), pts: 0, age: Number(r.age) || 0, level: "" }; m[k].pts += points_(r); if (r.level) m[k].level = String(r.level); });
    return Object.values(m).filter(x => x.pts > 0).sort((a, b) => b.pts - a.pts); };
  const week = sum(rows.filter(r => new Date(r._time) >= monday));
  const month = sum(rows.filter(r => new Date(r._time) >= first));
  const fmt = x => x ? { name: x.name, score: x.pts + " pts", level: x.level } : null;
  const top3 = list => [0, 1, 2].map(i => fmt(list[i]));
  const levels = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 }, last = {};
  rows.filter(r => /level/i.test(r.type)).forEach(r => { last[who(r).toLowerCase()] = String(r.level || r.chapter || ""); });
  Object.values(last).forEach(l => { if (levels[l] !== undefined) levels[l]++; });
  return {
    week: fmt(week[0]),
    month: { adults: top3(month.filter(x => !x.age || x.age > KIDS_MAX_AGE)), kids: top3(month.filter(x => x.age && x.age <= KIDS_MAX_AGE)) },
    levels: levels
  };
}

function doGet(e) {
  const p = (e && e.parameter) || {};
  let out = { ok: false };
  if (p.key && p.key === ADMIN_CODE) out = { ok: true, rows: readRows_() };
  else if (p.board) out = { ok: true, board: board_(readRows_()) };
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}
