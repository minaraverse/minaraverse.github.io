/* ===== WILD ENGLISH — editorial species pages with real photos (Tana "Elephant" prompt) ===== */
let WILD_IDX = null;
const WILD_IMG = {
  elephant: { hero: "50% 45%", tc: "#F6EFE2", p1: "45% 45%", p2: "70% 40%", por: "50% 50%", vid: { por: "elephant-vid", p2: "elephant-vid" } },
  giraffe:  { hero: "50% 100%", tc: "#43282A", p1: "60% 45%", p2: "55% 30%", por: "50% 15%" },
  zebra:    { hero: "50% 100%", tc: "#2E2420", p1: "45% 45%", p2: "55% 45%", por: "50% 50%" },
  tiger:    { hero: "50% 30%", tc: "#3B2A22", p1: "40% 62%", p2: "20% 30%", por: "62% 30%", vid: { hero: "tiger-vid", por: "tiger-vid", p1: "tiger-vid" }, fit: true },
  panda:    { hero: "50% 60%", tc: "#F6EFE2", top: "5%", p1: "55% 35%", p2: "40% 60%", por: "50% 18%" },
  bear:     { hero: "50% 62%", tc: "#3B2A22", p1: "50% 40%", p2: "60% 40%", por: "50% 40%" },
  penguin:  { hero: "50% 50%", tc: "#2E3440", p1: "40% 50%", p2: "22% 55%", por: "44% 50%" }
};
const wimg = (id, k) => `img/${id}-${k}.jpg`;
/* photo or looping video for a slot */
const wmedia = (id, k, cls, pos, alt = "") => {
  const v = WILD_IMG[id].vid && WILD_IMG[id].vid[k];
  return v ? `<video class="${cls}" src="img/${v}.mp4" poster="img/${v.split("-")[0]}-vposter.jpg" autoplay muted loop playsinline preload="${k === "hero" ? "auto" : "metadata"}" style="object-position:${pos}" aria-label="${esc(alt)}"></video>`
           : `<img class="${cls}" src="${wimg(id, k)}" alt="${esc(alt)}" style="object-position:${pos}">`;
};
VIEWS.wild = root => {
  const S = STORIES.wild, U = S.units, N = U.length;
  if (quizOpenFor("wild") >= 0) WILD_IDX = quizOpenFor("wild");
  else if (WILD_IDX == null || !isOpen("wild", WILD_IDX)) WILD_IDX = nextIndex("wild");
  const i = WILD_IDX, u = U[i], sub = loc(u), C = WILD_IMG[u.id];
  let pillN = 0;
  const statement = u.statement.map(w => w === "/" ? "<br>" : w === "●"
    ? (() => { const k = ++pillN === 1 ? "p1" : "p2"; return `<span class="wd-pill-ph">${wmedia(u.id, k, "wd-pz", C[k])}</span>`; })()
    : `<span class="wd-w">${letters(w, "sc")}</span>`).join(" ");

  root.innerHTML = `<div class="wd">
  <section class="wd-hero">
    <div class="wd-stage ${C.fit ? "fit" : ""}">
      <div class="wd-blur" aria-hidden="true"><img class="wd-blur-m" src="${C.vid && C.vid.hero ? "img/" + u.id + "-vposter.jpg" : wimg(u.id, "hero")}" alt=""></div>
      ${wmedia(u.id, "hero", "wd-photo", C.hero, u.full)}
      <div class="wd-title" style="color:${C.tc};${C.top ? "top:" + C.top : ""}"><p class="wd-eb">${esc(u.sci.toUpperCase())}</p><h1 class="wd-h1">${letters(u.name.toUpperCase(), "hc")}</h1></div>
    </div>
    <div class="wd-melt"></div>
    <nav class="wd-nav" style="color:${C.tc}">
      <div class="wd-navl">${homeBtn("wd-homebtn")}<button type="button" class="wd-menu"><svg width="18" height="10" viewBox="0 0 18 10"><path d="M0 2h18M0 8h12" stroke="currentColor" stroke-width="1.5"/></svg><span>${L("animals")}</span></button></div>
      <a class="wd-brand" href="#" data-gohome><b>Minaraverse</b><span>Wild English</span></a>
      ${langPill("wd-lang")}
    </nav>
    <a class="wd-map" href="#wd-facts" data-jump="wd-facts"><i>●</i>${L("seeFacts")} <span>→</span></a>
  </section>

  <nav class="wd-strip" aria-label="${L("animals")}"><p class="wd-strip-k">${L("animals")} · ${U.filter((_, k) => isDone("wild", k)).length}/${N}</p><div class="wd-strip-row">${U.map((a, k) => { const op = isOpen("wild", k), dn = isDone("wild", k);
    return `<button type="button" class="wd-sa ${k === i ? "now" : ""} ${dn ? "done" : ""}" ${op ? `data-an="${k}"` : "disabled"}><span class="wd-sa-img" style="background-image:url(img/${a.id}-por.jpg)">${dn ? "<i>✓</i>" : op ? "" : "<i>🔒</i>"}</span><b>${esc(a.name)}</b></button>`; }).join("")}</div></nav>
  <section class="wd-st" id="wd-st">
    <p class="wd-k">${esc(u.full.toUpperCase())} · ${String(i + 1).padStart(2, "0")}/${N}${sub ? " · " + esc(sub.toUpperCase()) : ""}</p>
    <h2 class="wd-big">${statement}</h2>
    <div class="wd-emb" aria-hidden="true"><svg viewBox="0 0 66 66" width="66" height="66" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="33" cy="33" r="31"/><circle cx="33" cy="33" r="26"/><text x="33" y="43" text-anchor="middle" font-family="'Fraunces',Georgia,serif" font-size="28" fill="currentColor" stroke="none">${esc(u.name[0])}</text></svg></div>
  </section>

  <section class="wd-facts" id="wd-facts"><div class="wd-fgrid">
    <div class="wd-fl"><p class="wd-k">${esc(u.name.toUpperCase())}</p>
      <h2 class="wd-ft">${["QUICK", "FACTS", "ABOUT", u.name.toUpperCase()].map(w => `<span class="wd-w">${letters(w, "fc")}</span>`).join("<br>")}</h2>
      <button type="button" class="wd-badge" data-jump="wd-quiz" aria-label="${L("startQ")}"><svg viewBox="0 0 84 84" class="wd-ticks">${Array.from({ length: 48 }, (_, k) => `<line x1="42" y1="2" x2="42" y2="${k % 4 ? 8 : 11}" stroke="currentColor" stroke-width="1.2" transform="rotate(${k * 7.5} 42 42)"/>`).join("")}</svg><svg viewBox="0 0 84 84" class="wd-tri"><path d="M36 30 L56 42 L36 54Z" fill="currentColor"/></svg></button>
      <p class="wd-cap">6 ${L("questions").toUpperCase()}</p></div>
    <div class="wd-fm"><p class="wd-para rv">${esc(u.notes)} ${sayBtn(u.notes, "sm")}</p>${trBlock("wild", i)}
      <table class="wd-tbl rv"><tbody>${u.facts.map(([a, b]) => `<tr><th>${esc(a)}</th><td>${esc(b)}</td></tr>`).join("")}</tbody></table></div>
    <div class="wd-por"><div class="wd-por-in">${wmedia(u.id, "por", "wd-por-s", C.por, u.full)}</div></div>
  </div></section>

  <section class="wd-quiz" id="wd-quiz"><div class="wd-qwrap"><p class="wd-k">${L("fieldNotes")} · ${esc(u.full)}</p><h2 class="wd-qh">${L("startQ")}</h2><div class="wd-qz"></div></div></section>

  <footer class="wd-foot"><a href="${IG}" target="_blank" rel="noopener" class="wd-ig">@minaraverse ↗</a>${homeBtn("wd-homebtn2")}</footer>

  <div class="wd-drawer" hidden><div class="wd-dr-in"><button type="button" class="wd-dx" aria-label="${L("close")}">✕</button><p class="wd-k">${L("animals")}</p>
    <ol>${U.map((a, k) => { const o = isOpen("wild", k); return `<li><button type="button" data-an="${k}" ${o ? "" : "disabled"} class="${k === i ? "now" : ""}"><img src="${wimg(a.id, "p1")}" alt="" style="object-position:${WILD_IMG[a.id].p1}"><span>${String(k + 1).padStart(2, "0")}</span><b>${esc(a.full)}</b><em>${solved("wild", k) ? "✓ " + best("wild", k) + "/6" : o ? "" : "🔒"}</em></button></li>`; }).join("")}</ol></div></div>
  </div>`;

  const $ = s => root.querySelector(s);
  const E = "cubic-bezier(.2,.8,.2,1)", D = x => REDUCED ? 1 : x;
  $(".wd-photo").animate([{ transform: "scale(1.06)" }, { transform: "scale(1)" }], { duration: D(2200), easing: E, fill: "both" });
  [$(".wd-eb"), $(".wd-nav")].forEach(e => e.animate([{ transform: "translateY(-10px)", opacity: 0 }, { transform: "none", opacity: 1 }], { duration: D(900), delay: REDUCED ? 0 : 200, easing: E, fill: "backwards" }));
  riseLetters(root, ".hc", { stagger: 95, dur: 1100, from: "translateY(.18em)", blur: 10, delay: 250 });
  $(".wd-map").animate([{ transform: "translate(-50%,24px)", opacity: 0 }, { transform: "translate(-50%,0)", opacity: 1 }], { duration: D(900), delay: REDUCED ? 0 : 1050, easing: E, fill: "backwards" });

  onVisible($(".wd-st"), () => {
    riseLetters($(".wd-st"), ".sc", { stagger: 26, dur: 900, from: "translateY(.55em) rotate(4deg)" });
    root.querySelectorAll(".wd-pill-ph").forEach((pp, k) => { pp.animate([{ transform: "scale(0)" }, { transform: "scale(1.12)", offset: .7 }, { transform: "scale(1)" }], { duration: D(900), delay: REDUCED ? 0 : 300 + k * 260, easing: E, fill: "backwards" });
      pp.firstElementChild.animate([{ transform: "scale(1.5)" }, { transform: "scale(1)" }], { duration: D(1300), delay: REDUCED ? 0 : 300 + k * 260, easing: E, fill: "backwards" }); });
    $(".wd-emb").animate([{ transform: "rotate(-90deg) scale(.6)", opacity: 0 }, { transform: "none", opacity: 1 }], { duration: D(1200), delay: REDUCED ? 0 : 700, easing: E, fill: "backwards" });
  });
  onVisible($(".wd-facts"), () => {
    riseLetters($(".wd-facts"), ".fc", { stagger: 30, from: "translateY(.55em) rotate(4deg)" });
    root.querySelectorAll(".wd-fm .rv").forEach((r, k) => r.animate([{ transform: "translateY(22px)", opacity: 0 }, { transform: "none", opacity: 1 }], { duration: D(900), delay: REDUCED ? 0 : 200 + k * 160, easing: E, fill: "backwards" }));
    root.querySelectorAll(".wd-tbl tr").forEach((r, k) => r.animate([{ opacity: 0 }, { opacity: 1 }], { duration: D(600), delay: REDUCED ? 0 : 500 + k * 140, fill: "backwards" }));
    $(".wd-por-in").animate([{ clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0 0 0 0)" }], { duration: D(1200), easing: "cubic-bezier(.76,0,.18,1)", fill: "backwards" });
    $(".wd-por-s").animate([{ transform: "scale(1.25)" }, { transform: "scale(1)" }], { duration: D(1600), easing: E, fill: "backwards" });
  }, .2);

  let raf, y = -1;
  const tick = () => {
    const sy = scrollY;
    if (sy !== y) { y = sy; const vh = innerHeight, k = clamp(sy / (.6 * vh));
      if (!REDUCED) { $(".wd-stage").style.transform = `translateY(${sy * .32}px)`; $(".wd-photo").style.filter = `blur(${(k * 6).toFixed(2)}px)`; }
      const m = $(".wd-melt"); m.style.height = mix(12, 100, k) + "%"; m.style.opacity = mix(.85, 1, k);
      $(".wd-map").style.opacity = 1 - k * 1.6;
      const pr = $(".wd-por").getBoundingClientRect(), c = clamp((vh - pr.top) / (vh + pr.height)); if (!REDUCED) $(".wd-por-s").style.translate = `0 ${mix(-6, 6, c)}%`;
    }
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);

  Quiz($(".wd-qz"), { story: "wild", idx: i, cls: "qz-wild", nextLabel: i + 1 < N ? L("nextAnimal") + ": " + U[i + 1].full : "",
    onNext: () => { WILD_IDX = i + 1; Router.remount(); } });
  if (quizOpenFor("wild") === i) setTimeout(() => $("#wd-quiz").scrollIntoView(), 50);

  const drawer = $(".wd-drawer");
  root.addEventListener("click", e => {
    const j = e.target.closest("[data-jump]"); if (j) { e.preventDefault(); document.getElementById(j.dataset.jump).scrollIntoView({ behavior: REDUCED ? "auto" : "smooth" }); return; }
    if (e.target.closest(".wd-menu")) { drawer.hidden = false; drawer.firstElementChild.animate([{ transform: "translateX(-100%)" }, { transform: "none" }], { duration: D(500), easing: E }); }
    if (e.target.closest(".wd-dx") || e.target === drawer) drawer.hidden = true;
    const an = e.target.closest("[data-an]"); if (an) { ACTIVE = null; WILD_IDX = +an.dataset.an; Router.remount(); }
  });
  return { unmount() { cancelAnimationFrame(raf); } };
};
