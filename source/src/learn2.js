/* ===== Safiverse: speaking practice (phone's own speech recognition), level certificates, email on/off ===== */
Object.assign(UI.en, { spT: "Speaking practice", spP: "Say it out loud — the phone checks", spSay: "Say this sentence", spTap: "Tap 🎙 and speak", spListen: "Listening…", spGood: "Great pronunciation!", spTry: "Almost — try again",
  spHeard: "I heard:", spSkip: "Skip", spNext: "Next", spNo: "This phone cannot recognise speech. Try Safari or Chrome, or skip this practice.", spMicNo: "Allow the microphone to practise speaking.",
  spDone: "Speaking practice done!", ceT: "Certificate", ceNew: "Congratulations! Your certificate is ready", ceSave: "Save / share", ceOpen: "Open certificate",
  maT: "Email reminders", maOn: "On", maOff: "Off" });
Object.assign(UI.az, { spT: "Danışıq məşqi", spP: "Ucadan de — telefon yoxlayır", spSay: "Bu cümləni de", spTap: "🎙 bas və danış", spListen: "Dinləyirəm…", spGood: "Əla tələffüz!", spTry: "Az qaldı — yenə cəhd et",
  spHeard: "Eşitdiyim:", spSkip: "Keç", spNext: "Növbəti", spNo: "Bu telefon səsi tanıya bilmir. Safari və ya Chrome-da yoxla, ya da bu məşqi keç.", spMicNo: "Danışıq məşqi üçün mikrofona icazə ver.",
  spDone: "Danışıq məşqi bitdi!", ceT: "Sertifikat", ceNew: "Təbriklər! Sertifikatın hazırdır", ceSave: "Yadda saxla / paylaş", ceOpen: "Sertifikatı aç",
  maT: "Email xatırlatmaları", maOn: "Açıq", maOff: "Bağlı" });
Object.assign(UI.ru, { spT: "Разговорная практика", spP: "Скажи вслух — телефон проверит", spSay: "Скажи это предложение", spTap: "Нажми 🎙 и говори", spListen: "Слушаю…", spGood: "Отличное произношение!", spTry: "Почти — попробуй ещё",
  spHeard: "Я услышал:", spSkip: "Пропустить", spNext: "Дальше", spNo: "Этот телефон не умеет распознавать речь. Попробуй Safari или Chrome, или пропусти практику.", spMicNo: "Разреши доступ к микрофону для практики.",
  spDone: "Разговорная практика пройдена!", ceT: "Сертификат", ceNew: "Поздравляем! Твой сертификат готов", ceSave: "Сохранить / поделиться", ceOpen: "Открыть сертификат",
  maT: "Напоминания по email", maOn: "Вкл", maOff: "Выкл" });

/* ---------- speaking practice ---------- */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
function speakView(root, shell) {
  const top = Math.max(0, curUnit()), pool = [];
  for (let u = 0; u <= top; u++) { const U = UNITS[u]; if (!U) continue; (U.S || []).forEach(x => pool.push(x)); if (!(U.S || []).length) U.W.forEach(w => pool.push({ en: w.en, az: w.az, ru: w.ru })); }
  const items = pickN(pool.filter(x => toks(x.en).length <= 9), 6), st = { i: 0, tries: 0, got: 0, heard: "", res: null, on: false };
  const words = s => dNorm(s).split(" ").filter(Boolean);
  const check = (target, heard) => { const h = words(heard); return words(target).map(w => ({ w, ok: h.includes(w) || h.some(x => x.replace(/'/g, "") === w.replace(/'/g, "")) })); };
  const draw = () => { const it = items[st.i];
    if (!it) { root.innerHTML = shell("practice", `<div class="ap-mascot">${mascot("🎉")}</div><h1 class="ap-h">${L("spDone")}</h1><p class="ap-p">✓ ${st.got} / ${items.length}</p><a class="ap-cta" href="#app-practice">${L("apContinue")}</a>`); sfx("win"); return; }
    const marks = st.res ? `<p class="sp-marks">${st.res.map(x => `<span class="${x.ok ? "ok" : "no"}">${esc(x.w)}</span>`).join(" ")}</p>` : "";
    root.innerHTML = shell("practice", `<a href="#app-practice" class="fr-back">← ${L("apPractice")}</a><h1 class="ap-h">🎙 ${L("spT")}</h1><small class="so-qn">${st.i + 1} / ${items.length}</small>
      <div class="ap-card sp-card"><small>${L("spSay")}</small><b class="sp-en">${esc(it.en)}</b>${sayBtn(it.en)}<p class="sp-tr">${esc(nat(it) || "")}</p></div>
      ${SR ? `<button class="sp-mic ${st.on ? "on" : ""}" data-mic aria-label="${L("spTap")}">🎙</button><p class="ap-p sp-st" role="status">${st.on ? L("spListen") : st.res ? (st.ok ? "✅ " + L("spGood") : "🔁 " + L("spTry")) : L("spTap")}</p>${st.heard ? `<p class="sp-heard">${L("spHeard")} «${esc(st.heard)}»</p>` : ""}${marks}`
        : `<p class="ap-p sp-no">${L("spNo")}</p>`}
      <div class="sp-row">${st.ok ? `<button class="ap-cta" data-next>${L("spNext")} →</button>` : `<button class="dr-link" data-skip>${L("spSkip")}</button>`}</div>`);
    wire(); };
  const listen = () => { const it = items[st.i]; let rec; try { rec = new SR(); } catch (e) { st.on = false; return draw(); }
    rec.lang = "en-US"; rec.interimResults = false; rec.maxAlternatives = 3; st.on = true; st.heard = ""; draw();
    rec.onresult = ev => { const alts = [...ev.results[0]].map(a => a.transcript); let best = null, bestN = -1;
      alts.forEach(t => { const r = check(it.en, t), n = r.filter(x => x.ok).length; if (n > bestN) { bestN = n; best = { t, r }; } });
      st.heard = best.t; st.res = best.r; st.tries++; st.ok = bestN / best.r.length >= 0.8;
      if (st.ok) { st.got++; addXp(2); sfx("ok"); if (typeof buzz === "function") buzz(20); } else sfx("no"); };
    rec.onerror = ev => { st.on = false; if (ev.error === "not-allowed" || ev.error === "service-not-allowed") toast(L("spMicNo")); draw(); };
    rec.onend = () => { st.on = false; if (st.tries >= 3 && !st.ok) st.ok = true; draw(); };
    try { rec.start(); } catch (e) { st.on = false; draw(); } };
  const wire = () => { root.onclick = e => {
    if (e.target.closest("[data-mic]") && !st.on) listen();
    if (e.target.closest("[data-skip]") || e.target.closest("[data-next]")) { st.i++; st.tries = 0; st.heard = ""; st.res = null; st.ok = false; draw(); } }; };
  draw();
}

/* ---------- certificates (drawn on the phone, no server) ---------- */
const CE_LV = [["A1", ["Beginner", "Başlanğıc", "Начальный"]], ["A2", ["Elementary", "Elementar", "Элементарный"]], ["B1", ["Intermediate", "Orta", "Средний"]], ["B2", ["Upper-Intermediate", "Orta-yuxarı", "Выше среднего"]], ["C1", ["Advanced", "Qabaqcıl", "Продвинутый"]], ["C2", ["Proficiency", "Peşəkar", "Профессиональный"]]];
const certEarned = () => { const b = lsGet("mv-badges", {}); return SECTIONS.map((s, i) => b["sec" + i] ? i : -1).filter(i => i > -1 && i < CE_LV.length); };
async function certCanvas(i) {
  const W = 1080, H = 1350, cv = document.createElement("canvas"); cv.width = W; cv.height = H; const c = cv.getContext("2d");
  try { await document.fonts.load('80px "Great Vibes"'); await document.fonts.load('800 60px "Nunito"'); } catch (e) {}
  const g = c.createLinearGradient(0, 0, W, H); g.addColorStop(0, "#0f241b"); g.addColorStop(1, "#0a1611"); c.fillStyle = g; c.fillRect(0, 0, W, H);
  c.strokeStyle = "#d9b45a"; c.lineWidth = 6; c.strokeRect(40, 40, W - 80, H - 80); c.lineWidth = 2; c.strokeRect(62, 62, W - 124, H - 124);
  for (let k = 0; k < 4; k++) { const x = k % 2 ? W - 62 : 62, y = k > 1 ? H - 62 : 62; c.fillStyle = "#d9b45a"; c.beginPath(); c.arc(x, y, 10, 0, 7); c.fill(); }
  const T = (t, y, f, col = "#eef6f0") => { c.font = f; c.fillStyle = col; c.textAlign = "center"; c.fillText(t, W / 2, y); };
  T("Safiverse", 180, '800 64px "Nunito", Arial', "#ffffff"); c.font = '800 64px "Nunito", Arial'; const sw = c.measureText("Safiverse").width;
  T("CERTIFICATE · SERTİFİKAT · СЕРТИФИКАТ", 270, '800 30px "Nunito", Arial', "#d9b45a");
  T("This certifies that · Təsdiq edilir ki · Настоящим подтверждается, что", 360, '600 25px "Nunito", Arial', "#a9bfb3");
  const name = (ACCT() && ACCT().name) || NAME || "Safiverse"; let fs = 104; c.font = `${fs}px "Great Vibes", cursive`; while (c.measureText(name).width > W - 220 && fs > 50) { fs -= 6; c.font = `${fs}px "Great Vibes", cursive`; }
  T(name, 500, `${fs}px "Great Vibes", cursive`, "#ffffff"); c.strokeStyle = "#d9b45a"; c.lineWidth = 2; c.beginPath(); c.moveTo(220, 535); c.lineTo(W - 220, 535); c.stroke();
  const [lv, nm] = CE_LV[i];
  T("has completed the level · səviyyəsini bitirdi · завершил(а) уровень", 610, '600 25px "Nunito", Arial', "#a9bfb3");
  c.fillStyle = "#6fcf8e"; c.beginPath(); c.arc(W / 2, 760, 112, 0, 7); c.fill(); c.fillStyle = "#0d1a15"; c.beginPath(); c.arc(W / 2, 760, 98, 0, 7); c.fill();
  T(lv, 790, '800 92px "Nunito", Arial', "#6fcf8e"); T(nm.join(" · "), 935, '800 34px "Nunito", Arial', "#ffffff");
  const d = new Date(), ds = `${String(d.getDate()).padStart(2, "0")}.${String(d.getMonth() + 1).padStart(2, "0")}.${d.getFullYear()}`;
  c.textAlign = "left"; c.fillStyle = "#a9bfb3"; c.font = '600 22px "Nunito", Arial'; c.fillText("📅 " + ds, 130, 1080);
  c.font = '72px "Great Vibes", cursive'; c.fillStyle = "#ffffff"; c.fillText("Minara", 120, 1175); c.strokeStyle = "#a9bfb3"; c.lineWidth = 1.5; c.beginPath(); c.moveTo(120, 1192); c.lineTo(470, 1192); c.stroke();
  c.font = '600 21px "Nunito", Arial'; c.fillStyle = "#a9bfb3"; c.fillText("Teacher · Müəllim · Преподаватель", 120, 1225);
  if (window.qrcode) { const q = qrcode(0, "M"); q.addData("https://safiverse.github.io/"); q.make(); const n = q.getModuleCount(), sz = 170, cs = sz / n, qx = W - 130 - sz, qy = 1050;
    c.fillStyle = "#fff"; c.fillRect(qx - 12, qy - 12, sz + 24, sz + 24); c.fillStyle = "#0d1a15"; for (let r = 0; r < n; r++) for (let k = 0; k < n; k++) if (q.isDark(r, k)) c.fillRect(qx + k * cs, qy + r * cs, cs + .4, cs + .4); }
  T("Safiverse course certificate — not an official exam certificate", H - 92, '600 18px "Nunito", Arial', "#7f968a");
  return cv;
}
async function certOpen(i) {
  const ov = document.createElement("div"); ov.className = "inv-sheet ce-ov"; ov.innerHTML = `<div class="inv-card ce-card"><b>🏅 ${L("ceT")} · ${CE_LV[i][0]}</b><div class="ce-img">…</div><button class="ap-cta" data-ce-save>${L("ceSave")}</button><button class="dr-link" data-ce-x>✕</button></div>`;
  document.body.appendChild(ov); const cv = await certCanvas(i); const img = new Image(); img.alt = L("ceT"); img.src = cv.toDataURL("image/png"); ov.querySelector(".ce-img").replaceChildren(img);
  ov.onclick = e => { if (e.target === ov || e.target.closest("[data-ce-x]")) ov.remove(); else if (e.target.closest("[data-ce-save]")) saveCanvas(cv, `Safiverse-certificate-${CE_LV[i][0]}.png`); };
}
function certCheck() { const seen = lsGet("mv-certs", []), nw = certEarned().find(i => !seen.includes(i)); if (nw == null || document.querySelector(".inv-sheet")) return;
  lsSet("mv-certs", [...seen, nw]); sfx("win"); toast("🏅 " + L("ceNew"), "gold"); certOpen(nw); }
const certItems = () => certEarned().map(i => `<button class="ap-item" data-cert="${i}"><span>🏅</span><b>${L("ceT")} ${CE_LV[i][0]}</b><small>${esc(T3(CE_LV[i][1]))}</small><i>›</i></button>`).join("");

/* ---------- email reminders on/off (profile) ---------- */
const mailItem = () => { if (typeof svOn !== "function" || !svOn() || !ACCT() || typeof SO !== "function") return ""; const s = SO(); const off = s && s.mailOff;
  return `<button class="ap-item" data-mail><span>📧</span><b>${L("maT")}</b><small>${off ? L("maOff") : L("maOn")}</small><i>›</i></button>`; };
document.addEventListener("click", async e => {
  const ce = e.target.closest("[data-cert]"); if (ce) { certOpen(+ce.dataset.cert); return; }
  const m = e.target.closest("[data-mail]"); if (!m || m.disabled) return; m.disabled = true;
  const s = SO() || {}; try { const d = await soCall("so_mail", { off: !s.mailOff }); if (d.ok) { s.mailOff = d.mailOff; lsSet("mv-so", s); } } catch (x) { toast(L("svErr")); }
  m.disabled = false; Router.remount();
});
