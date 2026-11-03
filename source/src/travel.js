/* ===== WHERE NEXT? — Wandor travel hero ===== */
let TRAVEL_IDX = null;
VIEWS.travel = root => {
  const S = STORIES.travel, U = S.units, N = U.length;
  if (quizOpenFor("travel") >= 0) TRAVEL_IDX = quizOpenFor("travel");
  else if (TRAVEL_IDX == null || !isOpen("travel", TRAVEL_IDX)) TRAVEL_IDX = nextIndex("travel");
  const lead = { en: "Practise the English every traveller needs. Seven cities, six questions each. Your passport fills up as you go.", az: "Hər səyyaha lazım olan ingilis dilini məşq et. Yeddi şəhər, hər birində altı sual. Getdikcə pasportun dolur.", ru: "Тренируй английский, нужный каждому путешественнику. Семь городов, по шесть вопросов. Паспорт заполняется по пути." }[LANG];
  const cloud = (w, cls) => `<svg class="wn-cl ${cls}" viewBox="0 0 320 110" width="${w}"><path d="M20 96 C10 70 40 56 62 64 C64 36 104 24 126 46 C140 18 196 18 206 52 C226 40 262 50 262 74 C290 70 306 84 300 96 Z" fill="#f4efe6" stroke="#cfc6b6" stroke-width="2"/><path d="M60 80 c20 -6 40 -6 60 0 M150 74 c18 -6 40 -4 56 4" stroke="#d9d1c2" stroke-width="2" fill="none"/></svg>`;

  root.innerHTML = `<section class="wn">
    <div class="wn-bg" aria-hidden="true">${cloud(300, "c1")}${cloud(220, "c2")}${cloud(260, "c3")}
      <svg class="wn-birds" viewBox="0 0 120 40" width="120"><path d="M10 20 q8 -8 16 0 q8 -8 16 0 M60 10 q6 -6 12 0 q6 -6 12 0 M86 28 q5 -5 10 0 q5 -5 10 0" fill="none" stroke="#6d6458" stroke-width="2" stroke-linecap="round"/></svg>
      <div class="wn-band">${ART.route()}</div></div>
    <div class="wn-fade"></div>
    <div class="wn-wrap">
      <nav class="wn-nav"><div class="wn-left">${homeBtn("wn-home")}<a class="wn-logo" href="#">minaraverse</a></div>
        <div class="wn-mid"><button type="button" data-jump="route">${L("route")}</button><button type="button" data-jump="route">${L("passport")}</button><a href="${IG}" target="_blank" rel="noopener">Instagram</a></div>
        <div class="wn-right">${langPill("wn-lang")}<button type="button" class="wn-dark" data-act="plan">${L("plan")}</button></div></nav>
      <div class="wn-body">
        <h1 class="wn-h1">${letters("Where will you go next?", "wc")}</h1>
        <p class="wn-sub">${lead}</p>
        <div class="wn-card" id="wncard">
          <p class="wn-prompt" aria-live="polite"></p>
          <div class="wn-qz" hidden></div>
          <button type="button" class="wn-up" data-jump="route" aria-label="${L("passport")}"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#1a1a1a" stroke-width="1.8"><rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="11" r="3.5"/><path d="M8 17h8"/></svg><span class="wn-cnt"></span></button>
          <button type="button" class="wn-plan" data-act="plan">${L("plan")}</button>
        </div>
        <div class="wn-route" id="route"></div>
      </div>
    </div></section>`;

  const $ = s => root.querySelector(s), card = $("#wncard"), pr = $(".wn-prompt"), qz = $(".wn-qz");
  let typer, mode = "prompt";
  const skyline = () => {
    const n = doneCount("travel"), cur = TRAVEL_IDX, svg = root.querySelector(".rt-svg"); if (!svg) return;
    svg.querySelectorAll(".lm").forEach((g, i) => { g.classList.toggle("lit", solved("travel", i)); g.classList.toggle("now", i === cur); });
    svg.querySelectorAll(".rt-dot").forEach((g, i) => { g.classList.toggle("lit", solved("travel", i)); g.classList.toggle("now", i === cur); });
    const done = svg.querySelector(".rt-path.done"), L = done.getTotalLength(); done.style.strokeDasharray = L; done.style.strokeDashoffset = L * (1 - cur / 6);
    const pl = svg.querySelector(".rt-plane"), pt = done.getPointAtLength(L * cur / 6); pl.style.transform = `translate(${pt.x}px,${pt.y - 34}px)`;
    const band = root.querySelector(".wn-band"); if (band && innerWidth < 900) band.scrollLeft = Math.max(0, (170 + cur * 300) / 2200 * band.scrollWidth - band.clientWidth / 2);
  };
  const route = () => {
    setTimeout(skyline, 0);
    $(".wn-route").innerHTML = U.map((u, k) => { const o = isOpen("travel", k), dn = solved("travel", k);
      return `${k ? '<i class="wn-dash"></i>' : ""}<button type="button" class="wn-city ${k === TRAVEL_IDX ? "now" : ""} ${dn ? "stamp" : ""}" data-city="${k}" ${o ? "" : "disabled"}>
        <span class="wn-stamp">${dn ? "✓" : o ? String(k + 1) : "🔒"}</span><b>${esc(u.name)}</b>${loc(u) && loc(u) !== u.name ? `<small>${esc(loc(u))}</small>` : ""}</button>`; }).join("");
    $(".wn-cnt").textContent = `${doneCount("travel")}/${N}`;
  };
  const type = () => {
    clearTimeout(typer); const u = U[TRAVEL_IDX], txt = u.prompt;
    pr.innerHTML = `<span class="wn-k">${String(TRAVEL_IDX + 1).padStart(2, "0")} · ${esc(u.name)} · ${esc(u.scene)}</span><span class="wn-t"></span><i class="wn-caret"></i>`;
    const t = pr.querySelector(".wn-t"); let c = 0;
    const step = () => { c += 1 + (c % 3 === 0); t.textContent = txt.slice(0, c); if (c < txt.length) typer = setTimeout(step, 22); };
    if (REDUCED) t.textContent = txt; else step();
  };
  const flip = fn => { const h0 = card.offsetHeight; fn(); const h1 = card.offsetHeight; if (!REDUCED && h0 !== h1) card.animate([{ height: h0 + "px" }, { height: h1 + "px" }], { duration: 650, easing: "cubic-bezier(.2,.8,.2,1)" }); };
  const toQuiz = () => {
    if (!isOpen("travel", TRAVEL_IDX)) return;
    mode = "quiz"; clearTimeout(typer);
    flip(() => { card.classList.add("open"); pr.hidden = true; qz.hidden = false;
      Quiz(qz, { story: "travel", idx: TRAVEL_IDX, cls: "qz-glass", nextLabel: TRAVEL_IDX + 1 < N ? L("nextCity") + ": " + U[TRAVEL_IDX + 1].name : "",
        onDone: () => { route(); const st = root.querySelector(`[data-city="${TRAVEL_IDX}"] .wn-stamp`); st && st.animate([{ transform: "scale(2.4) rotate(-20deg)", opacity: 0 }, { transform: "scale(.9) rotate(4deg)", opacity: 1, offset: .7 }, { transform: "none" }], { duration: REDUCED ? 1 : 700, easing: "cubic-bezier(.2,.8,.2,1)" }); },
        onNext: () => { TRAVEL_IDX = Math.min(N - 1, TRAVEL_IDX + 1); toPrompt(); } }); });
    card.scrollIntoView({ behavior: REDUCED ? "auto" : "smooth", block: "nearest" });
  };
  const toPrompt = () => { mode = "prompt"; flip(() => { card.classList.remove("open"); qz.hidden = true; pr.hidden = false; }); route(); type(); };

  root.addEventListener("click", e => {
    const a = e.target.closest("[data-act],[data-city],[data-jump],.wn-logo,.wn-login"); if (!a) return;
    if (a.matches(".wn-logo,.wn-login")) { e.preventDefault(); Router.go(""); return; }
    if (a.dataset.act === "plan") { mode === "prompt" ? toQuiz() : card.scrollIntoView({ behavior: "smooth", block: "nearest" }); }
    if (a.dataset.city) { ACTIVE = null; TRAVEL_IDX = +a.dataset.city; toPrompt(); }
    if (a.dataset.jump) { const r = $(".wn-route"); r.scrollIntoView({ behavior: REDUCED ? "auto" : "smooth", block: "center" }); r.animate([{ transform: "scale(1)" }, { transform: "scale(1.03)" }, { transform: "scale(1)" }], { duration: 500 }); }
  });

  riseLetters(root, ".wc", { stagger: 22, dur: 900, from: "translateY(.4em)" });
  [$(".wn-sub"), card, $(".wn-route")].forEach((e, k) => e.animate([{ transform: "translateY(24px)", opacity: 0 }, { transform: "none", opacity: 1 }], { duration: REDUCED ? 1 : 900, delay: REDUCED ? 0 : 300 + k * 140, easing: "cubic-bezier(.2,.8,.2,1)", fill: "backwards" }));
  $(".wn-band").animate([{ transform: "translateY(30px) scale(1.04)" }, { transform: "none" }], { duration: REDUCED ? 1 : 1800, easing: "cubic-bezier(.2,.8,.2,1)", fill: "backwards" });
  route(); type();
  if (quizOpenFor("travel") >= 0) toQuiz();
  return { unmount() { clearTimeout(typer); } };
};
