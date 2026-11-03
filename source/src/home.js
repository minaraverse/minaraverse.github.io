/* ===== HOME ===== */
VIEWS.home = root => {
  const cards = [
    { id: "tapes", art: () => `<div class="mini-shelf">${STORIES.tapes.units.map((u, i) => `<span style="--c:${u.spine};--d:${i * .18}s" class="${i === 3 ? "on" : ""}"><b style="color:${u.ink}">${esc(u.name)}</b></span>`).join("")}</div>` },
    { id: "voyage", art: () => `<div class="mini-sea"><div class="mini-ship"><img src="img/p-ship.webp" alt=""></div><svg class="mini-waves" viewBox="0 0 800 120" preserveAspectRatio="none"><path d="M0 40 Q50 20 100 40 T200 40 T300 40 T400 40 T500 40 T600 40 T700 40 T800 40 V120 H0Z" fill="#dcd7c7" stroke="#16130e" stroke-width="3"/><path d="M0 70 Q50 52 100 70 T200 70 T300 70 T400 70 T500 70 T600 70 T700 70 T800 70 V120 H0Z" fill="#e6e0cf" stroke="#16130e" stroke-width="3"/></svg></div>` },
    { id: "wild", art: () => `<div class="mini-wild"><img class="mw-photo" src="img/elephant-hero.jpg" alt=""><div class="mw-title">WILD</div></div>` },
    { id: "mystery", art: () => `<div class="mini-myst"><img src="img/m-library.jpg" alt=""><i class="mm-light"></i><span class="mm-stamp">CASE № 7</span><b class="mm-t">THE SECRET OF ICHERISHEHER</b></div>` },
    { id: "movie", art: () => `<div class="mini-gw">${WART.movie()}<b class="mg-t mg-movie">NOW SHOWING</b></div>` },
    { id: "kids", art: () => `<div class="mini-gw">${WART.kids()}</div>` },
    ...["cafe", "business", "debate", "ielts", "heist"].filter(k => STORIES[k]).map(k => ({ id: k, art: () => `<div class="mini-gw">${WART[k]()}</div>` })),
    { id: "travel", art: () => `<div class="mini-travel"><div class="mt-route">${ART.route()}</div><div class="mt-glass"><span class="mt-type"></span><i class="mt-btn">PLAN MY TRIP</i></div></div>` }
  ];
  const descs = { tapes: "tapesD", voyage: "voyageD", wild: "wildD", travel: "travelD", mystery: "mysteryD", movie: "movieD", kids: "kidsD", cafe: "cafeD", business: "businessD", debate: "debateD", ielts: "ieltsD", heist: "heistD" };
  const WORLDS = WORLD_ORDER, NCH = WORLDS.reduce((a, k) => a + STORIES[k].units.length, 0), NQ = WORLDS.reduce((a, k) => a + STORIES[k].units.reduce((b, u) => b + u.qs.length, 0), 0);
  const due = dueKeys().length, sk = streak(), dS = dailyState(), lvl = lsGet("mv-level", null);
  const TINT = { tapes: "#3a1a22", voyage: "#132a44", wild: "#2e2414", travel: "#2c2346", mystery: "#2a1c10", movie: "#3a0c12", kids: "#123c44", cafe: "#2b1d16", business: "#0e2238", debate: "#151a2e", ielts: "#1e2a36", heist: "#141220" };
  const LV = myLevel(); let FILTER = LV;
  root.innerHTML = `
  <div class="h-bg" aria-hidden="true"><i class="o1"></i><i class="o2"></i><i class="o3"></i></div>
  <div class="h-prog" aria-hidden="true"><i></i></div>
  <div class="h-wrap">
  <header class="h-top">
    <a class="h-logo" href="#">minara<i>verse</i></a>
    <nav class="h-nav" aria-label="Menu"><a href="#" data-jump="h-level">🎯 ${L("levelK")}</a><a href="#" data-jump="h-about">${L("bioK")}</a><a href="#" data-jump="h-stories">${L("storiesK")}</a><a href="#" data-jump="h-board">🏆 ${L("bdK")}</a><a href="#club">☕ ${L("clubK")}</a><a href="#" data-jump="h-exam">${L("exam")}</a><a href="#" data-jump="h-lead" class="hn-cta">💬 ${L("leadK")}</a></nav>
    ${langPill()}
  </header>
  <section class="h-hero">
    <div class="h-hero-l">
      <p class="h-eyebrow">${L("eyebrow")}</p>
      <h1 class="h-h1"><span class="ln">${letters(L("h1a"))}</span><span class="ln">${letters(L("h1b"))} <em>${letters(L("h1c"))}</em></span></h1>
      <p class="h-lead">${L("lead")}</p>
      <div class="h-ctas"><a class="h-cta" href="#level">${LV ? L("yourLevel") + ": " + LV + " · " + L("lvlAgain") : L("findLevel")} →</a><a class="h-cta2" href="#" data-jump="h-stories">${L("cta")} ↘</a><a class="h-cta2 h-app" href="#app">📱 ${L("apAppMode")}</a></div>
    </div>
    <div class="h-hero-r" aria-hidden="true">
      <svg class="h-badge" viewBox="0 0 200 200"><defs><path id="bc" d="M100 100 m-78 0 a78 78 0 1 1 156 0 a78 78 0 1 1 -156 0"/></defs><text font-family="Bricolage Grotesque,Arial,sans-serif" font-size="13.5" font-weight="600" letter-spacing="3.2"><textPath href="#bc">MINARAVERSE ✦ ENGLISH THROUGH STORIES ✦ A1–B2 ✦ </textPath></text><text x="100" y="112" text-anchor="middle" font-family="'Fraunces',Georgia,serif" font-size="40" font-style="italic">mv</text></svg>
      <div class="h-fan">${["tapes", "voyage", "wild", "travel"].map((k, i) => `<a class="h-post p${i}" href="#${k}"><span class="h-post-art">${cards.find(c => c.id === k).art()}</span><b>${esc(STORIES[k].title)}</b></a>`).join("")}</div>
    </div>
  </section>
  <p class="h-next" aria-hidden="false"><span>${L("nx1")}</span><i>↓</i></p>
  <section class="h-level ${LV ? "has" : ""}" id="h-level"><div class="hl-board" aria-hidden="true">${LVLS.map((l, k) => `<span class="hl-row ${LV === l ? "you" : ""}" style="--i:${k}"><b>${l}</b><i>${LVL_NAME.en[l].toUpperCase().replace("UPPER-INTERMEDIATE", "UPPER-INT").replace("PROFICIENCY", "MASTERY")}</i><em>${LV === l ? "◉ YOU" : "GATE " + (k + 1)}</em></span>`).join("")}</div>
    <div class="hl-t"><p class="h-k">① ${L("startHere")} · ${L("levelK")}</p>${LV ? `<h2 class="h-h2">${L("yourLevel")}: <em>${LV}</em> <small class="hl-name">${lvName(LV)}</small></h2>${planHTML(LV)}<a class="h-cta2" href="#level">${L("lvlAgain")} →</a>` : `<h2 class="h-h2">${L("levelH")}</h2><p class="h-about-p">${L("levelP")}</p><a class="h-cta" href="#level">${L("levelBtn")} →</a>`}</div></section>
  <section class="h-today" aria-label="${L("todayK")}">
    <div class="ht-streak ${sk ? "on" : ""}"><span class="ht-fire" aria-hidden="true">🔥</span><div><b>${sk}</b><small>${sk ? L("daysL") : L("streakNone")}</small></div><span class="ht-week" aria-hidden="true">${Array.from({ length: 7 }, (_, k) => { const d = new Date(); d.setDate(d.getDate() - 6 + k); return `<i class="${DAYS.includes(dayStr(d)) ? "on" : ""}">${"SMTWTFS"[d.getDay()]}</i>`; }).join("")}</span></div>
    <a class="ht-daily" href="#daily"><span class="ht-tiles" aria-hidden="true">${[..."WORDS"].map((c, k) => `<i style="--i:${k}" class="${dS.done ? "ok" : ""}">${dS.done ? dailyWord()[0][k] : c}</i>`).join("")}</span><span><b>${L("dailyT")}</b><small>${dS.done ? L("dailyDone") : L("dailySub")}</small></span><em>→</em></a>
    <a class="ht-review ${due ? "due" : ""}" href="#review"><span class="ht-n">${due}</span><span><b>${L("reviewT")}</b><small>${due ? L("reviewDue") : L("reviewNone")}</small></span><em>→</em></a>
  </section>
  </div>
  <div class="h-marquee" aria-hidden="true"><div class="mq a">${"COLLECT WORDS ✦ KEEP THE STORIES ✦ SÖZLƏRİ TOPLA ✦ HEKAYƏLƏRİ SAXLA ✦ ".repeat(4)}</div><div class="mq b">${"СОБИРАЙ СЛОВА ✦ ХРАНИ ИСТОРИИ ✦ LEARN · PLAY · SPEAK ✦ ".repeat(5)}</div></div>
  <div class="h-wrap">
  <p class="h-next" aria-hidden="false"><span>${L("nx2")}</span><i>↓</i></p>
  <section class="h-about" id="h-about">
    <div><p class="h-k">${L("aboutK")}</p><h2 class="h-h2">${letters(L("h2a"))}<br><em>${letters(L("h2b"))}</em></h2>
      <figure class="h-me"><div class="h-arch"><img src="img/minara.jpg" alt="Minara"></div><figcaption><span class="h-sign" aria-hidden="true"><svg viewBox="0 0 300 300"><text class="s-m" x="8" y="138">M</text><text class="s-v" x="132" y="196">V</text><path class="s-fl" d="M14 214C70 186 150 226 210 204S286 170 292 186"/><text class="s-nm" x="6" y="276">Minaraverse</text></svg></span><span class="h-k">${L("bioK")}</span><b>Minara</b><span>${{ en: "Your English teacher", az: "Sənin ingilis dili müəllimin", ru: "Твой преподаватель английского" }[LANG]}</span><small>ADA University · IELTS · TESOL · TEFL</small><a class="h-me-ig" href="${IG}" target="_blank" rel="noopener">@minaraverse ↗</a></figcaption></figure></div>
    <div class="h-about-r"><p class="h-about-p">${L("bio")}</p>
      <div class="h-approach"><p class="h-k">${L("approachK")}</p><h3>${L("approachH")}</h3><p>${L("approach2")}</p></div>
      <dl class="h-stats"><div><dt data-n="${WORLDS.length}">${WORLDS.length}</dt><dd>${L("stories")}</dd></div><div><dt data-n="${NCH}">${NCH}</dt><dd>${L("chapters")}</dd></div><div><dt data-n="${NQ}">${NQ}</dt><dd>${L("questions")}</dd></div><div><dt data-n="3">3</dt><dd>EN · AZ · RU</dd></div></dl></div>
  </section>
  <section class="h-formats"><p class="h-k">${L("formatsK")}</p><h2 class="h-h2">${L("formatsH")}</h2>
    <div class="hf-skills"><span class="hf-sk-k">${L("skillsK")}:</span>${["grammar", "vocab", "read", "listen", "speak", "write", "story"].map((k, i) => `<span class="hf-sk" style="--i:${i}">${["📐", "🧩", "📖", "🎧", "🗣", "✍️", "🎭"][i]} ${L("sk_" + k)}</span>`).join("")}</div>
    <div class="hf-grid">${[["story", "📚", "#h-stories"], ["myst", "🔎", "#mystery"], ["club", "☕", "#club"], ["exam", "📝", "#h-exam"]].map(([k, e, h]) => `<a class="hf-card" href="${h}" ${h.startsWith("#h-") ? `data-jump="${h.slice(1)}"` : ""}><span>${e}</span><b>${L("fm_" + k)}</b><small>${L("fm_" + k + "P")}</small></a>`).join("")}</div>
    <div class="hf-aud"><a class="hf-a" href="#" data-jump="h-stories" data-aud="adults"><span>🧑‍💼</span><b>${L("adultsT")}</b><p>${L("adultsP")}</p><em>${L("cta")} →</em></a><a class="hf-a kid" href="#kids"><span>🧒</span><b>${L("kidsT")}</b><p>${L("kidsP")}</p><em>Little Explorers →</em></a></div>
    <ol class="h-path"><p class="h-k">${L("pathK")}</p>${[1, 2, 3, 4].map(k => `<li><span>0${k}</span><b>${L("path" + k)}</b><small>${L("path" + k + "p")}</small></li>`).join("")}</ol>
    <a class="hf-lessons" href="${DM}" target="_blank" rel="noopener"><span>💬</span><div><b>${L("lessonsT")}</b><small>${L("lessonsP")}</small></div><em>${L("writeMe")} ↗</em></a>
  </section>

  <p class="h-next" aria-hidden="false"><span>${L("nx3")}</span><i>↓</i></p>
  <section class="h-stories" id="h-stories">
    <div class="h-sh"><div><p class="h-k">${L("storiesK")}</p><h2 class="h-h2">${L("storiesH")}</h2></div><p class="h-saved">${L("saved")}</p></div>
    <div class="h-chips" role="group">${[["", L("allLevels")], ...LVLS.map(l => [l, l + " " + lvName(l) + (l === LV ? " ★" : "")])].map(([l, t]) => `<button type="button" data-lvl="${l}" aria-pressed="${(FILTER || "") === l}">${t}</button>`).join("")}</div>
    <div class="h-cards">${cards.sort((a, b) => WORLD_ORDER.indexOf(a.id) - WORLD_ORDER.indexOf(b.id)).map(c => { const s = STORIES[c.id], d = doneCount(c.id), n = s.units.length;
      return `<a class="h-card hc-${c.id} ${fitsLevel(s.level, FILTER) ? "" : "dim"}" href="#${c.id}" data-tint="${TINT[c.id]}" data-lv="${s.level}">${LV && fitsLevel(s.level, LV) ? `<span class="h-card-fy">★ ${L("forYou")}</span>` : ""}<span class="h-card-art">${c.art()}</span>
        <span class="h-card-t"><span class="h-card-k">${n} ${L("chapters")} · ${s.units.reduce((a, u) => a + u.qs.length, 0)} ${L("questions")} · ${s.level}</span>
        <b>${esc(s.title)}</b><span class="h-card-d">${L(descs[c.id])}</span>
        <span class="h-card-bar"><i style="width:${d / n * 100}%"></i></span>
        <span class="h-card-go">${d === n ? L("complete") + " ✓" : d ? L("cont") + " · " + d + "/" + n : L("start")} →</span>${d === n ? `<span class="h-card-cert" data-cert="${c.id}" role="button" tabindex="0">🏅 ${L("getCert")}</span>` : ""}</span></a>`; }).join("")}</div>
  </section>
  ${boardHTML()}
  <p class="h-next" aria-hidden="false"><span>${L("nx4")}</span><i>↓</i></p>
  ${STORIES.club ? (() => { const w = STORIES.club.units[clubIdx()]; return `<section class="h-club"><a class="hc-box" href="#club"><span class="hc-cup" aria-hidden="true">${w.emoji || "☕"}</span><div><p class="h-k">☕ ${L("clubK")} · ${L("clubNew")}</p><span class="hc-fmt">${esc(w.format)}</span><h2 class="h-h2">${esc(w.title)}</h2><p>${L("fm_clubP")}</p><em>${L("clubOpen")} →</em></div></a></section>`; })() : ""}
  <p class="h-next" aria-hidden="false"><span>${L("nx5")}</span><i>↓</i></p>
  <section class="h-exam" id="h-exam"><div class="h-sh"><div><p class="h-k">${L("examK")}</p><h2 class="h-h2">${L("examH")}</h2></div></div>
    <div class="hx-cards"><a class="hx-card hx-dim" href="#exam"><span class="hx-art" aria-hidden="true"><span class="hx-sheet">${Array.from({ length: 5 }, (_, r) => `<span>${r + 1}${"ABCD".split("").map((c, k) => `<i class="${(r * 3 + 1) % 4 === k ? "on" : ""}">${c}</i>`).join("")}</span>`).join("")}</span><b class="hx-score">${lsGet("mv-exam", null) ? lsGet("mv-exam").score : "100"}</b></span>
      <span class="hx-t"><small>${L("exam")} · 3 ${{ en: "versions", az: "variant", ru: "варианта" }[LANG]} · A1–C2</small><b>${L("examT")}</b><span>${L("examD")}</span><em>${L("exStart")} →</em></span></a>
      <a class="hx-card hx-err" href="#errors"><span class="hx-art" aria-hidden="true"><span class="hx-target"><i></i><i></i><i></i></span><span class="hx-words"><s>a elephant</s><b>an elephant</b></span></span>
      <span class="hx-t"><small>${STORIES.errors.units.length} ${{ en: "games", az: "oyun", ru: "игр" }[LANG]} · A1–C2</small><b>${esc(STORIES.errors.title)}</b><span>${L("errorsD")}</span><em>${L("exStart")} →</em></span></a></div></section>
  <p class="h-next" aria-hidden="false"><span>${L("nx6")}</span><i>↓</i></p>
  ${leadHTML()}
  <footer class="h-foot"><p class="h-k">${L("follow")}</p><a class="h-big" href="${IG}" target="_blank" rel="noopener">${[..."@minaraverse"].map((ch, i) => `<span class="fl" style="--i:${i}">${ch}</span>`).join("")} ↗</a><a class="h-adminbtn" href="#admin">🔐 Minaraverse giriş</a><p class="h-small">© Minaraverse · English beyond the classroom</p></footer>
  </div>`;

  riseLetters(root, ".h-h1 .ch", { stagger: 28, dur: 1000, from: "translateY(.6em) rotate(5deg)" });
  root.querySelector(".h-eyebrow").animate([{ transform: "translateY(-12px)", opacity: 0 }, { transform: "none", opacity: 1 }], { duration: REDUCED ? 1 : 800, easing: "cubic-bezier(.2,.8,.2,1)", fill: "backwards" });
  root.querySelectorAll(".h-post").forEach((p, i) => p.animate([{ transform: `translateY(60px) rotate(${[-8, 6, -4, 9][i]}deg)`, opacity: 0 }, { opacity: 1 }], { duration: REDUCED ? 1 : 1100, delay: REDUCED ? 0 : 300 + i * 120, easing: "cubic-bezier(.2,.8,.2,1)", fill: "backwards", composite: "add" }));
  const h2 = root.querySelector(".h-about .h-h2"); onVisible(h2, () => riseLetters(h2, ".ch", { stagger: 26 }));
  /* count-up stats */
  const stats = root.querySelector(".h-stats");
  onVisible(stats, () => stats.querySelectorAll("dt").forEach((d, k) => { const n = +d.dataset.n, t0 = performance.now(), D = REDUCED ? 1 : 1400 + k * 150;
    const step = now => { const p = clamp((now - t0) / D); d.textContent = Math.round(out3(p) * n); if (p < 1) requestAnimationFrame(step); }; requestAnimationFrame(step); }), .4);

  /* scroll-driven scene */
  const Q = s2 => root.querySelector(s2), QA = s2 => [...root.querySelectorAll(s2)];
  const hero = Q(".h-hero"), h1 = Q(".h-h1"), lead = Q(".h-lead"), badge = Q(".h-badge"), posts = QA(".h-post"), mqA = Q(".mq.a"), mqB = Q(".mq.b");
  const arch = Q(".h-arch"), archImg = Q(".h-arch img"), about = Q(".h-about");
  const cardsEl = QA(".h-card"), foot = Q(".h-foot"), fls = QA(".fl"), bar = Q(".h-prog i"), bg = Q(".h-bg"), orbs = QA(".h-bg i");
  const prog = el => { const r = el.getBoundingClientRect(), vh = innerHeight; return clamp((vh - r.top) / (vh + r.height)); };
  let lastY = scrollY, vel = 0, mx = 0, raf, lastT = performance.now();
  const spread = [[-1, -.4, -14], [1, -.6, 12], [-1.1, .5, -10], [1.2, .4, 14]];
  const frame = now => {
    const dt = Math.min(.05, (now - lastT) / 1000); lastT = now;
    const y = scrollY, vh = innerHeight, max = Math.max(1, document.documentElement.scrollHeight - vh);
    vel += ((y - lastY) / Math.max(dt, .001) - vel) * .12; lastY = y;
    bar.style.transform = `scaleX(${y / max})`;
    if (!REDUCED) {
      /* hero: title lifts, cards fan out, badge spins */
      const hp = clamp(y / (hero.offsetHeight || 1));
      h1.style.transform = `translateY(${-hp * 90}px)`; h1.style.opacity = 1 - hp * .9;
      lead.style.transform = `translateY(${-hp * 50}px)`; lead.style.opacity = 1 - hp * 1.1;
      badge.style.transform = `rotate(${y * .35}deg) scale(${1 + hp * .3})`;
      posts.forEach((p, i) => { const [sx, sy, r] = spread[i]; p.style.transform = `translate(${sx * hp * 120}px,${sy * hp * 140 - hp * 30}px) rotate(${r * hp}deg) scale(${1 - hp * .12})`; });
      /* marquee: two rows, opposite directions, speed + skew follow the scroll */
      mx += (60 + Math.abs(vel) * .5) * dt; const sk = clamp(vel / 2500, -1, 1) * 10;
      mqA.style.transform = `translateX(${-(mx % (mqA.scrollWidth / 2))}px) skewX(${-sk}deg)`;
      mqB.style.transform = `translateX(${-(mqB.scrollWidth / 2) + (mx * .8 % (mqB.scrollWidth / 2))}px) skewX(${sk}deg)`;
      if (y !== frame.py || vh !== frame.pvh) { frame.py = y; frame.pvh = vh;
      /* about: arch wipes up and the photo drifts */
      const ap = prog(about);
      
      archImg.style.transform = `scale(${1.25 - clamp(ap * 2) * .25}) translateY(${(ap - .5) * -40}px)`;
      /* how it works: line draws, steps light up in turn */
      /* story cards tilt in, art zooms, page tints to the world in view */
      let best = null, bd = 1e9;
      cardsEl.forEach((c, k) => { const p = prog(c), e = clamp(p * 2.4);
        c.style.transform = `perspective(900px) translateY(${(1 - e) * 80}px) rotateX(${(1 - e) * 18}deg) rotate(${(1 - e) * (k % 2 ? 3 : -3)}deg) scale(${.92 + e * .08})`;
        c.style.opacity = .2 + e * .8;
        const art = c.querySelector(".h-card-art > *"); if (art) art.style.transform = `scale(${1.12 - p * .14}) translateY(${(p - .5) * -24}px)`;
        const r = c.getBoundingClientRect(), dist = Math.abs(r.top + r.height / 2 - vh / 2); if (dist < bd && r.top < vh && r.bottom > 0) { bd = dist; best = c; } });
      const sp = prog(Q(".h-stories"));
      bg.style.setProperty("--tint", best && sp > .08 && sp < .92 ? best.dataset.tint : "transparent");
      cardsEl.forEach(c => c.classList.toggle("focus", c === best && sp > .08 && sp < .92));
      }
      /* glowing orbs drift at different depths */
      orbs.forEach((o, k) => { o.style.transform = `translate(${Math.sin(now / 4000 + k * 2) * 60}px,${-y * (.12 + k * .08) % (vh * 2)}px)`; });
      if (frame.py === y && frame.fy !== y) { frame.fy = y;
      /* footer: the handle letters gather together */
      const fr = foot.getBoundingClientRect(), fp = clamp((vh - fr.top) / (fr.height * .8)), sprd = innerWidth < 600 ? 8 : 22;
      fls.forEach((f, i) => { const d = i - fls.length / 2; f.style.transform = `translate(${d * (1 - fp) * sprd}px,${(1 - fp) * (i % 2 ? 40 : -40)}px) rotate(${(1 - fp) * d * 4}deg)`; f.style.opacity = .15 + fp * .85; });
      }
    }
    raf = requestAnimationFrame(frame);
  };
  raf = requestAnimationFrame(frame);
  root.addEventListener("click", e => { const ct = e.target.closest("[data-cert]"); if (ct) { e.preventDefault(); Certificate(ct.dataset.cert); return; } }, true);
  wireLead(root); revealHome(root); if (typeof loadBoard === "function") loadBoard();
  /* back-to-top button */
  const top = document.createElement("button"); top.type = "button"; top.className = "to-top"; top.setAttribute("aria-label", "Top"); top.textContent = "↑"; document.body.appendChild(top);
  top.onclick = () => scrollTo({ top: 0, behavior: REDUCED ? "auto" : "smooth" });
  const tt = () => top.classList.toggle("on", scrollY > innerHeight * 1.2); addEventListener("scroll", tt, { passive: true });
  /* level chips: matching stories jump to the top, the rest fade */
  const cardsBox = root.querySelector(".h-cards");
  const sortCards = scroll => { const cs = [...cardsBox.children]; cs.sort((x, y) => (fitsLevel(y.dataset.lv, FILTER) - fitsLevel(x.dataset.lv, FILTER)) || (WORLD_ORDER.indexOf(x.className.match(/hc-(\w+)/)[1]) - WORLD_ORDER.indexOf(y.className.match(/hc-(\w+)/)[1])));
    cs.forEach(c => { cardsBox.appendChild(c); c.classList.toggle("dim", !fitsLevel(c.dataset.lv, FILTER)); });
    if (scroll) { const t = cardsBox.getBoundingClientRect().top + scrollY - 90; scrollTo({ top: t, behavior: REDUCED ? "auto" : "smooth" }); } };
  sortCards(false);
  root.addEventListener("click", e => { const b = e.target.closest("[data-lvl]"); if (!b) return; FILTER = b.dataset.lvl || null;
    root.querySelectorAll("[data-lvl]").forEach(x => x.setAttribute("aria-pressed", x === b)); sortCards(true); });
  root.addEventListener("click", e => { const j = e.target.closest("[data-jump]"); if (!j) return; e.preventDefault(); document.getElementById(j.dataset.jump).scrollIntoView({ behavior: REDUCED ? "auto" : "smooth" }); });

  /* typing loop in the travel mini cards */
  const prompts = STORIES.travel.units.map(u => u.prompt.replace("....", "…"));
  let pi = 0, ci = 0, del = false, tm;
  const tick = () => {
    const els = root.querySelectorAll(".mt-type"); const p = prompts[pi];
    if (!del) { ci++; if (ci > p.length) { del = true; tm = setTimeout(tick, 1600); return; } }
    else { ci -= 3; if (ci <= 0) { ci = 0; del = false; pi = (pi + 1) % prompts.length; } }
    els.forEach(el => el.textContent = p.slice(0, ci));
    tm = setTimeout(tick, del ? 14 : 34);
  };
  if (!REDUCED) tick(); else root.querySelectorAll(".mt-type").forEach(el => el.textContent = prompts[0]);
  return { unmount() { clearTimeout(tm); cancelAnimationFrame(raf); removeEventListener("scroll", tt); top.remove(); } };
};
