/* ===== MYSTERY: The Secret of Icherisheher ===== */
Object.assign(UI.en, { myK: "Detective story · A2–B1", myP: "Baku, late evening. A famous carpet has disappeared from an old guesthouse in Icherisheher. Three guests, seven rooms, one night. Read the clues, answer the questions, and solve each riddle to open the next door.", myCase: "Case file", myOpen: "Open the case", myLocked: "Locked. Solve the riddle in the previous room.", myLight: "Move your torch to search the room", myUnlock: "The lock is open!", myRooms: "Rooms", myAll: "All rooms", mySuspects: "Suspects", myClosed: "Case closed" });
Object.assign(UI.az, { myK: "Detektiv hekayə · A2–B1", myP: "Bakı, gec axşam. İçərişəhərdəki köhnə qonaq evindən məşhur xalça yoxa çıxıb. Üç qonaq, yeddi otaq, bir gecə. İpuclarını oxu, suallara cavab ver və növbəti qapını açmaq üçün hər tapmacanı həll et.", myCase: "İş qovluğu", myOpen: "İşi aç", myLocked: "Bağlıdır. Əvvəlki otaqdakı tapmacanı həll et.", myLight: "Otağı axtarmaq üçün fənəri hərəkət etdir", myUnlock: "Kilid açıldı!", myRooms: "Otaqlar", myAll: "Bütün otaqlar", mySuspects: "Şübhəlilər", myClosed: "İş bağlandı" });
Object.assign(UI.ru, { myK: "Детектив · A2–B1", myP: "Баку, поздний вечер. Из старого гостевого дома в Ичеришехере пропал знаменитый ковёр. Три гостя, семь комнат, одна ночь. Читай улики, отвечай на вопросы и разгадывай загадки, чтобы открыть следующую дверь.", myCase: "Дело", myOpen: "Открыть дело", myLocked: "Закрыто. Разгадай загадку в предыдущей комнате.", myLight: "Води фонариком, чтобы обыскать комнату", myUnlock: "Замок открыт!", myRooms: "Комнаты", myAll: "Все комнаты", mySuspects: "Подозреваемые", myClosed: "Дело закрыто" });

/* clue words hidden in each room, revealed by the torch: [word, x%, y%] */
const MY_CLUES = [
  [["lantern", 22, 30], ["courtyard", 52, 78], ["balcony", 78, 22]],
  [["lamp", 30, 40], ["shelf", 75, 30], ["book", 55, 72]],
  [["samovar", 30, 45], ["footprints", 62, 82], ["tea glass", 70, 52]],
  [["seal", 45, 40], ["key", 70, 70], ["magnifying glass", 25, 70]],
  [["dust", 40, 80], ["box", 75, 60], ["lantern", 20, 35]],
  [["Maiden Tower", 40, 38], ["Flame Towers", 80, 22], ["camera", 18, 74]],
  [["arch", 30, 30], ["bench", 55, 78], ["carpet", 52, 64]]
];
const MY_CODE = ["217", "908", "364", "512", "730", "146", "777"];

/* hand-drawn night scenes for the rooms without photos */
const MYART = {
  defs: id => `<defs>
    <linearGradient id="${id}sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#070b1c"/><stop offset=".6" stop-color="#1a2140"/><stop offset="1" stop-color="#3a2a35"/></linearGradient>
    <linearGradient id="${id}stone" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8b6d4c"/><stop offset="1" stop-color="#4a3826"/></linearGradient>
    <linearGradient id="${id}stoneD" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5d4732"/><stop offset="1" stop-color="#2a1f15"/></linearGradient>
    <radialGradient id="${id}glow"><stop offset="0" stop-color="#ffcf7a" stop-opacity=".9"/><stop offset=".35" stop-color="#ff9f40" stop-opacity=".35"/><stop offset="1" stop-color="#ff9f40" stop-opacity="0"/></radialGradient>
    <radialGradient id="${id}moon"><stop offset="0" stop-color="#fffbe8"/><stop offset=".7" stop-color="#f3e4b8"/><stop offset="1" stop-color="#f3e4b8" stop-opacity="0"/></radialGradient>
    <pattern id="${id}brick" width="80" height="40" patternUnits="userSpaceOnUse"><path d="M0 0H80M0 20H80M0 40H80M40 0V20M0 20V40M80 20V40" stroke="#000" stroke-opacity=".18" stroke-width="2"/></pattern>
    <pattern id="${id}lat" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M0 12L12 0L24 12L12 24Z" fill="none" stroke="#f0b35a" stroke-opacity=".75" stroke-width="2.4"/></pattern>
    <filter id="${id}blur"><feGaussianBlur stdDeviation="6"/></filter></defs>`,
  stars: (n, h = 500) => Array.from({ length: n }, (_, k) => `<circle cx="${(k * 397) % 1600}" cy="${(k * 173) % h}" r="${k % 5 ? 1.4 : 2.6}" fill="#fff" opacity="${.35 + (k % 4) * .15}"/>`).join(""),
  arch: (x, y, w, h, fill) => `<path d="M${x} ${y + h}V${y + w * .5}Q${x} ${y} ${x + w / 2} ${y - w * .25}Q${x + w} ${y} ${x + w} ${y + w * .5}V${y + h}Z" fill="${fill}"/>`,
  lantern: (id, x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><circle r="120" fill="url(#${id}glow)"/><path d="M0 -70V-34" stroke="#2a1d10" stroke-width="3"/><path d="M-16 -34H16L22 -10L14 26H-14L-22 -10Z" fill="#ffd27e" stroke="#3a2812" stroke-width="4"/><path d="M-8 -34V26M8 -34V26" stroke="#3a2812" stroke-width="3"/><path d="M-12 26H12L0 40Z" fill="#3a2812"/></g>`,
  court() { const id = "mc";
    return `<svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" class="my-svg">${this.defs(id)}
    <rect width="1600" height="1000" fill="url(#${id}sky)"/>${this.stars(80, 300)}<circle cx="1320" cy="120" r="70" fill="url(#${id}moon)"/>
    <rect x="0" y="230" width="1600" height="600" fill="url(#${id}stone)"/><rect x="0" y="230" width="1600" height="600" fill="url(#${id}brick)"/>
    <rect x="0" y="222" width="1600" height="16" fill="#3a2a1a"/>
    ${[0, 1, 2, 3, 4].map(k => this.arch(70 + k * 300, 560, 220, 270, "#1a120c")).join("")}
    ${[0, 1, 2, 3, 4].map(k => `<path d="M${70 + k * 300} 830V${670}Q${70 + k * 300} 560 ${180 + k * 300} 505Q${290 + k * 300} 560 ${290 + k * 300} 670V830" fill="none" stroke="#a88560" stroke-width="10"/>`).join("")}
    <rect x="0" y="470" width="1600" height="26" fill="#5b3a1d"/><rect x="0" y="496" width="1600" height="10" fill="#2c1b0c"/>
    ${Array.from({ length: 40 }, (_, k) => `<rect x="${k * 40 + 6}" y="430" width="8" height="40" fill="#5b3a1d"/>`).join("")}<rect x="0" y="420" width="1600" height="12" fill="#6e4825"/>
    <g transform="translate(1080 250)"><rect width="380" height="170" fill="#2a1a0c"/><rect x="14" y="14" width="352" height="142" fill="url(#${id}lat)"/><rect x="14" y="14" width="352" height="142" fill="#ffb347" opacity=".18"/><rect width="380" height="170" fill="none" stroke="#6e4825" stroke-width="12"/></g>
    <g transform="translate(160 260)"><rect width="200" height="150" fill="#2a1a0c"/><rect x="12" y="12" width="176" height="126" fill="url(#${id}lat)"/><rect width="200" height="150" fill="none" stroke="#6e4825" stroke-width="10"/></g>
    <path d="M0 830H1600V1000H0Z" fill="#2b2017"/>${Array.from({ length: 60 }, (_, k) => `<ellipse cx="${(k * 131) % 1600}" cy="${850 + (k * 37) % 140}" rx="${30 + (k % 3) * 10}" ry="10" fill="#3d2e21" opacity=".8"/>`).join("")}
    <g transform="translate(800 820)"><ellipse rx="170" ry="34" fill="#1d150f"/><path d="M-150 0V-60H150V0Z" fill="#7e6347"/><ellipse cy="-60" rx="150" ry="28" fill="#9c7d5a"/><ellipse cy="-60" rx="120" ry="20" fill="#16233a"/><path d="M-4 -60V-150M4 -60V-150" stroke="#9c7d5a" stroke-width="8"/><circle cy="-160" r="18" fill="#9c7d5a"/></g>
    <g transform="translate(1340 840)"><path d="M0 0C-10 -120 10 -200 -20 -290" stroke="#2c1d10" stroke-width="22" fill="none"/>
      ${[[-80, -300, 110], [40, -330, 120], [-20, -380, 100], [-120, -240, 80], [70, -250, 80]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#1f3020"/>`).join("")}
      ${[[-60, -280], [30, -310], [-110, -230], [80, -240], [0, -370]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="13" fill="#b5332a"/>`).join("")}</g>
    ${this.lantern(id, 330, 610)}${this.lantern(id, 930, 610)}${this.lantern(id, 630, 360, .8)}
    <g transform="translate(470 830)" fill="#0c0806"><circle cy="-232" r="26"/><path d="M-40 0L-34 -150Q-34 -200 0 -205Q34 -200 34 -150L40 0Z"/><path d="M-30 -258H30L22 -246H-22Z"/></g>
    <rect width="1600" height="1000" fill="#0a0612" opacity=".12"/></svg>`; },
  roof() { const id = "mr";
    const city = Array.from({ length: 26 }, (_, k) => { const x = k * 64, h = 60 + ((k * 53) % 110); return `<rect x="${x}" y="${640 - h}" width="60" height="${h + 40}" fill="#16131f"/>${k % 3 ? `<rect x="${x + 14}" y="${650 - h}" width="10" height="14" fill="#ffcf7a" opacity=".7"/>` : ""}${k % 4 === 1 ? `<path d="M${x + 6} ${640 - h}Q${x + 30} ${600 - h} ${x + 54} ${640 - h}Z" fill="#16131f"/>` : ""}`; }).join("");
    return `<svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" class="my-svg">${this.defs(id)}
    <linearGradient id="mrT" x1="0" x2="1"><stop offset="0" stop-color="#7a5326"/><stop offset=".45" stop-color="#f5c46a"/><stop offset="1" stop-color="#8a5c27"/></linearGradient>
    <linearGradient id="mrF" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd57a"/><stop offset=".5" stop-color="#ff7a2a"/><stop offset="1" stop-color="#c2271c"/></linearGradient>
    <rect width="1600" height="1000" fill="url(#${id}sky)"/>${this.stars(120, 520)}<circle cx="260" cy="130" r="60" fill="url(#${id}moon)"/>
    <g transform="translate(1180 330)">${[[-120, 240, 1], [0, 300, 1.15], [120, 230, .95]].map(([x, h, s]) => `<g transform="translate(${x} 0)"><path d="M-46 ${h}C-56 ${h * .45} -30 ${h * .1} 0 -${h * .25}C30 ${h * .1} 56 ${h * .45} 46 ${h}Z" fill="url(#mrF)" opacity=".92"/><path d="M-46 ${h}C-56 ${h * .45} -30 ${h * .1} 0 -${h * .25}C30 ${h * .1} 56 ${h * .45} 46 ${h}Z" fill="url(#mrF)" filter="url(#${id}blur)" opacity=".7"/>${Array.from({ length: 8 }, (_, r) => `<path d="M-44 ${h - r * h / 8}H44" stroke="#2a0a05" stroke-opacity=".25" stroke-width="3"/>`).join("")}</g>`).join("")}</g>
    <path d="M900 600Q1100 520 1400 560T1600 540V700H900Z" fill="#14101c"/>
    ${city}
    <g transform="translate(640 160)"><ellipse cx="0" cy="510" rx="200" ry="40" fill="url(#${id}glow)" opacity=".7"/>
      <path d="M-130 520L-118 40Q0 10 118 40L130 520Z" fill="url(#mrT)"/>
      <path d="M118 120L210 150L222 520H124Z" fill="#9c6a2e"/><path d="M118 120L210 150L222 520H124Z" fill="#000" opacity=".25"/>
      ${Array.from({ length: 16 }, (_, r) => `<path d="M${-118 - r * .75} ${70 + r * 30}Q0 ${50 + r * 30} ${118 + r * .75} ${70 + r * 30}" stroke="#4a2f12" stroke-opacity=".35" stroke-width="3" fill="none"/>`).join("")}
      <path d="M-118 40Q0 10 118 40L114 64Q0 36 -114 64Z" fill="#5b3c18"/>
      ${[[-50, 160], [30, 280], [-20, 400]].map(([x, y]) => `<rect x="${x}" y="${y}" width="16" height="34" rx="8" fill="#2a170a"/>`).join("")}
      <circle cy="0" r="200" fill="url(#${id}glow)" opacity=".35"/></g>
    <path d="M0 700H1600V1000H0Z" fill="#251a14"/><path d="M0 700H1600V730H0Z" fill="#4a3424"/>
    ${Array.from({ length: 20 }, (_, k) => `<rect x="${k * 82}" y="660" width="54" height="44" fill="#3d2b1e"/><rect x="${k * 82}" y="656" width="54" height="8" fill="#5b4330"/>`).join("")}
    ${Array.from({ length: 30 }, (_, k) => `<path d="M${k * 56} 760L${k * 56 + 56} 760L${k * 56 + 40} 1000H${k * 56 - 16}Z" fill="#000" opacity="${k % 2 ? .08 : 0}"/>`).join("")}
    <g transform="translate(250 900)" fill="#0b0807"><path d="M0 0L-50 -190M0 0L50 -190M0 0V-200" stroke="#0b0807" stroke-width="8"/><rect x="-46" y="-250" width="92" height="56" rx="8"/><circle cx="46" cy="-222" r="20"/></g>
    <g transform="translate(400 905)" fill="#0b0807"><circle cy="-285" r="28"/><path d="M-26 -300Q0 -340 30 -300L36 -270H-30Z"/><path d="M-46 0L-38 -180Q-36 -250 0 -255Q36 -250 38 -180L46 0Z"/></g>
    ${this.lantern(id, 1450, 620, .6)}</svg>`; },
  caravan() { const id = "mk";
    return `<svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" class="my-svg">${this.defs(id)}
    <rect width="1600" height="1000" fill="url(#${id}sky)"/>${this.stars(90, 260)}<circle cx="800" cy="110" r="64" fill="url(#${id}moon)"/>
    <rect x="0" y="200" width="1600" height="620" fill="url(#${id}stoneD)"/><rect x="0" y="200" width="1600" height="620" fill="url(#${id}brick)"/>
    <rect x="0" y="190" width="1600" height="18" fill="#2a1d12"/>
    ${[0, 1, 2, 3, 4, 5, 6].map(k => this.arch(30 + k * 225, 300, 150, 150, "#0f0a07")).join("")}
    ${[0, 1, 2, 3, 4, 5, 6].map(k => `<path d="M${30 + k * 225} 450V375Q${30 + k * 225} 300 ${105 + k * 225} 262Q${180 + k * 225} 300 ${180 + k * 225} 375V450" fill="none" stroke="#9a7754" stroke-width="7"/>`).join("")}
    <rect x="0" y="470" width="1600" height="14" fill="#6b5036"/>
    ${[0, 1, 2, 3, 4].map(k => this.arch(40 + k * 320, 560, 240, 260, "#0c0806")).join("")}
    ${[0, 1, 2, 3, 4].map(k => `<path d="M${40 + k * 320} 820V680Q${40 + k * 320} 560 ${160 + k * 320} 500Q${280 + k * 320} 560 ${280 + k * 320} 680V820" fill="none" stroke="#a88560" stroke-width="10"/>`).join("")}
    <path d="M0 820H1600V1000H0Z" fill="#2a2018"/>${Array.from({ length: 16 }, (_, k) => `<path d="M${k * 100} 820L${k * 160 - 500} 1000" stroke="#000" stroke-opacity=".2" stroke-width="3"/>`).join("")}
    <g transform="translate(800 860)"><ellipse cy="40" rx="330" ry="30" fill="#000" opacity=".4"/>
      <rect x="-300" y="-40" width="600" height="40" fill="#5a3e24"/><rect x="-280" y="0" width="30" height="50" fill="#3a2716"/><rect x="250" y="0" width="30" height="50" fill="#3a2716"/>
      <g transform="translate(0 -60)"><rect x="-260" y="-70" width="520" height="80" rx="6" fill="#8e1f22"/><rect x="-246" y="-60" width="492" height="60" fill="none" stroke="#e7b552" stroke-width="5"/>
      ${Array.from({ length: 7 }, (_, s) => `<path transform="translate(${-198 + s * 66} -30) scale(.9)" d="M0 -18L5 -6L18 -6L8 3L12 16L0 8L-12 16L-8 3L-18 -6L-5 -6Z" fill="#f4d27a"/>`).join("")}
      ${Array.from({ length: 26 }, (_, f) => `<path d="M${-258 + f * 20} 10V24" stroke="#e7b552" stroke-width="3"/>`).join("")}</g></g>
    ${this.lantern(id, 330, 640)}${this.lantern(id, 1270, 640)}
    <g transform="translate(1260 830)" fill="#0b0807"><circle cy="-270" r="27"/><path d="M-30 -292H30L24 -282H-24Z"/><path d="M-44 0L-36 -170Q-34 -240 0 -244Q34 -240 36 -170L44 0Z"/><path d="M30 -190L90 -120" stroke="#0b0807" stroke-width="18" stroke-linecap="round"/></g>
    <g transform="translate(250 830) scale(1.1)" fill="#0b0807"><path d="M0 0V-110M30 0V-110M120 0V-110M150 0V-110" stroke="#0b0807" stroke-width="14"/><path d="M-10 -100Q0 -180 70 -170Q80 -230 120 -170Q170 -160 160 -100Z"/><path d="M150 -150Q190 -160 200 -230Q215 -260 240 -240L236 -220Q215 -220 205 -150Z"/></g>
    </svg>`; }
};
const myScene = u => u.img ? `<img class="my-img" src="${u.img}" alt="">` : MYART[u.scene]();

/* combination lock with three dials */
const lockHTML = (code, open) => `<div class="my-lock ${open ? "open" : ""}" aria-hidden="true"><svg class="my-shackle" viewBox="0 0 80 60"><path d="M14 60V30a26 26 0 0 1 52 0v30" fill="none" stroke="currentColor" stroke-width="10"/></svg>
  <div class="my-dials">${[...code].map((c, k) => `<span class="my-dial"><i style="--n:${open ? c : (k * 3 + 1) % 10}">${Array.from({ length: 10 }, (_, d) => `<b>${d}</b>`).join("")}</i></span>`).join("")}</div></div>`;

VIEWS.mystery = root => {
  const S = STORIES.mystery, m = location.hash.match(/mystery-(\d+)/), ri = m ? +m[1] - 1 : -1;
  const cleanup = [];
  /* torch: follows the pointer, wanders by itself on touch screens */
  const torch = (box, clues) => {
    let x = .5, y = .45, tx = x, ty = y, auto = true, raf, t0 = performance.now(), idle;
    const mv = e => { const r = box.getBoundingClientRect(); tx = (e.clientX - r.left) / r.width; ty = (e.clientY - r.top) / r.height; auto = false; clearTimeout(idle); idle = setTimeout(() => auto = true, 3500); };
    box.addEventListener("pointermove", mv); box.addEventListener("pointerdown", mv);
    const loop = now => { if (auto && !REDUCED) { const t = (now - t0) / 1000; tx = .5 + Math.sin(t * .5) * .34; ty = .5 + Math.sin(t * .83 + 1) * .26; }
      x += (tx - x) * .12; y += (ty - y) * .12; box.style.setProperty("--x", (x * 100).toFixed(2) + "%"); box.style.setProperty("--y", (y * 100).toFixed(2) + "%");
      clues.forEach(c => { const d = Math.hypot((c.x / 100 - x) * box.clientWidth, (c.y / 100 - y) * box.clientHeight); c.el.style.opacity = clamp(1.4 - d / 150); if (d < 90) c.el.classList.add("seen"); });
      raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    cleanup.push(() => { cancelAnimationFrame(raf); clearTimeout(idle); });
  };
  if (ri < 0 || !S.units[ri]) {
    root.innerHTML = `<div class="my">${topBar("my-topbar")}<main class="my-main">
      <section class="my-hero"><div class="my-torch" id="myht">${MYART.court()}<div class="my-dark"></div></div>
        <div class="my-hero-t"><p class="my-k">🔎 ${L("myK")}</p><h1 class="my-h">${letters(S.title)}</h1><p class="my-p">${L("myP")}</p>
        <a class="my-cta" href="#mystery-${nextIndex("mystery") + 1}">${doneCount("mystery") ? L("cont") : L("myOpen")} →</a></div>
        <div class="my-file"><span class="my-stamp">${doneCount("mystery") === 7 ? L("myClosed") : "CONFIDENTIAL"}</span><p class="my-fk">${L("myCase")} № 7</p><b>The Seven Stars</b>
          <p class="my-fs">${L("mySuspects")}:</p><ul><li><i>L</i>Leyla · student</li><li><i>K</i>Mr Kamal · antique dealer</li><li><i>N</i>Nina · tourist</li></ul></div></section>
      <h2 class="my-h2">${L("myRooms")}</h2>
      <ol class="my-rooms">${S.units.map((u, k) => { const open = isOpen("mystery", k), sv = solved("mystery", k);
        return `<li><a class="my-room ${open ? "" : "locked"} ${sv ? "solved" : ""}" href="${open ? `#mystery-${k + 1}` : "#mystery"}" ${open ? "" : `aria-disabled="true" title="${L("myLocked")}"`}>
          <span class="my-thumb">${myScene(u)}</span><span class="my-rn">${String(k + 1).padStart(2, "0")}</span>
          <span class="my-rt"><b>${esc(u.name)}</b><small>${esc(loc(u) || "")}</small></span>${lockHTML(MY_CODE[k], sv)}</a></li>`; }).join("")}</ol></main></div>`;
    riseLetters(root, ".my-h .ch", { stagger: 40, from: "translateY(.3em)", blur: 6 });
    torch(root.querySelector("#myht"), []);
    root.querySelector(".my-rooms").addEventListener("click", e => { const a = e.target.closest(".locked"); if (a) { e.preventDefault(); flash(a, "shake"); } });
    return { unmount() { cleanup.forEach(f => f()); } };
  }
  if (!isOpen("mystery", ri)) { Router.go("mystery"); return {}; }
  const u = S.units[ri], clues = MY_CLUES[ri];
  root.innerHTML = `<div class="my my-roomv">${topBar("my-topbar")}<main class="my-main">
    <a class="my-back" href="#mystery">← ${L("myAll")}</a>
    <section class="my-scene"><div class="my-torch" id="myrt">${myScene(u)}<div class="my-dark"></div>
      ${clues.map(([w, x, y]) => `<span class="my-clue" style="left:${x}%;top:${y}%">${esc(w)}${sayBtn(w, "sm")}</span>`).join("")}
      <p class="my-hint">🔦 ${L("myLight")}</p></div>
      <div class="my-sh"><p class="my-k">${S.unit} ${ri + 1}/7</p><h1 class="my-h1">${esc(u.name)}</h1><p class="my-sub">${esc(loc(u) || "")}</p>${lockHTML(MY_CODE[ri], solved("mystery", ri))}</div></section>
    <div class="my-grid"><article class="my-note"><p class="my-nk">${L("myCase")} · ${S.unit} ${ri + 1}</p><p class="my-nt">${esc(u.note)} ${sayBtn(u.note)}</p>${trBlock("mystery", ri)}</article>
    <div class="my-quiz"></div></div></main></div>`;
  const box = root.querySelector("#myrt");
  torch(box, [...box.querySelectorAll(".my-clue")].map((el, k) => ({ el, x: clues[k][1], y: clues[k][2] })));
  const lock = root.querySelector(".my-sh .my-lock");
  Quiz(root.querySelector(".my-quiz"), { story: "mystery", idx: ri, cls: "qz-my", nextLabel: S.units[ri + 1] ? S.units[ri + 1].name : "",
    onNext: () => Router.go(`mystery-${ri + 2}`),
    onDone: () => { if (solved("mystery", ri) && !lock.classList.contains("open")) {
      lock.querySelectorAll(".my-dial i").forEach((d, k) => d.style.setProperty("--n", MY_CODE[ri][k])); setTimeout(() => lock.classList.add("open"), REDUCED ? 0 : 900);
      const t = document.createElement("p"); t.className = "my-unlock"; t.textContent = "🔓 " + L("myUnlock"); lock.after(t);
      lock.scrollIntoView && innerWidth > 900 && lock.scrollIntoView({ behavior: REDUCED ? "auto" : "smooth", block: "center" }); } } });
  return { unmount() { cleanup.forEach(f => f()); } };
};
