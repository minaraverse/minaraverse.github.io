# New story spec (Minaraverse)

Look at /home/claude/mv/src/data9.js (STORIES.interview / client / call and TXT.interview etc.) for the exact format and tone. Each new story is a file `/home/claude/mv/src/<file>.js` that contains, for every story:

```js
STORIES.<key> = { title: "…", level: "A1", unit: "Day",   // unit = what a chapter is called (Day, Episode, Session, Issue…)
units: [
{ id: "short", name: "Chapter title", az: "AZ title", ru: "RU title", emoji: "🎒",
  note: "The chapter text in English, 110–170 words for A1 (short sentences, present tense), 170–230 words for C2 (rich, idiomatic, natural). Dialogue in “curly quotes” is welcome.",
  qs: [ /* exactly 6 questions, format [text, options(correct FIRST), explanation, { tr: { az, ru } }] — all plain multiple choice with 3 options; the LAST question is the chapter's key question (a riddle-like question that needs the whole text or a clever inference). Explanation = one friendly sentence; tr = its AZ/RU translation. */ ]
},
… exactly 6 chapters …
]};
TXT.<key> = [ { az: "full AZ translation of chapter 1 note", ru: "full RU translation" }, … 6 items, same order … ];
DESCS.<key> = { en: "One-sentence teaser for the home card.", az: "…", ru: "…" };
```

Also, at the end of the same file, add the chapter tasks for each story exactly as /home/claude/mv/src/tasks/SPEC.md describes (`TASKS.<key> = { 0: [...], … 5: [...] }`, 4 items per chapter: tf → two varied kinds → poll (write in the middle chapter index 3 and the last chapter index 5)). The checker `node /home/claude/mv/src/tasks/check.js <key>` will NOT see your story unless it is in a data file, so instead validate with:

```
cd /home/claude/mv && node -e "
const fs=require('fs'),vm=require('vm');const c=vm.createContext({STORIES:{},TXT:{},DESCS:{},TASKS:{}});
vm.runInContext(fs.readFileSync('src/<file>.js','utf8'),c);
for(const k in c.STORIES){const S=c.STORIES[k];let bad=0;const e=m=>{bad++;console.log('BAD',k,m)};
if(S.units.length!==6)e('6 chapters');if(!c.TXT[k]||c.TXT[k].length!==6)e('TXT 6');if(!c.DESCS[k]||!c.DESCS[k].az)e('DESCS');
S.units.forEach((u,i)=>{const w=u.note.split(/\s+/).length;if(w<100||w>240)e('ch'+i+' words '+w);if(!u.az||!u.ru||!u.emoji)e('ch'+i+' meta');if(u.qs.length!==6)e('ch'+i+' 6 qs');u.qs.forEach((q,j)=>{if(q[1].length!==3)e('ch'+i+' q'+j+' 3 options');if(!q[3]||!q[3].tr||!q[3].tr.az||!q[3].tr.ru)e('ch'+i+' q'+j+' tr')});
const t=c.TASKS[k]&&c.TASKS[k][i];if(!t||t.length!==4)e('ch'+i+' tasks 4');else{const kinds=t.map(q=>q[3]&&q[3].t);if(kinds[0]!=='tf')e('ch'+i+' task0 tf');if(kinds[1]===kinds[2])e('ch'+i+' same kind');const want=(i===5||i===3)?'write':'poll';if(kinds[3]!==want)e('ch'+i+' task3 '+want);t.forEach((q,j)=>{if(!q[3].tr||!q[3].tr.az)e('ch'+i+' task'+j+' tr');if(q[3].t==='seq'&&q[1][0]!==q[3].items.join(' → '))e('ch'+i+' seq join');if(q[3].t==='dict'&&q[3].say!==q[1][0])e('ch'+i+' dict say');if(q[3].t==='gap'&&!/_{2,}/.test(q[0]))e('ch'+i+' gap ____')})}});
console.log(k,bad?bad+' problems':'OK')}"
```

Fix until every story prints OK, and `node --check` passes. Use double-quoted strings, escape properly. Everything must be consistent with the characters and facts given in the task.
