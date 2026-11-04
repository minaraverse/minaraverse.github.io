/* iPhone: wake the audio engine on the very first touch so every later sound plays */
(() => { const unlock = () => { try { SAC = SAC || new (window.AudioContext || window.webkitAudioContext)(); if (SAC.state === "suspended") SAC.resume();
    const b = SAC.createBuffer(1, 1, 22050), src = SAC.createBufferSource(); src.buffer = b; src.connect(SAC.destination); src.start(0); } catch (e) {}
  if (SAC && SAC.state === "running") ["pointerdown", "touchend", "keydown"].forEach(ev => removeEventListener(ev, unlock, true)); };
  ["pointerdown", "touchend", "keydown"].forEach(ev => addEventListener(ev, unlock, true)); })();
/* ===== Duolingo-style UI sounds: one delegated listener, only on navigation/switch elements (answers, duels, gifts keep their own sounds) ===== */
document.addEventListener("click", e => {
  if (typeof sfx !== "function" || !document.documentElement.classList.contains("ap-mode")) return;
  const t = e.target;
  const tab = t.closest(".ap-tabs a"); if (tab) { if (!tab.classList.contains("on")) { sfx("nav"); if (typeof buzz === "function") buzz(8); } return; }
  if (t.closest(".ap-back, .ap-x, .fr-back, [data-ce-x], [data-no]")) { sfx("back"); return; }
  if (t.closest("[data-setlang], [data-snd], [data-mail], .ad-tabs button, [data-qr], [data-age]")) { sfx("toggle"); return; }
  if (t.closest("[data-world], [data-so-duel], [data-so-play], [data-so-gift], [data-so-gt], [data-so-cheer], .so-opt, .dr-node, [data-kid], [data-racer], [data-chest]")) return; /* have their own sounds */
  if (t.closest(".ap-item, .ap-flag, .dr-course, .ap-course, [data-go], [data-cert], [data-share], [data-copy], [data-so-goal], .sv-new-b, .sv-guest-b, .sv-main-b")) sfx("open");
}, true);
