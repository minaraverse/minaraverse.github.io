/* ---------- Club of the week: 8 rotating episodes ---------- */
const WEEKLY = [
{ id: "w1", format: "Detective case", emoji: "🔎", title: "The Missing Birthday Cake", az: "Yoxa çıxan ad günü tortu", ru: "Пропавший торт ко дню рождения", level: "A2–B1",
  text: "On Saturday morning, Aysel baked a chocolate cake for her grandmother's birthday. She put it on the kitchen table and went to the shop for candles. When she came back twenty minutes later, the cake was gone! There were three people in the house: her little brother Murad, her cousin Lala and Uncle Farid. Murad said he was playing football in the garden. Lala said she was reading in her room. Uncle Farid said he was sleeping on the sofa. But Aysel noticed something: Murad's shoes were clean and dry, although it was raining outside. And there was chocolate on his fingers. \"Murad,\" she said, \"where is the cake?\"",
  qs: [
["What did Aysel bake?", ["a chocolate cake", "an apple pie", "a lemon cake"], "Aysel baked a chocolate cake for her grandmother's birthday."],
["Why did Aysel leave the house?", ["to buy candles", "to buy milk", "to visit her grandmother"], "She went to the shop for candles."],
["Murad said he ___ football in the garden.", ["was playing", "is played", "has playing"], "Past continuous (was + -ing) for an action in progress in the past."],
["Why was Murad's story strange?", ["His shoes were dry, but it was raining.", "He was sleeping on the sofa.", "He was reading a book."], "It was raining, so his shoes should be wet. They were dry — he wasn't in the garden!"],
["When she came back, the cake was ___!", ["gone", "go", "going"], "The cake was gone = it disappeared. (\"missing\" is also correct.)", { t: "type", alt: ["missing"] }],
["Who probably ate the cake?", ["Murad", "Lala", "Uncle Farid"], "Clean, dry shoes and chocolate on his fingers: Murad ate the cake!"]],
  speak: "Record a 30-second voice message: you are the detective. Explain who ate the cake and how you know.",
  speakAz: "30 saniyəlik səsli mesaj yaz: sən detektivsən. Tortu kimin yediyini və bunu necə bildiyini izah et.",
  speakRu: "Запиши голосовое сообщение на 30 секунд: ты детектив. Объясни, кто съел торт и как ты это понял." },

{ id: "w2", format: "Movie scene", emoji: "🎬", title: "Midnight Station", az: "Gecəyarısı stansiyası", ru: "Полночная станция", level: "A2–B1",
  text: "In the film Midnight Station, a young violinist called Nigar misses the last train home after a concert. The station is empty, and the only other person there is an old man who sells tea. At first Nigar is nervous, but the man tells her a story: forty years ago, he missed the same train and met his future wife on this platform. Nigar laughs and plays a short tune for him on her violin. Suddenly, the lights come on and a special night train arrives. The old man smiles and says, \"Some trains only come for people who wait.\" The scene ends as Nigar steps on board.",
  qs: [
["What is Nigar's job?", ["She is a violinist.", "She is a train driver.", "She sells tea."], "Nigar plays the violin at a concert."],
["Who is at the station with her?", ["an old man who sells tea", "her mother", "a group of musicians"], "The only other person is an old man who sells tea."],
["Nigar ___ the last train home after a concert.", ["misses", "loses", "passes"], "Miss a train = not catch it. Don't say \"lose a train\".", { t: "type", alt: ["missed"] }],
["How does Nigar feel at first?", ["nervous", "angry", "bored"], "At first Nigar is nervous because the station is empty."],
["Forty years ago, the old man ___ his future wife on the platform.", ["met", "meets", "has met"], "Forty years ago = finished past time → past simple: met."],
["What does the old man mean: \"Some trains only come for people who wait\"?", ["Good things can come if you are patient.", "Trains are always late.", "You should never travel at night."], "Being patient can bring good things — like the special night train."]],
  speak: "Record a 30-second voice message: what happens next in the film? Describe the next scene.",
  speakAz: "30 saniyəlik səsli mesaj yaz: filmdə sonra nə baş verir? Növbəti səhnəni təsvir et.",
  speakRu: "Запиши голосовое сообщение на 30 секунд: что происходит в фильме дальше? Опиши следующую сцену." },

{ id: "w3", format: "Debate", emoji: "⚖️", title: "Phones at school: yes or no?", az: "Məktəbdə telefon: hə, yoxsa yox?", ru: "Телефоны в школе: да или нет?", level: "A2–B1",
  text: "Should students be allowed to use phones at school? Our class held a debate. Team A said yes. They argued that phones are useful for learning: students can check new words in a dictionary, take photos of the board and contact their parents in an emergency. Team B said no. They believed that phones are a big distraction. Students play games, check social media during lessons and talk less to each other at break time. In the end, the teacher suggested a compromise: phones stay in bags, and students may use them only when the teacher allows it. Most students agreed that this was fair.",
  qs: [
["What did Team A think?", ["Phones should be allowed at school.", "Phones should be banned.", "Phones are too expensive."], "Team A said yes: phones are useful for learning."],
["Which argument did Team B use?", ["Phones distract students.", "Phones help students learn new words.", "Phones are useful in an emergency."], "Team B believed phones are a big distraction."],
["Phones are a big ___ in lessons.", ["distraction", "distract", "distracted"], "After \"a big\" we need a noun: distraction."],
["What was the teacher's compromise?", ["Phones stay in bags and are used only with permission.", "Students can use phones all day.", "Phones are banned forever."], "Phones stay in bags; students use them only when the teacher allows it."],
["In my ___, phones should stay in bags.", ["opinion", "think", "mind"], "In my opinion = I think. (\"In my view\" is also correct.)", { t: "type", alt: ["view"] }],
["Which phrase disagrees politely?", ["I see your point, but…", "You are wrong.", "No, stop talking."], "\"I see your point, but…\" disagrees politely. The others sound rude."]],
  speak: "Record a 30-second voice message: are you for or against phones at school? Give two reasons.",
  speakAz: "30 saniyəlik səsli mesaj yaz: məktəbdə telefonun lehinəsən, yoxsa əleyhinə? İki səbəb göstər.",
  speakRu: "Запиши голосовое сообщение на 30 секунд: ты за или против телефонов в школе? Приведи две причины." },

{ id: "w4", format: "Would you rather", emoji: "🤔", title: "Would you rather…?", az: "Hansını seçərdin?", ru: "Что бы ты выбрал?", level: "A2–B1",
  text: "\"Would you rather\" is a fun game for practising English. Here are three questions from our club. Would you rather live by the sea or in the mountains? Leyla chose the sea: \"I'd rather swim every day than climb hills.\" Would you rather be able to fly or be invisible? Tural chose flying, because he could travel anywhere without tickets. Would you rather have a dog or a cat? Most students chose a dog, but Sabina said, \"I'd rather have a cat, because cats are quiet and independent.\" Remember: after \"would rather\" we use the verb without \"to\". And always give a reason with \"because\"!",
  qs: [
["Where would Leyla rather live?", ["by the sea", "in the mountains", "in the city"], "Leyla chose the sea: she'd rather swim every day."],
["Why did Tural choose flying?", ["He could travel anywhere without tickets.", "He is afraid of people.", "He wants to be invisible."], "Flying, he could travel anywhere without tickets."],
["I'd rather ___ a cat.", ["have", "to have", "having"], "After would rather: the verb without \"to\": I'd rather have…", { t: "type", alt: ["get"] }],
["Why would Sabina rather have a cat?", ["Cats are quiet and independent.", "Cats are bigger than dogs.", "Cats can swim."], "Sabina says cats are quiet and independent."],
["I'd rather swim ___ climb hills.", ["than", "that", "then"], "Would rather A than B: I'd rather swim than climb."],
["What should you always add to your answer?", ["a reason with \"because\"", "a new question", "a joke"], "Always give a reason with \"because\"."]],
  speak: "Record a 30-second voice message: would you rather visit the past or the future? Say why.",
  speakAz: "30 saniyəlik səsli mesaj yaz: keçmişə səyahət etməyi seçərdin, yoxsa gələcəyə? Səbəbini de.",
  speakRu: "Запиши голосовое сообщение на 30 секунд: ты бы предпочёл побывать в прошлом или в будущем? Скажи почему." },

{ id: "w5", format: "Travel diary", emoji: "🧳", title: "A day in Sheki", az: "Şəkidə bir gün", ru: "Один день в Шеки", level: "A2–B1",
  text: "Dear diary, today we spent the whole day in Sheki. In the morning we visited the Palace of the Sheki Khans. Its windows are made of tiny pieces of coloured glass, and there are no nails in the wooden frames! The sun was shining through them, and the room looked like a rainbow. For lunch we tried Sheki piti, a thick soup cooked in a small clay pot. It was delicious, but I ate too much. In the afternoon we walked through the old streets and bought some halva for my grandmother. Tomorrow we're going to Gabala to ride the cable car.",
  qs: [
["What did they visit in the morning?", ["the Palace of the Sheki Khans", "a car museum", "a big shopping centre"], "In the morning they visited the Palace of the Sheki Khans."],
["What is special about the palace windows?", ["They are made of tiny pieces of coloured glass.", "They are made of plastic.", "They have no glass."], "The windows are made of tiny pieces of coloured glass, with no nails in the frames."],
["What is piti?", ["a thick soup cooked in a clay pot", "a sweet cake", "a kind of tea"], "Piti is a thick soup cooked in a small clay pot."],
["It was delicious, but I ate too ___.", ["much", "many", "more"], "Much with uncountable things (food); many with countable things."],
["We ___ some halva for my grandmother.", ["bought", "buyed", "brought"], "Buy → bought (past). Brought is the past of bring.", { t: "type", alt: [] }],
["Tomorrow we ___ to Gabala.", ["are going", "went", "have gone"], "A plan for tomorrow → present continuous: we're going."]],
  speak: "Record a 30-second voice message: describe a day trip in Azerbaijan — where you went, what you saw and what you ate.",
  speakAz: "30 saniyəlik səsli mesaj yaz: Azərbaycanda bir günlük səfərini təsvir et — harada oldun, nə gördün və nə yedin.",
  speakRu: "Запиши голосовое сообщение на 30 секунд: опиши однодневную поездку по Азербайджану — где ты был, что видел и что ел." },

{ id: "w6", format: "Interview", emoji: "🎤", title: "Meet Chef Gunay", az: "Aşpaz Günay ilə tanış olun", ru: "Знакомьтесь: шеф-повар Гюнай", level: "A2–B1",
  text: "Reporter: Gunay, when did you start cooking?\nGunay: When I was eight. My grandmother taught me to make dolma.\nReporter: What is a normal day like for you?\nGunay: I get up at six and go to the market to choose fresh vegetables. The restaurant opens at noon, and I usually finish work at eleven at night.\nReporter: What's your favourite dish?\nGunay: Plov with chestnuts and dried fruit. It takes three hours to cook, but it's worth it.\nReporter: Any advice for young cooks?\nGunay: Don't be afraid of mistakes. I burned a lot of rice before I became a chef!",
  qs: [
["Who taught Gunay to cook?", ["her grandmother", "her teacher", "her father"], "\"My grandmother taught me to make dolma.\""],
["Why does she go to the market early?", ["to choose fresh vegetables", "to meet friends", "to sell food"], "She goes at six to choose fresh vegetables."],
["What is her favourite dish?", ["plov with chestnuts and dried fruit", "dolma", "piti"], "Her favourite is plov with chestnuts and dried fruit."],
["It takes three hours to cook, but it's ___ it.", ["worth", "cost", "value"], "It's worth it = it's good enough to spend the time or effort.", { t: "type", alt: [] }],
["I ___ a lot of rice before I became a chef.", ["burned", "burn", "have burned"], "A finished past action → past simple: burned (or burnt)."],
["What is her advice for young cooks?", ["Don't be afraid of mistakes.", "Never cook rice.", "Always cook quickly."], "\"Don't be afraid of mistakes.\""]],
  speak: "Record a 30-second voice message: you are a famous chef. What is your favourite dish and why?",
  speakAz: "30 saniyəlik səsli mesaj yaz: sən məşhur aşpazsan. Ən sevdiyin yemək hansıdır və niyə?",
  speakRu: "Запиши голосовое сообщение на 30 секунд: ты знаменитый шеф-повар. Какое твоё любимое блюдо и почему?" },

{ id: "w7", format: "Mystery object", emoji: "🎁", title: "What am I?", az: "Mən nəyəm?", ru: "Что я такое?", level: "A2–B1",
  text: "Read the clues and guess the mystery object. I am usually long and thin when I'm closed, but I become round and wide when I'm open. Most of the time I sleep in a corner or in a bag. People forget me on buses, in cafés and in taxis more than almost anything else. I'm not very useful on a sunny day, although some people carry me to protect themselves from the sun. When the sky turns grey, everyone suddenly looks for me. I have a handle, and my body is made of metal and fabric. Have you guessed? Don't open me inside the house — some people say it brings bad luck!",
  qs: [
["What is the mystery object?", ["an umbrella", "a bag", "a lamp"], "Long, opens when it rains, has a handle: an umbrella!"],
["What does the object look like when it is open?", ["round and wide", "long and thin", "small and square"], "Closed, it is long and thin; open, it is round and wide."],
["Where do people often forget it?", ["on buses, in cafés and in taxis", "at the bank", "in the fridge"], "People forget it on buses, in cafés and in taxis."],
["When the sky ___ grey, everyone looks for me.", ["turns", "turn", "turning"], "Turn + colour = become: the sky turns grey. (\"goes\" or \"becomes\" are also correct.)", { t: "type", alt: ["goes", "becomes"] }],
["I'm not very useful ___ a sunny day.", ["on", "in", "at"], "Days → on: on a sunny day."],
["Some people believe that opening it inside the house brings ___.", ["bad luck", "good luck", "money"], "Some people say opening it indoors brings bad luck."]],
  speak: "Record a 30-second voice message: describe an object in your room with three clues, but don't say its name!",
  speakAz: "30 saniyəlik səsli mesaj yaz: otağındakı bir əşyanı üç ipucu ilə təsvir et, amma adını demə!",
  speakRu: "Запиши голосовое сообщение на 30 секунд: опиши предмет в своей комнате с помощью трёх подсказок, но не называй его!" },

{ id: "w8", format: "News story", emoji: "📰", title: "A cat in the library", az: "Kitabxanada pişik", ru: "Кот в библиотеке", level: "A2–B1",
  text: "A grey cat called Pambıq has become the star of a small library in Ganja. The cat first appeared at the door on a cold morning last winter. The librarian, Mrs Sevda, gave him some milk, and he never left. Now Pambıq sleeps on the children's books and greets every visitor. Since he arrived, the number of young readers has doubled. \"Children come to see the cat, and then they stay to read,\" Mrs Sevda explained. The library has even started a special \"Read to Pambıq\" hour, when children read stories aloud to the cat. \"He is a very good listener,\" she says.",
  qs: [
["Where did the cat come from?", ["It appeared at the library door one winter morning.", "It came from a pet shop.", "It belonged to a reader."], "It appeared at the door on a cold morning last winter."],
["What did Mrs Sevda give him?", ["some milk", "a book", "a fish"], "Mrs Sevda gave him some milk."],
["Since he arrived, the number of young readers ___ doubled.", ["has", "have", "is"], "\"The number of…\" is singular: has doubled.", { t: "type", alt: [] }],
["Why do more children come to the library now?", ["They come to see the cat and stay to read.", "The library gives free sweets.", "Their teachers make them."], "\"Children come to see the cat, and then they stay to read.\""],
["What happens during the \"Read to Pambıq\" hour?", ["Children read stories aloud to the cat.", "The cat chooses books.", "Children draw pictures of the cat."], "Children read stories aloud to the cat."],
["Which is the best headline for this story?", ["Cat helps children love reading", "Cat drinks milk", "Library closes for winter"], "A good headline gives the main idea of the story."]],
  speak: "Record a 30-second voice message: you are a news reporter. Tell a short, happy news story about your town or school.",
  speakAz: "30 saniyəlik səsli mesaj yaz: sən xəbər müxbirisən. Şəhərin və ya məktəbin haqqında qısa, sevindirici bir xəbər danış.",
  speakRu: "Запиши голосовое сообщение на 30 секунд: ты репортёр. Расскажи короткую радостную новость о своём городе или школе." }
];

/* ---------- Mistake Hunters: levels + new units ---------- */
const ERR_LEVELS = { articles: "A2", pronouns: "A1", order: "A1", wv: "A1", perfect: "B1", false: "B1" };

const ERR_MORE = [
{ id: "tobe", name: "Am, is, are", full: "To be: am, is, are", az: "Am, is, are", ru: "Am, is, are", icon: "is/are", level: "A1",
  info: "Russian has no separate word for am/is/are, and in Azerbaijani it is only an ending (-am, -dır), so learners forget it — or add it where it doesn't belong: \"I am agree\".",
  qs: [
["I ___ from Ganja.", ["am", "is", "are"], "I → am: I am from Ganja."],
["My parents ___ at work now.", ["are", "is", "am"], "They (my parents) → are."],
["Which sentence is correct?", ["I agree with you.", "I am agree with you.", "I is agree with you."], "Agree is a verb, so no am: I agree. (Not \"I am agree\".)"],
["She ___ hungry.", ["is", "—", "are"], "English always needs a verb: She is hungry."],
["Which sentence is correct?", ["I like pizza.", "I am like pizza.", "I am liking pizza."], "Like is a verb: I like. Don't add am."],
["My brother ___ ten years old.", ["is", "has", "are"], "Age uses be, not have: He is ten (years old).", { t: "type", alt: ["'s"] }]]},
{ id: "prep", name: "In, on, at", full: "In, on, at (time & place)", az: "In, on, at", ru: "In, on, at", icon: "in/on", level: "A1",
  info: "Azerbaijani uses one ending (-da/-də) and Russian uses в/на for all of these, so choosing in, on or at is tricky.",
  qs: [
["My birthday is ___ May.", ["in", "on", "at"], "Months, years and seasons → in."],
["The lesson starts ___ 9 o'clock.", ["at", "in", "on"], "Clock times → at."],
["I'll see you ___ Monday.", ["on", "in", "at"], "Days and dates → on.", { t: "type", alt: [] }],
["The keys are ___ the table.", ["on", "in", "at"], "On a surface → on."],
["She is waiting ___ the bus stop.", ["at", "on", "in"], "A point or place → at the bus stop."],
["We live ___ Baku.", ["in", "at", "on"], "Cities and countries → in."]]},
{ id: "cond", name: "Conditionals", full: "Conditionals & wish", az: "Şərt cümlələri", ru: "Условные предложения", icon: "if…", level: "B2",
  info: "Russian uses one form (бы + past) for present and past unreal situations, and Azerbaijani uses -sa/-sə for both, so learners mix up the 2nd and 3rd conditionals and put \"would\" after if.",
  qs: [
["If I ___ more time, I would learn Japanese.", ["had", "would have", "have had"], "2nd conditional: If + past simple, would + verb. No would after if."],
["If she ___ harder, she would have passed the exam.", ["had studied", "studied", "would study"], "3rd conditional (past): If + had + V3, would have + V3."],
["If I were you, I ___ that job.", ["would take", "will take", "took"], "Advice: If I were you, I would…"],
["I wish I ___ taller.", ["were", "am", "will be"], "Wish about the present → past form: I wish I were (or was) taller."],
["I wish I ___ to the party yesterday. It was amazing!", ["had gone", "went", "would go"], "Regret about the past: wish + had + V3."],
["If I were rich, I ___ travel the world.", ["would", "will", "had"], "2nd conditional: would + verb. (\"could\" is also correct.)", { t: "type", alt: ["'d", "could"] }]]},
{ id: "makedo", name: "Make or do?", full: "Make/do, say/tell", az: "Make yoxsa do?", ru: "Make или do?", icon: "make/do", level: "B2",
  info: "Azerbaijani \"etmək\" and Russian \"делать\" cover both make and do, and \"demək\" / \"сказать\" cover both say and tell, so these collocations must be learned by heart.",
  qs: [
["Could you ___ me a favour?", ["do", "make", "give"], "Do someone a favour."],
["I ___ a mistake in my essay.", ["made", "did", "took"], "Make a mistake."],
["She ___ me the truth.", ["told", "said", "spoke"], "Tell + person: tell me the truth. (Say something, not say me.)"],
["We need to ___ a decision today.", ["make", "do", "have"], "Make a decision."],
["He ___ that he was tired.", ["said", "told", "talked"], "Say (that)… needs no person; tell needs one: He told me that…"],
["I always ___ my homework after dinner.", ["do", "make", "play"], "Do homework, do housework, do exercises.", { t: "type", alt: [] }]]}
];

/* ---------- Translations ---------- */
const WEEKLY_TR = [
{ text: {
  az: "Şənbə səhəri Aysel nənəsinin ad günü üçün şokoladlı tort bişirdi. Onu mətbəxdəki masanın üstünə qoydu və şam almaq üçün mağazaya getdi. İyirmi dəqiqə sonra qayıdanda tort yox idi! Evdə üç nəfər var idi: kiçik qardaşı Murad, xalası qızı Lalə və Fərid əmi. Murad dedi ki, bağda futbol oynayırdı. Lalə dedi ki, otağında kitab oxuyurdu. Fərid əmi dedi ki, divanda yatırdı. Amma Aysel bir şeyə diqqət etdi: çöldə yağış yağsa da, Muradın ayaqqabıları təmiz və quru idi. Barmaqlarında da şokolad var idi. \"Murad, — dedi, — tort haradadır?\"",
  ru: "В субботу утром Айсель испекла шоколадный торт ко дню рождения бабушки. Она поставила его на кухонный стол и пошла в магазин за свечами. Когда через двадцать минут она вернулась, торта не было! В доме было три человека: младший брат Мурад, двоюродная сестра Лала и дядя Фарид. Мурад сказал, что играл в футбол в саду. Лала сказала, что читала в своей комнате. Дядя Фарид сказал, что спал на диване. Но Айсель кое-что заметила: ботинки Мурада были чистыми и сухими, хотя на улице шёл дождь. А на пальцах у него был шоколад. «Мурад, — сказала она, — где торт?»" },
  qs: [
{ az: "Aysel nənəsinin ad günü üçün şokoladlı tort bişirdi.", ru: "Айсель испекла шоколадный торт ко дню рождения бабушки." },
{ az: "O, şam almaq üçün mağazaya getdi.", ru: "Она пошла в магазин за свечами." },
{ az: "Past continuous (was + -ing) keçmişdə davam edən hərəkət üçündür.", ru: "Past continuous (was + -ing) — для действия, которое длилось в прошлом." },
{ az: "Yağış yağırdı, deməli ayaqqabıları yaş olmalı idi. Onlar quru idi — o, bağda deyildi!", ru: "Шёл дождь, значит, его ботинки должны были быть мокрыми. Они были сухими — он не был в саду!" },
{ az: "The cake was gone = tort yoxa çıxmışdı. (\"missing\" da düzgündür.)", ru: "The cake was gone = торт исчез. («missing» тоже правильно.)" },
{ az: "Təmiz, quru ayaqqabılar və barmaqlarında şokolad: tortu Murad yeyib!", ru: "Чистые сухие ботинки и шоколад на пальцах: торт съел Мурад!" }]},
{ text: {
  az: "\"Gecəyarısı stansiyası\" filmində Nigar adlı gənc skripkaçı konsertdən sonra evə gedən son qatarı qaçırır. Stansiya boşdur, orada olan yeganə adam çay satan qoca kişidir. Əvvəlcə Nigar narahat olur, amma kişi ona bir əhvalat danışır: qırx il əvvəl o da həmin qatarı qaçırıb və gələcək həyat yoldaşı ilə məhz bu platformada tanış olub. Nigar gülür və onun üçün skripkada qısa bir melodiya çalır. Birdən işıqlar yanır və xüsusi gecə qatarı gəlir. Qoca gülümsəyib deyir: \"Bəzi qatarlar yalnız gözləməyi bacaranlar üçün gəlir.\" Səhnə Nigarın qatara minməsi ilə bitir.",
  ru: "В фильме «Полночная станция» молодая скрипачка Нигяр после концерта опаздывает на последний поезд домой. Станция пуста, и, кроме неё, там только старик, который продаёт чай. Сначала Нигяр нервничает, но старик рассказывает ей историю: сорок лет назад он опоздал на тот же поезд и встретил на этой платформе свою будущую жену. Нигяр смеётся и играет для него на скрипке короткую мелодию. Вдруг загораются огни и прибывает особый ночной поезд. Старик улыбается и говорит: «Некоторые поезда приходят только к тем, кто умеет ждать». Сцена заканчивается тем, что Нигяр садится в поезд." },
  qs: [
{ az: "Nigar konsertdə skripka çalır.", ru: "Нигяр играет на скрипке на концерте." },
{ az: "Orada olan yeganə adam çay satan qoca kişidir.", ru: "Кроме неё, там только старик, который продаёт чай." },
{ az: "Miss a train = qatarı qaçırmaq. \"Lose a train\" demə.", ru: "Miss a train = опоздать на поезд. Не говори «lose a train»." },
{ az: "Stansiya boş olduğu üçün Nigar əvvəlcə narahatdır.", ru: "Сначала Нигяр нервничает, потому что станция пуста." },
{ az: "Forty years ago = bitmiş keçmiş zaman → past simple: met.", ru: "Forty years ago — законченное прошлое → past simple: met." },
{ az: "Səbirli olmaq yaxşı şeylər gətirə bilər — xüsusi gecə qatarı kimi.", ru: "Терпение может принести хорошее — как этот особый ночной поезд." }]},
{ text: {
  az: "Şagirdlərə məktəbdə telefondan istifadə etməyə icazə verilməlidirmi? Sinfimizdə debat keçirdik. A komandası \"hə\" dedi. Onlar iddia etdilər ki, telefonlar öyrənmək üçün faydalıdır: şagirdlər lüğətdə yeni sözlərə baxa, lövhənin şəklini çəkə və təcili vəziyyətdə valideynləri ilə əlaqə saxlaya bilərlər. B komandası \"yox\" dedi. Onlar hesab edirdilər ki, telefonlar diqqəti çox yayındırır. Şagirdlər dərs vaxtı oyun oynayır, sosial şəbəkələrə baxır və tənəffüsdə bir-biri ilə daha az danışırlar. Sonda müəllim kompromis təklif etdi: telefonlar çantada qalır və şagirdlər onlardan yalnız müəllim icazə verəndə istifadə edə bilərlər. Şagirdlərin çoxu bunun ədalətli olduğu ilə razılaşdı.",
  ru: "Можно ли ученикам пользоваться телефонами в школе? Наш класс провёл дебаты. Команда А сказала «да». Они утверждали, что телефоны полезны для учёбы: ученики могут посмотреть новые слова в словаре, сфотографировать доску и связаться с родителями в экстренной ситуации. Команда Б сказала «нет». Они считали, что телефоны сильно отвлекают. Ученики играют в игры, сидят в соцсетях на уроках и меньше общаются друг с другом на перемене. В конце учитель предложил компромисс: телефоны остаются в сумках, и ученики могут пользоваться ими, только когда разрешит учитель. Большинство учеников согласились, что это справедливо." },
  qs: [
{ az: "A komandası \"hə\" dedi: telefonlar öyrənmək üçün faydalıdır.", ru: "Команда А сказала «да»: телефоны полезны для учёбы." },
{ az: "B komandası hesab edirdi ki, telefonlar diqqəti çox yayındırır.", ru: "Команда Б считала, что телефоны сильно отвлекают." },
{ az: "\"A big\"dən sonra isim lazımdır: distraction.", ru: "После «a big» нужно существительное: distraction." },
{ az: "Telefonlar çantada qalır; şagirdlər onlardan yalnız müəllim icazə verəndə istifadə edir.", ru: "Телефоны остаются в сумках; ученики пользуются ими, только когда разрешит учитель." },
{ az: "In my opinion = məncə. (\"In my view\" da düzgündür.)", ru: "In my opinion = по-моему. («In my view» тоже правильно.)" },
{ az: "\"I see your point, but…\" nəzakətlə etiraz etməkdir. Digərləri kobud səslənir.", ru: "«I see your point, but…» — вежливое возражение. Остальные варианты звучат грубо." }]},
{ text: {
  az: "\"Would you rather\" (\"Hansını seçərdin?\") ingiliscə məşq etmək üçün əyləncəli oyundur. Budur klubumuzdan üç sual. Dəniz kənarında yaşamağı seçərdin, yoxsa dağlarda? Leyla dənizi seçdi: \"Təpələrə dırmaşmaqdansa, hər gün üzməyi üstün tuturam.\" Uça bilməyi seçərdin, yoxsa görünməz olmağı? Tural uçmağı seçdi, çünki biletsiz istənilən yerə səyahət edə bilərdi. İt saxlamağı seçərdin, yoxsa pişik? Şagirdlərin çoxu iti seçdi, amma Səbinə dedi: \"Mən pişiyi üstün tuturam, çünki pişiklər sakit və müstəqildir.\" Unutma: \"would rather\"dən sonra feil \"to\"suz gəlir. Və həmişə \"because\" ilə səbəb göstər!",
  ru: "«Would you rather» («Что бы ты выбрал?») — весёлая игра для практики английского. Вот три вопроса из нашего клуба. Ты бы предпочёл жить у моря или в горах? Лейла выбрала море: «Я лучше буду плавать каждый день, чем лазить по холмам». Ты бы предпочёл уметь летать или быть невидимым? Турал выбрал полёт, потому что мог бы путешествовать куда угодно без билетов. Ты бы хотел собаку или кошку? Большинство учеников выбрали собаку, но Сабина сказала: «Я бы лучше завела кошку, потому что кошки тихие и независимые». Запомни: после «would rather» глагол идёт без «to». И всегда объясняй причину с помощью «because»!" },
  qs: [
{ az: "Leyla dənizi seçdi: o, hər gün üzməyi üstün tutur.", ru: "Лейла выбрала море: она лучше будет плавать каждый день." },
{ az: "Uça bilsəydi, biletsiz istənilən yerə səyahət edə bilərdi.", ru: "Умея летать, он мог бы путешествовать куда угодно без билетов." },
{ az: "Would rather-dən sonra feil \"to\"suz gəlir: I'd rather have…", ru: "После would rather глагол без «to»: I'd rather have…" },
{ az: "Səbinə deyir ki, pişiklər sakit və müstəqildir.", ru: "Сабина говорит, что кошки тихие и независимые." },
{ az: "Would rather A than B: I'd rather swim than climb.", ru: "Would rather A than B: I'd rather swim than climb." },
{ az: "Həmişə \"because\" ilə səbəb göstər.", ru: "Всегда объясняй причину с помощью «because»." }]},
{ text: {
  az: "Əziz gündəlik, bu gün bütün günü Şəkidə keçirdik. Səhər Şəki xanlarının sarayına baxdıq. Onun pəncərələri xırda rəngli şüşə parçalarından düzəldilib, taxta çərçivələrdə isə bir dənə də mismar yoxdur! Günəş şüşələrin arasından parlayırdı və otaq göy qurşağına bənzəyirdi. Nahar üçün Şəki pitisi daddıq — kiçik saxsı qabda bişirilən qatı şorba. Çox dadlı idi, amma həddindən artıq çox yedim. Günortadan sonra köhnə küçələrdə gəzdik və nənəm üçün bir az halva aldıq. Sabah kanat yolu ilə qalxmaq üçün Qəbələyə gedirik.",
  ru: "Дорогой дневник, сегодня мы провели весь день в Шеки. Утром мы посетили Дворец шекинских ханов. Его окна сделаны из крошечных кусочков цветного стекла, а в деревянных рамах нет ни одного гвоздя! Солнце светило сквозь них, и комната была похожа на радугу. На обед мы попробовали шекинский пити — густой суп, который готовят в маленьком глиняном горшочке. Было очень вкусно, но я съел слишком много. Днём мы гуляли по старым улочкам и купили халвы для бабушки. Завтра мы едем в Габалу кататься на канатной дороге." },
  qs: [
{ az: "Səhər onlar Şəki xanlarının sarayına baxdılar.", ru: "Утром они посетили Дворец шекинских ханов." },
{ az: "Pəncərələr xırda rəngli şüşə parçalarından düzəldilib, çərçivələrdə mismar yoxdur.", ru: "Окна сделаны из крошечных кусочков цветного стекла, а в рамах нет гвоздей." },
{ az: "Piti kiçik saxsı qabda bişirilən qatı şorbadır.", ru: "Пити — это густой суп, который готовят в маленьком глиняном горшочке." },
{ az: "Much sayılmayan isimlərlə (yemək), many sayılan isimlərlə işlənir.", ru: "Much — с неисчисляемыми (еда), many — с исчисляемыми." },
{ az: "Buy → bought (keçmiş zaman). Brought isə bring feilinin keçmiş formasıdır.", ru: "Buy → bought (прошедшее время). Brought — прошедшее время от bring." },
{ az: "Sabah üçün plan → present continuous: we're going.", ru: "План на завтра → present continuous: we're going." }]},
{ text: {
  az: "Müxbir: Günay, yemək bişirməyə nə vaxt başlamısınız?\nGünay: Səkkiz yaşımda. Nənəm mənə dolma bişirməyi öyrətdi.\nMüxbir: Adi gününüz necə keçir?\nGünay: Saat altıda oyanıram və təzə tərəvəz seçmək üçün bazara gedirəm. Restoran günorta açılır, mən isə adətən gecə saat on birdə işi bitirirəm.\nMüxbir: Ən sevdiyiniz yemək hansıdır?\nGünay: Şabalıd və quru meyvəli plov. Bişməsi üç saat çəkir, amma buna dəyər.\nMüxbir: Gənc aşpazlara nə məsləhət görərdiniz?\nGünay: Səhvlərdən qorxmayın. Aşpaz olana qədər çox düyü yandırmışam!",
  ru: "Репортёр: Гюнай, когда вы начали готовить?\nГюнай: Когда мне было восемь. Бабушка научила меня делать долму.\nРепортёр: Как проходит ваш обычный день?\nГюнай: Я встаю в шесть и иду на рынок выбирать свежие овощи. Ресторан открывается в полдень, а заканчиваю я обычно в одиннадцать вечера.\nРепортёр: Какое ваше любимое блюдо?\nГюнай: Плов с каштанами и сухофруктами. Он готовится три часа, но оно того стоит.\nРепортёр: Что посоветуете молодым поварам?\nГюнай: Не бойтесь ошибок. Прежде чем стать шеф-поваром, я сожгла очень много риса!" },
  qs: [
{ az: "\"Nənəm mənə dolma bişirməyi öyrətdi.\"", ru: "«Бабушка научила меня делать долму»." },
{ az: "O, təzə tərəvəz seçmək üçün saat altıda bazara gedir.", ru: "Она идёт на рынок в шесть, чтобы выбрать свежие овощи." },
{ az: "Onun ən sevdiyi yemək şabalıd və quru meyvəli plovdur.", ru: "Её любимое блюдо — плов с каштанами и сухофруктами." },
{ az: "It's worth it = buna dəyər, vaxta və zəhmətə dəyər.", ru: "It's worth it = оно того стоит, не жалко времени и сил." },
{ az: "Keçmişdə bitmiş hərəkət → past simple: burned (və ya burnt).", ru: "Законченное действие в прошлом → past simple: burned (или burnt)." },
{ az: "\"Səhvlərdən qorxmayın.\"", ru: "«Не бойтесь ошибок»." }]},
{ text: {
  az: "İpuclarını oxu və gizli əşyanı tap. Bağlı olanda adətən uzun və nazik oluram, açılanda isə dəyirmi və enli oluram. Çox vaxt bir küncdə və ya çantada yatıram. İnsanlar məni avtobusda, kafedə və taksidə demək olar ki, hər şeydən çox unudurlar. Günəşli gündə o qədər də faydalı deyiləm, baxmayaraq ki, bəziləri məni günəşdən qorunmaq üçün gəzdirir. Göy üzü bozaranda hamı birdən məni axtarır. Dəstəyim var, bədənim isə metal və parçadan düzəldilib. Tapdın? Məni evin içində açma — bəziləri deyir ki, bu, bədbəxtlik gətirir!",
  ru: "Прочитай подсказки и угадай загадочный предмет. Когда я закрыт, я обычно длинный и тонкий, а когда открыт — круглый и широкий. Большую часть времени я сплю в углу или в сумке. Меня забывают в автобусах, кафе и такси чаще, чем почти что-либо другое. В солнечный день от меня мало пользы, хотя некоторые носят меня, чтобы защититься от солнца. Когда небо становится серым, все вдруг начинают меня искать. У меня есть ручка, а моё тело сделано из металла и ткани. Догадался? Не открывай меня дома — говорят, это к несчастью!" },
  qs: [
{ az: "Uzundur, yağışda açılır, dəstəyi var: çətir!", ru: "Длинный, открывается в дождь, есть ручка: зонт!" },
{ az: "Bağlı olanda uzun və nazikdir, açıq olanda dəyirmi və enlidir.", ru: "Закрытый — длинный и тонкий, открытый — круглый и широкий." },
{ az: "İnsanlar onu avtobusda, kafedə və taksidə unudurlar.", ru: "Его забывают в автобусах, кафе и такси." },
{ az: "Turn + rəng = olmaq, çevrilmək: the sky turns grey. (\"goes\" və ya \"becomes\" da düzgündür.)", ru: "Turn + цвет = становиться: the sky turns grey. («goes» или «becomes» тоже правильно.)" },
{ az: "Günlərlə → on: on a sunny day.", ru: "С днями → on: on a sunny day." },
{ az: "Bəziləri deyir ki, onu evin içində açmaq bədbəxtlik gətirir.", ru: "Некоторые говорят, что открывать его в доме — к несчастью." }]},
{ text: {
  az: "Pambıq adlı boz pişik Gəncədəki kiçik bir kitabxananın ulduzuna çevrilib. Pişik ilk dəfə keçən qış soyuq bir səhər qapının ağzında peyda olub. Kitabxanaçı Sevda xanım ona bir az süd verib və o, bir daha getməyib. İndi Pambıq uşaq kitablarının üstündə yatır və hər gələni qarşılayır. O gələndən bəri gənc oxucuların sayı iki dəfə artıb. Sevda xanım izah edib: \"Uşaqlar pişiyə baxmağa gəlirlər, sonra isə kitab oxumaq üçün qalırlar.\" Kitabxana hətta xüsusi \"Pambığa oxu\" saatı da təşkil edib: bu saatda uşaqlar pişiyə ucadan nağıl oxuyurlar. \"O, çox yaxşı dinləyicidir\", — deyə Sevda xanım bildirir.",
  ru: "Серый кот по кличке Памбыг стал звездой небольшой библиотеки в Гяндже. Впервые кот появился у двери холодным утром прошлой зимой. Библиотекарь госпожа Севда дала ему молока, и он так и не ушёл. Теперь Памбыг спит на детских книгах и встречает каждого посетителя. С тех пор как он появился, число юных читателей удвоилось. «Дети приходят посмотреть на кота, а потом остаются читать», — объяснила госпожа Севда. В библиотеке даже появился особый час «Почитай Памбыгу», когда дети читают коту сказки вслух. «Он очень хороший слушатель», — говорит она." },
  qs: [
{ az: "O, keçən qış soyuq bir səhər qapının ağzında peyda olub.", ru: "Он появился у двери холодным утром прошлой зимой." },
{ az: "Sevda xanım ona bir az süd verdi.", ru: "Госпожа Севда дала ему молока." },
{ az: "\"The number of…\" təkdir: has doubled.", ru: "«The number of…» — единственное число: has doubled." },
{ az: "\"Uşaqlar pişiyə baxmağa gəlirlər, sonra isə kitab oxumaq üçün qalırlar.\"", ru: "«Дети приходят посмотреть на кота, а потом остаются читать»." },
{ az: "Uşaqlar pişiyə ucadan nağıl oxuyurlar.", ru: "Дети читают коту сказки вслух." },
{ az: "Yaxşı başlıq xəbərin əsas fikrini verir.", ru: "Хороший заголовок передаёт главную мысль новости." }]}
];

const ERR_MORE_TR = [
{ info: {
  az: "Rus dilində am/is/are üçün ayrıca söz yoxdur, Azərbaycan dilində isə bu, sadəcə şəkilçidir (-am, -dır), ona görə də unudulur — ya da lazım olmayan yerə əlavə olunur: \"I am agree\".",
  ru: "В русском нет отдельного слова для am/is/are, а в азербайджанском это лишь окончание (-am, -dır), поэтому его забывают — или ставят там, где он не нужен: «I am agree»." },
  qs: [
{ az: "I → am: I am from Ganja.", ru: "I → am: I am from Ganja." },
{ az: "They (valideynlərim) → are.", ru: "They (мои родители) → are." },
{ az: "Agree feildir, ona görə am lazım deyil: I agree. (\"I am agree\" yox.)", ru: "Agree — это глагол, поэтому am не нужен: I agree. (Не «I am agree».)" },
{ az: "İngilis dilində cümlədə həmişə feil olmalıdır: She is hungry.", ru: "В английском предложении всегда нужен глагол: She is hungry." },
{ az: "Like feildir: I like. Am əlavə etmə.", ru: "Like — глагол: I like. Не добавляй am." },
{ az: "Yaş be ilə deyilir, have ilə yox: He is ten (years old).", ru: "Возраст выражается через be, а не have: He is ten (years old)." }]},
{ info: {
  az: "Azərbaycan dilində bunların hamısı üçün bir şəkilçi (-da/-də), rus dilində isə в/на işlənir, ona görə in, on və at arasında seçim çətindir.",
  ru: "В азербайджанском для всех этих случаев одно окончание (-da/-də), а в русском — в/на, поэтому выбрать между in, on и at непросто." },
  qs: [
{ az: "Aylar, illər və fəsillər → in.", ru: "Месяцы, годы и времена года → in." },
{ az: "Saat → at.", ru: "Время по часам → at." },
{ az: "Günlər və tarixlər → on.", ru: "Дни и даты → on." },
{ az: "Səthin üstündə → on.", ru: "На поверхности → on." },
{ az: "Konkret nöqtə, yer → at the bus stop.", ru: "Точка, конкретное место → at the bus stop." },
{ az: "Şəhərlər və ölkələr → in.", ru: "Города и страны → in." }]},
{ info: {
  az: "Azərbaycan dilində həm indiki, həm keçmiş qeyri-real vəziyyət üçün -sa/-sə işlənir, rus dilində isə bir forma (бы + keçmiş zaman) var, ona görə 2-ci və 3-cü şərt cümlələri qarışdırılır və if-dən sonra \"would\" qoyulur.",
  ru: "В русском одна форма (бы + прошедшее время) и для настоящих, и для прошлых нереальных ситуаций, а в азербайджанском для обоих случаев -sa/-sə, поэтому путают 2-й и 3-й тип условных предложений и ставят «would» после if." },
  qs: [
{ az: "2-ci şərt: If + past simple, would + feil. If-dən sonra would olmur.", ru: "2-й тип: If + past simple, would + глагол. После if would не ставится." },
{ az: "3-cü şərt (keçmiş): If + had + V3, would have + V3.", ru: "3-й тип (прошлое): If + had + V3, would have + V3." },
{ az: "Məsləhət: If I were you, I would… (Mən sənin yerində olsaydım…)", ru: "Совет: If I were you, I would… (На твоём месте я бы…)" },
{ az: "İndiki zaman haqqında arzu → keçmiş forma: I wish I were (və ya was) taller.", ru: "Желание о настоящем → форма прошедшего: I wish I were (или was) taller." },
{ az: "Keçmişə görə təəssüf: wish + had + V3.", ru: "Сожаление о прошлом: wish + had + V3." },
{ az: "2-ci şərt: would + feil. (\"could\" da düzgündür.)", ru: "2-й тип: would + глагол. («could» тоже правильно.)" }]},
{ info: {
  az: "Azərbaycan dilindəki \"etmək\" və rus dilindəki \"делать\" həm make, həm do, \"demək\" / \"сказать\" isə həm say, həm tell mənasını verir, ona görə bu söz birləşmələrini əzbərləmək lazımdır.",
  ru: "Азербайджанское «etmək» и русское «делать» означают и make, и do, а «demək» / «сказать» — и say, и tell, поэтому эти сочетания нужно просто запомнить." },
  qs: [
{ az: "Do someone a favour = kiməsə yaxşılıq etmək.", ru: "Do someone a favour = оказать кому-то услугу." },
{ az: "Make a mistake = səhv etmək.", ru: "Make a mistake = сделать ошибку." },
{ az: "Tell + şəxs: tell me the truth. (Say something deyilir, say me yox.)", ru: "Tell + человек: tell me the truth. (Говорят say something, а не say me.)" },
{ az: "Make a decision = qərar vermək.", ru: "Make a decision = принять решение." },
{ az: "Say (that)… şəxssiz işlənir; tell isə şəxs tələb edir: He told me that…", ru: "Say (that)… — без человека; после tell нужен человек: He told me that…" },
{ az: "Do homework, do housework, do exercises.", ru: "Do homework, do housework, do exercises." }]}
];
