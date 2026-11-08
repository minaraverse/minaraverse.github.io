/* ===== Mistake Hunters as a ranked ladder: six ranks (A1…C2), three chained cases per rank, the last one is the rank exam ===== */
if (typeof ERR_MORE2 !== "undefined" && !STORIES.errors._more2) {
  STORIES.errors._more2 = true;
  ERR_MORE2.forEach(u => { STORIES.errors.units.push(u); TR.errors.push([]); TXT.errors.push(u.tr || { az: "", ru: "" }); });
}
const RANKS = [
  { lv: "A1", ic: "🔍", en: "Rookie Hunter", az: "Yeni ovçu", ru: "Новичок" },
  { lv: "A2", ic: "🐾", en: "Tracker", az: "İzçi", ru: "Следопыт" },
  { lv: "B1", ic: "🎯", en: "Spotter", az: "Sayıq göz", ru: "Наблюдатель" },
  { lv: "B2", ic: "🏹", en: "Sharpshooter", az: "Snayper", ru: "Снайпер" },
  { lv: "C1", ic: "⚔️", en: "Error Slayer", az: "Səhv qatili", ru: "Гроза ошибок" },
  { lv: "C2", ic: "👑", en: "Grammar Legend", az: "Qrammatika əfsanəsi", ru: "Легенда грамматики" }];
Object.assign(UI.en, { ldP: "Climb the ladder: each rank has several cases, and the last one is the rank exam. Solve a case to unlock the next one; finish a rank to open the next rank. Ranks at or below your tested level are already open.", ldYou: "Your rank", ldCases: "cases", ldExam: "Rank exam", ldLocked: "Locked", ldSolve: "Solve the previous case first", ldNextRank: "Finish the rank above to unlock", ldDone: "Rank complete", ldStart: "Start", ldPlayAgain: "Play again", ldCase: "Case" });
Object.assign(UI.az, { ldP: "Pillələrlə qalx: hər rütbədə bir neçə iş var, sonuncusu rütbə imtahanıdır. Bir işi həll et — növbətisi açılsın; rütbəni bitir — növbəti rütbə açılsın. Test səviyyənə qədər olan rütbələr artıq açıqdır.", ldYou: "Sənin rütbən", ldCases: "iş", ldExam: "Rütbə imtahanı", ldLocked: "Bağlıdır", ldSolve: "Əvvəl əvvəlki işi həll et", ldNextRank: "Açmaq üçün yuxarıdakı rütbəni bitir", ldDone: "Rütbə tamamlandı", ldStart: "Başla", ldPlayAgain: "Yenidən oyna", ldCase: "İş" });
Object.assign(UI.ru, { ldP: "Поднимайся по лестнице: в каждом ранге несколько дел, последнее — экзамен ранга. Реши дело — откроется следующее; закрой ранг — откроется следующий ранг. Ранги до твоего уровня по тесту уже открыты.", ldYou: "Твой ранг", ldCases: "дела", ldExam: "Экзамен ранга", ldLocked: "Закрыто", ldSolve: "Сначала реши предыдущее дело", ldNextRank: "Чтобы открыть, закрой ранг выше", ldDone: "Ранг пройден", ldStart: "Начать", ldPlayAgain: "Играть ещё", ldCase: "Дело" });
const rankCases = lv => STORIES.errors.units.map((u, k) => [u, k]).filter(([u]) => u.level === lv);
const rankDone = r => rankCases(RANKS[r].lv).every(([, k]) => isDone("errors", k));
const rankOpen = r => r === 0 || rankDone(r - 1) || LVLS.indexOf(myLevel()) >= r;
function caseOpen(k) { const u = STORIES.errors.units[k]; if (!u) return false; const r = RANKS.findIndex(x => x.lv === u.level); if (r < 0 || !rankOpen(r)) return false;
  const cs = rankCases(u.level), i = cs.findIndex(x => x[1] === k); return i === 0 || isDone("errors", cs[i - 1][1]); }
const myRank = () => { let r = 0; for (let i = 0; i < RANKS.length; i++) if (rankDone(i)) r = i + 1; return Math.min(r, RANKS.length - 1); };
function ladderHTML() {
  const S = STORIES.errors, total = S.units.length, done = S.units.filter((_, k) => isDone("errors", k)).length, mr = RANKS[myRank()], rn = r => r[LANG] || r.en;
  return `<div class="er er-ladder-v">${topBar()}<main class="er-main"><p class="er-k">🎯 ${L("examK")}</p><h1 class="er-h">${letters(S.title)}</h1><p class="er-p">${L("ldP")}</p>
    <div class="ld-me"><span class="ld-me-ic">${mr.ic}</span><div><small>${L("ldYou")}</small><b>${esc(rn(mr))}</b></div><span class="ld-me-n">${done}/${total}</span></div>
    <ol class="ld">${RANKS.map((r, ri) => { const cs = rankCases(r.lv), open = rankOpen(ri), fin = cs.length && rankDone(ri), solvedN = cs.filter(([, k]) => isDone("errors", k)).length;
      return `<li class="ld-rank ${open ? "open" : "locked"} ${fin ? "done" : ""}" style="--i:${ri}"><div class="ld-rh"><span class="ld-badge">${open ? r.ic : "🔒"}</span><div><b>${esc(rn(r))}</b><small>${r.lv} · ${cs.length} ${L("ldCases")}${open ? "" : " · " + L("ldNextRank")}</small></div><span class="ld-rst">${fin ? "✓ " + L("ldDone") : solvedN + "/" + cs.length}</span></div>
        <div class="ld-cases">${cs.map(([u, k], i) => { const o = caseOpen(k), d = isDone("errors", k), exam = i === cs.length - 1;
          return `<a class="ld-case ${o ? "open" : "locked"} ${d ? "done" : ""} ${exam ? "exam" : ""}" href="${o ? `#errors-${k + 1}` : "#errors"}" ${o ? "" : 'aria-disabled="true"'} title="${o ? "" : (open ? L("ldSolve") : L("ldNextRank"))}"><i>${d ? "✓" : exam ? "🏁" : i + 1}</i><span class="er-ic">${esc(u.icon)}</span><b>${esc(u.full || u.name)}</b><small>${d ? best("errors", k) + "/" + u.qs.length + " · " + L("ldPlayAgain") : o ? (exam ? L("ldExam") : L("ldStart")) + " →" : "🔒 " + L("ldLocked")}</small></a>${i < cs.length - 1 ? `<span class="ld-link ${d ? "on" : ""}"></span>` : ""}`; }).join("")}</div></li>`; }).join("")}</ol></main></div>`;
}
