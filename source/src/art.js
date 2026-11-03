/* ===== ART: all illustrations drawn in SVG ===== */
const ART = {};

/* ---- tape motifs, 300x300 box, duotone screen-print ---- */
ART.motif = (m, C) => {
  const ink = C.ink, blue = C.blue, red = C.red, cream = C.cream;
  switch (m) {
  case "clock": return `<circle cx="150" cy="150" r="128" fill="${red}"/><g stroke="${ink}" stroke-width="6" fill="${cream}">
    <circle cx="150" cy="160" r="78"/><circle cx="92" cy="86" r="26" fill="${blue}"/><circle cx="208" cy="86" r="26" fill="${blue}"/></g>
    <path d="M110 232 l-18 26 M190 232 l18 26" stroke="${ink}" stroke-width="8" stroke-linecap="round"/>
    <path d="M150 160 V112 M150 160 L184 178" stroke="${ink}" stroke-width="8" stroke-linecap="round"/><circle cx="150" cy="160" r="7" fill="${ink}"/>
    <g fill="${ink}">${[0,1,2,3,4,5,6,7,8,9,10,11].map(k=>{const a=k*Math.PI/6;return `<circle cx="${150+62*Math.sin(a)}" cy="${160-62*Math.cos(a)}" r="${k%3?2.5:5}"/>`}).join("")}</g>`;
  case "cup": return `<circle cx="150" cy="130" r="118" fill="${blue}"/><ellipse cx="150" cy="238" rx="118" ry="24" fill="${cream}" stroke="${ink}" stroke-width="6"/>
    <path d="M78 150 h144 v34 c0 40 -32 62 -72 62 s-72 -22 -72 -62z" fill="${red}" stroke="${ink}" stroke-width="6"/>
    <path d="M222 166 c34 -4 40 40 4 46" fill="none" stroke="${ink}" stroke-width="8"/><ellipse cx="150" cy="150" rx="72" ry="12" fill="${ink}"/>
    <path d="M120 120 c-14 -20 14 -32 0 -56 M150 118 c-14 -22 14 -34 0 -62 M180 120 c-14 -20 14 -32 0 -56" fill="none" stroke="${cream}" stroke-width="7" stroke-linecap="round"/>`;
  case "train": return `<path d="M0 170 L80 110 L130 150 L190 80 L300 170 Z" fill="${blue}"/><circle cx="236" cy="70" r="30" fill="${red}"/>
    <path d="M40 300 L132 170 M260 300 L168 170 M70 270 h160 M96 236 h108 M116 206 h68" stroke="${ink}" stroke-width="6"/>
    <rect x="104" y="96" width="92" height="100" rx="14" fill="${cream}" stroke="${ink}" stroke-width="6"/><rect x="118" y="110" width="64" height="34" rx="4" fill="${blue}" stroke="${ink}" stroke-width="5"/>
    <circle cx="150" cy="172" r="10" fill="${red}" stroke="${ink}" stroke-width="5"/>`;
  case "lamp": return `<rect x="20" y="20" width="260" height="190" fill="${blue}"/><g stroke="${cream}" stroke-width="5">${[1,2,3].map(k=>`<path d="M${20+k*65} 20 V210"/>`).join("")}${[1,2].map(k=>`<path d="M20 ${20+k*63} H280"/>`).join("")}</g>
    <path d="M70 120 L150 250 H230 Z" fill="${cream}" opacity=".85"/><path d="M40 268 H260" stroke="${ink}" stroke-width="10" stroke-linecap="round"/>
    <path d="M200 262 L170 170 L96 128" fill="none" stroke="${ink}" stroke-width="9" stroke-linecap="round"/><path d="M50 150 L96 96 L132 132 Z" fill="${red}" stroke="${ink}" stroke-width="6"/>
    <rect x="160" y="236" width="70" height="20" fill="${cream}" stroke="${ink}" stroke-width="5"/>`;
  case "bag": return `<circle cx="150" cy="150" r="124" fill="${red}"/><path d="M84 120 h132 l16 150 h-164z" fill="${cream}" stroke="${ink}" stroke-width="6"/>
    <path d="M118 124 v-26 a32 32 0 0 1 64 0 v26" fill="none" stroke="${ink}" stroke-width="8"/>
    <g transform="rotate(-14 210 200)"><rect x="176" y="176" width="78" height="46" rx="6" fill="${blue}" stroke="${ink}" stroke-width="5"/><text x="215" y="208" text-anchor="middle" font-family="Bricolage Grotesque,Arial,sans-serif" font-weight="700" font-size="24" fill="${cream}">50%</text></g>`;
  case "sun": return `<circle cx="150" cy="118" r="70" fill="${red}"/><g stroke="${red}" stroke-width="8" stroke-linecap="round">${[0,1,2,3,4,5,6,7].map(k=>{const a=k*Math.PI/4;return `<path d="M${150+88*Math.cos(a)} ${118+88*Math.sin(a)} L${150+112*Math.cos(a)} ${118+112*Math.sin(a)}"/>`}).join("")}</g>
    <path d="M30 228 L270 228 L250 290 L50 290 Z" fill="${blue}" stroke="${ink}" stroke-width="6"/><g stroke="${cream}" stroke-width="6"><path d="M90 228 L80 290 M150 228 V290 M210 228 L220 290 M40 258 H260"/></g>
    <path d="M222 200 c0 -16 30 -16 30 0 v24 h-30z" fill="${cream}" stroke="${ink}" stroke-width="5"/>`;
  case "key": return `<rect x="70" y="20" width="160" height="260" rx="80" fill="${blue}"/><path d="M150 40 L150 280" stroke="${red}" stroke-width="0"/>
    <g transform="rotate(-30 150 160)"><circle cx="150" cy="78" r="44" fill="none" stroke="${cream}" stroke-width="18"/><circle cx="150" cy="78" r="44" fill="none" stroke="${ink}" stroke-width="5"/>
    <rect x="141" y="118" width="18" height="140" fill="${cream}" stroke="${ink}" stroke-width="5"/><rect x="159" y="206" width="34" height="16" fill="${cream}" stroke="${ink}" stroke-width="5"/><rect x="159" y="234" width="24" height="16" fill="${cream}" stroke="${ink}" stroke-width="5"/></g>
    <circle cx="232" cy="236" r="26" fill="${red}"/><path d="M226 244 l6 -18 l6 18z" fill="${ink}"/>`;
  }
  return "";
};

ART.cover = (u, i) => {
  const C = { ink: "#18181C", blue: "#2346A8", red: "#D9472B", cream: "#F1E8D4" };
  const words = u.name.toUpperCase().split(" ");
  const lines = words.length > 2 ? [words.slice(0, words.length - 1).join(" "), words[words.length - 1]] : words.length === 2 && u.name.length > 11 ? words : [u.name.toUpperCase()];
  const fs = lines.length === 1 ? (u.name.length > 8 ? 74 : 92) : 76;
  return `<svg viewBox="0 0 474 900" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
  <defs><pattern id="ht${i}" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="4.5" cy="4.5" r="1.6" fill="${C.ink}" opacity=".22"/></pattern></defs>
  <rect width="474" height="900" fill="${C.cream}"/><rect x="14" y="14" width="446" height="872" fill="none" stroke="${C.ink}" stroke-width="2" opacity=".55"/>
  <text x="237" y="66" text-anchor="middle" font-family="Bricolage Grotesque,Arial,sans-serif" font-weight="600" font-size="15" letter-spacing="3.4" fill="${C.ink}">A MINARAVERSE TAPE · No.${String(i + 1).padStart(2, "0")}</text>
  ${lines.map((t, k) => `<text x="237" y="${150 + k * fs * .95}" text-anchor="middle" font-family="'Fraunces',Georgia,serif" font-size="${fs}" fill="${C.ink}" letter-spacing="-1">${esc(t)}</text>`).join("")}
  <g transform="translate(37 ${lines.length > 1 ? 300 : 250}) scale(1.333)">${ART.motif(u.motif, C)}<rect width="300" height="300" fill="url(#ht${i})"/></g>
  <text x="40" y="836" font-family="Bricolage Grotesque,Arial,sans-serif" font-weight="600" font-size="15" letter-spacing="2.4" fill="${C.blue}">ENGLISH · ${u.lv}</text>
  <rect x="356" y="806" width="80" height="44" fill="none" stroke="${C.ink}" stroke-width="3"/><text x="396" y="838" text-anchor="middle" font-family="'Fraunces',Georgia,serif" font-size="30" fill="${C.ink}">VHS</text>
  <rect width="474" height="900" fill="none" stroke="#00000022" stroke-width="10"/></svg>`;
};

/* ---- pirate world ---- */
ART.ship = () => {
  /* sail: quad with billowing curve and shading */
  const sail = (x1, y1, x2, y2, x3, y3, x4, y4, bulge, id) => `<path d="M${x1} ${y1} Q${(x1 + x2) / 2} ${y1 - 6} ${x2} ${y2} Q${x2 + bulge} ${(y2 + y3) / 2} ${x3} ${y3} Q${(x3 + x4) / 2} ${y3 + 10} ${x4} ${y4} Q${x1 + bulge * .9} ${(y1 + y4) / 2} ${x1} ${y1}Z" fill="url(#sl)"/>
    <path d="M${x1} ${y1} Q${(x1 + x2) / 2} ${y1 - 6} ${x2} ${y2} Q${x2 + bulge} ${(y2 + y3) / 2} ${x3} ${y3} Q${(x3 + x4) / 2} ${y3 + 10} ${x4} ${y4} Q${x1 + bulge * .9} ${(y1 + y4) / 2} ${x1} ${y1}Z" fill="url(#ss)" opacity=".55"/>
    <g stroke="#8c7350" stroke-width="1" opacity=".35" fill="none">${[.25, .5, .75].map(f => `<path d="M${x1 + (x2 - x1) * f} ${y1 + (y2 - y1) * f - 4} Q${x1 + (x2 - x1) * f + bulge * .8} ${(y1 + y4) / 2} ${x4 + (x3 - x4) * f} ${y4 + (y3 - y4) * f + 6}"/>`).join("")}</g>`;
  return `<svg viewBox="0 0 600 612" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
<defs>
 <linearGradient id="sl" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#cdbb98"/><stop offset=".45" stop-color="#efe3c6"/><stop offset="1" stop-color="#d9c7a2"/></linearGradient>
 <linearGradient id="ss" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff6dc" stop-opacity="0"/><stop offset=".7" stop-color="#8a6c45" stop-opacity=".25"/><stop offset="1" stop-color="#5b4329" stop-opacity=".55"/></linearGradient>
 <linearGradient id="hl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7b4f2c"/><stop offset=".5" stop-color="#55331b"/><stop offset="1" stop-color="#2a180c"/></linearGradient>
 <linearGradient id="ms" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#4a2e18"/><stop offset=".5" stop-color="#8a5a32"/><stop offset="1" stop-color="#4a2e18"/></linearGradient>
 <linearGradient id="dk" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1c2236"/><stop offset="1" stop-color="#2d3550"/></linearGradient>
 <radialGradient id="lg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffd27a" stop-opacity=".95"/><stop offset=".4" stop-color="#ffb347" stop-opacity=".45"/><stop offset="1" stop-color="#ffb347" stop-opacity="0"/></radialGradient>
</defs>
<g stroke="#2b1c10" stroke-width="1.1" fill="none" opacity=".7">
 <path d="M168 66 L48 430 M300 34 L590 330 M420 92 L590 330 M168 66 L300 34 L420 92 M300 120 L120 440 M420 170 L530 420 M168 66 L96 440 M300 34 L210 440 M420 92 L360 432"/>
 ${Array.from({ length: 7 }, (_, k) => `<path d="M${62 + k * 6} ${390 - k * 30} L${106 + k * 3} ${392 - k * 30}"/>`).join("")}
</g>
<path d="M486 404 L598 318" stroke="url(#ms)" stroke-width="11" stroke-linecap="round"/>
<path d="M512 386 Q556 356 594 322 L560 392Z" fill="url(#sl)" opacity=".95"/>
<rect x="163" y="58" width="11" height="404" fill="url(#ms)"/><rect x="294" y="22" width="13" height="440" fill="url(#ms)"/><rect x="414" y="84" width="11" height="378" fill="url(#ms)"/>
<path d="M432 124 C470 170 520 250 556 322 L432 322 Z" fill="url(#dk)"/><path d="M432 124 C470 170 520 250 556 322" stroke="#0d1220" stroke-width="2" fill="none"/>
${sail(96, 122, 244, 118, 238, 226, 104, 230, 18)}
${sail(88, 240, 254, 236, 246, 352, 98, 356, 22)}
${sail(214, 60, 386, 58, 378, 180, 224, 184, 22)}
${sail(204, 192, 398, 190, 390, 326, 214, 330, 26)}
${sail(210, 338, 394, 336, 386, 416, 220, 420, 16)}
${sail(360, 130, 482, 128, 476, 230, 368, 234, 16)}
${sail(354, 242, 488, 240, 480, 350, 364, 354, 20)}
<g fill="#4a2e18">${[[84, 116, 172], [78, 232, 184], [202, 54, 196], [192, 186, 214], [198, 332, 204], [348, 124, 146], [342, 236, 154]].map(([x, y, w]) => `<rect x="${x}" y="${y}" width="${w}" height="7" rx="3.5"/>`).join("")}</g>
<path d="M278 26 h44 l-7 24 h-30z" fill="#4a2e18"/><path d="M152 102 h38 l-5 14 h-28z" fill="#4a2e18"/>
<g class="flag"><path d="M300 4 C318 0 330 12 352 6 L350 34 C330 40 318 28 300 32Z" fill="#14161c"/><circle cx="324" cy="17" r="5" fill="#efe6d2"/><path d="M316 26 l16 -4 M316 22 l16 4" stroke="#efe6d2" stroke-width="2"/></g>
<path d="M300 6 v26" stroke="#4a2e18" stroke-width="3"/>
<path d="M40 452 C34 412 40 386 54 374 L176 396 L470 410 C502 406 532 392 556 374 C552 418 530 468 496 504 C430 552 210 562 108 534 C72 522 50 496 40 452Z" fill="url(#hl)"/>
<g stroke="#2a170b" stroke-width="1.4" opacity=".7" fill="none">${[418, 440, 462, 484, 506].map((y, k) => `<path d="M${46 + k * 4} ${y} C160 ${y + 18 + k * 2} 380 ${y + 14 + k * 2} ${540 - k * 10} ${y - 30 + k * 4}"/>`).join("")}</g>
<path d="M54 374 L176 396 L470 410 C502 406 532 392 556 374 L552 394 C522 418 498 426 470 428 L176 414 L58 394Z" fill="#c9a66b"/>
<path d="M48 436 C120 456 330 464 524 444" stroke="#9a6a3a" stroke-width="10" fill="none"/>
<g fill="#1a0f07">${[128, 186, 244, 302, 360, 418].map(x => `<rect x="${x - 9}" y="${468 - (x > 400 ? 6 : 0)}" width="18" height="15" rx="2"/>`).join("")}</g>
<g fill="#d8b56e">${[128, 186, 244, 302, 360, 418].map(x => `<rect x="${x - 9}" y="${466 - (x > 400 ? 6 : 0)}" width="18" height="2.5"/>`).join("")}</g>
<path d="M22 346 h60 v62 h-60z" fill="#5b371c"/><path d="M18 340 h68 v8 h-68z" fill="#3a2211"/>
<g fill="#ffcf73"><rect x="30" y="358" width="18" height="18"/><rect x="54" y="358" width="18" height="18"/></g>
<circle cx="40" cy="367" r="34" fill="url(#lg)" class="lantern"/><circle cx="560" cy="372" r="22" fill="url(#lg)" class="lantern"/>
<circle cx="560" cy="372" r="5" fill="#ffd47e"/>
<path d="M546 380 c18 -10 34 -4 40 8 c-14 -2 -22 4 -26 14 z" fill="#c7a46a"/>
</svg>`;
};

ART.captain = () => `<svg viewBox="0 0 500 600" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
<ellipse cx="236" cy="588" rx="150" ry="12" fill="#00000022"/>
<path d="M176 470 L170 584 h46 l6 -110z M262 470 L270 584 h48 l-10 -114z" fill="#1d1a17"/>
<path d="M164 572 h62 v16 h-70z M262 572 h64 l6 16 h-70z" fill="#3b2a1d"/>
<path d="M168 300 L150 486 Q236 500 330 486 L306 300 Z" fill="#2f3a52"/>
<path d="M150 214 Q236 184 324 214 L352 470 Q330 488 308 470 L296 330 L180 330 L170 470 Q146 488 124 470 Z" fill="#8E2B22"/>
<path d="M196 210 L236 300 L276 210 Q256 202 236 202 Q216 202 196 210Z" fill="#F1E8D4"/>
<path d="M186 316 h104 v20 h-104z" fill="#1d1a17"/><rect x="226" y="314" width="24" height="24" fill="#D9A93A"/>
<g fill="#D9A93A">${[236,262,288].map(y=>`<circle cx="206" cy="${y}" r="5"/><circle cx="268" cy="${y}" r="5"/>`).join("")}</g>
<path d="M150 214 Q112 250 108 330 Q120 356 146 340 L160 262Z" fill="#7a241d"/>
<path d="M324 214 Q370 236 382 290 L404 266 Q414 254 426 262 L396 318 Q378 330 364 316 L334 262Z" fill="#7a241d"/>
<circle cx="132" cy="344" r="20" fill="#E0A982"/>
<g transform="rotate(-38 420 252)"><rect x="396" y="236" width="96" height="22" rx="6" fill="#B98A3A"/><rect x="470" y="232" width="34" height="30" rx="6" fill="#8a6326"/></g>
<circle cx="414" cy="266" r="18" fill="#E0A982"/>
<rect x="216" y="168" width="40" height="40" fill="#D49A74"/>
<ellipse cx="236" cy="128" rx="52" ry="60" fill="#E0A982"/>
<path d="M186 128 Q190 214 236 220 Q282 214 286 128 Q270 170 236 168 Q202 170 186 128Z" fill="#3a2418"/>
<path d="M212 158 Q236 150 260 158" stroke="#2a180f" stroke-width="7" fill="none" stroke-linecap="round"/>
<circle cx="216" cy="118" r="5" fill="#1d1a17"/><circle cx="256" cy="118" r="5" fill="#1d1a17"/>
<path d="M204 104 q12 -8 24 0 M246 104 q12 -8 24 0" stroke="#2a180f" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M150 82 Q236 20 322 82 Q340 92 330 104 Q236 70 142 104 Q132 92 150 82Z" fill="#1d1a17"/>
<path d="M176 76 Q236 -6 296 76 Z" fill="#1d1a17"/><path d="M146 98 Q236 66 326 98" stroke="#D9A93A" stroke-width="5" fill="none"/>
<circle cx="236" cy="52" r="8" fill="#F1E8D4"/></svg>`;

ART.chest = () => `<svg viewBox="0 0 446 392" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
<ellipse cx="223" cy="376" rx="200" ry="14" fill="#00000022"/>
<path d="M60 70 Q223 -20 386 70 L386 150 L60 150Z" fill="#7a4524"/><path d="M60 150 h326 l-10 -18 h-306z" fill="#5a3019"/>
<g fill="#E7C46A"><ellipse cx="223" cy="160" rx="150" ry="30"/><circle cx="150" cy="150" r="16"/><circle cx="196" cy="138" r="16"/><circle cx="250" cy="140" r="16"/><circle cx="300" cy="150" r="16"/></g>
<rect x="56" y="166" width="334" height="196" rx="10" fill="#8a4e2c"/><g fill="#5a3019"><rect x="56" y="200" width="334" height="12"/><rect x="56" y="300" width="334" height="12"/><rect x="96" y="166" width="20" height="196"/><rect x="330" y="166" width="20" height="196"/></g>
<rect x="200" y="226" width="46" height="56" rx="6" fill="#D9A93A"/><circle cx="223" cy="250" r="7" fill="#3b2a1d"/></svg>`;

ART.palm = () => `<svg viewBox="0 0 910 1284" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
<path d="M360 1284 C380 1080 380 880 420 700 C450 560 470 470 500 400 L530 410 C506 500 490 580 466 710 C432 900 430 1090 440 1284Z" fill="#7a5532"/>
<g stroke="#5a3d22" stroke-width="5">${[1200,1110,1020,930,840,750,660,580,500].map((y,k)=>`<path d="M${372+k*8} ${y} q38 -14 74 0" fill="none"/>`).join("")}</g>
<g fill="#4E6B35">
<path d="M510 400 C420 300 250 300 60 420 C230 360 380 380 500 430Z"/>
<path d="M510 400 C430 230 300 130 110 140 C290 200 410 280 494 420Z"/>
<path d="M510 400 C560 220 690 120 880 150 C700 200 600 280 528 420Z"/>
<path d="M510 400 C640 330 790 360 900 470 C760 410 630 410 524 432Z"/>
<path d="M510 400 C520 260 520 120 470 20 C560 130 560 280 530 410Z"/></g>
<g fill="#6F8A45"><path d="M510 400 C450 330 330 330 200 380 C330 360 430 380 500 420Z"/><path d="M510 400 C600 300 720 280 820 320 C710 320 610 360 528 420Z"/><path d="M510 400 C470 290 380 220 260 200 C380 250 450 320 496 416Z"/></g>
<g fill="#5a3d22"><circle cx="492" cy="430" r="22"/><circle cx="530" cy="438" r="20"/><circle cx="508" cy="460" r="20"/></g></svg>`;

ART.bush = (w, h, seed) => {
  let s = seed; const r = () => (s = (s * 9301 + 49297) % 233280) / 233280;
  let leaves = "";
  for (let k = 0; k < 26; k++) {
    const x = w * (.05 + r() * .9), y = h * (.35 + r() * .65), L = h * (.35 + r() * .45), a = -70 + r() * 140, c = ["#3E5A2A", "#4E6B35", "#6F8A45", "#5d7a3a"][k % 4];
    leaves += `<path transform="translate(${x} ${y}) rotate(${a})" d="M0 0 C${L * .3} ${-L * .5} ${L * .3} ${-L * .9} 0 ${-L} C${-L * .3} ${-L * .9} ${-L * .3} ${-L * .5} 0 0Z" fill="${c}"/>`;
  }
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" overflow="visible">${leaves}</svg>`;
};
ART.cloud = `<svg viewBox="0 0 300 80" width="300" height="80"><path fill="#d3cebe" d="M0 79c14-3 26-3 38-10-4-16 10-30 30-26 6-22 42-34 62-16 16-12 42-6 50 14 10-2 18 2 22 8 24 22 66 26 98 30z"/></svg>`;
ART.anchor = (sw = 2.4, two = true) => `<svg viewBox="0 0 26 30" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round"><circle cx="13" cy="4.5" r="2.8"/><path d="M13 7.5V28M7 12h12M2.5 19c.6 5.5 5.5 9 10.5 9s9.9-3.5 10.5-9"/>${two ? `<path d="m1 21 1.5-2.5L5 20.5M25 21l-1.5-2.5-2.5 2"/>` : ""}</svg>`;

/* ---- wild world: scenes 1768x1000 and animals ---- */
ART.scene = (k, id) => {
  const S = {
    savanna: ["#BFD1DB", "#F2E2C2", "#A9A56E", "#C9A65A", "#B48E44"],
    grass: ["#E9CFA0", "#F4E3C3", "#B59A5C", "#D2AE62", "#B38A3E"],
    ice: ["#AFC6D6", "#E8EFF3", "#C9D8E2", "#F3F6F7", "#DCE6EC"],
    reef: ["#1D5C6B", "#2E8A8F", "#1A4B58", "#A8794A", "#7D5A38"],
    arctic: ["#C9D4DE", "#F1F2EE", "#9FB3C2", "#F6F5F0", "#DDE3E6"],
    meadow: ["#BFD9E6", "#F4EBCF", "#8DAA5A", "#9DBA62", "#6F8F3E"],
    ocean: ["#0E3A5B", "#1F6B8E", "#0A2C46", "#0C3350", "#08243A"]
  }[k];
  const under = k === "reef" || k === "ocean";
  let extra = "";
  if (k === "savanna" || k === "grass") extra = `<g fill="#3F4A2A">${[[260, 560, 1], [1420, 540, 1.3], [1640, 590, .8]].map(([x, y, s]) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-6 0 L-4 -120 L4 -120 L6 0Z"/><ellipse cx="0" cy="-130" rx="130" ry="26"/><ellipse cx="-50" cy="-150" rx="70" ry="18"/><ellipse cx="60" cy="-148" rx="66" ry="16"/></g>`).join("")}</g>`;
  if (k === "ice" || k === "arctic") extra = `<g fill="#FFFFFF">${[[120, 640, 420], [700, 700, 520], [1300, 650, 380]].map(([x, y, w]) => `<path d="M${x} ${y} l${w * .2} -40 l${w * .5} 10 l${w * .3} 30z"/>`).join("")}</g><path d="M0 760 H1768" stroke="#9FB3C2" stroke-width="3"/>`;
  if (k === "meadow") extra = `<g>${Array.from({ length: 40 }, (_, j) => { const x = (j * 151) % 1768, y = 760 + (j * 37) % 220; return `<circle cx="${x}" cy="${y}" r="${8 + j % 5}" fill="${["#F2C14E", "#E8735A", "#FFFFFF", "#C77DBA"][j % 4]}"/>`; }).join("")}</g>`;
  const rays = under ? `<g fill="#FFFFFF" opacity=".08">${[200, 520, 900, 1300].map(x => `<path d="M${x} 0 L${x + 80} 0 L${x + 300} 1000 L${x + 120} 1000Z"/>`).join("")}</g>` : "";
  const reefRocks = k === "reef" ? `<g fill="${S[3]}"><ellipse cx="300" cy="960" rx="420" ry="120"/><ellipse cx="1500" cy="980" rx="460" ry="140"/></g><g fill="#E8735A">${[180, 260, 1380, 1460, 1560].map(x => `<path d="M${x} 900 q-10 -60 6 -110 q14 50 6 110z"/>`).join("")}</g>` : "";
  const bubbles = under ? `<g fill="none" stroke="#FFFFFF" stroke-opacity=".35" stroke-width="3">${[[300, 400], [340, 300], [1480, 260], [1500, 180], [960, 140]].map(([x, y], j) => `<circle cx="${x}" cy="${y}" r="${8 + j * 3}"/>`).join("")}</g>` : "";
  return `<svg viewBox="0 0 1768 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
  <defs><linearGradient id="sk${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${S[0]}"/><stop offset=".65" stop-color="${S[1]}"/></linearGradient>
  <linearGradient id="gr${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${S[3]}"/><stop offset="1" stop-color="${S[4]}"/></linearGradient></defs>
  <rect width="1768" height="1000" fill="url(#sk${id})"/>
  ${under ? "" : `<g fill="#FFFFFF" opacity=".75"><ellipse cx="300" cy="150" rx="160" ry="34"/><ellipse cx="420" cy="130" rx="110" ry="40"/><ellipse cx="1300" cy="210" rx="200" ry="36"/><ellipse cx="1420" cy="186" rx="120" ry="42"/><ellipse cx="900" cy="90" rx="140" ry="26"/></g>`}
  ${rays}
  <path d="M0 600 C300 520 520 560 760 540 C1040 516 1300 580 1768 530 V1000 H0Z" fill="${S[2]}" opacity="${under ? .6 : 1}"/>
  <path d="M0 700 C400 660 800 690 1200 670 C1450 660 1600 680 1768 670 V1000 H0Z" fill="url(#gr${id})" ${under ? 'opacity=".55"' : ""}/>
  ${extra}${reefRocks}${bubbles}
  ${k === "savanna" || k === "grass" ? `<g stroke="#8A6A2E" stroke-width="3" opacity=".55">${Array.from({ length: 70 }, (_, j) => { const x = (j * 97) % 1768, y = 760 + (j * 53) % 230; return `<path d="M${x} ${y} l${-6 + j % 12} -${30 + j % 25}"/>`; }).join("")}</g>` : ""}
  </svg>`;
};

ART.animal = {
elephant: `<svg viewBox="0 0 620 460" xmlns="http://www.w3.org/2000/svg"><ellipse cx="300" cy="448" rx="230" ry="12" fill="#00000026"/>
<path d="M100 300 C80 180 160 110 290 110 C400 110 460 160 470 230 C480 300 450 340 440 360 L436 440 H396 L392 370 C350 380 260 380 220 372 L214 440 H174 L168 360 C130 350 106 330 100 300Z" fill="#6E6359"/>
<path d="M104 250 C96 270 90 300 98 330 L80 380" stroke="#5c524a" stroke-width="10" fill="none" stroke-linecap="round"/>
<g fill="#625850"><rect x="250" y="360" width="44" height="80" rx="10"/><rect x="330" y="360" width="44" height="82" rx="10"/></g>
<path d="M420 150 C470 110 540 120 556 180 C566 220 552 250 540 280 C536 320 540 360 556 400 C562 416 546 424 538 410 C516 370 510 320 512 290 C480 300 446 280 432 250Z" fill="#7a6e63"/>
<path d="M400 130 C360 120 330 150 330 200 C330 250 360 280 400 290 C430 260 440 180 400 130Z" fill="#857a6e"/>
<path d="M520 260 C560 280 600 300 612 330 C596 316 560 300 520 290Z" fill="#EFE7D6"/><circle cx="494" cy="200" r="6" fill="#1d1a17"/>
<g stroke="#5c524a" stroke-width="3" fill="none" opacity=".6"><path d="M536 330 h18 M538 350 h18 M542 370 h16 M300 160 q40 20 80 6 M200 200 q30 30 70 20"/></g></svg>`,
cheetah: `<svg viewBox="0 0 620 400" xmlns="http://www.w3.org/2000/svg"><ellipse cx="300" cy="388" rx="230" ry="10" fill="#00000022"/>
<path d="M120 200 C150 160 250 150 340 156 C420 160 470 150 500 130 C520 120 556 124 566 146 C576 168 560 186 540 190 C520 200 500 214 480 220 C470 260 470 320 476 380 H452 L444 260 C400 270 300 270 250 264 C230 300 220 340 230 380 H206 L196 300 C170 320 150 350 150 380 H126 L132 300 C116 270 110 230 120 200Z" fill="#D9A35B"/>
<path d="M124 210 C80 220 50 260 30 320 C26 336 44 340 50 326 C66 280 90 250 128 238Z" fill="#D9A35B"/>
<path d="M556 156 c6 4 10 10 10 16 c-8 2 -16 0 -20 -6z" fill="#1d1a17"/><circle cx="540" cy="146" r="5" fill="#1d1a17"/><path d="M538 152 C536 170 528 182 520 190" stroke="#1d1a17" stroke-width="4" fill="none"/>
<path d="M512 126 l10 -18 l10 16z" fill="#c48d48"/>
<g fill="#3a2a18">${Array.from({ length: 46 }, (_, j) => `<circle cx="${150 + (j * 53) % 330}" cy="${172 + (j * 29) % 80}" r="${4 + j % 3}"/>`).join("")}<circle cx="70" cy="290" r="5"/><circle cx="90" cy="262" r="5"/><circle cx="48" cy="318" r="4"/></g>
<path d="M260 248 C300 256 380 256 440 248" stroke="#EFE0C4" stroke-width="10" opacity=".7" fill="none"/></svg>`,
penguin: `<svg viewBox="0 0 360 560" xmlns="http://www.w3.org/2000/svg"><ellipse cx="180" cy="548" rx="110" ry="10" fill="#00000022"/>
<path d="M180 40 C240 40 270 100 272 170 C276 260 300 360 288 450 C280 510 240 540 180 540 C120 540 80 510 72 450 C60 360 84 260 88 170 C90 100 120 40 180 40Z" fill="#1d2230"/>
<path d="M180 150 C226 160 246 240 248 330 C250 430 230 510 180 516 C130 510 110 430 112 330 C114 240 134 160 180 150Z" fill="#F4F2EC"/>
<path d="M150 150 C150 120 210 120 210 150 C226 170 236 200 226 230 C212 190 196 176 180 176 C164 176 148 190 134 230 C124 200 134 170 150 150Z" fill="#F2B544"/>
<path d="M110 220 C70 270 60 360 80 420 C96 380 104 320 114 270Z M250 220 C290 270 300 360 280 420 C264 380 256 320 246 270Z" fill="#141824"/>
<path d="M200 96 C226 104 248 110 256 120 C240 122 220 118 204 112Z" fill="#E08A3A"/><circle cx="196" cy="88" r="5" fill="#F4F2EC"/>
<path d="M140 536 h40 l-6 12 h-34z M180 536 h40 l-4 12 h-34z" fill="#3a3a3a"/></svg>`,
octopus: `<svg viewBox="0 0 560 520" xmlns="http://www.w3.org/2000/svg">
<g stroke="#B04A30" stroke-width="30" fill="none" stroke-linecap="round">
<path d="M220 270 C180 330 120 360 70 340 C40 330 40 300 60 300"/><path d="M240 290 C220 380 170 440 120 470 C96 484 80 470 92 456"/>
<path d="M270 300 C270 390 250 460 220 500"/><path d="M300 300 C320 390 350 450 400 480 C420 492 436 476 420 466"/>
<path d="M330 286 C380 340 440 360 490 340 C516 330 514 304 494 306"/><path d="M200 250 C140 250 90 220 70 180 C60 160 80 150 90 166"/>
<path d="M350 250 C410 250 460 220 480 180 C490 160 470 150 460 166"/><path d="M285 296 C300 360 300 420 320 470"/></g>
<g fill="#F2C9A8">${Array.from({ length: 22 }, (_, j) => `<circle cx="${80 + (j * 47) % 420}" cy="${300 + (j * 31) % 180}" r="5"/>`).join("")}</g>
<path d="M280 40 C370 40 410 120 400 200 C390 270 340 300 280 300 C220 300 170 270 160 200 C150 120 190 40 280 40Z" fill="#C2573A"/>
<path d="M230 80 C250 60 300 60 320 80" stroke="#D9765A" stroke-width="12" fill="none" stroke-linecap="round"/>
<circle cx="236" cy="216" r="20" fill="#F4E6C8"/><circle cx="324" cy="216" r="20" fill="#F4E6C8"/><rect x="226" y="210" width="20" height="8" rx="4" fill="#1d1a17"/><rect x="314" y="210" width="20" height="8" rx="4" fill="#1d1a17"/></svg>`,
bear: `<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg"><ellipse cx="320" cy="408" rx="250" ry="10" fill="#0000001f"/>
<path d="M90 230 C90 150 180 110 300 112 C400 114 470 130 520 170 C560 200 600 210 620 240 C628 254 616 266 600 264 C580 262 560 266 548 280 C530 300 510 310 490 310 L488 400 H446 L436 316 C380 326 280 326 230 316 L220 400 H178 L170 320 C120 310 90 280 90 230Z" fill="#EFE7D6"/>
<g fill="#E2D8C2"><rect x="240" y="300" width="50" height="100" rx="18"/><rect x="380" y="300" width="50" height="100" rx="18"/></g>
<path d="M520 170 C540 150 560 150 568 166" fill="none" stroke="#D8CDB4" stroke-width="10" stroke-linecap="round"/>
<circle cx="612" cy="244" r="8" fill="#1d1a17"/><circle cx="574" cy="210" r="5" fill="#1d1a17"/>
<path d="M120 200 C200 180 300 176 400 186" stroke="#D8CDB4" stroke-width="16" fill="none" opacity=".7" stroke-linecap="round"/></svg>`,
bee: `<svg viewBox="0 0 560 460" xmlns="http://www.w3.org/2000/svg">
<g fill="#FFFFFF" fill-opacity=".55" stroke="#9fb6c4" stroke-width="3"><ellipse cx="250" cy="120" rx="80" ry="120" transform="rotate(-30 250 120)"/><ellipse cx="320" cy="110" rx="70" ry="110" transform="rotate(20 320 110)"/></g>
<ellipse cx="290" cy="280" rx="170" ry="110" fill="#E8B23A"/>
<g fill="#2a2018"><path d="M190 196 C210 230 214 330 196 364 C180 360 168 350 160 340 C170 300 170 240 176 206Z"/><path d="M260 172 C280 220 284 340 262 390 C250 392 240 390 230 388 C246 330 246 230 236 176Z"/><path d="M340 174 C360 220 360 340 340 384 C330 386 320 388 310 390 C326 330 326 230 314 172Z"/><path d="M420 214 C440 250 438 320 420 350 L398 362 C410 320 410 250 398 196Z"/></g>
<circle cx="110" cy="270" r="74" fill="#2a2018"/><circle cx="84" cy="246" r="22" fill="#4a3b2a"/>
<path d="M90 200 C70 150 50 130 30 120 M120 200 C120 150 110 120 96 100" stroke="#2a2018" stroke-width="7" fill="none" stroke-linecap="round"/>
<path d="M460 280 l40 0" stroke="#2a2018" stroke-width="8" stroke-linecap="round"/>
<g stroke="#2a2018" stroke-width="8" stroke-linecap="round" fill="none"><path d="M200 380 l-20 60 M270 390 l0 60 M340 384 l20 60"/></g></svg>`,
whale: `<svg viewBox="0 0 900 380" xmlns="http://www.w3.org/2000/svg">
<path d="M40 200 C60 120 200 90 360 100 C540 110 700 150 790 180 C820 150 850 110 890 90 C880 140 860 180 840 200 C860 220 880 260 890 300 C850 290 820 260 790 230 C700 270 520 300 340 296 C180 292 50 270 40 200Z" fill="#3B5C86"/>
<path d="M60 220 C120 270 260 290 360 288 C500 286 640 262 760 226 C640 240 480 250 360 248 C240 246 130 236 60 220Z" fill="#9FB6CC"/>
<g stroke="#2E4A6E" stroke-width="3" fill="none" opacity=".7">${Array.from({ length: 12 }, (_, j) => `<path d="M${90 + j * 22} ${232 + j} q120 18 240 14"/>`).join("")}</g>
<path d="M300 250 C320 300 300 340 260 360 C280 320 280 290 270 260Z" fill="#2E4A6E"/>
<circle cx="120" cy="184" r="7" fill="#0f1c2c"/><path d="M60 214 C90 222 120 224 150 222" stroke="#0f1c2c" stroke-width="4" fill="none"/>
<g fill="#C9DCEA" opacity=".6">${Array.from({ length: 30 }, (_, j) => `<circle cx="${200 + (j * 61) % 520}" cy="${130 + (j * 23) % 80}" r="${2 + j % 3}"/>`).join("")}</g></svg>`
};

ART.emblem = `<svg viewBox="0 0 66 66" width="66" height="66" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="33" cy="33" r="31"/><circle cx="33" cy="33" r="26"/><path d="M20 38 c0-10 6-16 14-16 s13 5 13 13 c0 4-2 6-4 7 v6 h-3 v-5 c-2 1-5 1-8 1 v4 h-3 v-5 c-5-1-9-2-9-5z M43 33 c3 1 5 4 4 9"/><circle cx="38" cy="30" r="1" fill="currentColor"/></svg>`;

/* ===== Where Next? route skyline: one landmark per city, Baku → Sydney ===== */
ART.route = () => {
  const L = {
    baku: `<g><path d="M-58 0 C-60 -120 -40 -190 -14 -232 C-24 -170 -26 -80 -22 0Z"/><path d="M-20 0 C-22 -150 0 -250 30 -300 C20 -220 16 -110 16 0Z"/><path d="M18 0 C18 -110 36 -180 62 -214 C54 -150 52 -70 52 0Z"/>
      <g class="glass">${[-40, -2, 36].map(x => `<path d="M${x} -10 L${x} -${x === -2 ? 230 : 170}" stroke-dasharray="3 7"/>`).join("")}</g></g>`,
    istanbul: `<g><path d="M-120 0 V-70 H120 V0Z"/><path d="M-80 -70 A80 80 0 0 1 80 -70Z"/><path d="M-26 -148 A26 26 0 0 1 26 -148Z"/><rect x="-6" y="-170" width="12" height="22"/>
      ${[-150, 150].map(x => `<rect x="${x - 7}" y="-210" width="14" height="210"/><path d="M${x - 9} -210 L${x} -250 L${x + 9} -210Z"/>`).join("")}
      ${[-60, -20, 20, 60].map(x => `<path d="M${x - 14} -70 A14 14 0 0 1 ${x + 14} -70Z"/>`).join("")}</g>`,
    paris: `<g><path d="M-95 0 C-55 -60 -24 -160 -10 -330 L10 -330 C24 -160 55 -60 95 0 L62 0 C40 -40 20 -60 0 -60 C-20 -60 -40 -40 -62 0Z"/><rect x="-50" y="-112" width="100" height="10"/><rect x="-28" y="-215" width="56" height="8"/><rect x="-2" y="-370" width="4" height="40"/></g>`,
    london: `<g><rect x="-34" y="-240" width="68" height="240"/><rect x="-42" y="-260" width="84" height="26"/><path d="M-34 -260 L0 -340 L34 -260Z"/><rect x="-2" y="-370" width="4" height="34"/>
      <circle cx="0" cy="-200" r="22" class="face"/><path d="M0 -200 V-214 M0 -200 L10 -196" class="hand"/>
      <rect x="40" y="-120" width="120" height="120"/>${[52, 80, 108, 136].map(x => `<path d="M${x} -120 L${x + 7} -140 L${x + 14} -120Z"/>`).join("")}</g>`,
    newyork: `<g><path d="M-70 0 L-60 -60 H60 L70 0Z"/><path d="M-40 -60 L-34 -110 H34 L40 -60Z"/><path d="M-22 -110 C-26 -170 -20 -220 -12 -240 L14 -240 C20 -220 24 -170 20 -110Z"/>
      <path d="M-14 -240 L-24 -262 L-10 -252 L-8 -276 L0 -256 L8 -276 L10 -252 L24 -262 L14 -240Z"/><path d="M14 -226 L30 -300 L38 -298 L24 -222Z"/><path d="M26 -300 C24 -320 44 -320 40 -300Z" class="torch"/></g>`,
    tokyo: `<g><path d="M-170 0 L-40 -150 C-26 -164 -14 -164 0 -150 L130 0Z" class="fuji"/><path d="M-60 -126 L-40 -150 C-26 -164 -14 -164 0 -150 L18 -128 L4 -134 L-10 -122 L-26 -134 L-42 -120Z" class="snow"/>
      <path d="M70 0 L92 -160 L98 -260 L104 -160 L126 0 Z"/><rect x="82" y="-110" width="32" height="8"/><rect x="88" y="-180" width="20" height="6"/>
      <path d="M-120 0 V-40 M-60 0 V-40 M-136 -40 H-44 M-140 -50 H-40" stroke-width="10" class="torii"/></g>`,
    sydney: `<g><path d="M-160 0 H170 V-20 H-160Z"/>${[[-120, 90, 10], [-60, 120, 4], [0, 140, -4], [60, 110, -10], [110, 80, -16]].map(([x, h, r]) => `<path class="shell" transform="rotate(${r} ${x} -20)" d="M${x - 40} -20 C${x - 36} -${h * .6 + 20} ${x - 8} -${h + 20} ${x + 30} -${h + 20} C${x + 14} -${h * .5 + 20} ${x + 10} -40 ${x + 20} -20Z"/>`).join("")}
      <path d="M140 -20 C150 -90 200 -150 260 -150 C320 -150 370 -90 380 -20" fill="none" stroke-width="7" class="bridge"/></g>`
  };
  const keys = ["baku", "istanbul", "paris", "london", "newyork", "tokyo", "sydney"];
  const step = 300;
  return `<svg class="rt-svg" viewBox="0 0 2200 420" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
    <defs><linearGradient id="rtg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a2f4a"/><stop offset="1" stop-color="#1c1828"/></linearGradient>
    <linearGradient id="rtw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a2540" stop-opacity=".2"/><stop offset="1" stop-color="#14121c"/></linearGradient></defs>
    <path d="M0 330 C300 300 600 340 900 318 C1200 296 1500 336 1800 314 C1950 304 2100 320 2200 312 V420 H0Z" fill="url(#rtw)"/>
    ${keys.map((k, i) => `<g class="lm lm-${k}" data-i="${i}" transform="translate(${170 + i * step} 360)"><g class="lm-body">${L[k]}</g><g class="lm-lights">${Array.from({ length: 5 }, (_, j) => `<circle cx="${-60 + j * 30}" cy="${-20 - (j * 37) % 90}" r="2.6"/>`).join("")}</g></g>`).join("")}
    <path class="rt-path" d="M170 382 ${keys.slice(1).map((_, i) => `Q${170 + i * step + step / 2} 410 ${170 + (i + 1) * step} 382`).join(" ")}"/>
    <path class="rt-path done" d="M170 382 ${keys.slice(1).map((_, i) => `Q${170 + i * step + step / 2} 410 ${170 + (i + 1) * step} 382`).join(" ")}"/>
    ${keys.map((k, i) => `<g class="rt-dot" data-i="${i}" transform="translate(${170 + i * step} 382)"><circle r="9"/></g>`).join("")}
    <g class="rt-plane"><path d="M-18 0 L14 -2 L22 0 L14 2Z M-2 -1 L-10 -14 L-4 -14 L8 -1Z M-2 1 L-10 14 L-4 14 L8 1Z M-16 -1 L-20 -7 L-16 -7 L-12 -1Z" /></g>
  </svg>`;
};
