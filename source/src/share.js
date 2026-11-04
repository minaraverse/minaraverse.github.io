/* ===== Share the site: WhatsApp, Telegram, copy link, or the phone's own share menu ===== */
Object.assign(UI.en, { shBtn: "Share the site", shH: "Send Minaraverse to a friend", shP: "Learning English together is more fun. Send the link in one tap.", shTxt: "Minaraverse — learn English through stories and games 👇", shCopy: "Copy link", shCopied: "Link copied ✓", shMore: "More…", shWa: "WhatsApp", shTg: "Telegram" });
Object.assign(UI.az, { shBtn: "Saytı paylaş", shH: "Minaraverse-i dostuna göndər", shP: "İngilis dilini birlikdə öyrənmək daha maraqlıdır. Linki bir toxunuşla göndər.", shTxt: "Minaraverse — ingilis dilini hekayələr və oyunlarla öyrən 👇", shCopy: "Linki kopyala", shCopied: "Link kopyalandı ✓", shMore: "Digər…", shWa: "WhatsApp", shTg: "Telegram" });
Object.assign(UI.ru, { shBtn: "Поделиться сайтом", shH: "Отправь Minaraverse другу", shP: "Учить английский вместе интереснее. Отправь ссылку в одно касание.", shTxt: "Minaraverse — учи английский через истории и игры 👇", shCopy: "Скопировать ссылку", shCopied: "Ссылка скопирована ✓", shMore: "Ещё…", shWa: "WhatsApp", shTg: "Telegram" });
const SITE_URL = "https://minaraverse.github.io";
function openShare() {
  document.querySelectorAll(".sh-ov").forEach(o => o.remove());
  const url = SITE_URL, txt = L("shTxt"), enc = encodeURIComponent;
  const ov = document.createElement("div"); ov.className = "sh-ov";
  ov.innerHTML = `<div class="sh-card" role="dialog" aria-label="${esc(L("shBtn"))}"><button class="sh-x" aria-label="Close">✕</button><h3>${L("shH")}</h3><p class="sh-url">${url.replace("https://", "")}</p>
    <div class="sh-grid"><a class="sh-b wa" href="https://wa.me/?text=${enc(txt + "\n" + url)}" target="_blank" rel="noopener"><span><svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg></span><b>${L("shWa")}</b></a>
      <a class="sh-b tg" href="https://t.me/share/url?url=${enc(url)}&text=${enc(txt)}" target="_blank" rel="noopener"><span><svg viewBox="0 0 24 24" fill="#fff"><path d="M21.9 4.3 18.7 19c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9-8.2c.4-.4-.1-.6-.6-.2L6.3 12.6l-4.8-1.5c-1-.3-1-1 .2-1.5L20.4 2.9c.9-.3 1.7.2 1.5 1.4z"/></svg></span><b>${L("shTg")}</b></a>
      <button class="sh-b cp" data-shcopy><span>🔗</span><b>${L("shCopy")}</b></button>
      ${navigator.share ? `<button class="sh-b more" data-shmore><span>📤</span><b>${L("shMore")}</b></button>` : ""}</div></div>`;
  document.body.appendChild(ov); requestAnimationFrame(() => ov.classList.add("in"));
  const close = () => { ov.classList.remove("in"); setTimeout(() => ov.remove(), 250); };
  ov.onclick = async e => {
    if (e.target === ov || e.target.closest(".sh-x")) return close();
    const c = e.target.closest("[data-shcopy]"); if (c) { const b = c.querySelector("b");
      try { await navigator.clipboard.writeText(url); } catch (er) { const t = document.createElement("textarea"); t.value = url; document.body.appendChild(t); t.select(); try { document.execCommand("copy"); } catch (x) {} t.remove(); }
      b.textContent = L("shCopied"); c.classList.add("ok"); setTimeout(close, 1100); return; }
    if (e.target.closest("[data-shmore]")) { try { await navigator.share({ title: "Minaraverse", text: txt, url }); } catch (er) {} close(); return; }
    if (e.target.closest(".sh-b")) setTimeout(close, 300); };
  addEventListener("hashchange", close, { once: true });
}
document.addEventListener("click", e => { if (e.target.closest("[data-siteshare]")) { e.preventDefault(); openShare(); } });
