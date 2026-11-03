/* ===== THE ENGLISH TAPE CLUB — VHS shelf (Leon Vasari prompt) ===== */
VIEWS.tapes = root => {
  const S = STORIES.tapes, U = S.units, N = U.length, COPIES = 3, TOT = N * COPIES;
  const GROUPS = [{ l: "All", az: "Hamısı", ru: "Все", set: [] }, { l: "Daily", az: "Gündəlik", ru: "Будни", set: [0, 1] }, { l: "Out & about", az: "Şəhərdə", ru: "В городе", set: [2, 3, 4] }, { l: "Free time", az: "Asudə vaxt", ru: "Досуг", set: [5] }, { l: "Mystery", az: "Sirr", ru: "Тайна", set: [6] }];
  const gName = g => LANG === "az" ? g.az : LANG === "ru" ? g.ru : g.l;
  const sub = u => `${u.az.toUpperCase()} / ${u.ru.toUpperCase()}`;
  const spine = (u, i) => `<div class="sp-in" style="background:${u.spine};color:${u.ink}">
      <span class="sp-ico"><svg viewBox="0 0 300 300">${ART.motif(u.motif, { ink: "#18181C", blue: "#2346A8", red: "#D9472B", cream: "#F1E8D4" })}</svg></span>
      <span class="sp-t" style="font-size:calc(var(--ws)*${u.name.length > 13 ? .4 : .5})">${esc(u.name.toUpperCase())}</span>
      <span class="sp-b">${isOpen("tapes", i) ? "MINARA" : "🔒"}</span><span class="sp-v">VHS</span></div>`;

  root.innerHTML = `<div class="tp">
  <header class="tp-bar">
    ${homeBtn("tp-home")}
    <div class="tp-logo"><b>minara<i>verse</i></b><span>The English Tape Club</span></div>
    <div class="tp-r">${langPill("tp-lang")}<span class="lbl tp-career">Vol. 01 · ${doneCount("tapes")}/${N} ${L("done")}</span></div>
  </header>
  <nav class="tp-tabs" aria-label="Tape groups"><i class="tp-ind"></i>${GROUPS.map((g, k) => `<button type="button" class="lbl" data-g="${k}">${esc(gName(g))}</button>`).join("")}</nav>
  <section class="tp-shelf" aria-label="Tape shelf"><div class="tp-stage">${Array.from({ length: TOT }, (_, v) => { const i = v % N, u = U[i];
    return `<div class="tape" data-v="${v}"><div class="face sp">${spine(u, i)}</div><div class="face cv">${ART.cover(u, v)}</div></div>`; }).join("")}</div></section>
  <button type="button" class="tp-play" aria-label="Open tape"><svg viewBox="0 0 12 12" width="12" height="12"><path d="M2 1 L11 6 L2 11Z" fill="currentColor"/></svg></button>
  <div class="tp-cap" aria-live="polite"><div class="m mt"></div><div class="m ms"></div><div class="m my"></div></div>
  <button type="button" class="tp-arrow l" aria-label="Previous tape"><svg width="18" height="10" viewBox="0 0 18 10"><path d="M5 1 L1 5 L5 9 M1 5 H17" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></button>
  <button type="button" class="tp-arrow r" aria-label="Next tape"><svg width="18" height="10" viewBox="0 0 18 10"><path d="M13 1 L17 5 L13 9 M17 5 H1" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></button>
  <footer class="tp-foot"><span class="lbl">© Minaraverse · English through stories</span><a class="lbl" href="${IG}" target="_blank" rel="noopener">Instagram ↗</a></footer>
  <div class="tp-detail" role="dialog" aria-modal="true" aria-label="Tape">
    <button type="button" class="box lbl tp-close">${L("close")} ✕</button>
    <div class="tp-logo tp-dlogo"><b>minara<i>verse</i></b><span>The English Tape Club</span></div>
    <div class="tp-dgrid">
      <div class="tp-dl"></div>
      <div class="tp-poster"><svg viewBox="0 0 474 900" aria-hidden="true"><defs>
        <filter id="tpink" x="-30%" y="-30%" width="160%" height="160%"><feTurbulence type="fractalNoise" baseFrequency=".011" numOctaves="3" seed="7"/><feDisplacementMap in="SourceGraphic" scale="120" xChannelSelector="R" yChannelSelector="G"/></filter>
        <mask id="tpmask" maskUnits="userSpaceOnUse" x="-200" y="-200" width="874" height="1300"><g filter="url(#tpink)" fill="#fff">${[[150, 330], [340, 600], [250, 120], [90, 760], [400, 250], [260, 860], [230, 470]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="0"/>`).join("")}</g></mask></defs>
        <g mask="url(#tpmask)" class="tp-pimg"></g></svg></div>
    </div>
  </div>
  <div class="tp-grain"></div></div>`;

  const $ = s => root.querySelector(s), tp = $(".tp"), stage = $(".tp-stage"), tapes = [...root.querySelectorAll(".tape")];
  const cap = { t: $(".mt"), s: $(".ms"), y: $(".my") }, play = $(".tp-play"), det = $(".tp-detail"), dl = $(".tp-dl");
  const tabs = [...root.querySelectorAll(".tp-tabs button")], ind = $(".tp-ind");
  const cur = Cursor("tapes");
  let H, ws, d, gap, W = innerWidth;
  const measure = () => {
    const p = document.createElement("div"); p.style.cssText = "position:absolute;visibility:hidden;height:var(--H)"; tp.appendChild(p);
    H = p.getBoundingClientRect().height; p.remove(); W = innerWidth;
    ws = H * 142 / 840; d = H * 474 / 900; gap = H * .03;
    stage.style.setProperty("--ws", ws + "px"); stage.style.setProperty("--d", d + "px"); stage.style.setProperty("--Hp", H + "px");
  };
  measure();

  const start = quizOpenFor("tapes") >= 0 ? quizOpenFor("tapes") : nextIndex("tapes");
  let s = start + N, T = s, hover = -1, active = -1, dragging = false, isOpenD = false;
  let tiltX = 0, tiltY = 0, onCover = false, last = performance.now(), raf;
  const lift = new Float32Array(TOT);
  const B = r => Math.abs(r) < 1 ? (r + Math.sin(Math.PI * r) / Math.PI) / 2 : Math.sign(r) * .5;
  const F = r => r * (ws + gap) + (d - ws + 1.6 * gap) * B(r);
  const relR = v => { let r = (v - s) % TOT; if (r > TOT / 2) r -= TOT; if (r < -TOT / 2) r += TOT; return r; };
  const shelfCY = () => { const r = $(".tp-shelf").getBoundingClientRect(); return r.top + r.height / 2; };

  const swapLine = (el, html, dir) => {
    const n = document.createElement("span"); n.innerHTML = html; el.appendChild(n);
    const kids = [...el.children];
    kids.forEach((k, j) => { if (j > 0) k.style.position = "absolute", k.style.left = 0, k.style.right = 0, k.style.top = 0; });
    if (REDUCED || kids.length === 1) { kids.slice(0, -1).forEach(k => k.remove()); n.style.position = ""; return; }
    n.animate([{ transform: `translateY(${dir * 105}%)` }, { transform: "none" }], { duration: 650, easing: "cubic-bezier(.2,.8,.2,1)", fill: "both" });
    kids.slice(0, -1).forEach(k => { if (k.dataset.leaving) return; k.dataset.leaving = 1;
      k.animate([{ transform: getComputedStyle(k).transform === "none" ? "none" : getComputedStyle(k).transform }, { transform: `translateY(${-dir * 105}%)` }], { duration: 650, easing: "cubic-bezier(.2,.8,.2,1)", fill: "both" }).onfinish = () => { k.remove(); const f = el.firstElementChild; if (f) f.style.position = ""; }; });
  };
  const setActive = (i, dir) => {
    active = i; const u = U[i];
    swapLine(cap.t, esc(u.name), dir);
    swapLine(cap.s, esc(sub(u)), dir);
    swapLine(cap.y, `${S.unit.toUpperCase()} ${String(i + 1).padStart(2, "0")} · ${u.lv}${isDone("tapes", i) ? " · ✓ " + best("tapes", i) + "/6" : isOpen("tapes", i) ? "" : " · 🔒 " + L("locked").toUpperCase()}`, dir);
    const g = GROUPS.findIndex(g => g.set.includes(i)); tabs.forEach((b, k) => b.classList.toggle("on", k === g));
    const b = tabs[g]; ind.style.width = b.offsetWidth + "px"; ind.style.transform = `translateX(${b.offsetLeft}px)`;
  };

  const frame = now => {
    const dt = Math.min(.05, (now - last) / 1000); last = now;
    const k = REDUCED ? 1 : dragging ? 18 : 5.2;
    s += (T - s) * (1 - Math.exp(-k * dt)); if (Math.abs(T - s) < 1e-4) s = T;
    if (Math.abs(s) > TOT * 4) { const sh = Math.round(s / TOT) * TOT; s -= sh; T -= sh; }
    const ai = ((Math.round(s) % N) + N) % N;
    if (ai !== active) setActive(ai, Math.sign(T - s) || 1);
    const cy = shelfCY(), mx = cur.x ?? W / 2, my = cur.y ?? cy;
    onCover = FINE && !isOpenD && Math.abs(mx - W / 2) < .55 * d && Math.abs(my - cy) < .55 * H && Math.abs(T - s) < .3;
    const tyT = onCover ? (mx - W / 2) / (.55 * d) * 9 : FINE ? (mx - W / 2) / W * 5 : 0, txT = onCover ? -(my - cy) / (H / 2) * 6 : 0;
    const fT = 1 - Math.exp(-7 * dt); tiltY += (tyT - tiltY) * fT; tiltX += (txT - tiltX) * fT;
    for (let v = 0; v < TOT; v++) {
      const el = tapes[v], r = relR(v), x = F(r);
      if (Math.abs(x) > W / 2 + 1.5 * d) { el.style.visibility = "hidden"; continue; }
      el.style.visibility = "visible";
      const lt = hover === v && Math.abs(r) > .5 ? 1 : 0; lift[v] += (lt - lift[v]) * (REDUCED ? 1 : 1 - Math.exp(-12 * dt));
      const o = smooth(Math.max(0, 1 - Math.abs(r)));
      el.style.transform = `translate3d(${x}px,${-o * .025 * H - lift[v] * .045 * H}px,${o * .2 * H}px) rotateZ(${-4.5 * o}deg) rotateX(${tiltX * o}deg) rotateY(${-90 * o + tiltY * o}deg)`;
      el.style.zIndex = Math.round(100 - Math.abs(r) * 4);
      el.firstElementChild.style.setProperty("--shade", (o * .55).toFixed(3));
      el.lastElementChild.style.setProperty("--shade", ((1 - o) * .5).toFixed(3));
      el.lastElementChild.style.visibility = o > .015 ? "visible" : "hidden";
    }
    const ps = isOpenD ? 0 : smooth(clamp(1 - Math.abs(T - s) * 3));
    play.style.left = (W / 2 - .5 * d - 6) + "px"; play.style.top = (cy + .36 * H) + "px"; play.style.transform = `translate(-50%,-50%) scale(${ps})`;
    if (!isOpenD) {
      const overBtn = document.elementFromPoint(mx, my); const isBtn = overBtn && overBtn.closest("button,a") && !overBtn.closest(".tape");
      if (onCover) cur.set("open", `${L("openTape").toUpperCase()}<br>${LANG === "en" ? "AÇ · ОТКРЫТЬ" : "OPEN"}`);
      else if (hover >= 0) cur.set("spine"); else if (isBtn) cur.set("btn"); else cur.set("");
    }
    raf = requestAnimationFrame(frame);
  };

  /* inputs */
  tapes.forEach(el => {
    const v = +el.dataset.v;
    el.addEventListener("pointerenter", () => hover = v);
    el.addEventListener("pointerleave", () => { if (hover === v) hover = -1; });
    el.addEventListener("click", () => { if (suppress) return; const r = relR(v); if (Math.abs(r) < .5) openDetail(); else T = Math.round(T + r); });
  });
  $(".tp-arrow.l").onclick = () => T = Math.round(T) - 1;
  $(".tp-arrow.r").onclick = () => T = Math.round(T) + 1;
  play.onclick = () => openDetail();
  tabs.forEach((b, k) => b.onclick = () => { const tgt = k === 0 ? 0 : GROUPS[k].set[0]; const curI = ((Math.round(T) % N) + N) % N; let dlt = tgt - curI; if (dlt > N / 2) dlt -= N; if (dlt < -N / 2) dlt += N; T = Math.round(T) + dlt; });
  let wt; const wheel = e => { if (isOpenD) return; e.preventDefault(); const dl = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY; T += dl / (ws + gap) * .5; clearTimeout(wt); wt = setTimeout(() => T = Math.round(T), 160); };
  $(".tp-shelf").addEventListener("wheel", wheel, { passive: false });
  let sx = 0, T0 = 0, down = false, suppress = false;
  const shelf = $(".tp-shelf");
  shelf.addEventListener("pointerdown", e => { down = true; sx = e.clientX; T0 = T; suppress = false; });
  const pm = e => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 5) { dragging = true; suppress = true; } if (dragging) T = T0 - dx / (ws + gap); };
  const pu = () => { if (!down) return; down = false; if (dragging) { dragging = false; T = Math.round(T); setTimeout(() => suppress = false, 0); } };
  addEventListener("pointermove", pm); addEventListener("pointerup", pu);
  const key = e => { if (e.key === "Escape" && isOpenD) closeDetail(); if (isOpenD) return; if (e.key === "ArrowLeft") T = Math.round(T) - 1; if (e.key === "ArrowRight") T = Math.round(T) + 1; if (e.key === "Enter" && (document.activeElement === document.body || !document.activeElement)) openDetail(); };
  addEventListener("keydown", key);
  const rs = () => { measure(); }; addEventListener("resize", rs);

  /* detail: paper sheet grows out of the cover */
  let inkRaf;
  const coverRect = () => { const v = ((Math.round(s) % TOT) + TOT) % TOT; return tapes[v].lastElementChild.getBoundingClientRect(); };
  const fillLeft = i => {
    const u = U[i], open = isOpen("tapes", i);
    dl.innerHTML = `<div class="m"><span class="lbl tp-sub">${esc(sub(u))}</span></div>
      <div class="m"><h2 class="tp-dt">${esc(u.name)}</h2></div>
      <div class="m"><span class="lbl tp-meta">${S.unit} ${String(i + 1).padStart(2, "0")} / ${u.lv} / 6 ${L("questions").toUpperCase()}${isDone("tapes", i) ? " / ✓ " + best("tapes", i) + "/6" : ""}</span></div>
      <div class="m"><p class="tp-syn">${esc(u.syn)} ${sayBtn(u.syn, "sm")}</p></div><div class="m">${trBlock("tapes", i)}</div>
      <div class="m"><p class="tp-cred">Written for you by Minara · @minaraverse</p></div>
      <div class="m">${open ? `<button type="button" class="box tp-watch">${L("playTape")} ▶</button>` : `<p class="tp-lock">🔒 ${L("lockedMsg")}</p>`}</div>`;
    const w = dl.querySelector(".tp-watch");
    if (w) w.onclick = () => startQuiz(i);
  };
  const rise = (sel, base = 620) => dl.querySelectorAll(sel).forEach((m, k) => m.firstElementChild && m.firstElementChild.animate([{ transform: "translateY(110%)" }, { transform: "none" }], { duration: REDUCED ? 1 : 900, delay: REDUCED ? 0 : base + k * 75, easing: "cubic-bezier(.2,.8,.2,1)", fill: "both" }));
  const startQuiz = i => {
    det.classList.add("quiz"); det.scrollTop = 0;
    dl.innerHTML = `<div class="m"><span class="lbl tp-sub">${esc(U[i].name)} · ${esc(sub(U[i]))}</span></div><div class="tp-qz"></div>`;
    Quiz(dl.querySelector(".tp-qz"), { story: "tapes", idx: i, cls: "qz-tape", nextLabel: i + 1 < N ? U[i + 1].name : "",
      onDone: () => { tapes.forEach((el, v) => el.querySelector(".sp").innerHTML = spine(U[v % N], v % N)); $(".tp-career").textContent = `Vol. 01 · ${doneCount("tapes")}/${N} ${L("done")}`; },
      onNext: () => { closeDetail(() => { T = Math.round(T) + 1; }); } });
    dl.querySelector(".tp-qz").animate([{ transform: "translateY(30px)", opacity: 0 }, { transform: "none", opacity: 1 }], { duration: REDUCED ? 1 : 700, easing: "cubic-bezier(.2,.8,.2,1)" });
  };
  function openDetail() {
    if (isOpenD) return; T = Math.round(T); s = T; isOpenD = true; cur.set("");
    const i = active; fillLeft(i);
    $(".tp-pimg").innerHTML = `<svg x="0" y="0" width="474" height="900" viewBox="0 0 474 900" preserveAspectRatio="none">${ART.cover(U[i], 900 + i).replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "")}</svg>`;
    const circles = [...root.querySelectorAll("#tpmask circle")]; circles.forEach(c => c.setAttribute("r", 0));
    const r = coverRect(), vw = innerWidth, vh = innerHeight;
    det.style.visibility = "visible"; det.style.transformOrigin = `${r.left + r.width / 2}px ${r.top + r.height / 2}px`;
    det.getAnimations().forEach(a => a.cancel());
    det.animate([{ clipPath: `inset(${r.top}px ${vw - r.right}px ${vh - r.bottom}px ${r.left}px round 3px)`, transform: "rotate(-4.5deg)" }, { clipPath: "inset(0 0 0 0 round 0)", transform: "rotate(0)" }],
      { duration: REDUCED ? 1 : 1050, easing: "cubic-bezier(.76,0,.18,1)", fill: "both" });
    rise(".m");
    const delays = [0, 120, 220, 300, 360, 420, 180], t0 = performance.now() + (REDUCED ? -5000 : 520);
    cancelAnimationFrame(inkRaf);
    const ink = now => { let doneAll = true; circles.forEach((c, k) => { const p = clamp((now - t0 - delays[k]) / 1250); c.setAttribute("r", (out3(p) * 720).toFixed(1)); if (p < 1) doneAll = false; });
      if (!doneAll && now - t0 < 2400) inkRaf = requestAnimationFrame(ink); };
    inkRaf = requestAnimationFrame(ink);
    setTimeout(() => { const b = det.querySelector(".tp-watch") || det.querySelector(".tp-close"); b && b.focus({ preventScroll: true }); }, REDUCED ? 0 : 900);
  }
  function closeDetail(after) {
    if (!isOpenD) return;
    const r = coverRect(), vw = innerWidth, vh = innerHeight;
    det.getAnimations().forEach(a => a.cancel());
    const a = det.animate([{ clipPath: "inset(0 0 0 0 round 0)", transform: "rotate(0)" }, { clipPath: `inset(${r.top}px ${vw - r.right}px ${vh - r.bottom}px ${r.left}px round 3px)`, transform: "rotate(-4.5deg)" }],
      { duration: REDUCED ? 1 : 850, easing: "cubic-bezier(.76,0,.18,1)", fill: "both" });
    a.onfinish = () => { det.classList.remove("quiz"); det.style.visibility = "hidden"; det.getAnimations().forEach(x => x.cancel()); isOpenD = false; after && after(); };
  }
  $(".tp-close").onclick = () => { ACTIVE = null; closeDetail(); };
  det.addEventListener("pointermove", () => cur.set(det.contains(document.activeElement) ? "btn" : ""));

  setActive(((Math.round(s) % N) + N) % N, 1);
  if (quizOpenFor("tapes") >= 0) setTimeout(() => { openDetail(); startQuiz(active); }, 60);
  raf = requestAnimationFrame(frame);
  return { unmount() { cancelAnimationFrame(raf); cancelAnimationFrame(inkRaf); cur.kill(); removeEventListener("pointermove", pm); removeEventListener("pointerup", pu); removeEventListener("keydown", key); removeEventListener("resize", rs); } };
};
