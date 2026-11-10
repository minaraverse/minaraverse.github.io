/* ===== Little Explorers: living scenes =====
   Animated, tappable scene for every chapter (free, drawn in code) + live Aylin & Murad + Pixel the talking cat.
   Tap Pixel / the children / any object: it speaks English and shows the AZ / RU meaning.
   In chapters a small Pixel sits in the corner and reacts to every answer. Replaces the photo cover of "kids". */
(() => {
if (typeof WART === "undefined") return;
Object.assign(UI.en, { kwTap: "Tap anything: it speaks English!" });
Object.assign(UI.az, { kwTap: "Hər şeyə toxun: ingiliscə danışır!" });
Object.assign(UI.ru, { kwTap: "Нажми на что угодно: оно говорит по-английски!" });

const rnd = i => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
const at = (x, y, s, inner) => `<g transform="translate(${x} ${y})${s && s !== 1 ? ` scale(${s})` : ""}">${inner}</g>`;
/* tappable word: [en, az, ru] */
const T = (w, inner, extra = "") => `<g class="kw-t ${extra}" data-w="${w[0]}" data-az="${w[1]}" data-ru="${w[2]}">${inner}</g>`;
const W = {
  sun: ["the sun", "günəş", "солнце"], cloud: ["a cloud", "bulud", "облако"], flower: ["a flower", "çiçək", "цветок"], tree: ["a tree", "ağac", "дерево"],
  butterfly: ["a butterfly", "kəpənək", "бабочка"], grass: ["grass", "ot", "трава"], house: ["a house", "ev", "дом"], door: ["a door", "qapı", "дверь"],
  window: ["a window", "pəncərə", "окно"], ball: ["a red ball", "qırmızı top", "красный мяч"], pink: ["a small pink ball", "kiçik çəhrayı top", "маленький розовый мяч"],
  car: ["a yellow car", "sarı maşın", "жёлтая машинка"], robot: ["a blue robot", "mavi robot", "синий робот"], kite: ["a green kite", "yaşıl uçurtma", "зелёный воздушный змей"],
  teddyB: ["a brown teddy bear", "qəhvəyi ayıcıq", "коричневый мишка"], teddyW: ["a white teddy bear", "ağ ayıcıq", "белый мишка"], box: ["a toy box", "oyuncaq qutusu", "коробка с игрушками"],
  elephant: ["an elephant", "fil", "слон"], giraffe: ["a giraffe", "zürafə", "жираф"], monkey: ["a monkey", "meymun", "обезьяна"], lion: ["a lion", "şir", "лев"],
  apples: ["apples", "alma", "яблоки"], bananas: ["bananas", "banan", "бананы"], oranges: ["oranges", "portağal", "апельсины"], melon: ["a watermelon", "qarpız", "арбуз"],
  fish: ["fish", "balıq", "рыба"], price: ["two manats a kilo", "kilosu iki manat", "два маната за килограмм"], board: ["a board", "lövhə", "доска"],
  clock: ["a clock", "saat", "часы"], desk: ["a desk", "masa", "парта"], pencil: ["a pencil", "karandaş", "карандаш"], ruler: ["a ruler", "xətkeş", "линейка"],
  rubber: ["a rubber", "pozan", "ластик"], book: ["a book", "kitab", "книга"], rain: ["rain", "yağış", "дождь"], swing: ["a swing", "yelləncək", "качели"],
  umbrella: ["an umbrella", "çətir", "зонт"], puddle: ["a puddle", "gölməçə", "лужа"], wind: ["wind", "külək", "ветер"], cake: ["a chocolate cake", "şokoladlı tort", "шоколадный торт"],
  candles: ["nine candles", "doqquz şam", "девять свечей"], balloon: ["a balloon", "şar", "воздушный шарик"], present: ["a present", "hədiyyə", "подарок"], juice: ["juice", "şirə", "сок"]
};

/* ---------- shared pieces ---------- */
const DEFS = `<defs>
  <radialGradient id="kwFur" cx=".38" cy=".3" r=".8"><stop offset="0" stop-color="#585e69"/><stop offset=".6" stop-color="#363a42"/><stop offset="1" stop-color="#25282e"/></radialGradient>
  <radialGradient id="kwSun" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#fff3a8"/><stop offset=".55" stop-color="#ffd34d"/><stop offset="1" stop-color="#ffb43b"/></radialGradient>
  <radialGradient id="kwGlow" r=".5"><stop offset="0" stop-color="#ffe9a0" stop-opacity=".75"/><stop offset="1" stop-color="#ffe9a0" stop-opacity="0"/></radialGradient>
  <linearGradient id="kwHill1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#55b37d"/><stop offset="1" stop-color="#3a8f62"/></linearGradient>
  <linearGradient id="kwHill2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a8f62"/><stop offset="1" stop-color="#236644"/></linearGradient>
  <linearGradient id="kwWood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a7713f"/><stop offset="1" stop-color="#7a4f2a"/></linearGradient>
</defs>`;
const sky = (a, b) => `<linearGradient id="kwS${a.slice(1)}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient><rect width="1200" height="600" fill="url(#kwS${a.slice(1)})"/>`;
const sun = (x, y, r = 58) => T(W.sun, at(x, y, 1, `<circle r="${r * 2.1}" fill="url(#kwGlow)"/><g class="kw-spin">${Array.from({ length: 12 }, (_, k) => { const a = k / 12 * 6.283; return `<path d="M${(Math.cos(a) * (r + 14)).toFixed(1)} ${(Math.sin(a) * (r + 14)).toFixed(1)}L${(Math.cos(a) * (r + 44)).toFixed(1)} ${(Math.sin(a) * (r + 44)).toFixed(1)}" stroke="#ffd34d" stroke-width="7" stroke-linecap="round" opacity=".85"/>`; }).join("")}</g><circle r="${r}" fill="url(#kwSun)"/>`));
const cloud = (x, y, s, d, c = "#eef7f5") => T(W.cloud, at(x, y, s, `<g class="kw-drift" style="animation-duration:${d}s;animation-delay:-${(d * .37).toFixed(1)}s"><g fill="${c}"><circle r="40"/><circle cx="45" cy="10" r="34"/><circle cx="-45" cy="12" r="30"/><rect x="-75" y="10" width="150" height="34" rx="17"/></g><path d="M-70 40H72" stroke="#000" stroke-opacity=".06" stroke-width="6" stroke-linecap="round"/></g>`));
const flower = (x, y, c, i) => T(W.flower, at(x, y, 1, `<g class="kw-sway" style="animation-delay:-${(i * .7).toFixed(1)}s"><path d="M0 0V-50" stroke="#22553b" stroke-width="5"/><path d="M0 -20q-16 -4 -20 -16q14 0 20 10z" fill="#3f9a6b"/>${Array.from({ length: 5 }, (_, k) => `<circle cx="${(Math.cos(k * 1.2566) * 13).toFixed(1)}" cy="${(-50 + Math.sin(k * 1.2566) * 13).toFixed(1)}" r="11" fill="${c}"/>`).join("")}<circle cy="-50" r="8" fill="#fff3c4"/></g>`));
const hills = (a = "url(#kwHill1)", b = "url(#kwHill2)") => `<path d="M0 430Q300 340 600 420T1200 400V600H0Z" fill="${a}"/><path d="M0 505Q300 450 640 505T1200 485V600H0Z" fill="${b}"/>${Array.from({ length: 26 }, (_, k) => `<path d="M${k * 47 + 10} ${540 + (k % 3) * 18}l4 -14l4 14" stroke="#1d5a3c" stroke-width="3" fill="none" opacity=".6"/>`).join("")}`;
const tree = (x, y, s, i = 0) => T(W.tree, at(x, y, s, `<path d="M-12 0L-8 -150H8L12 0Z" fill="#6b4426"/><path d="M0 -110L-40 -150M2 -90L38 -128" stroke="#6b4426" stroke-width="9" stroke-linecap="round"/><g class="kw-sway slow" style="animation-delay:-${i}s">${[[0, -200, 72, "#2f7d55"], [-58, -160, 52, "#3a8f62"], [58, -165, 55, "#3a8f62"], [-20, -240, 50, "#46a370"], [30, -230, 46, "#55b37d"]].map(([cx, cy, r, c]) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}"/>`).join("")}</g>`));
const butterfly = (i, c) => T(W.butterfly, `<g class="kw-bf b${i}"><g class="kw-wing"><path d="M0 0q-22 -26 -30 -6q-4 14 30 6zM0 0q-20 18 -24 6q0 -12 24 -6z" fill="${c}"/><path d="M0 0q22 -26 30 -6q4 14 -30 6zM0 0q20 18 24 6q0 -12 -24 -6z" fill="${c}"/></g><path d="M0 -6V8" stroke="#2a2a2a" stroke-width="4" stroke-linecap="round"/></g>`);
const sparkles = (n, y0, y1) => Array.from({ length: n }, (_, k) => `<circle class="kw-tw" style="animation-delay:-${(rnd(k) * 4).toFixed(1)}s" cx="${Math.round(rnd(k + 9) * 1200)}" cy="${Math.round(y0 + rnd(k + 3) * (y1 - y0))}" r="${3 + k % 4}" fill="${["#ffd34d", "#ff7b8a", "#8fd3ff", "#b4f0a0"][k % 4]}"/>`).join("");

/* Pixel: black-and-white talking cat (local origin = feet centre) */
function pixel() {
  return `<ellipse cy="72" rx="78" ry="12" fill="#000" opacity=".22"/>
  <g class="kw-tail"><path d="M48 48Q122 40 104 -26" stroke="#2c2f36" stroke-width="16" stroke-linecap="round" fill="none"/></g>
  <g class="kw-breath"><path d="M-60 66Q-70 -10 0 -15Q70 -10 60 66Z" fill="url(#kwFur)"/><path d="M-30 66Q0 -18 30 66Z" fill="#f4f4f4"/><ellipse cx="-32" cy="64" rx="19" ry="10" fill="#f4f4f4"/><ellipse cx="32" cy="64" rx="19" ry="10" fill="#f4f4f4"/></g>
  <g class="kw-head"><g class="kw-earL"><path d="M-50 -82L-44 -132L-10 -100Z" fill="#2c2f36"/><path d="M-42 -92L-39 -120L-20 -101Z" fill="#f6a6b6"/></g><g class="kw-earR"><path d="M50 -82L44 -132L10 -100Z" fill="#2c2f36"/><path d="M42 -92L39 -120L20 -101Z" fill="#f6a6b6"/></g>
    <circle cy="-50" r="53" fill="url(#kwFur)"/><ellipse cy="-28" rx="31" ry="23" fill="#f4f4f4"/><path d="M-10 -100Q0 -80 10 -100" fill="#f4f4f4" opacity=".9"/>
    <g class="kw-eyes"><circle cx="-20" cy="-56" r="12" fill="#fff"/><circle cx="20" cy="-56" r="12" fill="#fff"/><g class="kw-look"><circle cx="-18" cy="-54" r="7" fill="#123038"/><circle cx="22" cy="-54" r="7" fill="#123038"/><circle cx="-16" cy="-57" r="2.4" fill="#fff"/><circle cx="24" cy="-57" r="2.4" fill="#fff"/></g></g>
    <ellipse cx="-36" cy="-36" rx="8" ry="5" fill="#ff8fa3" opacity=".45"/><ellipse cx="36" cy="-36" rx="8" ry="5" fill="#ff8fa3" opacity=".45"/>
    <path d="M-6 -36L6 -36L0 -29Z" fill="#c4505f"/><path d="M0 -29Q-10 -19 -18 -25M0 -29Q10 -19 18 -25" stroke="#3a3f47" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    <path d="M-30 -34H-72M-30 -28L-68 -18M30 -34H72M30 -28L68 -18" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".9"/></g>`;
}
const PIX = (x, y, s) => at(x, y, s, `<g class="kw-t kw-px" data-px="1">${pixel()}</g>`);

/* ---------- 8 scenes: -1 = cover, 0..6 = chapters ---------- */
const ROOM = (wall, floor) => `<rect width="1200" height="600" fill="${wall}"/>${Array.from({ length: 40 }, (_, k) => `<circle cx="${(k % 10) * 124 + 40 + (Math.floor(k / 10) % 2) * 62}" cy="${Math.floor(k / 10) * 100 + 40}" r="5" fill="#fff" opacity=".07"/>`).join("")}<rect y="440" width="1200" height="160" fill="${floor}"/>${Array.from({ length: 9 }, (_, k) => `<path d="M${k * 150} 440V600" stroke="#000" stroke-opacity=".12" stroke-width="3"/>`).join("")}<path d="M0 440H1200" stroke="#000" stroke-opacity=".25" stroke-width="6"/>`;
const SC = {
  "-1": () => `${sky("#1f5a66", "#17414b")}${sparkles(18, 190, 360)}${sun(1010, 115)}${cloud(180, 105, 1, 26)}${cloud(520, 70, .8, 34)}${cloud(780, 160, .7, 30)}
    ${hills()}${T(W.grass, `<path d="M0 560H1200V600H0Z" fill="#1d5a3c" opacity=".001"/>`)}${tree(90, 470, .8, 1)}${flower(150, 455, "#ff7b8a", 0)}${flower(255, 470, "#ffd34d", 1)}${flower(370, 490, "#8fd3ff", 2)}${flower(1120, 470, "#ff9f5a", 3)}
    ${butterfly(1, "#ffb3c7")}${butterfly(2, "#ffe17a")}${PIX(560, 498, .72)}`,
  0: () => `${sky("#2a6f7c", "#17414b")}${sun(1040, 100, 50)}${cloud(600, 80, .75, 30)}${cloud(860, 150, .6, 38)}${hills()}
    ${tree(510, 430, .75, 2)}
    ${T(W.house, `<rect x="90" y="250" width="300" height="250" fill="#f0d9b5"/><rect x="90" y="250" width="300" height="20" fill="#000" opacity=".08"/><path d="M60 262L240 132L420 262Z" fill="#c4505f"/><path d="M60 262L240 132L420 262" fill="none" stroke="#8f3242" stroke-width="10" stroke-linejoin="round"/><rect x="315" y="150" width="40" height="80" fill="#9a5a3c"/>`)}
    ${Array.from({ length: 3 }, (_, k) => `<circle class="kw-smoke" style="animation-delay:-${k * 1.3}s" cx="335" cy="140" r="${14 + k * 3}" fill="#dfe9ea"/>`).join("")}
    ${T(W.door, `<rect x="210" y="395" width="62" height="105" rx="8" fill="#7a4a2a"/><circle cx="260" cy="452" r="5" fill="#ffd34d"/>`)}
    ${T(W.window, `<rect x="118" y="295" width="74" height="64" rx="6" fill="#ffd77a" class="kw-lamp"/><rect x="290" y="295" width="74" height="64" rx="6" fill="#ffd77a" class="kw-lamp"/><path d="M155 295V359M118 327H192M327 295V359M290 327H364" stroke="#f0d9b5" stroke-width="6"/>`)}
    ${flower(60, 520, "#ff7b8a", 0)}${flower(420, 520, "#8fd3ff", 1)}${flower(1130, 470, "#ffd34d", 2)}${PIX(565, 500, .72)}`,
  1: () => `${ROOM("#2c5d66", "#8a5a3c")}
    ${T(W.window, `<rect x="455" y="60" width="190" height="160" rx="10" fill="#9fd8e8"/><g clip-path="url(#kwWin)">${cloud(520, 120, .45, 14, "#fff")}</g><clipPath id="kwWin"><rect x="455" y="60" width="190" height="160" rx="10"/></clipPath><path d="M550 60V220M455 140H645" stroke="#e9dcc6" stroke-width="8"/><rect x="455" y="60" width="190" height="160" rx="10" fill="none" stroke="#e9dcc6" stroke-width="10"/>`)}
    ${T(W.kite, at(150, 80, 1, `<g class="kw-sway slow"><path d="M0 0L60 70L0 160L-60 70Z" fill="#46b26b"/><path d="M0 0V160M-60 70H60" stroke="#2c7a45" stroke-width="4"/><path d="M0 160q20 30 -6 56q-26 26 4 60" stroke="#e9dcc6" stroke-width="3" fill="none"/>${[[8, 196, "#ff7b8a"], [-8, 236, "#ffd34d"]].map(([x, y, c]) => `<path d="M${x} ${y}l10 -8v16z" fill="${c}"/>`).join("")}</g>`))}
    ${T(W.box, `<path d="M120 360H340L330 470H130Z" fill="url(#kwWood)"/><path d="M110 352H350V372H110Z" fill="#c08850"/><path d="M118 352L150 290H370L350 352Z" fill="#b07a45"/><text x="230" y="430" text-anchor="middle" font-family="Nunito,sans-serif" font-weight="900" font-size="34" fill="#ffe7b0">TOYS</text>`)}
    ${T(W.teddyB, at(185, 335, 1, `<g class="kw-bob"><circle cx="-24" cy="-58" r="14" fill="#8a5a33"/><circle cx="24" cy="-58" r="14" fill="#8a5a33"/><circle cy="-36" r="34" fill="#9b6a3d"/><ellipse cy="-24" rx="15" ry="11" fill="#e3c39a"/><circle cx="-11" cy="-42" r="4" fill="#222"/><circle cx="11" cy="-42" r="4" fill="#222"/><circle cy="-28" r="4" fill="#222"/><path d="M-30 0q30 -26 60 0" fill="#9b6a3d"/></g>`))}
    ${T(W.teddyW, at(285, 338, 1, `<g class="kw-bob" style="animation-delay:-1s"><circle cx="-22" cy="-56" r="13" fill="#e8e3da"/><circle cx="22" cy="-56" r="13" fill="#e8e3da"/><circle cy="-35" r="32" fill="#f6f2ea"/><ellipse cy="-24" rx="14" ry="10" fill="#fff"/><circle cx="-10" cy="-41" r="4" fill="#222"/><circle cx="10" cy="-41" r="4" fill="#222"/><circle cy="-28" r="4" fill="#222"/></g>`))}
    ${T(W.robot, at(410, 445, 1, `<g class="kw-bob" style="animation-delay:-.5s"><path d="M0 -150V-170" stroke="#9fb4c8" stroke-width="5"/><circle cy="-174" r="8" fill="#ff5a6a" class="kw-blinkled"/><rect x="-30" y="-150" width="60" height="46" rx="10" fill="#4a7fd4"/><circle cx="-12" cy="-128" r="8" fill="#e8f6ff"/><circle cx="12" cy="-128" r="8" fill="#e8f6ff"/><rect x="-38" y="-100" width="76" height="80" rx="12" fill="#3d6dc0"/><rect x="-18" y="-86" width="36" height="22" rx="4" fill="#9fd8ff"/><g class="kw-wave"><rect x="38" y="-96" width="14" height="50" rx="7" fill="#4a7fd4"/></g><rect x="-52" y="-96" width="14" height="50" rx="7" fill="#4a7fd4"/><rect x="-26" y="-20" width="16" height="20" fill="#2c4f8f"/><rect x="10" y="-20" width="16" height="20" fill="#2c4f8f"/></g>`))}
    ${T(W.ball, at(475, 500, 1, `<ellipse cy="50" rx="30" ry="7" fill="#000" opacity=".25" class="kw-shad"/><g class="kw-bounce"><circle r="30" fill="#e8434f"/><path d="M-30 0Q0 18 30 0" stroke="#fff" stroke-width="5" fill="none"/><circle cx="-10" cy="-12" r="7" fill="#fff" opacity=".45"/></g>`))}
    ${T(W.car, at(150, 560, 1, `<g class="kw-roll"><path d="M-55 -10V-28Q-50 -38 -36 -38L-22 -58H22L38 -38H52Q58 -36 58 -26V-10Z" fill="#ffc531"/><path d="M-16 -54H0V-40H-28ZM6 -54H20L32 -40H6Z" fill="#bfe8ff"/><circle cx="-32" cy="-8" r="13" fill="#2b2b2b"/><circle cx="34" cy="-8" r="13" fill="#2b2b2b"/><circle cx="-32" cy="-8" r="5" fill="#ccc"/><circle cx="34" cy="-8" r="5" fill="#ccc"/></g>`))}
    ${T(W.pink, at(650, 562, 1, `<circle r="15" fill="#ff8fc0"/><circle cx="-5" cy="-6" r="4" fill="#fff" opacity=".5"/>`))}${PIX(555, 500, .72)}`,
  2: () => `${sky("#3a8ea0", "#1f5a66")}${sun(1080, 90, 46)}${cloud(380, 70, .7, 32)}${cloud(700, 120, .6, 28)}
    <path d="M0 380Q260 300 560 360T1200 330V600H0Z" fill="#4aa874"/><path d="M0 470Q300 420 640 470T1200 455V600H0Z" fill="#3a8f62"/>
    ${T(W.lion, at(830, 255, .55, `<ellipse cx="0" cy="40" rx="170" ry="34" fill="#8d8a80"/><path d="M-150 40Q-140 -10 0 -20Q140 -10 150 40Z" fill="#a39f94"/><g class="kw-breath"><ellipse cx="20" cy="10" rx="85" ry="34" fill="#d9a04a"/><circle cx="-60" cy="0" r="46" fill="#a8641f"/><circle cx="-62" cy="4" r="30" fill="#e2ad55"/><path d="M-76 0q6 4 12 0M-54 0q6 4 12 0" stroke="#5a3510" stroke-width="3" fill="none"/><path d="M100 18q40 -10 50 18" stroke="#d9a04a" stroke-width="9" fill="none" stroke-linecap="round"/></g>`))}
    ${[0, 1, 2].map(k => `<text class="kw-zzz" style="animation-delay:-${k * 1}s" x="790" y="225" font-family="Nunito,sans-serif" font-weight="900" font-size="${22 + k * 6}" fill="#fff">z</text>`).join("")}
    ${Array.from({ length: 13 }, (_, k) => `<rect x="${k * 100 - 10}" y="410" width="14" height="80" rx="4" fill="#8a5a33"/>`).join("")}<rect y="425" width="1200" height="10" fill="#9b6a3d"/><rect y="460" width="1200" height="10" fill="#9b6a3d"/>
    ${tree(80, 470, 1, 0)}${T(W.monkey, at(118, 255, 1, `<g class="kw-swingm"><path d="M0 0V60" stroke="#6b4426" stroke-width="7" stroke-linecap="round"/><circle cy="78" r="24" fill="#8a5a33"/><ellipse cy="84" rx="14" ry="11" fill="#e3c39a"/><circle cx="-24" cy="74" r="8" fill="#e3c39a"/><circle cx="24" cy="74" r="8" fill="#e3c39a"/><circle cx="-7" cy="74" r="3" fill="#222"/><circle cx="7" cy="74" r="3" fill="#222"/><path d="M-6 90q6 5 12 0" stroke="#5a3510" stroke-width="2.5" fill="none"/><ellipse cy="122" rx="18" ry="22" fill="#8a5a33"/><path d="M16 130q30 10 22 -18" stroke="#8a5a33" stroke-width="7" fill="none" stroke-linecap="round"/></g>`))}
    ${T(W.elephant, at(300, 420, 1, `<g class="kw-breath"><ellipse cx="0" cy="-40" rx="105" ry="72" fill="#9aa3ad"/><rect x="-80" y="-10" width="34" height="70" rx="12" fill="#8c95a0"/><rect x="40" y="-10" width="34" height="70" rx="12" fill="#8c95a0"/><rect x="-30" y="0" width="30" height="60" rx="12" fill="#9aa3ad"/></g><circle cx="-108" cy="-78" r="48" fill="#a6afb9"/><path d="M-90 -110Q-40 -120 -40 -60Q-50 -20 -90 -40Z" fill="#8c95a0"/><circle cx="-124" cy="-88" r="6" fill="#222"/><path d="M-140 -70l-8 6l12 -2z" fill="#fff"/><g class="kw-trunk"><path d="M-140 -62Q-170 -10 -150 40Q-146 54 -132 48" stroke="#a6afb9" stroke-width="24" fill="none" stroke-linecap="round"/></g><path d="M100 -50q22 8 18 40" stroke="#8c95a0" stroke-width="6" fill="none"/>`))}
    ${tree(560, 470, .95, 1)}${T(W.giraffe, at(450, 470, 1, `<path d="M-40 -10L-36 70M30 -10L34 70M-20 -8L-18 70M14 -8L16 70" stroke="#e0a548" stroke-width="13" stroke-linecap="round"/><ellipse cy="-30" rx="62" ry="34" fill="#f0b955"/><g class="kw-neck"><path d="M30 -40L80 -250L106 -246L62 -30Z" fill="#f0b955"/><ellipse cx="102" cy="-262" rx="30" ry="18" fill="#f0b955"/><path d="M92 -282V-298M108 -280V-296" stroke="#c68a2e" stroke-width="5" stroke-linecap="round"/><circle cx="102" cy="-268" r="4" fill="#222"/><ellipse cx="128" cy="-258" rx="9" ry="7" fill="#d79a3c"/>${[[60, -150], [76, -200], [50, -80], [70, -110]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="#b9792a"/>`).join("")}</g>${[[-30, -40], [0, -20], [26, -44], [-10, -50]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="10" fill="#b9792a"/>`).join("")}`))}
    ${PIX(585, 510, .66)}`,
  3: () => `${sky("#2f6b78", "#1b4a55")}${sun(1060, 90, 46)}${cloud(640, 90, .7, 30)}
    <rect y="470" width="1200" height="130" fill="#b9a27e"/>${Array.from({ length: 12 }, (_, k) => `<path d="M${k * 110} 470L${k * 110 - 40} 600" stroke="#000" stroke-opacity=".08" stroke-width="3"/>`).join("")}
    <rect x="40" y="150" width="14" height="330" fill="#7a4f2a"/><rect x="510" y="150" width="14" height="330" fill="#7a4f2a"/>
    <g class="kw-sway awn">${Array.from({ length: 8 }, (_, k) => `<path d="M${20 + k * 66} 90H${86 + k * 66}V165Q${53 + k * 66} 192 ${20 + k * 66} 165Z" fill="${k % 2 ? "#fff3e6" : "#e0475a"}"/>`).join("")}<rect x="14" y="78" width="544" height="16" rx="8" fill="#b8323f"/></g>
    <rect x="30" y="380" width="510" height="100" rx="8" fill="url(#kwWood)"/><rect x="30" y="372" width="510" height="16" rx="6" fill="#c08850"/>
    ${T(W.apples, Array.from({ length: 7 }, (_, k) => `<circle cx="${80 + (k % 4) * 26 + (k > 3 ? 13 : 0)}" cy="${k > 3 ? 336 : 358}" r="15" fill="${k % 3 ? "#d8323f" : "#9fcf3a"}"/><path d="M${80 + (k % 4) * 26 + (k > 3 ? 13 : 0)} ${(k > 3 ? 336 : 358) - 14}v-6" stroke="#5a3510" stroke-width="3"/>`).join(""))}
    ${T(W.price, at(118, 270, 1, `<path d="M0 40V70" stroke="#5a3510" stroke-width="4"/><g class="kw-sway"><rect x="-44" y="0" width="88" height="44" rx="8" fill="#fff8e6" stroke="#5a3510" stroke-width="3"/><text y="31" text-anchor="middle" font-family="Nunito,sans-serif" font-weight="900" font-size="22" fill="#b8323f">2 ₼/kg</text></g>`))}
    ${T(W.bananas, [0, 1, 2].map(k => `<path d="M${200 + k * 22} 368Q${230 + k * 22} 300 ${282 + k * 18} 318" stroke="#ffd234" stroke-width="18" fill="none" stroke-linecap="round"/><path d="M${200 + k * 22} 368l-6 6" stroke="#6b5a10" stroke-width="6" stroke-linecap="round"/>`).join(""))}
    ${T(W.oranges, Array.from({ length: 6 }, (_, k) => `<circle cx="${330 + (k % 3) * 30 + (k > 2 ? 15 : 0)}" cy="${k > 2 ? 334 : 358}" r="15" fill="#ff9a2e"/><circle cx="${326 + (k % 3) * 30 + (k > 2 ? 15 : 0)}" cy="${(k > 2 ? 334 : 358) - 5}" r="4" fill="#fff" opacity=".35"/>`).join(""))}
    ${T(W.melon, `<ellipse cx="470" cy="340" rx="48" ry="34" fill="#2f8f3a"/>${[-30, -12, 6, 24].map(d => `<path d="M${470 + d} 308Q${476 + d} 340 ${470 + d} 372" stroke="#1d5f25" stroke-width="6" fill="none"/>`).join("")}`)}
    ${T(W.fish, at(430, 545, 1, `<rect x="-80" y="-14" width="160" height="34" rx="8" fill="#cfe8f2"/><g class="kw-flap"><path d="M-62 -14Q-20 -50 30 -14Q-20 18 -62 -14Z" fill="#7aa3c0"/><path d="M30 -14L62 -36V8Z" fill="#5f89a8"/><circle cx="-44" cy="-20" r="4" fill="#123038"/></g>`))}
    ${PIX(590, 505, .7)}`,
  4: () => `${ROOM("#2b4f5a", "#9b7650")}
    ${T(W.board, `<rect x="50" y="50" width="520" height="260" rx="10" fill="#7a4f2a"/><rect x="66" y="66" width="488" height="228" rx="6" fill="#1f4d3a"/><text class="kw-chalk" x="110" y="160" font-family="Condiment,cursive" font-size="78" fill="#f2f2e8">Hello!</text><text class="kw-chalk" style="animation-delay:1.2s" x="110" y="255" font-family="Nunito,sans-serif" font-weight="800" font-size="52" fill="#ffe17a" letter-spacing="6">1 2 3 … 10</text><rect x="380" y="290" width="70" height="10" rx="4" fill="#eee"/>`)}
    ${T(W.clock, at(690, 120, 1, `<circle r="50" fill="#fff8e6" stroke="#7a4f2a" stroke-width="8"/>${Array.from({ length: 12 }, (_, k) => `<circle cx="${(Math.cos(k / 12 * 6.283) * 38).toFixed(1)}" cy="${(Math.sin(k / 12 * 6.283) * 38).toFixed(1)}" r="3" fill="#5a3510"/>`).join("")}<path d="M0 0L-18 -14" stroke="#222" stroke-width="6" stroke-linecap="round"/><g class="kw-hand"><path d="M0 0V-34" stroke="#c4505f" stroke-width="4" stroke-linecap="round"/></g><circle r="5" fill="#222"/>`))}
    ${T(W.desk, `<rect x="70" y="390" width="400" height="22" rx="6" fill="#b07a45"/><rect x="90" y="412" width="18" height="110" fill="#7a4f2a"/><rect x="432" y="412" width="18" height="110" fill="#7a4f2a"/>`)}
    ${T(W.book, `<rect x="100" y="352" width="110" height="18" rx="3" fill="#4a7fd4"/><rect x="108" y="334" width="100" height="18" rx="3" fill="#e8434f"/><rect x="104" y="316" width="104" height="18" rx="3" fill="#ffc531"/>`)}
    ${T(W.pencil, `<g class="kw-wob"><rect x="250" y="372" width="110" height="12" rx="3" fill="#ffc531"/><path d="M360 372L380 378L360 384Z" fill="#f0d9b5"/><rect x="242" y="372" width="10" height="12" fill="#ff8fc0"/></g>`)}
    ${T(W.ruler, `<rect x="240" y="346" width="160" height="18" rx="2" fill="#9fd8ff"/>${Array.from({ length: 15 }, (_, k) => `<path d="M${250 + k * 10} 346v${k % 5 ? 6 : 10}" stroke="#2c4f8f" stroke-width="2"/>`).join("")}`)}
    ${T(W.rubber, `<rect x="400" y="366" width="46" height="22" rx="6" fill="#ff8fa3"/><rect x="400" y="366" width="20" height="22" rx="6" fill="#4a7fd4"/>`)}
    ${PIX(560, 505, .72)}`,
  5: () => `${sky("#5b7f8c", "#2f5560")}${sun(1060, 100, 46)}${cloud(860, 120, .6, 26)}
    ${hills("#4f9a6f", "#3a7f5a")}
    ${T(W.rain, `${Array.from({ length: 26 }, (_, k) => `<path class="kw-rain" style="animation-delay:-${(rnd(k) * 1.2).toFixed(2)}s" d="M${80 + (k * 37) % 400} ${170 + (k % 5) * 14}l-6 22" stroke="#cfe8f2" stroke-width="3" stroke-linecap="round"/>`).join("")}`)}
    ${cloud(180, 110, 1.1, 40, "#c9d4d8")}${cloud(360, 95, .95, 46, "#b8c4c9")}
    ${tree(70, 480, .95, 0)}${tree(470, 470, .8, 2)}
    ${T(W.swing, `<path d="M190 480L240 250L290 480M340 480L390 250L440 480M230 252H400" stroke="#c4505f" stroke-width="10" stroke-linecap="round" fill="none"/>${at(315, 252, 1, `<g class="kw-swingm"><path d="M-30 0V150M30 0V150" stroke="#555" stroke-width="3"/><rect x="-40" y="148" width="80" height="12" rx="4" fill="#7a4f2a"/></g>`)}`)}
    ${T(W.puddle, at(560, 572, 1, `<ellipse rx="80" ry="14" fill="#7fb0c4" opacity=".75"/><ellipse class="kw-ripple" rx="30" ry="6" fill="none" stroke="#e6f4f8" stroke-width="2"/><ellipse class="kw-ripple" style="animation-delay:-1s" rx="30" ry="6" fill="none" stroke="#e6f4f8" stroke-width="2"/>`))}
    ${T(W.umbrella, at(640, 190, 1, `<g class="kw-blow"><path d="M-70 0Q0 -80 70 0Q52 -12 35 0Q18 -12 0 0Q-18 -12 -35 0Q-52 -12 -70 0Z" fill="#e8434f"/><path d="M0 -40V0" stroke="#e8434f" stroke-width="4"/><path d="M0 0V60Q0 74 -14 70" stroke="#333" stroke-width="5" fill="none" stroke-linecap="round"/></g>`))}
    ${T(W.wind, Array.from({ length: 5 }, (_, k) => `<g class="kw-leaf" style="animation-delay:-${(k * 1.4).toFixed(1)}s;--y:${(rnd(k) * 60 - 30).toFixed(0)}px"><path d="M${-40} ${200 + k * 50}q14 -14 28 0q-14 14 -28 0z" fill="${["#ff9f5a", "#ffd34d", "#9fcf3a"][k % 3]}"/></g>`).join(""))}
    ${PIX(470, 515, .68)}`,
  6: () => `${ROOM("#3d2d5c", "#7a5a8c")}
    <g class="kw-sway awn"><path d="M0 40Q600 120 1200 40" stroke="#ffe7b0" stroke-width="3" fill="none"/>${Array.from({ length: 16 }, (_, k) => { const x = 40 + k * 72, y = 40 + Math.sin((x / 1200) * Math.PI) * 78; return `<path d="M${x - 18} ${y - 2}L${x + 18} ${y + 2}L${x} ${y + 38}Z" fill="${["#ff7b8a", "#ffd34d", "#8fd3ff", "#b4f0a0", "#c9a0ff"][k % 5]}"/>`; }).join("")}</g>
    <text x="600" y="170" text-anchor="middle" font-family="Fraunces,serif" font-weight="700" font-size="44" fill="#ffe7b0" class="kw-glow">Happy Birthday, Aylin!</text>
    ${T(W.balloon, [[95, 300, "#ff5a6a", 0], [170, 250, "#ffd34d", 1], [1130, 290, "#8fd3ff", 2], [260, 290, "#c9a0ff", 3]].map(([x, y, c, i]) => at(x, y, 1, `<g class="kw-float" style="animation-delay:-${i * .9}s"><path d="M0 46Q-10 110 6 170" stroke="#eee" stroke-width="2" fill="none"/><ellipse rx="38" ry="46" fill="${c}"/><ellipse cx="-12" cy="-16" rx="9" ry="14" fill="#fff" opacity=".4"/><path d="M-6 46h12l-6 8z" fill="${c}"/></g>`)).join(""))}
    <rect x="110" y="410" width="440" height="20" rx="6" fill="#ffb3c7"/><path d="M110 430H550L540 470H120Z" fill="#ff8fab"/><rect x="140" y="470" width="16" height="90" fill="#7a4f2a"/><rect x="504" y="470" width="16" height="90" fill="#7a4f2a"/>
    ${T(W.cake, `<rect x="250" y="340" width="150" height="70" rx="10" fill="#6b3b1f"/><rect x="270" y="290" width="110" height="54" rx="10" fill="#7d4626"/><path d="M250 352q18 14 37 0t37 0t38 0t38 0" stroke="#fff3e6" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M270 300q14 12 27 0t28 0t27 0t28 0" stroke="#fff3e6" stroke-width="8" fill="none" stroke-linecap="round"/><ellipse cx="325" cy="412" rx="95" ry="8" fill="#eee"/>`)}
    ${T(W.candles, Array.from({ length: 9 }, (_, k) => { const x = 280 + k * 11.5; return `<rect x="${x - 3}" y="262" width="6" height="30" rx="2" fill="${["#8fd3ff", "#ffd34d", "#ff7b8a"][k % 3]}"/><g transform="translate(${x} 258)"><path class="kw-flame" style="animation-delay:-${(rnd(k) * .6).toFixed(2)}s" d="M0 -14Q6 -4 0 2Q-6 -4 0 -14Z" fill="#ffb43b"/></g>`; }).join("") + `<circle cx="326" cy="250" r="34" fill="url(#kwGlow)"/>`)}
    ${T(W.juice, `<path d="M160 340H196L192 410H164Z" fill="#fff" opacity=".35"/><path d="M163 356H193L191 408H165Z" fill="#ff9a2e"/><path d="M186 352L204 310" stroke="#ff5a6a" stroke-width="5" stroke-linecap="round"/>`)}
    ${T(W.present, `<rect x="440" y="350" width="70" height="60" rx="4" fill="#4a7fd4"/><rect x="468" y="350" width="14" height="60" fill="#ffd34d"/><rect x="434" y="340" width="82" height="18" rx="4" fill="#5b8fe0"/><path d="M475 340q-26 -26 -6 -26q10 0 6 26q-4 -26 6 -26q20 0 -6 26" stroke="#ffd34d" stroke-width="5" fill="none"/>`)}
    ${Array.from({ length: 30 }, (_, k) => `<rect class="kw-fall" style="animation-delay:-${(rnd(k) * 6).toFixed(2)}s;animation-duration:${(4 + rnd(k + 5) * 3).toFixed(2)}s" x="${Math.round(rnd(k + 2) * 1200)}" y="-20" width="10" height="16" rx="2" fill="${["#ff7b8a", "#ffd34d", "#8fd3ff", "#b4f0a0", "#c9a0ff"][k % 5]}"/>`).join("")}
    ${PIX(585, 505, .7)}`
};

/* Pixel's and the children's lines per scene: [en, az, ru] */
const PL = {
  "-1": [["Meow! Let's go on an adventure!", "Miyav! Gəlin macəraya çıxaq!", "Мяу! Отправимся в приключение!"], ["Hello! I'm Pixel. I can talk!", "Salam! Mən Pixel-əm. Danışa bilirəm!", "Привет! Я Пиксель. Я умею говорить!"], ["I am a black and white cat.", "Mən ağ-qara pişiyəm.", "Я чёрно-белый кот."]],
  0: [["This is our house!", "Bu, bizim evimizdir!", "Это наш дом!"], ["Grandma lives with us too.", "Nənə də bizimlə yaşayır.", "Бабушка тоже живёт с нами."], ["We live in Baku.", "Biz Bakıda yaşayırıq.", "Мы живём в Баку."]],
  1: [["The small pink ball is my favourite toy!", "Kiçik çəhrayı top mənim ən sevimli oyuncağımdır!", "Маленький розовый мяч — моя любимая игрушка!"], ["Look! A blue robot!", "Bax! Mavi robot!", "Смотри! Синий робот!"], ["Let's play!", "Gəlin oynayaq!", "Давай играть!"]],
  2: [["Lions are very big cats!", "Şirlər çox böyük pişiklərdir!", "Львы — очень большие кошки!"], ["Look at the elephant's long nose!", "Filin uzun burnuna bax!", "Посмотри на длинный нос слона!"], ["The monkeys can jump and climb.", "Meymunlar tullana və dırmaşa bilir.", "Обезьяны умеют прыгать и лазать."]],
  3: [["I like fish!", "Mən balığı sevirəm!", "Я люблю рыбу!"], ["How much are the apples?", "Almalar neçəyədir?", "Сколько стоят яблоки?"], ["Six oranges, please!", "Altı portağal, zəhmət olmasa!", "Шесть апельсинов, пожалуйста!"]],
  4: [["I can count to ten!", "Mən onadək saya bilirəm!", "Я умею считать до десяти!"], ["One, two, three, four, five!", "Bir, iki, üç, dörd, beş!", "Один, два, три, четыре, пять!"], ["Good morning, Miss Nigar!", "Sabahınız xeyir, Nigar müəllimə!", "Доброе утро, мисс Нигяр!"]],
  5: [["I have got my fur!", "Mənim kürküm var!", "У меня есть шерсть!"], ["It's raining! Where is the umbrella?", "Yağış yağır! Çətir haradadır?", "Идёт дождь! Где зонт?"], ["It's cold and windy.", "Hava soyuq və küləklidir.", "Холодно и ветрено."]],
  6: [["Happy birthday, Aylin!", "Ad günün mübarək, Aylin!", "С днём рождения, Айлин!"], ["There are nine candles!", "Doqquz şam var!", "Здесь девять свечей!"], ["Let's eat cake!", "Gəlin tort yeyək!", "Давайте есть торт!"]]
};
const KL = {
  a: [["Hello! I'm Aylin.", "Salam! Mən Aylinəm.", "Привет! Я Айлин."], ["This is my brother, Murad.", "Bu, mənim qardaşım Muraddır.", "Это мой брат, Мурад."]],
  m: [["Hi! I'm Murad.", "Salam! Mən Muradam.", "Привет! Я Мурад."], ["Aylin is my sister.", "Aylin mənim bacımdır.", "Айлин — моя сестра."]]
};
const YAY = [["Great job!", "Əla!", "Отлично!"], ["Yes! Well done!", "Bəli! Afərin!", "Да! Молодец!"], ["Super!", "Super!", "Супер!"], ["You are a star!", "Sən ulduzsan!", "Ты звезда!"]];
const OOPS = [["Oops! Try again!", "Ups! Yenə yoxla!", "Ой! Попробуй ещё!"], ["Not quite. Look again!", "Tam deyil. Yenə bax!", "Не совсем. Посмотри ещё раз!"]];

const sceneIdx = () => { const m = location.hash.match(/^#kids-(\d+)/); const i = m ? +m[1] - 1 : -1; return SC[i] ? i : -1; };
WART.kids = () => {
  const i = sceneIdx();
  return `<div class="gw-svg kw kw-s${i + 1}" data-sc="${i}"><div class="kw-st"><svg class="kw-svg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet" aria-hidden="true">${DEFS}${SC[i]()}</svg>
    <img class="kw-kid kw-a kw-t" data-kid="a" src="img/kid-girl.webp" loading="lazy" alt="Aylin" draggable="false"><img class="kw-kid kw-m kw-t" data-kid="m" src="img/kid-boy.webp" loading="lazy" alt="Murad" draggable="false"></div>
    <span class="kw-hint">👆 ${L("kwTap")}</span></div>`;
};

/* ---------- speech bubbles ---------- */
const trOf = l => (LANG === "az" ? l[1] : LANG === "ru" ? l[2] : "");
function bubble(host, x, y, en, tr, cls = "") {
  host.querySelectorAll(".kw-bub").forEach(b => b.remove());
  const b = document.createElement("span"); b.className = "kw-bub " + cls;
  b.style.left = Math.max(14, Math.min(86, x)) + "%"; b.style.top = y + "%";
  b.innerHTML = `<b>${esc(en)}</b>${tr ? `<small>${esc(tr)}</small>` : ""}`;
  host.appendChild(b); clearTimeout(host._bt); host._bt = setTimeout(() => b.remove(), 3200);
}
const turn = {};
const pick = (k, arr) => { turn[k] = ((turn[k] == null ? -1 : turn[k]) + 1) % arr.length; return arr[turn[k]]; };
function pop(el) { el.classList.remove("kw-pop"); void el.getBoundingClientRect(); el.classList.add("kw-pop"); }

document.addEventListener("click", e => {
  const t = e.target.closest(".kw .kw-t"); if (!t || t.closest("a")) return;
  e.preventDefault();
  const st = t.closest(".kw-st"), kw = t.closest(".kw"), sr = st.getBoundingClientRect(), r = t.getBoundingClientRect(), kr = kw.getBoundingClientRect();
  /* bubble lives in the visible box (.kw), positioned over the tapped thing */
  const x = (r.left + r.width / 2 - kr.left) / kr.width * 100, top = (Math.max(r.top, kr.top) - kr.top) / kr.height * 100, bot = (Math.min(r.bottom, kr.bottom) - kr.top) / kr.height * 100;
  const down = top < 34, y = down ? Math.min(bot, 60) : top;
  let line;
  if (t.dataset.px) line = pick("px" + kw.dataset.sc, PL[kw.dataset.sc] || PL[-1]);
  else if (t.dataset.kid) line = pick("k" + t.dataset.kid, KL[t.dataset.kid]);
  else line = [t.dataset.w, t.dataset.az, t.dataset.ru];
  pop(t); bubble(kw, x, y, line[0], trOf(line), (t.dataset.px || t.dataset.kid ? "talk " : "") + (down ? "down" : ""));
  kw.classList.add("kw-used");
  if (typeof say === "function") say(line[0]);
  if (typeof uiSound === "function") try { uiSound("tap"); } catch (er) {}
  void sr;
}, true);

/* ---------- Pixel buddy in chapters: reacts to every answer ---------- */
function buddy(root) {
  const gw = root.querySelector(".gw-kids.gw-chv"); if (!gw || gw.querySelector(".kw-buddy")) return;
  const b = document.createElement("div"); b.className = "kw-buddy";
  b.innerHTML = `<svg viewBox="-110 -150 240 240" aria-hidden="true">${DEFS}<g class="kw-bwrap">${pixel()}</g></svg><span class="kw-bb"></span>`;
  gw.appendChild(b);
  const bb = b.querySelector(".kw-bb"); let lastTap = 0, hideT;
  const talk = (l, mood) => {
    b.classList.remove("yay", "sad"); void b.offsetWidth; if (mood) b.classList.add(mood);
    bb.innerHTML = `<b>${esc(l[0])}</b>${trOf(l) ? `<small>${esc(trOf(l))}</small>` : ""}`; b.classList.add("kw-on");
    clearTimeout(hideT); hideT = setTimeout(() => b.classList.remove("kw-on", "yay", "sad"), 2600);
  };
  b.addEventListener("click", () => { const l = pick("bd" + sceneIdx(), PL[sceneIdx()] || PL[-1]); talk(l, "yay"); if (typeof say === "function") say(l[0]); });
  gw.addEventListener("click", e => { if (e.target.closest(".qz-opt,.qz-chip,.qz-btn,button,[type=submit]")) lastTap = Date.now(); }, true);
  gw.addEventListener("submit", () => { lastTap = Date.now(); }, true);
  new MutationObserver(ms => {
    if (Date.now() - lastTap > 1800) return;
    for (const m of ms) for (const n of m.addedNodes) {
      if (n.nodeType !== 1) continue;
      const fb = n.matches(".qz-fb") ? n : n.querySelector && n.querySelector(".qz-fb");
      if (fb && !fb._kw) { fb._kw = 1; lastTap = 0; talk(fb.classList.contains("ok") ? pick("y", YAY) : pick("o", OOPS), fb.classList.contains("ok") ? "yay" : "sad"); return; }
    }
  }).observe(gw, { childList: true, subtree: true });
  setTimeout(() => talk(pick("hi" + sceneIdx(), PL[sceneIdx()] || PL[-1]), "yay"), 900);
}
if (typeof VIEWS !== "undefined" && VIEWS.kids) {
  const base = VIEWS.kids;
  VIEWS.kids = root => { const r = base(root); try { buddy(root); } catch (e) {} return r; };
}
})();
