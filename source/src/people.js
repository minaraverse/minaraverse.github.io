/* ===== 24 topic characters, drawn in code (chibi full-body). Used on the path, inside lessons and as avatars ===== */
const PEOPLE = [
  { n: "Leyla", sk: 1, hair: ["ponytail", "#3b2416"], top: ["#FFC94A", "shirt"], pants: "#3b5bdb", pose: "wave", mouth: "open" },
  { n: "Ms Minara", sk: 1, hair: ["long", "#1d1412"], top: ["#2c2f4a", "blazer"], pants: "#2c2f4a", glasses: "round", pose: "hold", prop: "📕", mouth: "smile" },
  { n: "Toto", sk: 3, hair: ["curly", "#1b120c"], top: ["#4FE39A", "shirt"], pants: "#2b6cb0", pose: "wave", prop: "🎈", mouth: "open" },
  { n: "Sam", sk: 0, hair: ["short", "#b5651d"], top: ["#5BA8FF", "shirt"], pants: "#3a3a52", hat: ["cap", "#E0245E"], pose: "side", prop: "🎒", extra: "straps", mouth: "smile" },
  { n: "Zara", sk: 2, hair: ["bob", "#2a1a10"], top: ["#B9A36A", "shirt"], pants: "#6b5a33", hat: ["safari", "#d8c38a"], pose: "hold", prop: "🐱", mouth: "smile" },
  { n: "Pierre", sk: 0, hair: ["short", "#e0b14a"], top: ["#f2efe6", "smock"], pants: "#3b5bdb", hat: ["beret", "#E0245E"], pose: "side", prop: "🎨", beard: "#c9933a", mouth: "smile" },
  { n: "Bolt", robot: true, top: ["#9aa7b8", "robot"], pants: "#6b7788", pose: "wave", prop: "🔢" },
  { n: "Nənə", sk: 1, hair: ["bun", "#d9d9df"], top: ["#C489FF", "cardigan"], pants: "#5a4a7a", glasses: "round", pose: "hold", prop: "👶", mouth: "smile", old: true },
  { n: "Chef Rauf", sk: 2, hair: ["short", "#1b120c"], top: ["#ffffff", "chef"], pants: "#2d2d3a", hat: ["chef", "#ffffff"], pose: "side", prop: "🍳", beard: "#1b120c", mouth: "open" },
  { n: "Mia", sk: 0, hair: ["long", "#e7b85a"], top: ["#ff8fb8", "dress"], pants: "#ff8fb8", hat: ["flower", "#ff5c8a"], pose: "hold", prop: "🌸", mouth: "smile" },
  { n: "Kamal", sk: 3, hair: ["spiky", "#120c08"], top: ["#E0245E", "jersey"], pants: "#ffffff", pose: "kick", prop: "⚽", mouth: "open" },
  { n: "Mr Brown", sk: 1, hair: ["short", "#5a3a22"], top: ["#3a4660", "suit"], pants: "#3a4660", glasses: "square", pose: "side", prop: "☕", mouth: "smile" },
  { n: "Rafa", sk: 2, hair: ["short", "#2a1a10"], top: ["#F28C28", "shirt"], pants: "#4a3a2a", hat: ["cap", "#7a3bd1"], pose: "hold", prop: "🎁", mouth: "open" },
  { n: "Sleepy Sam", sk: 1, hair: ["short", "#6b4127"], top: ["#8fb8ff", "pajama"], pants: "#8fb8ff", hat: ["nightcap", "#5b7fe0"], pose: "sleep", mouth: "sleep" },
  { n: "Guide Aysu", sk: 1, hair: ["ponytail", "#3b2416"], top: ["#2ECC71", "shirt"], pants: "#3a3a52", hat: ["cap", "#F5C542"], pose: "side", prop: "🗺️", mouth: "smile" },
  { n: "Rocky", sk: 0, hair: ["spiky", "#7a3bd1"], top: ["#1d1d24", "jacket"], pants: "#1d1d24", glasses: "sun", pose: "hold", prop: "🎸", mouth: "open" },
  { n: "Nina", sk: 4, hair: ["curly", "#120c08"], top: ["#7CF6FF", "hoodie"], pants: "#3a3a52", pose: "phone", prop: "📱", mouth: "open" },
  { n: "Vera", sk: 0, hair: ["long", "#9b6bff"], top: ["#7a3bd1", "dress"], pants: "#7a3bd1", glasses: "sun", pose: "shop", prop: "🛍️", mouth: "smile" },
  { n: "Snap", sk: 2, hair: ["short", "#1b120c"], top: ["#F5B971", "vest"], pants: "#4a5a3a", hat: ["capb", "#2b6cb0"], pose: "hold", prop: "📷", mouth: "smile" },
  { n: "Detective Ali", sk: 1, hair: ["short", "#1b120c"], top: ["#a67c52", "coat"], pants: "#4a3a2a", hat: ["detective", "#6b4a2b"], pose: "side", prop: "🔍", beard: "#1b120c", mouth: "o" },
  { n: "Champ", sk: 3, hair: ["short", "#120c08"], top: ["#FFD45A", "jersey"], pants: "#2b6cb0", hat: ["band", "#E0245E"], pose: "wave", prop: "🏆", mouth: "open" },
  { n: "Madame Luna", sk: 1, hair: ["long", "#1d1412"], top: ["#5b2a8a", "robe"], pants: "#5b2a8a", hat: ["wizard", "#3b1a6b"], pose: "hold", prop: "🔮", mouth: "smile" },
  { n: "Tariq", sk: 2, hair: ["short", "#2a1a10"], top: ["#FF6A4D", "shirt"], pants: "#6b5a33", hat: ["safari", "#e8d7a8"], pose: "side", prop: "🧳", extra: "straps", mouth: "open" },
  { n: "Astro Ada", sk: 0, hair: ["bob", "#e7b85a"], top: ["#eef2fb", "space"], pants: "#eef2fb", hat: ["helmet", "#7CF6FF"], pose: "wave", prop: "💛", mouth: "open" }];
const PSKIN = ["#F6D2B4", "#EAB98F", "#C98E62", "#9C6440", "#6B4127"];
var personSVG = function (P, o = {}) {
  const id = "p" + (++CHID), skin = o.skin || PSKIN[P.sk || 0], top = o.acc || P.top[0], kind = P.top[1], pants = o.acc && P.top[1] !== "suit" ? P.pants : P.pants;
  const dk = c => `color-mix(in srgb,${c} 72%,#000)`, hc = P.hair ? P.hair[1] : "#222", hs = P.hair ? P.hair[0] : "none";
  const dress = kind === "dress" || kind === "robe", pose = P.pose || "side";
  let s = `<svg viewBox="0 0 120 140" aria-hidden="true" class="ps ps-${pose}"><ellipse cx="60" cy="134" rx="27" ry="5" fill="rgba(0,0,0,.28)"/>`;
  /* hair behind */
  if (hs === "long") s += `<path d="M33 44 Q28 92 44 98 L76 98 Q92 92 87 44 Z" fill="${hc}"/>`;
  if (hs === "bob") s += `<path d="M34 46 Q31 70 40 72 L80 72 Q89 70 86 46Z" fill="${hc}"/>`;
  if (hs === "ponytail") s += `<path d="M80 30 Q100 34 96 62 Q92 50 82 44Z" fill="${hc}"/>`;
  if (P.hat && P.hat[0] === "wizard") s += ``;
  /* legs & shoes */
  if (dress) s += `<rect x="51" y="106" width="6" height="22" rx="3" fill="${skin}"/><rect x="63" y="106" width="6" height="22" rx="3" fill="${skin}"/>`;
  else s += `<rect x="49" y="104" width="9" height="24" rx="4.5" fill="${pants}"/><rect x="62" y="104" width="9" height="24" rx="4.5" fill="${pants}"/>`;
  s += `<ellipse cx="53" cy="129.5" rx="7.5" ry="4" fill="#2a2230"/><ellipse cx="67" cy="129.5" rx="7.5" ry="4" fill="#2a2230"/>`;
  /* torso */
  const torso = dress ? `M33 116 Q40 76 60 72 Q80 76 87 116 Q60 122 33 116Z` : kind === "coat" ? `M36 116 Q35 76 60 72 Q85 76 84 116Z` : `M38 110 Q36 76 60 72 Q84 76 82 110 Q60 114 38 110Z`;
  if (P.robot) s += `<rect x="38" y="72" width="44" height="38" rx="10" fill="${top}"/><rect x="46" y="80" width="28" height="18" rx="5" fill="#24303f"/><circle cx="53" cy="89" r="3" fill="#6FFF00" class="glow"/><circle cx="61" cy="89" r="3" fill="#FFD45A"/><circle cx="69" cy="89" r="3" fill="#FF5C7A"/>`;
  else s += `<path d="${torso}" fill="${top}"/>`;
  /* outfit details */
  if (kind === "suit" || kind === "blazer") s += `<path d="M52 74 L60 92 L68 74" fill="#f4f4f4"/>${kind === "suit" ? `<path d="M58 78 L62 78 L63 96 L60 100 L57 96Z" fill="#E0245E"/>` : `<circle cx="60" cy="94" r="1.6" fill="#f4f4f4"/><circle cx="60" cy="102" r="1.6" fill="#f4f4f4"/>`}`;
  if (kind === "chef") s += `<circle cx="55" cy="86" r="2" fill="#c9c9d6"/><circle cx="65" cy="86" r="2" fill="#c9c9d6"/><circle cx="55" cy="96" r="2" fill="#c9c9d6"/><circle cx="65" cy="96" r="2" fill="#c9c9d6"/><path d="M52 74 Q60 80 68 74" stroke="#E0245E" stroke-width="4" fill="none"/>`;
  if (kind === "pajama") s += `<path d="M42 84 h36 M40 94 h40 M40 104 h40" stroke="#ffffff" stroke-width="3" opacity=".6"/>`;
  if (kind === "jersey") s += `<text x="60" y="100" text-anchor="middle" font-size="16" font-weight="900" font-family="Nunito,sans-serif" fill="#fff">10</text>`;
  if (kind === "smock") s += `<circle cx="52" cy="96" r="3" fill="#E0245E"/><circle cx="66" cy="90" r="2.4" fill="#2b6cb0"/><circle cx="62" cy="102" r="2.6" fill="#2ECC71"/>`;
  if (kind === "cardigan") s += `<path d="M60 74 V112" stroke="${dk(top)}" stroke-width="2"/><circle cx="56" cy="86" r="1.6" fill="#fff"/><circle cx="56" cy="96" r="1.6" fill="#fff"/>`;
  if (kind === "hoodie") s += `<path d="M48 74 Q60 84 72 74" stroke="${dk(top)}" stroke-width="4" fill="none"/><path d="M48 98 h24" stroke="${dk(top)}" stroke-width="3"/>`;
  if (kind === "vest") s += `<rect x="47" y="80" width="8" height="8" rx="2" fill="${dk(top)}"/><rect x="65" y="80" width="8" height="8" rx="2" fill="${dk(top)}"/>`;
  if (kind === "coat") s += `<path d="M60 74 V116" stroke="${dk(top)}" stroke-width="2"/><path d="M40 98 h40" stroke="${dk(top)}" stroke-width="4"/><path d="M50 74 L60 86 L70 74" fill="${dk(top)}"/>`;
  if (kind === "robe") s += `<path d="M44 96 l3 -6 l3 6 l-6 -3 h6z M68 104 l2 -4 l2 4 l-4 -2 h4z" fill="#FFD45A"/>`;
  if (kind === "space") s += `<rect x="50" y="84" width="20" height="13" rx="4" fill="#24303f"/><circle cx="56" cy="90.5" r="2.4" fill="#6FFF00" class="glow"/><circle cx="64" cy="90.5" r="2.4" fill="#7CF6FF"/>`;
  if (kind === "jacket") s += `<path d="M60 74 V110" stroke="#777" stroke-width="2"/><path d="M46 80 l6 4 M74 80 l-6 4" stroke="#999" stroke-width="2"/>`;
  if (dress) s += `<path d="M40 104 Q60 110 80 104" stroke="${dk(top)}" stroke-width="2" fill="none"/>`;
  if (P.extra === "straps") s += `<path d="M46 76 L48 108 M74 76 L72 108" stroke="#7a4a1a" stroke-width="3.5"/>`;
  /* arms */
  const arm = (x1, y1, x2, y2, cls = "") => `<g class="${cls}"><path d="M${x1} ${y1} L${x2} ${y2}" stroke="${P.robot ? top : top}" stroke-width="9" stroke-linecap="round"/><circle cx="${x2}" cy="${y2}" r="5" fill="${P.robot ? "#c9d2de" : skin}"/></g>`;
  const A = { side: [arm(42, 80, 36, 104), arm(78, 80, 86, 102)], wave: [arm(42, 80, 36, 104), arm(78, 80, 94, 56, "arm-w")], hold: [arm(42, 82, 52, 98), arm(78, 82, 68, 98)],
    kick: [arm(42, 80, 32, 98), arm(78, 80, 90, 92)], phone: [arm(42, 80, 36, 104), arm(78, 80, 78, 52)], shop: [arm(42, 80, 32, 106), arm(78, 80, 88, 106)], sleep: [arm(42, 80, 36, 104), arm(78, 80, 86, 102)] }[pose];
  s += A[0] + (pose === "hold" ? "" : A[1]);
  /* neck + head */
  if (!P.robot) s += `<rect x="55" y="62" width="10" height="12" rx="4" fill="${skin}"/><circle cx="36" cy="45" r="5" fill="${skin}"/><circle cx="84" cy="45" r="5" fill="${skin}"/><circle cx="60" cy="42" r="24" fill="${skin}"/>`;
  else s += `<rect x="54" y="62" width="12" height="12" fill="#6b7788"/><rect x="36" y="18" width="48" height="44" rx="12" fill="${top}"/><line x1="60" y1="18" x2="60" y2="8" stroke="#6b7788" stroke-width="3" class="tl"/><circle cx="60" cy="7" r="4" fill="#FF5C7A" class="glow"/><rect x="42" y="30" width="36" height="22" rx="8" fill="#24303f"/>`;
  /* face */
  const m = P.mouth || "smile";
  if (P.robot) s += `<g class="ey"><rect x="48" y="36" width="8" height="8" rx="3" fill="#7CF6FF"/><rect x="64" y="36" width="8" height="8" rx="3" fill="#7CF6FF"/></g><path class="mo" d="M52 48 h16" stroke="#7CF6FF" stroke-width="2.5" stroke-linecap="round"/>`;
  else {
    s += m === "sleep" ? `<path d="M46 45 Q51 48 56 45 M64 45 Q69 48 74 45" stroke="#2a1a14" stroke-width="2.4" fill="none" stroke-linecap="round"/>`
      : `<g class="ey"><ellipse cx="51" cy="44" rx="3.3" ry="4" fill="#24170f"/><ellipse cx="69" cy="44" rx="3.3" ry="4" fill="#24170f"/><circle cx="52.3" cy="42.6" r="1.2" fill="#fff"/><circle cx="70.3" cy="42.6" r="1.2" fill="#fff"/></g>`;
    s += `<ellipse cx="45" cy="52" rx="4" ry="2.4" fill="#ff7f8f" opacity=".35"/><ellipse cx="75" cy="52" rx="4" ry="2.4" fill="#ff7f8f" opacity=".35"/>`;
    s += m === "open" ? `<path class="mo" d="M54 53 Q60 62 66 53 Z" fill="#7a2a2a"/><path d="M56.5 57 Q60 60 63.5 57" fill="#ff8f9a"/>` : m === "o" ? `<ellipse class="mo" cx="60" cy="55" rx="3" ry="3.6" fill="#7a2a2a"/>` : m === "sleep" ? `<ellipse cx="60" cy="55" rx="2.4" ry="1.8" fill="#7a2a2a"/>` : `<path class="mo" d="M53 53 Q60 59 67 53" stroke="#7a2a2a" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
    if (P.old) s += `<path d="M44 38 Q48 36 52 38 M68 38 Q72 36 76 38" stroke="#bbb" stroke-width="1.6" fill="none"/>`;
    if (P.beard) s += `<path d="M42 50 Q44 66 60 68 Q76 66 78 50 Q72 60 60 60 Q48 60 42 50Z" fill="${P.beard}"/><path class="mo" d="M54 55 Q60 59 66 55" stroke="#7a2a2a" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;
  }
  /* hair front */
  const H = { short: `M36 40 Q35 16 60 16 Q85 16 84 40 Q78 27 62 29 Q46 26 36 40Z`, long: `M35 44 Q36 16 60 16 Q84 16 85 44 Q76 26 60 30 Q44 26 35 44Z`, bob: `M35 44 Q36 17 60 17 Q84 17 85 44 Q74 30 58 32 Q46 30 35 44Z`,
    ponytail: `M36 40 Q35 16 60 16 Q85 16 84 40 Q76 26 60 28 Q44 26 36 40Z`, bun: `M37 40 Q37 18 60 18 Q83 18 83 40 Q76 28 60 29 Q44 28 37 40Z`,
    curly: "", spiky: `M36 38 L34 20 L44 26 L46 12 L54 22 L60 8 L66 22 L74 12 L76 26 L86 20 L84 38 Q74 28 60 28 Q46 28 36 38Z` }[hs];
  if (hs === "curly") s += [[40, 28], [48, 20], [58, 16], [68, 18], [77, 24], [83, 33], [37, 36]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="${hc}"/>`).join("");
  else if (H) s += `<path d="${H}" fill="${hc}"/>`;
  if (hs === "bun") s += `<circle cx="60" cy="14" r="9" fill="${hc}"/>`;
  if (hs === "ponytail") s += `<rect x="78" y="30" width="6" height="5" rx="2" fill="#E0245E"/>`;
  /* glasses */
  if (P.glasses === "round") s += `<g fill="none" stroke="#3a2a22" stroke-width="2"><circle cx="51" cy="44" r="6.5"/><circle cx="69" cy="44" r="6.5"/><path d="M57.5 44 h5"/></g>`;
  if (P.glasses === "square") s += `<g fill="none" stroke="#2a2a35" stroke-width="2"><rect x="44" y="39" width="13" height="10" rx="3"/><rect x="63" y="39" width="13" height="10" rx="3"/><path d="M57 43 h6"/></g>`;
  if (P.glasses === "sun") s += `<rect x="42" y="38" width="15" height="10" rx="4" fill="#15121b"/><rect x="63" y="38" width="15" height="10" rx="4" fill="#15121b"/><path d="M57 42 h6" stroke="#15121b" stroke-width="2.4"/><path d="M45 41 h5" stroke="#fff" stroke-width="1.5" opacity=".6"/>`;
  /* hats */
  const [ht, hcol] = P.hat || [];
  if (ht === "cap") s += `<path d="M35 34 Q36 14 60 14 Q84 14 85 34Z" fill="${hcol}"/><path d="M60 30 Q86 28 98 34 Q84 38 66 36Z" fill="${dk(hcol)}"/><circle cx="60" cy="14" r="2.5" fill="${dk(hcol)}"/>`;
  if (ht === "capb") s += `<path d="M35 34 Q36 14 60 14 Q84 14 85 34Z" fill="${hcol}"/><path d="M60 30 Q34 28 22 34 Q36 38 54 36Z" fill="${dk(hcol)}"/>`;
  if (ht === "chef") s += `<rect x="40" y="16" width="40" height="12" rx="3" fill="#f4f4f8"/><circle cx="46" cy="10" r="9" fill="#fff"/><circle cx="60" cy="5" r="10" fill="#fff"/><circle cx="74" cy="10" r="9" fill="#fff"/>`;
  if (ht === "beret") s += `<ellipse cx="56" cy="20" rx="26" ry="9" fill="${hcol}" transform="rotate(-10 56 20)"/><circle cx="52" cy="10" r="3" fill="${hcol}"/>`;
  if (ht === "detective") s += `<ellipse cx="60" cy="24" rx="32" ry="6" fill="${dk(hcol)}"/><path d="M40 24 Q42 6 60 6 Q78 6 80 24Z" fill="${hcol}"/><rect x="40" y="18" width="40" height="5" fill="#2a1a10"/>`;
  if (ht === "safari") s += `<ellipse cx="60" cy="26" rx="34" ry="7" fill="${dk(hcol)}"/><path d="M38 26 Q40 6 60 6 Q80 6 82 26Z" fill="${hcol}"/><rect x="38" y="20" width="44" height="5" fill="#8a6a3a"/>`;
  if (ht === "wizard") s += `<path d="M34 28 L60 -14 L86 28Z" fill="${hcol}"/><ellipse cx="60" cy="28" rx="30" ry="6" fill="${dk(hcol)}"/><path d="M58 4 l2 -5 l2 5 l-5 -3 h6z M66 16 l1.5 -3 l1.5 3 l-3.5 -2 h4z" fill="#FFD45A"/>`;
  if (ht === "nightcap") s += `<path d="M35 32 Q38 10 62 12 Q84 14 98 36 Q90 30 84 30 Q80 28 85 34Z" fill="${hcol}"/><circle cx="98" cy="38" r="5" fill="#fff"/><path d="M35 32 Q60 24 85 34" stroke="#fff" stroke-width="5" fill="none"/>`;
  if (ht === "band") s += `<path d="M37 30 Q60 22 83 30 L83 36 Q60 28 37 36Z" fill="${hcol}"/>`;
  if (ht === "flower") s += `<g transform="translate(78 22)"><circle r="4" cx="-4" fill="${hcol}"/><circle r="4" cx="4" fill="${hcol}"/><circle r="4" cy="-4" fill="${hcol}"/><circle r="4" cy="4" fill="${hcol}"/><circle r="3" fill="#FFD45A"/></g>`;
  if (ht === "helmet") s += `<circle cx="60" cy="42" r="31" fill="rgba(124,246,255,.12)" stroke="#dfe7f5" stroke-width="5"/><path d="M40 28 Q48 18 60 17" stroke="#fff" stroke-width="3" fill="none" opacity=".7" stroke-linecap="round"/><line x1="82" y1="18" x2="90" y2="6" stroke="#dfe7f5" stroke-width="3" class="tl"/><circle cx="91" cy="5" r="4" fill="#6FFF00" class="glow tl"/>`;
  /* front arm for hold pose + prop */
  if (pose === "hold") s += A[1];
  const PP = { side: [96, 110, 26], wave: [26, 112, 24], hold: [60, 106, 30], kick: [98, 130, 22], phone: [80, 54, 18], shop: [92, 120, 26], sleep: [0, 0, 0] }[pose];
  if (P.prop && pose !== "sleep") s += `<text class="pp" x="${PP[0]}" y="${PP[1]}" font-size="${PP[2]}" text-anchor="middle">${P.prop}</text>`;
  if (pose === "shop") s += `<text class="pp" x="26" y="122" font-size="24" text-anchor="middle">🛍️</text>`;
  return s + `</svg>`;
};
/* ===== racer avatars (F1-style, invented names, no real people or team brands) ===== */
const RACERS = [
  { n: "George Rivers", sk: 0, hair: ["short", "#4a2e1c"], top: ["#1fb8a6", "race"], c2: "#111418", num: "36", pants: "#1fb8a6" },
  { n: "Kimi Valente", sk: 0, hair: ["curly", "#3b2416"], top: ["#1fb8a6", "race"], c2: "#111418", num: "21", pants: "#1fb8a6" },
  { n: "Charles Morel", sk: 0, hair: ["short", "#2a1a10"], top: ["#d7262e", "race"], c2: "#ffffff", num: "61", pants: "#d7262e" },
  { n: "Lewis Hart", sk: 3, hair: ["short", "#120c08"], top: ["#d7262e", "race"], c2: "#ffffff", num: "4", pants: "#d7262e", beard: "#120c08" },
  { n: "Max Stone", sk: 0, hair: ["short", "#6b4a2b"], top: ["#1b2550", "race"], c2: "#e8b400", num: "33", pants: "#1b2550" },
  { n: "Isack Duval", sk: 2, hair: ["short", "#120c08"], top: ["#1b2550", "race"], c2: "#e8b400", num: "60", pants: "#1b2550" },
  { n: "Lando Brooks", sk: 1, hair: ["curly", "#2a1a10"], top: ["#ff8000", "race"], c2: "#14141a", num: "10", pants: "#ff8000" },
  { n: "Oscar Reed", sk: 0, hair: ["short", "#c99a5a"], top: ["#ff8000", "race"], c2: "#14141a", num: "18", pants: "#ff8000" },
  { n: "Liam Carter", sk: 0, hair: ["short", "#b5651d"], top: ["#1f5bff", "race"], c2: "#ffffff", num: "29", pants: "#1f5bff" },
  { n: "Arvid Lund", sk: 1, hair: ["curly", "#120c08"], top: ["#1f5bff", "race"], c2: "#ffffff", num: "47", pants: "#1f5bff" },
  { n: "Fernando Vega", sk: 1, hair: ["short", "#3b2416"], top: ["#0e7c5a", "race"], c2: "#c8ff3a", num: "41", pants: "#0e7c5a", beard: "#3b2416" },
  { n: "Lance Miller", sk: 0, hair: ["short", "#2a1a10"], top: ["#0e7c5a", "race"], c2: "#c8ff3a", num: "81", pants: "#0e7c5a" },
  { n: "Sergio Ramos", sk: 2, hair: ["short", "#120c08"], top: ["#8e99a8", "race"], c2: "#14141a", num: "2", pants: "#8e99a8" },
  { n: "Valtteri Koski", sk: 0, hair: ["short", "#e8dcb0"], top: ["#8e99a8", "race"], c2: "#14141a", num: "71", pants: "#8e99a8", beard: "#c9b27a" }];
RACERS.forEach(r => { r.pose = "side"; r.mouth = r.mouth || "smile"; r.prop = ""; r.helmet = true; });
const _personSVG = personSVG;
personSVG = function (P, o = {}) {
  let s = _personSVG(P, o); if (P.top[1] !== "race") return s;
  const c = o.acc || P.top[0], c2 = P.c2;
  const det = `<path d="M44 76 L42 110 M76 76 L78 110" stroke="${c2}" stroke-width="4"/><path d="M50 74 Q60 79 70 74 L70 79 Q60 84 50 79Z" fill="${c2}"/>
    <circle cx="60" cy="95" r="9" fill="#fff"/><text x="60" y="99.5" text-anchor="middle" font-size="${P.num.length > 1 ? 11 : 13}" font-weight="900" font-family="Nunito,sans-serif" fill="${c}">${P.num}</text>
    <path d="M49 104 h22" stroke="${c2}" stroke-width="3"/>`;
  const helmet = `<g class="pp"><circle cx="95" cy="108" r="13" fill="${c}"/><path d="M83 106 Q95 96 107 106 L107 110 Q95 103 83 110Z" fill="#15121b"/><path d="M84 103 Q95 94 106 103" stroke="#7CF6FF" stroke-width="1.6" fill="none" opacity=".7"/><path d="M89 116 h12" stroke="${c2}" stroke-width="3" stroke-linecap="round"/><circle cx="90" cy="99" r="2" fill="#fff" opacity=".6"/></g>`;
  /* insert suit details before the arms (after torso) and the helmet at the end */
  s = s.replace(/(<path d="M38 110 Q36 76[^"]*" fill="[^"]*"\/>)/, `$1${det}`);
  return s.replace("</svg>", helmet + "</svg>");
};
