/* ===== Safiverse extra courses: Math, Music, Chess — every question is generated in code (no images, no credits) ===== */
Object.assign(UI.en, { skMath: "Math", skMusic: "Music", skChess: "Chess", skEnglish: "English", skMathP: "From counting to percentages", skMusicP: "Notes, piano, ear and rhythm", skChessP: "Pieces, moves, check and mate",
  skHowMany: "How many?", skSolve: "Solve", skCmp: "Which sign fits?", skFrac: "What part is coloured?", skClock: "What time is it?", skShape: "What is this shape?", skSides: "How many sides does it have?", skPct: "Calculate",
  skTapNote: "Tap the note", skHearTap: "Listen and tap the same note", skHigher: "Which sound is higher?", skFirst: "The first", skSecond: "The second", skStaff: "Which note is this?", skBeats: "How many beats is this note?",
  skRepeat: "Listen and play the melody back", skPlay: "Play again", skTapSq: "Tap the square", skPiece: "Which piece is this?", skWhere: "Tap a square where the {p} can move", skCapture: "Capture a black piece: tap your piece, then its target",
  skCheck: "Give check to the black king: tap your piece, then a square", skMate: "Checkmate in one move! Tap your piece, then a square", skPickPiece: "Now tap where it goes", skReview: "Unit review", skLessonN: "Lesson",
  skPieces: ["King", "Queen", "Rook", "Bishop", "Knight", "Pawn"], skShapes: ["Triangle", "Square", "Rectangle", "Circle", "Pentagon", "Hexagon"], skOk: "Correct answer:" });
Object.assign(UI.az, { skMath: "Riyaziyyat", skMusic: "Musiqi", skChess: "Şahmat", skEnglish: "İngilis dili", skMathP: "Saymaqdan faizlərə qədər", skMusicP: "Notlar, piano, qulaq və ritm", skChessP: "Fiqurlar, gedişlər, şah və mat",
  skHowMany: "Neçədir?", skSolve: "Hesabla", skCmp: "Hansı işarə uyğundur?", skFrac: "Rəngli hissə neçədir?", skClock: "Saat neçədir?", skShape: "Bu hansı fiqurdur?", skSides: "Bu fiqurun neçə tərəfi var?", skPct: "Hesabla",
  skTapNote: "Bu notu bas", skHearTap: "Qulaq as və eyni notu bas", skHigher: "Hansı səs daha yüksəkdir?", skFirst: "Birinci", skSecond: "İkinci", skStaff: "Bu hansı notdur?", skBeats: "Bu not neçə vuruşdur?",
  skRepeat: "Qulaq as və melodiyanı təkrar çal", skPlay: "Yenə dinlə", skTapSq: "Bu xanaya bas", skPiece: "Bu hansı fiqurdur?", skWhere: "{p} gedə biləcəyi bir xanaya bas", skCapture: "Qara fiquru vur: əvvəl öz fiqurunu, sonra hədəfi seç",
  skCheck: "Qara şaha şah elan et: əvvəl fiquru, sonra xananı seç", skMate: "Bir gedişdə mat! Əvvəl fiquru, sonra xananı seç", skPickPiece: "İndi hara gedəcəyini seç", skReview: "Bölmə təkrarı", skLessonN: "Dərs",
  skPieces: ["Şah", "Vəzir", "Top", "Fil", "At", "Piyada"], skShapes: ["Üçbucaq", "Kvadrat", "Düzbucaqlı", "Dairə", "Beşbucaq", "Altıbucaq"], skOk: "Düzgün cavab:" });
Object.assign(UI.ru, { skMath: "Математика", skMusic: "Музыка", skChess: "Шахматы", skEnglish: "Английский", skMathP: "От счёта до процентов", skMusicP: "Ноты, пианино, слух и ритм", skChessP: "Фигуры, ходы, шах и мат",
  skHowMany: "Сколько?", skSolve: "Реши", skCmp: "Какой знак подходит?", skFrac: "Какая часть закрашена?", skClock: "Который час?", skShape: "Что это за фигура?", skSides: "Сколько у неё сторон?", skPct: "Посчитай",
  skTapNote: "Нажми ноту", skHearTap: "Послушай и нажми ту же ноту", skHigher: "Какой звук выше?", skFirst: "Первый", skSecond: "Второй", skStaff: "Какая это нота?", skBeats: "Сколько долей длится эта нота?",
  skRepeat: "Послушай и сыграй мелодию", skPlay: "Ещё раз", skTapSq: "Нажми на клетку", skPiece: "Какая это фигура?", skWhere: "Нажми клетку, куда может пойти {p}", skCapture: "Возьми чёрную фигуру: сначала своя фигура, потом цель",
  skCheck: "Объяви шах чёрному королю: сначала фигура, потом клетка", skMate: "Мат в один ход! Сначала фигура, потом клетка", skPickPiece: "Теперь выбери, куда идти", skReview: "Повторение раздела", skLessonN: "Урок",
  skPieces: ["Король", "Ферзь", "Ладья", "Слон", "Конь", "Пешка"], skShapes: ["Треугольник", "Квадрат", "Прямоугольник", "Круг", "Пятиугольник", "Шестиугольник"], skOk: "Правильный ответ:" });

const rnd = (a, b) => a + ((Math.random() * (b - a + 1)) | 0);
const pick1 = a => a[(Math.random() * a.length) | 0];
/* four options around the right number, all different and >= 0 */
function numOpts(a, spread = 3) { const s = new Set([a]); let g = 0; while (s.size < 4 && g++ < 60) { const d = rnd(-spread, spread); if (d && a + d >= 0) s.add(a + d); } let k = 1; while (s.size < 4) s.add(a + spread + k++); return shuffle([...s]); }
const optQ = (p, right, opts) => { opts = opts || numOpts(right); return { k: "opt", p, o: opts.map(String), a: opts.map(String).indexOf(String(right)), ans: String(right) }; };

/* ---------- MATH ---------- */
const EMO = ["🍎", "⭐", "🐟", "🎈", "🌸", "🐞", "🍪", "⚽"];
function clockSVG(h, m) { const a1 = ((h % 12) + m / 60) * 30, a2 = m * 6, hand = (a, l, w, c) => `<line x1="50" y1="50" x2="${50 + l * Math.sin(a * Math.PI / 180)}" y2="${50 - l * Math.cos(a * Math.PI / 180)}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;
  return `<svg class="sk-pic" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#fff" stroke="#2b3a33" stroke-width="4"/>${Array.from({ length: 12 }, (_, i) => { const a = (i + 1) * 30 * Math.PI / 180; return `<text x="${50 + 35 * Math.sin(a)}" y="${54 + 35 * -Math.cos(a)}" font-size="10" font-weight="800" text-anchor="middle" fill="#2b3a33">${i + 1}</text>`; }).join("")}${hand(a1, 22, 5, "#2b3a33")}${hand(a2, 34, 3, "#e0565b")}<circle cx="50" cy="50" r="3.5" fill="#2b3a33"/></svg>`; }
function fracSVG(n, d) { if (d === 1) return ""; let s = ""; for (let i = 0; i < d; i++) { const a0 = i / d * 2 * Math.PI - Math.PI / 2, a1 = (i + 1) / d * 2 * Math.PI - Math.PI / 2;
    s += `<path d="M50 50 L${50 + 44 * Math.cos(a0)} ${50 + 44 * Math.sin(a0)} A44 44 0 0 1 ${50 + 44 * Math.cos(a1)} ${50 + 44 * Math.sin(a1)}Z" fill="${i < n ? "#6FCF8E" : "#eef3ef"}" stroke="#2b3a33" stroke-width="2.5"/>`; }
  return `<svg class="sk-pic" viewBox="0 0 100 100">${s}</svg>`; }
const SHAPES = [[3, `<polygon points="50,10 92,86 8,86"/>`], [4, `<rect x="16" y="16" width="68" height="68"/>`], [4, `<rect x="6" y="28" width="88" height="46"/>`], [0, `<circle cx="50" cy="50" r="40"/>`],
  [5, `<polygon points="50,8 92,39 76,89 24,89 8,39"/>`], [6, `<polygon points="28,12 72,12 94,50 72,88 28,88 6,50"/>`]];
const shapeSVG = i => `<svg class="sk-pic" viewBox="0 0 100 100"><g fill="#8FD9B6" stroke="#2b3a33" stroke-width="4" stroke-linejoin="round">${SHAPES[i][1]}</g></svg>`;
const sum = (a, b, op) => `<p class="sk-eq">${a} ${op} ${b} = <u>?</u></p>`;
const MATH = [
  { e: "🍎", t: ["Counting 1–10", "1–10 sayırıq", "Считаем 1–10"], g: lv => { const n = rnd(1, 4 + lv * 2), em = pick1(EMO); return optQ(`<b class="sk-q">${L("skHowMany")}</b><p class="sk-emo">${em.repeat(n)}</p>`, n); } },
  { e: "➕", t: ["Adding up to 10", "10-a qədər toplama", "Сложение до 10"], g: lv => { const a = rnd(0, 5 + lv), b = rnd(0, 10 - a > 0 ? 10 - a : 0); return optQ(`<b class="sk-q">${L("skSolve")}</b>${sum(a, b, "+")}`, a + b); } },
  { e: "➖", t: ["Taking away up to 10", "10-a qədər çıxma", "Вычитание до 10"], g: () => { const a = rnd(2, 10), b = rnd(0, a); return optQ(`<b class="sk-q">${L("skSolve")}</b>${sum(a, b, "−")}`, a - b); } },
  { e: "🔟", t: ["Adding up to 20", "20-yə qədər toplama", "Сложение до 20"], g: () => { const a = rnd(5, 15), b = rnd(1, 20 - a); return optQ(`<b class="sk-q">${L("skSolve")}</b>${sum(a, b, "+")}`, a + b); } },
  { e: "🎯", t: ["Taking away up to 20", "20-yə qədər çıxma", "Вычитание до 20"], g: () => { const a = rnd(10, 20), b = rnd(1, a); return optQ(`<b class="sk-q">${L("skSolve")}</b>${sum(a, b, "−")}`, a - b); } },
  { e: "⚖️", t: ["Bigger or smaller", "Böyük, yoxsa kiçik", "Больше или меньше"], g: lv => { const a = rnd(0, 20 + lv * 30), b = Math.random() < .2 ? a : rnd(0, 20 + lv * 30), r = a > b ? ">" : a < b ? "<" : "=";
      return optQ(`<b class="sk-q">${L("skCmp")}</b><p class="sk-eq">${a} <u>?</u> ${b}</p>`, r, [">", "<", "="]); } },
  { e: "💯", t: ["Adding up to 100", "100-ə qədər toplama", "Сложение до 100"], g: () => { const a = rnd(10, 80), b = rnd(5, 100 - a); return optQ(`<b class="sk-q">${L("skSolve")}</b>${sum(a, b, "+")}`, a + b, numOpts(a + b, 11)); } },
  { e: "✖️", t: ["Times tables 2–5", "Vurma cədvəli 2–5", "Таблица умножения 2–5"], g: () => { const a = rnd(2, 5), b = rnd(1, 10); return optQ(`<b class="sk-q">${L("skSolve")}</b>${sum(a, b, "×")}`, a * b, numOpts(a * b, a)); } },
  { e: "🧮", t: ["Times tables 6–9", "Vurma cədvəli 6–9", "Таблица умножения 6–9"], g: () => { const a = rnd(6, 9), b = rnd(2, 10); return optQ(`<b class="sk-q">${L("skSolve")}</b>${sum(a, b, "×")}`, a * b, numOpts(a * b, a)); } },
  { e: "➗", t: ["Division", "Bölmə", "Деление"], g: () => { const b = rnd(2, 9), q = rnd(1, 10); return optQ(`<b class="sk-q">${L("skSolve")}</b>${sum(b * q, b, "÷")}`, q); } },
  { e: "🍕", t: ["Fractions", "Kəsrlər", "Дроби"], g: () => { const d = rnd(2, 8), n = rnd(1, d - 1), r = `${n}/${d}`, s = new Set([r]); while (s.size < 4) { const d2 = rnd(2, 8), n2 = rnd(1, d2 - 1); if (n2 * d !== n * d2) s.add(`${n2}/${d2}`); }
      return optQ(`<b class="sk-q">${L("skFrac")}</b>${fracSVG(n, d)}`, r, shuffle([...s])); } },
  { e: "🕒", t: ["Telling the time", "Saata baxmaq", "Определяем время"], g: lv => { const h = rnd(1, 12), m = pick1(lv ? [0, 15, 30, 45, 5, 20, 40, 50] : [0, 30]), f = (h, m) => `${h}:${String(m).padStart(2, "0")}`, r = f(h, m), s = new Set([r]);
      while (s.size < 4) s.add(f(Math.random() < .5 ? h : rnd(1, 12), Math.random() < .5 ? m : pick1([0, 15, 30, 45]))); return optQ(`<b class="sk-q">${L("skClock")}</b>${clockSVG(h, m)}`, r, shuffle([...s])); } },
  { e: "🔺", t: ["Shapes", "Fiqurlar", "Фигуры"], g: () => { const i = rnd(0, SHAPES.length - 1);
      if (SHAPES[i][0] >= 3 && Math.random() < .4) return optQ(`<b class="sk-q">${L("skSides")}</b>${shapeSVG(i)}`, SHAPES[i][0], shuffle([3, 4, 5, 6]));
      const nm = L("skShapes"), o = shuffle([i, ...pickN(SHAPES.map((_, k) => k), 3, [i])]); return optQ(`<b class="sk-q">${L("skShape")}</b>${shapeSVG(i)}`, nm[i], o.map(k => nm[k])); } },
  { e: "💸", t: ["Percentages", "Faizlər", "Проценты"], g: () => { const p = pick1([10, 20, 25, 50, 75, 100]), base = pick1([20, 40, 60, 80, 100, 120, 200, 400]), r = base * p / 100;
      return optQ(`<b class="sk-q">${L("skPct")}</b><p class="sk-eq">${p}% × ${base} = <u>?</u></p>`, r, numOpts(r, Math.max(2, base / 10))); } }
];

/* ---------- MUSIC ---------- */
const SOLF = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si", "Do"], LET = ["C", "D", "E", "F", "G", "A", "B", "C"], WSEMI = [0, 2, 4, 5, 7, 9, 11, 12];
const BLACK = [[0, 1], [1, 3], [3, 6], [4, 8], [5, 10]];   /* [after white key, semitone] */
const noteName = i => LANG === "en" ? LET[i] : SOLF[i];
const sharpName = s => { const w = BLACK.find(b => b[1] === s)[0]; return (LANG === "en" ? LET[w] : SOLF[w]) + "♯"; };
let MAC = null;
function playSemi(s, at = 0, dur = .55) { if (!soundOn()) return; try { MAC = MAC || new (window.AudioContext || window.webkitAudioContext)(); if (MAC.state === "suspended") MAC.resume();
  const t = MAC.currentTime + at, f = 261.63 * Math.pow(2, s / 12), g = MAC.createGain(); g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.32, t + .015); g.gain.exponentialRampToValueAtTime(.0001, t + dur + .5); g.connect(MAC.destination);
  [[1, "triangle", 1], [2, "sine", .35], [3, "sine", .12]].forEach(([m, ty, v]) => { const o = MAC.createOscillator(), gg = MAC.createGain(); o.type = ty; o.frequency.value = f * m; gg.gain.value = v; o.connect(gg).connect(g); o.start(t); o.stop(t + dur + .6); }); } catch (e) {} }
const playSeq = (seq, gap = .5) => seq.forEach((s, i) => playSemi(s, i * gap));
function pianoHTML(labels, mark) { return `<div class="sk-piano">${WSEMI.map((s, i) => `<button class="sk-key w ${mark === s ? "mk" : ""}" data-key="${s}"><small>${labels ? noteName(i) : ""}</small></button>`).join("")}
  ${BLACK.map(([w, s]) => `<button class="sk-key b" data-key="${s}" style="left:calc(${(w + 1) * 12.5}% - 4.5%)"><small>${labels > 1 ? sharpName(s) : ""}</small></button>`).join("")}</div>`; }
function staffSVG(i) { const y = 90 - i * 6, ledger = i === 0 ? `<line x1="52" y1="90" x2="78" y2="90" stroke="#2b3a33" stroke-width="2"/>` : "";
  return `<svg class="sk-pic wide" viewBox="0 0 130 104">${[0, 1, 2, 3, 4].map(k => `<line x1="8" y1="${30 + k * 12}" x2="122" y2="${30 + k * 12}" stroke="#2b3a33" stroke-width="2"/>`).join("")}
    <text x="10" y="80" font-size="62" fill="#2b3a33" font-family="serif">𝄞</text>${ledger}<ellipse cx="65" cy="${y}" rx="8" ry="6" fill="#2b3a33" transform="rotate(-18 65 ${y})"/><line x1="72" y1="${y - 1}" x2="72" y2="${y - 36}" stroke="#2b3a33" stroke-width="2.4"/></svg>`; }
function durSVG(k) { /* 0 whole, 1 half, 2 quarter, 3 eighth */ const fill = k >= 2 ? "#2b3a33" : "#fff";
  return `<svg class="sk-pic" viewBox="0 0 100 100"><ellipse cx="44" cy="72" rx="15" ry="11" fill="${fill}" stroke="#2b3a33" stroke-width="5" transform="rotate(-20 44 72)"/>${k ? `<line x1="57" y1="68" x2="57" y2="12" stroke="#2b3a33" stroke-width="5"/>` : ""}${k === 3 ? `<path d="M57 12 Q80 26 74 52 Q72 34 57 30Z" fill="#2b3a33"/>` : ""}</svg>`; }
const MELODIES = [[4, 4, 5, 7], [7, 5, 4, 2], [0, 0, 7, 7], [9, 9, 7], [0, 2, 4], [4, 2, 0], [0, 4, 7], [7, 4, 0], [2, 4, 5, 7], [12, 11, 9, 7]];
const keyQ = (p, s, labels, play) => ({ k: "key", p, s, labels, play, ans: WSEMI.includes(s) ? noteName(WSEMI.indexOf(s)) : sharpName(s) });
const MUSIC = [
  { e: "🎹", t: ["Do Re Mi", "Do Re Mi", "До Ре Ми"], g: lv => { const i = rnd(0, 2 + lv); return keyQ(`<b class="sk-q">${L("skTapNote")}</b><p class="sk-big">${noteName(i)}</p>`, WSEMI[i], 1); } },
  { e: "🎼", t: ["Fa Sol La Si", "Fa Sol La Si", "Фа Соль Ля Си"], g: lv => { const i = rnd(3, 7); return keyQ(`<b class="sk-q">${L("skTapNote")}</b><p class="sk-big">${noteName(i)}</p>`, WSEMI[i], lv < 2 ? 1 : 0); } },
  { e: "👂", t: ["High or low?", "Yüksək, yoxsa alçaq?", "Высоко или низко?"], g: lv => { let a = rnd(0, 12), b = rnd(0, 12); while (Math.abs(a - b) < 4 - lv) b = rnd(0, 12);
      const q = optQ(`<b class="sk-q">${L("skHigher")}</b><button class="sk-play" data-play="${a},${b}">🔊 ${L("skPlay")}</button>`, a > b ? L("skFirst") : L("skSecond"), [L("skFirst"), L("skSecond")]); q.play = [a, b]; q.gap = .8; return q; } },
  { e: "🎧", t: ["Find the note by ear", "Notu qulaqla tap", "Найди ноту на слух"], g: lv => { const i = rnd(0, 4 + Math.min(3, lv)); const q = keyQ(`<b class="sk-q">${L("skHearTap")}</b><button class="sk-play" data-play="${WSEMI[i]}">🔊 ${L("skPlay")}</button>`, WSEMI[i], 1, [WSEMI[i]]); return q; } },
  { e: "📜", t: ["Reading notes", "Notları oxu", "Читаем ноты"], g: () => { const i = rnd(0, 7), nm = [0, 1, 2, 3, 4, 5, 6, 7].map(noteName); const o = shuffle([i % 7, ...pickN([0, 1, 2, 3, 4, 5, 6], 3, [i % 7])]);
      return optQ(`<b class="sk-q">${L("skStaff")}</b>${staffSVG(i)}`, nm[i % 7], o.map(k => nm[k])); } },
  { e: "🥁", t: ["Rhythm", "Ritm", "Ритм"], g: () => { const k = rnd(0, 3), v = ["4", "2", "1", "½"]; return optQ(`<b class="sk-q">${L("skBeats")}</b>${durSVG(k)}`, v[k], v.slice()); } },
  { e: "🎶", t: ["Play it back", "Melodiyanı təkrarla", "Повтори мелодию"], g: lv => { const m = lv < 2 ? pick1(MELODIES.filter(x => x.length === 3)) : pick1(MELODIES);
      return { k: "seq", p: `<b class="sk-q">${L("skRepeat")}</b><button class="sk-play" data-play="${m.join(",")}">🔊 ${L("skPlay")}</button>`, seq: m, labels: 1, play: m, ans: m.map(s => noteName(WSEMI.indexOf(s))).join(" – ") }; } },
  { e: "♯", t: ["Sharps", "Diyezlər", "Диезы"], g: () => { const s = pick1(BLACK)[1]; return keyQ(`<b class="sk-q">${L("skTapNote")}</b><p class="sk-big">${sharpName(s)}</p>`, s, 2); } }
];

/* ---------- CHESS: tiny move generator (no castling / en passant) ---------- */
const FL = "abcdefgh", sqXY = s => [FL.indexOf(s[0]), +s[1] - 1], xySq = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8 ? FL[x] + (y + 1) : null;
const DIRS = { R: [[1, 0], [-1, 0], [0, 1], [0, -1]], B: [[1, 1], [1, -1], [-1, 1], [-1, -1]], N: [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]] };
DIRS.Q = DIRS.R.concat(DIRS.B); DIRS.K = DIRS.Q;
function pseudo(pos, s, attackOnly) { const p = pos[s], c = p[0], t = p[1], [x, y] = sqXY(s), out = [];
  if (t === "P") { const d = c === "w" ? 1 : -1; [-1, 1].forEach(dx => { const q = xySq(x + dx, y + d); if (q && (attackOnly || (pos[q] && pos[q][0] !== c))) out.push(q); });
    if (!attackOnly) { const f = xySq(x, y + d); if (f && !pos[f]) { out.push(f); const f2 = xySq(x, y + 2 * d); if ((c === "w" ? y === 1 : y === 6) && f2 && !pos[f2]) out.push(f2); } } return out; }
  DIRS[t].forEach(([dx, dy]) => { for (let k = 1; k < 8; k++) { const q = xySq(x + dx * k, y + dy * k); if (!q) break; if (pos[q]) { if (pos[q][0] !== c) out.push(q); break; } out.push(q); if (t === "K" || t === "N") break; } });
  return out; }
const kingOf = (pos, c) => Object.keys(pos).find(s => pos[s] === c + "K");
const attacked = (pos, sq, by) => Object.keys(pos).some(s => pos[s][0] === by && pseudo(pos, s, true).includes(sq));
const inCheck = (pos, c) => { const k = kingOf(pos, c); return !!k && attacked(pos, k, c === "w" ? "b" : "w"); };
const mv = (pos, a, b) => { const n = Object.assign({}, pos); n[b] = n[a]; delete n[a]; if (n[b][1] === "P" && (b[1] === "8" || b[1] === "1")) n[b] = n[b][0] + "Q"; return n; };
const legal = (pos, s) => pseudo(pos, s).filter(q => !kingOf(pos, pos[s][0]) || !inCheck(mv(pos, s, q), pos[s][0]));
const anyMove = (pos, c) => Object.keys(pos).some(s => pos[s][0] === c && legal(pos, s).length);
const mated = (pos, c) => inCheck(pos, c) && !anyMove(pos, c);
const GLYPH = { K: "♚", Q: "♛", R: "♜", B: "♝", N: "♞", P: "♟" };
const PIDX = { K: 0, Q: 1, R: 2, B: 3, N: 4, P: 5 };
function skBoardHTML(pos, opt = {}) { let h = ""; for (let y = 7; y >= 0; y--) for (let x = 0; x < 8; x++) { const s = FL[x] + (y + 1), p = pos[s];
    h += `<button class="sk-sq ${(x + y) % 2 ? "l" : "d"} ${opt.mark === s ? "mk" : ""}" data-sq="${s}">${p ? `<i class="pc ${p[0]}">${GLYPH[p[1]]}︎</i>` : ""}${x === 0 ? `<em class="rk">${y + 1}</em>` : ""}${y === 0 ? `<em class="fl">${FL[x]}</em>` : ""}</button>`; }
  return `<div class="sk-board">${h}</div>`; }
const rsq = () => FL[rnd(0, 7)] + rnd(1, 8);
function freeSq(pos, rows) { let s; do { s = FL[rnd(0, 7)] + (rows ? pick1(rows) : rnd(1, 8)); } while (pos[s]); return s; }
const pName = t => L("skPieces")[PIDX[t]];
function moveQ(t, lv) { const pos = {}, s = t === "P" ? freeSq(pos, [2, 3, 4, 5]) : rsq(); pos[s] = "w" + t;
  const nb = t === "P" ? 1 : Math.min(3, lv); for (let i = 0; i < nb; i++) { const q = freeSq(pos); pos[q] = (t === "P" ? "b" : Math.random() < .5 ? "w" : "b") + pick1(["P", "N", "B"]); }
  if (t === "P") { const [x, y] = sqXY(s), d = xySq(x + pick1([-1, 1]), y + 1); if (d && Math.random() < .6) pos[d] = "bN"; }
  const ok = legal(pos, s); if (!ok.length) return moveQ(t, lv);
  return { k: "sq", p: `<b class="sk-q">${L("skWhere").replace("{p}", pName(t))}</b>`, pos, mark: s, ok: q => ok.includes(q), ans: ok.slice(0, 4).join(", ") }; }
function captureQ() { for (let g = 0; g < 200; g++) { const pos = {}, t = pick1(["Q", "R", "B", "N", "P"]), s = t === "P" ? freeSq(pos, [2, 3, 4, 5, 6]) : rsq(); pos[s] = "w" + t;
    for (let i = 0; i < 3; i++) pos[freeSq(pos)] = "b" + pick1(["P", "N", "B", "R"]);
    const caps = legal(pos, s).filter(q => pos[q]); if (caps.length === 1) return { k: "mv", p: `<b class="sk-q">${L("skCapture")}</b>`, pos, ok: (a, b) => a === s && b === caps[0], ans: `${s} → ${caps[0]}` }; } return moveQ("R", 0); }
function checkQ() { for (let g = 0; g < 300; g++) { const pos = {}, bk = rsq(); pos[bk] = "bK"; const t = pick1(["Q", "R", "B", "N"]); pos[freeSq(pos)] = "w" + t; let wk; do { wk = freeSq(pos); } while (Math.max(...sqXY(wk).map((v, i) => Math.abs(v - sqXY(bk)[i]))) < 2); pos[wk] = "wK";
    if (inCheck(pos, "b")) continue; const s = Object.keys(pos).find(k => pos[k] === "w" + t), good = legal(pos, s).filter(q => inCheck(mv(pos, s, q), "b"));
    if (good.length) return { k: "mv", p: `<b class="sk-q">${L("skCheck")}</b>`, pos, ok: (a, b) => pos[a] && pos[a][0] === "w" && legal(pos, a).includes(b) && inCheck(mv(pos, a, b), "b"), ans: `${s} → ${good[0]}` }; } return captureQ(); }
const MATES = [{ g8: "bK", f7: "bP", g7: "bP", h7: "bP", a1: "wR", g1: "wK" }, { h8: "bK", g6: "wK", a7: "wQ" }, { a8: "bK", b6: "wK", h1: "wR" }, { g8: "bK", f7: "bP", g7: "bP", h7: "bP", d1: "wQ", g1: "wK" },
  { e1: "wK", h5: "wQ", c4: "wB", a2: "wP", b2: "wP", c2: "wP", d2: "wP", e4: "wP", f2: "wP", g2: "wP", h2: "wP", a1: "wR", h1: "wR", b1: "wN", g1: "wN", c1: "wB", e8: "bK", d8: "bQ", a8: "bR", h8: "bR", c8: "bB", f8: "bB", c6: "bN", f6: "bN", a7: "bP", b7: "bP", c7: "bP", d7: "bP", e5: "bP", f7: "bP", g7: "bP", h7: "bP" }];
const mateMoves = pos => { const out = []; Object.keys(pos).forEach(s => { if (pos[s][0] === "w") legal(pos, s).forEach(q => { if (mated(mv(pos, s, q), "b")) out.push([s, q]); }); }); return out; };
function mateQ(lv) { let pos = null;
  if (Math.random() < .55) for (let g = 0; g < 400 && !pos; g++) { const p = {}, edge = pick1([[rnd(0, 7), 7], [rnd(0, 7), 0], [0, rnd(0, 7)], [7, rnd(0, 7)]]); const bk = xySq(...edge); p[bk] = "bK";
    let wk; do { wk = freeSq(p); } while (Math.max(...sqXY(wk).map((v, i) => Math.abs(v - sqXY(bk)[i]))) < 2); p[wk] = "wK"; p[freeSq(p)] = "w" + (lv > 1 && Math.random() < .5 ? "R" : "Q");
    if (!inCheck(p, "b") && anyMove(p, "b") && mateMoves(p).length) pos = p; }
  pos = pos || Object.assign({}, pick1(MATES)); const m = mateMoves(pos)[0];
  return { k: "mv", p: `<b class="sk-q">${L("skMate")}</b>`, pos, ok: (a, b) => pos[a] && pos[a][0] === "w" && legal(pos, a).includes(b) && mated(mv(pos, a, b), "b"), ans: m ? `${m[0]} → ${m[1]}` : "" }; }
const CHESS = [
  { e: "🔲", t: ["The board", "Şahmat taxtası", "Шахматная доска"], g: () => { const s = rsq(); return { k: "sq", p: `<b class="sk-q">${L("skTapSq")}</b><p class="sk-big">${s}</p>`, pos: {}, ok: q => q === s, ans: s }; } },
  { e: "♟️", t: ["Meet the pieces", "Fiqurlarla tanış ol", "Знакомство с фигурами"], g: () => { const t = pick1("KQRBNP".split("")), nm = L("skPieces"), o = shuffle([PIDX[t], ...pickN([0, 1, 2, 3, 4, 5], 3, [PIDX[t]])]);
      return optQ(`<b class="sk-q">${L("skPiece")}</b><p class="sk-glyph ${Math.random() < .5 ? "w" : "b"}">${GLYPH[t]}︎</p>`, nm[PIDX[t]], o.map(k => nm[k])); } },
  { e: "🏰", t: ["The rook", "Top", "Ладья"], g: lv => moveQ("R", lv) },
  { e: "⛪", t: ["The bishop", "Fil", "Слон"], g: lv => moveQ("B", lv) },
  { e: "👑", t: ["The queen", "Vəzir", "Ферзь"], g: lv => moveQ("Q", lv) },
  { e: "🐴", t: ["The knight", "At", "Конь"], g: lv => moveQ("N", lv) },
  { e: "🪖", t: ["The pawn", "Piyada", "Пешка"], g: lv => moveQ("P", lv) },
  { e: "🤴", t: ["The king", "Şah", "Король"], g: lv => moveQ("K", lv) },
  { e: "⚔️", t: ["Capturing", "Vurmaq", "Взятие"], g: () => captureQ() },
  { e: "⚡", t: ["Check!", "Şah!", "Шах!"], g: () => checkQ() },
  { e: "🏆", t: ["Mate in one", "Bir gedişdə mat", "Мат в один ход"], g: lv => mateQ(lv) }
];

/* ---------- courses, progress, path ---------- */
const SK = { math: { e: "🔢", n: "skMath", p: "skMathP", c: ["#6FCF8E", "#7CC7A8", "#9BD88A", "#5BB8A0"], U: MATH }, music: { e: "🎵", n: "skMusic", p: "skMusicP", c: ["#C77DFF", "#FF6FB5", "#B388FF", "#F2A65A"], U: MUSIC },
  chess: { e: "♟️", n: "skChess", p: "skChessP", c: ["#F2C46D", "#D9A85B", "#E8B86A", "#C9955A"], U: CHESS } };
const SKL = 4;   /* lessons per unit (the last one is the review) */
const SP = () => lsGet("mv-sk", {});
const skDone = (c, u) => (SP()[c] || {})[u] || 0;
const skOpen = (c, u) => u === 0 || skDone(c, u - 1) >= SKL;
const skCur = c => { const U = SK[c].U; for (let i = 0; i < U.length; i++) if (skOpen(c, i) && skDone(c, i) < SKL) return i; return U.length - 1; };
const skLessons = c => SK[c].U.reduce((a, _, i) => a + skDone(c, i), 0);
const subj = () => { const s = lsGet("mv-subj", "en"); return SK[s] ? s : "en"; };
const subjEmoji = () => { const m = location.hash.match(/app-world-(\w+)|sk-(\w+)-/), s = m && (m[1] || m[2]); return s && SK[s] ? SK[s].e : "🇬🇧"; };

function skPathHTML(c) { const C = SK[c], cu = skCur(c), offs = [[0, -50, -70, -30], [0, 50, 70, 30]];
  return `<button class="ap-unit dr-course" data-go="pick"><span><small>${L("apCourse")}</small><b>${C.e} ${L(C.n)}</b></span><i>${L("apChange")} ▾</i></button>` +
    C.U.map((U, u) => { const open = skOpen(c, u), d = skDone(c, u), col = C.c[u % C.c.length];
      const nodes = Array.from({ length: SKL }, (_, j) => { const isDone = d > j, isCur = open && j === d && u === cu, can = open && j <= d, tro = j === SKL - 1;
        return `<div class="dr-nw" style="--x:${offs[u % 2][j]}px;--i:${j}">${isCur ? `<span class="ap-start">${skLessons(c) ? L("apStart") : L("dFirst")}</span>` : ""}
          <a class="dr-node ${isDone ? "done" : ""} ${isCur ? "now" : ""} ${can ? "" : "lock"} ${tro ? "trophy" : ""}" href="${can ? `#sk-${c}-${u}-${j}` : `#app-world-${c}`}" aria-label="${esc(T3(U.t))} ${j + 1}"><span>${can || isDone ? (tro ? "🏆" : U.e) : "🔒"}</span>${isDone && !tro ? "<em>✓</em>" : ""}</a></div>`; }).join("");
      return `<section class="dr-unit ${open ? "" : "locked"}" style="--uc:${col}" id="u${u}"><div class="dr-div"><i></i><b>${U.e} ${esc(T3(U.t))}</b><i></i></div><div class="dr-path sk-path">${nodes}</div></section>`; }).join("");
}
function wireSkPath(root) {
  apReveal(root);
  root.onclick = e => { if (e.target.closest("[data-go='pick']")) { Router.go("app-practice"); return; }
    const l = e.target.closest(".dr-node.lock"); if (l) { e.preventDefault(); sfx("miss"); flash(l, "shake"); toast("🔒 " + L("apLocked")); } };
  const nu = sessionStorage.getItem("mv-sknew"); sessionStorage.removeItem("mv-sknew");
  setTimeout(() => { const c = root.querySelector(".dr-node.now"); if (c) { c.scrollIntoView({ block: "center", behavior: REDUCED ? "auto" : "smooth" }); if (nu) { c.classList.add("born"); setTimeout(() => sfx("unlock"), 450); } } }, 250);
}

/* ---------- lesson player ---------- */
VIEWS.sk = root => {
  document.documentElement.classList.add("ap-mode");
  if (typeof safiGate === "function" && safiGate(root)) return {};
  const m = location.hash.match(/^#sk-(\w+)-(\d+)-(\d+)/), c = m && m[1], u = m ? +m[2] : 0, j = m ? +m[3] : 0;
  if (!m || !SK[c] || !SK[c].U[u] || !skOpen(c, u) || j > skDone(c, u) || j >= SKL) { Router.go(SK[c] ? "app-world-" + c : "app-practice"); return {}; }
  const C = SK[c], U = C.U[u], col = C.c[u % C.c.length], review = j === SKL - 1;
  const gens = review ? C.U.slice(Math.max(0, u - 2), u + 1).map(x => x.g) : [U.g], N = review ? 10 : 8;
  const queue = Array.from({ length: N }, (_, k) => pick1(gens)(Math.min(3, j + (k > N / 2 ? 1 : 0))));
  const st = { total: queue.length, solved: 0, ok: 0, miss: 0, combo: 0, maxCombo: 0, start: Date.now(), wasToday: playedToday(), cur: null, phase: "answer", from: null, seqIn: [] };
  root.innerHTML = `<div class="ap ap-les dr sk-les" style="--uc:${col}"><header class="ap-lh"><a href="#app-world-${c}" class="ap-x" aria-label="Close">✕</a>${lhBrand()}<div class="dr-bar"><i></i><em class="dr-cb"></em></div><span class="dr-h inf">${C.e}</span></header>
    <main class="dr-main"><div class="dx sk-x"></div></main><footer class="dr-foot"><div class="dr-fb"><span class="dr-ic"></span><div><b></b><p></p></div></div><button class="dr-go" disabled>${L("dCheck")}</button></footer></div>`;
  const box = root.querySelector(".dx"), foot = root.querySelector(".dr-foot"), go = root.querySelector(".dr-go"), bar = root.querySelector(".dr-bar i");
  let sel = null;
  const ready = on => { go.disabled = !on; go.classList.toggle("on", !!on); };
  const setBar = () => { bar.style.width = Math.max(3, st.solved / st.total * 100) + "%"; };
  function render() {
    const x = st.cur = queue.shift(); window.__skq = x; sel = null; st.phase = "answer"; st.from = null; st.seqIn = []; foot.className = "dr-foot" + (x.k === "opt" ? " auto" : ""); go.textContent = L("dCheck"); ready(false);
    let body = `<div class="sk-prompt">${x.p}</div>`;
    if (x.k === "opt") body += `<div class="dx-opts sk-opts ${x.o.length === 2 ? "two" : ""}">${x.o.map((o, i) => `<button class="dx-opt" data-i="${i}"><span class="dx-n">${i + 1}</span><b>${esc(o)}</b></button>`).join("")}</div>`;
    if (x.k === "key" || x.k === "seq") body += `${x.k === "seq" ? `<div class="sk-seq">${x.seq.map(() => "<i></i>").join("")}</div>` : ""}${pianoHTML(x.labels)}`;
    if (x.k === "sq" || x.k === "mv") body += skBoardHTML(x.pos, { mark: x.mark });
    box.classList.remove("in"); box.innerHTML = body; void box.offsetWidth; box.classList.add("in");
    if (x.play) setTimeout(() => playSeq(x.play, x.gap || .5), 400);
  }
  box.onclick = e => { const x = st.cur; if (st.phase !== "answer") return;
    const pl = e.target.closest("[data-play]"); if (pl) { playSeq(pl.dataset.play.split(",").map(Number), x.gap || .5); return; }
    const o = e.target.closest(".dx-opt"); if (o) { if (st.phase !== "answer") return; sfx("tap"); box.querySelectorAll(".dx-opt").forEach(b => b.classList.toggle("sel", b === o)); sel = +o.dataset.i; ready(true); const pick = sel; clearTimeout(st.autoT); st.autoT = setTimeout(() => { if (st.phase === "answer" && sel === pick) go.click(); }, 300); return; }
    const k = e.target.closest("[data-key]"); if (k) { const s = +k.dataset.key; playSemi(s); k.classList.remove("hit"); void k.offsetWidth; k.classList.add("hit");
      if (x.k === "key") { box.querySelectorAll(".sk-key").forEach(b => b.classList.toggle("sel", b === k)); sel = s; ready(true); }
      else { st.seqIn.push(s); const dots = box.querySelectorAll(".sk-seq i"); dots.forEach((d, i) => d.classList.toggle("on", i < st.seqIn.length)); if (st.seqIn.length >= x.seq.length) { sel = 1; ready(true); check(); } }
      return; }
    const q = e.target.closest("[data-sq]"); if (q) { const s = q.dataset.sq;
      if (x.k === "sq") { sfx("tap"); box.querySelectorAll(".sk-sq").forEach(b => b.classList.toggle("sel", b === q)); sel = s; ready(true); return; }
      if (!st.from || (x.pos[s] && x.pos[s][0] === "w")) { if (x.pos[s] && x.pos[s][0] === "w") { sfx("tap"); st.from = s; sel = null; ready(false);
          box.querySelectorAll(".sk-sq").forEach(b => { b.classList.toggle("from", b === q); b.classList.remove("sel", "dot"); }); legal(x.pos, s).forEach(t => { const b = box.querySelector(`[data-sq="${t}"]`); b && b.classList.add("dot"); }); toast("👉 " + L("skPickPiece")); }
        return; }
      sfx("tap"); box.querySelectorAll(".sk-sq").forEach(b => b.classList.toggle("sel", b === q)); sel = s; ready(true); } };
  function check() {
    const x = st.cur; let ok = false;
    if (x.k === "opt") ok = sel === x.a; else if (x.k === "key") ok = sel === x.s; else if (x.k === "seq") ok = st.seqIn.every((s, i) => s === x.seq[i]);
    else if (x.k === "sq") ok = x.ok(sel); else if (x.k === "mv") ok = !!st.from && x.ok(st.from, sel);
    st.phase = "fb"; const ico = foot.querySelector(".dr-ic"), tb = foot.querySelector("b"), tp = foot.querySelector("p");
    box.querySelectorAll(".sel").forEach(o => o.classList.add(ok ? "good" : "bad"));
    if (x.k === "mv" && ok) { const a = box.querySelector(`[data-sq="${st.from}"] .pc`), b = box.querySelector(`[data-sq="${sel}"]`); if (a && b) { b.querySelector(".pc") && b.querySelector(".pc").remove(); b.appendChild(a); } }
    if (ok) { st.ok++; st.solved++; st.combo++; st.maxCombo = Math.max(st.maxCombo, st.combo); const big = st.combo >= 5 && st.combo % 5 === 0; sfx(big ? "combo" : "ok"); buzz(15);
      ico.innerHTML = safiSVG("happy"); tb.textContent = L("dRight")[(Math.random() * 6) | 0]; tp.textContent = ""; foot.className = "dr-foot show ok";
      if (big) { const cb = root.querySelector(".dr-cb"); cb.textContent = `🔥 ${st.combo} ${L("dCombo")}`; cb.classList.remove("pop"); void cb.offsetWidth; cb.classList.add("pop"); } }
    else { st.miss++; st.combo = 0; sfx("no"); buzz([30, 40, 30]); ico.innerHTML = safiSVG("sad"); tb.textContent = L("dWrongT"); tp.innerHTML = x.ans ? `${L("skOk")} <span class="dr-ans">${esc(x.ans)}</span>` : ""; foot.className = "dr-foot show no";
      if (x.k === "key" || x.k === "seq") { const want = x.k === "key" ? [x.s] : x.seq; want.forEach(s => { const b = box.querySelector(`[data-key="${s}"]`); b && b.classList.add("mk"); }); }
      queue.push(pick1(gens)(j)); }
    setBar(); go.textContent = L("dCont"); ready(true);
  }
  function finish() {
    const acc = Math.round(st.ok / Math.max(1, st.ok + st.miss) * 100), sec = Math.round((Date.now() - st.start) / 1000);
    let xp = 10; if (st.miss === 0) xp += 5; xp += Math.floor(st.maxCombo / 5) * 2;
    const p = SP(); p[c] = p[c] || {}; if (j >= (p[c][u] || 0)) { p[c][u] = j + 1; sessionStorage.setItem("mv-sknew", 1); } lsSet("mv-sk", p);
    qAdd(q => { q.les++; if (st.miss === 0) q.per++; q.sec += sec; q.cmb = Math.max(q.cmb, st.maxCombo); });
    addXp(xp); if (typeof safiAfterLesson === "function") safiAfterLesson("lesson");
    const b = lsGet("mv-badges", {}); if (!b.first) b.first = dayStr(new Date()); if (st.miss === 0) b.perfect = (b.perfect || 0) + 1; if (streak() >= 7) b.week = true; lsSet("mv-badges", b);
    const showDone = () => dDoneScreen(root, { xp, acc, sec, perfect: st.miss === 0, title: L("apDone"), back: "app-world-" + c });
    if (!st.wasToday && playedToday()) streakScreen(root, showDone); else showDone();
  }
  go.onclick = () => { if (go.disabled) return; if (st.phase === "answer") check(); else if (!queue.length) finish(); else render(); };
  const onKey = e => { if (e.key === "Enter") { e.preventDefault(); go.click(); } }; addEventListener("keydown", onKey);
  render(); setBar();
  return { unmount() { removeEventListener("keydown", onKey); } };
};
