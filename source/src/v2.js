/* ===== v2: level-first home, personal plan, new worlds, club of the week, all-level mistake hunters ===== */
const LVLS = ["A1", "A2", "B1", "B2", "C1", "C2"];
const LVL_NAME = { en: { A1: "Beginner", A2: "Elementary", B1: "Intermediate", B2: "Upper-Intermediate", C1: "Advanced", C2: "Proficiency" },
  az: { A1: "Başlanğıc", A2: "Elementar", B1: "Orta", B2: "Ortadan yuxarı", C1: "İrəli", C2: "Mükəmməl" },
  ru: { A1: "Начальный", A2: "Элементарный", B1: "Средний", B2: "Выше среднего", C1: "Продвинутый", C2: "Свободное владение" } };
const lvName = l => (LVL_NAME[LANG] || LVL_NAME.en)[l] || "";
const myLevel = () => (lsGet("mv-level", null) || {}).lvl || null;
const rangeOf = s => { const m = String(s || "").match(/[ABC][12]/g) || []; if (m.length < 2) return m; return LVLS.slice(LVLS.indexOf(m[0]), LVLS.indexOf(m[1]) + 1); };
const fitsLevel = (s, l) => !l || rangeOf(s).includes(l);

Object.assign(UI.en, {
  approach2: "My approach is a little unusual: instead of drilling rules, we step into stories: a shelf of old tapes, a pirate voyage, the animal kingdom, a detective case in Baku's Old City, a Friday film club, a trip around the world and, for kids, adventures with Pixel the talking cat. Every story has 7 chapters with 6 questions each: vocabulary, grammar, reading, listening and a riddle that opens the next chapter. Every skill lives inside the story, so you feel the atmosphere and want to come back for more.",
  advSoon: "Advanced stories (C1–C2) are coming soon. For now: Movie Night Club, the DİM test, the weekly club and lessons with Minara.",
  startHere: "Start here", findLevel: "Find your level", yourLevel: "Your level", yourPlan: "Your plan", seePlan: "See my plan", forYou: "For your level", allLevels: "All levels", showAll: "Show all",
  bioK: "Your teacher", bio: "I'm Minara, an English teacher. I studied at ADA University (bachelor's and master's), hold IELTS, TESOL and TEFL certificates, teach at university and run English lessons for teenagers and adults.",
  approachK: "My approach", approachH: "English you live, not just learn", approach: "My approach is a little unusual: instead of drilling rules, we step into stories. A detective case in the Old City, a film club, a pirate voyage. Grammar, vocabulary and every skill live inside the story, so you feel the atmosphere and want to come back for more.",
  skillsK: "Every part of English", formatsK: "Lesson formats", formatsH: "How we learn here",
  sk_grammar: "Grammar", sk_vocab: "Vocabulary", sk_read: "Reading", sk_listen: "Listening", sk_speak: "Speaking", sk_write: "Writing", sk_story: "Storytelling",
  fm_story: "Story worlds", fm_storyP: "Seven chapters per world. Read, listen, answer, solve the riddle.", fm_myst: "Mystery games", fm_mystP: "Detective cases where every clue is a piece of English.", fm_club: "Club of the week", fm_clubP: "A new format every week: a case, a film scene, a debate, an interview.", fm_exam: "Exam practice", fm_examP: "DİM-style tests and Mistake Hunters for every level.",
  adultsT: "For adults", adultsP: "Real-life topics: films, travel, work, mysteries, debates. Grown-up stories, grown-up English.", kidsT: "For kids", kidsP: "Games, animals, colours and a talking cat. Short, bright and playful.",
  pathK: "Your path", path1: "Take the level test", path1p: "30 questions from A1 to C2, about 7 minutes.", path2: "Get your plan", path2p: "The site picks the worlds and games for your level.", path3: "Play and learn", path3p: "Stories, mysteries, daily word and the weekly club.", path4: "Speak with Minara", path4p: "Send your result or a voice message on Instagram.",
  lessonsT: "Lessons with Minara", lessonsP: "Online group and private lessons. Write to me on Instagram.", writeMe: "Write to Minara",
  clubK: "Club of the week", clubNew: "New every week", clubOpen: "Join this week's club", clubArchive: "Earlier episodes", speakT: "Speaking task", speakSend: "Send your voice message to Minara",
  movieD: "A Friday film club in Baku. Comedy, sci-fi, thrillers and your own film review.", kidsD: "Aylin, Murad and Pixel the talking cat explore home, school, the zoo and a birthday party.",
  planP: "Here's what to do next. Start with the first item and come back every day.", planWorlds: "Story worlds for you", planGames: "Mistake Hunters for you", planMore: "Also for you",
  sendLevel: "Send my level to Minara", sendNote: "Your name and result go only to Minara.", chapterL: "Chapter", worldsL: "worlds"
});
Object.assign(UI.az, {
  approach2: "Yanaşmam bir az fərqlidir: qaydaları əzbərləmək əvəzinə hekayələrin içinə giririk: köhnə kaset rəfi, pirat səyahəti, heyvanlar aləmi, İçərişəhərdə detektiv işi, cümə kino klubu, dünya səyahəti, uşaqlar üçün isə danışan pişik Pixel ilə macəralar. Hər hekayədə 7 fəsil, hər fəsildə 6 sual var: söz ehtiyatı, qrammatika, oxu, dinləmə və növbəti fəsli açan tapmaca. Bütün bacarıqlar hekayənin içindədir, ona görə atmosferi hiss edirsən və yenə qayıtmaq istəyirsən.",
  advSoon: "İrəli səviyyə (C1–C2) hekayələri tezliklə. Hələlik: Movie Night Club, DİM testi, həftənin klubu və Minara ilə dərslər.",
  startHere: "Buradan başla", findLevel: "Səviyyəni öyrən", yourLevel: "Səviyyən", yourPlan: "Sənin planın", seePlan: "Planıma bax", forYou: "Sənin səviyyən üçün", allLevels: "Bütün səviyyələr", showAll: "Hamısını göstər",
  bioK: "Müəllimin", bio: "Mən Minarayam, ingilis dili müəllimiyəm. ADA Universitetində bakalavr və magistr təhsili almışam, IELTS, TESOL və TEFL sertifikatlarım var. Universitetdə dərs deyirəm, yeniyetmələr və böyüklər üçün ingilis dili dərsləri keçirəm.",
  approachK: "Yanaşmam", approachH: "Sadəcə öyrəndiyin yox, yaşadığın ingilis dili", approach: "Yanaşmam bir az fərqlidir: qaydaları əzbərləmək əvəzinə hekayələrin içinə giririk. İçərişəhərdə detektiv işi, kino klubu, pirat səyahəti. Qrammatika, söz ehtiyatı və bütün bacarıqlar hekayənin içindədir. Atmosferi hiss edirsən və yenə qayıtmaq istəyirsən.",
  skillsK: "İngilis dilinin bütün hissələri", formatsK: "Dərs formatları", formatsH: "Burada necə öyrənirik",
  sk_grammar: "Qrammatika", sk_vocab: "Söz ehtiyatı", sk_read: "Oxu", sk_listen: "Dinləmə", sk_speak: "Danışıq", sk_write: "Yazı", sk_story: "Hekayə danışmaq",
  fm_story: "Hekayə dünyaları", fm_storyP: "Hər dünyada yeddi fəsil. Oxu, dinlə, cavab ver, tapmacanı həll et.", fm_myst: "Sirli oyunlar", fm_mystP: "Hər ipucunun ingilis dilinin bir parçası olduğu detektiv işləri.", fm_club: "Həftənin klubu", fm_clubP: "Hər həftə yeni format: detektiv işi, film səhnəsi, debat, müsahibə.", fm_exam: "İmtahana hazırlıq", fm_examP: "DİM formatında testlər və hər səviyyə üçün Səhv ovçuları.",
  adultsT: "Böyüklər üçün", adultsP: "Real həyat mövzuları: filmlər, səyahət, iş, sirlər, debatlar. Böyüklər üçün hekayələr və ingilis dili.", kidsT: "Uşaqlar üçün", kidsP: "Oyunlar, heyvanlar, rənglər və danışan pişik. Qısa, rəngli və əyləncəli.",
  pathK: "Sənin yolun", path1: "Səviyyə testini keç", path1p: "A1-dən C2-yə 30 sual, təxminən 7 dəqiqə.", path2: "Planını al", path2p: "Sayt səviyyənə uyğun dünyaları və oyunları seçir.", path3: "Oyna və öyrən", path3p: "Hekayələr, sirlər, günün sözü və həftənin klubu.", path4: "Minara ilə danış", path4p: "Nəticəni və ya səsli mesajını Instagram-da göndər.",
  lessonsT: "Minara ilə dərslər", lessonsP: "Onlayn qrup və fərdi dərslər. Mənə Instagram-da yaz.", writeMe: "Minaraya yaz",
  clubK: "Həftənin klubu", clubNew: "Hər həftə yeni", clubOpen: "Bu həftənin klubuna qoşul", clubArchive: "Əvvəlki buraxılışlar", speakT: "Danışıq tapşırığı", speakSend: "Səsli mesajını Minaraya göndər",
  movieD: "Bakıda cümə kino klubu. Komediya, elmi fantastika, triller və öz film rəyin.", kidsD: "Aylin, Murad və danışan pişik Pixel evi, məktəbi, zooparkı və ad gününü kəşf edir.",
  planP: "Növbəti addımlar bunlardır. Birincidən başla və hər gün qayıt.", planWorlds: "Sənin üçün hekayə dünyaları", planGames: "Sənin üçün Səhv ovçuları", planMore: "Bunlar da sənin üçün",
  sendLevel: "Səviyyəmi Minaraya göndər", sendNote: "Adın və nəticən yalnız Minaraya gedir.", chapterL: "Fəsil", worldsL: "dünya"
});
Object.assign(UI.ru, {
  approach2: "Мой подход немного необычный: вместо зубрёжки правил мы входим в истории: полка со старыми кассетами, пиратское плавание, мир животных, детективное дело в Старом городе Баку, пятничный киноклуб, путешествие вокруг света, а для детей — приключения с говорящим котом Пикселем. В каждой истории 7 глав по 6 вопросов: лексика, грамматика, чтение, аудирование и загадка, которая открывает следующую главу. Все навыки живут внутри истории, поэтому ты чувствуешь атмосферу и хочется возвращаться снова.",
  advSoon: "Истории для продвинутого уровня (C1–C2) скоро появятся. А пока: Movie Night Club, тест DİM, клуб недели и уроки с Минарой.",
  startHere: "Начни здесь", findLevel: "Узнай свой уровень", yourLevel: "Твой уровень", yourPlan: "Твой план", seePlan: "Мой план", forYou: "Для твоего уровня", allLevels: "Все уровни", showAll: "Показать все",
  bioK: "Твой преподаватель", bio: "Я Минара, преподаватель английского. Окончила бакалавриат и магистратуру ADA University, у меня есть сертификаты IELTS, TESOL и TEFL. Преподаю в университете и веду уроки английского для подростков и взрослых.",
  approachK: "Мой подход", approachH: "Английский, который проживаешь, а не просто учишь", approach: "Мой подход немного необычный: вместо зубрёжки правил мы входим в истории. Детективное дело в Старом городе, киноклуб, пиратское плавание. Грамматика, лексика и все навыки живут внутри истории, ты чувствуешь атмосферу, и тебе хочется возвращаться снова.",
  skillsK: "Все стороны английского", formatsK: "Форматы уроков", formatsH: "Как мы здесь учимся",
  sk_grammar: "Грамматика", sk_vocab: "Лексика", sk_read: "Чтение", sk_listen: "Аудирование", sk_speak: "Говорение", sk_write: "Письмо", sk_story: "Сторителлинг",
  fm_story: "Миры-истории", fm_storyP: "Семь глав в каждом мире. Читай, слушай, отвечай, разгадывай загадку.", fm_myst: "Детективные игры", fm_mystP: "Дела, где каждая улика — кусочек английского.", fm_club: "Клуб недели", fm_clubP: "Каждую неделю новый формат: дело, сцена из фильма, дебаты, интервью.", fm_exam: "Подготовка к экзаменам", fm_examP: "Тесты в формате DİM и «Охота на ошибки» для каждого уровня.",
  adultsT: "Для взрослых", adultsP: "Темы из жизни: фильмы, путешествия, работа, детективы, дебаты. Взрослые истории и взрослый английский.", kidsT: "Для детей", kidsP: "Игры, животные, цвета и говорящий кот. Коротко, ярко и весело.",
  pathK: "Твой путь", path1: "Пройди тест уровня", path1p: "30 вопросов от A1 до C2, около 7 минут.", path2: "Получи свой план", path2p: "Сайт подберёт миры и игры под твой уровень.", path3: "Играй и учись", path3p: "Истории, детективы, слово дня и клуб недели.", path4: "Поговори с Минарой", path4p: "Отправь результат или голосовое в Instagram.",
  lessonsT: "Уроки с Минарой", lessonsP: "Онлайн-группы и индивидуальные уроки. Напиши мне в Instagram.", writeMe: "Написать Минаре",
  clubK: "Клуб недели", clubNew: "Новое каждую неделю", clubOpen: "Войти в клуб этой недели", clubArchive: "Прошлые выпуски", speakT: "Задание на говорение", speakSend: "Отправь голосовое Минаре",
  movieD: "Пятничный киноклуб в Баку. Комедии, фантастика, триллеры и твоя собственная рецензия.", kidsD: "Айлин, Мурад и говорящий кот Пиксель исследуют дом, школу, зоопарк и день рождения.",
  planP: "Вот что делать дальше. Начни с первого пункта и возвращайся каждый день.", planWorlds: "Миры-истории для тебя", planGames: "«Охота на ошибки» для тебя", planMore: "Ещё для тебя",
  sendLevel: "Отправить мой уровень Минаре", sendNote: "Имя и результат увидит только Минара.", chapterL: "Глава", worldsL: "миров"
});

/* ---------- results → Minara's Google Form (opened as a pre-filled link, works inside claude.ai too) ---------- */
const formLink = rec => { if (!RESULTS.form) return ""; const u = new URLSearchParams({ usp: "pp_url" });
  for (const k in RESULTS.f) if (RESULTS.f[k] && rec[k] != null) u.append(RESULTS.f[k], rec[k]);
  return RESULTS.form.replace(/(viewform|formResponse).*$/, "viewform") + "?" + u.toString(); };

/* ---------- extra mistake-hunter games and level tags ---------- */
if (typeof ERR_MORE !== "undefined" && !STORIES.errors._more) {
  STORIES.errors._more = true;
  STORIES.errors.units.forEach(u => { u.level = u.level || (typeof ERR_LEVELS !== "undefined" && ERR_LEVELS[u.id]) || "A2"; });
  ERR_MORE.forEach((u, k) => { STORIES.errors.units.push(u); const t = typeof ERR_MORE_TR !== "undefined" ? ERR_MORE_TR[k] : null;
    TR.errors.push(t ? t.qs : []); TXT.errors.push(t ? t.info : { az: "", ru: "" }); });
}
const errIdxFor = l0 => { const l = l0; return STORIES.errors.units.map((u, k) => [u, k]).filter(([u]) => !l || u.level === l || (l === "A2" && u.level === "A1") || (l === "B2" && u.level === "B1") || (l === "C2" && u.level === "C1")); };

/* ---------- club of the week ---------- */
const weekNo = () => Math.floor((new Date(dayStr(new Date())) - new Date("2026-01-05")) / (7 * 864e5));
if (typeof WEEKLY !== "undefined") {
  STORIES.club = { title: "Club of the Week", level: "A2–B1", unit: "Episode", noRiddle: true, units: WEEKLY.map(w => ({ ...w, name: w.title, full: w.title, note: w.text })) };
  TR.club = WEEKLY.map((w, k) => (typeof WEEKLY_TR !== "undefined" && WEEKLY_TR[k] ? WEEKLY_TR[k].qs : []));
  TXT.club = WEEKLY.map((w, k) => (typeof WEEKLY_TR !== "undefined" && WEEKLY_TR[k] ? WEEKLY_TR[k].text : null));
}
const clubIdx = () => STORIES.club ? ((weekNo() % STORIES.club.units.length) + STORIES.club.units.length) % STORIES.club.units.length : -1;

/* ---------- personal plan after the level test ---------- */
const WORLD_ORDER = ["kids", "tapes", "wild", "travel", "voyage", "mystery", "movie"].filter(k => STORIES[k]);
function planHTML(lvl) {
  const worlds = WORLD_ORDER.filter(k => fitsLevel(STORIES[k].level, lvl));
  const games = errIdxFor(lvl).slice(0, 4);
  const more = [["#daily", "🔤", L("dailyT")], STORIES.club ? ["#club", "☕", L("clubK")] : null, (lvl === "B1" || lvl === "B2" || lvl === "C1" || lvl === "C2") ? ["#contract", "💼", "Business English"] : null, ["#review", "🔁", L("reviewT")]].filter(Boolean);
  return `<div class="pl"><p class="pl-p">${L("planP")}</p>
    <p class="pl-k">${L("planWorlds")}</p><div class="pl-row">${worlds.map(k => `<a class="pl-w" href="#${k}"><b>${esc(STORIES[k].title)}</b><small>${STORIES[k].level} · ${doneCount(k)}/${STORIES[k].units.length}</small></a>`).join("")}</div>
    <p class="pl-k">${L("planGames")}</p><div class="pl-row">${games.map(([u, k]) => `<a class="pl-g" href="#errors-${k + 1}"><i>${esc(u.icon)}</i><b>${esc(u.full || u.name)}</b><small>${u.level}</small></a>`).join("")}</div>
    <p class="pl-k">${L("planMore")}</p><div class="pl-row">${more.map(([h, e, t]) => `<a class="pl-m" href="${h}"><span>${e}</span>${esc(t)}</a>`).join("")}</div></div>`;
}

/* ---------- generic story world (Movie Night Club, Little Explorers) ---------- */
const WART = {
  movie: () => `<svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" class="gw-svg" aria-hidden="true"><defs>
    <linearGradient id="gvC" x1="0" x2="1"><stop offset="0" stop-color="#4a0d14"/><stop offset=".5" stop-color="#8e1b26"/><stop offset="1" stop-color="#4a0d14"/></linearGradient>
    <radialGradient id="gvS" cx=".5" cy=".45" r=".6"><stop offset="0" stop-color="#fff6dc" stop-opacity=".95"/><stop offset=".6" stop-color="#e8d9b0" stop-opacity=".35"/><stop offset="1" stop-color="#e8d9b0" stop-opacity="0"/></radialGradient></defs>
    <rect width="1200" height="600" fill="#12080a"/><rect x="250" y="90" width="700" height="330" rx="6" fill="#1d1416"/><rect x="250" y="90" width="700" height="330" rx="6" fill="url(#gvS)"/>
    ${Array.from({ length: 14 }, (_, k) => `<path d="M${k * 22} 0V600" stroke="#2d070c" stroke-width="8" opacity=".55"/>`).join("")}
    <path d="M0 0H330Q300 250 340 600H0Z" fill="url(#gvC)"/><path d="M1200 0H870Q900 250 860 600H1200Z" fill="url(#gvC)"/>
    ${Array.from({ length: 8 }, (_, k) => `<path d="M${30 + k * 38} 0Q${20 + k * 38} 300 ${40 + k * 40} 600" stroke="#2b060b" stroke-width="5" fill="none" opacity=".6"/><path d="M${1170 - k * 38} 0Q${1180 - k * 38} 300 ${1160 - k * 40} 600" stroke="#2b060b" stroke-width="5" fill="none" opacity=".6"/>`).join("")}
    <path d="M0 0H1200V70Q900 110 600 80Q300 110 0 70Z" fill="#6d121c"/>${Array.from({ length: 30 }, (_, k) => `<circle cx="${20 + k * 40}" cy="${76 + Math.sin(k) * 6}" r="7" fill="#ffd77a"/><circle cx="${20 + k * 40}" cy="${76 + Math.sin(k) * 6}" r="16" fill="#ffd77a" opacity=".18"/>`).join("")}
    ${Array.from({ length: 7 }, (_, r) => Array.from({ length: 16 }, (_, c) => `<path d="M${120 + c * 62 + (r % 2) * 30} ${470 + r * 26}q20 -26 40 0z" fill="#0a0506" opacity="${.9 - r * .05}"/>`).join("")).join("")}
    <path d="M560 300l70 40-70 40z" fill="#12080a" opacity=".55"/></svg>`,
  kids: () => `<svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" class="gw-svg" aria-hidden="true">
    <rect width="1200" height="600" fill="#17414b"/><circle cx="1010" cy="120" r="70" fill="#ffd34d"/>${Array.from({ length: 12 }, (_, k) => `<path d="M1010 120L${1010 + Math.cos(k / 12 * 6.28) * 120} ${120 + Math.sin(k / 12 * 6.28) * 120}" stroke="#ffd34d" stroke-width="6" stroke-linecap="round" opacity=".6"/>`).join("")}
    ${[[180, 110, 1], [520, 70, .8], [760, 160, .7]].map(([x, y, s]) => `<g transform="translate(${x} ${y}) scale(${s})" fill="#e9f4f2"><circle r="40"/><circle cx="45" cy="10" r="34"/><circle cx="-45" cy="12" r="30"/><rect x="-75" y="10" width="150" height="34" rx="17"/></g>`).join("")}
    <path d="M0 430Q300 340 600 420T1200 400V600H0Z" fill="#3f9a6b"/><path d="M0 500Q300 440 640 500T1200 480V600H0Z" fill="#2f7d55"/>
    ${[[140, 420, "#ff7b8a"], [260, 450, "#ffd34d"], [980, 430, "#8fd3ff"], [1090, 460, "#ff9f5a"]].map(([x, y, c]) => `<g transform="translate(${x} ${y})"><path d="M0 0V50" stroke="#22553b" stroke-width="5"/>${Array.from({ length: 5 }, (_, k) => `<circle cx="${Math.cos(k * 1.256) * 14}" cy="${Math.sin(k * 1.256) * 14}" r="11" fill="${c}"/>`).join("")}<circle r="8" fill="#fff3c4"/></g>`).join("")}
    <g transform="translate(600 470)"><ellipse cy="70" rx="90" ry="14" fill="#1d5a3c"/><path d="M-60 60Q-70 -10 0 -15Q70 -10 60 60Z" fill="#3a3f47"/><circle cy="-50" r="52" fill="#3a3f47"/><ellipse cy="-30" rx="30" ry="22" fill="#f4f4f4"/><path d="M-30 50Q0 -20 30 50Z" fill="#f4f4f4"/><path d="M-45 -85L-35 -130L-10 -95Z M45 -85L35 -130L10 -95Z" fill="#3a3f47"/><path d="M-40 -92L-34 -118L-18 -96Z M40 -92L34 -118L18 -96Z" fill="#ffc9d1"/>
      <circle cx="-19" cy="-55" r="11" fill="#fff"/><circle cx="19" cy="-55" r="11" fill="#fff"/><circle cx="-17" cy="-53" r="6" fill="#17414b"/><circle cx="21" cy="-53" r="6" fill="#17414b"/><path d="M-6 -35L6 -35L0 -28Z" fill="#c4505f"/><path d="M0 -28Q-10 -18 -18 -24M0 -28Q10 -18 18 -24" stroke="#17414b" stroke-width="3" fill="none"/>
      <path d="M-30 -34H-70M-30 -28L-66 -18M30 -34H70M30 -28L66 -18" stroke="#fff" stroke-width="2.5"/><path d="M55 40Q120 30 100 -30" stroke="#3a3f47" stroke-width="16" stroke-linecap="round" fill="none"/></g>
    ${Array.from({ length: 16 }, (_, k) => `<circle cx="${(k * 173) % 1200}" cy="${200 + (k * 97) % 160}" r="${4 + k % 4}" fill="${["#ffd34d", "#ff7b8a", "#8fd3ff", "#b4f0a0"][k % 4]}" opacity=".7"/>`).join("")}</svg>`
};
function makeWorld(key, cls) {
  VIEWS[key] = root => {
    const S = STORIES[key]; if (!S) { Router.go(""); return {}; }
    const m = location.hash.match(new RegExp(key + "-(\\d+)")), ci = m ? +m[1] - 1 : -1, n = S.units.length;
    if (ci < 0 || !S.units[ci]) {
      const d = doneCount(key);
      root.innerHTML = `<div class="gw gw-${key}">${topBar()}<main class="gw-main">
        <section class="gw-hero"><div class="gw-art">${WART[key]()}</div><div class="gw-ht"><p class="gw-k">${S.level} · ${n} ${L("chapters")}</p><h1 class="gw-h">${letters(S.title)}</h1><p class="gw-p">${L(key + "D")}</p>
          <div class="gw-bar"><i style="width:${d / n * 100}%"></i></div><a class="gw-cta" href="#${key}-${nextIndex(key) + 1}">${d ? L("cont") : L("start")} →</a></div></section>
        <ol class="gw-list">${S.units.map((u, k) => { const open = isOpen(key, k), sv = solved(key, k);
          return `<li><a class="gw-ch ${open ? "" : "locked"} ${sv ? "solved" : ""}" href="${open ? `#${key}-${k + 1}` : `#${key}`}" style="--i:${k}"><span class="gw-em">${u.emoji || "✦"}</span><span class="gw-n">${S.unit} ${k + 1}</span><b>${esc(u.name)}</b><small>${esc(loc(u) || "")}</small><i>${sv ? "✓ " + best(key, k) + "/6" : open ? "→" : "🔒"}</i></a></li>`; }).join("")}</ol></main></div>`;
      riseLetters(root, ".gw-h .ch", { stagger: 30 });
      root.querySelector(".gw-list").addEventListener("click", e => { const a = e.target.closest(".locked"); if (a) { e.preventDefault(); flash(a, "shake"); } });
      return {};
    }
    if (!isOpen(key, ci)) { Router.go(key); return {}; }
    const u = S.units[ci];
    root.innerHTML = `<div class="gw gw-${key} gw-chv">${topBar()}<main class="gw-main"><a class="gw-back" href="#${key}">← ${esc(S.title)}</a>
      <div class="gw-band">${WART[key]()}<div class="gw-bt"><span class="gw-em big">${u.emoji || "✦"}</span><div><p class="gw-k">${S.unit} ${ci + 1}/${n}</p><h1 class="gw-h2">${esc(u.name)}</h1><small>${esc(loc(u) || "")}</small></div></div></div>
      <div class="gw-grid"><article class="gw-note"><p>${esc(u.note)} ${sayBtn(u.note)}</p>${trBlock(key, ci)}</article><div class="gw-quiz"></div></div></main></div>`;
    Quiz(root.querySelector(".gw-quiz"), { story: key, idx: ci, cls, nextLabel: S.units[ci + 1] ? S.units[ci + 1].name : "", onNext: () => Router.go(`${key}-${ci + 2}`) });
    return {};
  };
}
makeWorld("movie", "qz-mv"); makeWorld("kids", "qz-kid");

/* ---------- club of the week view ---------- */
VIEWS.club = root => {
  const S = STORIES.club; if (!S) { Router.go(""); return {}; }
  const m = location.hash.match(/club-(\d+)/), cur = clubIdx(), ci = m ? +m[1] - 1 : cur, u = S.units[ci] || S.units[cur];
  const t = TXT.club[ci] || {}, sp = LANG === "az" ? u.speakAz : LANG === "ru" ? u.speakRu : "";
  root.innerHTML = `<div class="cl">${topBar()}<main class="cl-main">
    <header class="cl-head"><p class="cl-k">☕ ${L("clubK")} · ${ci === cur ? L("clubNew") : "#" + (ci + 1)}</p><span class="cl-fmt">${u.emoji || "✦"} ${esc(u.format)}</span><h1 class="cl-h">${esc(u.title)}</h1><p class="cl-sub">${[loc(u), u.level].filter(Boolean).map(esc).join(" · ")}</p></header>
    <div class="cl-grid"><article class="cl-text"><p>${esc(u.text)} ${sayBtn(u.text)}</p>${t.az ? `<details class="trd"><summary>${L("showTr")} · AZ / RU</summary><p><i>AZ</i>${esc(t.az)}</p><p><i>RU</i>${esc(t.ru)}</p></details>` : ""}
      <div class="cl-speak"><b>🎙 ${L("speakT")}</b><p>${esc(u.speak)}</p>${sp ? `<p class="cl-tr">${esc(sp)}</p>` : ""}<a class="qz-btn" href="${DM}" target="_blank" rel="noopener">${L("speakSend")} ↗</a></div></article>
      <div class="cl-quiz"></div></div>
    <h2 class="cl-h2">${L("clubArchive")}</h2><div class="cl-arch">${S.units.map((w, k) => `<a class="cl-ep ${k === ci ? "on" : ""}" href="#club-${k + 1}"><span>${w.emoji || "✦"}</span><b>${esc(w.title)}</b><small>${esc(w.format)}</small></a>`).join("")}</div></main></div>`;
  Quiz(root.querySelector(".cl-quiz"), { story: "club", idx: ci, cls: "qz-cl" });
  return {};
};

Object.assign(UI.en, { bizNav: "Business English", bizK: "Business English", bizH: "Talk business — through real work cases", fm_biz: "Business English", fm_bizP: "A mystery at a Baku company: emails, meetings, calls and the deal." });
Object.assign(UI.az, { bizNav: "Business English", bizK: "Business English", bizH: "Biznes dilində danış — real iş hallarında", fm_biz: "Business English", fm_bizP: "Bakı şirkətində sirr: məktublar, iclaslar, zənglər və sövdə." });
Object.assign(UI.ru, { bizNav: "Business English", bizK: "Деловой английский", bizH: "Говори на языке бизнеса — в реальных рабочих ситуациях", fm_biz: "Деловой английский", fm_bizP: "Загадка в бакинской компании: письма, встречи, звонки и сделка." });
