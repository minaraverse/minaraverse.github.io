/* usage: node src/tasks/check.js <story>  — validates src/tasks/<story>.js against the spec */
const fs = require("fs"), vm = require("vm"), path = require("path");
const R = path.resolve(__dirname, "../..");
const story = process.argv[2]; if (!story) { console.log("story?"); process.exit(1); }
const data = ["words", "data", "data2", "tr", "tr2", "data3", "data4", "data5", "data6", "data7", "data8", "data9"].map(f => { const p = path.join(R, "src", f + ".js"); return fs.existsSync(p) ? fs.readFileSync(p, "utf8") : ""; }).join("\n");
const ctx = vm.createContext({ console, UI: { en: {}, az: {}, ru: {} } });
vm.runInContext(data + "\n;this.STORIES=STORIES;", ctx);
const code = fs.readFileSync(path.join(__dirname, story + ".js"), "utf8");
vm.runInContext("var TASKS={};\n" + code + "\n;this.TASKS=TASKS;", ctx);
const S = ctx.STORIES[story], T = ctx.TASKS[story]; let bad = 0;
const err = m => { bad++; console.log("✗ " + m); };
if (!S) err("unknown story"); if (!T) err("TASKS." + story + " missing");
const n = S.units.length, VAR = ["gap", "match", "seq", "dict", "fix"];
for (let ci = 0; ci < n; ci++) {
  const a = T[ci]; if (!a) { err(`chapter ${ci}: missing`); continue; }
  if (a.length !== 4) err(`chapter ${ci}: ${a.length} items (need 4)`);
  a.forEach((q, k) => {
    const w = `chapter ${ci} item ${k}`;
    if (!Array.isArray(q) || q.length !== 4) return err(`${w}: not [text, options, explanation, opt]`);
    const [t, o, e, p] = q;
    if (typeof t !== "string" || !t.trim()) err(`${w}: empty text`);
    if (!Array.isArray(o) || !o.length) err(`${w}: options`);
    if (typeof e !== "string") err(`${w}: explanation`);
    if (!p || !p.t) return err(`${w}: opt.t missing`);
    if (!p.tr || !p.tr.az || !p.tr.ru) err(`${w}: tr.az / tr.ru missing`);
    if (p.t === "tf") { if (!(o.length === 2 && o.includes("True") && o.includes("False"))) err(`${w}: tf options must be True/False`); }
    else if (p.t === "gap") { if (!/_{2,}/.test(t)) err(`${w}: gap text needs ____`); if (o.length < 3 || o.length > 4) err(`${w}: gap needs 3–4 chips`); if (new Set(o.map(x => x.toLowerCase())).size !== o.length) err(`${w}: duplicate chips`); }
    else if (p.t === "match") { if (!Array.isArray(p.pairs) || p.pairs.length < 3 || p.pairs.length > 5) err(`${w}: pairs 3–5`); else p.pairs.forEach(pr => { if (pr.length !== 2) err(`${w}: pair`); }); if (new Set((p.pairs || []).map(x => x[1])).size !== (p.pairs || []).length) err(`${w}: duplicate right side`); }
    else if (p.t === "seq") { if (!Array.isArray(p.items) || p.items.length < 3 || p.items.length > 5) err(`${w}: items 3–5`); if (o[0] !== (p.items || []).join(" → ")) err(`${w}: options[0] must equal items.join(" → ")`); }
    else if (p.t === "dict") { if (!p.say || p.say !== o[0]) err(`${w}: say must equal options[0]`); const wc = o[0].split(/\s+/).length; if (wc < 4 || wc > 10) err(`${w}: dictation ${wc} words (4–10)`); }
    else if (p.t === "fix") { if (t.trim() === o[0].trim()) err(`${w}: fix text equals answer`); }
    else if (p.t === "poll") { if (o.length < 2 || o.length > 4) err(`${w}: poll 2–4 options`); if (ci === n - 1) err(`${w}: poll in last chapter`); }
    else if (p.t === "write") { if (!p.min) err(`${w}: write.min`); }
    else err(`${w}: unknown kind ${p.t}`);
  });
  const kinds = a.map(q => q[3] && q[3].t);
  if (kinds[0] !== "tf") err(`chapter ${ci}: item 0 must be tf`);
  if (!VAR.includes(kinds[1]) || !VAR.includes(kinds[2])) err(`chapter ${ci}: items 1–2 must be gap/match/seq/dict/fix`);
  if (kinds[1] === kinds[2]) err(`chapter ${ci}: items 1 and 2 same kind`);
  const want = ci === n - 1 || ci === Math.floor(n / 2) ? "write" : "poll";
  if (kinds[3] !== want) err(`chapter ${ci}: item 3 must be ${want}`);
}
const used = {}; Object.values(T || {}).forEach(a => a.forEach(q => { const k = q[3] && q[3].t; used[k] = (used[k] || 0) + 1; }));
console.log(bad ? `${bad} problem(s)` : "✓ OK", JSON.stringify(used));
process.exit(bad ? 1 : 0);
