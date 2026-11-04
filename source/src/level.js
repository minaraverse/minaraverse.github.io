/* ===== "My level": learners choose A1–C2 themselves (onboarding + profile); the path starts there and questions match it ===== */
Object.assign(UI.en, { lvT: "What is your English level?", lvP: "Lessons and questions will match it. You can change it any time.", lvMine: "My level", lvChange: "Change", lvTest: "I don't know — take a short test", lvSet: "Level set", lvShort: "Level", lvPick: "Choose", lvLang: "Language" });
Object.assign(UI.az, { lvT: "İngilis dili səviyyən nədir?", lvP: "Dərslər və suallar ona uyğun olacaq. İstənilən vaxt dəyişə bilərsən.", lvMine: "Səviyyəm", lvChange: "Dəyiş", lvTest: "Bilmirəm — qısa testdən keçim", lvSet: "Səviyyə seçildi", lvShort: "Səviyyə", lvPick: "Seç", lvLang: "Dil" });
Object.assign(UI.ru, { lvT: "Какой у тебя уровень английского?", lvP: "Уроки и вопросы будут под него. Можно поменять в любое время.", lvMine: "Мой уровень", lvChange: "Изменить", lvTest: "Не знаю — пройти короткий тест", lvSet: "Уровень выбран", lvShort: "Уровень", lvPick: "Выбрать", lvLang: "Язык" });
const LV_LIST = [
  ["A1", "🌱", { en: "Beginner", az: "Başlanğıc", ru: "Начальный" }, { en: "I'm starting from zero", az: "Sıfırdan başlayıram", ru: "Начинаю с нуля" }],
  ["A2", "🌿", { en: "Elementary", az: "Elementar", ru: "Элементарный" }, { en: "I can make simple sentences", az: "Sadə cümlələr qururam", ru: "Строю простые фразы" }],
  ["B1", "🌳", { en: "Intermediate", az: "Orta", ru: "Средний" }, { en: "I can talk, with some mistakes", az: "Danışa bilirəm, səhvlərim var", ru: "Могу говорить, но с ошибками" }],
  ["B2", "🏔️", { en: "Upper-Intermediate", az: "Orta-yuxarı", ru: "Выше среднего" }, { en: "I speak freely on most topics", az: "Əksər mövzularda sərbəst danışıram", ru: "Свободно говорю на большинство тем" }],
  ["C1", "🚀", { en: "Advanced", az: "Qabaqcıl", ru: "Продвинутый" }, { en: "I use complex, natural English", az: "Mürəkkəb və təbii ingiliscə işlədirəm", ru: "Использую сложный, естественный английский" }],
  ["C2", "👑", { en: "Proficiency", az: "Peşəkar", ru: "Профессиональный" }, { en: "Near-native, formal and academic", az: "Doğma dilə yaxın, rəsmi və akademik", ru: "Почти как носитель, формально и академически" }]];
const lvT3 = o => o[LANG] || o.en;
function levelSheet(after) {
  if (document.querySelector(".lv-sheet")) return; const cur = myLevel();
  const sh = document.createElement("div"); sh.className = "inv-sheet lv-sheet";
  sh.innerHTML = `<div class="inv-card lv-card" role="dialog" aria-modal="true"><h2>${L("lvT")}</h2><p>${L("lvP")}</p><div class="lv-list">${LV_LIST.map(([k, e, n, d]) =>
    `<button class="lv-it ${cur === k ? "on" : ""}" data-lv="${k}" aria-pressed="${cur === k}"><span class="lv-e">${e}</span><span class="lv-tx"><b>${k} · ${lvT3(n)}</b><small>${lvT3(d)}</small></span>${cur === k ? "<i>✓</i>" : ""}</button>`).join("")}</div>
    <a class="lv-test" href="#level" data-lvtest>❓ ${L("lvTest")}</a></div>`;
  document.body.appendChild(sh);
  sh.onclick = e => { if (e.target === sh) { sh.remove(); if (after) after(); return; }
    if (e.target.closest("[data-lvtest]")) { sh.remove(); return; }
    const b = e.target.closest("[data-lv]"); if (!b) return; const old = lsGet("mv-level", null) || {};
    lsSet("mv-level", Object.assign({}, old, { lvl: b.dataset.lv, src: "pick", at: Date.now() })); sfx("unlock"); toast("🎯 " + L("lvSet") + ": " + b.dataset.lv, "gold"); sh.remove();
    if (typeof pushSync === "function") pushSync(); if (after) after(); else { Router.go("app-learn"); Router.remount(); } };
}
const levelItem = () => { const l = myLevel(), it = LV_LIST.find(x => x[0] === l);
  return `<button class="ap-item" data-lvpick><span>${it ? it[1] : "🎯"}</span><b>${L("lvMine")}: ${l ? l + " · " + lvT3(it ? it[2] : { en: "" }) : "—"}</b><small>${L("lvChange")}</small><i>›</i></button>`; };
/* level chip on the course card: its own button inside the card */
const levelChip = () => { const l = myLevel(); return `<span class="dr-lv ${l ? "" : "none"}" data-lvpick role="button" tabindex="0" aria-label="${L("lvMine")}: ${l || "—"}"><small>${L("lvShort")}</small><b>🎯 ${l || L("lvPick")} ▾</b></span>`; };
document.addEventListener("click", e => { if (!e.target.closest("[data-lvpick]")) return; e.preventDefault(); e.stopPropagation(); if (typeof sfx === "function") sfx("open"); levelSheet(); }, true);
