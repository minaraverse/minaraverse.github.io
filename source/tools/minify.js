/* Minify the Safiverse bundle. Usage: node tools/minify.js in.js out.js in.css out.css
   Needs: npm i terser csso  (if missing, build.py ships the unminified files) */
const fs = require("fs"), [ij, oj, ic, oc] = process.argv.slice(2);
(async () => {
  const { minify } = require("terser"), csso = require("csso");
  const r = await minify(fs.readFileSync(ij, "utf8"), { compress: { passes: 1, keep_fargs: true }, mangle: { toplevel: false }, format: { comments: false } });
  fs.writeFileSync(oj, r.code);
  fs.writeFileSync(oc, csso.minify(fs.readFileSync(ic, "utf8"), { restructure: false }).css);
})().catch(e => { console.error(e.message); process.exit(1); });
