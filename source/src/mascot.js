/* ---------- Safi: the Safiverse mascot — a little golden star with a violet orbit ring ---------- */
function safiStarPts(cx, cy, R, r) {
  const p = []; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r : R; p.push((cx + rr * Math.cos(a)).toFixed(1) + "," + (cy + rr * Math.sin(a)).toFixed(1)); }
  return p.join(" ");
}
let SAFI_N = 0;
/* mood: idle · happy · sad · wave */
function safiSVG(mood) {
  const id = "sf" + (++SAFI_N), m = mood || "idle", star = safiStarPts(60, 64, 44, 24);
  const eyes = m === "happy" ? `<path d="M44 62q5-7 10 0M66 62q5-7 10 0" fill="none" stroke="#3a2205" stroke-width="3.6" stroke-linecap="round"/>`
    : `<ellipse cx="49" cy="61" rx="4.6" ry="6" fill="#2a1804"/><ellipse cx="71" cy="61" rx="4.6" ry="6" fill="#2a1804"/><circle cx="50.6" cy="58.6" r="1.9" fill="#fff"/><circle cx="72.6" cy="58.6" r="1.9" fill="#fff"/>`
      + (m === "sad" ? `<path d="M42 53l10-4M78 53l-10-4" stroke="#7a4a0c" stroke-width="2.6" stroke-linecap="round"/>` : "");
  const mouth = m === "happy" ? `<path d="M52 72q8 10 16 0z" fill="#7a2a1a"/><path d="M55 76q5 3 10 0" fill="#ff8a8a"/>`
    : m === "sad" ? `<path d="M53 77q7-6 14 0" fill="none" stroke="#3a2205" stroke-width="3" stroke-linecap="round"/>`
    : `<path d="M53 72q7 6 14 0" fill="none" stroke="#3a2205" stroke-width="3" stroke-linecap="round"/>`;
  const arm = "";
  return `<svg class="safi sf-${m}" viewBox="0 0 120 120" aria-hidden="true"><defs>
    <radialGradient id="${id}g" cx="40%" cy="32%" r="75%"><stop offset="0" stop-color="#FFF4C2"/><stop offset=".45" stop-color="#FFD15C"/><stop offset="1" stop-color="#E89A1E"/></radialGradient>
    <linearGradient id="${id}o" x1="0" x2="1"><stop offset="0" stop-color="#B49CFF"/><stop offset="1" stop-color="#7C5CFF"/></linearGradient></defs>
    <ellipse class="sf-orb" cx="60" cy="86" rx="54" ry="12" fill="none" stroke="url(#${id}o)" stroke-width="5" transform="rotate(-14 60 86)"/>
    ${arm}<polygon points="${star}" fill="url(#${id}g)" stroke="url(#${id}g)" stroke-width="12" stroke-linejoin="round"/>
    
    <ellipse cx="41" cy="71" rx="6" ry="3.6" fill="#ff8f8f" opacity=".55"/><ellipse cx="79" cy="71" rx="6" ry="3.6" fill="#ff8f8f" opacity=".55"/>${eyes}${mouth}
    <path class="sf-orb" d="M6 86A54 12 0 0 0 114 86" fill="none" stroke="url(#${id}o)" stroke-width="5" stroke-linecap="round" transform="rotate(-14 60 86)"/>
    <path class="sf-tw" d="M104 18l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5z" fill="#FFE9A8"/></svg>`;
}
/* Safi with a speech bubble */
function safiSay(say, mood, cls) { return `<span class="safi-wrap ${cls || ""}">${safiSVG(mood)}${say ? `<i>${say}</i>` : ""}</span>`; }
