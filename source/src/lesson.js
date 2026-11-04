/* ===== Lessons & games: "← minaraverse" turns into golden dust and "Safiverse" takes its place; ✕ asks before leaving ===== */
Object.assign(UI.en, { exT: "Leave the lesson?", exP: "Your progress in this lesson will be lost.", exStay: "Keep going", exLeave: "Leave" });
Object.assign(UI.az, { exT: "Dərsdən çıxırsan?", exP: "Bu dərsdəki irəliləyiş itəcək.", exStay: "Davam et", exLeave: "Çıx" });
Object.assign(UI.ru, { exT: "Выйти из урока?", exP: "Прогресс этого урока пропадёт.", exStay: "Продолжить", exLeave: "Выйти" });
const lhBrand = () => `<span class="lh-brand">${brandHTML()}</span>`;
let LH_LAST = "";
function lhDust(h) {
  const br = h.querySelector(".lh-brand"); if (!br) return;
  const key = location.hash.split("?")[0]; if (key === LH_LAST) return; LH_LAST = key; /* once per lesson, not on every question */
  if (REDUCED) return;
  const r = br.getBoundingClientRect(); if (!r.width) return;
  const ghost = document.createElement("span"); ghost.className = "ap-back lh-ghost"; ghost.innerHTML = `<span>←</span><b>minara<i>verse</i></b>`;
  Object.assign(ghost.style, { left: r.left + "px", top: (r.top + r.height / 2) + "px" }); document.body.appendChild(ghost);
  br.style.opacity = "0";
  const g = ghost.getBoundingClientRect(), cols = ["#ffd86b", "#f5c242", "#fff1b8", "#e8a93a"];
  for (let k = 0; k < 42; k++) { const d = document.createElement("i"); d.className = "lh-dot"; const sz = 2 + Math.random() * 4;
    const x = g.left + Math.random() * g.width, y = g.top + Math.random() * g.height; Object.assign(d.style, { left: x + "px", top: y + "px", width: sz + "px", height: sz + "px", background: cols[k % 4] });
    document.body.appendChild(d); const dx = (Math.random() - .3) * 160, dy = -20 - Math.random() * 70, dur = 700 + Math.random() * 700;
    d.animate([{ transform: "translate(0,0) scale(1)", opacity: 1 }, { transform: `translate(${dx * .5}px,${dy * .6}px) scale(1.1)`, opacity: .9, offset: .4 }, { transform: `translate(${dx}px,${dy}px) scale(.2)`, opacity: 0 }],
      { duration: dur, delay: Math.random() * 220, easing: "cubic-bezier(.2,.7,.3,1)", fill: "forwards" }).onfinish = () => d.remove(); }
  ghost.animate([{ opacity: 1, filter: "blur(0)", transform: "translateY(-50%) scale(1)" }, { opacity: 0, filter: "blur(6px)", transform: "translateY(-50%) scale(1.08)" }], { duration: 560, easing: "ease-out", fill: "forwards" }).onfinish = () => ghost.remove();
  br.animate([{ opacity: 0, transform: "translateY(4px) scale(.96)", filter: "blur(4px)" }, { opacity: 1, transform: "none", filter: "blur(0)" }], { duration: 520, delay: 360, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" }).onfinish = () => { br.style.opacity = ""; };
}
new MutationObserver(() => { const h = document.querySelector(".ap-lh:not([data-fx])"); if (h) { h.dataset.fx = 1; requestAnimationFrame(() => lhDust(h)); } if (!document.querySelector(".ap-lh")) LH_LAST = ""; })
  .observe(document.documentElement, { childList: true, subtree: true });

/* ✕ in a lesson: confirm before leaving */
document.addEventListener("click", e => {
  const x = e.target.closest(".ap-lh .ap-x"); if (!x) return; e.preventDefault(); e.stopPropagation();
  if (document.querySelector(".ex-sheet")) return; const to = x.getAttribute("href") || "#app-learn";
  const sh = document.createElement("div"); sh.className = "inv-sheet ex-sheet";
  sh.innerHTML = `<div class="inv-card" role="dialog" aria-modal="true"><div class="ap-mascot">${mascot("🥺")}</div><h2>${L("exT")}</h2><p>${L("exP")}</p><button class="ap-cta" data-ex-stay>${L("exStay")}</button><button class="ex-leave" data-ex-go>${L("exLeave")}</button></div>`;
  document.body.appendChild(sh); setTimeout(() => sh.querySelector("[data-ex-stay]").focus(), 50);
  sh.onclick = ev => { if (ev.target === sh || ev.target.closest("[data-ex-stay]")) { sh.remove(); sfx("tap"); return; } if (ev.target.closest("[data-ex-go]")) { sh.remove(); sfx("back"); location.hash = to; } };
}, true);
