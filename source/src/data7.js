/* ===== Baku Café (A1–A2, adults), Advanced error units (C1–C2), Basic & Advanced exams ===== */
/* question format: [text, options (correct first), explanation, meta?] */

STORIES.cafe = { title: "Baku Café", level: "A1–A2", unit: "Visit",
units: [
{ id: "hello", name: "Hello, Leyla!", az: "Salam, Leyla!", ru: "Привет, Лейла!", emoji: "☕", img: null,
  note: "Leyla is twenty-eight years old. She is from Sheki, but now she lives in Baku. Today she opens a small café near Fountain Square. It has six tables and big windows. Her first customer is a young man. \"Hello! I'm Leyla. What's your name?\" \"Hi, I'm Kamran. I'm a student. Nice to meet you!\" Leyla smiles. \"Nice to meet you too. Welcome to Baku Café!\"",
  qs: [
["Where is Leyla from?", ["Sheki", "Baku", "Ganja"], "\"She is from Sheki, but now she lives in Baku.\" Be from = your hometown or country."],
["Where is the café?", ["near Fountain Square", "near the sea", "in Sheki"], "Leyla opens a small café near Fountain Square, in the centre of Baku."],
["We say \"Nice to meet you\" when…", ["we meet someone for the first time", "we say goodbye", "we are hungry"], "Nice to meet you = a polite phrase for the first meeting. The answer is: Nice to meet you too."],
["Kamran ___ a student.", ["is", "am", "are"], "He, she, it → is. Kamran is a student.", {"t": "type", "alt": ["'s"]}],
["How many tables are in the café?", ["six", "two", "ten"], "\"It has six tables and big windows.\" A small café!"],
["Riddle: I am hot. I live in a small glass called armudu, and people in Azerbaijan drink me all day. I am ___.", ["tea", "juice", "soup"], "Tea! In the next visit, customers order drinks."]]},
{ id: "drinks", name: "Tea or Coffee?", az: "Çay, yoxsa qəhvə?", ru: "Чай или кофе?", emoji: "🫖", img: null,
  note: "Kamran comes back the next day with his friend Aysel. \"Can I have a black tea, please?\" asks Kamran. \"And a coffee with milk for me,\" says Aysel. \"How much is it?\" Leyla looks at the menu on the wall. \"Tea is two manats, and coffee is four manats. That's six manats, please.\" Aysel pays with a card. \"Thank you! Your drinks are coming.\"",
  qs: [
["What does Kamran want?", ["a black tea", "a coffee with milk", "an orange juice"], "\"Can I have a black tea, please?\" asks Kamran."],
["How much is a coffee?", ["four manats", "two manats", "six manats"], "Tea is two manats, coffee is four manats. Together: six manats."],
["\"How much is it?\" is a question about…", ["the price", "the time", "the name"], "How much is it? = What is the price? Answer: It's six manats."],
["___ I have a tea, please?", ["Can", "Do", "Am"], "A polite request: Can I have…, please? (Could I… and May I… are also correct.)", {"t": "type", "alt": ["Could", "May"]}],
["How does Aysel pay?", ["with a card", "with cash", "She doesn't pay."], "Aysel pays with a card. We say: pay with a card / pay in cash."],
["Riddle: You read me before you order. I show food, drinks and prices. I am a ___.", ["menu", "cup", "chair"], "A menu! In the next visit, Leyla writes a new menu with food."]]},
{ id: "menu", name: "The New Menu", az: "Yeni menyu", ru: "Новое меню", emoji: "🥐", img: null,
  note: "Leyla writes a new menu. Now there is some food too: soup, salads, cakes and qutab. A tourist from Germany, Anna, sits down. \"I'd like a salad and some bread, please.\" \"Sorry, we haven't got any bread today. Would you like some qutab?\" \"What is qutab?\" \"It's a thin Azerbaijani pancake with herbs or meat.\" \"Great! I'd like two, please.\"",
  qs: [
["Where is Anna from?", ["Germany", "France", "Azerbaijan"], "Anna is a tourist from Germany."],
["What hasn't the café got today?", ["bread", "salad", "cake"], "\"Sorry, we haven't got any bread today.\""],
["We haven't got ___ bread.", ["any", "some", "a"], "In negative sentences and questions we use any. In positive sentences we use some.", {"t": "type"}],
["\"I'd like a salad\" means…", ["I want a salad (politely).", "I liked a salad.", "I don't like salad."], "I'd like = I would like. It's a polite way to say I want."],
["What is qutab?", ["a thin pancake with herbs or meat", "a sweet drink", "a kind of bread"], "Leyla explains: \"It's a thin Azerbaijani pancake with herbs or meat.\""],
["Riddle: I have a big map and a camera, and I don't know the way. I am a ___.", ["tourist", "waiter", "cook"], "A tourist! In the next visit, a tourist asks Leyla for directions."]]},
{ id: "way", name: "Which Way?", az: "Hansı tərəfə?", ru: "Куда идти?", emoji: "🗺️", img: null,
  note: "A tourist with a big map comes into the café. \"Excuse me, how do I get to the Old City?\" he asks. Leyla points out of the window. \"It's easy. Go straight on to the end of the street. Then turn left. The Maiden Tower is on your right, next to a small park. It's about ten minutes on foot.\" \"Thank you very much!\" \"You're welcome. Enjoy Baku!\"",
  qs: [
["Where does the tourist want to go?", ["to the Old City", "to the airport", "to the sea"], "\"Excuse me, how do I get to the Old City?\""],
["What must he do first?", ["go straight on", "turn right", "take a taxi"], "First: go straight on to the end of the street."],
["At the end of the street, he turns ___.", ["left", "right", "back"], "\"Then turn left.\" Turn left / turn right.", {"t": "type"}],
["The Maiden Tower is ___ a small park.", ["next to", "under", "inside"], "Next to = very near, at the side of. The tower is next to a small park."],
["How long is the walk?", ["about ten minutes", "about an hour", "two minutes"], "\"It's about ten minutes on foot.\" On foot = walking."],
["Riddle: Every table is full, the phone rings and rings, and nobody has time to sit. It's a ___ day!", ["busy", "quiet", "sleepy"], "A busy day! In the next visit, the café is full of people."]]},
{ id: "busy", name: "A Busy Saturday", az: "Gərgin şənbə", ru: "Суматошная суббота", emoji: "🔥", img: null,
  note: "It's Saturday afternoon and the café is full. Leyla is making coffee. Her brother Orkhan is helping her today: he is carrying plates to the tables. Kamran and Aysel are sitting by the window. They are playing nard. A baby is crying, and an old man is reading a newspaper. Then the phone rings. \"Sorry, I can't talk now. We're very busy!\" says Leyla.",
  qs: [
["What is Leyla doing?", ["making coffee", "carrying plates", "reading a newspaper"], "\"Leyla is making coffee.\" Present continuous: is + verb-ing."],
["Who is helping Leyla today?", ["her brother Orkhan", "Kamran", "Anna"], "Her brother Orkhan is helping her: he is carrying plates."],
["Kamran and Aysel ___ playing nard.", ["are", "is", "am"], "They → are. They are playing nard (backgammon).", {"t": "type", "alt": ["'re"]}],
["Which sentence is about now?", ["The baby is crying.", "The baby cries every night.", "The baby cried."], "Present continuous (is crying) = an action happening now."],
["Why can't Leyla talk on the phone?", ["The café is very busy.", "The phone is broken.", "She is sleeping."], "\"Sorry, I can't talk now. We're very busy!\""],
["Riddle: There is music, a cake with one candle and lots of guests. It's a ___!", ["party", "lesson", "meeting"], "A party! In the next visit, the café has its first birthday party."]]},
{ id: "party", name: "Yesterday's Party", az: "Dünənki məclis", ru: "Вчерашний праздник", emoji: "🎉", img: null,
  note: "Yesterday the café was one month old, so Leyla had a party. Thirty people came! Orkhan played the tar, and Aysel sang an old song. Anna brought a German apple cake. Everybody danced and laughed. The party finished at eleven o'clock. Leyla was very tired, but she was happy. \"Thank you all,\" she said. \"You are my café family.\"",
  qs: [
["Why did Leyla have a party?", ["The café was one month old.", "It was her birthday.", "Kamran passed an exam."], "\"Yesterday the café was one month old, so Leyla had a party.\""],
["How many people came?", ["thirty", "thirteen", "three"], "Thirty (30) people came! Be careful: thirteen = 13."],
["Orkhan ___ the tar.", ["played", "plays", "playing"], "Past simple of regular verbs: verb + -ed. Play → played.", {"t": "type"}],
["What did Anna bring?", ["an apple cake", "flowers", "a guitar"], "Anna brought a German apple cake. Bring → brought (irregular)."],
["Aysel ___ an old song.", ["sang", "singed", "sing"], "Sing is irregular: sing → sang → sung. Yesterday she sang."],
["Riddle: Leyla has a lot of customers, and one café is too small. She needs a ___ café!", ["second", "smaller", "closed"], "A second café! In the last visit, Leyla makes big plans."]]},
{ id: "plans", name: "Big Plans", az: "Böyük planlar", ru: "Большие планы", emoji: "🚀", img: null,
  note: "Today Leyla is sitting with a notebook. She has a big idea. \"I'm going to open a second café,\" she tells Orkhan. \"Where?\" \"In Sheki, my hometown! I'm going to sell Sheki halva there.\" Orkhan is going to help her with the money. Kamran is going to make a website. Next spring, Baku Café is going to have a little sister.",
  qs: [
["What is Leyla going to do?", ["open a second café", "close her café", "move to Germany"], "\"I'm going to open a second café.\" Be going to + verb = a plan."],
["Where is the new café going to be?", ["in Sheki", "in Baku", "in Ganja"], "In Sheki, Leyla's hometown."],
["Kamran is going ___ make a website.", ["to", "—", "for"], "Be going to + verb: Kamran is going to make a website.", {"t": "type"}],
["What is Leyla going to sell there?", ["Sheki halva", "pizza", "German apple cake"], "\"I'm going to sell Sheki halva there.\" Sheki is famous for its halva."],
["When is the second café going to open?", ["next spring", "tomorrow", "last year"], "\"Next spring, Baku Café is going to have a little sister.\""],
["Final: where did Leyla open her first café?", ["near Fountain Square", "in Sheki", "in the Old City"], "Her first café is near Fountain Square in Baku. Congratulations, you finished all seven visits!"]]}
]};

TR.cafe = [
[{"az": "“She is from Sheki, but now she lives in Baku.” Be from = haralı olduğunu bildirir (doğma şəhər və ya ölkə).", "ru": "«She is from Sheki, but now she lives in Baku.» Be from = откуда человек (родной город или страна)."},
 {"az": "Leyla Fəvvarələr meydanının yaxınlığında, Bakının mərkəzində kiçik bir kafe açır.", "ru": "Лейла открывает маленькое кафе возле площади Фонтанов, в центре Баку."},
 {"az": "Nice to meet you = ilk tanışlıqda deyilən nəzakətli ifadə: “Tanış olmağıma şadam.” Cavabı: Nice to meet you too.", "ru": "Nice to meet you = вежливая фраза при первой встрече: «Приятно познакомиться». Ответ: Nice to meet you too."},
 {"az": "He, she, it → is. Kamran is a student.", "ru": "He, she, it → is. Kamran is a student."},
 {"az": "“It has six tables and big windows.” Altı masa — kiçik kafe!", "ru": "«It has six tables and big windows.» Шесть столиков — маленькое кафе!"},
 {"az": "Çay — tea! Növbəti görüşdə müştərilər içki sifariş edir.", "ru": "Чай — tea! В следующем визите посетители заказывают напитки."}],
[{"az": "“Can I have a black tea, please?” — Kamran qara çay istəyir.", "ru": "«Can I have a black tea, please?» — Камран хочет чёрный чай."},
 {"az": "Çay iki manat, qəhvə dörd manatdır. Cəmi: altı manat.", "ru": "Чай стоит два маната, кофе — четыре. Всего: шесть манатов."},
 {"az": "How much is it? = Qiyməti neçədir? Cavab: It's six manats.", "ru": "How much is it? = Сколько это стоит? Ответ: It's six manats."},
 {"az": "Nəzakətli xahiş: Can I have…, please? (Could I… və May I… da düzgündür.)", "ru": "Вежливая просьба: Can I have…, please? (Could I… и May I… тоже верно.)"},
 {"az": "Aysel kartla ödəyir. Deyirik: pay with a card (kartla) / pay in cash (nağd).", "ru": "Айсель платит картой. Говорим: pay with a card (картой) / pay in cash (наличными)."},
 {"az": "Menyu — menu! Növbəti görüşdə Leyla yeməkləri olan yeni menyu yazır.", "ru": "Меню — menu! В следующем визите Лейла пишет новое меню с едой."}],
[{"az": "Anna Almaniyadan gəlmiş turistdir.", "ru": "Анна — туристка из Германии."},
 {"az": "“Sorry, we haven't got any bread today.” — Bu gün çörək yoxdur.", "ru": "«Sorry, we haven't got any bread today.» — Сегодня хлеба нет."},
 {"az": "İnkar və sual cümlələrində any, təsdiq cümlələrində isə some işlədirik.", "ru": "В отрицаниях и вопросах используем any, а в утвердительных предложениях — some."},
 {"az": "I'd like = I would like. “İstəyirəm” demənin nəzakətli formasıdır.", "ru": "I'd like = I would like. Вежливый способ сказать «я хочу»."},
 {"az": "Leyla izah edir: “Göyərti və ya ətlə hazırlanan nazik Azərbaycan təndir yeməyi.”", "ru": "Лейла объясняет: «Это тонкая азербайджанская лепёшка с зеленью или мясом»."},
 {"az": "Turist — tourist! Növbəti görüşdə bir turist Leyladan yol soruşur.", "ru": "Турист — tourist! В следующем визите турист спрашивает у Лейлы дорогу."}],
[{"az": "“Excuse me, how do I get to the Old City?” — İçərişəhərə necə gedə bilərəm?", "ru": "«Excuse me, how do I get to the Old City?» — Как пройти в Старый город?"},
 {"az": "Əvvəlcə: küçənin sonuna qədər düz get (go straight on).", "ru": "Сначала: иди прямо (go straight on) до конца улицы."},
 {"az": "“Then turn left.” — Sonra sola dön. Turn left / turn right.", "ru": "«Then turn left.» — Потом поверни налево. Turn left / turn right."},
 {"az": "Next to = yanında. Qız qalası kiçik parkın yanındadır.", "ru": "Next to = рядом с. Девичья башня рядом с маленьким парком."},
 {"az": "“It's about ten minutes on foot.” On foot = piyada.", "ru": "«It's about ten minutes on foot.» On foot = пешком."},
 {"az": "Gərgin gün — a busy day! Növbəti görüşdə kafe insanlarla doludur.", "ru": "Загруженный день — a busy day! В следующем визите кафе полно людей."}],
[{"az": "“Leyla is making coffee.” Present continuous: is + feil-ing — indi baş verən hərəkət.", "ru": "«Leyla is making coffee.» Present continuous: is + глагол-ing — действие сейчас."},
 {"az": "Qardaşı Orxan ona kömək edir: boşqabları masalara aparır.", "ru": "Её брат Орхан помогает: он носит тарелки к столикам."},
 {"az": "They → are. They are playing nard.", "ru": "They → are. They are playing nard (нарды)."},
 {"az": "Present continuous (is crying) = indi, bu an baş verən hərəkət.", "ru": "Present continuous (is crying) = действие, которое происходит прямо сейчас."},
 {"az": "“Sorry, I can't talk now. We're very busy!” — Kafe çox məşğuldur.", "ru": "«Sorry, I can't talk now. We're very busy!» — В кафе очень много работы."},
 {"az": "Məclis — a party! Növbəti görüşdə kafenin ilk bayramı olur.", "ru": "Праздник — a party! В следующем визите у кафе первый праздник."}],
[{"az": "“Yesterday the café was one month old” — kafenin bir ayı tamam oldu, ona görə Leyla məclis qurdu.", "ru": "«Yesterday the café was one month old» — кафе исполнился месяц, поэтому Лейла устроила праздник."},
 {"az": "Otuz (30) nəfər gəldi! Diqqət: thirteen = 13.", "ru": "Пришли тридцать (30) человек! Внимание: thirteen = 13."},
 {"az": "Düzgün feillərin keçmiş zamanı: feil + -ed. Play → played.", "ru": "Прошедшее время правильных глаголов: глагол + -ed. Play → played."},
 {"az": "Anna alman alma tortu gətirdi. Bring → brought (qaydasız feil).", "ru": "Анна принесла немецкий яблочный пирог. Bring → brought (неправильный глагол)."},
 {"az": "Sing qaydasız feildir: sing → sang → sung. Dünən o, mahnı oxudu: she sang.", "ru": "Sing — неправильный глагол: sing → sang → sung. Вчера она спела: she sang."},
 {"az": "İkinci kafe — a second café! Son görüşdə Leyla böyük planlar qurur.", "ru": "Второе кафе — a second café! В последнем визите Лейла строит большие планы."}],
[{"az": "“I'm going to open a second café.” Be going to + feil = plan, niyyət.", "ru": "«I'm going to open a second café.» Be going to + глагол = план, намерение."},
 {"az": "Şəkidə, Leylanın doğma şəhərində.", "ru": "В Шеки, родном городе Лейлы."},
 {"az": "Be going to + feil: Kamran is going to make a website.", "ru": "Be going to + глагол: Kamran is going to make a website."},
 {"az": "“I'm going to sell Sheki halva there.” Şəki halvası ilə məşhurdur.", "ru": "«I'm going to sell Sheki halva there.» Шеки славится своей халвой."},
 {"az": "“Next spring…” — gələn yaz Baku Café-nin “kiçik bacısı” olacaq.", "ru": "«Next spring…» — следующей весной у Baku Café появится «младшая сестра»."},
 {"az": "İlk kafesi Bakıda, Fəvvarələr meydanının yaxınlığındadır. Təbriklər, yeddi görüşün hamısını bitirdin!", "ru": "Её первое кафе — возле площади Фонтанов в Баку. Поздравляем, ты прошёл все семь визитов!"}]
];

TXT.cafe = [
{"az": "Leylanın iyirmi səkkiz yaşı var. O, Şəkidəndir, amma indi Bakıda yaşayır. Bu gün o, Fəvvarələr meydanının yaxınlığında kiçik bir kafe açır. Kafedə altı masa və böyük pəncərələr var. İlk müştərisi gənc bir oğlandır. “Salam! Mən Leylayam. Sənin adın nədir?” “Salam, mən Kamranam. Tələbəyəm. Tanış olmağıma şadam!” Leyla gülümsəyir. “Mən də şadam. Baku Café-yə xoş gəlmisən!”", "ru": "Лейле двадцать восемь лет. Она из Шеки, но сейчас живёт в Баку. Сегодня она открывает маленькое кафе возле площади Фонтанов. В нём шесть столиков и большие окна. Её первый посетитель — молодой человек. «Здравствуйте! Я Лейла. Как вас зовут?» — «Привет, я Камран. Я студент. Приятно познакомиться!» Лейла улыбается: «Мне тоже. Добро пожаловать в Baku Café!»"},
{"az": "Kamran ertəsi gün dostu Ayselle yenidən gəlir. “Bir qara çay ala bilərəm?” deyə Kamran soruşur. “Mənə də südlü qəhvə,” deyir Aysel. “Neçəyədir?” Leyla divardakı menyuya baxır. “Çay iki manat, qəhvə dörd manatdır. Cəmi altı manat.” Aysel kartla ödəyir. “Təşəkkür edirəm! İçkiləriniz gəlir.”", "ru": "На следующий день Камран приходит снова, со своей подругой Айсель. «Можно мне чёрный чай?» — спрашивает Камран. «А мне кофе с молоком», — говорит Айсель. «Сколько с нас?» Лейла смотрит на меню на стене. «Чай — два маната, кофе — четыре. Итого шесть манатов». Айсель платит картой. «Спасибо! Напитки уже готовятся»."},
{"az": "Leyla yeni menyu yazır. İndi yemək də var: şorba, salatlar, tortlar və qutab. Almaniyadan gəlmiş turist Anna masaya oturur. “Bir salat və bir az çörək istərdim.” “Bağışlayın, bu gün çörəyimiz yoxdur. Qutab istərdiniz?” “Qutab nədir?” “Göyərti və ya ətlə hazırlanan nazik Azərbaycan yeməyidir.” “Əla! İki dənə istərdim.”", "ru": "Лейла пишет новое меню. Теперь есть и еда: суп, салаты, торты и кутабы. За столик садится туристка из Германии Анна. «Я бы хотела салат и немного хлеба». — «Извините, сегодня у нас нет хлеба. Может быть, кутабы?» — «А что такое кутаб?» — «Это тонкая азербайджанская лепёшка с зеленью или мясом». — «Отлично! Мне два, пожалуйста»."},
{"az": "Böyük xəritəsi olan bir turist kafeyə girir. “Bağışlayın, İçərişəhərə necə gedə bilərəm?” deyə soruşur. Leyla pəncərədən göstərir. “Çox asandır. Küçənin sonuna qədər düz gedin. Sonra sola dönün. Qız qalası sağ tərəfdə, kiçik parkın yanındadır. Piyada təxminən on dəqiqəlik yoldur.” “Çox sağ olun!” “Dəyməz. Bakıdan zövq alın!”", "ru": "В кафе заходит турист с большой картой. «Извините, как пройти в Старый город?» — спрашивает он. Лейла показывает в окно. «Это легко. Идите прямо до конца улицы. Потом поверните налево. Девичья башня будет справа, рядом с маленьким парком. Пешком минут десять». — «Большое спасибо!» — «Пожалуйста. Наслаждайтесь Баку!»"},
{"az": "Şənbə günortadır və kafe doludur. Leyla qəhvə hazırlayır. Bu gün qardaşı Orxan ona kömək edir: boşqabları masalara aparır. Kamran və Aysel pəncərənin yanında oturublar. Onlar nərd oynayırlar. Bir körpə ağlayır, yaşlı bir kişi isə qəzet oxuyur. Sonra telefon zəng çalır. “Bağışlayın, indi danışa bilmirəm. Çox məşğuluq!” deyir Leyla.", "ru": "Суббота, день, и кафе полное. Лейла варит кофе. Сегодня ей помогает брат Орхан: он носит тарелки к столикам. Камран и Айсель сидят у окна. Они играют в нарды. Плачет малыш, а пожилой мужчина читает газету. Тут звонит телефон. «Извините, сейчас не могу говорить. У нас очень много работы!» — говорит Лейла."},
{"az": "Dünən kafenin bir ayı tamam oldu, ona görə Leyla məclis qurdu. Otuz nəfər gəldi! Orxan tar çaldı, Aysel köhnə bir mahnı oxudu. Anna alman alma tortu gətirdi. Hamı rəqs etdi və güldü. Məclis saat on birdə bitdi. Leyla çox yorğun idi, amma xoşbəxt idi. “Hamınıza təşəkkür edirəm,” dedi. “Siz mənim kafe ailəmsiniz.”", "ru": "Вчера кафе исполнился месяц, поэтому Лейла устроила праздник. Пришли тридцать человек! Орхан играл на таре, а Айсель спела старую песню. Анна принесла немецкий яблочный пирог. Все танцевали и смеялись. Праздник закончился в одиннадцать часов. Лейла очень устала, но была счастлива. «Спасибо вам всем, — сказала она. — Вы моя кафе-семья»."},
{"az": "Bu gün Leyla əlində dəftər oturub. Onun böyük bir ideyası var. “İkinci kafe açacağam,” deyir Orxana. “Harada?” “Şəkidə, doğma şəhərimdə! Orada Şəki halvası satacağam.” Orxan pul məsələsində ona kömək edəcək. Kamran isə veb-sayt düzəldəcək. Gələn yaz Baku Café-nin kiçik bir bacısı olacaq.", "ru": "Сегодня Лейла сидит с блокнотом. У неё есть большая идея. «Я открою второе кафе», — говорит она Орхану. «Где?» — «В Шеки, в моём родном городе! Я буду продавать там шекинскую халву». Орхан поможет ей с деньгами. Камран сделает сайт. Следующей весной у Baku Café появится младшая сестра."}
];

/* ===== Advanced error units (C1–C2) ===== */
const ERR_ADV = [
{ id: "collo", name: "Advanced collocations", full: "Advanced collocations", az: "Mürəkkəb söz birləşmələri", ru: "Сложные коллокации", icon: "collo", level: "C1",
  info: "Azerbaijani and Russian often use one general verb or adjective (etmək / делать, vermək / давать, güclü / сильный) where English needs one fixed partner word. Even advanced learners say \"give attention\", \"strong rain\" or \"make a mistake heavy\" — collocations must be learned as whole chunks.",
  qs: [
["Her research ___ light on the causes of the crisis.", ["sheds", "makes", "gives"], "Shed (throw) light on something = make it clearer. A fixed collocation."],
["We need to ___ a balance between work and family life.", ["strike", "hit", "do"], "Strike a balance = find the right middle point. (\"Find a balance\" is also fine; \"hit/do a balance\" is not.)"],
["After the flood, the town was in ___ need of help.", ["dire", "heavy", "strong"], "Dire need = very serious, urgent need. Heavy and strong don't combine with need."],
["Ignoring the warnings was a ___ mistake.", ["grave", "heavy", "hard"], "Grave (or serious) mistake. Russian «тяжёлая ошибка» tempts learners to say heavy, but English doesn't."],
["Which collocation is natural?", ["a heavy smoker", "a strong smoker", "a thick smoker"], "With smoking, drinking and traffic English uses heavy: a heavy smoker, heavy traffic."],
["Examiners always ___ attention to collocations.", ["pay", "give", "do"], "Pay attention (to). Not \"give attention\" — a classic transfer from vermək / уделять.", {"t": "type", "alt": []}]]},
{ id: "invert", name: "Inversion & emphasis", full: "Inversion & emphasis", az: "İnversiya və vurğu", ru: "Инверсия и эмфаза", icon: "Never…", level: "C1",
  info: "In Russian and Azerbaijani you can move words around freely for emphasis. English has fixed patterns instead: after a negative or limiting adverb at the start (Never, Rarely, Not only, Only then) the auxiliary comes before the subject, and cleft sentences (What I need is…, It was… that…) add focus.",
  qs: [
["Never ___ such a beautiful sunset.", ["have I seen", "I have seen", "I saw"], "Negative adverb first → inversion: Never have I seen…"],
["Not only ___ late, but he also forgot the tickets.", ["was he", "he was", "he were"], "Not only at the start → auxiliary before subject: Not only was he late…"],
["Hardly had we sat down ___ the phone rang.", ["when", "than", "that"], "Hardly / Scarcely … when. (No sooner … than.)"],
["___ I need right now is a long holiday.", ["What", "That", "Which"], "Cleft sentence: What I need is… = The thing that I need is…"],
["Only after the meeting ___ the truth.", ["did I realise", "I realised", "I did realise"], "Only after / Only then / Only when at the start → inversion: did I realise."],
["No sooner had she left ___ it started to rain.", ["than", "when", "then"], "No sooner … than (comparative structure). Hardly … when.", {"t": "type", "alt": []}]]},
{ id: "nuance", name: "Nuance: near-synonyms", full: "Nuance: near-synonyms", az: "Nüans: yaxın mənalı sözlər", ru: "Нюансы: близкие слова", icon: "≈", level: "C2",
  info: "Pairs like economic/economical, imply/infer or historic/historical look almost identical and often share one translation (iqtisadi / экономический, tarixi / исторический), but English separates them clearly. At C2 level these slips are the most noticeable errors.",
  qs: [
["This small car is very ___: it uses little fuel.", ["economical", "economic", "economy"], "Economical = saving money or resources. Economic = connected with the economy (economic growth)."],
["From his tone, I ___ that he was unhappy.", ["inferred", "implied", "inflicted"], "The speaker implies (suggests); the listener infers (concludes)."],
["A judge must be ___: she cannot favour either side.", ["disinterested", "uninterested", "careless"], "Disinterested = impartial, with nothing to gain. Uninterested = bored, not interested."],
["The new law will ___ everyone who owns a car.", ["affect", "effect", "infect"], "Affect is the verb (to influence). Effect is usually the noun (the result)."],
["The ___ interruptions from his phone made the meeting impossible.", ["continual", "continuous", "contiguous"], "Continual = repeated again and again, with breaks. Continuous = without any break (a continuous line)."],
["Signing the peace treaty was a ___ moment for the country.", ["historic", "historical", "history"], "Historic = important, famous in history. Historical = connected with the past (historical documents).", {"t": "type", "alt": []}]]},
{ id: "idiom", name: "Idioms in context", full: "Idioms in context", az: "Kontekstdə idiomlar", ru: "Идиомы в контексте", icon: "idiom", level: "C2",
  info: "Idioms rarely translate word for word. Learners often change one word (\"the last drop\" from Russian «последняя капля» instead of the last straw) or use an idiom in the wrong situation. At C2 you need both the exact form and the right context.",
  qs: [
["After three cancellations, this delay was the last ___.", ["straw", "drop", "stone"], "The last straw = the final problem that makes you lose patience. Not \"the last drop\"."],
["Don't worry about the exam — you'll pass with flying ___.", ["colours", "flags", "birds"], "Pass with flying colours = pass very successfully."],
["Who ___ the beans about the surprise party?", ["spilled", "dropped", "threw"], "Spill the beans = reveal a secret by accident."],
["Which situation fits \"to cut corners\"?", ["The builders saved money by skipping safety checks.", "The chef cut the bread into squares.", "The driver took the shortest road."], "Cut corners = do something cheaply or quickly by ignoring rules or quality — always negative."],
["We're all in the same ___, so let's help each other.", ["boat", "ship", "house"], "In the same boat = in the same difficult situation."],
["Learning Chinese in a year? That's easier said than ___.", ["done", "made", "told"], "Easier said than done = it sounds easy but is hard in reality.", {"t": "type", "alt": []}]]}
];

const ERR_ADV_TR = [
{ info: {
  az: "Azərbaycan və rus dillərində çox vaxt bir ümumi feil və ya sifət (etmək / делать, vermək / давать, güclü / сильный) işlənir, ingilis dilində isə ona sabit bir tərəf-söz lazımdır. Hətta yüksək səviyyəli öyrənənlər də “give attention”, “strong rain” deyirlər — kollokasiyaları bütöv blok kimi öyrənmək lazımdır.",
  ru: "В азербайджанском и русском часто используется один общий глагол или прилагательное (etmək / делать, vermək / давать, güclü / сильный), а в английском нужно одно фиксированное слово-партнёр. Даже продвинутые ученики говорят «give attention», «strong rain» — коллокации нужно учить целыми блоками." },
  qs: [
{ az: "Shed (throw) light on something = bir şeyə aydınlıq gətirmək. Sabit birləşmədir.", ru: "Shed (throw) light on something = пролить свет на что-то, прояснить. Устойчивое сочетание." },
{ az: "Strike a balance = tarazlıq tapmaq. (“Find a balance” da olar; “hit/do a balance” olmaz.)", ru: "Strike a balance = найти баланс. («Find a balance» тоже можно; «hit/do a balance» — нет.)" },
{ az: "Dire need = çox ciddi, təcili ehtiyac. Heavy və strong need ilə birləşmir.", ru: "Dire need = острая, крайняя нужда. Heavy и strong с need не сочетаются." },
{ az: "Grave (və ya serious) mistake = ciddi səhv. Rus dilindəki «тяжёлая ошибка» heavy deməyə sövq edir, amma ingiliscə belə demirlər.", ru: "Grave (или serious) mistake = серьёзная ошибка. Русское «тяжёлая ошибка» подталкивает к heavy, но по-английски так не говорят." },
{ az: "Siqaret, içki və nəqliyyat sıxlığı ilə heavy işlənir: a heavy smoker, heavy traffic.", ru: "С курением, выпивкой и пробками используется heavy: a heavy smoker, heavy traffic." },
{ az: "Pay attention (to) = diqqət yetirmək. “Give attention” yox — bu, “diqqət vermək / уделять внимание” tərcüməsindən gələn tipik səhvdir.", ru: "Pay attention (to) = обращать внимание. Не «give attention» — типичный перенос с «уделять внимание / diqqət vermək»." }]},
{ info: {
  az: "Rus və Azərbaycan dillərində vurğu üçün sözlərin yerini sərbəst dəyişmək olar. İngilis dilində isə sabit qəliblər var: cümlənin əvvəlində inkar və ya məhdudlaşdırıcı zərf (Never, Rarely, Not only, Only then) gələndə köməkçi feil mübtədadan əvvələ keçir, “cleft” cümlələr (What I need is…, It was… that…) isə vurğu yaradır.",
  ru: "В русском и азербайджанском для выделения можно свободно переставлять слова. В английском вместо этого есть фиксированные модели: после отрицательного или ограничительного наречия в начале (Never, Rarely, Not only, Only then) вспомогательный глагол ставится перед подлежащим, а расщеплённые предложения (What I need is…, It was… that…) создают акцент." },
  qs: [
{ az: "Əvvəldə inkar zərfi → inversiya: Never have I seen… (Heç vaxt belə şey görməmişdim.)", ru: "Отрицательное наречие в начале → инверсия: Never have I seen… (Никогда я не видел…)" },
{ az: "Əvvəldə Not only → köməkçi feil mübtədadan əvvəl: Not only was he late…", ru: "Not only в начале → вспомогательный глагол перед подлежащим: Not only was he late…" },
{ az: "Hardly / Scarcely … when (… təzəcə …, elə bu vaxt). No sooner … than.", ru: "Hardly / Scarcely … when (едва …, как). No sooner … than." },
{ az: "Cleft cümlə: What I need is… = Mənə lazım olan şey … -dır.", ru: "Расщеплённое предложение: What I need is… = То, что мне нужно, — это…" },
{ az: "Əvvəldə Only after / Only then / Only when → inversiya: did I realise.", ru: "Only after / Only then / Only when в начале → инверсия: did I realise." },
{ az: "No sooner … than (müqayisə quruluşu). Hardly … when.", ru: "No sooner … than (сравнительная конструкция). Hardly … when." }]},
{ info: {
  az: "Economic/economical, imply/infer və ya historic/historical kimi cütlər demək olar eyni görünür və çox vaxt bir tərcüməsi olur (iqtisadi, tarixi), amma ingilis dilində mənaları aydın fərqlənir. C2 səviyyəsində ən çox nəzərə çarpan səhvlər məhz bunlardır.",
  ru: "Пары вроде economic/economical, imply/infer или historic/historical выглядят почти одинаково и часто имеют один перевод (экономический, исторический), но в английском их значения чётко различаются. На уровне C2 именно такие ошибки заметнее всего." },
  qs: [
{ az: "Economical = qənaətcil (pul və ya resurs qənaət edən). Economic = iqtisadiyyatla bağlı (economic growth — iqtisadi artım).", ru: "Economical = экономичный (сберегающий деньги или ресурсы). Economic = экономический, связанный с экономикой (economic growth)." },
{ az: "Danışan imply edir (eyham vurur), dinləyən infer edir (nəticə çıxarır).", ru: "Говорящий implies (намекает), слушающий infers (делает вывод)." },
{ az: "Disinterested = qərəzsiz, şəxsi marağı olmayan. Uninterested = maraqlanmayan, darıxan.", ru: "Disinterested = беспристрастный, незаинтересованный лично. Uninterested = равнодушный, которому неинтересно." },
{ az: "Affect feildir (təsir etmək). Effect adətən isimdir (nəticə, təsir).", ru: "Affect — глагол (влиять). Effect — обычно существительное (результат, эффект)." },
{ az: "Continual = fasilələrlə təkrarlanan. Continuous = heç fasiləsiz (a continuous line — kəsilməz xətt).", ru: "Continual = постоянно повторяющийся, с перерывами. Continuous = непрерывный (a continuous line)." },
{ az: "Historic = tarixi əhəmiyyətli, tarixə düşən. Historical = keçmişlə bağlı (historical documents — tarixi sənədlər).", ru: "Historic = исторически важный, знаменательный. Historical = относящийся к прошлому (historical documents — исторические документы)." }]},
{ info: {
  az: "İdiomlar nadir hallarda hərfi tərcümə olunur. Öyrənənlər çox vaxt bir sözü dəyişirlər (rus dilindəki «последняя капля»dan “the last drop”, halbuki düzgünü the last straw) və ya idiomu yersiz vəziyyətdə işlədirlər. C2 səviyyəsində həm dəqiq forma, həm də düzgün kontekst lazımdır.",
  ru: "Идиомы редко переводятся дословно. Ученики часто меняют одно слово («the last drop» из русского «последняя капля» вместо the last straw) или используют идиому не в той ситуации. На уровне C2 нужны и точная форма, и правильный контекст." },
  qs: [
{ az: "The last straw = səbri tükəndirən son problem (“kasanı daşıran son damla”). “The last drop” deyil.", ru: "The last straw = последняя капля, после которой терпение заканчивается. Не «the last drop»." },
{ az: "Pass with flying colours = imtahandan parlaq nəticə ilə keçmək.", ru: "Pass with flying colours = сдать блестяще, с отличным результатом." },
{ az: "Spill the beans = sirri təsadüfən açmaq, ağzından qaçırmaq.", ru: "Spill the beans = случайно выдать секрет, проболтаться." },
{ az: "Cut corners = qaydalara və keyfiyyətə məhəl qoymadan işi ucuz və ya tez görmək — həmişə mənfi mənadadır.", ru: "Cut corners = делать что-то дёшево или быстро, пренебрегая правилами и качеством, — всегда негативно." },
{ az: "In the same boat = eyni çətin vəziyyətdə olmaq.", ru: "In the same boat = в одной лодке, в одинаково трудном положении." },
{ az: "Easier said than done = demək asandır, etmək çətin.", ru: "Easier said than done = легче сказать, чем сделать." }]}
];

/* ===== Exam: A1–A2 ===== */
const EXAM_BASIC = {
  listen: "Hi, I'm Nigar. Last weekend my family stayed in Baku. On Saturday morning we went to the Boulevard by the sea. My dad rented bicycles, and we rode for an hour. It was sunny but windy. For lunch we ate dolma at my grandmother's flat. She lives in the Old City, near the Maiden Tower. In the afternoon my brother Rashad and I played football in the park, and my mum read a book. On Sunday it was cold, so we went to the Carpet Museum. I loved the red carpets from Guba. In the evening we watched a film at home and ate pizza. It was a great weekend!",
  lq: [
["Where did the family go on Saturday morning?", ["to the Boulevard by the sea", "to the Carpet Museum", "to the Old City", "to Guba"]],
["What did they ride?", ["bicycles", "horses", "a bus", "a boat"]],
["What was the weather like on Saturday?", ["sunny but windy", "cold and rainy", "hot and quiet", "snowy"]],
["Where does Nigar's grandmother live?", ["in the Old City", "by the sea", "in Guba", "next to the museum"]],
["Why did they go to the museum on Sunday?", ["It was cold.", "It was free.", "Grandmother works there.", "Rashad was ill."]],
["What did they eat on Sunday evening?", ["pizza", "dolma", "soup", "cake"]]
  ],
  gq: [
["My sister ___ a teacher.", ["is", "are", "am", "be"]],
["There ___ two cats in the garden.", ["are", "is", "am", "be"]],
["I ___ coffee every morning.", ["drink", "drinks", "drinking", "am drink"]],
["She ___ to work by bus.", ["goes", "go", "going", "is go"]],
["___ you like tea?", ["Do", "Does", "Are", "Is"]],
["Be quiet! We ___ a film now.", ["are watching", "watch", "watches", "is watching"]],
["Yesterday I ___ to the cinema.", ["went", "go", "goes", "have go"]],
["He ___ at home last night.", ["was", "were", "is", "be"]],
["My birthday is ___ June.", ["in", "on", "at", "to"]],
["Would you like ___ apple?", ["an", "a", "the a", "any"]],
["Ali is ___ than his brother.", ["taller", "more tall", "tallest", "tall"]],
["I can ___ English and Russian.", ["speak", "speaks", "to speak", "speaking"]],
["How ___ apples do you want?", ["many", "much", "any", "some"]],
["Tomorrow we ___ visit our grandparents.", ["are going to", "going to", "go to", "is going"]],
["Choose the opposite of \"cheap\".", ["expensive", "small", "old", "cold"]],
["The day after Friday is ___.", ["Saturday", "Thursday", "Sunday", "Monday"]]
  ],
  read: "Sabina lives in Baku with her husband and their two children. She works in a bank in the city centre. Every day she gets up at seven o'clock and makes breakfast for the family. Her husband, Elchin, is a doctor. He works at a hospital near their home, so he walks to work. Their daughter Lala is eight and their son Tural is five. Lala likes drawing, and Tural likes cars. On Sundays the family goes to the park near the sea. The children love ice cream, and Sabina loves the wind from the sea. Next summer they are going to visit Gabala, because the children want to see the mountains.",
  rq: [
["Where does Sabina work?", ["in a bank", "in a hospital", "in a school", "in a park"]],
["What time does she get up?", ["at seven o'clock", "at six o'clock", "at eight o'clock", "at nine o'clock"]],
["How does Elchin go to work?", ["He walks.", "by bus", "by car", "by metro"]],
["How old is Tural?", ["five", "eight", "seven", "two"]],
["Where does the family go on Sundays?", ["to the park near the sea", "to Gabala", "to the bank", "to the mountains"]],
["Write ONE word from the text: Elchin is a ___.", ["doctor"], "open"],
["Write ONE word from the text: Lala likes ___.", ["drawing"], "open"],
["Write ONE word from the text: next summer they are going to visit ___.", ["Gabala"], "open"]
  ]
};

/* ===== Exam: C1–C2 ===== */
const EXAM_ADV = {
  listen: "Good afternoon, everyone. Today I'd like to address a question that every growing city eventually has to face: what exactly are we preserving when we protect urban heritage? For much of the twentieth century, conservation meant isolating individual monuments — a palace here, a tower there — while the streets around them were quietly demolished. Baku's Icherisheher, inscribed on the UNESCO World Heritage List in 2000, illustrates why that approach is now considered inadequate. The value of the Old City lies not only in the Maiden Tower or the Palace of the Shirvanshahs, but in the fabric that connects them: the narrow lanes, the courtyards, and, crucially, the everyday lives of the people who live there. Paradoxically, the greatest threat today is not neglect but success. Rising property prices and mass tourism can gradually push out the very communities that give a district its character — a process often described as 'museumification'. So, rather than freezing a place in time, contemporary approaches emphasise managed change: allowing sensitive new uses, involving residents in decision-making, and recognising intangible heritage, such as crafts and local traditions. In our next session, we'll turn to the oil-boom architecture of the late nineteenth century and ask whether it deserves the same level of protection.",
  lq: [
["What is the central question of the lecture?", ["what we are actually preserving when we protect urban heritage", "how cities can attract more tourists", "who built the Maiden Tower", "why old buildings should be replaced"]],
["How did conservation typically work in the twentieth century?", ["Individual monuments were protected while their surroundings were demolished.", "Whole districts were protected together with their residents.", "Intangible heritage was the main priority.", "Tourism was banned in historic areas."]],
["When was Icherisheher inscribed on the UNESCO list?", ["in 2000", "in 1990", "in 2010", "in 1920"]],
["According to the lecturer, what is the greatest threat today?", ["success: rising property prices and mass tourism", "neglect and physical decay", "earthquakes and floods", "a lack of government funding"]],
["What does \"museumification\" refer to?", ["communities being pushed out until a district becomes a lifeless showpiece", "turning historic houses into new museums", "moving monuments into museum collections", "a sharp fall in visitor numbers"]],
["What will the next session focus on?", ["oil-boom architecture of the late nineteenth century", "Soviet-era housing estates", "the history of the Maiden Tower", "traditional crafts of the Old City"]]
  ],
  gq: [
["Had I known about the traffic, I ___ earlier.", ["would have left", "would leave", "had left", "will have left"]],
["Little ___ that the decision would change her life.", ["did she know", "she knew", "she did know", "knew she"]],
["It's high time the government ___ decisive action.", ["took", "takes", "has taken", "take"]],
["The suspect is believed ___ the country last week.", ["to have left", "to leave", "leaving", "having left"]],
["Not until the results were published ___ the scale of the problem.", ["did we grasp", "we grasped", "we did grasp", "grasped we"]],
["The committee insisted that he ___ present at every meeting.", ["be", "is", "was being", "will be"]],
["I'd rather you ___ mention this to anyone just yet.", ["didn't", "don't", "won't", "not"]],
["The report, ___ conclusions proved controversial, was withdrawn.", ["whose", "which", "whom", "that"]],
["___ the outcome, we will have learned a great deal.", ["Whatever", "However", "Whenever", "Wherever"]],
["She is ___ the most gifted pianist of her generation.", ["arguably", "arguing", "arguable", "argued"]],
["Choose the word closest in meaning to \"ubiquitous\".", ["found everywhere", "extremely rare", "very ancient", "almost invisible"]],
["Choose the word closest in meaning to \"exacerbate\".", ["make worse", "improve", "explain", "ignore"]],
["Talks reached an ___: neither side was willing to compromise.", ["impasse", "outset", "upshot", "overture"]],
["His argument doesn't hold ___ under close scrutiny.", ["water", "air", "ground", "fire"]],
["The new policy has ___ widespread criticism.", ["drawn", "made", "done", "given"]],
["The project was ___ by delays from the very start.", ["plagued", "infected", "bothered", "pestered"]]
  ],
  read: "The Caspian Sea, the largest enclosed body of water on Earth, has never been a static feature of the landscape. Because it has no outlet to the ocean, its level is governed by a delicate balance between inflow — overwhelmingly from the Volga, which supplies roughly four-fifths of its river water — and evaporation from its vast surface. Throughout the twentieth century the sea behaved erratically: it fell by around three metres between 1929 and 1977, prompting Soviet planners to consider diverting northern rivers to replenish it, and then, to almost everyone's surprise, rose by more than two metres until the mid-1990s, flooding coastal settlements and infrastructure. Since then, however, the trend has reversed once more, and the decline appears to be accelerating. Researchers attribute this primarily to rising temperatures, which intensify evaporation, compounded by reduced precipitation in the Volga basin and the extraction of water for agriculture. Projections vary considerably, yet some models suggest that by the end of this century the level could fall by nine metres or more under high-emission scenarios. The consequences would be far-reaching. The shallow northern Caspian, the main spawning ground for sturgeon, could largely dry out; ports would require costly dredging; and the Caspian seal, which breeds on the winter ice, would lose much of its habitat. For Azerbaijan, whose capital and economy are inextricably bound to the sea, adaptation is no longer a theoretical question but an urgent matter of policy.",
  rq: [
["Why is the Caspian's level so sensitive to change?", ["It has no outlet, so its level depends on the balance of inflow and evaporation.", "It is connected to the Black Sea by the Volga.", "It is fed only by rainfall.", "Most of its water is pumped out for drinking."]],
["What proportion of the Caspian's river water comes from the Volga?", ["about four-fifths", "about half", "about a quarter", "almost none"]],
["What happened between 1977 and the mid-1990s?", ["The level rose unexpectedly, flooding the coast.", "The level fell by about three metres.", "Northern rivers were diverted into the sea.", "The sturgeon population recovered."]],
["What do researchers see as the main cause of the current decline?", ["rising temperatures intensifying evaporation", "the diversion of northern rivers", "the dredging of ports", "increased rainfall in the Volga basin"]],
["Which area is described as most at risk of drying out?", ["the shallow northern Caspian", "the deep southern basin", "the Absheron coastline", "the Volga's upper course"]],
["Write ONE word from the text: the Caspian seal breeds on the winter ___.", ["ice"], "open"],
["Write ONE word from the text: ports would require costly ___.", ["dredging"], "open"],
["Write ONE word from the text: Azerbaijan's capital and economy are inextricably ___ to the sea.", ["bound"], "open"]
  ]
};
