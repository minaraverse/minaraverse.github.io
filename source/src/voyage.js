/* ===== THE PIRATE VOYAGE — Saltwake two-scene hero ===== */
VIEWS.voyage = root => {
  const S = STORIES.voyage, U = S.units, N = U.length;
  const LAY = {
    land: { w: 1600, h: 900, wave: { y0: 748, y1: 272, gap0: 1, gap1: .6 }, ship: { x0: 1130, w0: 690, x1: 1345, w1: 176 },
      palm: { x: -92, y: -112, w: 620 }, capt: { x: 380, y: 222, w: 250 }, chest: { x: 720, y: 600, w: 190 }, bushL: { x: -150, y: 740, w: 480 }, bushR: { x: 1370, y: 740, w: 300 }, isle: { x: -200, y: 560, w: 1400, h: 420 }, sh: { x: 395, y: 760, w: 220 } },
    port: { w: 800, h: 1500, wave: { y0: 1300, y1: 430, gap0: 1, gap1: .7 }, ship: { x0: 420, w0: 620, x1: 640, w1: 150 },
      palm: { x: -150, y: 200, w: 560 }, capt: { x: 470, y: 600, w: 240 }, chest: { x: 110, y: 880, w: 170 }, bushL: { x: -60, y: 1360, w: 480 }, bushR: { x: 600, y: 1370, w: 240 }, isle: { x: -150, y: 900, w: 1100, h: 700 }, sh: { x: 480, y: 1120, w: 220 } }
  };
  const ASP = { ship: 977 / 995, capt: 859 / 380, chest: 392 / 446, palm: 1284 / 910, bushL: 496 / 860, bushR: 405 / 499 };
  const BACK = [{ dy: -100, a: 20, k: 1.5, v: .9, ph: 0, fill: "var(--sea0)" }, { dy: -52, a: 23, k: 1.9, v: 1.15, ph: 1.7, fill: "var(--sea1)" }];
  const FRONT = [{ dy: 0, a: 25, k: 1.7, v: 1.3, ph: 3.1, fill: "var(--sea2)" }, { dy: 26, a: 18, k: 2.4, v: 1, ph: 4.4, span: [.06, .44] }, { dy: 48, a: 22, k: 1.45, v: 1.4, ph: .6, fill: "var(--sea3)" },
    { dy: 76, a: 15, k: 2.1, v: 1.2, ph: 5.1, span: [.52, .97] }, { dy: 104, a: 24, k: 1.8, v: 1.25, ph: 2.2, fill: "var(--sea4)" }, { dy: 130, a: 14, k: 2.7, v: 1, ph: 1.1, span: [0, .62] }, { dy: 158, a: 20, k: 1.6, v: 1.1, ph: 3.8 }];
  let cp = quizOpenFor("voyage") >= 0 ? quizOpenFor("voyage") : nextIndex("voyage");
  const portName = i => U[i].name, two = n => { const w = n.split(" "); return w.length > 1 ? w.slice(0, Math.ceil(w.length / 2)).join(" ") + "<br>" + w.slice(Math.ceil(w.length / 2)).join(" ") : n; };
  const navA = (t, attr) => `<a href="#" ${attr}>${t}${ART.anchor(2.6, false)}</a>`;

  root.innerHTML = `<main class="sw-frame" id="swf">
    ${homeBtn("sw-home")}
    <nav class="sw-nav">${navA("Voyage", 'data-go="0"')}${navA("Island", 'data-go="1"')}${navA(L("ports"), 'data-act="ports"')}</nav>
    <div id="sw-scene">
      <svg class="sky" id="sky" viewBox="0 0 1600 1500" preserveAspectRatio="none" aria-hidden="true">${Array.from({ length: 70 }, (_, k) => { const x = (k * 233) % 1600, y = (k * 97) % 620, r = .8 + (k % 4) * .45; return `<circle cx="${x}" cy="${y}" r="${r}" style="animation-delay:${(k % 9) * .45}s"/>`; }).join("")}</svg>
      <div class="spr" id="moon"><i></i></div>
      <div class="spr" id="cloudA">${ART.cloud}</div>
      <svg class="spr" id="gulls" viewBox="0 0 160 60" width="160" height="60" aria-hidden="true"><path d="M10 30 q10 -12 20 0 q10 -12 20 0 M70 14 q8 -9 16 0 q8 -9 16 0 M112 40 q7 -8 14 0 q7 -8 14 0" fill="none" stroke="#f3e6c8" stroke-width="2.4" stroke-linecap="round"/></svg>
      <svg class="w" id="wBack"></svg>
      <div class="t1" id="t1"><div class="eb" id="eb"></div><h1>Tales of<br>the open sea</h1><a href="#" class="pill" data-go="1">${L("setSail")}</a></div>
      <div class="spr" id="ship"><img src="img/p-ship.webp" alt="Pirate galleon" draggable="false"></div>
      <svg class="w" id="wFront"></svg>
      <div class="spr" id="isle"><svg viewBox="0 0 1400 420" preserveAspectRatio="none" width="100%" height="100%" aria-hidden="true"><defs>
        <linearGradient id="sand" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9b97f"/><stop offset=".35" stop-color="#b8925a"/><stop offset="1" stop-color="#6e5232"/></linearGradient>
        <linearGradient id="wet" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a6f4a"/><stop offset="1" stop-color="#5e4a30"/></linearGradient>
        <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="2"/><feColorMatrix values="0 0 0 0 .3  0 0 0 0 .22  0 0 0 0 .12  0 0 0 .35 0"/><feComposite in2="SourceGraphic" operator="in"/></filter></defs>
        <path class="isle-wet" d="M0 150 C220 70 520 40 820 70 C1020 92 1200 150 1330 240 C1380 280 1390 330 1360 420 L0 420Z" fill="url(#wet)"/>
        <path d="M0 140 C220 62 520 30 820 60 C1010 82 1180 136 1300 220 C1350 258 1360 310 1330 420 L0 420Z" fill="url(#sand)"/>
        <path d="M0 140 C220 62 520 30 820 60 C1010 82 1180 136 1300 220 C1350 258 1360 310 1330 420 L0 420Z" filter="url(#grain)" fill="#000"/>
        <path class="isle-foam" d="M0 156 C220 78 520 48 820 78 C1020 100 1196 156 1320 244 C1372 284 1384 330 1352 420" fill="none" stroke="#f6ead0" stroke-width="7" stroke-linecap="round" stroke-dasharray="40 18 6 18"/>
        <g fill="#6b5a44">${[[300, 150, 26], [360, 168, 14], [1040, 190, 30], [1090, 214, 16], [620, 120, 10]].map(([x, y, r]) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * .55}"/>`).join("")}</g>
        <g fill="#efe0bf" opacity=".7">${[[460, 110], [700, 96], [880, 140], [240, 190]].map(([x, y]) => `<path d="M${x} ${y} q6 -8 12 0 q-6 4 -12 0z"/>`).join("")}</g>
      </svg></div>
      <div class="spr" id="shadow"></div>
      <div class="spr" id="palm">${ART.palm()}</div><div class="spr" id="capt"><img src="img/p-pirate.webp" alt="Pirate captain" draggable="false"></div><div class="spr" id="chest">${ART.chest()}</div>
      <div class="spr" id="bushL">${ART.bush(860, 496, 7)}</div><div class="spr" id="bushR">${ART.bush(499, 405, 3)}</div>
      <div class="t2" id="t2"><h2 id="h2"></h2><p id="p2"></p><span class="btnw" id="btn2"><i class="tick a"></i><i class="tick b"></i><i class="tick c"></i><a href="#" class="pill" data-act="log">${L("readLog")}</a></span></div>
    </div>
    <div class="sw-chart" aria-label="Chart fragments"><span>Chart</span>${U.map((_, i) => `<i data-i="${i}"></i>`).join("")}</div>
    ${langPill("sw-lang")}
    <canvas id="shade" width="64" height="36"></canvas>
    <div class="sw-panel" hidden><div class="sw-card"><button type="button" class="sw-x" aria-label="${L("close")}">✕</button><div class="sw-body"></div></div></div>
    <div class="sw-ports" hidden><div class="sw-card sw-mapcard"><button type="button" class="sw-x" aria-label="${L("close")}">✕</button><h3 class="sw-ph">${L("ports")}</h3><div class="sw-map"></div><ol class="sw-plist"></ol></div></div>
  </main>`;

  const $ = s => root.querySelector(s), frame = $("#swf"), scene = $("#sw-scene");
  const el = { ship: $("#ship"), cloud: $("#cloudA"), t1: $("#t1"), t2: $("#t2"), h2: $("#h2"), p2: $("#p2"), btn: $("#btn2"), palm: $("#palm"), capt: $("#capt"), chest: $("#chest"), bushL: $("#bushL"), bushR: $("#bushR"), logo: $(".sw-home"), gulls: $("#gulls"), isle: $("#isle"), sh: $("#shadow") };
  const wB = $("#wBack"), wF = $("#wFront");
  const mk = (svg, arr) => arr.map(l => { const p = document.createElementNS("http://www.w3.org/2000/svg", "path"); p.setAttribute("fill", l.fill || "none"); p.setAttribute("stroke", "var(--wline)"); p.setAttribute("stroke-width", "2.6"); p.setAttribute("stroke-linecap", "round"); svg.appendChild(p); return p; });
  const pB = mk(wB, BACK), pF = mk(wF, FRONT);
  const cur = Cursor("voyage");
  let Wf, Hf, portrait, Lay, Sc, DW, DH, DX, DY;

  const texts = () => {
    const u = U[cp], sub = loc(u);
    $("#eb").textContent = `Port ${String(cp + 1).padStart(2, "0")} · ${u.name}`;
    el.h2.innerHTML = two(portName(cp));
    el.p2.innerHTML = `${esc(u.place)}, ${esc(u.year)}<br>${sub ? esc(sub) + "<br>" : ""}Captain's log · 6 ${L("questions")}`;
    root.querySelectorAll(".sw-chart i").forEach((c, i) => { c.classList.toggle("got", solved("voyage", i)); c.classList.toggle("now", i === cp); });
  };
  texts();

  const resize = () => {
    Wf = frame.clientWidth; Hf = frame.clientHeight; portrait = Hf > Wf; Lay = portrait ? LAY.port : LAY.land;
    document.documentElement.classList.toggle("portrait", portrait);
    Sc = Math.min(Wf / Lay.w, Hf / Lay.h); DW = Wf / Sc; DH = Hf / Sc; DX = (DW - Lay.w) / 2; DY = (DH - Lay.h) / 2;
    scene.style.width = Lay.w + "px"; scene.style.height = Lay.h + "px";
    scene.style.transform = `translate(${DX * Sc}px,${DY * Sc}px) scale(${Sc})`;
    [wB, wF].forEach(s => { s.setAttribute("width", Lay.w); s.setAttribute("height", Lay.h); });
    ["palm", "capt", "chest", "bushL", "bushR"].forEach(k => { const c = Lay[k]; Object.assign(el[k].style, { left: c.x + "px", top: c.y + "px", width: c.w + "px", height: c.w * ASP[k] + "px" }); });
    Object.assign(el.isle.style, { left: Lay.isle.x + "px", top: Lay.isle.y + "px", width: Lay.isle.w + "px", height: Lay.isle.h + "px" });
    Object.assign(el.sh.style, { left: Lay.sh.x + "px", top: Lay.sh.y + "px", width: Lay.sh.w + "px", height: "40px" });
  };
  resize(); addEventListener("resize", resize);

  /* palm shade canvas */
  const cv = $("#shade"), cx2 = cv.getContext("2d");
  cx2.scale(.5, .5); cx2.fillStyle = "#fff"; cx2.fillRect(0, 0, 128, 72); cx2.strokeStyle = "rgba(120,114,96,.9)"; cx2.lineCap = "round";
  [[-10, 26, 38, -8, 8], [-8, 46, 58, -2, 5], [-10, 62, 74, 6, 4], [14, 78, 96, 16, 4], [40, 82, 118, 22, 3], [78, 80, 140, 34, 5], [-12, 74, 22, 56, 6]].forEach(([x0, y0, x1, y1, w]) => {
    cx2.lineWidth = w; cx2.beginPath(); cx2.moveTo(x0, y0); cx2.quadraticCurveTo((x0 + x1) / 2 + 6, (y0 + y1) / 2 + 8, x1, y1); cx2.stroke(); });

  const seg = (v, a, b) => clamp((v - a) / (b - a)), io = k => k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2, back = k => 1 + 2.4 * Math.pow(k - 1, 3) + 1.4 * Math.pow(k - 1, 2);
  let p = 0, pFrom = 0, pTo = 0, pT0 = -1e9, t0 = performance.now(), raf;
  const go = to => { if (to === pTo) return; pFrom = p; pTo = to; pT0 = performance.now(); };
  const yAt = (l, x, t, pp) => { const W = Lay.wave; const base = mix(W.y0, W.y1, pp) + l.dy * mix(W.gap0, W.gap1, pp); const a = l.a * mix(1, .72, pp); const f = 2 * Math.PI / 1100 * l.k * (1 - .35 * pp);
    return base + a * Math.sin(f * x + t * l.v + l.ph) + a * .45 * Math.sin(f * 2.3 * x - t * l.v * .7 + l.ph * 1.7); };
  const build = (paths, layers, t) => {
    const x0 = -DX - 20, x1 = Lay.w + DX + 20, H = Lay.h + DY + 40;
    layers.forEach((l, k) => {
      const a = l.span ? mix(x0, x1, l.span[0]) : x0, b = l.span ? mix(x0, x1, l.span[1]) : x1;
      let d = ""; for (let x = a; x <= b + 21; x += 22) { const xx = Math.min(x, b); d += (d ? "L" : "M") + xx.toFixed(1) + " " + yAt(l, xx, t, p).toFixed(1); }
      if (l.fill) d += `L${b} ${H} L${a} ${H} Z`;
      paths[k].setAttribute("d", d);
    });
  };
  const tf = (e, x, y, r = 0, s = 1) => e.style.transform = `translate(${x}px,${y}px) rotate(${r}deg) scale(${s})`;
  const render = now => {
    const t = REDUCED ? 0 : (now - t0) / 1000;
    const k = seg(now, pT0, pT0 + (REDUCED ? 1 : 2100)); p = mix(pFrom, pTo, io(k));
    build(pB, BACK, t); build(pF, FRONT, t);
    const c = Lay.ship, sw = mix(c.w0, c.w1, p), sx = mix(c.x0, c.x1, p), sh = sw * ASP.ship, wy = yAt(FRONT[0], sx, t, p);
    const slope = (yAt(FRONT[0], sx + 90, t, p) - yAt(FRONT[0], sx - 90, t, p)) / 180;
    Object.assign(el.ship.style, { width: sw + "px", height: sh + "px", left: sx - sw / 2 + "px", top: wy + sw * .05 - sh + "px", transform: `rotate(${Math.atan(slope) * 57.3 * .75}deg)` });
    $("#moon").style.left = (portrait ? 560 : 640) + "px"; $("#moon").style.top = (portrait ? 150 : 110) + "px";
    const gx = ((t * 38) % (Lay.w + 500)) - 250; el.gulls.style.left = gx + "px"; el.gulls.style.top = (portrait ? 300 : 210) + Math.sin(t * .9) * 18 + "px"; el.gulls.style.opacity = 1 - seg(p, .2, .6);
    el.cloud.style.left = ((((Lay.w * .72 - t * 16) % (Lay.w + 700)) + Lay.w + 700) % (Lay.w + 700)) - 400 + "px"; el.cloud.style.top = (portrait ? 110 : 150) + "px"; el.cloud.style.opacity = 1 - seg(p, .3, .7);
    const intro = out3(seg(now, t0 + 200, t0 + 1100));
    el.t1.style.opacity = intro * (1 - seg(p, .62, .7)); el.t1.style.transform = `translateY(${(1 - intro) * 26 - p * 40}px)`; el.t1.style.pointerEvents = p > .1 ? "none" : "auto";
    el.logo.style.opacity = 1 - seg(p, .12, .3);
    const e = io(seg(p, .04, .92));
    tf(el.isle, mix(-Lay.isle.w - 300, 0, e), mix(160, 0, e));
    tf(el.sh, mix(-(Lay.sh.x + Lay.sh.w + DX + 160), 0, e), 0); el.sh.style.opacity = seg(p, .7, 1);
    tf(el.palm, mix(-Lay.palm.w - 80, 0, e), mix(-170, 0, e), Math.sin(t * .8) * .7);
    const off = -(Lay.capt.x + Lay.capt.w + DX + 160);
    tf(el.capt, mix(off, 0, e), 0, Math.sin(t * 1.1) * .5 * p); el.capt.style.visibility = e < .01 ? "hidden" : "visible";
    tf(el.chest, mix(-(Lay.chest.x + Lay.chest.w + DX + 160), 0, e), mix(120, 0, e)); el.chest.style.visibility = e < .01 ? "hidden" : "visible";
    const b = out3(seg(p, .5, 1)); tf(el.bushL, 0, mix(340, 0, b)); tf(el.bushR, 0, mix(300, 0, b));
    const hk = seg(p, .42, .82); el.h2.style.opacity = hk * hk; el.h2.style.transform = `translateY(${mix(70, 0, out3(hk))}px)`;
    const pk = seg(p, .76, .92); el.p2.style.opacity = pk; el.p2.style.transform = `translateY(${mix(16, 0, pk)}px)`;
    const bk = seg(p, .86, 1); el.btn.style.opacity = bk; el.btn.style.transform = `scale(${mix(.7, 1, back(bk))})`;
    el.t2.style.pointerEvents = p > .9 ? "auto" : "none";
    $("#shade").style.transform = `translate(${Math.sin(t * .35) * 2.2}%,${Math.cos(t * .27) * 1.6}%) rotate(${Math.sin(t * .22) * .8}deg)`;
    raf = requestAnimationFrame(render);
  };
  raf = requestAnimationFrame(render);
  const resume = quizOpenFor("voyage") >= 0;
  if (resume) { p = pFrom = pTo = 1; }

  /* panels */
  const panel = $(".sw-panel"), ports = $(".sw-ports");
  const openPanel = pn => { pn.hidden = false; pn.firstElementChild.animate([{ transform: "translateY(40px) scale(.96)", opacity: 0 }, { transform: "none", opacity: 1 }], { duration: REDUCED ? 1 : 600, easing: "cubic-bezier(.2,.8,.2,1)" }); };
  const closePanel = (pn, after) => { const a = pn.firstElementChild.animate([{ transform: "none", opacity: 1 }, { transform: "translateY(30px) scale(.97)", opacity: 0 }], { duration: REDUCED ? 1 : 380, easing: "cubic-bezier(.4,0,.2,1)" }); a.onfinish = () => { pn.hidden = true; after && after(); }; };
  const openLog = () => {
    const u = U[cp], sub = loc(u);
    panel.querySelector(".sw-body").innerHTML = `<p class="sw-eb">Port ${String(cp + 1).padStart(2, "0")} · ${esc(u.place)}, ${esc(u.year)}${sub ? " · " + esc(sub) : ""}</p><h3>${esc(u.name)}</h3>
      <p class="sw-log"><b>Captain's log.</b> ${esc(u.log)} ${sayBtn(u.log, "sm")}</p>${trBlock("voyage", cp)}<div class="sw-qz"></div>`;
    Quiz(panel.querySelector(".sw-qz"), { story: "voyage", idx: cp, cls: "qz-sea", nextLabel: cp + 1 < N ? L("nextPort") + ": " + U[cp + 1].name : "",
      onDone: () => texts(),
      onNext: () => closePanel(panel, () => { cp = Math.min(N - 1, cp + 1); go(0); setTimeout(texts, REDUCED ? 0 : 900); }) });
    openPanel(panel);
  };
  const openPorts = () => {
    ports.querySelector(".sw-map").innerHTML = voyageMap(cp);
    ports.querySelector(".sw-plist").innerHTML = U.map((u, i) => { const o = isOpen("voyage", i);
      return `<li><button type="button" data-port="${i}" ${o ? "" : "disabled"} class="${i === cp ? "now" : ""}"><span>${String(i + 1).padStart(2, "0")}</span><b>${esc(u.name)}</b><small>${esc(u.place)} · ${esc(u.year)}</small><em>${solved("voyage", i) ? "✓ " + best("voyage", i) + "/6" : o ? "" : "🔒"}</em></button></li>`; }).join("");
    openPanel(ports);
  };
  frame.addEventListener("click", e => {
    const a = e.target.closest("a[href='#'],[data-go],[data-act],[data-port],.sw-x"); if (!a) return;
    if (a.matches("[data-port]") && a.hasAttribute("aria-disabled")) return;
    if (a.matches("a")) e.preventDefault();
    if (a.dataset.go) go(+a.dataset.go);
    const act = a.dataset.act;
    if (act === "log") openLog();
    if (act === "ports") openPorts();
    if (act === "home") Router.go("");
    if (a.dataset.port) { cp = +a.dataset.port; texts(); closePanel(ports, () => go(1)); }
    if (a.classList.contains("sw-x")) closePanel(a.closest(".sw-panel,.sw-ports"));
  });
  let lock = 0;
  const wheel = e => { if (!panel.hidden || !ports.hidden) return; const now = performance.now(); if (now < lock) return; if (e.deltaY > 8) { go(1); lock = now + 1200; } else if (e.deltaY < -8) { go(0); lock = now + 1200; } };
  frame.addEventListener("wheel", wheel, { passive: true });
  const pd = () => cur.ping(); addEventListener("pointerdown", pd);
  const hov = e => { const a = e.target.closest && e.target.closest("a,button"); cur.set(a ? "link" : ""); };
  frame.addEventListener("pointerover", hov);
  if (resume) setTimeout(() => openLog(), 60);
  panel.querySelector(".sw-x").addEventListener("click", () => { ACTIVE = null; });
  const key = e => { if (e.key === "Escape") { if (!panel.hidden) closePanel(panel); if (!ports.hidden) closePanel(ports); } };
  addEventListener("keydown", key);
  return { unmount() { cancelAnimationFrame(raf); cur.kill(); removeEventListener("resize", resize); removeEventListener("pointerdown", pd); removeEventListener("keydown", key); document.documentElement.classList.remove("portrait"); } };
};

/* parchment chart of the voyage, drawn from real coordinates */
const VOY_LL = [[-76.8, 17.9], [-72.8, 20.0], [-77.3, 25.0], [-79.9, 32.8], [-75.9, 35.1], [49.9, -17.0], [-0.1, 51.5]];
const VOY_WAY = { 5: [[-40, 18], [-12, -12], [18, -38], [42, -28]], 6: [[42, -28], [18, -38], [6, -8], [-20, 14], [-16, 40], [-6, 48]] };
const LAND = [
  [[-100,60],[-62,60],[-55,51],[-66,45],[-70,42],[-74,40],[-76,37],[-76,35],[-81,31],[-80,26],[-82,26],[-83,29],[-90,30],[-97,27],[-97,21],[-90,21],[-87,21],[-88,16],[-84,15],[-83,10],[-78,8],[-100,8]],
  [[-78,8],[-72,12],[-62,10],[-51,4],[-50,0],[-35,-6],[-39,-14],[-41,-22],[-48,-26],[-54,-34],[-58,-35],[-100,-35],[-100,8]],
  [[-17,21],[-17,14],[-12,8],[-8,4],[0,5],[9,4],[10,-2],[13,-12],[12,-17],[15,-27],[18,-34],[26,-34],[33,-28],[35,-23],[40,-16],[40,-10],[39,-4],[42,0],[51,11],[43,12],[37,19],[33,28],[32,31],[20,32],[10,37],[-1,36],[-6,36],[-10,30],[-13,27]],
  [[44,-25],[47,-25],[50,-16],[49,-12],[44,-16]],
  [[-10,36],[-9,43],[-2,44],[-2,47],[-5,48],[2,51],[5,53],[9,54],[10,57],[6,58],[12,60],[30,60],[40,60],[40,45],[30,41],[26,40],[23,37],[20,40],[14,45],[13,42],[16,38],[11,42],[7,44],[3,43],[-1,37],[-6,36]],
  [[-5,50],[1.5,51],[1.5,53],[0,53.5],[-2,55.5],[-5,58.5],[-6,56],[-4.5,54.5],[-3,53.5],[-5,52],[-3,51.5]],
  [[-85,22],[-80,23],[-74,20],[-77,19.9]],[[-74.4,19.9],[-68.4,18.6],[-70,17.8],[-74.2,18.3]],[[-78.3,18.5],[-76.2,18.2],[-76.5,17.8],[-78,18]]
];
function voyageMap(cp) {
  const px = ([lo, la]) => [((lo + 100) / 170 * 1000).toFixed(1), ((62 - la) / 100 * 600).toFixed(1)];
  const poly = pts => pts.map(px).map(p => p.join(" ")).join(" L");
  let legs = "";
  for (let i = 1; i < VOY_LL.length; i++) {
    const pts = [VOY_LL[i - 1], ...(VOY_WAY[i] || []), VOY_LL[i]].map(px);
    legs += `<path class="leg ${solved("voyage", i - 1) ? "done" : ""}" d="M${pts.map(p => p.join(" ")).join(" L")}"/>`;
  }
  const pins = VOY_LL.map((ll, i) => { const [x, y] = px(ll), st = solved("voyage", i) ? "done" : i === cp ? "now" : isOpen("voyage", i) ? "open" : "lock";
    if (i >= 5) return `<g class="pin ${st}" transform="translate(${x} ${y})"><circle r="${i === cp ? 9 : 6.5}"/><text x="14" y="${i === 5 ? 5 : -12}" text-anchor="start">${i + 1}. ${esc(STORIES.voyage.units[i].name)}</text></g>`;
    const ly = 150 + i * 44, lx = 330;
    return `<g class="pin ${st}"><path class="lead" d="M${x} ${y} L${lx - 8} ${ly - 5}"/><g transform="translate(${x} ${y})"><circle r="${i === cp ? 9 : 6.5}"/></g><text x="${lx}" y="${ly}">${i + 1}. ${esc(STORIES.voyage.units[i].name)}</text></g>`; }).join("");
  const [sx, sy] = px(VOY_LL[cp]);
  return `<svg viewBox="0 0 1000 600" role="img" aria-label="Voyage chart">
    <defs><radialGradient id="pch" cx=".5" cy=".45" r=".75"><stop offset="0" stop-color="#f3e6c6"/><stop offset=".75" stop-color="#e2cc9c"/><stop offset="1" stop-color="#b9965f"/></radialGradient></defs>
    <rect width="1000" height="600" rx="18" fill="url(#pch)"/>
    <g stroke="#8a6a3c" stroke-width=".7" opacity=".35">${[0, 1, 2, 3, 4, 5, 6, 7, 8].map(k => `<path d="M${k * 125} 0 V600"/>`).join("")}${[0, 1, 2, 3, 4, 5].map(k => `<path d="M0 ${k * 120} H1000"/>`).join("")}</g>
    <g fill="#c7a46e" stroke="#7a5a30" stroke-width="1.6" stroke-linejoin="round">${LAND.map(p => `<path d="M${poly(p)}Z"/>`).join("")}</g>
    <g class="legs">${legs}</g>${pins}
    <g transform="translate(${sx} ${sy - 26})"><g class="mapship"><text font-size="26" text-anchor="middle">⛵</text></g></g>
    <g transform="translate(920 300)" stroke="#5b4120" fill="none" stroke-width="1.6"><circle r="44"/><circle r="36" stroke-dasharray="2 5"/><path d="M0 -50 L7 0 L0 50 L-7 0Z M-50 0 L0 -7 L50 0 L0 7Z" fill="#8a6a3c" fill-opacity=".5"/><text y="-56" text-anchor="middle" font-size="14" fill="#5b4120" stroke="none" font-family="IM Fell English,serif">N</text></g>
  </svg>`;
}
