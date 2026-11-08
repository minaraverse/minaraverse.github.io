/* ===== extra task kinds for every chapter (true/false, gap chips, matching, event order, dictation, error fix, writing, "what next" polls) =====
   TASKS[story][chapterIndex] = array of questions in the usual format [text, options(correct first), explanation, opt].
   Merged into STORIES before the app starts; translations are spliced into TR so existing indexes stay aligned. */
const TASKS = {};
const DESCS = {};   /* home-card teasers for stories added later (EN/AZ/RU) */
function mergeTasks() {
  Object.keys(TASKS).forEach(s => { const S = STORIES[s]; if (!S) return;
    Object.keys(TASKS[s]).forEach(ci => { const u = S.units[+ci], add = TASKS[s][ci]; if (!u || !add || !add.length) return;
      const qs = u.qs, tr = (TR[s] && TR[s][+ci]) || null, hasR = !S.noRiddle;
      const riddle = hasR ? qs.pop() : null, rTr = hasR && tr ? tr.pop() : null;
      const tf = add.filter(q => q[3] && q[3].t === "tf"), fin = add.filter(q => q[3] && /^(write|poll)$/.test(q[3].t)), mid = add.filter(q => !tf.includes(q) && !fin.includes(q));
      const out = [], otr = [], push = (q, t) => { out.push(q); otr.push(t || (q[3] && q[3].tr) || {}); };
      const base = qs.map((q, i) => [q, tr ? tr[i] : null]);
      base.forEach(([q, t], i) => { push(q, t);
        if (i === 0 && tf.length) push(tf.shift());
        if (i === 2 && mid.length) push(mid.shift());
        if (i === base.length - 1) { while (mid.length) push(mid.shift()); while (tf.length) push(tf.shift()); while (fin.length) push(fin.shift()); } });
      if (riddle) push(riddle, rTr);
      u.qs = out; if (tr) { tr.length = 0; otr.forEach(x => tr.push(x || {})); } }); });
}
