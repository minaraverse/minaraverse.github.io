/* ===== Lessons & games: "← minaraverse" turns into golden dust and "Safiverse" takes its place; ✕ asks before leaving ===== */
Object.assign(UI.en, { exT: "Leave the lesson?", exP: "Your progress in this lesson will be lost.", exStay: "Keep going", exLeave: "Leave" });
Object.assign(UI.az, { exT: "Dərsdən çıxırsan?", exP: "Bu dərsdəki irəliləyiş itəcək.", exStay: "Davam et", exLeave: "Çıx" });
Object.assign(UI.ru, { exT: "Выйти из урока?", exP: "Прогресс этого урока пропадёт.", exStay: "Продолжить", exLeave: "Выйти" });
const lhBrand = () => `<span class="lh-brand">${brandHTML()}</span>`;
let LH_LAST = "";
function lhDust(h) {
  const br = h.querySelector(".lh-brand"); if (!br) return;
  const key = location.hash.split("?")[0]; if (key === LH_LAST) return; /* once per lesson, not on every question */
  if (REDUCED || (typeof adultOn === "function" && adultOn())) { LH_LAST = key; return; }
  const r = br.getBoundingClientRect(); if (!r.width) { if ((h.__try = (h.__try || 0) + 1) < 20) setTimeout(() => lhDust(h), 50); return; } /* wait until the header is laid out */
  LH_LAST = key;
  /* 1) the old "← minaraverse" pill, letter by letter */
  const ghost = document.createElement("span"); ghost.className = "ap-back lh-ghost";
  const wrap = (t, cls = "") => [...t].map(c => `<span class="lh-l ${cls}">${c}</span>`).join("");
  ghost.innerHTML = `<span class="lh-arrow">${wrap("←")}</span><b>${wrap("minara")}<i>${wrap("verse")}</i></b>`;
  Object.assign(ghost.style, { left: r.left + "px", top: (r.top + r.height / 2) + "px" }); document.body.appendChild(ghost);
  br.style.opacity = "0";
  const cols = ["#ffe08a", "#f7c84a", "#fff3c4", "#e9b04a", "#ffd46b"], letters = [...ghost.querySelectorAll(".lh-l")], STEP = 140, START = 380;
  ghost.animate([{ borderColor: "rgba(255,255,255,.18)", background: "rgba(32,31,37,.85)" }, { borderColor: "rgba(255,216,107,.0)", background: "rgba(32,31,37,0)" }], { duration: 900, delay: 200, easing: "ease-in", fill: "forwards" });
  letters.forEach((el, k) => { const lr = el.getBoundingClientRect(), d0 = START + k * STEP;
    /* the letter glows gold, then thins away like sand */
    el.animate([{ color: getComputedStyle(el).color, opacity: 1, filter: "blur(0)", transform: "none" }, { color: "#ffd86b", opacity: 1, filter: "blur(0)", transform: "none", offset: .25 },
      { color: "#ffd86b", opacity: 0, filter: "blur(2px)", transform: "translate(6px,-3px)" }], { duration: 1100, delay: d0, easing: "ease-in", fill: "forwards" });
    for (let n = 0; n < 16; n++) { const dot = document.createElement("i"); dot.className = "lh-dot"; const sz = .8 + Math.random() * 1.6;
      Object.assign(dot.style, { left: (lr.left + Math.random() * lr.width) + "px", top: (lr.top + lr.height * (.15 + Math.random() * .75)) + "px", width: sz + "px", height: sz + "px", background: cols[(k + n) % cols.length], opacity: 0 });
      document.body.appendChild(dot);
      const dx = 60 + Math.random() * 150, dy = -18 - Math.random() * 60, sw = (Math.random() - .5) * 18, dur = 1900 + Math.random() * 1500;
      dot.animate([{ transform: "translate(0,0)", opacity: 0 }, { transform: `translate(${dx * .08}px,${dy * .05}px)`, opacity: 1, offset: .08 },
        { transform: `translate(${dx * .35}px,${dy * .3 + sw}px)`, opacity: .95, offset: .4 }, { transform: `translate(${dx * .7}px,${dy * .7 - sw}px)`, opacity: .6, offset: .75 },
        { transform: `translate(${dx}px,${dy}px) scale(.4)`, opacity: 0 }], { duration: dur, delay: d0 + 220 + Math.random() * 380, easing: "cubic-bezier(.25,.6,.35,1)", fill: "forwards" }).onfinish = () => dot.remove(); } });
  const blown = START + letters.length * STEP + 1100; setTimeout(() => ghost.remove(), blown + 200);
  /* 2) "Safiverse" slides in from the right, letter by letter */
  const sv = br.querySelector(".ap-brand"); if (!sv) { br.style.opacity = ""; return; }
  const split = node => { [...node.childNodes].forEach(c => { if (c.nodeType === 3) { const f = document.createDocumentFragment(); [...c.textContent].forEach(ch => { const s = document.createElement("span"); s.className = "lh-in"; s.textContent = ch; f.appendChild(s); }); c.replaceWith(f); } else split(c); }); };
  split(sv); const ins = [...sv.querySelectorAll(".lh-in")]; ins.forEach(s => { s.style.opacity = "0"; });
  br.style.opacity = "";
  const t0 = START + 4 * STEP + 500;
  ins.forEach((s, k) => s.animate([{ opacity: 0, transform: "translateX(26px)", filter: "blur(3px)" }, { opacity: 1, transform: "translateX(-2px)", filter: "blur(0)", offset: .8 }, { opacity: 1, transform: "none", filter: "blur(0)" }],
    { duration: 900, delay: t0 + k * 150, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" }).onfinish = () => { s.style.opacity = ""; });
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
