/* ===== CORE: language, progress, router, shared quiz ===== */
const UI = {
en:{home:"Minaraverse",back:"Back",locked:"Locked",lockedMsg:"Finish the previous chapter and solve its riddle to open this one.",q:"Question",of:"of",right:"Correct!",wrong:"Not quite.",next:"Next",finish:"See my score",again:"Try again",copy:"Copy my result",copied:"Copied!",share:"Share it with @minaraverse",done:"done",chapters:"chapters",questions:"questions",start:"Start the story",cont:"Continue",complete:"Completed",
 eyebrow:"English · Stories · Possibilities",h1a:"A little English.",h1b:"A whole new",h1c:"world.",lead:"A language is more than a lesson. It's a story you step into. Choose a world, answer, discover, and keep going.",cta:"Choose a story",
 aboutK:"What is Minaraverse?",about:"Minaraverse is an English-learning world created by teacher Minara. Instead of dry exercises, you step into stories: a shelf of old tapes, a pirate voyage, the animal kingdom, a detective mystery in Baku's Old City and a trip around the world. Every story has 7 chapters with 6 questions each: vocabulary, grammar, reading, and a riddle that opens the next chapter.",
 how1:"Choose a story",how1p:"Five worlds, levels A2–B1. Start at chapter one.",how2:"Answer six questions",how2p:"Every answer comes with a short explanation.",how3:"Solve the riddle",how3p:"The last question is a riddle. Its answer opens the next chapter.",
 storiesK:"The stories",storiesH:"Where shall we go?",saved:"Your progress stays on this device.",follow:"Follow the stories on Instagram",
 tapesD:"Pull a tape off the shelf. Mornings, cafés, trains, offices, shopping, weekends and one mystery room.",voyageD:"Set sail through real pirate history, from Port Royal to Execution Dock, port by port.",wildD:"Meet seven remarkable animals, from the savanna to the deep ocean. Read the field notes, then answer.",travelD:"Plan a trip around the world, from Baku to Sydney, and practise the English every traveller needs.",
 openTape:"Open",playTape:"Play the tape",close:"Close",setSail:"Set sail",readLog:"Read the log",backSea:"Back to sea",nextPort:"Sail to the next port",ports:"Ports",seeFacts:"See the facts",startQ:"Answer six questions",nextAnimal:"Next animal",animals:"Animals",plan:"Plan my trip",nextCity:"Next city",route:"Route",passport:"Passport",quickFacts:"Quick facts about",fieldNotes:"Field notes"},
az:{home:"Minaraverse",back:"Geri",locked:"Bağlı",lockedMsg:"Bunu açmaq üçün əvvəlki fəsli bitir və onun tapmacasını həll et.",q:"Sual",of:"/",right:"Düzdür!",wrong:"Tam deyil.",next:"Növbəti",finish:"Nəticəmə bax",again:"Yenidən",copy:"Nəticəni kopyala",copied:"Kopyalandı!",share:"@minaraverse ilə paylaş",done:"tamam",chapters:"fəsil",questions:"sual",start:"Hekayəyə başla",cont:"Davam et",complete:"Bitdi",
 eyebrow:"İngilis dili · Hekayələr · İmkanlar",h1a:"Bir az ingilis dili.",h1b:"Tamamilə yeni bir",h1c:"dünya.",lead:"Dil dərsdən daha çoxdur. Bu, içinə addımladığın bir hekayədir. Dünya seç, cavab ver, kəşf et və davam et.",cta:"Hekayə seç",
 aboutK:"Minaraverse nədir?",about:"Minaraverse müəllim Minaranın yaratdığı ingilis dili dünyasıdır. Quru tapşırıqlar əvəzinə hekayələrin içinə daxil olursan: köhnə kaset rəfi, pirat səyahəti, heyvanlar aləmi, İçərişəhərdə detektiv macəra və dünya səyahəti. Hər hekayədə 7 fəsil, hər fəsildə 6 sual var: söz ehtiyatı, qrammatika, oxu və növbəti fəsli açan tapmaca.",
 how1:"Hekayə seç",how1p:"Beş dünya, A2–B1 səviyyəsi. Birinci fəsildən başla.",how2:"Altı suala cavab ver",how2p:"Hər cavabdan sonra qısa izah var.",how3:"Tapmacanı həll et",how3p:"Son sual tapmacadır. Onun cavabı növbəti fəsli açır.",
 storiesK:"Hekayələr",storiesH:"Hara gedək?",saved:"İrəliləyişin bu cihazda saxlanılır.",follow:"Hekayələri Instagram-da izlə",
 tapesD:"Rəfdən bir kaset götür. Səhərlər, kafelər, qatarlar, ofis, alış-veriş, həftəsonu və bir sirli otaq.",voyageD:"Real pirat tarixi ilə üz: Port Royal-dan Ekzekyuşn Dok-a qədər, liman-liman.",wildD:"Savannadan dərin okeana qədər yeddi heyrətamiz heyvanla tanış ol. Qeydləri oxu, sonra cavab ver.",travelD:"Bakıdan Sidneyə dünya səyahəti planla və hər səyyahın lazım olan ingilis dilini məşq et.",
 openTape:"Aç",playTape:"Kaseti oynat",close:"Bağla",setSail:"Yelkən aç",readLog:"Jurnalı oxu",backSea:"Dənizə qayıt",nextPort:"Növbəti limana üz",ports:"Limanlar",seeFacts:"Faktlara bax",startQ:"Altı suala cavab ver",nextAnimal:"Növbəti heyvan",animals:"Heyvanlar",plan:"Səyahəti planla",nextCity:"Növbəti şəhər",route:"Marşrut",passport:"Pasport",quickFacts:"Qısa faktlar:",fieldNotes:"Sahə qeydləri"},
ru:{home:"Minaraverse",back:"Назад",locked:"Закрыто",lockedMsg:"Пройди предыдущую главу и разгадай её загадку, чтобы открыть эту.",q:"Вопрос",of:"из",right:"Верно!",wrong:"Не совсем.",next:"Далее",finish:"Мой результат",again:"Ещё раз",copy:"Скопировать результат",copied:"Скопировано!",share:"Поделись с @minaraverse",done:"пройдено",chapters:"глав",questions:"вопросов",start:"Начать историю",cont:"Продолжить",complete:"Пройдено",
 eyebrow:"Английский · Истории · Возможности",h1a:"Немного английского.",h1b:"Целый новый",h1c:"мир.",lead:"Язык — это больше, чем урок. Это история, в которую ты входишь. Выбери мир, отвечай, открывай новое и двигайся дальше.",cta:"Выбрать историю",
 aboutK:"Что такое Minaraverse?",about:"Minaraverse — мир английского языка, созданный преподавателем Минарой. Вместо скучных упражнений ты попадаешь в истории: полка со старыми кассетами, пиратское плавание, мир животных, детектив в Старом городе Баку и путешествие вокруг света. В каждой истории 7 глав по 6 вопросов: лексика, грамматика, чтение и загадка, которая открывает следующую главу.",
 how1:"Выбери историю",how1p:"Пять миров, уровень A2–B1. Начни с первой главы.",how2:"Ответь на шесть вопросов",how2p:"После каждого ответа — короткое объяснение.",how3:"Разгадай загадку",how3p:"Последний вопрос — загадка. Её ответ открывает следующую главу.",
 storiesK:"Истории",storiesH:"Куда отправимся?",saved:"Прогресс сохраняется на этом устройстве.",follow:"Следи за историями в Instagram",
 tapesD:"Возьми кассету с полки. Утро, кафе, поезда, офис, покупки, выходные и одна тайная комната.",voyageD:"Плыви по настоящей истории пиратов: от Порт-Ройяла до Причала казней, порт за портом.",wildD:"Познакомься с семью удивительными животными, от саванны до глубин океана. Прочитай заметки и отвечай.",travelD:"Спланируй путешествие вокруг света из Баку в Сидней и тренируй английский, нужный каждому путешественнику.",
 openTape:"Открыть",playTape:"Включить кассету",close:"Закрыть",setSail:"Поднять паруса",readLog:"Читать журнал",backSea:"Назад в море",nextPort:"К следующему порту",ports:"Порты",seeFacts:"Смотреть факты",startQ:"Ответить на шесть вопросов",nextAnimal:"Следующее животное",animals:"Животные",plan:"Спланировать поездку",nextCity:"Следующий город",route:"Маршрут",passport:"Паспорт",quickFacts:"Коротко о:",fieldNotes:"Полевые заметки"}
};
const IG = "https://www.instagram.com/minaraverse/";
let LANG = "en"; try { LANG = localStorage.getItem("mv-lang") || "en"; } catch (e) {}
const L = k => (UI[LANG] && UI[LANG][k]) || UI.en[k];
const loc = u => LANG === "az" ? u.az : LANG === "ru" ? u.ru : null;
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE = matchMedia("(hover:hover) and (pointer:fine)").matches;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const mix = (a, b, t) => a + (b - a) * t;
const smooth = x => x * x * (3 - 2 * x);
const out3 = k => 1 - Math.pow(1 - k, 3);

const UI2 = {
en:{homeBtn:"Home",lockedMsg:"Solve the riddle at the end of the previous chapter to open this one.",riddleNo:"The riddle isn't solved yet. Play this chapter again to open the next one.",riddleYes:"Riddle solved! The next chapter is open.",
 msgPerfect:"Perfect score! ✦",msgGreat:"Great work!",msgStart:"Good start. Try again to beat your score.",yourName:"Your name",namePh:"Type your name",yourAns:"Your answer",correctAns:"Correct answer",review:"Your answers",
 sendMinara:"Send to Minara on Instagram",sendHint:"Copy your result, then paste it into the Instagram chat.",score:"Score",chapter:"Chapter",date:"Date",riddleL:"Riddle",solved:"solved",notSolved:"not solved",
 wildD:"Meet seven animals in real photos, from the savanna to Antarctica. Read the field notes, then answer.",lock:"Locked"},
az:{homeBtn:"Ana səhifə",lockedMsg:"Bunu açmaq üçün əvvəlki fəslin sonundakı tapmacanı düz həll et.",riddleNo:"Tapmaca hələ həll olunmayıb. Növbəti fəsli açmaq üçün bu fəsli yenidən keç.",riddleYes:"Tapmaca həll olundu! Növbəti fəsil açıldı.",
 msgPerfect:"Mükəmməl nəticə! ✦",msgGreat:"Əla iş!",msgStart:"Yaxşı başlanğıc. Nəticəni yaxşılaşdırmaq üçün yenidən cəhd et.",yourName:"Adın",namePh:"Adını yaz",yourAns:"Sənin cavabın",correctAns:"Düzgün cavab",review:"Cavabların",
 sendMinara:"Minaraya Instagram-da göndər",sendHint:"Nəticəni kopyala, sonra Instagram çatında yapışdır.",score:"Bal",chapter:"Fəsil",date:"Tarix",riddleL:"Tapmaca",solved:"həll olundu",notSolved:"həll olunmadı",
 wildD:"Savannadan Antarktidaya qədər yeddi heyvanla real fotolarda tanış ol. Qeydləri oxu, sonra cavab ver.",lock:"Bağlı"},
ru:{homeBtn:"Главная",lockedMsg:"Чтобы открыть эту главу, правильно разгадай загадку в конце предыдущей.",riddleNo:"Загадка ещё не разгадана. Пройди эту главу ещё раз, чтобы открыть следующую.",riddleYes:"Загадка разгадана! Следующая глава открыта.",
 msgPerfect:"Идеальный результат! ✦",msgGreat:"Отличная работа!",msgStart:"Хорошее начало. Попробуй ещё раз, чтобы улучшить результат.",yourName:"Твоё имя",namePh:"Введи имя",yourAns:"Твой ответ",correctAns:"Правильный ответ",review:"Твои ответы",
 sendMinara:"Отправить Минаре в Instagram",sendHint:"Скопируй результат и вставь его в чат Instagram.",score:"Баллы",chapter:"Глава",date:"Дата",riddleL:"Загадка",solved:"разгадана",notSolved:"не разгадана",
 wildD:"Познакомься с семью животными на настоящих фотографиях, от саванны до Антарктиды. Прочитай заметки и отвечай.",lock:"Закрыто"}
};
UI2.en.hintL = "Not quite! Here's a hint. Try again:"; UI2.az.hintL = "Tam deyil! Bir ipucu, yenidən cəhd et:"; UI2.ru.hintL = "Не совсем! Вот подсказка, попробуй ещё раз:";
Object.assign(UI2.en, { sendRes: "Send my result to Minara", sent: "Sent to Minara", sendFail: "Could not send. Try again" });
Object.assign(UI2.az, { sendRes: "Nəticəmi Minaraya göndər", sent: "Minaraya göndərildi", sendFail: "Göndərilmədi. Yenidən cəhd et" });
Object.assign(UI2.ru, { sendRes: "Отправить результат Минаре", sent: "Отправлено Минаре", sendFail: "Не отправилось. Попробуй ещё раз" });
Object.assign(UI2.en, { getCert: "Get my certificate", certTitle: "Certificate of Achievement", certNamePh: "Type your full name for the certificate", certSave: "Save certificate", certHint: "On a phone you can also press and hold the image to save it.", stories: "stories", h2a: "Stories first.", h2b: "Words follow.", showTr: "Show translation" });
Object.assign(UI2.az, { getCert: "Sertifikatımı al", certTitle: "Uğur sertifikatı", certNamePh: "Sertifikat üçün ad və soyadını yaz", certSave: "Sertifikatı yadda saxla", certHint: "Telefonda şəklin üzərinə basıb saxlayaraq da yadda saxlaya bilərsən.", stories: "hekayə", h2a: "Əvvəl hekayə.", h2b: "Sonra sözlər.", showTr: "Tərcüməni göstər" });
Object.assign(UI2.ru, { getCert: "Получить сертификат", certTitle: "Сертификат достижения", certNamePh: "Введи имя и фамилию для сертификата", certSave: "Сохранить сертификат", certHint: "На телефоне можно также нажать и удерживать картинку, чтобы сохранить её.", stories: "истории", h2a: "Сначала истории.", h2b: "Слова — потом.", showTr: "Показать перевод" });
UI2.en.riddleYes = "Riddle solved! The next chapter is open.";
Object.assign(UI2.en, { typeHere: "Type your answer", check: "Check", hintBtn: "Hint", retypePh: "Type the correct answer to continue", tapWords: "Tap the words in the right order", listenBtn: "Listen", warmL: "Warm-up review", reviewedL: "reviewed", daysL: "day streak", shareCard: "Share result card", cardHint: "Save the card and post it to your Instagram Story. Tag @minaraverse!", ctaLevel: "Find your English level", ctaLevelSub: "Free 20-question test · 5 minutes", cardSave: "Save card", reviewT: "Review", reviewDone: "Review done! These words will come back later so you never forget them." });
Object.assign(UI2.az, { typeHere: "Cavabını yaz", check: "Yoxla", hintBtn: "İpucu", retypePh: "Davam etmək üçün düzgün cavabı yaz", tapWords: "Sözlərə düzgün sıra ilə toxun", listenBtn: "Dinlə", warmL: "İsinmə təkrarı", reviewedL: "təkrar edildi", daysL: "gün ardıcıl", shareCard: "Nəticə kartını paylaş", cardHint: "Kartı yadda saxla və Instagram Story-də paylaş. @minaraverse-i qeyd et!", ctaLevel: "İngilis dili səviyyəni öyrən", ctaLevelSub: "Pulsuz 20 suallıq test · 5 dəqiqə", cardSave: "Kartı yadda saxla", reviewT: "Təkrar", reviewDone: "Təkrar bitdi! Bu sözlər unutmayasan deyə sonra yenə qayıdacaq." });
Object.assign(UI2.ru, { typeHere: "Напиши ответ", check: "Проверить", hintBtn: "Подсказка", retypePh: "Напиши правильный ответ, чтобы продолжить", tapWords: "Нажимай на слова в правильном порядке", listenBtn: "Слушать", warmL: "Разминка: повторение", reviewedL: "повторено", daysL: "дней подряд", shareCard: "Поделиться карточкой", cardHint: "Сохрани карточку и выложи в Instagram Story. Отметь @minaraverse!", ctaLevel: "Узнай свой уровень английского", ctaLevelSub: "Бесплатный тест из 20 вопросов · 5 минут", cardSave: "Сохранить карточку", reviewT: "Повторение", reviewDone: "Повторение готово! Эти слова вернутся позже, чтобы ты их не забыл." });
for (const k in UI2) Object.assign(UI[k], UI2[k]);
const DM = "https://ig.me/m/minaraverse";
/* results → Minara's Google Sheet (via a Google Form). Fill in after the form is created. */
const RESULTS = { form: "https://docs.google.com/forms/d/e/1FAIpQLSeCkV0nqllm4O4REdNfQG8ZcCU-Je-UA1_uo7VMKudP6tpPqw/viewform",
  f: { name: "entry.1516682587", surname: "entry.821347703", type: "entry.445942987", age: "entry.1307708124", email: "entry.2138396605", whatsapp: "entry.232599064",
       format: "entry.1261795307", level: "entry.1834211523", story: "entry.1093405568", chapter: "entry.998274707", score: "entry.132698789", riddle: "entry.1778180947",
       answers: "entry.473226395", message: "entry.1959006857", lang: "entry.891614959" } };
const resultsOn = () => !!(RESULTS.form && RESULTS.f.name) && !/claude\.ai|claudeusercontent/.test(location.host);
async function sendResult(rec) {
  if (!resultsOn()) return false;
  const b = new URLSearchParams(); for (const k in RESULTS.f) if (RESULTS.f[k] && rec[k] != null) b.append(RESULTS.f[k], rec[k]);
  try { await fetch(RESULTS.form.replace(/viewform.*$/, "formResponse"), { method: "POST", mode: "no-cors", body: b }); return true; } catch (e) { return false; }
}

/* progress: per chapter {b: best score, r: riddle solved} */
let PROG = {}; try { PROG = JSON.parse(localStorage.getItem("mv-progress-v3") || "{}"); } catch (e) {}
const saveProg = () => { try { localStorage.setItem("mv-progress-v3", JSON.stringify(PROG)); } catch (e) {} };
const rec = (s, i) => (PROG[s] && PROG[s][i]) || null;
const best = (s, i) => rec(s, i) ? rec(s, i).b : undefined;
const isDone = (s, i) => rec(s, i) != null;
const solved = (s, i) => !!(rec(s, i) && rec(s, i).r);
const isOpen = (s, i) => i === 0 || solved(s, i - 1);
const doneCount = s => STORIES[s].units.filter((_, i) => solved(s, i)).length;
const record = (s, i, score, r) => { PROG[s] = PROG[s] || {}; const o = PROG[s][i] || { b: 0, r: false }; PROG[s][i] = { b: Math.max(o.b, score), r: o.r || r }; saveProg(); };
const nextIndex = s => { const n = STORIES[s].units.length; for (let i = 0; i < n; i++) if (!solved(s, i)) return i; return n - 1; };
let NAME = ""; try { NAME = localStorage.getItem("mv-name") || ""; } catch (e) {}

/* seeded shuffle so answers aren't always first */
function shuffled(q, seed) {
  const idx = q[1].map((_, i) => i);
  let h = 2166136261; for (const c of seed) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); }
  for (let i = idx.length - 1; i > 0; i--) { h = Math.imul(h ^ (h >>> 13), 1274126177); const j = Math.abs(h) % (i + 1); [idx[i], idx[j]] = [idx[j], idx[i]]; }
  return idx;
}

/* language pill */
function langPill(cls = "") {
  return `<div class="lang ${cls}" role="group" aria-label="Language">${["en","az","ru"].map(l => `<button type="button" data-setlang="${l}" aria-pressed="${l===LANG}">${l.toUpperCase()}</button>`).join("")}</div>`;
}
document.addEventListener("click", e => {
  const b = e.target.closest("[data-setlang]"); if (!b) return;
  LANG = b.dataset.setlang; try { localStorage.setItem("mv-lang", LANG); } catch (er) {}
  document.documentElement.lang = LANG; Router.remount();
});
/* home button shown in every world */
const homeBtn = (cls = "") => `<a class="mv-home ${cls}" href="#" data-gohome><span aria-hidden="true">←</span> ${L("homeBtn")}</a>`;
document.addEventListener("click", e => { const h = e.target.closest("[data-gohome]"); if (!h) return; e.preventDefault(); ACTIVE = null; Router.go(""); });

/* ---------- shared quiz ---------- */
/* ACTIVE keeps an unfinished quiz alive across a language switch */
let ACTIVE = null;
const trOf = (story, idx, qi) => { const q = STORIES[story] && STORIES[story].units[idx] && STORIES[story].units[idx].qs[qi];
  return (TR[story] && TR[story][idx] && TR[story][idx][qi]) || (q && q[3] && q[3].tr) || {}; };
const lsGet = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
const dayStr = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const addDays = n => { const d = new Date(); d.setDate(d.getDate() + n); return dayStr(d); };

/* forgiving day streak: one missed day is forgiven at most once a week */
let DAYS = lsGet("mv-days", []);
function markDay() { const t = dayStr(new Date()); if (!DAYS.includes(t)) { DAYS.push(t); DAYS = DAYS.slice(-400); lsSet("mv-days", DAYS); } }
function streak() {
  const d = new Date(); if (!DAYS.includes(dayStr(d))) d.setDate(d.getDate() - 1);
  let n = 0, lastFreeze = -99;
  for (let k = 0; k < 400; k++) {
    if (DAYS.includes(dayStr(d))) n++;
    else { const p = new Date(d); p.setDate(p.getDate() - 1); if (n > 0 && k - lastFreeze >= 7 && DAYS.includes(dayStr(p))) lastFreeze = k; else break; }
    d.setDate(d.getDate() - 1);
  }
  return n;
}
const playedToday = () => DAYS.includes(dayStr(new Date()));

/* spaced review queue: wrong answers come back after 1, 3, 7 and 21 days */
let REV = lsGet("mv-review", {});
const IV = [1, 3, 7, 21];
const revWrong = key => { REV[key] = { due: addDays(1), step: 0 }; lsSet("mv-review", REV); };
const revRight = key => { const r = REV[key]; if (!r) return; r.step++; if (r.step >= IV.length) delete REV[key]; else r.due = addDays(IV[r.step]); lsSet("mv-review", REV); };
const qByKey = k => { const [s, i, q] = k.split("|"); const u = STORIES[s] && STORIES[s].units[+i]; return u && u.qs[+q] ? { s, i: +i, qi: +q, q: u.qs[+q] } : null; };
const dueKeys = (pref = "") => Object.keys(REV).filter(k => REV[k].due <= dayStr(new Date()) && qByKey(k)).sort((a, b) => (b.startsWith(pref) ? 1 : 0) - (a.startsWith(pref) ? 1 : 0));

/* question kinds: typed answers are chosen automatically (blank + short answer, max 2 per chapter) */
function autoTyped(story, idx) {
  const u = STORIES[story].units[idx], has = u.qs.filter(q => q[3] && q[3].t === "type").length, out = [];
  u.qs.forEach((q, k) => { if (k === u.qs.length - 1 || q[3]) return;
    if (/_{2,}/.test(q[0]) && q[1][0].split(/\s+/).length <= 2 && !/[…"“]/.test(q[1][0]) && out.length + has < 2) out.push(k); });
  return out;
}
const kindOf = (story, idx, qi) => { const S = STORIES[story], q = S.units[idx].qs[qi]; if (q[3]) return q[3].t;
  if (!S.noRiddle && qi === S.units[idx].qs.length - 1) return "mc"; return autoTyped(story, idx).includes(qi) ? "type" : "mc"; };
const norm = s => String(s).toLowerCase().replace(/[’‘`]/g, "'").replace(/[^a-z0-9' ]/g, " ").replace(/\s+/g, " ").trim();
const typedOk = (q, v) => [q[1][0], ...((q[3] && q[3].alt) || [])].some(a => norm(a) === norm(v) || norm(a).replace(/^(a|an|the) /, "") === norm(v));
const seedRand = seed => { let h = 2166136261; for (const c of seed) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return () => { h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h >>> 0) % 10000) / 10000; }; };
function tilesOf(sentence, seed) { const w = sentence.split(" "), r = seedRand(seed), idx = w.map((_, i) => i);
  for (let k = 0; k < 20 && idx.every((v, i) => v === i); k++) for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
  return idx.map(i => ({ i, w: w[i] })); }

function Quiz(el, { story, idx, onDone, onNext, nextLabel, cls = "", review = null }) {
  const S = review ? null : STORIES[story], unit = review ? null : S.units[idx], n = review ? 0 : unit.qs.length;
  const last = review ? true : idx + 1 >= S.units.length, noR = review ? true : !!S.noRiddle;
  let st = ACTIVE && !review && ACTIVE.story === story && ACTIVE.idx === idx ? ACTIVE : null;
  if (!st) {
    st = { story, idx, i: 0, picked: null, picks: [], ans: [], wrongR: [], r: false, deck: [] };
    const warm = review ? review.slice(0, 10) : dueKeys(story + "|").filter(k => !k.startsWith(`${story}|${idx}|`)).slice(0, 3);
    warm.forEach(k => { const o = qByKey(k); if (o) st.deck.push({ ...o, warm: true, key: k, kind: o.q[3] ? o.q[3].t : "mc" }); });
    if (!review) unit.qs.forEach((q, qi) => st.deck.push({ s: story, i: idx, qi, q, warm: false, key: `${story}|${idx}|${qi}`, kind: kindOf(story, idx, qi) }));
  }
  const D = st.deck, nWarm = D.filter(d => d.warm).length;
  const ok = k => st.picks[k] === 0;
  st.rec = () => ({ type: "Chapter", ...(typeof profileFields === "function" ? profileFields() : {}), name: ((typeof PROFILE === "function" && PROFILE().first) || NAME), level: (typeof myLevel === "function" && myLevel()) || "", story: S.title, chapter: `${idx + 1}. ${unit.full || unit.name}`, score: `${st.picks.filter(p => p === 0).length}/${n}`,
    riddle: noR ? "—" : st.r ? (st.wrongR.length ? `solved (${st.wrongR.length + 1} tries)` : "solved") : "not solved",
    answers: unit.qs.map((q, k) => `${k + 1}. ${ok(k) ? "✓" : "✗"} ${st.ans[k] || ""}${ok(k) ? "" : " (correct: " + q[1][0] + ")"}`).join("\n"), lang: LANG });
  const report = () => {
    const s = st.picks.filter(p => p === 0).length, d = new Date();
    const lines = unit.qs.map((q, k) => `${k + 1}. ${ok(k) ? "✓" : "✗"} ${q[0]}\n   ${UI.en.yourAns}: ${st.ans[k] || ""}${ok(k) ? "" : ` | ${UI.en.correctAns}: ${q[1][0]}`}`);
    return [`Minaraverse — ${S.title}`, `${UI.en.chapter}: ${unit.full || unit.name} (${idx + 1}/${S.units.length})`,
      `Name: ${NAME || "—"}`, `${UI.en.date}: ${d.toISOString().slice(0, 10)}`, `${UI.en.score}: ${s}/${n}`,
      noR ? "" : `${UI.en.riddleL}: ${st.r ? UI.en.solved + " ✓" + (st.wrongR.length ? ` (${st.wrongR.length + 1} tries)` : "") : UI.en.notSolved + " ✗"}`, "", ...lines].filter(x => x !== "" || true).join("\n");
  };
  const fbBox = (it, good) => { const t = trOf(it.s, it.i, it.qi);
    return `<div class="qz-fb ${good ? "ok" : "no"}" role="status"><b>${good ? L("right") : L("wrong")}</b>
      <p><i>EN</i>${esc(it.q[2])} ${sayBtn(it.q[2], "sm")}</p>${t.az ? `<p><i>AZ</i>${esc(t.az)}</p>` : ""}${t.ru ? `<p><i>RU</i>${esc(t.ru)}</p>` : ""}</div>`; };
  const doneScreen = () => {
    if (review) { el.innerHTML = `<div class="qz ${cls} qz-done"><div class="qz-k">🔁 ${L("reviewT")}</div><div class="qz-score">✓</div><p class="qz-msg">${L("reviewDone")}</p>
      <p class="qz-streak">🔥 ${streak()} ${L("daysL")}</p><div class="qz-row"><a class="qz-btn" href="#" data-gohome>${L("homeBtn")}</a></div></div>`; return; }
    const s = st.picks.filter(p => p === 0).length, rOk = noR || st.r;
    el.innerHTML = `<div class="qz ${cls} qz-done">
      <div class="qz-k">${esc(unit.full || unit.name)}</div>
      <div class="qz-score">${s}<span>/${n}</span></div>
      <p class="qz-msg">${s === n ? L("msgPerfect") : s >= n - 2 ? L("msgGreat") : L("msgStart")}</p>
      <p class="qz-streak">🔥 ${streak()} ${L("daysL")}${nWarm ? ` · 🔁 ${nWarm} ${L("reviewedL")}` : ""}</p>
      ${last || noR ? "" : `<p class="qz-riddle ${rOk ? "ok" : "no"}">${rOk ? "🔓 " + L("riddleYes") : "🔒 " + L("riddleNo")}</p>`}
      <div class="qz-row">
        ${!last && rOk && onNext ? `<button type="button" class="qz-btn" data-q="next">${esc(nextLabel || L("next"))} →</button>` : ""}
        <button type="button" class="qz-btn ghost" data-q="card">📸 ${L("shareCard")}</button>
        <button type="button" class="qz-btn ghost" data-q="again">${L("again")}</button>
      </div>
      ${S.units.every((_, k) => solved(story, k)) ? `<button type="button" class="qz-cert" data-q="cert">🏅 ${L("getCert")}</button>` : ""}
      <a class="qz-cta" href="#level"><span>🎯</span><b>${L("ctaLevel")}</b><small>${L("ctaLevelSub")}</small><i>→</i></a>
      <details class="qz-rev"><summary>${L("review")}</summary><ol>${unit.qs.map((q, k) =>
        `<li class="${ok(k) ? "ok" : "no"}"><span>${ok(k) ? "✓" : "✗"}</span><div><b>${esc(q[0])}</b><small>${L("yourAns")}: ${esc(st.ans[k] || "")}${ok(k) ? "" : ` · ${L("correctAns")}: ${esc(q[1][0])}`}</small></div></li>`).join("")}</ol></details>
      <div class="qz-send">
        <label class="qz-name"><span>${L("yourName")}</span><input id="qz-name-${story}" type="text" autocomplete="name" placeholder="${L("namePh")}" value="${esc(NAME)}"></label>
        <pre class="qz-copy" id="qzct">${esc(report())}</pre>
        ${resultsOn() ? `<div class="qz-row"><button type="button" class="qz-btn" data-q="send">📤 ${L("sendRes")}</button></div>` : ""}
        ${!resultsOn() && RESULTS.form ? `<div class="qz-row"><a class="qz-btn" data-formlink href="#" target="_blank" rel="noopener">📤 ${L("sendRes")}</a></div>` : ""}
        <div class="qz-row"><button type="button" class="qz-btn ${resultsOn() ? "ghost" : ""}" data-q="copy">${L("copy")}</button><a class="qz-btn ghost qz-dm" href="${DM}" target="_blank" rel="noopener">${L("sendMinara")} ↗</a></div>
        <p class="qz-hint">${L("sendHint")}</p>
      </div></div>`;
    const inp = el.querySelector(".qz-name input");
    inp.oninput = () => { NAME = inp.value.trim(); try { localStorage.setItem("mv-name", NAME); } catch (e) {} el.querySelector("#qzct").textContent = report(); };
  };
  const render = () => {
    if (st.i >= D.length) return doneScreen();
    const it = D[st.i], q = it.q, p = st.picked, isMainRiddle = !it.warm && !noR && it.qi === n - 1;
    const mainIdx = st.i - nWarm;
    const dots = it.warm ? D.filter(d => d.warm).map((_, k) => `<i class="${k < st.i ? "ok" : k === st.i ? "now" : ""}"></i>`).join("")
      : unit.qs.map((_, k) => `<i class="${k < st.picks.length && st.picks[k] != null && k < mainIdx + (p != null ? 1 : 0) ? (ok(k) ? "ok" : "no") : k === mainIdx ? "now" : ""}"></i>`).join("");
    const head = it.warm ? `🔁 ${L("warmL")} ${st.i + 1}/${nWarm}` : `${L("q")} ${mainIdx + 1} ${L("of")} ${n}${isMainRiddle ? " · 🔑 " + L("riddleL") : ""}`;
    let body = "";
    if (it.kind === "type") {
      const done = p != null, good = done && p === 0, hint = st.hint ? hintPattern(q[1][0]) : "";
      body = `<form class="qz-type ${done ? (good ? "ok" : "no") : ""}" data-form="type" autocomplete="off">
        <input id="qz-t" type="text" inputmode="text" autocapitalize="off" spellcheck="false" placeholder="${L("typeHere")}" value="${esc(st.typed || "")}" ${done ? "disabled" : ""} aria-label="${L("typeHere")}">
        ${done ? "" : `<button type="submit" class="qz-btn">${L("check")}</button>`}</form>
        ${!done ? `<div class="qz-thelp"><button type="button" class="qz-mini" data-q="hint">💡 ${L("hintBtn")}</button>${hint ? `<span class="qz-pattern">${hint}</span>` : ""}</div>` : ""}
        ${done && !good ? `<p class="qz-correct">${L("correctAns")}: <b>${esc(q[1][0])}</b></p>
          ${st.retyped ? "" : `<form class="qz-type retype" data-form="retype" autocomplete="off"><input id="qz-rt" type="text" autocapitalize="off" spellcheck="false" placeholder="${L("retypePh")}"><button type="submit" class="qz-btn">✓</button></form>`}` : ""}`;
    } else if (it.kind === "order") {
      const tiles = tilesOf(q[1][0], it.key), used = st.order || [];
      const done = p != null;
      body = `<div class="qz-orderline ${done ? (p === 0 ? "ok" : "no") : ""}">${used.map((ti, k) => `<button type="button" class="qz-tile in" data-out="${k}" ${done ? "disabled" : ""}>${esc(tiles.find(t => t.i === ti).w)}</button>`).join("") || `<span class="qz-ph">${L("tapWords")}</span>`}</div>
        <div class="qz-tiles">${tiles.map(t => `<button type="button" class="qz-tile" data-tile="${t.i}" ${used.includes(t.i) || done ? "disabled" : ""}>${esc(t.w)}</button>`).join("")}</div>
        ${!done && used.length === tiles.length ? `<div class="qz-row"><button type="button" class="qz-btn" data-q="ordercheck">${L("check")}</button></div>` : ""}
        ${done && p !== 0 ? `<p class="qz-correct">${L("correctAns")}: <b>${esc(q[1][0])}</b></p>` : ""}`;
    } else {
      const order = shuffled(q, it.key);
      const opts = order.map((oi, k) => {
        const out = isMainRiddle && st.wrongR.includes(oi);
        let c = out ? "wrong" : ""; if (p != null) { if (oi === 0) c = "right"; else if (oi === p) c = "wrong"; }
        return `<button type="button" class="qz-opt ${c}" data-o="${oi}" ${p != null || out ? "disabled" : ""}><span class="qz-l">${"ABCD"[k]}</span><span class="qz-ot">${esc(q[1][oi])}</span>${it.kind === "listen" ? "" : sayBtn(q[1][oi], "sm")}</button>`;
      }).join("");
      body = `${it.kind === "listen" ? `<button type="button" class="qz-listen" data-say="${esc(q[3].say)}">🔊 <span>${L("listenBtn")}</span></button>` : ""}<div class="qz-opts">${opts}</div>
        ${p == null && isMainRiddle && st.wrongR.length ? `<div class="qz-hintbox" role="status"><b>💡 ${L("hintL")}</b><span class="qz-pattern">${hintPattern(q[1][0])}</span></div>` : ""}`;
    }
    const canNext = p != null && !(it.kind === "type" && p !== 0 && !st.retyped);
    el.innerHTML = `<div class="qz ${cls} ${it.warm ? "qz-warm" : ""}">
      <div class="qz-top"><span class="qz-k">${head}</span><span class="qz-dots">${dots}</span></div>
      <p class="qz-q">${it.kind === "listen" ? "" : sayBtn(q[0].replace(/_{2,}/g, "blank"), "big")}<span>${esc(q[0])}</span></p>
      ${body}
      ${p != null ? fbBox(it, p === 0) : ""}
      ${canNext ? `<div class="qz-row"><button type="button" class="qz-btn" data-q="adv">${st.i === D.length - 1 ? L("finish") : L("next")} →</button></div>` : ""}</div>`;
    if (canNext) { const b = el.querySelector('[data-q="adv"]'); b && b.focus({ preventScroll: true }); }
    else { const t = el.querySelector("#qz-rt") || (p == null && el.querySelector("#qz-t")); if (t && FINE) t.focus({ preventScroll: true }); }
  };
  const answer = (good, text, optIdx) => {
    const it = D[st.i]; ACTIVE = review ? null : st;
    st.picked = good ? 0 : (optIdx != null ? optIdx : -1);
    if (typeof onQuizAnswer === "function") onQuizAnswer(good, it.warm || !!review);
    if (it.warm) { good ? revRight(it.key) : revWrong(it.key); }
    else { const k = st.i - nWarm; if (st.picks[k] == null) { st.picks[k] = st.picked; st.ans[k] = text; }
      if (!good && !(!noR && it.qi === n - 1)) revWrong(it.key); }
    render();
  };
  el.onsubmit = e => {
    e.preventDefault(); const f = e.target.dataset.form, it = D[st.i];
    if (f === "type") { const v = el.querySelector("#qz-t").value; if (!v.trim()) return; st.typed = v; answer(typedOk(it.q, v), v.trim()); }
    if (f === "retype") { const i2 = el.querySelector("#qz-rt"); if (typedOk(it.q, i2.value)) { st.retyped = true; render(); } else { i2.classList.add("shake"); setTimeout(() => i2.classList.remove("shake"), 500); } }
  };
  el.onclick = e => {
    const o = e.target.closest("[data-o]"), a = e.target.closest("[data-q]"), tl = e.target.closest("[data-tile]"), ou = e.target.closest("[data-out]");
    const it = D[st.i];
    if (tl && st.picked == null) { st.order = [...(st.order || []), +tl.dataset.tile]; render(); return; }
    if (ou && st.picked == null) { st.order.splice(+ou.dataset.out, 1); render(); return; }
    if (o && st.picked == null && !e.target.closest("[data-say]")) {
      const oi = +o.dataset.o, isR = !it.warm && !noR && it.qi === n - 1;
      if (isR) { const k = st.i - nWarm; if (st.picks[k] == null) { st.picks[k] = oi; st.ans[k] = it.q[1][oi]; } if (typeof onQuizAnswer === "function") onQuizAnswer(oi === 0, false);
        if (oi !== 0) { if (!st.wrongR.includes(oi)) st.wrongR.push(oi); ACTIVE = st; render(); return; }
        st.r = true; st.picked = 0; ACTIVE = st; render(); return; }
      answer(oi === 0, it.q[1][oi], oi); return; }
    const fl = e.target.closest("[data-formlink]"); if (fl) { if (!NAME) { e.preventDefault(); const i = el.querySelector(".qz-name input"); i && i.focus(); i && i.classList.add("need"); return; } fl.href = formLink(st.rec()); return; }
    if (!a) return;
    const k = a.dataset.q;
    if (k === "hint") { st.hint = true; render(); }
    if (k === "ordercheck") { const tiles = tilesOf(it.q[1][0], it.key), txt = st.order.map(i => tiles.find(t => t.i === i).w).join(" "); answer(norm(txt) === norm(it.q[1][0]), txt); }
    if (k === "adv") { st.i++; st.picked = null; st.typed = ""; st.hint = false; st.retyped = false; st.order = [];
      if (st.i >= D.length) { markDay(); if (!review) { const s = st.picks.filter(x => x === 0).length; if (noR) st.r = true; record(story, idx, s, st.r); if (typeof onLessonDone === "function") onLessonDone(story, idx, s, n); onDone && onDone(s); if (NAME) sendResult(st.rec()).then(x => { st.sent = x; }); } ACTIVE = null; }
      render(); const top = el.getBoundingClientRect().top; if (top < 0 || top > innerHeight * .6) el.scrollIntoView({ behavior: REDUCED ? "auto" : "smooth", block: "start" }); }
    if (k === "again") { const keep = st.deck.filter(d => !d.warm); st.deck = keep; st.i = 0; st.picked = null; st.picks = []; st.ans = []; st.wrongR = []; st.r = false; Quiz(el, { story, idx, onDone, onNext, nextLabel, cls }); }
    if (k === "next") { ACTIVE = null; onNext && onNext(); }
    if (k === "cert") Certificate(story);
    if (k === "card") ResultCard(story, idx, st.picks.slice(0, n), noR ? null : st.r);
    if (k === "send") { if (!NAME) { const i = el.querySelector(".qz-name input"); i && i.focus(); i && i.classList.add("need"); return; }
      a.disabled = true; a.textContent = "…"; sendResult(st.rec()).then(ok2 => { a.textContent = ok2 ? "✓ " + L("sent") : L("sendFail"); a.disabled = ok2; }); }
    if (k === "copy") {
      const tx = el.querySelector("#qzct"), done = () => { a.textContent = L("copied"); };
      const sel = () => { const r = document.createRange(); r.selectNodeContents(tx); const s2 = getSelection(); s2.removeAllRanges(); s2.addRange(r); done(); };
      try { navigator.clipboard.writeText(tx.textContent).then(done, sel); } catch (er) { sel(); }
    }
  };
  render();
}

/* ---------- 9:16 result card for Instagram Stories ---------- */
const CARD_THEME = {
  tapes:   { bg: ["#2c2526", "#121014"], ink: "#EFE7D6", acc: "#8FA2FF", titles: ["Rewind Rookie", "Tape Fan", "Tape Collector", "Club Regular", "VHS Expert", "Tape Master", "Tape Club Legend"] },
  voyage:  { bg: ["#284566", "#0f1820"], ink: "#F3E6C8", acc: "#E9B85A", titles: ["Deckhand", "Sailor", "Navigator", "First Mate", "Quartermaster", "Captain", "Pirate Legend"] },
  wild:    { bg: ["#3a2e22", "#1C1814"], ink: "#EFE4D2", acc: "#DE9B66", titles: ["Nature Rookie", "Tracker", "Field Explorer", "Wild Guide", "Ranger", "Wildlife Expert", "Wild Legend"] },
  travel:  { bg: ["#3A3550", "#1E2233"], ink: "#F5EEE4", acc: "#F2C79B", titles: ["First Flight", "Traveller", "Explorer", "Globetrotter", "Frequent Flyer", "World Expert", "World Citizen"] },
  mystery: { bg: ["#2a2017", "#0d0a08"], ink: "#F1E6CF", acc: "#E9B85A", titles: ["Junior Detective", "Clue Finder", "Investigator", "Sharp Eye", "Case Breaker", "Inspector", "Master Detective"] },
  movie:   { bg: ["#4a0d14", "#12080a"], ink: "#F7EBD8", acc: "#F2C14E", titles: ["Popcorn Fan", "Film Buff", "Critic", "Script Reader", "Director", "Producer", "Movie Legend"] },
  kids:    { bg: ["#1f5a66", "#12343b"], ink: "#FFFFFF", acc: "#FFD34D", titles: ["Little Star", "Explorer", "Super Explorer", "Brave Explorer", "Smart Cat", "Champion", "English Hero"] },
  club:    { bg: ["#3a2a1e", "#16110d"], ink: "#F5E9D6", acc: "#E9B85A", titles: ["Club Member", "Club Member", "Club Member", "Club Member", "Club Member", "Club Member", "Club Member"] },
  errors:  { bg: ["#24304a", "#141a28"], ink: "#EEF1FA", acc: "#9DB0FF", titles: ["Hunter", "Tracker", "Spotter", "Sharpshooter", "Error Slayer", "Mistake Master", "Grammar Legend"] }
};
function rr(g, x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
async function drawResultCard(story, idx, picks, riddle, noImg) {
  const W = 1080, H = 1920, c = document.createElement("canvas"); c.width = W; c.height = H; const g = c.getContext("2d");
  const S = STORIES[story], u = S.units[idx], T = CARD_THEME[story] || CARD_THEME.tapes, score = picks.filter(p => p === 0).length;
  const bg = g.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, T.bg[0]); bg.addColorStop(1, T.bg[1]); g.fillStyle = bg; g.fillRect(0, 0, W, H);
  for (let k = 0; k < 140; k++) { g.fillStyle = `rgba(255,255,255,${(k % 7) / 120})`; g.fillRect((k * 337) % W, (k * 911) % H, 2, 2); }
  g.textAlign = "center"; g.fillStyle = T.acc; g.font = "600 30px 'Bricolage Grotesque', Arial"; g.fillText("M I N A R A V E R S E", W / 2, 150);
  g.fillStyle = T.ink; g.font = "italic 400 86px Fraunces, Georgia, serif"; g.fillText(S.title, W / 2, 270, 960);
  /* themed centre panel */
  const px = 110, py = 340, pw = 860, ph = 620;
  if (story === "wild" || story === "mystery") {
    const src = story === "wild" ? `img/${u.id}-hero.jpg` : (u.img || "img/m-library.jpg");
    try { if (noImg) throw 0; const im = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = src; });
      g.save(); rr(g, px, py, pw, ph, 36); g.clip(); const s = Math.max(pw / im.width, ph / im.height); g.drawImage(im, px + (pw - im.width * s) / 2, py + (ph - im.height * s) / 2, im.width * s, im.height * s);
      g.fillStyle = "rgba(0,0,0,.25)"; g.fillRect(px, py, pw, ph); g.restore(); } catch (e) { g.fillStyle = "rgba(255,255,255,.06)"; rr(g, px, py, pw, ph, 36); g.fill(); }
    if (story === "mystery") { g.save(); g.translate(W / 2 + 200, py + ph - 120); g.rotate(-.18); g.strokeStyle = "#c0392b"; g.lineWidth = 8; rr(g, -190, -55, 380, 110, 12); g.stroke();
      g.fillStyle = "#c0392b"; g.font = "700 54px 'Special Elite', monospace"; g.fillText(riddle === false ? "OPEN CASE" : "CASE CLOSED", 0, 20); g.restore(); }
  } else if (story === "tapes") {
    g.fillStyle = "#18181C"; rr(g, px, py + 60, pw, ph - 120, 28); g.fill();
    g.fillStyle = "#F1E8D4"; rr(g, px + 60, py + 110, pw - 120, 220, 10); g.fill();
    g.fillStyle = u.spine || T.acc; g.fillRect(px + 60, py + 110, pw - 120, 34);
    g.fillStyle = "#18181C"; g.font = "400 66px Fraunces, Georgia"; g.fillText(u.name.toUpperCase(), W / 2, py + 250, pw - 160);
    [W / 2 - 170, W / 2 + 170].forEach(x => { g.fillStyle = "#2e2a30"; g.beginPath(); g.arc(x, py + 440, 70, 0, 7); g.fill(); g.fillStyle = "#F1E8D4"; g.beginPath(); g.arc(x, py + 440, 26, 0, 7); g.fill(); });
  } else if (story === "voyage") {
    const pg = g.createRadialGradient(W / 2, py + ph / 2, 60, W / 2, py + ph / 2, 520); pg.addColorStop(0, "#f3e6c6"); pg.addColorStop(.8, "#ddc493"); pg.addColorStop(1, "#a9844c");
    g.fillStyle = pg; rr(g, px, py, pw, ph, 18); g.fill();
    g.fillStyle = "#3b2a14"; g.font = "400 46px 'IM Fell English', Georgia"; g.fillText("Captain's Log", W / 2, py + 110);
    g.font = "400 84px 'IM Fell English', Georgia"; g.fillText(u.name, W / 2, py + 250, pw - 80);
    g.font = "italic 400 40px 'IM Fell English', Georgia"; g.fillText(`${u.place}, ${u.year}`, W / 2, py + 330);
    g.fillStyle = "#8e2b22"; g.beginPath(); g.arc(W / 2, py + 480, 70, 0, 7); g.fill(); g.fillStyle = "#f3d9c0"; g.font = "700 46px Fraunces"; g.fillText("✦", W / 2, py + 497);
  } else if (story === "travel") {
    g.fillStyle = "#F5EEE4"; rr(g, px, py + 40, pw, ph - 80, 34); g.fill();
    g.fillStyle = T.bg[1]; [[px, py + 360], [px + pw, py + 360]].forEach(([x, y]) => { g.beginPath(); g.arc(x, y, 34, 0, 7); g.fill(); });
    g.setLineDash([14, 12]); g.strokeStyle = "#c9bca9"; g.lineWidth = 4; g.beginPath(); g.moveTo(px + 40, py + 360); g.lineTo(px + pw - 40, py + 360); g.stroke(); g.setLineDash([]);
    g.fillStyle = "#7a6a58"; g.font = "600 30px 'Bricolage Grotesque'"; g.textAlign = "left"; g.fillText("BOARDING PASS", px + 60, py + 120); g.fillText("FROM", px + 60, py + 190); g.textAlign = "right"; g.fillText("TO", px + pw - 60, py + 190);
    g.fillStyle = "#1a1a1a"; g.font = "700 96px 'Bricolage Grotesque'"; g.textAlign = "left"; g.fillText("BAKU", px + 60, py + 290); g.textAlign = "right"; g.fillText(u.name.toUpperCase().slice(0, 9), px + pw - 60, py + 290);
    g.textAlign = "center"; g.font = "400 80px Fraunces"; g.fillText("✈", W / 2, py + 285);
    for (let k = 0; k < 46; k++) { g.fillStyle = "#1a1a1a"; g.fillRect(px + 90 + k * 15, py + 410, (k * 7) % 3 + 3, 110); }
  } else {
    g.fillStyle = "rgba(255,255,255,.08)"; rr(g, px, py, pw, ph, 36); g.fill();
    g.fillStyle = T.acc; g.font = "700 120px 'Bricolage Grotesque'"; g.fillText(u.icon || "✓", W / 2, py + 330, pw - 100);
    g.fillStyle = T.ink; g.font = "400 64px Fraunces"; g.fillText(u.full || u.name, W / 2, py + 470, pw - 100);
  }
  g.textAlign = "center";
  /* score row of squares, no answers shown */
  const n = u.qs.length, sq = 92, gap = 22, sx = W / 2 - (n * sq + (n - 1) * gap) / 2;
  picks.forEach((p, k) => { const isR = riddle != null && k === n - 1; g.fillStyle = isR ? (riddle ? "#E9B85A" : "#6b6157") : p === 0 ? "#3fae6a" : "#d0573f"; rr(g, sx + k * (sq + gap), 1040, sq, sq, 18); g.fill();
    if (isR) { g.fillStyle = "#1a1408"; g.font = "700 46px Fraunces"; g.fillText("✦", sx + k * (sq + gap) + sq / 2, 1102); } });
  g.fillStyle = T.ink; g.font = "500 150px Fraunces, Georgia"; g.fillText(`${score}/${n}`, W / 2, 1330);
  const title = T.titles[Math.min(T.titles.length - 1, Math.max(0, doneCount(story) - 1))];
  g.fillStyle = T.acc; g.font = "600 44px 'Bricolage Grotesque'"; g.fillText(`${(S.unit || "Chapter").toUpperCase()} ${idx + 1} · ${u.full || u.name}`.slice(0, 44), W / 2, 1420);
  g.fillStyle = T.ink; g.font = "italic 400 58px Fraunces"; g.fillText(`“${title}”`, W / 2, 1510);
  const sk = streak(); if (sk > 0) { g.fillStyle = "#ffb347"; g.font = "600 40px 'Bricolage Grotesque'"; g.fillText(`🔥 ${sk}-day streak`, W / 2, 1585); }
  /* QR to Instagram */
  if (window.qrcode) { const qr = qrcode(0, "M"); qr.addData(IG); qr.make(); const m = qr.getModuleCount(), size = 190, cs = size / m, qx = W / 2 - 330, qy = 1650;
    g.fillStyle = "#fff"; rr(g, qx - 14, qy - 14, size + 28, size + 28, 16); g.fill(); g.fillStyle = "#111";
    for (let r2 = 0; r2 < m; r2++) for (let c2 = 0; c2 < m; c2++) if (qr.isDark(r2, c2)) g.fillRect(qx + c2 * cs, qy + r2 * cs, Math.ceil(cs), Math.ceil(cs));
    g.textAlign = "left"; g.fillStyle = T.ink; g.font = "500 40px 'Bricolage Grotesque'"; g.fillText("Can you beat my score?", qx + 250, qy + 80); g.fillStyle = T.acc; g.font = "700 50px 'Bricolage Grotesque'"; g.fillText("@minaraverse", qx + 250, qy + 150); }
  return c;
}
async function ResultCard(story, idx, picks, riddle) {
  let ov = document.querySelector(".cert-ov"); if (ov) ov.remove();
  ov = document.createElement("div"); ov.className = "cert-ov"; ov.setAttribute("role", "dialog"); ov.setAttribute("aria-modal", "true");
  ov.innerHTML = `<div class="cert-box card-box"><button type="button" class="cert-x" aria-label="${L("close")}">✕</button><p class="cert-k">📸 ${L("shareCard")}</p>
    <img class="cert-img card-img" alt="${L("shareCard")}"><div class="cert-row"><button type="button" class="qz-btn cert-dl">${L("cardSave")} ↓</button><a class="qz-btn ghost" href="${IG}" target="_blank" rel="noopener">Instagram ↗</a></div><p class="cert-hint">${L("cardHint")}</p></div>`;
  document.body.appendChild(ov);
  if (document.fonts) await document.fonts.ready;
  let cv = await drawResultCard(story, idx, picks, riddle);
  try { ov.querySelector(".card-img").src = cv.toDataURL("image/png"); } catch (e) { cv = await drawResultCard(story, idx, picks, riddle, true); ov.querySelector(".card-img").src = cv.toDataURL("image/png"); }
  ov.querySelector(".cert-x").onclick = () => ov.remove(); ov.addEventListener("click", e => { if (e.target === ov) ov.remove(); });
  ov.querySelector(".cert-dl").onclick = () => saveCanvas(cv, `Minaraverse-${story}-${idx + 1}.png`);
}
async function saveCanvas(cv, fname) {
  const blob = await new Promise(r => cv.toBlob(r, "image/png"));
  try { if (navigator.canShare && navigator.canShare({ files: [new File([blob], fname, { type: "image/png" })] })) { await navigator.share({ files: [new File([blob], fname, { type: "image/png" })] }); return; } } catch (e) {}
  try { const dl = window.claude && window.claude.use ? await window.claude.use("downloads") : null; if (dl) { await dl.save({ filename: fname, data: blob }); return; } } catch (e) {}
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = fname; document.body.appendChild(a); a.click(); a.remove();
}

/* ---------- pronunciation (browser English voice) ---------- */
const TTS = "speechSynthesis" in window;
let VOICE = null;
const pickVoice = () => { if (!TTS) return; const vs = speechSynthesis.getVoices(); VOICE = vs.find(v => /en-GB/i.test(v.lang) && /female|Serena|Kate|Libby|Sonia|Google UK English Female/i.test(v.name)) || vs.find(v => /en-GB/i.test(v.lang)) || vs.find(v => /^en/i.test(v.lang)) || null; };
if (TTS) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
function say(text, btn) {
  if (!TTS) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(String(text).replace(/_{2,}/g, " blank ").replace(/[“”]/g, '"'));
  u.lang = VOICE ? VOICE.lang : "en-GB"; if (VOICE) u.voice = VOICE; u.rate = .92;
  if (btn) { document.querySelectorAll(".say.on").forEach(b => b.classList.remove("on")); btn.classList.add("on"); u.onend = u.onerror = () => btn.classList.remove("on"); }
  speechSynthesis.speak(u);
}
const sayBtn = (text, cls = "") => TTS ? `<span role="button" tabindex="0" class="say ${cls}" data-say="${esc(text)}" aria-label="Listen"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path class="w1" d="M16 9a4 4 0 0 1 0 6"/><path class="w2" d="M18.5 6.5a7.5 7.5 0 0 1 0 11"/></svg></span>` : "";
document.addEventListener("click", e => { const b = e.target.closest("[data-say]"); if (!b) return; e.preventDefault(); e.stopPropagation(); say(b.dataset.say, b); }, true);

/* translation toggle for reading texts */
const trBlock = (story, i) => { const t = TXT[story] && TXT[story][i]; if (!t) return "";
  return `<details class="trd"><summary>${L("showTr")} · AZ / RU</summary><p><i>AZ</i>${esc(t.az)}</p><p><i>RU</i>${esc(t.ru)}</p></details>`; };
document.addEventListener("keydown", e => { if ((e.key === "Enter" || e.key === " ") && e.target.matches && e.target.matches("[data-say]")) { e.preventDefault(); say(e.target.dataset.say, e.target); } });
/* riddle hint: first letter of each word, the rest as blanks */
function hintPattern(ans) {
  return esc(ans.replace(/^(a|an|the)\s+/i, "")).split(" ").map(w => [...w].map((ch, i) => i === 0 ? `<b>${ch.toUpperCase()}</b>` : "<i>_</i>").join("")).join("<span class=\"gap\"></span>");
}
const quizOpenFor = story => ACTIVE && ACTIVE.story === story ? ACTIVE.idx : -1;

/* rising letters helper: wraps text into masked spans */
function letters(text, cls = "ch") {
  return text.split(" ").map(w => `<span class="lw">${[...w].map(c => `<span class="${cls}">${esc(c)}</span>`).join("")}</span>`).join(" ");
}
function riseLetters(root, sel, { stagger = 30, dur = 900, from = "translateY(.55em) rotate(4deg)", blur = 0, delay = 0 } = {}) {
  const els = root.querySelectorAll(sel);
  els.forEach((el, k) => el.animate(
    [{ transform: from, filter: blur ? `blur(${blur}px)` : "none", opacity: 0 }, { transform: "none", filter: "none", opacity: 1 }],
    { duration: REDUCED ? 1 : dur, delay: REDUCED ? 0 : delay + k * stagger, easing: "cubic-bezier(.2,.8,.2,1)", fill: "backwards" }));
}
function onVisible(el, fn, ratio = .35) {
  if (!("IntersectionObserver" in window)) { fn(); return; }
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.intersectionRatio >= ratio) { io.disconnect(); fn(); } }), { threshold: [ratio] });
  io.observe(el);
}

/* ---------- router ---------- */
const VIEWS = {};
const Router = {
  cur: null, name: null,
  go(h) { location.hash = h ? "#" + h : ""; },
  mount() {
    const name = (location.hash.slice(1) || "home").split(/[-]/)[0];
    const view = VIEWS[name] ? name : "home";
    if (this.cur && this.cur.unmount) this.cur.unmount();
    document.querySelectorAll(".cert-ov").forEach(o => o.remove()); if (TTS) speechSynthesis.cancel();
    const root = document.getElementById("view");
    root.className = "view v-" + view; root.innerHTML = "";
    document.body.dataset.view = view;
    window.scrollTo(0, 0); root.scrollTop = 0;
    this.name = view; this.cur = VIEWS[view](root) || {};
  },
  remount() { this.mount(); }
};
addEventListener("hashchange", () => Router.mount());

/* ---------- custom cursor (tapes + voyage) ---------- */
function Cursor(kind) {
  if (!FINE) return { set() {}, kill() {} };
  const c = document.createElement("div"); c.className = "cur cur-" + kind;
  c.innerHTML = `<i class="ring"></i><i class="dot"></i><b class="lbl"></b>`;
  document.body.appendChild(c); document.documentElement.classList.add("nocur");
  let mx = innerWidth / 2, my = innerHeight / 2, cx = mx, cy = my, last = performance.now(), raf;
  const mv = e => { mx = e.clientX; my = e.clientY; };
  addEventListener("pointermove", mv);
  const loop = now => { const dt = Math.min(.05, (now - last) / 1000); last = now; const f = 1 - Math.exp(-(kind === "voyage" ? 22 : 16) * dt);
    cx += (mx - cx) * f; cy += (my - cy) * f; c.style.transform = `translate3d(${cx}px,${cy}px,0)`; raf = requestAnimationFrame(loop); };
  raf = requestAnimationFrame(loop);
  return {
    get x() { return mx; }, get y() { return my; },
    set(state, label) { c.className = "cur cur-" + kind + (state ? " " + state : ""); if (label != null) c.querySelector(".lbl").innerHTML = label; },
    ping() { if (kind !== "voyage") return; const p = document.createElement("div"); p.className = "cur-ping"; p.style.left = mx + "px"; p.style.top = my + "px"; document.body.appendChild(p);
      p.animate([{ transform: "translate(-50%,-50%) scale(1)", opacity: 1 }, { transform: "translate(-50%,-50%) scale(2.9)", opacity: 0 }], { duration: 650, easing: "cubic-bezier(.2,.8,.2,1)" }).onfinish = () => p.remove(); },
    kill() { cancelAnimationFrame(raf); removeEventListener("pointermove", mv); c.remove(); document.documentElement.classList.remove("nocur"); }
  };
}

/* ---------- certificate ---------- */
const CERT_COL = { tapes: ["#8FA2FF", "#1F3FB0"], voyage: ["#E9B85A", "#7a2a1a"], wild: ["#DE9B66", "#4F6B2E"], travel: ["#F2C79B", "#5B4A8A"], mystery: ["#E9B85A", "#3a2414"], movie: ["#F2C14E", "#6d121c"], kids: ["#FFD34D", "#17414b"] };
function drawCert(story, name) {
  const W = 2000, H = 1414, c = document.createElement("canvas"); c.width = W; c.height = H; const g = c.getContext("2d");
  const S = STORIES[story], n = S.units.length, total = S.units.reduce((a, _, k) => a + (best(story, k) || 0), 0), max = n * 6;
  const [acc, deep] = CERT_COL[story] || ["#E9B85A", "#3a2a14"], gold = "#C9A24E", ink = "#1E1A17";
  /* paper */
  const bg = g.createRadialGradient(W / 2, H / 2, 200, W / 2, H / 2, 1300); bg.addColorStop(0, "#FBF6EA"); bg.addColorStop(1, "#EADFC6"); g.fillStyle = bg; g.fillRect(0, 0, W, H);
  /* guilloche border */
  g.save(); g.strokeStyle = gold; g.globalAlpha = .55; g.lineWidth = 1.2;
  for (let k = 0; k < 2; k++) { g.beginPath(); for (let x = 60; x <= W - 60; x += 4) { const y = 60 + k * 14 + Math.sin(x / 18) * 6; x === 60 ? g.moveTo(x, y) : g.lineTo(x, y); } g.stroke();
    g.beginPath(); for (let x = 60; x <= W - 60; x += 4) { const y = H - 60 - k * 14 + Math.sin(x / 18) * 6; x === 60 ? g.moveTo(x, y) : g.lineTo(x, y); } g.stroke(); }
  g.restore();
  g.strokeStyle = deep; g.lineWidth = 6; g.strokeRect(100, 100, W - 200, H - 200); g.strokeStyle = gold; g.lineWidth = 2; g.strokeRect(124, 124, W - 248, H - 248);
  [[124, 124], [W - 124, 124], [124, H - 124], [W - 124, H - 124]].forEach(([x, y]) => { g.fillStyle = gold; g.beginPath(); g.arc(x, y, 12, 0, 7); g.fill(); });
  g.textAlign = "center"; g.fillStyle = ink;
  g.font = "600 30px 'Bricolage Grotesque', Arial, sans-serif"; g.letterSpacing = "10px"; g.fillStyle = deep; g.fillText("MINARAVERSE · ENGLISH THROUGH STORIES", W / 2, 230);
  g.letterSpacing = "0px"; g.fillStyle = ink; g.font = "italic 400 120px Fraunces, Georgia, serif"; g.fillText("Certificate", W / 2, 380);
  g.font = "400 46px Fraunces, Georgia, serif"; g.fillText("of Achievement", W / 2, 445);
  g.font = "500 30px 'Bricolage Grotesque', Arial, sans-serif"; g.fillStyle = "#6b6153"; g.fillText("This certificate is proudly presented to", W / 2, 560);
  g.fillStyle = ink; let fs = 110; g.font = `500 ${fs}px Fraunces, Georgia, serif`; while (g.measureText(name).width > 1300 && fs > 60) { fs -= 4; g.font = `500 ${fs}px Fraunces, Georgia, serif`; }
  g.fillText(name, W / 2, 700); g.strokeStyle = gold; g.lineWidth = 2; g.beginPath(); g.moveTo(W / 2 - 520, 740); g.lineTo(W / 2 + 520, 740); g.stroke();
  g.font = "400 36px 'Bricolage Grotesque', Arial, sans-serif"; g.fillStyle = "#4a4238";
  g.fillText(`for successfully completing the English story`, W / 2, 820);
  g.font = "italic 500 64px Fraunces, Georgia, serif"; g.fillStyle = deep; g.fillText(`“${S.title}”`, W / 2, 905);
  g.font = "500 30px 'Bricolage Grotesque', Arial, sans-serif"; g.fillStyle = "#4a4238";
  g.fillText(`${n} chapters  ·  ${max} questions  ·  ${n} riddles solved  ·  Score ${total}/${max}  ·  Level ${S.level}`, W / 2, 975);
  /* seal */
  const sx = W / 2, sy = 1140; g.save(); g.translate(sx, sy);
  for (let k = 0; k < 24; k++) { g.rotate(Math.PI / 12); g.fillStyle = k % 2 ? gold : "#b48a35"; g.beginPath(); g.moveTo(0, -96); g.lineTo(18, -70); g.lineTo(-18, -70); g.fill(); }
  const sg = g.createRadialGradient(-20, -20, 10, 0, 0, 82); sg.addColorStop(0, "#f1d48a"); sg.addColorStop(1, "#a97d2c"); g.fillStyle = sg; g.beginPath(); g.arc(0, 0, 80, 0, 7); g.fill();
  g.strokeStyle = "#fff3cf"; g.lineWidth = 2; g.beginPath(); g.arc(0, 0, 64, 0, 7); g.stroke();
  g.fillStyle = "#3b2a10"; g.font = "italic 600 54px Fraunces, Georgia, serif"; g.textAlign = "center"; g.fillText("mv", 0, 18);
  g.font = "600 13px 'Bricolage Grotesque', Arial"; g.fillText(S.level, 0, 44); g.restore();
  /* signature + date */
  const d = new Date(), ds = d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  g.textAlign = "center"; g.fillStyle = ink;
  g.font = "italic 400 70px Fraunces, Georgia, serif"; g.fillText("Minara", 520, 1150);
  g.strokeStyle = "#8a7a62"; g.lineWidth = 1.5; g.beginPath(); g.moveTo(360, 1175); g.lineTo(680, 1175); g.stroke();
  g.font = "500 24px 'Bricolage Grotesque', Arial"; g.fillStyle = "#6b6153"; g.fillText("Minara · English teacher", 520, 1212); g.fillText("ADA University · IELTS · TESOL · TEFL", 520, 1246);
  g.fillStyle = ink; g.font = "500 44px Fraunces, Georgia, serif"; g.fillText(ds, 1480, 1150);
  g.beginPath(); g.moveTo(1320, 1175); g.lineTo(1640, 1175); g.stroke();
  g.font = "500 24px 'Bricolage Grotesque', Arial"; g.fillStyle = "#6b6153"; g.fillText("Date of completion", 1480, 1212);
  let h = 0; for (const ch of name + story + total) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  g.fillText(`Certificate No. MV-${story.slice(0, 2).toUpperCase()}-${String(h % 1e6).padStart(6, "0")}`, 1480, 1246);
  g.font = "600 22px 'Bricolage Grotesque', Arial"; g.fillStyle = acc === "#F2C79B" ? "#8a6a3a" : deep; g.fillText("instagram.com/minaraverse", W / 2, 1290);
  return c;
}
function Certificate(story) {
  let ov = document.querySelector(".cert-ov"); if (ov) ov.remove();
  ov = document.createElement("div"); ov.className = "cert-ov"; ov.setAttribute("role", "dialog"); ov.setAttribute("aria-modal", "true");
  ov.innerHTML = `<div class="cert-box"><button type="button" class="cert-x" aria-label="${L("close")}">✕</button>
    <p class="cert-k">🏅 ${L("certTitle")} · ${esc(STORIES[story].title)}</p>
    <label class="cert-name"><input id="cert-name" type="text" autocomplete="name" placeholder="${L("certNamePh")}" value="${esc(NAME)}"></label>
    <img class="cert-img" alt="${L("certTitle")}">
    <div class="cert-row"><button type="button" class="qz-btn cert-dl">${L("certSave")} ↓</button><a class="qz-btn ghost" href="${DM}" target="_blank" rel="noopener">${L("sendMinara")} ↗</a></div>
    <p class="cert-hint">${L("certHint")}</p></div>`;
  document.body.appendChild(ov);
  const img = ov.querySelector(".cert-img"), inp = ov.querySelector("#cert-name");
  const draw = () => { img.src = drawCert(story, (inp.value.trim() || "Your Name")).toDataURL("image/png"); };
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(draw);
  let t; inp.oninput = () => { NAME = inp.value.trim(); try { localStorage.setItem("mv-name", NAME); } catch (e) {} clearTimeout(t); t = setTimeout(draw, 250); };
  ov.querySelector(".cert-x").onclick = () => ov.remove();
  ov.addEventListener("click", e => { if (e.target === ov) ov.remove(); });
  ov.querySelector(".cert-dl").onclick = async () => {
    const fname = `Minaraverse-certificate-${story}.png`;
    const blob = await new Promise(r => drawCert(story, inp.value.trim() || "Your Name").toBlob(r, "image/png"));
    try { const dl = window.claude && window.claude.use ? await window.claude.use("downloads") : null;
      if (dl) { await dl.save({ filename: fname, data: blob }); return; } } catch (e) {}
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = fname; document.body.appendChild(a); a.click(); a.remove();
  };
  inp.focus();
}
