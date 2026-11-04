/* ===== League: teacher card on top (not ranked) + "Beat the teacher's target" weekly challenge ===== */
Object.assign(UI.en, { tcK: "Teacher", tcGoal: n => `Teacher's target this week: ${n} XP`, tcBeat: "Beat it and get a ⭐ badge!", tcDone: "⭐ You beat the teacher's target!", tcLeft: n => `${n} XP to go`, tcMe: "Your students see this card. Set the target in Admin.", tcGot: "⭐ You beat the teacher's target this week!", tcBadge: "Beat the teacher" });
Object.assign(UI.az, { tcK: "Müəllim", tcGoal: n => `Müəllimin bu həftəki hədəfi: ${n} XP`, tcBeat: "Onu keç və ⭐ nişan qazan!", tcDone: "⭐ Müəllimin hədəfini keçdin!", tcLeft: n => `${n} XP qalıb`, tcMe: "Bu kartı şagirdlərin görür. Hədəfi Admin bölməsində dəyiş.", tcGot: "⭐ Bu həftə müəllimin hədəfini keçdin!", tcBadge: "Müəllimi keçdi" });
Object.assign(UI.ru, { tcK: "Учитель", tcGoal: n => `Цель учителя на неделю: ${n} XP`, tcBeat: "Обгони её и получи значок ⭐!", tcDone: "⭐ Ты обогнал цель учителя!", tcLeft: n => `осталось ${n} XP`, tcMe: "Эту карточку видят ученики. Цель меняется в Админке.", tcGot: "⭐ На этой неделе ты обогнал цель учителя!", tcBadge: "Обогнал учителя" });
function teacherCard(d) {
  const t = d && d.teacher; if (!t) return "";
  const mine = typeof weekXpNow === "function" ? weekXpNow() : 0, pct = Math.min(100, Math.round(mine / t.target * 100)), done = mine >= t.target;
  return `<div class="ap-card tc-card ${done ? "done" : ""}"><span class="tc-photo"><img src="img/teacher.jpg" alt="${esc(t.name)}" loading="lazy" onerror="this.parentNode.outerHTML='<span class=&quot;lg-av big tc-av&quot;></span>'"></span><div class="tc-tx"><small>👩‍🏫 ${L("tcK")}</small><b>${esc(t.name)}</b>
    <p>🎯 ${esc(L("tcGoal")(t.target))}</p>${t.me ? `<p class="tc-sub">${L("tcMe")}</p>` : `<div class="tc-bar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><i style="width:${pct}%"></i></div>
    <p class="tc-sub">${done ? L("tcDone") : `⚡ ${mine} / ${t.target} · ${esc(L("tcLeft")(t.target - mine))} — ${L("tcBeat")}`}</p>`}</div></div>`;
}
function teacherAward(d) {
  const t = d && d.teacher; if (!t || t.me || typeof weekXpNow !== "function" || weekXpNow() < t.target) return;
  const b = lsGet("mv-badges", {}), k = "tch_" + (d.week || ""); if (b[k]) return; b[k] = 1; b.tch = (b.tch || 0) + 1; lsSet("mv-badges", b);
  sfx("win"); toast(L("tcGot"), "gold"); if (typeof pushSync === "function") pushSync();
}
