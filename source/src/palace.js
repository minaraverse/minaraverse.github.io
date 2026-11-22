/* ===== THE KHAN'S PALACE: I HAVE NO NAILS — a live scene: you are the palace (light follows the finger, she follows the light, lamp, door, glass, sounds) ===== */
(() => {
  if (!STORIES.palace) return;
  Object.assign(UI.en, { plHh: "You are the palace. Move the light: she follows it. Tap the lamp, the door, the glass.", plH0: "Move the light across the floor. Listen: she follows it.", plH1: "She is waiting at the door. Tap the door to let her in.", plH2: "Touch the glass, piece by piece.", plH3: "The guard is coming! Tap the lamp to warn her.", plH4: "Move the light and listen to her steps. One foot is slower.", plH5: "Tap the empty space in the window.", plSnd: "Sound on" });
  Object.assign(UI.az, { plHh: "Sən saraysan. İşığı hərəkət etdir: o, işığın ardınca gəlir. Çırağa, qapıya, şüşəyə toxun.", plH0: "İşığı döşəmədə gəzdir. Qulaq as: o, işığın ardınca gəlir.", plH1: "O, qapının yanında gözləyir. İçəri buraxmaq üçün qapıya toxun.", plH2: "Şüşəyə toxun, parça-parça.", plH3: "Gözətçi gəlir! Onu xəbərdar etmək üçün çırağa toxun.", plH4: "İşığı hərəkət etdir və addımlarına qulaq as. Bir ayağı daha yavaşdır.", plH5: "Pəncərədəki boş yerə toxun.", plSnd: "Səsi aç" });
  Object.assign(UI.ru, { plHh: "Ты дворец. Води светом: она идёт за ним. Коснись лампы, двери, стекла.", plH0: "Води светом по полу. Слушай: она идёт за ним.", plH1: "Она ждёт у двери. Коснись двери, чтобы впустить её.", plH2: "Коснись стекла, кусочек за кусочком.", plH3: "Идёт сторож! Коснись лампы, чтобы предупредить её.", plH4: "Води светом и слушай её шаги. Одна нога медленнее.", plH5: "Коснись пустого места в окне.", plSnd: "Включить звук" });
  const PAL = ["#e23a2e", "#2f6fe0", "#f2c230", "#2fae6b"], COLS = 12, ROWS = 6, EC = 11, ER = 5;
  const col = (c, r) => PAL[(Math.floor(Math.abs(c - 5.5)) + Math.floor(Math.abs(r - 2.5)) * 2 + (c + r) % 2) % 4];
  const cells = cls => Array.from({ length: ROWS }, (_, r) => Array.from({ length: COLS }, (_, c) => { const e = c === EC && r === ER;
    return `<rect class="${cls}${e ? " pl-empty" : ""}" data-c="${c}" data-r="${r}" x="${500 + c * 50}" y="${60 + r * 60}" width="50" height="60" fill="${e ? "#0a0d18" : col(c, r)}"/>`; }).join("")).join("");
  const floorCells = () => Array.from({ length: ROWS }, (_, r) => Array.from({ length: COLS }, (_, c) => { const e = c === EC && r === ER;
    return `<rect class="${e ? "pl-fe" : ""}" x="${(c + .1) / COLS}" y="${(r + .12) / ROWS}" width="${.8 / COLS}" height="${.76 / ROWS}" fill="${e ? "#000" : col(c, r)}" opacity="${e ? 0 : 1}"/>`; }).join("")).join("");
  const defs = id => `<defs>
    <linearGradient id="${id}w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a2244"/><stop offset="1" stop-color="#2b1d2e"/></linearGradient>
    <linearGradient id="${id}f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a2416"/><stop offset="1" stop-color="#150c08"/></linearGradient>
    <linearGradient id="${id}d" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7a3d1c"/><stop offset=".5" stop-color="#a85a28"/><stop offset="1" stop-color="#6b3418"/></linearGradient>
    <radialGradient id="${id}g"><stop offset="0" stop-color="#ffd98a" stop-opacity=".95"/><stop offset=".4" stop-color="#ffb04a" stop-opacity=".35"/><stop offset="1" stop-color="#ffb04a" stop-opacity="0"/></radialGradient>
    <pattern id="${id}lat" x="500" y="60" width="50" height="60" patternUnits="userSpaceOnUse"><path d="M25 0L50 30L25 60L0 30ZM0 0L50 60M50 0L0 60M0 0H50V60H0Z" fill="none" stroke="#4a2810" stroke-width="5"/></pattern>
    <pattern id="${id}mir" width="40" height="30" patternUnits="userSpaceOnUse"><path d="M0 15L20 0L40 15L20 30Z" fill="#9fb6d8" opacity=".55"/><path d="M0 15L20 0L40 15" fill="none" stroke="#e8f1ff" stroke-width="1.5" opacity=".7"/></pattern>
    <pattern id="${id}fl" width="80" height="60" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="7" fill="#f3ead8" opacity=".8"/><circle cx="60" cy="46" r="6" fill="#e0a13a" opacity=".8"/><path d="M20 27v14M60 52v8" stroke="#2fae6b" stroke-width="3" opacity=".7"/></pattern>
    <filter id="${id}b"><feGaussianBlur stdDeviation="7"/></filter><filter id="${id}b2"><feGaussianBlur stdDeviation="22"/></filter></defs>`;
  const hall = id => `<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" class="pl-svg" aria-hidden="true">${defs(id)}
    <rect width="1600" height="600" fill="url(#${id}w)"/>
    <rect x="0" y="436" width="1600" height="34" fill="url(#${id}mir)"/><rect x="0" y="470" width="1600" height="130" fill="#1f3f8a"/><rect x="0" y="470" width="1600" height="130" fill="url(#${id}fl)"/>
    ${[110, 1390].map(x => `<g transform="translate(${x} 90)"><path d="M-70 330V90Q-70 0 0 -40Q70 0 70 90V330Z" fill="#e9dcc0" opacity=".9"/><path d="M0 300V60M0 140q-40-30-44-70M0 190q40-30 44-70M0 240q-34-20-40-56" stroke="#2f7d55" stroke-width="5" fill="none"/>${[[-44, 66], [44, 116], [-40, 180], [0, 50]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="12" fill="#c9382c"/>`).join("")}<path d="M-70 330V90Q-70 0 0 -40Q70 0 70 90V330" fill="none" stroke="#c9953a" stroke-width="7"/></g>`).join("")}
    <g class="pl-win"><rect x="482" y="42" width="636" height="396" rx="6" fill="#3a1f0c"/><g class="pl-glow" filter="url(#${id}b2)" opacity=".5">${cells("pl-gc")}</g>
      <g class="pl-cells">${cells("pl-c")}</g><rect x="500" y="60" width="600" height="360" fill="url(#${id}lat)" pointer-events="none"/><rect x="482" y="42" width="636" height="396" rx="6" fill="none" stroke="#8a4d1f" stroke-width="10" pointer-events="none"/>
      <rect class="pl-pulse" x="1050" y="360" width="50" height="60" fill="none" stroke="#ffe9a8" stroke-width="5" opacity="0" pointer-events="none"/></g>
    <g class="pl-door" tabindex="0" role="button" aria-label="door"><rect x="240" y="238" width="180" height="362" fill="#2a1508"/><rect x="250" y="250" width="160" height="350" fill="#0c0706"/><rect x="250" y="250" width="160" height="350" fill="url(#${id}g)" opacity=".45"/>
      <g class="pl-leaf pl-ll"><rect x="250" y="250" width="80" height="350" fill="url(#${id}d)"/><rect x="262" y="270" width="56" height="120" fill="none" stroke="#f2c230" stroke-width="3"/><rect x="262" y="420" width="56" height="150" fill="none" stroke="#f2c230" stroke-width="3"/><circle cx="290" cy="330" r="14" fill="#c9382c"/><circle cx="290" cy="495" r="14" fill="#2f6fe0"/></g>
      <g class="pl-leaf pl-lr"><rect x="330" y="250" width="80" height="350" fill="url(#${id}d)"/><rect x="342" y="270" width="56" height="120" fill="none" stroke="#f2c230" stroke-width="3"/><rect x="342" y="420" width="56" height="150" fill="none" stroke="#f2c230" stroke-width="3"/><circle cx="370" cy="330" r="14" fill="#2f6fe0"/><circle cx="370" cy="495" r="14" fill="#c9382c"/></g></g>
    <g class="pl-sdoor"><rect x="1204" y="372" width="112" height="228" fill="#2a1508"/><rect x="1212" y="380" width="96" height="220" fill="#5a2f14"/><rect x="1224" y="394" width="72" height="190" fill="none" stroke="#c9953a" stroke-width="3"/></g>
    <path d="M0 600H1600V900H0Z" fill="url(#${id}f)"/>${Array.from({ length: 9 }, (_, k) => `<path d="M${k * 200} 600L${k * 400 - 800} 900" stroke="#000" stroke-opacity=".3" stroke-width="3"/>`).join("")}
    <g class="pl-fl" style="mix-blend-mode:screen" filter="url(#${id}b)"><g class="pl-flm" transform="matrix(600,0,0,270,500,612)">${floorCells()}</g></g>
    <path class="pl-red" d="M800 760L1260 610" stroke="#ff3b2e" stroke-width="16" stroke-linecap="round" filter="url(#${id}b)" opacity="0"/>
    <g class="pl-lamp" tabindex="0" role="button" aria-label="lamp"><path d="M800 0V150" stroke="#b08a3a" stroke-width="5"/><circle cx="800" cy="205" r="150" fill="url(#${id}g)" class="pl-lg"/><path d="M768 150H832L846 196L826 248H774L754 196Z" fill="#ffd27e" stroke="#6b4a16" stroke-width="5"/><path d="M786 150V248M814 150V248" stroke="#6b4a16" stroke-width="3"/><path d="M782 248H818L800 272Z" fill="#6b4a16"/><rect x="740" y="120" width="120" height="170" fill="transparent"/></g>
    <g class="pl-her"><ellipse cx="0" cy="792" rx="60" ry="12" fill="#000" opacity=".5"/><g class="pl-body"><path d="M-46 786L-36 620Q-34 566 0 560Q34 566 36 620L46 786Z" fill="#0b0a12" stroke="#5b5788" stroke-width="2.5"/><path d="M-30 574Q-40 520 0 508Q40 520 30 574Q0 590 -30 574Z" fill="#15131f" stroke="#5b5788" stroke-width="2.5"/><path d="M-22 600Q0 612 22 600" stroke="#5b5788" stroke-width="4" fill="none"/></g></g>
    ${Array.from({ length: 14 }, (_, k) => `<circle class="pl-dust" style="--d:${(k * .7) % 6}s;--t:${7 + k % 5}s" cx="${520 + (k * 97) % 600}" cy="${470 + (k * 53) % 300}" r="${1.6 + k % 3}" fill="#fff3c9"/>`).join("")}</svg>`;
  /* static cover (home card, story cards) */
  WART.palace = () => `<svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" class="gw-svg" aria-hidden="true"><defs><linearGradient id="plcw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#141a36"/><stop offset="1" stop-color="#2b1d2e"/></linearGradient><filter id="plcb"><feGaussianBlur stdDeviation="6"/></filter>
    <pattern id="plcl" x="300" y="40" width="50" height="60" patternUnits="userSpaceOnUse"><path d="M25 0L50 30L25 60L0 30ZM0 0L50 60M50 0L0 60M0 0H50V60H0Z" fill="none" stroke="#4a2810" stroke-width="5"/></pattern></defs>
    <rect width="1200" height="600" fill="url(#plcw)"/><rect x="286" y="26" width="628" height="328" rx="6" fill="#3a1f0c"/>
    ${Array.from({ length: 5 }, (_, r) => Array.from({ length: 12 }, (_, c) => `<rect x="${300 + c * 50}" y="${40 + r * 60}" width="50" height="60" fill="${c === 11 && r === 4 ? "#0a0d18" : col(c, r)}"/>`).join("")).join("")}<rect x="300" y="40" width="600" height="300" fill="url(#plcl)"/>
    <rect y="390" width="1200" height="210" fill="#1c110b"/><g filter="url(#plcb)" style="mix-blend-mode:screen" transform="matrix(600,0,-180,190,300,400)">${Array.from({ length: 5 }, (_, r) => Array.from({ length: 12 }, (_, c) => c === 11 && r === 4 ? "" : `<rect x="${(c + .1) / 12}" y="${(r + .12) / 5}" width="${.8 / 12}" height="${.76 / 5}" fill="${col(c, r)}"/>`).join("")).join("")}</g>
    <g transform="translate(250 0)"><ellipse cx="0" cy="560" rx="50" ry="10" fill="#000" opacity=".5"/><path d="M-40 556L-30 420Q-28 372 0 366Q28 372 30 420L40 556Z" fill="#07060c"/><path d="M-26 380Q-34 334 0 324Q34 334 26 380Q0 392 -26 380Z" fill="#100e18"/></g></svg>`;
  makeWorld("palace", "qz-hs");
  if (!WORLD_ORDER.includes("palace")) { const k = WORLD_ORDER.indexOf("mystery"); WORLD_ORDER.splice(k < 0 ? WORLD_ORDER.length : k + 1, 0, "palace"); }
  ["en", "az", "ru"].forEach(l => { UI[l].palaceD = DESCS.palace[l] || DESCS.palace.en; });
  if (typeof COURSE_EMOJI !== "undefined") COURSE_EMOJI.palace = "🏛";

  /* ---- tiny sound kit (made in the browser, no files) ---- */
  let AC = null;
  const ac = () => { try { if (typeof SAC !== "undefined" && SAC) AC = SAC; AC = AC || new (window.AudioContext || window.webkitAudioContext)(); if (AC.state === "suspended") AC.resume(); } catch (e) {} return AC; };
  const tone = (f, d, g = .12, type = "sine", f2 = null) => { const a = ac(); if (!a) return; const o = a.createOscillator(), v = a.createGain(), t = a.currentTime; o.type = type; o.frequency.setValueAtTime(f, t); if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + d);
    v.gain.setValueAtTime(0, t); v.gain.linearRampToValueAtTime(g, t + .012); v.gain.exponentialRampToValueAtTime(.0001, t + d); o.connect(v).connect(a.destination); o.start(t); o.stop(t + d + .05); };
  const noise = (d, g, fq) => { const a = ac(); if (!a) return; const n = Math.floor(a.sampleRate * d), b = a.createBuffer(1, n, a.sampleRate), ch = b.getChannelData(0); for (let i = 0; i < n; i++) ch[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 2);
    const s = a.createBufferSource(), fl = a.createBiquadFilter(), v = a.createGain(); fl.type = "lowpass"; fl.frequency.value = fq; v.gain.value = g; s.buffer = b; s.connect(fl).connect(v).connect(a.destination); s.start(); };
  const SND = { step: slow => { tone(slow ? 78 : 92, .16, .2, "sine", 46); noise(.07, .1, 900); }, creak: () => { tone(210, .9, .05, "sawtooth", 330); tone(140, .9, .04, "sawtooth", 205); },
    chime: () => [880, 1318, 1760].forEach((f, k) => setTimeout(() => tone(f, 1.2, .06), k * 90)), glass: (k = 0) => tone(660 + k * 55, .7, .07, "triangle"), click: () => { noise(.04, .25, 3000); tone(1200, .08, .06); },
    rise: () => [262, 330, 392, 523].forEach((f, k) => setTimeout(() => tone(f, 2.4, .07), k * 220)), no: () => tone(150, .2, .06, "triangle") };

  const SAYS = { door: "My door opens.", doorc: "My door closes.", lamp: "My lamp swings.", glass: "My glass feels a hand.", notyet: "Not yet. The story is not finished.", red: "Follow the red light.", fit: "It fits perfectly.", wait: "She is waiting at the door.", step: "I feel her steps." };
  function mount(host, ci) {
    const el = document.createElement("div"); el.className = "pl-scene pl-m" + ci; el.innerHTML = hall("plh") + `<div class="pl-dark"></div><div class="pl-sunl"></div><p class="pl-say" aria-live="polite"></p><p class="pl-hint">${esc(L(ci < 0 ? "plHh" : "plH" + ci))}</p>`;
    host.prepend(el);
    const q = s => el.querySelector(s), her = q(".pl-her"), flm = q(".pl-flm"), door = q(".pl-door"), lamp = q(".pl-lamp"), say = q(".pl-say"), red = q(".pl-red");
    let x = .5, y = .6, tx = x, ty = y, auto = true, idle, raf, hx = ci === 1 || ci === 0 ? 340 : 800, live = true, used = false, open = !(ci === 0 || ci === 1), hide = false, sun = false, stepT = 0, foot = 0, sayT, timers = [];
    const later = (f, ms) => timers.push(setTimeout(f, ms));
    const tell = k => { say.textContent = SAYS[k] || k; say.classList.add("on"); clearTimeout(sayT); sayT = setTimeout(() => say.classList.remove("on"), 2600); };
    const setDoor = (o, quiet) => { open = o; door.classList.toggle("open", o); if (!quiet) { SND.creak(); tell(o ? "door" : "doorc"); } };
    if (open) door.classList.add("open");
    const mv = e => { const r = el.getBoundingClientRect(); tx = clamp((e.clientX - r.left) / r.width); ty = clamp((e.clientY - r.top) / r.height); auto = false; used = true; clearTimeout(idle); idle = setTimeout(() => auto = true, 4000); };
    el.addEventListener("pointermove", mv); el.addEventListener("pointerdown", e => { ac(); mv(e); });
    const act = (node, f) => { node.addEventListener("click", f); node.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); f(e); } }); };
    act(door, () => setDoor(!open));
    act(lamp, () => { lamp.classList.remove("sw"); void lamp.getBoundingClientRect(); lamp.classList.add("sw"); SND.chime(); tell("lamp");
      if (ci === 3 && !hide) { red.setAttribute("d", `M${hx} 770L1260 612`); red.style.opacity = .9; later(() => tell("red"), 900); hide = true; later(() => { red.style.opacity = 0; }, 4200); later(() => { hide = false; }, 7000); } });
    q(".pl-cells").addEventListener("click", e => { const c = e.target.closest("rect"); if (!c) return;
      if (c.classList.contains("pl-empty")) { if (ci !== 5) { SND.no(); tell("notyet"); flash(q(".pl-win"), "shake"); return; }
        if (sun) return; sun = true; c.setAttribute("fill", "#e23a2e"); c.classList.remove("pl-empty"); const g = el.querySelector(`.pl-gc[data-c="${EC}"][data-r="${ER}"]`); if (g) g.setAttribute("fill", "#e23a2e");
        const fe = q(".pl-fe"); fe.setAttribute("fill", "#e23a2e"); fe.setAttribute("opacity", 1); SND.click(); tell("fit"); later(() => { el.classList.add("sun"); SND.rise(); }, 500); return; }
      c.classList.remove("lit"); void c.getBoundingClientRect(); c.classList.add("lit"); SND.glass(+c.dataset.c % 6); tell("glass"); });
    if (ci === 0) later(() => setDoor(true, !used), 1400);
    if (ci === 1) later(() => tell("wait"), 1200);
    const loop = now => { if (!live) return; const t = now / 1000;
      if (auto && !REDUCED) { tx = .5 + Math.sin(t * .45) * .3; ty = .62 + Math.sin(t * .8 + 1) * .2; }
      x += (tx - x) * .1; y += (ty - y) * .1; el.style.setProperty("--x", (x * 100).toFixed(2) + "%"); el.style.setProperty("--y", (y * 100).toFixed(2) + "%");
      const sk = (x - .5) * 520, fl = 1 + Math.sin(t * 2.3) * .06 + Math.sin(t * 7.1) * .03; flm.setAttribute("transform", `matrix(${(600 + Math.abs(sk) * .2).toFixed(1)},0,${sk.toFixed(1)},270,${(500 - Math.abs(sk) * .1).toFixed(1)},612)`); flm.style.opacity = (sun ? 1 : .9 * fl).toFixed(3);
      /* she follows the light, but only through an open door; when warned she hides behind the small door */
      let goal = hide ? 1262 : !open ? 330 : clamp(320 + x * 960, 330, 1270); if (sun) goal = 800;
      const d = goal - hx, sp = Math.sign(d) * Math.min(Math.abs(d), hide ? 3.4 : 2.1); hx += sp; const walking = Math.abs(d) > 3;
      her.setAttribute("transform", `translate(${hx.toFixed(1)} 0)`); her.classList.toggle("walk", walking); her.style.opacity = hide && Math.abs(d) < 40 ? 0 : 1;
      if (walking && used && now > stepT) { foot ^= 1; SND.step(foot); stepT = now + (foot ? 620 : 430); }
      raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { live = false; cancelAnimationFrame(raf); clearTimeout(idle); clearTimeout(sayT); timers.forEach(clearTimeout); };
  }
  const base = VIEWS.palace;
  VIEWS.palace = root => { const r = base(root) || {}, m = location.hash.match(/palace-(\d+)/), ci = m ? +m[1] - 1 : -1;
    const art = root.querySelector(".gw-art"), band = root.querySelector(".gw-band"), host = ci < 0 ? art : band; if (!host) return r;
    const old = host.querySelector(".gw-svg"); if (old) old.remove(); host.classList.add("pl-host"); const stop = mount(host, ci);
    return { unmount() { stop(); if (r.unmount) r.unmount(); } }; };
})();
