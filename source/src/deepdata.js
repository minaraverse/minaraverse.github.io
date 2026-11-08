/* ===== Deep chapters: vocabulary, grammar, dictation, speaking (A1) ===== */
/* question format: [text, options (correct first), explanation, meta { t?, alt?, tr: { az, ru } }] */

DEEP.cafe = [
/* 0 — Hello, Leyla! */
{
  vocab: [
    ["café", "kafe", "кафе", "Leyla opens a small café."],
    ["table", "masa", "стол, столик", "It has six tables."],
    ["window", "pəncərə", "окно", "The café has big windows."],
    ["customer", "müştəri", "посетитель, клиент", "Her first customer is a young man."],
    ["student", "tələbə", "студент", "Kamran is a student."],
    ["young", "gənc", "молодой", "He is a young man."],
    ["smile", "gülümsəmək", "улыбаться", "Leyla smiles at Kamran."],
    ["welcome", "xoş gəlmisiniz", "добро пожаловать", "Welcome to Baku Café!"]
  ],
  grammar: {
    t: "To be: am / is / are",
    rule: {
      en: "We use am with I, is with he, she, it, and are with you, we, they. Short forms: I'm, she's, they're.",
      az: "I ilə am, he/she/it ilə is, you/we/they ilə are işlədirik. Qısa formalar: I'm, she's, they're.",
      ru: "С I говорим am, с he/she/it — is, с you/we/they — are. Краткие формы: I'm, she's, they're."
    },
    ex: ["Leyla is twenty-eight years old.", "I'm Kamran. I'm a student.", "She is from Sheki."],
    qs: [
      ["Leyla ____ from Sheki.", ["is", "am", "are"], "She → is. Leyla is from Sheki.", { "t": "gap", "tr": { "az": "She → is. Leyla Şəkidəndir: Leyla is from Sheki.", "ru": "She → is. Лейла из Шеки: Leyla is from Sheki." } }],
      ["Kamran are a student.", ["Kamran is a student.", "Kamran am a student.", "Kamran be a student."], "Kamran = he → is, not are.", { "t": "fix", "alt": [], "tr": { "az": "Kamran = he → is, are yox.", "ru": "Kamran = he → is, а не are." } }],
      ["Which sentence is correct?", ["I'm Leyla.", "I is Leyla.", "I are Leyla."], "I → am. I'm = I am.", { "tr": { "az": "I → am. I'm = I am.", "ru": "I → am. I'm = I am." } }]
    ]
  },
  dict: ["Leyla is twenty-eight years old.", "It has six tables.", "Her first customer is a young man."],
  speak: ["Hello! I'm Leyla.", "What's your name?", "Nice to meet you!", "Welcome to Baku Café!"]
},
/* 1 — Tea or Coffee? */
{
  vocab: [
    ["black tea", "qara çay", "чёрный чай", "Can I have a black tea, please?"],
    ["coffee", "qəhvə", "кофе", "A coffee with milk for me."],
    ["menu", "menyu", "меню", "Leyla looks at the menu."],
    ["how much", "neçəyədir", "сколько стоит", "How much is it?"],
    ["pay", "ödəmək", "платить", "Aysel pays with a card."],
    ["card", "kart", "карта", "She pays with a card."],
    ["friend", "dost", "друг, подруга", "Kamran comes with his friend Aysel."],
    ["drink", "içki", "напиток", "Your drinks are coming."]
  ],
  grammar: {
    t: "Polite requests: Can I have…, please?",
    rule: {
      en: "To order something politely, say Can I have + thing + please? The answer is often: Here you are. / Of course.",
      az: "Nəzakətlə sifariş vermək üçün deyirik: Can I have + əşya + please? Cavab çox vaxt: Here you are. / Of course.",
      ru: "Чтобы вежливо заказать, говорим: Can I have + предмет + please? Ответ часто: Here you are. / Of course."
    },
    ex: ["Can I have a black tea, please?", "And a coffee with milk for me.", "How much is it?"],
    qs: [
      ["____ I have a coffee, please?", ["Can", "Do", "Am", "Is"], "Polite request: Can I have…, please?", { "t": "gap", "tr": { "az": "Nəzakətli xahiş: Can I have…, please?", "ru": "Вежливая просьба: Can I have…, please?" } }],
      ["I can have a tea, please?", ["Can I have a tea, please?", "I can have a tea please?", "Can have I a tea, please?"], "In a question, can comes first: Can I have…?", { "t": "fix", "alt": [], "tr": { "az": "Sualda can əvvəl gəlir: Can I have…?", "ru": "В вопросе can стоит первым: Can I have…?" } }],
      ["Which one is polite?", ["Can I have a black tea, please?", "Give me tea.", "I want tea now."], "Can I have…, please? is polite. Give me… is not polite.", { "tr": { "az": "Can I have…, please? nəzakətlidir. Give me… nəzakətli deyil.", "ru": "Can I have…, please? — вежливо. Give me… — невежливо." } }]
    ]
  },
  dict: ["Tea is two manats.", "Aysel pays with a card.", "Your drinks are coming."],
  speak: ["Can I have a black tea, please?", "A coffee with milk for me.", "How much is it?", "That's six manats, please."]
},
/* 2 — The New Menu */
{
  vocab: [
    ["food", "yemək", "еда", "Now there is some food too."],
    ["soup", "şorba", "суп", "The menu has soup and salads."],
    ["salad", "salat", "салат", "I'd like a salad, please."],
    ["bread", "çörək", "хлеб", "We haven't got any bread today."],
    ["cake", "tort", "торт, пирожное", "There are cakes and qutab."],
    ["tourist", "turist", "турист", "Anna is a tourist from Germany."],
    ["pancake", "nazik xəmir yeməyi, qutab", "лепёшка, блин", "Qutab is a thin pancake."],
    ["I'd like", "istərdim", "я бы хотел(а)", "I'd like two, please."]
  ],
  grammar: {
    t: "some / any",
    rule: {
      en: "Use some in positive sentences: There is some food. Use any in negatives and questions: We haven't got any bread. Have you got any tea?",
      az: "Təsdiq cümlələrində some: There is some food. İnkar və sualda any: We haven't got any bread. Have you got any tea?",
      ru: "В утверждениях — some: There is some food. В отрицаниях и вопросах — any: We haven't got any bread. Have you got any tea?"
    },
    ex: ["Now there is some food too.", "I'd like a salad and some bread.", "We haven't got any bread today."],
    qs: [
      ["We haven't got ____ bread today.", ["any", "some", "a"], "Negative sentence → any.", { "t": "gap", "tr": { "az": "İnkar cümlə → any.", "ru": "Отрицательное предложение → any." } }],
      ["There is any food too.", ["There is some food too.", "There is a food too.", "There are any food too."], "Positive sentence → some, not any.", { "t": "fix", "alt": [], "tr": { "az": "Təsdiq cümləsi → some, any yox.", "ru": "Утвердительное предложение → some, а не any." } }],
      ["Which sentence is correct?", ["Have you got any qutab?", "Have you got some bread?", "I haven't got some bread."], "Questions and negatives take any.", { "tr": { "az": "Sual və inkar cümlələrində any işlənir.", "ru": "В вопросах и отрицаниях используем any." } }]
    ]
  },
  dict: ["Leyla writes a new menu.", "Would you like some qutab?", "I'd like two, please."],
  speak: ["I'd like a salad, please.", "Sorry, we haven't got any bread.", "Would you like some qutab?", "What is qutab?"]
},
/* 3 — Which Way? */
{
  vocab: [
    ["map", "xəritə", "карта (города)", "A tourist with a big map."],
    ["excuse me", "bağışlayın", "извините", "Excuse me, where is the Old City?"],
    ["straight on", "düz", "прямо", "Go straight on to the end."],
    ["turn left", "sola dönmək", "повернуть налево", "Then turn left at the end."],
    ["right", "sağ", "правый, направо", "The tower is on your right."],
    ["next to", "yanında", "рядом с", "It is next to a small park."],
    ["on foot", "piyada", "пешком", "It's about ten minutes on foot."],
    ["park", "park", "парк", "There is a small park."]
  ],
  grammar: {
    t: "Giving directions: Go, Turn (imperatives)",
    rule: {
      en: "For directions we use the verb without a subject: Go straight on. Turn left. Turn right. Add please or Excuse me to be polite.",
      az: "Yol göstərəndə feili mübtədasız işlədirik: Go straight on. Turn left. Turn right. Nəzakət üçün please və ya Excuse me əlavə edirik.",
      ru: "Объясняя дорогу, используем глагол без подлежащего: Go straight on. Turn left. Turn right. Для вежливости добавляем please или Excuse me."
    },
    ex: ["Go straight on to the end of the street.", "Then turn left.", "The Maiden Tower is on your right."],
    qs: [
      ["____ straight on to the end of the street.", ["Go", "Going", "Goes"], "Directions: Go straight on. No subject, base verb.", { "t": "gap", "tr": { "az": "Yol göstərmək: Go straight on. Mübtəda yoxdur, feilin əsas forması.", "ru": "Указание дороги: Go straight on. Без подлежащего, базовая форма глагола." } }],
      ["Then you turning left.", ["Then turn left.", "Then turns left.", "Then you turned left."], "Directions use the base verb: Turn left.", { "t": "fix", "alt": [], "tr": { "az": "Yol göstərəndə feilin əsas forması: Turn left.", "ru": "В указаниях дороги — базовая форма глагола: Turn left." } }],
      ["Which sentence gives directions?", ["Turn left at the end of the street.", "I like the Old City.", "The café is small."], "Turn left… tells someone where to go.", { "tr": { "az": "Turn left… kiməsə hara getməyi deyir.", "ru": "Turn left… говорит человеку, куда идти." } }]
    ]
  },
  dict: ["Leyla points out of the window.", "It's about ten minutes on foot.", "Thank you very much!"],
  speak: ["How do I get to the Old City?", "Go straight on.", "Then turn left.", "Thank you very much!"]
},
/* 4 — A Busy Saturday */
{
  vocab: [
    ["busy", "məşğul", "занятой, загруженный", "We are very busy today!"],
    ["full", "dolu", "полный", "The café is full."],
    ["help", "kömək etmək", "помогать", "Orkhan is helping her today."],
    ["carry", "daşımaq, aparmaq", "носить, нести", "He is carrying plates to the tables."],
    ["plate", "boşqab", "тарелка", "He is carrying plates."],
    ["cry", "ağlamaq", "плакать", "A baby is crying."],
    ["newspaper", "qəzet", "газета", "An old man is reading a newspaper."],
    ["phone", "telefon", "телефон", "Then the phone rings."]
  ],
  grammar: {
    t: "Present Continuous: is / are + -ing",
    rule: {
      en: "For actions happening now we use am / is / are + verb-ing: Leyla is making coffee. They are playing nard.",
      az: "İndi baş verən hərəkətlər üçün am / is / are + feil-ing: Leyla is making coffee. They are playing nard.",
      ru: "Для действий, которые происходят сейчас: am / is / are + глагол-ing: Leyla is making coffee. They are playing nard."
    },
    ex: ["Leyla is making coffee.", "Kamran and Aysel are sitting by the window.", "A baby is crying."],
    qs: [
      ["Leyla ____ making coffee.", ["is", "are", "am"], "She → is + making.", { "t": "gap", "tr": { "az": "She → is + making.", "ru": "She → is + making." } }],
      ["Kamran and Aysel is playing nard.", ["Kamran and Aysel are playing nard.", "Kamran and Aysel am playing nard.", "Kamran and Aysel playing nard."], "Two people = they → are playing.", { "t": "fix", "alt": [], "tr": { "az": "İki nəfər = they → are playing.", "ru": "Два человека = they → are playing." } }],
      ["Which sentence is about now?", ["Orkhan is carrying plates.", "Orkhan carries plates every day.", "Orkhan carried plates yesterday."], "is carrying = happening now.", { "tr": { "az": "is carrying = indi baş verir.", "ru": "is carrying = происходит сейчас." } }]
    ]
  },
  dict: ["The café is full.", "Leyla is making coffee.", "A baby is crying."],
  speak: ["Sorry, I can't talk now.", "We're very busy!", "Leyla is making coffee.", "They are playing nard."]
},
/* 5 — Yesterday's Party */
{
  vocab: [
    ["yesterday", "dünən", "вчера", "Yesterday the café was one month old."],
    ["party", "məclis, şənlik", "праздник, вечеринка", "Leyla had a party."],
    ["played", "çaldı, oynadı", "играл(а)", "Orkhan played the tar."],
    ["sang", "oxudu (mahnı)", "спел(а)", "Aysel sang an old song."],
    ["brought", "gətirdi", "принёс / принесла", "Anna brought a German apple cake."],
    ["danced", "rəqs etdi", "танцевал(а)", "Everybody danced and laughed."],
    ["tired", "yorğun", "уставший", "Leyla was very tired."],
    ["happy", "xoşbəxt", "счастливый", "But she was very happy."]
  ],
  grammar: {
    t: "Past Simple: was / were and -ed",
    rule: {
      en: "For yesterday we use the past: was / were (from be) and verb + -ed for regular verbs: played, danced, laughed, finished.",
      az: "Dünən haqqında keçmiş zamanda danışırıq: was / were (be feilindən) və düzgün feillərdə feil + -ed: played, danced, laughed, finished.",
      ru: "О вчерашнем дне говорим в прошедшем времени: was / were (от be) и глагол + -ed у правильных глаголов: played, danced, laughed, finished."
    },
    ex: ["Yesterday the café was one month old.", "Orkhan played the tar.", "The party finished at eleven o'clock."],
    qs: [
      ["Everybody ____ and laughed.", ["danced", "dance", "dances"], "Past simple: dance → danced.", { "t": "gap", "tr": { "az": "Keçmiş zaman: dance → danced.", "ru": "Прошедшее время: dance → danced." } }],
      ["The party finish at eleven o'clock.", ["The party finished at eleven o'clock.", "The party finishes at eleven o'clock.", "The party finishing at eleven o'clock."], "Yesterday → finished (-ed).", { "t": "fix", "alt": [], "tr": { "az": "Dünən → finished (-ed).", "ru": "Вчера → finished (-ed)." } }],
      ["Which sentence is about yesterday?", ["Leyla was very tired.", "Leyla is very tired.", "Leyla is going to be tired."], "was = past of is.", { "tr": { "az": "was = is feilinin keçmiş zamanı.", "ru": "was = прошедшее время от is." } }]
    ]
  },
  dict: ["Orkhan played the tar.", "Everybody danced and laughed.", "Anna brought a German apple cake."],
  speak: ["Thank you all!", "You are my café family.", "Aysel sang an old song.", "The party finished at eleven o'clock."]
},
/* 6 — Big Plans */
{
  vocab: [
    ["notebook", "dəftər", "блокнот", "Leyla is sitting with a notebook."],
    ["idea", "ideya, fikir", "идея", "She has a big idea."],
    ["going to", "edəcək (plan)", "собираться (сделать)", "I'm going to open a second café."],
    ["second", "ikinci", "второй", "Leyla wants a second café."],
    ["hometown", "doğma şəhər", "родной город", "Sheki is my hometown."],
    ["sell", "satmaq", "продавать", "I'm going to sell Sheki halva."],
    ["website", "veb-sayt", "сайт", "Kamran is going to make a website."],
    ["spring", "yaz", "весна", "Next spring the café is going to open."]
  ],
  grammar: {
    t: "Future plans: be going to",
    rule: {
      en: "For plans we use am / is / are + going to + verb: I'm going to open a café. Kamran is going to make a website.",
      az: "Planlar üçün am / is / are + going to + feil: I'm going to open a café. Kamran is going to make a website.",
      ru: "Для планов используем am / is / are + going to + глагол: I'm going to open a café. Kamran is going to make a website."
    },
    ex: ["I'm going to open a second café.", "Orkhan is going to help her with the money.", "Kamran is going to make a website."],
    qs: [
      ["Kamran is ____ make a website.", ["going to", "go to", "going"], "be + going to + verb.", { "t": "gap", "tr": { "az": "be + going to + feil.", "ru": "be + going to + глагол." } }],
      ["Leyla going to open a second café.", ["Leyla is going to open a second café.", "Leyla go to open a second café.", "Leyla is going open a second café."], "Don't forget is: Leyla is going to open…", { "t": "fix", "alt": [], "tr": { "az": "is-i unutma: Leyla is going to open…", "ru": "Не забывай is: Leyla is going to open…" } }],
      ["Which sentence is a plan for the future?", ["I'm going to sell halva.", "I sell halva every day.", "I sold halva yesterday."], "going to = a plan for the future.", { "tr": { "az": "going to = gələcək üçün plan.", "ru": "going to = план на будущее." } }]
    ]
  },
  dict: ["She has a big idea.", "Today Leyla is sitting with a notebook.", "Orkhan is going to help her."],
  speak: ["I'm going to open a second café.", "I'm going to sell Sheki halva there.", "Kamran is going to make a website.", "Where? In Sheki, my hometown!"]
}
];

DEEP.kids = [
/* 0 — My Family */
{
  vocab: [
    ["brother", "qardaş", "брат", "This is my brother, Murad."],
    ["mum", "ana", "мама", "This is our mum."],
    ["dad", "ata", "папа", "This is our dad."],
    ["grandma", "nənə", "бабушка", "Our grandma lives with us."],
    ["cat", "pişik", "кот, кошка", "Pixel is our cat."],
    ["house", "ev", "дом", "We live in a small house."],
    ["live", "yaşamaq", "жить", "We live in Baku."],
    ["talk", "danışmaq", "говорить, разговаривать", "Our cat Pixel can talk!"]
  ],
  grammar: {
    t: "This is… / I'm… (to be)",
    rule: {
      en: "To show a person or a thing we say This is…: This is my brother. To say who you are: I'm Aylin. (I'm = I am)",
      az: "Bir adamı və ya əşyanı göstərəndə This is… deyirik: This is my brother. Kim olduğunu demək üçün: I'm Aylin. (I'm = I am)",
      ru: "Чтобы показать человека или предмет, говорим This is…: This is my brother. Чтобы сказать, кто ты: I'm Aylin. (I'm = I am)"
    },
    ex: ["I'm Aylin.", "This is my brother, Murad.", "This is Pixel, our cat."],
    qs: [
      ["This ____ my brother, Murad.", ["is", "are", "am"], "This → is. This is my brother.", { "t": "gap", "tr": { "az": "This → is. This is my brother.", "ru": "This → is. This is my brother." } }],
      ["I are Aylin.", ["I'm Aylin.", "I is Aylin.", "Me Aylin."], "I → am. I'm Aylin.", { "t": "fix", "alt": ["I am Aylin."], "tr": { "az": "I → am. I'm Aylin.", "ru": "I → am. I'm Aylin." } }],
      ["Which sentence is correct?", ["This is our dad.", "This are our dad.", "This am our dad."], "One person → this is.", { "tr": { "az": "Bir nəfər → this is.", "ru": "Один человек → this is." } }]
    ]
  },
  dict: ["This is our mum.", "Pixel is black and white.", "Our grandma lives with us too."],
  speak: ["Hello! I'm Aylin.", "This is my brother, Murad.", "And this is Pixel, our cat.", "Let's go on an adventure!"]
},
/* 1 — The Toy Box */
{
  vocab: [
    ["toy", "oyuncaq", "игрушка", "This is my favourite toy."],
    ["ball", "top", "мяч", "Look! A red ball!"],
    ["car", "maşın", "машинка", "A yellow car and a blue robot."],
    ["robot", "robot", "робот", "The robot is blue."],
    ["kite", "çərpələng", "воздушный змей", "Murad has got a green kite."],
    ["teddy bear", "ayıcıq", "плюшевый мишка", "The children have got two teddy bears."],
    ["favourite", "ən sevimli", "любимый", "The pink ball is Pixel's favourite."],
    ["big", "böyük", "большой", "Aylin opens the big toy box."]
  ],
  grammar: {
    t: "have got / has got",
    rule: {
      en: "To say what you have: I / you / we / they have got…, he / she / it has got…: Murad has got a kite. The children have got two teddy bears.",
      az: "Nəyin olduğunu demək üçün: I / you / we / they have got…, he / she / it has got…: Murad has got a kite. The children have got two teddy bears.",
      ru: "Чтобы сказать, что у кого-то есть: I / you / we / they have got…, he / she / it has got…: Murad has got a kite. The children have got two teddy bears."
    },
    ex: ["Murad has got a green kite.", "The children have got two teddy bears.", "I have got a red ball."],
    qs: [
      ["Murad ____ got a green kite.", ["has", "have", "is"], "He → has got.", { "t": "gap", "tr": { "az": "He → has got.", "ru": "He → has got." } }],
      ["The children has got two teddy bears.", ["The children have got two teddy bears.", "The children is got two teddy bears.", "The children got have two teddy bears."], "They → have got.", { "t": "fix", "alt": [], "tr": { "az": "They → have got.", "ru": "They → have got." } }],
      ["Which sentence is correct?", ["I have got a red ball.", "I has got a red ball.", "I got have a red ball."], "I → have got.", { "tr": { "az": "I → have got.", "ru": "I → have got." } }]
    ]
  },
  dict: ["Aylin opens the big toy box.", "Pixel likes the small pink ball.", "The children have got two teddy bears."],
  speak: ["Look! A red ball!", "This is my favourite toy.", "Murad has got a green kite.", "One is brown and one is white."]
},
/* 2 — At the Zoo */
{
  vocab: [
    ["zoo", "zoopark", "зоопарк", "Today the family goes to the zoo."],
    ["elephant", "fil", "слон", "Murad sees a big grey elephant."],
    ["monkey", "meymun", "обезьяна", "The monkeys are funny."],
    ["lion", "şir", "лев", "The lion is sleeping."],
    ["giraffe", "zürafə", "жираф", "A tall giraffe is eating leaves."],
    ["jump", "tullanmaq", "прыгать", "They can jump and climb."],
    ["climb", "dırmaşmaq", "лазать", "Monkeys can climb trees."],
    ["scared", "qorxmuş", "испуганный", "Pixel is a little scared."]
  ],
  grammar: {
    t: "can / can't",
    rule: {
      en: "Can + verb says what you are able to do: They can jump. Can't = cannot: I can't fly. The verb after can never changes.",
      az: "Can + feil nəyi bacardığını deyir: They can jump. Can't = cannot: I can't fly. Can-dan sonra feil heç vaxt dəyişmir.",
      ru: "Can + глагол говорит, что ты умеешь: They can jump. Can't = cannot: I can't fly. Глагол после can никогда не меняется."
    },
    ex: ["They can jump and climb.", "Pixel can talk!", "A small cat can't fight a lion."],
    qs: [
      ["The monkeys ____ jump and climb.", ["can", "is", "are"], "Can + verb: can jump.", { "t": "gap", "tr": { "az": "Can + feil: can jump.", "ru": "Can + глагол: can jump." } }],
      ["Pixel can to jump.", ["Pixel can jump.", "Pixel can jumps.", "Pixel cans jump."], "After can: no to, no -s. Pixel can jump.", { "t": "fix", "alt": [], "tr": { "az": "Can-dan sonra to və -s olmur: Pixel can jump.", "ru": "После can нет to и нет -s: Pixel can jump." } }],
      ["Which sentence is correct?", ["Monkeys can climb.", "Monkeys cans climb.", "Monkeys can climbing."], "can + base verb: can climb.", { "tr": { "az": "can + feilin əsas forması: can climb.", "ru": "can + базовая форма глагола: can climb." } }]
    ]
  },
  dict: ["The monkeys are funny.", "The lion is sleeping.", "I am a small cat."],
  speak: ["Look at its long nose!", "They can jump and climb.", "Lions are very big cats!", "A tall giraffe is eating leaves."]
},
/* 3 — At the Market */
{
  vocab: [
    ["market", "bazar", "рынок", "At the market there are lots of fruits."],
    ["fruit", "meyvə", "фрукт", "There are lots of fruits."],
    ["apple", "alma", "яблоко", "Aylin wants some apples."],
    ["banana", "banan", "банан", "Murad likes bananas very much."],
    ["orange", "portağal", "апельсин", "Grandma buys six oranges."],
    ["watermelon", "qarpız", "арбуз", "Grandma buys one big watermelon."],
    ["fish", "balıq", "рыба", "Pixel looks at the fish."],
    ["buy", "almaq", "покупать", "Grandma buys oranges at the market."]
  ],
  grammar: {
    t: "Asking the price: How much…?",
    rule: {
      en: "To ask the price we say How much is…? for one thing and How much are…? for many things: How much are the apples? — Two manats a kilo.",
      az: "Qiyməti soruşmaq üçün bir şey olanda How much is…?, çox olanda How much are…? deyirik: How much are the apples? — Two manats a kilo.",
      ru: "Чтобы спросить цену, говорим How much is…? про один предмет и How much are…? про несколько: How much are the apples? — Two manats a kilo."
    },
    ex: ["How much are the apples?", "Two manats a kilo.", "How much is the watermelon?"],
    qs: [
      ["____ are the apples?", ["How much", "How many", "What colour"], "Price → How much.", { "t": "gap", "tr": { "az": "Qiymət → How much.", "ru": "Цена → How much." } }],
      ["How much is the apples?", ["How much are the apples?", "How much am the apples?", "How much the apples is?"], "Apples = many → are.", { "t": "fix", "alt": [], "tr": { "az": "Apples = çox → are.", "ru": "Apples = много → are." } }],
      ["What does \"Two manats a kilo\" mean?", ["the price of one kilo", "the number of apples", "the colour of the apples"], "It is the price: one kilo costs two manats.", { "tr": { "az": "Bu qiymətdir: bir kilo iki manatdır.", "ru": "Это цена: один килограмм стоит два маната." } }]
    ]
  },
  dict: ["Pixel looks at the fish.", "Grandma buys six oranges and one big watermelon.", "We don't need fish today!"],
  speak: ["How much are the apples?", "Two manats a kilo.", "Aylin wants apples.", "Murad likes bananas."]
},
/* 4 — At School */
{
  vocab: [
    ["school", "məktəb", "школа", "Pixel goes to school on Monday."],
    ["classroom", "sinif otağı", "класс (комната)", "In the classroom there are desks."],
    ["desk", "parta", "парта", "There are desks and chairs."],
    ["board", "lövhə", "доска", "There is a big board."],
    ["pencil", "karandaş", "карандаш", "Aylin has got a pencil."],
    ["ruler", "xətkeş", "линейка", "She has got a ruler."],
    ["rubber", "pozan", "ластик", "Aylin has got a rubber too."],
    ["count", "saymaq", "считать", "I can count to ten!"]
  ],
  grammar: {
    t: "Can you…? Yes, I can. / No, I can't.",
    rule: {
      en: "Question: Can you write? Short answers: Yes, I can. / No, I can't. Don't repeat the verb in the short answer.",
      az: "Sual: Can you write? Qısa cavablar: Yes, I can. / No, I can't. Qısa cavabda feili təkrar etmirik.",
      ru: "Вопрос: Can you write? Краткие ответы: Yes, I can. / No, I can't. В кратком ответе глагол не повторяем."
    },
    ex: ["Can you write, Pixel?", "No, I can't write.", "But I can count to ten!"],
    qs: [
      ["No, I ____ write.", ["can't", "can", "am not"], "Pixel can't write. Can't = cannot.", { "t": "gap", "tr": { "az": "Pixel yaza bilmir: can't. Can't = cannot.", "ru": "Пиксель не умеет писать: can't. Can't = cannot." } }],
      ["Can you to write, Pixel?", ["Can you write, Pixel?", "Can you writing, Pixel?", "Do you can write, Pixel?"], "After can: no to. Can you write?", { "t": "fix", "alt": [], "tr": { "az": "Can-dan sonra to olmur: Can you write?", "ru": "После can нет to: Can you write?" } }],
      ["\"Can you count to ten?\" \"Yes, I ___.\"", ["can", "do", "am"], "Short answer: Yes, I can.", { "tr": { "az": "Qısa cavab: Yes, I can.", "ru": "Краткий ответ: Yes, I can." } }]
    ]
  },
  dict: ["The teacher, Miss Nigar, smiles.", "Aylin has got a pencil.", "But I can count to ten!"],
  speak: ["Can you write, Pixel?", "No, I can't write.", "I can count to ten!", "Pixel goes to school with Aylin."]
},
/* 5 — In the Park */
{
  vocab: [
    ["sunny", "günəşli", "солнечно", "It's sunny, but it's cold."],
    ["cold", "soyuq", "холодно", "It's cold and windy."],
    ["windy", "küləkli", "ветрено", "Today it is very windy."],
    ["coat", "palto", "пальто", "Aylin is wearing a red coat."],
    ["hat", "papaq", "шапка", "She is wearing a hat."],
    ["jacket", "gödəkçə", "куртка", "Murad is wearing a jacket and jeans."],
    ["rain", "yağış, yağmaq", "дождь, идти (о дожде)", "Then it starts to rain."],
    ["umbrella", "çətir", "зонтик", "Where is my umbrella?"]
  ],
  grammar: {
    t: "Present Continuous: is wearing",
    rule: {
      en: "For what someone is wearing now: is / are + wearing: Aylin is wearing a red coat. Murad is wearing jeans.",
      az: "İndi kimin nə geyindiyini demək üçün: is / are + wearing: Aylin is wearing a red coat. Murad is wearing jeans.",
      ru: "Чтобы сказать, во что кто-то одет сейчас: is / are + wearing: Aylin is wearing a red coat. Murad is wearing jeans."
    },
    ex: ["Aylin is wearing a red coat and a hat.", "Murad is wearing a jacket and jeans.", "I am wearing my fur!"],
    qs: [
      ["Murad ____ wearing a jacket.", ["is", "are", "am"], "He → is wearing.", { "t": "gap", "tr": { "az": "He → is wearing.", "ru": "He → is wearing." } }],
      ["Aylin is wear a red coat.", ["Aylin is wearing a red coat.", "Aylin is wears a red coat.", "Aylin wearing a red coat."], "is + wearing (-ing).", { "t": "fix", "alt": [], "tr": { "az": "is + wearing (-ing).", "ru": "is + wearing (-ing)." } }],
      ["Which sentence is about now?", ["Aylin is wearing a hat.", "Aylin wears a hat every winter.", "Aylin has got a hat."], "is wearing = now.", { "tr": { "az": "is wearing = indi.", "ru": "is wearing = сейчас." } }]
    ]
  },
  dict: ["Pixel doesn't need clothes.", "Then it starts to rain.", "Murad is wearing a jacket and jeans."],
  speak: ["It's sunny, but it's cold.", "I have got my fur!", "Quick! Where is my umbrella?", "The children go to the park."]
},
/* 6 — The Birthday Party */
{
  vocab: [
    ["birthday", "ad günü", "день рождения", "Today is Aylin's birthday."],
    ["cake", "tort", "торт", "There is a big chocolate cake."],
    ["candle", "şam", "свеча", "There are nine candles on it."],
    ["sandwich", "sendviç", "бутерброд", "There are sandwiches and juice."],
    ["juice", "şirə", "сок", "There is juice on the table."],
    ["give", "vermək, bağışlamaq", "давать, дарить", "Grandma gives Aylin a book."],
    ["book", "kitab", "книга", "Grandma gives her a book."],
    ["sing", "oxumaq (mahnı)", "петь", "Pixel sings Happy Birthday very loudly!"]
  ],
  grammar: {
    t: "There is / There are",
    rule: {
      en: "There is + one thing: There is a big cake. There are + many things: There are nine candles.",
      az: "There is + bir əşya: There is a big cake. There are + çox əşya: There are nine candles.",
      ru: "There is + один предмет: There is a big cake. There are + много предметов: There are nine candles."
    },
    ex: ["There is a big chocolate cake on the table.", "There are nine candles on it.", "There are sandwiches, juice and lots of fruit."],
    qs: [
      ["There ____ nine candles on the cake.", ["are", "is", "am"], "Many things → there are.", { "t": "gap", "tr": { "az": "Çox əşya → there are.", "ru": "Много предметов → there are." } }],
      ["There are a big cake on the table.", ["There is a big cake on the table.", "There am a big cake on the table.", "There a big cake on the table."], "One cake → there is.", { "t": "fix", "alt": [], "tr": { "az": "Bir tort → there is.", "ru": "Один торт → there is." } }],
      ["Which sentence is correct?", ["There are sandwiches on the table.", "There is sandwiches on the table.", "There am sandwiches on the table."], "Sandwiches = many → there are.", { "tr": { "az": "Sandwiches = çox → there are.", "ru": "Sandwiches = много → there are." } }]
    ]
  },
  dict: ["Today is Aylin's birthday.", "Grandma gives Aylin a book.", "Murad gives her a new kite."],
  speak: ["She is nine!", "There is a big chocolate cake.", "There are nine candles on it.", "He sings Happy Birthday very loudly!"]
}
];
