/* ===== NEW CONTENT: mystery world, mistake hunters, level test, exam room, daily words ===== */
/* question format: [text, options (correct first), explanation, meta?]
   meta: {t:"type", alt:[...]} typed answer · {t:"order"} build the sentence from options[0] · {t:"listen", say:"..."} hear, then choose */

STORIES.mystery = { title: "The Secret of Icherisheher", level: "A2–B1", unit: "Room",
units: [
{ id: "court", name: "The Old Guesthouse", az: "Köhnə qonaq evi", ru: "Старый гостевой дом", img: null, scene: "court",
  note: "It is late evening in Icherisheher, the Old City of Baku. Mr Rauf, the owner of a small guesthouse, is waiting for you in the courtyard. \"Our famous carpet, the Seven Stars, has disappeared,\" he says. \"It was on the wall of the library at nine o'clock. At eleven, it wasn't there. Three guests are staying here tonight. Please help me.\"",
  qs: [
["Where does the story take place?", ["in the Old City of Baku", "in a museum in London", "on a ship"], "Icherisheher is the Old City of Baku, a UNESCO World Heritage Site since 2000."],
["What is missing?", ["a carpet", "a painting", "a key"], "The Seven Stars carpet has disappeared from the library."],
["The carpet ___ on the library wall at nine o'clock.", ["was", "were", "is"], "The carpet is singular and it's the past: was.", { t: "type" }],
["How many guests are staying at the guesthouse tonight?", ["three", "seven", "eleven"], "Mr Rauf says: three guests are staying here tonight."],
["\"Disappeared\" means…", ["went away and can't be found", "got bigger", "was cleaned"], "Disappear = stop being seen, vanish."],
["Riddle: I have many pages but no voice, and I live on shelves. Where are you going next? To the room full of…", ["books", "plates", "shoes"], "Books! The next room is the library."]]},
{ id: "library", name: "The Library", az: "Kitabxana", ru: "Библиотека", img: "img/m-library.jpg",
  note: "The library smells of old paper. The lamp is still warm and a book is open on the desk. You talk to the three guests. Leyla, a student, says: \"At ten o'clock I was reading in my room.\" Mr Kamal, an antique dealer, says: \"I was having tea in the kitchen.\" Nina, a tourist from London, says: \"I was taking photos on the roof.\"",
  qs: [
["What was Leyla doing at ten o'clock?", ["She was reading in her room.", "She was having tea.", "She was taking photos."], "Leyla: \"At ten o'clock I was reading in my room.\""],
["Mr Kamal ___ tea in the kitchen at ten.", ["was having", "were having", "has"], "Past continuous for an action in progress at a past time: was + -ing.", { t: "type", alt: ["was drinking"] }],
["Which guest is an antique dealer?", ["Mr Kamal", "Leyla", "Nina"], "An antique dealer buys and sells old, valuable things."],
["The lamp is still warm. This means…", ["someone was here not long ago", "the lamp is broken", "it's summer"], "A warm lamp was used recently: a good clue!"],
["Nina ___ photos on the roof when the carpet disappeared.", ["was taking", "took", "is taking"], "Past continuous for a background action in a story."],
["Riddle: I boil water and I sing when tea is ready. Find me in the next room. Where?", ["the kitchen", "the garden", "the bathroom"], "A kettle sings in the kitchen. Go to the kitchen!"]]},
{ id: "kitchen", name: "The Kitchen", az: "Mətbəx", ru: "Кухня", img: "img/m-kitchen.jpg",
  note: "In the kitchen there are two armudu tea glasses on the table. One glass is still half full. On the floor you see muddy footprints. They go from the table to the back door. Next to the samovar there is a small folded letter with a red seal.",
  qs: [
["How many tea glasses are on the table?", ["two", "one", "three"], "There are two armudu tea glasses on the table."],
["The footprints go ___ the table ___ the back door.", ["from … to", "in … on", "at … at"], "From one place to another place."],
["The letter is ___ to the samovar.", ["next", "near of", "beside of"], "The fixed phrase is next to.", { t: "type" }],
["An \"armudu\" glass has the shape of a…", ["pear", "star", "boot"], "Armud means pear in Azerbaijani, so armudu is pear-shaped."],
["Who said he was in the kitchen at ten?", ["Mr Kamal", "Nina", "Leyla"], "Mr Kamal said he was having tea in the kitchen."],
["Riddle: I travel without legs, I carry words, and I wear a red seal. What will you open next?", ["the letter", "the window", "the samovar"], "The letter! Open it carefully."]]},
{ id: "letter", name: "The Secret Letter", az: "Gizli məktub", ru: "Тайное письмо", img: "img/m-letter.jpg",
  note: "You open the letter. It says: \"Midnight. Bring the stars to the old place under the house. Nobody must see you. — K.\" Next to the letter there is a small brass key and a magnifying glass.",
  qs: [
["When is the meeting?", ["at midnight", "at noon", "at nine o'clock"], "The letter says: \"Midnight.\""],
["The letter is signed \"K\". The writer ___ be Mr Kamal.", ["might", "must to", "can't to"], "Might = maybe it's true. We have a clue, but no proof yet."],
["\"Bring the stars\" probably means…", ["bring the Seven Stars carpet", "bring real stars", "bring a telescope"], "The carpet is called the Seven Stars."],
["The letter says the place is ___ the house.", ["under", "over", "behind of"], "Under = below.", { t: "type" }],
["Nina is from London, so the letter ___ be in her first language. It's in English!", ["could", "can't", "mustn't"], "Could = it's possible. A deduction, not a fact."],
["Riddle: I am under the house, dark and cool, full of old boxes. Where are you going?", ["the cellar", "the roof", "the balcony"], "The cellar is the room under the house. Take the lantern!"]]},
{ id: "cellar", name: "The Cellar", az: "Zirzəmi", ru: "Подвал", img: "img/m-cellar.jpg",
  note: "The cellar is colder and darker than the other rooms. In the dust you see the shape of a rolled carpet, but the carpet is gone. On the wall there is an old map of the Old City with a circle around a caravanserai. Then you hear footsteps on the roof.",
  qs: [
["The cellar is ___ than the other rooms.", ["colder", "more cold", "coldest"], "Short adjective: cold → colder than.", { t: "type" }],
["What do you see in the dust?", ["the shape of a rolled carpet", "a cat", "a broken lamp"], "The carpet was here, rolled up, but now it's gone."],
["What is circled on the map?", ["a caravanserai", "a mosque", "a school"], "A caravanserai: an old inn where travelling merchants stayed."],
["It's the ___ room in the house.", ["darkest", "darker", "most dark"], "Superlative of dark: the darkest."],
["You hear footsteps ___ the roof.", ["on", "in", "at"], "We say on the roof."],
["Riddle: I am the highest part of the house, and the stars are my ceiling. Go there now!", ["the roof", "the cellar", "the kitchen"], "Up to the roof, quickly!"]]},
{ id: "roof", name: "The Rooftop", az: "Dam", ru: "Крыша", img: null, scene: "roof",
  note: "From the roof you can see the Maiden Tower, lit up in gold, and the Flame Towers in the distance. Nina is there with her camera. \"Look!\" she says. \"I took this photo at ten. A man is carrying something long and red to the caravanserai.\" You look at the photo. The man is wearing Mr Kamal's hat.",
  qs: [
["Which famous tower can you see from the roof?", ["the Maiden Tower", "the Eiffel Tower", "Big Ben"], "The Maiden Tower (Qız qalası) is the symbol of Baku's Old City."],
["What is the man in the photo carrying?", ["something long and red", "a small bag", "a cat"], "Something long and red: the rolled carpet!"],
["___ did Nina take the photo? — At ten.", ["When", "Where", "Who"], "We ask about time with When."],
["Whose hat is the man wearing?", ["Mr Kamal's", "Mr Rauf's", "Leyla's"], "Possessive 's: Mr Kamal's hat."],
["Nina was on the roof, so she ___ have the carpet. She was taking photos.", ["can't", "must", "should"], "Can't = we're sure it's not true. Nina has an alibi."],
["Riddle: Long ago, merchants and their camels slept inside my stone walls. Where is the carpet now?", ["in a caravanserai", "in a bank", "in a train"], "A caravanserai! Run there before midnight."]]},
{ id: "caravan", name: "The Caravanserai", az: "Karvansara", ru: "Караван-сарай", img: null, scene: "caravan",
  note: "It is almost midnight. In the courtyard of the old caravanserai, the Seven Stars carpet is lying on a bench. Mr Kamal is waiting for a buyer. When he sees you and Mr Rauf, he says: \"I'm sorry. I wanted to sell it.\" Mr Rauf is happy: the carpet is home again. Azerbaijani carpet weaving is even on UNESCO's list of world heritage.",
  qs: [
["Who took the carpet?", ["Mr Kamal", "Nina", "Leyla"], "The clues: the letter signed K, the kitchen, the hat in Nina's photo."],
["Why did he take it?", ["He wanted to sell it.", "He wanted to clean it.", "He was cold."], "Mr Kamal says: \"I wanted to sell it.\""],
["Mr Kamal said that he ___ to sell the carpet.", ["had wanted", "has wanted", "wants wanted"], "Reported speech moves the tense back: wanted → had wanted. (\"wanted\" is also accepted.)", { t: "type", alt: ["wanted"] }],
["Azerbaijani carpet weaving is on UNESCO's list of…", ["intangible cultural heritage", "endangered animals", "sports"], "Since 2010 it's on UNESCO's list of the Intangible Cultural Heritage of Humanity."],
["Put the story in order: first ___, then the footprints, then the letter.", ["the library", "the caravanserai", "the roof"], "Library → kitchen (footprints) → letter → cellar → roof → caravanserai."],
["Final: the most important clue was…", ["the photo on the roof", "the warm lamp", "the cold cellar"], "Nina's photo showed Mr Kamal carrying the carpet. Case closed, detective!"]]}
]};

/* ---------- Mistake hunters: errors Azerbaijani and Russian speakers often make ---------- */
STORIES.errors = { title: "Mistake Hunters", level: "A2–B1", unit: "Game", noRiddle: true,
units: [
{ id: "articles", name: "Articles", full: "A, an, the", az: "Artikllar", ru: "Артикли", icon: "a/an",
  info: "Azerbaijani and Russian have no articles, so a / an / the are easy to forget.",
  qs: [
["I saw ___ elephant at the zoo.", ["an", "a", "—"], "Before a vowel sound: an elephant."],
["___ sun is very hot today.", ["The", "A", "—"], "There is only one sun: the sun."],
["She is ___ teacher.", ["a", "—", "the"], "Jobs need a/an: She is a teacher."],
["I love ___ music.", ["—", "the", "a"], "Music in general: no article."],
["Can you close ___ door, please?", ["the", "a", "—"], "We both know which door: the door."],
["It takes ___ hour to get there.", ["an", "a", "the"], "Hour starts with a vowel sound /aʊ/: an hour."]]},
{ id: "pronouns", name: "He, she or it?", full: "He, she, it", az: "He, she, it", ru: "He, she, it", icon: "he/she",
  info: "Azerbaijani uses one word, \"o\", for he, she and it. English doesn't!",
  qs: [
["My mother is a doctor. ___ works in a hospital.", ["She", "He", "It"], "Mother is a woman: she."],
["This is my brother. ___ name is Elvin.", ["His", "Her", "Its"], "Brother → his."],
["Look at the cat! ___ is sleeping.", ["It", "He", "She"], "Animals are usually it (or he/she for your own pet)."],
["My sister lost ___ phone.", ["her", "his", "its"], "Sister → her."],
["Ask your father. ___ knows the answer.", ["He", "She", "It"], "Father → he."],
["The company changed ___ logo.", ["its", "it's", "his"], "Its = belonging to it. It's = it is."]]},
{ id: "order", name: "Word order", full: "Word order", az: "Söz sırası", ru: "Порядок слов", icon: "S·V·O",
  info: "In Azerbaijani the verb often goes last. In English: subject, verb, object.",
  qs: [
["Build the sentence.", ["I drink tea every morning"], "Subject + verb + object + time.", { t: "order" }],
["Build the sentence.", ["She was at home yesterday"], "The verb comes after the subject, not at the end.", { t: "order" }],
["Build the sentence.", ["We live near the sea"], "Prepositions go before the noun: near the sea.", { t: "order" }],
["Build the question.", ["Where do you live"], "Question: question word + do + subject + verb.", { t: "order" }],
["Build the sentence.", ["My brother plays football on Sundays"], "Subject + verb + object + time.", { t: "order" }],
["Build the sentence.", ["I have never been to London"], "have + never + past participle.", { t: "order" }]]},
{ id: "wv", name: "W or V?", full: "W or V", az: "W yoxsa V?", ru: "W или V?", icon: "w/v",
  info: "Many learners say \"vet\" for \"wet\". For w, round your lips like a kiss.",
  qs: [
["Listen. Which word do you hear?", ["wet", "vet"], "Wet = not dry. Lips round for w.", { t: "listen", say: "wet" }],
["Listen. Which word do you hear?", ["vine", "wine"], "Vine = a plant that climbs. Top teeth touch the lip for v.", { t: "listen", say: "vine" }],
["Listen. Which word do you hear?", ["west", "vest"], "West, like the direction.", { t: "listen", say: "west" }],
["Listen. Which word do you hear?", ["very", "wary"], "Very, as in very good.", { t: "listen", say: "very" }],
["Listen. Which word do you hear?", ["while", "vile"], "While = during the time that.", { t: "listen", say: "while" }],
["Listen. Which word do you hear?", ["vowel", "wow"], "A vowel is a, e, i, o, u.", { t: "listen", say: "vowel" }]]},
{ id: "perfect", name: "Present Perfect", full: "Present Perfect", az: "Present Perfect", ru: "Present Perfect", icon: "have+V3",
  info: "Russian has no Present Perfect, so learners often use the past simple instead.",
  qs: [
["I ___ already ___ my homework.", ["have … done", "did … do", "was … done"], "Already → Present Perfect: have done."],
["___ you ever ___ sushi?", ["Have … eaten", "Did … eat", "Do … eat"], "Ever (in your life) → Present Perfect."],
["I ___ to Paris in 2023.", ["went", "have gone", "have been"], "A finished date (in 2023) → Past Simple."],
["She has lived in Baku ___ 2015.", ["since", "for", "from"], "Since + a starting point; for + a period of time."],
["I've known him ___ ten years.", ["for", "since", "during"], "For + a period: for ten years.", { t: "type" }],
["Have you finished it ___?", ["yet", "already ago", "still"], "Yet in questions and negatives."]]},
{ id: "false", name: "False friends", full: "False friends", az: "Yalançı dostlar", ru: "Ложные друзья", icon: "≠",
  info: "Some English words look like Azerbaijani or Russian words but mean something else.",
  qs: [
["\"Actual\" in English means…", ["real, true", "important now", "modern"], "Actual = real. \"Актуальный\" = relevant/current."],
["A \"magazine\" is…", ["a journal you read", "a shop", "a big store"], "Magazin (shop) in Azerbaijani/Russian is a shop in English."],
["A \"cabinet\" in English is usually…", ["a cupboard", "an office room", "a doctor's room"], "Kabinet (office) is an office or study in English."],
["A \"chef\" is…", ["a professional cook", "a boss", "a manager"], "Шеф (boss) is a boss in English."],
["\"Sympathetic\" means…", ["kind and understanding", "good-looking", "funny"], "Simpatik (good-looking) is attractive or nice-looking in English."],
["A \"familiar\" face is…", ["one you know", "a family member", "your surname"], "Familiya (surname) is a surname. Familiar = known to you."]]}
]};

/* ---------- Level test: 5 questions per level ---------- */
const LEVELQ = [
["A1", "My name ___ Ali.", ["is", "am", "are"]], ["A1", "They ___ from Baku.", ["are", "is", "be"]], ["A1", "I ___ coffee every morning.", ["drink", "drinks", "drinking"]],
["A1", "There ___ two cats in the garden.", ["are", "is", "be"]], ["A1", "What time ___ it?", ["is", "are", "do"]],
["A2", "Yesterday I ___ to the cinema.", ["went", "go", "have gone"]], ["A2", "This bag is ___ than that one.", ["cheaper", "more cheap", "cheapest"]],
["A2", "We ___ dinner when the phone rang.", ["were having", "had", "have"]], ["A2", "I'm going ___ my grandmother tomorrow.", ["to visit", "visit", "visiting to"]],
["A2", "You ___ wear a seatbelt in the car.", ["must", "mustn't", "don't have"]],
["B1", "I've lived here ___ 2019.", ["since", "for", "from"]], ["B1", "If it rains, we ___ at home.", ["will stay", "would stay", "stayed"]],
["B1", "The museum ___ in 1902.", ["was built", "built", "has build"]], ["B1", "She asked me where I ___.", ["lived", "do live", "live"]],
["B1", "I'm not used to ___ up so early.", ["getting", "get", "got"]],
["B2", "If I ___ more time, I would learn Japanese.", ["had", "have", "will have"]], ["B2", "By next June, she ___ her degree.", ["will have finished", "will finish", "finishes"]],
["B2", "He denied ___ the window.", ["breaking", "to break", "break"]], ["B2", "Hardly ___ arrived when it started to rain.", ["had we", "we had", "did we"]],
["B2", "I wish I ___ that. It was a mistake.", ["hadn't said", "didn't say", "haven't said"]],
["C1", "No sooner ___ the house than it started to pour.", ["had I left", "I had left", "did I leave"]], ["C1", "She's highly ___ to win the award.", ["likely", "probable", "possibly"]],
["C1", "Had I known about the delay, I ___ a later train.", ["would have taken", "would take", "had taken"]], ["C1", "The report, ___ findings were surprising, was published yesterday.", ["whose", "which", "that"]],
["C1", "It's high time we ___ a decision.", ["made", "make", "will make"]],
["C2", "Little ___ that his life was about to change.", ["did he realise", "he realised", "he did realise"]], ["C2", "The proposal was met with ___ approval: nobody objected.", ["unanimous", "unilateral", "unanimity"]],
["C2", "Were it not for her help, we ___ in serious trouble now.", ["would be", "will be", "had been"]], ["C2", "He's not one to ___ his words; he says exactly what he thinks.", ["mince", "chop", "cut"]],
["C2", "The new evidence ___ doubt on his version of events.", ["casts", "throws up", "puts"]]
];
const LEVEL_INFO = {
  A1: { en: "Beginner. You can use simple everyday phrases.", az: "Başlanğıc. Sadə gündəlik ifadələrdən istifadə edə bilirsən.", ru: "Начальный. Ты используешь простые повседневные фразы.", go: "cafe" },
  A2: { en: "Elementary. You can talk about your daily life and the past.", az: "Elementar. Gündəlik həyatın və keçmiş haqqında danışa bilirsən.", ru: "Элементарный. Ты можешь говорить о повседневной жизни и прошлом.", go: "tapes" },
  B1: { en: "Intermediate. You can tell stories and give your opinion.", az: "Orta. Hekayə danışa və fikrini bildirə bilirsən.", ru: "Средний. Ты можешь рассказывать истории и выражать мнение.", go: "mystery" },
  B2: { en: "Upper-intermediate. You can discuss many topics in detail.", az: "Ortadan yuxarı. Bir çox mövzunu ətraflı müzakirə edə bilirsən.", ru: "Выше среднего. Ты можешь подробно обсуждать многие темы.", go: "movie" },
  C1: { en: "Advanced. You express yourself fluently and flexibly, even on complex topics.", az: "İrəli. Mürəkkəb mövzularda belə sərbəst və çevik danışırsan.", ru: "Продвинутый. Ты свободно и гибко выражаешь мысли даже на сложные темы.", go: "business" },
  C2: { en: "Proficiency. You understand almost everything and use English with precision and style.", az: "Mükəmməl. Demək olar ki, hər şeyi başa düşür, ingilis dilindən dəqiq və zərif istifadə edirsən.", ru: "Свободное владение. Ты понимаешь почти всё и используешь английский точно и стильно.", go: "heist" }
};

/* ---------- Exam room: DİM-style practice (unofficial) ---------- */
const EXAM = {
  listen: "Hello, everyone. My name is Murad, and I want to tell you about my summer. In July, I went to Gabala with my family. We stayed in a small hotel near the mountains. Every morning we walked in the forest, and in the afternoon we swam in the lake. On Saturday it rained all day, so we stayed inside and played board games. My little sister won every game! The best day was Sunday, when we took the cable car to the top of the mountain. The view was amazing. Next summer, I want to visit Sheki, because I want to see the Palace of the Shaki Khans.",
  lq: [
["Where did Murad go in July?", ["Gabala", "Sheki", "Baku", "Lankaran"]],
["Where did they stay?", ["in a small hotel near the mountains", "with their grandparents", "in a tent by the lake", "in a big hotel in the city"]],
["What did they do every morning?", ["walked in the forest", "swam in the lake", "played board games", "visited a palace"]],
["Why did they stay inside on Saturday?", ["It rained all day.", "His sister was ill.", "It was too hot.", "The hotel was closed."]],
["What was the best day?", ["Sunday", "Saturday", "Monday", "Friday"]],
["Why does Murad want to visit Sheki?", ["to see the Palace of the Shaki Khans", "to swim in the sea", "to ride a cable car", "to visit his sister"]]
  ],
  gq: [
["She ___ English for five years.", ["has studied", "studies", "studied", "is studying"]],
["If I ___ you, I would talk to the teacher.", ["were", "am", "will be", "have been"]],
["This is the ___ book I have ever read.", ["most interesting", "more interesting", "interestingest", "much interesting"]],
["The letter ___ yesterday.", ["was sent", "sent", "has sent", "is sending"]],
["I'm looking forward ___ you.", ["to seeing", "to see", "seeing", "for seeing"]],
["He asked me ___ I was tired.", ["if", "that", "what", "which"]],
["We have ___ milk left. Let's buy some.", ["little", "few", "a few", "many"]],
["You ___ smoke here. It's forbidden.", ["mustn't", "don't have to", "needn't", "can"]],
["She's interested ___ history.", ["in", "on", "at", "from"]],
["By the time we arrived, the film ___.", ["had started", "started", "has started", "starts"]],
["Choose the synonym of \"rapid\".", ["fast", "slow", "heavy", "quiet"]],
["Choose the opposite of \"generous\".", ["mean", "kind", "rich", "brave"]],
["I can't stand ___ in long queues.", ["waiting", "to waiting", "wait", "waited"]],
["Neither Ali ___ Aysel came to the party.", ["nor", "or", "and", "but"]],
["The man ___ car was stolen called the police.", ["whose", "who", "which", "whom"]],
["\"Make\" or \"do\"? Please ___ your homework.", ["do", "make", "take", "get"]]
  ],
  read: "Azerbaijan is often called the Land of Fire. In some places, natural gas comes out of the ground and burns for years. The most famous example is Yanar Dag, a hillside near Baku where flames have been burning for a very long time. Rain does not stop them. Long ago, fire was important in the religion of people who lived in this region, and travellers on the Silk Road told stories about the burning ground. Today, thousands of tourists visit Yanar Dag every year, especially in the evening, when the flames look brightest. The Ateshgah Fire Temple in Surakhani is another popular place. It was built by merchants and pilgrims, and it is now a museum.",
  rq: [
["Why is Azerbaijan called the Land of Fire?", ["Natural gas comes out of the ground and burns.", "It is very hot in summer.", "There are many volcanoes.", "People make fires for festivals."]],
["Where is Yanar Dag?", ["near Baku", "in Sheki", "on the Silk Road in China", "in Gabala"]],
["What happens to the flames when it rains?", ["Rain does not stop them.", "They go out.", "They get bigger.", "They change colour."]],
["When do the flames look brightest?", ["in the evening", "in the morning", "at noon", "in winter only"]],
["What is the Ateshgah today?", ["a museum", "a hotel", "a school", "a gas factory"]],
["Write ONE word from the text: travellers on the Silk ___ told stories.", ["Road"], "open"],
["Write ONE word from the text: Ateshgah was built by merchants and ___.", ["pilgrims"], "open"],
["Write ONE word from the text: thousands of ___ visit Yanar Dag every year.", ["tourists"], "open"]
  ]
};

/* ---------- Daily word: 5-letter A2–B1 words with meaning ---------- */
const DAILY = [
["HOUSE", "ev", "дом"], ["TRAIN", "qatar", "поезд"], ["APPLE", "alma", "яблоко"], ["BEACH", "çimərlik", "пляж"], ["BREAD", "çörək", "хлеб"],
["CLOUD", "bulud", "облако"], ["DREAM", "yuxu, arzu", "мечта, сон"], ["EARTH", "Yer, torpaq", "Земля"], ["FRUIT", "meyvə", "фрукт"], ["GREEN", "yaşıl", "зелёный"],
["HAPPY", "xoşbəxt", "счастливый"], ["LIGHT", "işıq", "свет"], ["MONEY", "pul", "деньги"], ["MUSIC", "musiqi", "музыка"], ["NIGHT", "gecə", "ночь"],
["OCEAN", "okean", "океан"], ["PAPER", "kağız", "бумага"], ["PLANT", "bitki", "растение"], ["QUIET", "sakit", "тихий"], ["RIVER", "çay (axar su)", "река"],
["SMILE", "təbəssüm", "улыбка"], ["SPACE", "kosmos, yer", "космос, место"], ["STORM", "fırtına", "буря"], ["SWEET", "şirin", "сладкий"], ["TABLE", "masa", "стол"],
["TIGER", "pələng", "тигр"], ["WATER", "su", "вода"], ["WORLD", "dünya", "мир"], ["YOUNG", "gənc", "молодой"], ["ZEBRA", "zebr", "зебра"],
["BRAVE", "cəsur", "смелый"], ["CHAIR", "stul", "стул"], ["CLEAN", "təmiz", "чистый"], ["DANCE", "rəqs", "танец"], ["EARLY", "erkən", "рано"],
["FIELD", "tarla, sahə", "поле"], ["GUEST", "qonaq", "гость"], ["HEART", "ürək", "сердце"], ["LEARN", "öyrənmək", "учиться"], ["LUNCH", "nahar", "обед"],
["MOVIE", "film", "фильм"], ["NURSE", "tibb bacısı", "медсестра"], ["PARTY", "əyləncə", "вечеринка"], ["PEACE", "sülh", "мир, покой"], ["PHONE", "telefon", "телефон"],
["PLACE", "yer", "место"], ["READY", "hazır", "готовый"], ["SHEEP", "qoyun", "овца"], ["SHIRT", "köynək", "рубашка"], ["SLEEP", "yatmaq", "спать"],
["STONE", "daş", "камень"], ["STORY", "hekayə", "история"], ["TEACH", "öyrətmək", "учить (кого-то)"], ["TOWER", "qala, qüllə", "башня"], ["VOICE", "səs", "голос"],
["WATCH", "saat, baxmaq", "часы, смотреть"], ["WOMAN", "qadın", "женщина"], ["WRITE", "yazmaq", "писать"], ["CAMEL", "dəvə", "верблюд"], ["FLAME", "alov", "пламя"]
];
