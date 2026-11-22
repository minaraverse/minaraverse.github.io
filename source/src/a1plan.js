/* ===== A1 by the Safiverse A1–C2 programme: 30 units × 12 words, stages A1.1 · A1.2 · A1.3 =====
   each unit = 3 word lessons (4 words each) · "Real life" (chat) · "Boss" (no hints)
   x: en | az | ru | emoji | example with *word* | example AZ | example RU
   f: grammar gap — sentence with ___ | answer | wrong,wrong
   chat: [bot EN, bot AZ, bot RU, [right reply, wrong, wrong]]
   boss: questions said aloud — [question, accepted words (regex), sample answer]
   emo: emoji riddle [emoji chain, answer] · nat: a native phrase [EN, AZ, RU] · can: "Now you can…" */
const A1_PLAN = [
/* ---------- A1.1 ---------- */
{ e: "👋", t: ["Hello and goodbye", "Salam və sağ ol", "Привет и пока"],
  g: ["Hello / Hi — salam. Goodbye / Bye — sağ ol. Səhər «Good morning», axşam «Good evening» deyirik.", "Hello / Hi — привет. Goodbye / Bye — пока. Утром «Good morning», вечером «Good evening»."],
  can: ["greet people and say goodbye", "insanlarla salamlaşıb sağollaşmaq", "здороваться и прощаться"],
  nat: ["See you later!", "Sonra görüşərik!", "Увидимся!"],
  x: `
hello | salam | привет | 👋 | *Hello*, I am Emma. | Salam, mən Emmayam. | Привет, я Эмма.
hi | salam | привет | 🙋 | *Hi*, Max! | Salam, Maks! | Привет, Макс!
goodbye | sağ ol, əlvida | до свидания | 👋 | *Goodbye*, Mrs White! | Sağ olun, xanım Uayt! | До свидания, миссис Уайт!
bye | sağ ol | пока | 🖐️ | *Bye*, see you tomorrow! | Sağ ol, sabah görüşərik! | Пока, увидимся завтра!
good morning | sabahınız xeyir | доброе утро | 🌅 | *Good morning*, Dad! | Sabahın xeyir, ata! | Доброе утро, папа!
good evening | axşamınız xeyir | добрый вечер | 🌆 | *Good evening*, everyone! | Hamıya axşamınız xeyir! | Всем добрый вечер!
good night | gecəniz xeyrə | спокойной ночи | 🌙 | *Good night*, Mum. | Gecən xeyrə, ana. | Спокойной ночи, мама.
thank you | təşəkkür edirəm | спасибо | 🙏 | *Thank you* for the tea! | Çay üçün təşəkkür edirəm! | Спасибо за чай!
please | zəhmət olmasa | пожалуйста | 🥺 | Water, *please*. | Su, zəhmət olmasa. | Воды, пожалуйста.
sorry | bağışla | извини | 😔 | *Sorry*, I am late. | Bağışla, gecikdim. | Извини, я опоздал.
yes | bəli | да | ✅ | *Yes*, I am fine. | Bəli, yaxşıyam. | Да, у меня всё хорошо.
no | xeyr | нет | ❌ | *No*, thank you. | Xeyr, sağ ol. | Нет, спасибо.`,
  f: `___ morning, Anna! | Good | Nice, Fine
Thank ___ very much! | you | your, me`,
  chat: [["Hi! I'm Bella. 👋", "Salam! Mən Bellayam. 👋", "Привет! Я Белла. 👋", ["Hi, Bella! I'm Ali.", "Goodbye, Bella!", "Good night, Bella!"]],
    ["How are you?", "Necəsən?", "Как дела?", ["I'm fine, thank you!", "Yes, please.", "Sorry, no."]],
    ["Nice! See you later!", "Əla! Sonra görüşərik!", "Отлично! Увидимся!", ["Bye! See you!", "Good morning!", "Thank you, yes."]]],
  boss: { t: ["Your new neighbour meets you on the stairs.", "Pilləkəndə yeni qonşunla rastlaşırsan.", "Ты встречаешь нового соседа на лестнице."],
    q: [["Good morning!", "morning|hello|hi", "Good morning!"], ["How are you?", "fine|good|ok|great|well", "I'm fine, thank you."], ["Would you like some tea?", "yes|no|please|thank", "Yes, please."], ["Here you are.", "thank", "Thank you!"], ["Goodbye! See you!", "bye|goodbye|see you", "Bye! See you!"]] },
  emo: [["🌙 + 😴", "good night"], ["☀️ + 🌅", "good morning"]] },

{ e: "👨‍👩‍👧", t: ["My family", "Mənim ailəm", "Моя семья"],
  g: ["Mother/mum, father/dad, sister, brother. «my» — mənim: my mum, my brother.", "Mother/mum, father/dad, sister, brother. «my» — мой: my mum, my brother."],
  can: ["talk about your family", "ailən haqqında danışmaq", "рассказывать о своей семье"],
  nat: ["This is my mum.", "Bu, mənim anamdır.", "Это моя мама."],
  x: `
family | ailə | семья | 👨‍👩‍👧 | I love my *family*. | Ailəmi sevirəm. | Я люблю свою семью.
mother | ana | мать | 👩 | My *mother* is a teacher. | Anam müəllimdir. | Моя мама — учительница.
father | ata | отец | 👨 | My *father* is tall. | Atam hündürdür. | Мой папа высокий.
mum | ana | мама | 🤱 | *Mum*, where is my bag? | Ana, çantam haradadır? | Мама, где моя сумка?
dad | ata | папа | 🧔 | *Dad* is at work. | Atam işdədir. | Папа на работе.
sister | bacı | сестра | 👧 | My *sister* is ten. | Bacım on yaşındadır. | Моей сестре десять лет.
brother | qardaş | брат | 👦 | I have one *brother*. | Bir qardaşım var. | У меня один брат.
baby | körpə | малыш | 👶 | The *baby* is sleeping. | Körpə yatır. | Малыш спит.
grandmother | nənə | бабушка | 👵 | My *grandmother* makes cakes. | Nənəm tort bişirir. | Моя бабушка печёт торты.
grandfather | baba | дедушка | 👴 | My *grandfather* is seventy. | Babam yetmiş yaşındadır. | Моему дедушке семьдесят лет.
son | oğul | сын | 👦 | Their *son* is a student. | Onların oğlu tələbədir. | Их сын — студент.
daughter | qız (övlad) | дочь | 👧 | Our *daughter* is two. | Qızımız iki yaşındadır. | Нашей дочке два года.`,
  f: `This is ___ mum. | my | I, me
She ___ my sister. | is | am, are`,
  chat: [["Who is this in the photo? 📷", "Şəkildəki kimdir? 📷", "Кто это на фото? 📷", ["This is my brother.", "I am brother.", "Yes, brother."]],
    ["Is he older or younger?", "O, böyükdür, yoxsa kiçik?", "Он старше или младше?", ["He is older. He is 15.", "He is a bag.", "Thank you, no."]],
    ["And who is the lady?", "Bəs o xanım kimdir?", "А кто эта женщина?", ["She is my mum.", "He is my mum.", "She are my mum."]]],
  boss: { t: ["A new friend asks about your family.", "Yeni dostun ailən haqqında soruşur.", "Новый друг спрашивает о твоей семье."],
    q: [["Do you have a brother or a sister?", "brother|sister|no|yes", "Yes, I have a sister."], ["What is your mum's name?", "name|is", "Her name is Leyla."], ["Is your family big or small?", "big|small", "My family is small."], ["Who is your favourite person?", "my|mum|dad|grand|sister|brother", "My grandmother."], ["Do you have a baby in your family?", "yes|no|baby", "No, we don't."]] },
  emo: [["👵 + 👴", "grandparents"], ["👨 + 👩 + 👧", "family"]] },

{ e: "🔢", t: ["Numbers and prices", "Rəqəmlər və qiymətlər", "Числа и цены"],
  g: ["How much is it? — Bu neçəyədir? Cavab: It's five manats. 1–10: one, two, three…", "How much is it? — Сколько это стоит? Ответ: It's five manats. 1–10: one, two, three…"],
  can: ["count and ask how much something costs", "saymaq və bir şeyin qiymətini soruşmaq", "считать и спрашивать, сколько стоит"],
  nat: ["How much is it?", "Bu neçəyədir?", "Сколько стоит?"],
  x: `
one | bir | один | 1️⃣ | I have *one* cat. | Bir pişiyim var. | У меня одна кошка.
two | iki | два | 2️⃣ | *Two* coffees, please. | İki qəhvə, zəhmət olmasa. | Два кофе, пожалуйста.
three | üç | три | 3️⃣ | I have *three* sisters. | Üç bacım var. | У меня три сестры.
five | beş | пять | 5️⃣ | It's *five* manats. | Beş manatdır. | Это пять манатов.
ten | on | десять | 🔟 | My brother is *ten*. | Qardaşım on yaşındadır. | Моему брату десять.
twenty | iyirmi | двадцать | 🔢 | This bag is *twenty* manats. | Bu çanta iyirmi manatdır. | Эта сумка стоит двадцать манатов.
hundred | yüz | сто | 💯 | One *hundred* people are here. | Burada yüz nəfər var. | Здесь сто человек.
how much | neçə (qiymət) | сколько (стоит) | 💰 | *How much* is the cake? | Tort neçəyədir? | Сколько стоит торт?
price | qiymət | цена | 🏷️ | The *price* is good. | Qiymət yaxşıdır. | Цена хорошая.
cheap | ucuz | дешёвый | 🪙 | This phone is *cheap*. | Bu telefon ucuzdur. | Этот телефон дешёвый.
expensive | bahalı | дорогой | 💎 | That car is *expensive*. | O maşın bahalıdır. | Та машина дорогая.
money | pul | деньги | 💵 | I have no *money*. | Pulum yoxdur. | У меня нет денег.`,
  f: `How ___ is it? | much | many, money
It ___ ten manats. | is | are, am`,
  chat: [["Hello! Can I help you? 🛍️", "Salam! Kömək edə bilərəm? 🛍️", "Здравствуйте! Чем помочь? 🛍️", ["How much is this bag?", "How old is this bag?", "Where is this bag?"]],
    ["It's twenty manats.", "İyirmi manatdır.", "Двадцать манатов.", ["Oh, it's expensive!", "Oh, it's a cat!", "Good night!"]],
    ["This one is ten manats.", "Bu isə on manatdır.", "А эта — десять манатов.", ["Great! I'll take it.", "Sorry, I am ten.", "Yes, I am cheap."]]],
  boss: { t: ["You are at a market. The seller talks to you.", "Bazardasan. Satıcı səninlə danışır.", "Ты на рынке. Продавец говорит с тобой."],
    q: [["Hello! What would you like?", "apple|banana|bread|water|like|want|please", "Three apples, please."], ["How many?", "one|two|three|four|five|six|seven|eight|nine|ten", "Two, please."], ["Anything else?", "no|yes|thank|please", "No, thank you."], ["That's five manats.", "here|ok|thank|five", "Here you are."], ["Thank you! Goodbye!", "bye|goodbye|thank", "Thank you! Bye!"]] },
  emo: [["💰 + ❓", "how much"], ["💯", "hundred"]] },

{ e: "🍎", t: ["Food and drinks", "Yemək və içkilər", "Еда и напитки"],
  g: ["I like… — xoşlayıram. I don't like… — xoşlamıram. a / an: an apple, a banana.", "I like… — мне нравится. I don't like… — не нравится. a / an: an apple, a banana."],
  can: ["say what you like to eat and drink", "nə yeyib-içməyi sevdiyini demək", "говорить, что ты любишь есть и пить"],
  nat: ["I'm starving!", "Acından ölürəm!", "Умираю с голоду!"],
  x: `
bread | çörək | хлеб | 🍞 | I buy *bread* every day. | Hər gün çörək alıram. | Я покупаю хлеб каждый день.
water | su | вода | 💧 | Can I have some *water*? | Bir az su ala bilərəm? | Можно немного воды?
milk | süd | молоко | 🥛 | The cat likes *milk*. | Pişik südü sevir. | Кошка любит молоко.
tea | çay | чай | 🍵 | We drink *tea* with lemon. | Limonlu çay içirik. | Мы пьём чай с лимоном.
coffee | qəhvə | кофе | ☕ | My dad likes black *coffee*. | Atam qara qəhvəni sevir. | Мой папа любит чёрный кофе.
apple | alma | яблоко | 🍎 | An *apple* a day is good. | Gündə bir alma faydalıdır. | Яблоко в день полезно.
banana | banan | банан | 🍌 | The monkey has a *banana*. | Meymunun bananı var. | У обезьяны банан.
egg | yumurta | яйцо | 🥚 | I eat an *egg* for breakfast. | Səhər yeməyində yumurta yeyirəm. | На завтрак я ем яйцо.
cheese | pendir | сыр | 🧀 | I like bread and *cheese*. | Çörək və pendiri xoşlayıram. | Я люблю хлеб с сыром.
chicken | toyuq | курица | 🍗 | *Chicken* with rice, please. | Düyü ilə toyuq, zəhmət olmasa. | Курицу с рисом, пожалуйста.
juice | şirə | сок | 🧃 | Orange *juice* is my favourite. | Portağal şirəsi mənim sevimlimdir. | Апельсиновый сок — мой любимый.
hungry | ac | голодный | 😋 | I am very *hungry*! | Çox acam! | Я очень голоден!`,
  f: `I ___ like milk. | don't | doesn't, not
I eat ___ apple every day. | an | a, the`,
  chat: [["I'm hungry! 😋 Are you?", "Acam! 😋 Sən də?", "Я голоден! 😋 А ты?", ["Yes, I'm hungry too!", "Yes, I'm a banana.", "No, I'm tea."]],
    ["What do you want to eat?", "Nə yemək istəyirsən?", "Что ты хочешь съесть?", ["Chicken and bread.", "Coffee is a dog.", "I am chicken."]],
    ["And to drink?", "Bəs içmək üçün?", "А попить?", ["Orange juice, please.", "Bread, please.", "Yes, cheese."]]],
  boss: { t: ["Your friend's mum asks what you want for dinner.", "Dostunun anası şam yeməyinə nə istədiyini soruşur.", "Мама друга спрашивает, что ты хочешь на ужин."],
    q: [["Are you hungry?", "yes|no|hungry", "Yes, I am."], ["Do you like chicken?", "yes|no|like", "Yes, I like chicken."], ["Do you want bread or rice?", "bread|rice", "Bread, please."], ["What do you want to drink?", "water|juice|tea|milk|coffee", "Water, please."], ["Do you like cheese?", "yes|no|like", "No, I don't."]] },
  emo: [["🍊 + 🧃", "juice"], ["🐄 + 🥛", "milk"]] },

{ e: "🙋", t: ["Who I am", "Mən kiməm", "Кто я"],
  g: ["I am = I'm. My name is… Adını belə deyirsən. Yaşını: I am ten (years old).", "I am = I'm. My name is… Так ты называешь имя. Возраст: I am ten (years old)."],
  can: ["say who you are and how old you are", "kim olduğunu və neçə yaşında olduğunu demək", "рассказать, кто ты и сколько тебе лет"],
  nat: ["Nice to meet you!", "Tanış olmağıma şadam!", "Приятно познакомиться!"],
  x: `
name | ad | имя | 🏷️ | My *name* is Emma. | Mənim adım Emmadır. | Меня зовут Эмма.
I'm | mən ... | я | 🙋 | *I'm* eleven. | On bir yaşım var. | Мне одиннадцать.
boy | oğlan | мальчик | 👦 | Max is a *boy*. | Maks oğlandır. | Макс — мальчик.
girl | qız | девочка | 👧 | Bella is a *girl*. | Bella qızdır. | Белла — девочка.
man | kişi | мужчина | 👨 | The *man* is my teacher. | O kişi mənim müəllimimdir. | Этот мужчина — мой учитель.
woman | qadın | женщина | 👩 | The *woman* is a doctor. | O qadın həkimdir. | Эта женщина — врач.
student | tələbə, şagird | ученик, студент | 🧑‍🎓 | I am a *student*. | Mən tələbəyəm. | Я студент.
age | yaş | возраст | 🎂 | What is your *age*? | Yaşın neçədir? | Сколько тебе лет?
years old | yaşında | лет | 🎈 | I am ten *years old*. | On yaşım var. | Мне десять лет.
surname | soyad | фамилия | 🪪 | My *surname* is Aliyeva. | Soyadım Əliyevadır. | Моя фамилия Алиева.
nice to meet you | tanış olmağıma şadam | приятно познакомиться | 🤝 | Hi, John. *Nice to meet you*. | Salam, Con. Tanış olmağıma şadam. | Привет, Джон. Приятно познакомиться.
from | -dan, -dən | из | 📍 | I'm *from* Baku. | Mən Bakıdanam. | Я из Баку.`,
  f: `___ name is Ali. | My | I, Me
I ___ twelve years old. | am | is, are`,
  chat: [["Hi! What's your name? 🙂", "Salam! Adın nədir? 🙂", "Привет! Как тебя зовут? 🙂", ["My name is Leyla.", "I'm fine, thanks.", "Ten manats."]],
    ["Nice to meet you, Leyla! How old are you?", "Tanış olmağıma şadam, Leyla! Neçə yaşın var?", "Приятно познакомиться, Лейла! Сколько тебе лет?", ["I'm twelve.", "I'm from Baku.", "I'm a girl name."]],
    ["Where are you from?", "Haradansan?", "Откуда ты?", ["I'm from Ganja.", "I'm twelve.", "My name is from."]]],
  boss: { t: ["You start at a new English club. The teacher asks you.", "Yeni ingilis dili klubuna gəlmisən. Müəllim soruşur.", "Ты пришёл в новый английский клуб. Учитель спрашивает."],
    q: [["What's your name?", "name|i'm|i am", "My name is Ali."], ["How old are you?", "old|i'm|i am|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|teen|twenty|thirty|forty|fifty", "I'm fourteen."], ["Where are you from?", "from", "I'm from Baku."], ["Are you a student?", "yes|no|student", "Yes, I am."], ["Nice to meet you!", "nice|meet|too", "Nice to meet you too!"]] },
  emo: [["👦 + 👧", "boy and girl"], ["🎂 + ❓", "age"]] },

{ e: "🏠", t: ["Rooms", "Otaqlar", "Комнаты"],
  g: ["There is a… — …var (bir şey). in the kitchen — mətbəxdə. Where is…? — … haradadır?", "There is a… — есть (один). in the kitchen — на кухне. Where is…? — Где…?"],
  can: ["name the rooms in your home", "evindəki otaqları adlandırmaq", "называть комнаты в доме"],
  nat: ["Make yourself at home!", "Özünü evindəki kimi hiss et!", "Чувствуй себя как дома!"],
  x: `
house | ev | дом | 🏠 | Our *house* is big. | Evimiz böyükdür. | Наш дом большой.
flat | mənzil | квартира | 🏢 | We live in a *flat*. | Biz mənzildə yaşayırıq. | Мы живём в квартире.
room | otaq | комната | 🚪 | My *room* is small. | Otağım kiçikdir. | Моя комната маленькая.
kitchen | mətbəx | кухня | 🍳 | Mum is in the *kitchen*. | Anam mətbəxdədir. | Мама на кухне.
bedroom | yataq otağı | спальня | 🛏️ | The *bedroom* is quiet. | Yataq otağı sakitdir. | В спальне тихо.
bathroom | hamam otağı | ванная | 🛁 | The *bathroom* is on the left. | Hamam otağı soldadır. | Ванная слева.
living room | qonaq otağı | гостиная | 🛋️ | We watch TV in the *living room*. | Qonaq otağında televizora baxırıq. | Мы смотрим телевизор в гостиной.
garden | bağ, həyət | сад | 🌳 | The dog is in the *garden*. | İt həyətdədir. | Собака в саду.
door | qapı | дверь | 🚪 | Close the *door*, please. | Qapını bağla, zəhmət olmasa. | Закрой дверь, пожалуйста.
window | pəncərə | окно | 🪟 | Open the *window*! | Pəncərəni aç! | Открой окно!
balcony | eyvan | балкон | 🌇 | We have a big *balcony*. | Böyük eyvanımız var. | У нас большой балкон.
stairs | pilləkən | лестница | 🪜 | The *stairs* are here. | Pilləkən buradadır. | Лестница здесь.`,
  f: `There ___ a garden. | is | are, am
The bed is ___ the bedroom. | in | on, at`,
  chat: [["Welcome to my new flat! 🏠", "Yeni mənzilimə xoş gəldin! 🏠", "Добро пожаловать в мою новую квартиру! 🏠", ["Wow, it's beautiful!", "Wow, it's hungry!", "Goodbye, flat!"]],
    ["This is the living room.", "Bu, qonaq otağıdır.", "Это гостиная.", ["It's big! Where is the kitchen?", "It's a banana.", "I'm the kitchen."]],
    ["The kitchen is on the left.", "Mətbəx soldadır.", "Кухня слева.", ["Thanks! Can I see your room?", "Thanks! I'm the left.", "No, it's coffee."]]],
  boss: { t: ["A friend calls and asks about your home.", "Dostun zəng edib evin haqqında soruşur.", "Друг звонит и спрашивает о твоём доме."],
    q: [["Do you live in a house or a flat?", "house|flat", "I live in a flat."], ["How many rooms are there?", "one|two|three|four|five|six|room", "There are three rooms."], ["Is your room big?", "yes|no|big|small", "No, it's small."], ["Do you have a balcony?", "yes|no|balcony", "Yes, we have a balcony."], ["Where are you now?", "in|kitchen|room|bedroom|living|garden|home", "I'm in the kitchen."]] },
  emo: [["🛏️ + 🚪", "bedroom"], ["🍳 + 🚪", "kitchen"]] },

{ e: "👩‍⚕️", t: ["Jobs", "Peşələr", "Профессии"],
  g: ["She is a doctor. He is a teacher. Peşədən əvvəl «a / an»: an engineer.", "She is a doctor. He is a teacher. Перед профессией — «a / an»: an engineer."],
  can: ["say what people do", "insanların peşəsini demək", "говорить, кто кем работает"],
  nat: ["What do you do?", "Sən nə işləyirsən?", "Кем ты работаешь?"],
  x: `
job | iş, peşə | работа, профессия | 💼 | What is your *job*? | Sənin peşən nədir? | Кем ты работаешь?
teacher | müəllim | учитель | 👩‍🏫 | Mrs White is a *teacher*. | Xanım Uayt müəllimdir. | Миссис Уайт — учительница.
doctor | həkim | врач | 👩‍⚕️ | My aunt is a *doctor*. | Xalam həkimdir. | Моя тётя — врач.
nurse | tibb bacısı | медсестра | 🧑‍⚕️ | The *nurse* is kind. | Tibb bacısı mehribandır. | Медсестра добрая.
driver | sürücü | водитель | 🚕 | He is a taxi *driver*. | O, taksi sürücüsüdür. | Он таксист.
cook | aşpaz | повар | 👨‍🍳 | The *cook* makes pizza. | Aşpaz pizza bişirir. | Повар готовит пиццу.
engineer | mühəndis | инженер | 👷 | My dad is an *engineer*. | Atam mühəndisdir. | Мой папа — инженер.
police officer | polis | полицейский | 👮 | The *police officer* helps people. | Polis insanlara kömək edir. | Полицейский помогает людям.
farmer | fermer | фермер | 👨‍🌾 | The *farmer* has ten cows. | Fermerin on inəyi var. | У фермера десять коров.
shop assistant | satıcı | продавец | 🛍️ | The *shop assistant* is very nice. | Satıcı çox xoş adamdır. | Продавец очень приятный.
work | işləmək | работать | 🛠️ | I *work* in a bank. | Bankda işləyirəm. | Я работаю в банке.
hospital | xəstəxana | больница | 🏥 | She works in a *hospital*. | O, xəstəxanada işləyir. | Она работает в больнице.`,
  f: `He is ___ engineer. | an | a, the
She ___ in a hospital. | works | work, working`,
  chat: [["Hi! What do you do? 💼", "Salam! Nə işləyirsən? 💼", "Привет! Кем ты работаешь? 💼", ["I'm a student.", "I'm a hospital.", "I'm work."]],
    ["And your mum? What's her job?", "Bəs anan? Onun peşəsi nədir?", "А твоя мама? Кем она работает?", ["She is a nurse.", "He is a nurse.", "She are a nurse."]],
    ["Where does she work?", "O, harada işləyir?", "Где она работает?", ["She works in a hospital.", "She works a hospital.", "She is a work."]]],
  boss: { t: ["At a party, a guest asks about jobs.", "Qonaqlıqda bir qonaq peşələr haqqında soruşur.", "На вечеринке гость спрашивает о работе."],
    q: [["What do you do?", "student|work|teacher|doctor|engineer|nurse|driver|i'm|i am", "I'm a student."], ["What does your dad do?", "he|is|driver|doctor|engineer|teacher|work", "He's an engineer."], ["Where does he work?", "in|at|work|office|hospital|bank|school", "He works in an office."], ["Do you like your job?", "yes|no|like", "Yes, I do."], ["Nice! Is it a good job?", "yes|no|good", "Yes, it's a good job."]] },
  emo: [["🚕 + 👨", "driver"], ["🏥 + 👩‍⚕️", "doctor"]] },

{ e: "🖐️", t: ["The body", "Bədən", "Тело"],
  g: ["Çox: one hand — two hands, one foot — two feet, one tooth — two teeth.", "Множественное: one hand — two hands, one foot — two feet, one tooth — two teeth."],
  can: ["name the parts of the body", "bədən üzvlərini adlandırmaq", "называть части тела"],
  nat: ["Head, shoulders, knees and toes!", "Baş, çiyinlər, dizlər və barmaqlar!", "Голова, плечи, колени и пальцы!"],
  x: `
head | baş | голова | 🗣️ | My *head* is cold. | Başım üşüyür. | У меня мёрзнет голова.
eye | göz | глаз | 👁️ | The baby has blue *eyes*. | Körpənin gözləri göydür. | У малыша голубые глаза.
ear | qulaq | ухо | 👂 | The rabbit has long *ears*. | Dovşanın qulaqları uzundur. | У кролика длинные уши.
nose | burun | нос | 👃 | The clown has a red *nose*. | Təlxəyin burnu qırmızıdır. | У клоуна красный нос.
mouth | ağız | рот | 👄 | Open your *mouth*, please. | Ağzını aç, zəhmət olmasa. | Открой рот, пожалуйста.
hand | əl | рука (кисть) | ✋ | Wash your *hands*! | Əllərini yu! | Помой руки!
arm | qol | рука | 💪 | My *arm* hurts. | Qolum ağrıyır. | У меня болит рука.
leg | ayaq (bütöv) | нога | 🦵 | A dog has four *legs*. | İtin dörd ayağı var. | У собаки четыре лапы.
foot | ayaq (pəncə) | ступня | 🦶 | My left *foot* is cold. | Sol ayağım üşüyür. | У меня мёрзнет левая нога.
tooth | diş | зуб | 🦷 | The baby has one *tooth*. | Körpənin bir dişi var. | У малыша один зуб.
hair | saç | волосы | 💇 | She has long *hair*. | Onun saçı uzundur. | У неё длинные волосы.
face | üz | лицо | 🙂 | Wash your *face* in the morning. | Səhər üzünü yu. | Умывай лицо утром.`,
  f: `I have two ___. | feet | foots, foot
She has long ___. | hair | hairs, a hair`,
  chat: [["Let's play a game! Touch your nose! 👃", "Gəl oyun oynayaq! Burnuna toxun! 👃", "Давай поиграем! Дотронься до носа! 👃", ["OK! This is my nose.", "OK! This is my foot.", "Thanks, I'm a nose."]],
    ["Now touch your ears!", "İndi qulaqlarına toxun!", "Теперь дотронься до ушей!", ["Here are my ears!", "Here is my ears!", "Here are my eyes!"]],
    ["Great! How many fingers do you have?", "Əla! Neçə barmağın var?", "Отлично! Сколько у тебя пальцев?", ["I have ten fingers.", "I have ten feet.", "I am ten fingers."]]],
  boss: { t: ["You draw a monster with a friend. He asks questions.", "Dostunla canavar çəkirsən. O, suallar verir.", "Ты рисуешь монстра с другом. Он задаёт вопросы."],
    q: [["How many eyes does it have?", "one|two|three|four|five|six|eye", "It has three eyes."], ["What colour is its hair?", "red|blue|green|black|white|yellow|pink|brown|purple|orange|grey", "Its hair is green."], ["Does it have a big nose?", "yes|no|nose|big|small", "Yes, a very big nose."], ["How many legs does it have?", "one|two|three|four|five|six|leg", "It has four legs."], ["Is it happy or sad?", "happy|sad", "It's happy!"]] },
  emo: [["👀", "eyes"], ["🦷 + 🪥", "tooth"]] },

{ e: "🏙️", t: ["Places in the city", "Şəhərdə yerlər", "Места в городе"],
  g: ["There is a park. There are two shops. Sual: Is there a bank near here?", "There is a park. There are two shops. Вопрос: Is there a bank near here?"],
  can: ["name places in your city", "şəhərindəki yerləri adlandırmaq", "называть места в городе"],
  nat: ["Is there a … near here?", "Yaxınlıqda … var?", "Здесь поблизости есть …?"],
  x: `
city | şəhər | город | 🏙️ | Baku is a big *city*. | Bakı böyük şəhərdir. | Баку — большой город.
street | küçə | улица | 🛣️ | I live on this *street*. | Bu küçədə yaşayıram. | Я живу на этой улице.
shop | mağaza | магазин | 🏪 | The *shop* is open. | Mağaza açıqdır. | Магазин открыт.
park | park | парк | 🌳 | We play in the *park*. | Parkda oynayırıq. | Мы играем в парке.
school | məktəb | школа | 🏫 | My *school* is near. | Məktəbim yaxındır. | Моя школа рядом.
bank | bank | банк | 🏦 | The *bank* is closed today. | Bank bu gün bağlıdır. | Банк сегодня закрыт.
café | kafe | кафе | ☕ | Let's meet at the *café*. | Kafedə görüşək. | Давай встретимся в кафе.
cinema | kinoteatr | кинотеатр | 🎬 | The *cinema* is new. | Kinoteatr yenidir. | Кинотеатр новый.
museum | muzey | музей | 🏛️ | The *museum* is very old. | Muzey çox köhnədir. | Музей очень старый.
library | kitabxana | библиотека | 📚 | I read books in the *library*. | Kitabxanada kitab oxuyuram. | Я читаю книги в библиотеке.
pharmacy | aptek | аптека | 💊 | Is there a *pharmacy* near here? | Yaxınlıqda aptek var? | Здесь есть аптека поблизости?
near | yaxın | рядом | 📍 | The park is *near* my house. | Park evimə yaxındır. | Парк рядом с моим домом.`,
  f: `There ___ two cafés on my street. | are | is, am
Is there ___ bank near here? | a | an, the`,
  chat: [["Hi! I'm new here. 🙂 Is there a park near here?", "Salam! Buraya təzə gəlmişəm. 🙂 Yaxınlıqda park var?", "Привет! Я тут новенький. 🙂 Есть рядом парк?", ["Yes, there is a big park.", "Yes, there are a park.", "No, I'm a park."]],
    ["Great! And a café?", "Əla! Bəs kafe?", "Отлично! А кафе?", ["There is a café near the bank.", "There is a café in my nose.", "Café is my sister."]],
    ["Thanks! Is the museum far?", "Sağ ol! Muzey uzaqdır?", "Спасибо! Музей далеко?", ["No, it's near.", "No, it's hungry.", "Yes, it's a girl."]]],
  boss: { t: ["A tourist stops you on the street.", "Küçədə bir turist səni saxlayır.", "Турист останавливает тебя на улице."],
    q: [["Excuse me, is there a café near here?", "yes|no|there|café|cafe", "Yes, there is a café on this street."], ["Is the museum open today?", "yes|no|open|closed", "Yes, it's open."], ["Where can I buy medicine?", "pharmacy", "In the pharmacy."], ["Is there a park near here?", "yes|no|park", "Yes, there is a big park."], ["Thank you very much!", "welcome|ok|bye|no problem|problem", "You're welcome!"]] },
  emo: [["📚 + 🏛️", "library"], ["🎬 + 🍿", "cinema"]] },

{ e: "⚽", t: ["Hobbies", "Hobbilər", "Хобби"],
  g: ["I like + -ing: I like reading. I can + feil: I can swim.", "I like + -ing: I like reading. I can + глагол: I can swim."],
  can: ["talk about what you like doing", "nə etməyi sevdiyini demək", "рассказывать, что ты любишь делать"],
  nat: ["I'm really into music.", "Musiqiyə çox marağım var.", "Я очень увлекаюсь музыкой."],
  x: `
hobby | hobbi | хобби | 🎨 | My *hobby* is drawing. | Hobbim rəsm çəkməkdir. | Моё хобби — рисование.
play | oynamaq | играть | 🎮 | We *play* football on Sunday. | Bazar günü futbol oynayırıq. | Мы играем в футбол в воскресенье.
football | futbol | футбол | ⚽ | Max likes *football*. | Maks futbolu sevir. | Макс любит футбол.
music | musiqi | музыка | 🎵 | I listen to *music* every day. | Hər gün musiqi dinləyirəm. | Я слушаю музыку каждый день.
read | oxumaq | читать | 📖 | I *read* books at night. | Gecə kitab oxuyuram. | Я читаю книги вечером.
draw | rəsm çəkmək | рисовать | ✏️ | Bella can *draw* cats. | Bella pişik çəkə bilir. | Белла умеет рисовать кошек.
sing | mahnı oxumaq | петь | 🎤 | She likes to *sing*. | O, mahnı oxumağı sevir. | Она любит петь.
dance | rəqs etmək | танцевать | 💃 | Let's *dance*! | Gəl rəqs edək! | Давай потанцуем!
swim | üzmək | плавать | 🏊 | I can *swim*. | Üzə bilirəm. | Я умею плавать.
games | oyunlar | игры | 🎲 | We play *games* on Friday. | Cümə günü oyun oynayırıq. | По пятницам мы играем в игры.
guitar | gitara | гитара | 🎸 | John plays the *guitar*. | Con gitara çalır. | Джон играет на гитаре.
chess | şahmat | шахматы | ♟️ | Grandpa plays *chess* with me. | Babam mənimlə şahmat oynayır. | Дедушка играет со мной в шахматы.`,
  f: `I like ___ books. | reading | read, reads
She can ___ well. | swim | swims, swimming`,
  chat: [["What do you do in your free time? 🎨", "Boş vaxtında nə edirsən? 🎨", "Что ты делаешь в свободное время? 🎨", ["I play football and read.", "I am free time.", "I hungry."]],
    ["Cool! Can you play the guitar?", "Əla! Gitara çala bilirsən?", "Круто! Ты умеешь играть на гитаре?", ["No, I can't. But I can sing!", "No, I can't guitar me.", "Yes, I'm a guitar."]],
    ["Let's play chess on Saturday!", "Şənbə günü şahmat oynayaq!", "Давай сыграем в шахматы в субботу!", ["Great idea! See you!", "Great idea! Good night, chess!", "Sorry, I am Saturday."]]],
  boss: { t: ["A new classmate wants to be friends.", "Yeni sinif yoldaşın dost olmaq istəyir.", "Новый одноклассник хочет подружиться."],
    q: [["What's your hobby?", "play|read|draw|sing|dance|swim|music|football|chess|games|hobby", "My hobby is drawing."], ["Can you swim?", "yes|no|can", "Yes, I can."], ["Do you like music?", "yes|no|like", "Yes, I love music."], ["What games do you play?", "play|football|chess|games|tennis|computer", "I play chess."], ["Let's play together on Sunday!", "ok|yes|great|good|sure|cool", "OK, great!"]] },
  emo: [["🎸 + 🎵", "guitar"], ["♟️ + 👑", "chess"]] },

/* ---------- A1.2 ---------- */
{ e: "🌍", t: ["Countries and languages", "Ölkələr və dillər", "Страны и языки"],
  g: ["Ölkə və dil böyük hərflə: Azerbaijan, English, Russian. Where are you from? — I'm from…", "Страны и языки — с большой буквы: Azerbaijan, English, Russian. Where are you from? — I'm from…"],
  can: ["say where you are from and what languages you speak", "haradan olduğunu və hansı dillərdə danışdığını demək", "сказать, откуда ты и на каких языках говоришь"],
  nat: ["Where are you from?", "Haralısan?", "Ты откуда?"],
  x: `
country | ölkə | страна | 🗺️ | What *country* are you from? | Hansı ölkədənsən? | Из какой ты страны?
language | dil | язык | 🗣️ | I speak one *language*. | Bir dildə danışıram. | Я говорю на одном языке.
English | ingilis dili | английский | 🇬🇧 | I'm learning *English*. | İngilis dilini öyrənirəm. | Я учу английский.
Russian | rus dili | русский | 🇷🇺 | My grandma speaks *Russian*. | Nənəm rusca danışır. | Моя бабушка говорит по-русски.
Azerbaijani | azərbaycan dili | азербайджанский | 🇦🇿 | We speak *Azerbaijani* at home. | Evdə azərbaycanca danışırıq. | Дома мы говорим по-азербайджански.
Turkish | türk dili | турецкий | 🇹🇷 | *Turkish* is easy for me. | Türk dili mənim üçün asandır. | Турецкий для меня лёгкий.
French | fransız dili | французский | 🇫🇷 | She speaks *French*. | O, fransızca danışır. | Она говорит по-французски.
speak | danışmaq | говорить | 💬 | I *speak* two languages. | İki dildə danışıram. | Я говорю на двух языках.
England | İngiltərə | Англия | 🏰 | London is in *England*. | London İngiltərədədir. | Лондон находится в Англии.
America | Amerika | Америка | 🗽 | My uncle lives in *America*. | Dayım Amerikada yaşayır. | Мой дядя живёт в Америке.
capital | paytaxt | столица | 🏛️ | Baku is the *capital* of Azerbaijan. | Bakı Azərbaycanın paytaxtıdır. | Баку — столица Азербайджана.
world | dünya | мир | 🌍 | I want to see the *world*. | Dünyanı görmək istəyirəm. | Я хочу увидеть мир.`,
  f: `I ___ English and Russian. | speak | speaks, speaking
Where ___ you from? | are | is, am`,
  chat: [["Hello! Where are you from? 🌍", "Salam! Haradansan? 🌍", "Привет! Откуда ты? 🌍", ["I'm from Azerbaijan.", "I'm from English.", "I'm Azerbaijani from."]],
    ["Cool! What languages do you speak?", "Maraqlıdır! Hansı dillərdə danışırsan?", "Круто! На каких языках ты говоришь?", ["Azerbaijani, Russian and a little English.", "I speak Azerbaijan.", "I'm a language."]],
    ["I'm from France. I speak French!", "Mən Fransadanam. Fransızca danışıram!", "Я из Франции. Я говорю по-французски!", ["Wow! Can you teach me?", "Wow! I'm France.", "No, you're English."]]],
  boss: { t: ["You meet a student from another country at a summer camp.", "Yay düşərgəsində başqa ölkədən gələn tələbə ilə tanış olursan.", "В летнем лагере ты знакомишься со студентом из другой страны."],
    q: [["Where are you from?", "from|azerbaijan|baku|russia|turkey|georgia", "I'm from Azerbaijan."], ["What is the capital of your country?", "baku|capital|is", "Baku."], ["What languages do you speak?", "speak|english|russian|azerbaijani|turkish|french|german", "I speak Azerbaijani and English."], ["Is English easy for you?", "yes|no|easy|difficult|hard", "No, it's difficult!"], ["Do you want to visit England?", "yes|no|want", "Yes, I do!"]] },
  emo: [["🇬🇧 + 🗣️", "English"], ["🌍", "world"]] },

{ e: "🧑", t: ["What people look like", "İnsanların xarici görünüşü", "Как выглядит человек"],
  g: ["She has long hair. He has blue eyes. «has» — he / she ilə, «have» — I / you / we / they ilə.", "She has long hair. He has blue eyes. «has» — с he / she, «have» — с I / you / we / they."],
  can: ["describe what a person looks like", "bir insanın xarici görünüşünü təsvir etmək", "описывать внешность человека"],
  nat: ["She looks just like her mum!", "O, eynilə anasına oxşayır!", "Она вылитая мама!"],
  x: `
tall | hündür | высокий | 🦒 | My brother is very *tall*. | Qardaşım çox hündürdür. | Мой брат очень высокий.
short | alçaq, qısa | низкий | 🐭 | My grandma is *short*. | Nənəm alçaqboydur. | Моя бабушка невысокая.
young | gənc | молодой | 🧒 | Our teacher is *young*. | Müəllimimiz gəncdir. | Наш учитель молодой.
old | yaşlı | пожилой, старый | 🧓 | The man is *old* but strong. | O kişi yaşlıdır, amma güclüdür. | Этот мужчина пожилой, но сильный.
beautiful | gözəl | красивый | 🌸 | Your mum is *beautiful*. | Anan gözəldir. | Твоя мама красивая.
long hair | uzun saç | длинные волосы | 💁‍♀️ | Bella has *long hair*. | Bellanın saçı uzundur. | У Беллы длинные волосы.
short hair | qısa saç | короткие волосы | 💇 | He has *short hair*. | Onun saçı qısadır. | У него короткие волосы.
blue eyes | göy gözlər | голубые глаза | 👁️ | The baby has *blue eyes*. | Körpənin gözləri göydür. | У малыша голубые глаза.
beard | saqqal | борода | 🧔 | Grandpa has a white *beard*. | Babamın ağ saqqalı var. | У дедушки белая борода.
glasses | eynək | очки | 👓 | My dad wears *glasses*. | Atam eynək taxır. | Мой папа носит очки.
smile | təbəssüm | улыбка | 😊 | She has a nice *smile*. | Onun gözəl təbəssümü var. | У неё красивая улыбка.
look like | oxşamaq | быть похожим | 🪞 | You *look like* your dad. | Sən atana oxşayırsan. | Ты похож на папу.`,
  f: `She ___ long hair. | has | have, is
They ___ blue eyes. | have | has, are`,
  chat: [["I'm at the café. 🙂 What do you look like?", "Kafedəyəm. 🙂 Necə görünürsən?", "Я в кафе. 🙂 Как ты выглядишь?", ["I'm tall and I have short hair.", "I'm a café.", "I have tall."]],
    ["Do you wear glasses?", "Eynək taxırsan?", "Ты носишь очки?", ["Yes, I have black glasses.", "Yes, I am glasses.", "No, I'm beard."]],
    ["I see you! You have a red bag!", "Səni görürəm! Qırmızı çantan var!", "Вижу тебя! У тебя красная сумка!", ["Yes, that's me! Hi!", "No, I'm a red.", "Yes, it's my eyes."]]],
  boss: { t: ["The police ask you to describe a man you saw.", "Polis gördüyün kişini təsvir etməyini xahiş edir.", "Полиция просит описать мужчину, которого ты видел."],
    q: [["Is he tall or short?", "tall|short", "He's tall."], ["Is he young or old?", "young|old", "He's young."], ["What colour is his hair?", "black|brown|white|grey|red|blond|yellow|hair", "He has black hair."], ["Does he have a beard?", "yes|no|beard", "Yes, he has a beard."], ["Does he wear glasses?", "yes|no|glasses", "No, he doesn't."]] },
  emo: [["👓 + 👨", "glasses"], ["🧔", "beard"]] },

{ e: "☕", t: ["At the café: ordering", "Kafedə: sifariş", "В кафе: заказ"],
  g: ["Nəzakətlə sifariş: I'd like a coffee, please. Can I have a tea, please?", "Вежливый заказ: I'd like a coffee, please. Can I have a tea, please?"],
  can: ["order food and drinks in a café", "kafedə yemək və içki sifariş etmək", "заказывать еду и напитки в кафе"],
  nat: ["Can I get the bill, please?", "Hesabı gətirə bilərsiniz?", "Можно счёт, пожалуйста?"],
  x: `
menu | menyu | меню | 📋 | Can I see the *menu*? | Menyuya baxa bilərəm? | Можно посмотреть меню?
waiter | ofisiant | официант | 🤵 | The *waiter* is very kind. | Ofisiant çox nəzakətlidir. | Официант очень вежливый.
order | sifariş etmək | заказывать | 🧾 | I want to *order* now. | İndi sifariş etmək istəyirəm. | Я хочу заказать сейчас.
I'd like | istərdim | я бы хотел | 🙋 | *I'd like* a tea, please. | Bir çay istərdim. | Я бы хотел чай, пожалуйста.
can I have | ala bilərəm | можно мне | 🙏 | *Can I have* some water? | Bir az su ala bilərəm? | Можно мне воды?
bill | hesab | счёт | 🧾 | The *bill*, please. | Hesab, zəhmət olmasa. | Счёт, пожалуйста.
table | masa | стол, столик | 🪑 | A *table* for two, please. | İki nəfərlik masa, zəhmət olmasa. | Столик на двоих, пожалуйста.
cake | tort | торт | 🍰 | This *cake* is delicious. | Bu tort dadlıdır. | Этот торт вкусный.
sandwich | sendviç | сэндвич | 🥪 | I'd like a cheese *sandwich*. | Pendirli sendviç istərdim. | Мне сэндвич с сыром.
sugar | şəkər | сахар | 🍬 | Coffee with *sugar*, please. | Şəkərli qəhvə, zəhmət olmasa. | Кофе с сахаром, пожалуйста.
delicious | dadlı | вкусный | 😋 | The soup is *delicious*! | Şorba çox dadlıdır! | Суп очень вкусный!
small | kiçik | маленький | 🥤 | A *small* coffee, please. | Kiçik qəhvə, zəhmət olmasa. | Маленький кофе, пожалуйста.`,
  f: `I'd ___ a coffee, please. | like | want, likes
Can I ___ the menu, please? | have | has, having`,
  chat: [["Good afternoon! Are you ready to order? 🤵", "Günortanız xeyir! Sifariş verməyə hazırsınız? 🤵", "Добрый день! Готовы заказать? 🤵", ["Yes. I'd like a cheese sandwich, please.", "Yes. I'd like a waiter.", "No, I'm a sandwich."]],
    ["And to drink?", "Bəs içki?", "А что будете пить?", ["A small coffee, please.", "A small bill, please.", "I drink a table."]],
    ["With sugar?", "Şəkərli?", "С сахаром?", ["No, thank you.", "No, I'm sugar.", "Yes, the bill."]]],
  boss: { t: ["You are in a café. The waiter asks you five questions. Get your order right!", "Kafedəsən. Ofisiant sənə beş sual verir. Sifarişini düzgün al!", "Ты в кафе. Официант задаёт пять вопросов. Получи свой заказ без ошибок!"],
    q: [["Hello! A table for one?", "yes|no|one|two|table|please", "Yes, please."], ["What would you like to eat?", "like|sandwich|cake|pizza|salad|soup|chicken|please", "I'd like a sandwich, please."], ["What would you like to drink?", "tea|coffee|water|juice|milk|lemonade", "A tea, please."], ["Big or small?", "big|small|large", "Small, please."], ["Anything else?", "no|bill|thank|cake|yes", "No, thank you. The bill, please."]] },
  emo: [["🧾 + 💳", "bill"], ["📋 + 🍽️", "menu"]] },

{ e: "🛋️", t: ["Things at home", "Evdəki əşyalar", "Вещи в доме"],
  g: ["on — üstündə, in — içində, under — altında: The cat is under the table.", "on — на, in — в, under — под: The cat is under the table."],
  can: ["say where things are at home", "evdə əşyaların harada olduğunu demək", "говорить, где лежат вещи дома"],
  nat: ["Where did I put my keys?", "Açarlarımı hara qoydum?", "Куда я положил ключи?"],
  x: `
bed | çarpayı | кровать | 🛏️ | My *bed* is very soft. | Çarpayım çox yumşaqdır. | Моя кровать очень мягкая.
chair | stul | стул | 🪑 | Sit on the *chair*. | Stulda otur. | Садись на стул.
sofa | divan | диван | 🛋️ | The cat sleeps on the *sofa*. | Pişik divanda yatır. | Кошка спит на диване.
lamp | lampa | лампа | 💡 | Turn on the *lamp*. | Lampanı yandır. | Включи лампу.
mirror | güzgü | зеркало | 🪞 | Look in the *mirror*. | Güzgüyə bax. | Посмотри в зеркало.
fridge | soyuducu | холодильник | 🧊 | The milk is in the *fridge*. | Süd soyuducudadır. | Молоко в холодильнике.
TV | televizor | телевизор | 📺 | The *TV* is in the living room. | Televizor qonaq otağındadır. | Телевизор в гостиной.
key | açar | ключ | 🔑 | Where is my *key*? | Açarım haradadır? | Где мой ключ?
cup | fincan | чашка | ☕ | The *cup* is on the table. | Fincan masanın üstündədir. | Чашка на столе.
on | üstündə | на | ⬆️ | The book is *on* the bed. | Kitab çarpayının üstündədir. | Книга на кровати.
under | altında | под | ⬇️ | The dog is *under* the table. | İt masanın altındadır. | Собака под столом.
next to | yanında | рядом с | ↔️ | The lamp is *next to* the bed. | Lampa çarpayının yanındadır. | Лампа рядом с кроватью.`,
  f: `The cat is ___ the sofa. It's sleeping there. | on | in, at
The keys are ___ the bag. | in | on, under`,
  chat: [["Help! I can't find my keys! 🔑", "Kömək et! Açarlarımı tapa bilmirəm! 🔑", "Помоги! Не могу найти ключи! 🔑", ["Are they on the table?", "Are they a table?", "Is they on table?"]],
    ["No, they're not on the table.", "Xeyr, masanın üstündə deyil.", "Нет, на столе их нет.", ["Look under the sofa!", "Look on the cat's music!", "Look, it's Monday!"]],
    ["Yes! They're under the sofa. Thanks!", "Hə! Divanın altındadır. Sağ ol!", "Да! Они под диваном. Спасибо!", ["You're welcome!", "You're a sofa!", "Good morning, keys!"]]],
  boss: { t: ["Mum is on the phone. She asks you to find things at home.", "Anan telefonda danışır və evdə əşyaları tapmağı xahiş edir.", "Мама на телефоне и просит найти вещи дома."],
    q: [["Where is the remote? Is it on the sofa?", "yes|no|sofa|on|under|table", "Yes, it's on the sofa."], ["Is the milk in the fridge?", "yes|no|fridge", "Yes, it's in the fridge."], ["Where is my phone?", "on|in|under|next|table|bed|bag|sofa", "It's on the table."], ["Is the lamp on or off?", "on|off", "It's off."], ["Is the cat under the bed?", "yes|no|under|bed", "No, it's on the bed."]] },
  emo: [["🛏️ + 💡", "lamp"], ["🧊 + 🥛", "fridge"]] },

{ e: "🚌", t: ["Transport", "Nəqliyyat", "Транспорт"],
  g: ["by bus, by car, by train — nə ilə gedirsən. Amma: on foot — piyada.", "by bus, by car, by train — на чём едешь. Но: on foot — пешком."],
  can: ["say how you travel", "nə ilə getdiyini demək", "говорить, на чём ты ездишь"],
  nat: ["I'm on my way!", "Yoldayam!", "Я уже еду!"],
  x: `
bus | avtobus | автобус | 🚌 | I go to school by *bus*. | Məktəbə avtobusla gedirəm. | Я езжу в школу на автобусе.
car | maşın | машина | 🚗 | My dad has a new *car*. | Atamın yeni maşını var. | У папы новая машина.
taxi | taksi | такси | 🚕 | Let's take a *taxi*. | Gəl taksi tutaq. | Давай возьмём такси.
train | qatar | поезд | 🚆 | The *train* is fast. | Qatar sürətlidir. | Поезд быстрый.
metro | metro | метро | 🚇 | I take the *metro* to work. | İşə metro ilə gedirəm. | Я езжу на работу на метро.
plane | təyyarə | самолёт | ✈️ | The *plane* is in the sky. | Təyyarə səmadadır. | Самолёт в небе.
bike | velosiped | велосипед | 🚲 | I ride my *bike* in the park. | Parkda velosiped sürürəm. | Я катаюсь на велосипеде в парке.
boat | qayıq | лодка | ⛵ | We go by *boat* to the island. | Adaya qayıqla gedirik. | Мы плывём на остров на лодке.
ticket | bilet | билет | 🎫 | A *ticket* to Ganja, please. | Gəncəyə bilet, zəhmət olmasa. | Билет до Гянджи, пожалуйста.
station | stansiya, vağzal | вокзал, станция | 🚉 | The *station* is near my house. | Stansiya evimə yaxındır. | Станция рядом с моим домом.
on foot | piyada | пешком | 🚶 | I go to the shop *on foot*. | Mağazaya piyada gedirəm. | Я хожу в магазин пешком.
fast | sürətli | быстрый | ⚡ | The metro is *fast*. | Metro sürətlidir. | Метро быстрое.`,
  f: `I go to work ___ bus. | by | on, in
She goes to school ___ foot. | on | by, in`,
  chat: [["Hey! Where are you? We're waiting! ⏰", "Hey! Haradasan? Gözləyirik! ⏰", "Эй! Где ты? Мы ждём! ⏰", ["I'm on my way! I'm on the bus.", "I'm on my way! I'm a bus.", "I'm waiting on foot me."]],
    ["Are you near the station?", "Stansiyaya yaxınsan?", "Ты рядом со станцией?", ["Yes, five minutes!", "Yes, a ticket!", "No, I'm a train."]],
    ["OK! Take a taxi from the station. It's fast!", "Yaxşı! Stansiyadan taksi tut. Sürətlidir!", "Хорошо! Возьми такси от станции. Это быстро!", ["Good idea! See you soon!", "Good idea! I'm a taxi!", "No, I'm fast."]]],
  boss: { t: ["A new colleague asks how you get around the city.", "Yeni iş yoldaşın şəhərdə necə gəzdiyini soruşur.", "Новый коллега спрашивает, как ты передвигаешься по городу."],
    q: [["How do you go to work or school?", "by|bus|car|metro|taxi|train|bike|foot|walk", "I go by metro."], ["Do you have a car?", "yes|no|car", "No, I don't."], ["Is the metro fast?", "yes|no|fast|slow", "Yes, it's fast."], ["Do you like flying by plane?", "yes|no|like", "Yes, I love it!"], ["How much is a bus ticket?", "manat|cent|qəpik|one|two|fifty|ticket|is", "It's fifty qəpik."]] },
  emo: [["🚇 + 🏙️", "metro"], ["🚲", "bike"]] },

{ e: "👕", t: ["Clothes", "Geyim", "Одежда"],
  g: ["I'm wearing… — Hazırda geyinirəm. Cüt əşyalar: jeans, trousers, shoes — həmişə «are».", "I'm wearing… — Сейчас я ношу. Парные вещи: jeans, trousers, shoes — всегда «are»."],
  can: ["say what you are wearing", "nə geyindiyini demək", "говорить, во что ты одет"],
  nat: ["It really suits you!", "Sənə çox yaraşır!", "Тебе очень идёт!"],
  x: `
clothes | geyim | одежда | 👚 | I need new *clothes*. | Mənə yeni geyim lazımdır. | Мне нужна новая одежда.
T-shirt | futbolka | футболка | 👕 | I like your *T-shirt*. | Futbolkanı bəyəndim. | Мне нравится твоя футболка.
jeans | cins şalvar | джинсы | 👖 | My *jeans* are blue. | Cins şalvarım göydür. | Мои джинсы синие.
dress | paltar (qadın) | платье | 👗 | She has a red *dress*. | Onun qırmızı paltarı var. | У неё красное платье.
shoes | ayaqqabı | туфли, обувь | 👞 | These *shoes* are new. | Bu ayaqqabılar yenidir. | Эти туфли новые.
jacket | gödəkçə | куртка | 🧥 | Take your *jacket*. | Gödəkçəni götür. | Возьми куртку.
hat | papaq, şlyapa | шляпа, шапка | 👒 | I wear a *hat* in summer. | Yayda şlyapa taxıram. | Летом я ношу шляпу.
shirt | köynək | рубашка | 👔 | Dad wears a white *shirt*. | Atam ağ köynək geyinir. | Папа носит белую рубашку.
skirt | ətək | юбка | 🩳 | Her *skirt* is short. | Onun ətəyi qısadır. | Её юбка короткая.
socks | corab | носки | 🧦 | Where are my *socks*? | Corablarım haradadır? | Где мои носки?
wear | geyinmək | носить, надевать | 🧣 | I *wear* a scarf in winter. | Qışda şərf taxıram. | Зимой я ношу шарф.
size | ölçü | размер | 📏 | What *size* are you? | Ölçün neçədir? | Какой у тебя размер?`,
  f: `My jeans ___ blue. | are | is, am
She is ___ a red dress today. | wearing | wear, wears`,
  chat: [["Party tonight! 🎉 What are you wearing?", "Bu axşam qonaqlıqdır! 🎉 Nə geyinirsən?", "Вечеринка сегодня! 🎉 Что ты наденешь?", ["My blue dress and white shoes.", "My blue dress are shoes.", "I'm a dress tonight."]],
    ["Nice! Do you need a jacket?", "Gözəl! Gödəkçə lazımdır?", "Красиво! Тебе нужна куртка?", ["Yes, it's cold in the evening.", "Yes, it's a jacket in me.", "No, I'm cold jacket."]],
    ["Send me a photo! 📸", "Mənə şəkil göndər! 📸", "Пришли мне фото! 📸", ["OK! Here it is!", "OK! Here are a socks!", "No, I'm photo."]]],
  boss: { t: ["You are buying clothes. The shop assistant talks to you.", "Geyim alırsan. Satıcı səninlə danışır.", "Ты покупаешь одежду. Продавец говорит с тобой."],
    q: [["Hello! Can I help you?", "yes|no|looking|want|need|like|please|jacket|dress|shirt|jeans|shoes", "Yes, I'm looking for a jacket."], ["What colour do you like?", "red|blue|green|black|white|yellow|pink|brown|grey|purple|orange", "Black, please."], ["What size are you?", "size|small|medium|large|s|m|l|thirty|forty|thirty|eight|six", "Medium, please."], ["Do you want to try it on?", "yes|no|please", "Yes, please."], ["It's forty manats. OK?", "ok|yes|no|expensive|cheap|take", "OK, I'll take it."]] },
  emo: [["👖", "jeans"], ["🧦 + 🧦", "socks"]] },

{ e: "🖥️", t: ["At the office", "Ofisdə", "В офисе"],
  g: ["Work in an office — ofisdə işləmək. Can you…? — Nəzakətli xahiş: Can you help me?", "Work in an office — работать в офисе. Can you…? — вежливая просьба: Can you help me?"],
  can: ["talk about things at work and ask for help", "işdəki əşyalar haqqında danışmaq və kömək istəmək", "говорить о вещах на работе и просить о помощи"],
  nat: ["Can you give me a hand?", "Mənə kömək edə bilərsən?", "Можешь мне помочь?"],
  x: `
office | ofis | офис | 🏢 | I work in a big *office*. | Böyük ofisdə işləyirəm. | Я работаю в большом офисе.
desk | yazı masası | письменный стол | 🗄️ | My *desk* is next to the window. | Masam pəncərənin yanındadır. | Мой стол у окна.
computer | kompüter | компьютер | 💻 | My *computer* is slow today. | Kompüterim bu gün yavaş işləyir. | Мой компьютер сегодня тормозит.
printer | printer | принтер | 🖨️ | The *printer* doesn't work. | Printer işləmir. | Принтер не работает.
email | e-poçt | электронная почта | 📧 | I write an *email* to my boss. | Müdirimə e-poçt yazıram. | Я пишу письмо начальнику.
boss | müdir | начальник | 👔 | My *boss* is kind. | Müdirim mehribandır. | Мой начальник добрый.
colleague | iş yoldaşı | коллега | 🧑‍💼 | Anna is my *colleague*. | Anna mənim iş yoldaşımdır. | Анна — моя коллега.
meeting | iclas | встреча, совещание | 👥 | The *meeting* is at ten. | İclas saat ondadır. | Совещание в десять.
phone | telefon | телефон | 📱 | My *phone* is on the desk. | Telefonum masanın üstündədir. | Мой телефон на столе.
paper | kağız | бумага | 📄 | We need more *paper*. | Bizə daha çox kağız lazımdır. | Нам нужно больше бумаги.
help | kömək etmək | помогать | 🤝 | Can you *help* me, please? | Mənə kömək edə bilərsən? | Можешь мне помочь?
busy | məşğul | занятый | 📅 | I'm *busy* now, sorry. | İndi məşğulam, bağışla. | Я сейчас занят, извини.`,
  f: `Can you ___ me, please? | help | helps, helping
The meeting is ___ ten o'clock. | at | in, on`,
  chat: [["Hi! The printer doesn't work. 😩 Can you help me?", "Salam! Printer işləmir. 😩 Kömək edə bilərsən?", "Привет! Принтер не работает. 😩 Поможешь?", ["Sure! Let me look.", "Sure! I'm a printer.", "No, it's ten o'clock me."]],
    ["Thanks! Is there paper in it?", "Sağ ol! İçində kağız var?", "Спасибо! В нём есть бумага?", ["No, there isn't. Here is some paper.", "No, there are paper.", "Yes, I'm paper."]],
    ["It works now! Coffee after the meeting?", "İndi işləyir! İclasdan sonra qəhvə?", "Теперь работает! Кофе после совещания?", ["Yes, great idea!", "Yes, I'm coffee!", "No, it's a printer."]]],
  boss: { t: ["It's your first week. Your boss asks you some questions.", "İşdə ilk həftəndir. Müdirin sənə suallar verir.", "Твоя первая неделя на работе. Начальник задаёт вопросы."],
    q: [["Is your computer OK?", "yes|no|ok|slow|fine", "Yes, it's fine."], ["Do you have a desk?", "yes|no|desk", "Yes, next to the window."], ["Can you come to the meeting at ten?", "yes|no|can|sure|ok", "Yes, I can."], ["Are you busy now?", "yes|no|busy", "No, I'm not busy."], ["Can you send me an email?", "yes|sure|ok|can|of course", "Sure, no problem."]] },
  emo: [["🖨️ + 📄", "printer"], ["📧", "email"]] },

{ e: "🤒", t: ["How I feel", "Özümü necə hiss edirəm", "Как я себя чувствую"],
  g: ["I feel… / I'm… — I'm tired. My head hurts — başım ağrıyır.", "I feel… / I'm… — I'm tired. My head hurts — у меня болит голова."],
  can: ["say how you feel", "özünü necə hiss etdiyini demək", "говорить, как ты себя чувствуешь"],
  nat: ["I'm feeling under the weather.", "Özümü bir az pis hiss edirəm.", "Мне нездоровится."],
  x: `
happy | xoşbəxt | счастливый | 😊 | I'm *happy* today! | Bu gün xoşbəxtəm! | Сегодня я счастлив!
sad | kədərli | грустный | 😢 | Why are you *sad*? | Niyə kədərlisən? | Почему ты грустный?
tired | yorğun | уставший | 😴 | I'm *tired* after work. | İşdən sonra yorğunam. | Я устал после работы.
sick | xəstə | больной | 🤒 | She is *sick* today. | O, bu gün xəstədir. | Она сегодня болеет.
cold | soyuq, üşümək | холодно | 🥶 | I'm *cold*. Close the window! | Üşüyürəm. Pəncərəni bağla! | Мне холодно. Закрой окно!
hot | isti | жарко | 🥵 | I'm *hot*. Open the window! | İstimdir. Pəncərəni aç! | Мне жарко. Открой окно!
angry | əsəbi | сердитый | 😠 | Dad is *angry*. | Atam əsəbidir. | Папа сердится.
scared | qorxmuş | испуганный | 😨 | The cat is *scared*. | Pişik qorxub. | Кошка испугалась.
bored | darıxmış | скучающий | 🥱 | I'm *bored*. Let's play! | Darıxıram. Gəl oynayaq! | Мне скучно. Давай поиграем!
headache | baş ağrısı | головная боль | 🤕 | I have a *headache*. | Başım ağrıyır. | У меня болит голова.
hurt | ağrımaq | болеть | 🩹 | My leg *hurts*. | Ayağım ağrıyır. | У меня болит нога.
better | daha yaxşı | лучше | 📈 | I feel *better* now. | İndi özümü daha yaxşı hiss edirəm. | Сейчас мне лучше.`,
  f: `My head ___. | hurts | hurt, hurting
I ___ tired today. | am | is, are`,
  chat: [["Hi! You're not at school today. Are you OK? 😟", "Salam! Bu gün məktəbdə yoxsan. Yaxşısan? 😟", "Привет! Тебя нет в школе. Ты в порядке? 😟", ["No, I'm sick. I have a headache.", "No, I'm a headache.", "Yes, I'm school."]],
    ["Oh no! Do you have a fever?", "Vay! Qızdırman var?", "О нет! У тебя температура?", ["Yes, a little. I'm very tired.", "Yes, I'm a little fever me.", "No, I'm happy fever."]],
    ["Get well soon! 💐", "Tez sağal! 💐", "Выздоравливай! 💐", ["Thank you! I feel better now.", "Thank you! I'm soon.", "No, get well you."]]],
  boss: { t: ["You call the doctor. The nurse asks how you feel.", "Həkimə zəng edirsən. Tibb bacısı özünü necə hiss etdiyini soruşur.", "Ты звонишь врачу. Медсестра спрашивает о самочувствии."],
    q: [["How do you feel today?", "tired|sick|bad|ill|fine|ok|cold|hot|headache|hurt", "I feel sick."], ["What hurts?", "head|leg|arm|tooth|stomach|ear|hurts|back|throat", "My head hurts."], ["Are you hot or cold?", "hot|cold", "I'm hot."], ["Can you come at five o'clock?", "yes|no|can|ok", "Yes, I can."], ["Drink water and rest. OK?", "ok|yes|thank", "OK, thank you."]] },
  emo: [["🤕 + 🗣️", "headache"], ["😴", "tired"]] },

{ e: "🛒", t: ["Food shopping", "Ərzaq alışı", "Продукты в магазине"],
  g: ["some — təsdiqdə: some apples. any — sualda: Do we have any eggs? a kilo of, a bottle of…", "some — в утверждениях: some apples. any — в вопросах: Do we have any eggs? a kilo of, a bottle of…"],
  can: ["make a shopping list and buy food", "alış-veriş siyahısı yazıb ərzaq almaq", "составлять список покупок и покупать продукты"],
  nat: ["We're out of milk.", "Südümüz qurtarıb.", "У нас закончилось молоко."],
  x: `
supermarket | supermarket | супермаркет | 🏬 | We go to the *supermarket* on Sunday. | Bazar günü supermarketə gedirik. | В воскресенье мы ходим в супермаркет.
shopping list | alış-veriş siyahısı | список покупок | 📝 | Where is the *shopping list*? | Alış-veriş siyahısı haradadır? | Где список покупок?
rice | düyü | рис | 🍚 | We need some *rice*. | Bizə bir az düyü lazımdır. | Нам нужно немного риса.
meat | ət | мясо | 🥩 | I don't eat *meat*. | Ət yemirəm. | Я не ем мясо.
fish | balıq | рыба | 🐟 | *Fish* is good for you. | Balıq sağlamlıq üçün faydalıdır. | Рыба полезна.
tomato | pomidor | помидор | 🍅 | Two kilos of *tomatoes*, please. | İki kilo pomidor, zəhmət olmasa. | Два килограмма помидоров, пожалуйста.
potato | kartof | картофель | 🥔 | Mum needs a bag of *potatoes*. | Anama bir torba kartof lazımdır. | Маме нужен мешок картошки.
butter | kərə yağı | сливочное масло | 🧈 | Bread with *butter*, please. | Kərə yağlı çörək, zəhmət olmasa. | Хлеб с маслом, пожалуйста.
bottle | butulka | бутылка | 🍾 | A *bottle* of water, please. | Bir butulka su, zəhmət olmasa. | Бутылку воды, пожалуйста.
kilo | kilo | килограмм | ⚖️ | A *kilo* of apples, please. | Bir kilo alma, zəhmət olmasa. | Килограмм яблок, пожалуйста.
fruit | meyvə | фрукты | 🍇 | I eat *fruit* every day. | Hər gün meyvə yeyirəm. | Я ем фрукты каждый день.
vegetables | tərəvəz | овощи | 🥦 | Eat your *vegetables*! | Tərəvəzini ye! | Ешь овощи!`,
  f: `Do we have ___ eggs? | any | some, a
I need ___ tomatoes. | some | any, a`,
  chat: [["I'm at the supermarket! 🛒 What do we need?", "Supermarketdəyəm! 🛒 Nə lazımdır?", "Я в супермаркете! 🛒 Что нам нужно?", ["Some rice and a kilo of tomatoes.", "Some rice and a kilo of shoes.", "I'm a supermarket."]],
    ["Do we have any milk?", "Südümüz var?", "У нас есть молоко?", ["No, we're out of milk. Buy a bottle, please.", "No, we're milk.", "Yes, a kilo of milk please me."]],
    ["OK! Anything else?", "Oldu! Başqa nəsə?", "Хорошо! Что-нибудь ещё?", ["Some fruit, please. Thanks!", "Some fruit are please.", "No, I'm anything."]]],
  boss: { t: ["You are at the market. Buy everything on your list.", "Bazardasan. Siyahındakı hər şeyi al.", "Ты на рынке. Купи всё по списку."],
    q: [["Good morning! What do you need?", "need|want|like|please|kilo|tomato|potato|apple|rice|meat|fish|bread|milk", "A kilo of tomatoes, please."], ["How many kilos?", "one|two|three|four|five|kilo", "Two kilos, please."], ["Do you want any fruit?", "yes|no|apple|banana|grape|orange|fruit|please", "Yes, some apples, please."], ["Anything else? Meat? Fish?", "no|yes|meat|fish|thank", "No, thank you."], ["That's twelve manats.", "here|ok|thank", "Here you are."]] },
  emo: [["🍅 + 🥔 + 🥦", "vegetables"], ["🛒 + 🏬", "supermarket"]] },

{ e: "🎉", t: ["The weekend", "Həftəsonu", "Выходные"],
  g: ["Həftə günləri böyük hərflə: Saturday, Sunday. on Saturday — şənbə günü. at the weekend — həftəsonu.", "Дни недели — с большой буквы: Saturday, Sunday. on Saturday — в субботу. at the weekend — в выходные."],
  can: ["talk about your weekend plans", "həftəsonu planların haqqında danışmaq", "рассказывать о планах на выходные"],
  nat: ["Have a nice weekend!", "Həftəsonun xoş keçsin!", "Хороших выходных!"],
  x: `
weekend | həftəsonu | выходные | 🎉 | What do you do at the *weekend*? | Həftəsonu nə edirsən? | Что ты делаешь в выходные?
Saturday | şənbə | суббота | 📅 | I play football on *Saturday*. | Şənbə günü futbol oynayıram. | В субботу я играю в футбол.
Sunday | bazar | воскресенье | ☀️ | On *Sunday* we visit Grandma. | Bazar günü nənəmə baş çəkirik. | В воскресенье мы ходим к бабушке.
sleep | yatmaq | спать | 😴 | I *sleep* late on Sunday. | Bazar günü gec yatıram. | В воскресенье я сплю допоздна.
visit | baş çəkmək | навещать | 🏡 | We *visit* our friends. | Dostlarımıza baş çəkirik. | Мы навещаем друзей.
film | film | фильм | 🎬 | Let's watch a *film*! | Gəl film izləyək! | Давай посмотрим фильм!
beach | çimərlik | пляж | 🏖️ | We go to the *beach* in summer. | Yayda çimərliyə gedirik. | Летом мы ходим на пляж.
picnic | piknik | пикник | 🧺 | We have a *picnic* in the park. | Parkda piknik edirik. | Мы устраиваем пикник в парке.
relax | dincəlmək | отдыхать | 🛋️ | I *relax* at home on Sunday. | Bazar günü evdə dincəlirəm. | В воскресенье я отдыхаю дома.
friends | dostlar | друзья | 🧑‍🤝‍🧑 | I meet my *friends* on Saturday. | Şənbə günü dostlarımla görüşürəm. | В субботу я встречаюсь с друзьями.
free | boş, azad | свободный | 🕊️ | Are you *free* on Sunday? | Bazar günü boşsan? | Ты свободен в воскресенье?
together | birlikdə | вместе | 🤝 | Let's go *together*! | Gəl birlikdə gedək! | Пойдём вместе!`,
  f: `I play tennis ___ Saturday. | on | in, at
Are you free ___ the weekend? | at | on, in`,
  chat: [["Hi! Are you free on Saturday? 🎉", "Salam! Şənbə günü boşsan? 🎉", "Привет! Ты свободен в субботу? 🎉", ["Yes, I am. Why?", "Yes, I'm Saturday.", "No, I'm free."]],
    ["Let's have a picnic in the park!", "Gəl parkda piknik edək!", "Давай устроим пикник в парке!", ["Great idea! What time?", "Great idea! I'm a picnic.", "No, park is a film."]],
    ["At twelve. Bring some fruit! 🍇", "Saat on ikidə. Bir az meyvə gətir! 🍇", "В двенадцать. Принеси фрукты! 🍇", ["OK! See you on Saturday!", "OK! See you on fruit!", "Yes, I'm twelve."]]],
  boss: { t: ["On Monday, a colleague asks about your weekend.", "Bazar ertəsi iş yoldaşın həftəsonu haqqında soruşur.", "В понедельник коллега спрашивает о твоих выходных."],
    q: [["What do you usually do at the weekend?", "sleep|relax|visit|play|watch|go|meet|read|cook|clean", "I relax and visit my family."], ["Do you sleep late on Sunday?", "yes|no|sleep", "Yes, I do."], ["Do you like picnics?", "yes|no|like", "Yes, I love picnics."], ["Who do you meet at the weekend?", "friends|family|mum|dad|grand|sister|brother|meet", "I meet my friends."], ["Have a nice weekend!", "you too|thanks|thank|too", "Thanks, you too!"]] },
  emo: [["🧺 + 🌳", "picnic"], ["🏖️ + ☀️", "beach"]] },

/* ---------- A1.3 ---------- */
{ e: "🧑‍🤝‍🧑", t: ["Friends", "Dostlar", "Друзья"],
  g: ["My best friend is… — ən yaxın dostum… He / she likes… — o … sevir (he / she ilə -s).", "My best friend is… — мой лучший друг… He / she likes… — он / она любит (с he / she — окончание -s)."],
  can: ["talk about your friends", "dostların haqqında danışmaq", "рассказывать о своих друзьях"],
  nat: ["We get on really well.", "Biz çox yaxşı yola gedirik.", "Мы отлично ладим."],
  x: `
friend | dost | друг | 🧑‍🤝‍🧑 | Max is my *friend*. | Maks mənim dostumdur. | Макс — мой друг.
best friend | ən yaxın dost | лучший друг | 💛 | Emma is my *best friend*. | Emma mənim ən yaxın dostumdur. | Эмма — моя лучшая подруга.
kind | mehriban | добрый | 💗 | My friend is very *kind*. | Dostum çox mehribandır. | Мой друг очень добрый.
funny | məzəli | смешной | 😂 | Lewis is so *funny*! | Lyuis çox məzəlidir! | Льюис такой смешной!
clever | ağıllı | умный | 🧠 | She is *clever* and kind. | O, ağıllı və mehribandır. | Она умная и добрая.
classmate | sinif yoldaşı | одноклассник | 🎒 | Anna is my *classmate*. | Anna sinif yoldaşımdır. | Анна — моя одноклассница.
neighbour | qonşu | сосед | 🏘️ | Our *neighbour* is nice. | Qonşumuz xoş adamdır. | Наш сосед приятный.
meet | görüşmək | встречаться | 🤝 | Let's *meet* after school. | Dərsdən sonra görüşək. | Давай встретимся после школы.
call | zəng etmək | звонить | 📞 | I *call* my friend every day. | Dostuma hər gün zəng edirəm. | Я звоню другу каждый день.
message | mesaj | сообщение | 💬 | Send me a *message*! | Mənə mesaj göndər! | Напиши мне сообщение!
like | xoşlamaq | нравиться, любить | 👍 | He *likes* football. | O, futbolu sevir. | Он любит футбол.
same | eyni | одинаковый | 🟰 | We like the *same* music. | Biz eyni musiqini sevirik. | Нам нравится одна и та же музыка.`,
  f: `My friend ___ pizza. | likes | like, liking
We ___ in the same class. | are | is, am`,
  chat: [["Who is your best friend? 💛", "Ən yaxın dostun kimdir? 💛", "Кто твой лучший друг? 💛", ["My best friend is Leyla.", "My best friend are Leyla.", "I'm Leyla friend best."]],
    ["What is she like?", "O, necə insandır?", "Какая она?", ["She's funny and very kind.", "She's a banana.", "She likes kind."]],
    ["What do you do together?", "Birlikdə nə edirsiniz?", "Что вы делаете вместе?", ["We play games and listen to music.", "We are games.", "We together music."]]],
  boss: { t: ["Your teacher asks you to tell the class about your best friend.", "Müəllim səndən ən yaxın dostun haqqında sinfə danışmağı xahiş edir.", "Учитель просит рассказать классу о твоём лучшем друге."],
    q: [["What's your best friend's name?", "name|is", "Her name is Leyla."], ["How old is he or she?", "old|is|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|teen|twenty|thirty", "She is thirteen."], ["What is your friend like?", "kind|funny|clever|nice|good|happy|quiet|friendly", "She's kind and funny."], ["What does your friend like?", "like|likes|love|football|music|books|games|dance|draw", "She likes music."], ["Why is he or she your best friend?", "because|kind|funny|help|always|good", "Because she always helps me."]] },
  emo: [["💛 + 🧑‍🤝‍🧑", "best friend"], ["📞", "call"]] },

{ e: "⏰", t: ["My day", "Mənim günüm", "Мой день"],
  g: ["Present Simple: I get up at seven. He gets up at eight (he / she ilə -s).", "Present Simple: I get up at seven. He gets up at eight (с he / she — окончание -s)."],
  can: ["describe your day", "gününü təsvir etmək", "рассказывать о своём дне"],
  nat: ["I'm not a morning person.", "Mən səhər adamı deyiləm.", "Я не жаворонок."],
  x: `
get up | yuxudan durmaq | вставать | ⏰ | I *get up* at seven. | Saat yeddidə dururam. | Я встаю в семь.
wash | yuyunmaq | умываться | 🧼 | I *wash* my face. | Üzümü yuyuram. | Я умываю лицо.
breakfast | səhər yeməyi | завтрак | 🍳 | I have *breakfast* at eight. | Saat səkkizdə səhər yeməyi yeyirəm. | Я завтракаю в восемь.
go to school | məktəbə getmək | ходить в школу | 🏫 | I *go to school* by bus. | Məktəbə avtobusla gedirəm. | Я езжу в школу на автобусе.
go to work | işə getmək | ходить на работу | 💼 | Mum *goes to work* at nine. | Anam saat doqquzda işə gedir. | Мама идёт на работу в девять.
lunch | nahar | обед | 🥪 | We have *lunch* at one. | Saat birdə nahar edirik. | Мы обедаем в час.
come home | evə gəlmək | приходить домой | 🏠 | I *come home* at four. | Saat dörddə evə gəlirəm. | Я прихожу домой в четыре.
homework | ev tapşırığı | домашнее задание | 📝 | I do my *homework* after lunch. | Nahardan sonra ev tapşırığımı edirəm. | Я делаю уроки после обеда.
dinner | şam yeməyi | ужин | 🍽️ | We have *dinner* together. | Birlikdə şam yeməyi yeyirik. | Мы ужинаем вместе.
watch TV | televizora baxmaq | смотреть телевизор | 📺 | I *watch TV* in the evening. | Axşam televizora baxıram. | Вечером я смотрю телевизор.
go to bed | yatmağa getmək | ложиться спать | 🛏️ | I *go to bed* at ten. | Saat onda yatıram. | Я ложусь спать в десять.
every day | hər gün | каждый день | 🔁 | I read *every day*. | Hər gün oxuyuram. | Я читаю каждый день.`,
  f: `She ___ up at seven. | gets | get, getting
I ___ my homework after school. | do | does, make`,
  chat: [["Good morning! ☀️ What time do you get up?", "Sabahın xeyir! ☀️ Saat neçədə durursan?", "Доброе утро! ☀️ Во сколько ты встаёшь?", ["I get up at seven.", "I get up at seven o'clock me.", "I'm get up seven."]],
    ["Wow, early! What do you do after school?", "Vay, tez! Məktəbdən sonra nə edirsən?", "Ого, рано! Что делаешь после школы?", ["I have lunch and do my homework.", "I have homework lunch me.", "I'm lunch at school."]],
    ["And when do you go to bed?", "Bəs nə vaxt yatırsan?", "А когда ложишься спать?", ["At ten o'clock.", "At ten bed o'clock me.", "In the bed ten."]]],
  boss: { t: ["A journalist for the school newspaper asks about your day.", "Məktəb qəzetinin jurnalisti günün haqqında soruşur.", "Журналист школьной газеты спрашивает о твоём дне."],
    q: [["What time do you get up?", "at|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|half|o'clock|oclock", "I get up at seven."], ["What do you have for breakfast?", "egg|bread|cheese|tea|coffee|milk|juice|porridge|butter|honey|yoghurt", "I have eggs and tea."], ["How do you go to school or work?", "by|bus|car|metro|foot|walk|taxi|bike", "I go by bus."], ["What do you do in the evening?", "watch|read|play|homework|dinner|cook|relax|tv|music", "I watch TV and read."], ["What time do you go to bed?", "at|nine|ten|eleven|twelve|o'clock|oclock|half", "At ten o'clock."]] },
  emo: [["⏰ + 🛏️", "get up"], ["📺 + 👀", "watch TV"]] },

{ e: "🕐", t: ["Time and timetables", "Vaxt və cədvəl", "Время и расписание"],
  g: ["What time is it? — Saat neçədir? It's three o'clock. It's half past three — üçün yarısı. at five — saat beşdə.", "What time is it? — Который час? It's three o'clock. It's half past three — половина четвёртого. at five — в пять."],
  can: ["tell the time and read a timetable", "saatı demək və cədvəli oxumaq", "называть время и понимать расписание"],
  nat: ["We're running late!", "Gecikirik!", "Мы опаздываем!"],
  x: `
time | vaxt | время | 🕐 | What *time* is it? | Saat neçədir? | Который час?
o'clock | tam saat | ровно (час) | 🕗 | It's eight *o'clock*. | Saat səkkizdir. | Восемь часов.
half past | yarım | половина | 🕧 | It's *half past* two. | Saat üçün yarısıdır. | Половина третьего.
minute | dəqiqə | минута | ⏱️ | Wait five *minutes*, please. | Beş dəqiqə gözləyin, zəhmət olmasa. | Подождите пять минут, пожалуйста.
hour | saat (müddət) | час | ⏳ | The film is two *hours* long. | Film iki saat davam edir. | Фильм идёт два часа.
morning | səhər | утро | 🌅 | I run in the *morning*. | Səhər qaçıram. | Я бегаю по утрам.
afternoon | günortadan sonra | день | 🌤️ | The shop opens in the *afternoon*. | Mağaza günortadan sonra açılır. | Магазин открывается днём.
evening | axşam | вечер | 🌆 | See you this *evening*! | Bu axşam görüşərik! | Увидимся сегодня вечером!
early | tez | рано | 🐓 | The bus comes *early*. | Avtobus tez gəlir. | Автобус приходит рано.
late | gec | поздно | 🐢 | Sorry, I'm *late*! | Bağışla, gecikdim! | Извини, я опоздал!
timetable | cədvəl | расписание | 🗓️ | Look at the bus *timetable*. | Avtobus cədvəlinə bax. | Посмотри расписание автобусов.
open | açıq olmaq, açılmaq | открываться | 🔓 | The museum *opens* at ten. | Muzey saat onda açılır. | Музей открывается в десять.`,
  f: `The bank opens ___ nine o'clock. | at | in, on
I run ___ the morning. | in | at, on`,
  chat: [["Hi! What time is the film? 🎬", "Salam! Film saat neçədədir? 🎬", "Привет! Во сколько фильм? 🎬", ["It's at half past seven.", "It's at half seven past me.", "It's a film o'clock."]],
    ["Oh no, it's seven now! We're running late!", "Vay, saat artıq yeddidir! Gecikirik!", "О нет, уже семь! Мы опаздываем!", ["Let's take a taxi. It's fast!", "Let's take a timetable.", "Yes, it's early late."]],
    ["OK! See you at the cinema in twenty minutes.", "Oldu! İyirmi dəqiqəyə kinoteatrda görüşərik.", "Хорошо! Увидимся в кинотеатре через двадцать минут.", ["See you there!", "See you minutes!", "No, I'm twenty."]]],
  boss: { t: ["You call a museum. The guide answers your questions — now you answer his.", "Muzeyə zəng edirsən. İndi bələdçi sənə suallar verir.", "Ты звонишь в музей. Теперь гид задаёт тебе вопросы."],
    q: [["What time is it now?", "o'clock|oclock|half|past|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve", "It's ten o'clock."], ["What time do you want to come?", "at|o'clock|oclock|half|morning|afternoon|evening|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve", "At eleven o'clock."], ["The museum opens at ten. Is that OK?", "yes|ok|fine|good", "Yes, that's OK."], ["Do you come in the morning or in the afternoon?", "morning|afternoon|evening", "In the morning."], ["The tour is one hour. Is that OK for you?", "yes|ok|fine|good|no", "Yes, it's fine."]] },
  emo: [["🕐 + 🗓️", "timetable"], ["🐢 + ⏰", "late"]] },

{ e: "💼", t: ["First day at work", "İşdə ilk gün", "Первый день на работе"],
  g: ["Özünü təqdim et: Hi, I'm Ali. I'm the new designer. Sual: Where is…? Can I…?", "Представься: Hi, I'm Ali. I'm the new designer. Вопросы: Where is…? Can I…?"],
  can: ["introduce yourself at a new job and ask simple questions", "yeni işdə özünü təqdim etmək və sadə suallar vermək", "представиться на новой работе и задать простые вопросы"],
  nat: ["Welcome to the team!", "Komandaya xoş gəldin!", "Добро пожаловать в команду!"],
  x: `
new | yeni | новый | ✨ | I'm the *new* designer. | Mən yeni dizaynerəm. | Я новый дизайнер.
team | komanda | команда | 👥 | Welcome to the *team*! | Komandaya xoş gəldin! | Добро пожаловать в команду!
manager | menecer | менеджер | 👔 | The *manager* is in his office. | Menecer öz ofisindədir. | Менеджер у себя в кабинете.
first day | ilk gün | первый день | 1️⃣ | It's my *first day* today. | Bu gün mənim ilk günümdür. | Сегодня мой первый день.
start | başlamaq | начинать | ▶️ | Work *starts* at nine. | İş saat doqquzda başlayır. | Работа начинается в девять.
finish | bitirmək | заканчивать | 🏁 | We *finish* at six. | Saat altıda bitiririk. | Мы заканчиваем в шесть.
password | parol | пароль | 🔐 | What is the Wi-Fi *password*? | Wi-Fi parolu nədir? | Какой пароль от Wi-Fi?
kitchen at work | iş mətbəxi | кухня на работе | ☕ | The coffee is in the *kitchen at work*. | Qəhvə iş mətbəxindədir. | Кофе на кухне в офисе.
question | sual | вопрос | ❓ | Can I ask a *question*? | Bir sual verə bilərəm? | Можно задать вопрос?
show | göstərmək | показывать | 👉 | Let me *show* you the office. | Gəl sənə ofisi göstərim. | Давай я покажу тебе офис.
easy | asan | лёгкий | 🙂 | The work is *easy*. | İş asandır. | Работа лёгкая.
difficult | çətin | трудный | 😓 | The first day is *difficult*. | İlk gün çətindir. | Первый день трудный.`,
  f: `Work ___ at nine o'clock. | starts | start, starting
___ I ask a question? | Can | Am, Do`,
  chat: [["Hi! You're new here, right? 🙂", "Salam! Sən buraya təzə gəlmisən, elədir? 🙂", "Привет! Ты новенький, да? 🙂", ["Yes, it's my first day. I'm Ali.", "Yes, it's my first new.", "No, I'm a team."]],
    ["Welcome to the team! I'm Anna. Do you need anything?", "Komandaya xoş gəldin! Mən Annayam. Nəyəsə ehtiyacın var?", "Добро пожаловать! Я Анна. Тебе что-нибудь нужно?", ["Yes, what's the Wi-Fi password?", "Yes, what's the team kitchen me?", "No, I'm password."]],
    ["It's on the board. Coffee? ☕", "Lövhədə yazılıb. Qəhvə? ☕", "Он на доске. Кофе? ☕", ["Yes, please! Where is the kitchen?", "Yes, please! I'm the kitchen.", "No, it's a first day."]]],
  boss: { t: ["Your new manager meets you on your first day.", "İlk gün yeni menecerin səninlə görüşür.", "Новый менеджер встречает тебя в первый день."],
    q: [["Hello! What's your name?", "name|i'm|i am", "Hi, I'm Ali."], ["What's your job here?", "i'm|i am|designer|manager|engineer|assistant|developer|teacher|job", "I'm the new designer."], ["Work starts at nine. Is that OK?", "yes|ok|fine", "Yes, that's fine."], ["Do you have any questions?", "yes|no|where|what|can|question", "Yes. Where is the kitchen?"], ["Welcome to the team!", "thank|thanks|happy|glad", "Thank you! I'm happy to be here."]] },
  emo: [["🔐 + 💻", "password"], ["1️⃣ + ☀️", "first day"]] },

{ e: "🍳", t: ["Breakfast, lunch and dinner", "Səhər yeməyi, nahar, şam", "Завтрак, обед, ужин"],
  g: ["have breakfast / lunch / dinner — «eat» yox, «have» deyirik. for breakfast — səhər yeməyində.", "have breakfast / lunch / dinner — говорим «have», а не «eat». for breakfast — на завтрак."],
  can: ["talk about your meals", "yeməkləriniz haqqında danışmaq", "рассказывать о своих приёмах пищи"],
  nat: ["What's for dinner?", "Şam yeməyinə nə var?", "Что на ужин?"],
  x: `
porridge | sıyıq | каша | 🥣 | I eat *porridge* for breakfast. | Səhər yeməyində sıyıq yeyirəm. | На завтрак я ем кашу.
honey | bal | мёд | 🍯 | Tea with *honey*, please. | Ballı çay, zəhmət olmasa. | Чай с мёдом, пожалуйста.
yoghurt | qatıq | йогурт | 🥛 | I like *yoghurt* with fruit. | Meyvəli qatığı xoşlayıram. | Я люблю йогурт с фруктами.
soup | şorba | суп | 🍲 | We have *soup* for lunch. | Nahara şorba yeyirik. | На обед у нас суп.
salad | salat | салат | 🥗 | A green *salad*, please. | Yaşıl salat, zəhmət olmasa. | Зелёный салат, пожалуйста.
pasta | makaron | паста | 🍝 | Kids love *pasta*. | Uşaqlar makaronu sevir. | Дети любят пасту.
pizza | pizza | пицца | 🍕 | We have *pizza* on Friday. | Cümə günü pizza yeyirik. | В пятницу у нас пицца.
dessert | desert | десерт | 🍮 | What's for *dessert*? | Desertə nə var? | Что на десерт?
cup of tea | bir fincan çay | чашка чая | 🍵 | A *cup of tea* after dinner is nice. | Şam yeməyindən sonra bir fincan çay xoşdur. | Чашка чая после ужина — это приятно.
plate | boşqab | тарелка | 🍽️ | Put the cake on a *plate*. | Tortu boşqaba qoy. | Положи торт на тарелку.
spoon | qaşıq | ложка | 🥄 | I need a *spoon* for my soup. | Şorbam üçün qaşıq lazımdır. | Мне нужна ложка для супа.
fork | çəngəl | вилка | 🍴 | Where is my *fork*? | Çəngəlim haradadır? | Где моя вилка?`,
  f: `What do you have ___ breakfast? | for | on, at
Dad ___ dinner on Sunday. | cooks | cook, cooking`,
  chat: [["Mum: What do you want for dinner tonight? 🍽️", "Ana: Bu axşam şam yeməyinə nə istəyirsən? 🍽️", "Мама: Что хочешь на ужин сегодня? 🍽️", ["Pasta, please! With cheese.", "Pasta, please! With fork me.", "I'm dinner tonight."]],
    ["OK! And a salad?", "Oldu! Salat da?", "Хорошо! И салат?", ["Yes, a small salad.", "Yes, a small plate salad me.", "No, I'm a salad."]],
    ["What do you want for dessert?", "Desertə nə istəyirsən?", "Что хочешь на десерт?", ["Yoghurt with honey!", "A spoon with dinner!", "Dessert is Tuesday."]]],
  boss: { t: ["A doctor asks what you usually eat in a day.", "Həkim gün ərzində adətən nə yediyini soruşur.", "Врач спрашивает, что ты обычно ешь за день."],
    q: [["What do you have for breakfast?", "porridge|egg|bread|cheese|yoghurt|honey|tea|coffee|milk|fruit|butter", "I have porridge and tea."], ["What do you have for lunch?", "soup|salad|pasta|rice|chicken|meat|fish|sandwich|pizza", "Soup and salad."], ["What time do you have dinner?", "at|o'clock|oclock|half|six|seven|eight|nine|evening", "At seven o'clock."], ["Do you eat dessert every day?", "yes|no|sometimes|every", "No, only on Sunday."], ["Who cooks in your family?", "mum|dad|i|grand|sister|brother|cook|we", "My mum cooks."]] },
  emo: [["🥣 + 🌅", "porridge"], ["🍮 + 😋", "dessert"]] },

{ e: "🧭", t: ["Asking the way", "Yol soruşmaq", "Как пройти"],
  g: ["Excuse me, where is…? Go straight — düz get. Turn left / right — sola / sağa dön.", "Excuse me, where is…? Go straight — иди прямо. Turn left / right — поверни налево / направо."],
  can: ["ask for directions and explain the way", "yol soruşmaq və yolu izah etmək", "спрашивать и объяснять дорогу"],
  nat: ["You can't miss it!", "Mütləq görəcəksən!", "Не пропустишь!"],
  x: `
excuse me | bağışlayın | извините | 🙋 | *Excuse me*, where is the bank? | Bağışlayın, bank haradadır? | Извините, где банк?
where | harada | где | 📍 | *Where* is the station? | Stansiya haradadır? | Где вокзал?
left | sol | налево, левый | ⬅️ | Turn *left* at the shop. | Mağazada sola dön. | У магазина поверни налево.
right | sağ | направо, правый | ➡️ | Turn *right* at the park. | Parkda sağa dön. | У парка поверни направо.
straight on | düz | прямо | ⬆️ | Go *straight on*. | Düz get. | Иди прямо.
turn | dönmək | поворачивать | ↩️ | *Turn* left here. | Burada sola dön. | Здесь поверни налево.
corner | tin, künc | угол | 📐 | The café is on the *corner*. | Kafe tindədir. | Кафе на углу.
opposite | qarşısında | напротив | 🔄 | The bank is *opposite* the park. | Bank parkın qarşısındadır. | Банк напротив парка.
between | arasında | между | ↕️ | The shop is *between* the bank and the café. | Mağaza bankla kafenin arasındadır. | Магазин между банком и кафе.
map | xəritə | карта | 🗺️ | Look at the *map*. | Xəritəyə bax. | Посмотри на карту.
far | uzaq | далеко | 🏔️ | Is it *far* from here? | Buradan uzaqdır? | Это далеко отсюда?
lost | azmış | потерявшийся | 😵 | Excuse me, I'm *lost*. | Bağışlayın, azmışam. | Извините, я заблудился.`,
  f: `Turn ___ at the park. | left | lefts, on left
The bank is ___ the shop and the café. | between | opposite, next`,
  chat: [["Hi! I'm lost. 😵 Where is the museum?", "Salam! Azmışam. 😵 Muzey haradadır?", "Привет! Я заблудился. 😵 Где музей?", ["Go straight on and turn left.", "Go straight on and turn museum.", "I'm a lost museum."]],
    ["Is it far?", "Uzaqdır?", "Это далеко?", ["No, it's five minutes on foot.", "No, it's five feet on minutes.", "Yes, I'm far."]],
    ["Is it next to the park?", "Parkın yanındadır?", "Это рядом с парком?", ["Yes, it's opposite the park. You can't miss it!", "Yes, it's a park opposite me.", "No, it's corner."]]],
  boss: { t: ["Three tourists stop you in the city centre. Help them!", "Şəhər mərkəzində üç turist səni saxlayır. Onlara kömək et!", "Трое туристов останавливают тебя в центре города. Помоги им!"],
    q: [["Excuse me, where is the station?", "go|straight|left|right|turn|near|opposite|next|there", "Go straight on and turn right."], ["Is it far from here?", "yes|no|far|near|minute", "No, it's ten minutes on foot."], ["Where can I buy a map?", "shop|kiosk|there|in|at|station|museum", "In the shop on the corner."], ["Is there a café near here?", "yes|no|there|café|cafe", "Yes, opposite the bank."], ["Thank you so much!", "welcome|no problem|problem|ok|bye", "You're welcome!"]] },
  emo: [["⬅️ + ↩️", "turn left"], ["🗺️ + 😵", "lost"]] },

{ e: "🏷️", t: ["In the shop", "Mağazada", "В магазине"],
  g: ["Can I try it on? — Geyinib yoxlaya bilərəm? I'll take it — Bunu götürürəm. Can I pay by card?", "Can I try it on? — Можно примерить? I'll take it — Я это беру. Can I pay by card?"],
  can: ["buy things in a shop and pay", "mağazada alış-veriş edib ödəmək", "покупать в магазине и расплачиваться"],
  nat: ["I'm just looking, thanks.", "Sadəcə baxıram, sağ olun.", "Я просто смотрю, спасибо."],
  x: `
buy | almaq | покупать | 🛍️ | I want to *buy* a new phone. | Yeni telefon almaq istəyirəm. | Я хочу купить новый телефон.
pay | ödəmək | платить | 💳 | Can I *pay* by card? | Kartla ödəyə bilərəm? | Можно заплатить картой?
card | kart | карта | 💳 | I don't have a *card*. | Kartım yoxdur. | У меня нет карты.
cash | nağd pul | наличные | 💵 | I pay in *cash*. | Nağd ödəyirəm. | Я плачу наличными.
try on | geyinib yoxlamaq | примерять | 🪞 | Can I *try on* this jacket? | Bu gödəkçəni geyinib yoxlaya bilərəm? | Можно примерить эту куртку?
too big | çox böyük | слишком большой | 🐘 | These shoes are *too big*. | Bu ayaqqabılar çox böyükdür. | Эти туфли слишком большие.
too small | çox kiçik | слишком маленький | 🐜 | The T-shirt is *too small*. | Futbolka çox kiçikdir. | Футболка слишком маленькая.
sale | endirim | распродажа | 🔖 | Everything is on *sale* today! | Bu gün hər şey endirimdədir! | Сегодня всё со скидкой!
bag | çanta, paket | сумка, пакет | 🛍️ | Do you need a *bag*? | Paket lazımdır? | Вам нужен пакет?
receipt | qəbz | чек | 🧾 | Here is your *receipt*. | Budur, qəbziniz. | Вот ваш чек.
price tag | qiymət etiketi | ценник | 🏷️ | Look at the *price tag*. | Qiymət etiketinə bax. | Посмотри на ценник.
closed | bağlı | закрыт | 🔒 | Sorry, we're *closed*. | Bağışlayın, bağlıyıq. | Извините, мы закрыты.`,
  f: `These shoes are ___ big. | too | to, two
Can I pay ___ card? | by | with, on`,
  chat: [["Hello! Can I help you? 🛍️", "Salam! Kömək edə bilərəm? 🛍️", "Здравствуйте! Чем помочь? 🛍️", ["I'm just looking, thanks.", "I'm just buying a looking.", "No, I'm a shop."]],
    ["OK! We have a sale today. Everything is 20% off.", "Yaxşı! Bu gün endirim var. Hər şey 20% ucuzdur.", "Хорошо! Сегодня распродажа. Всё со скидкой 20%.", ["Great! Can I try on this jacket?", "Great! Can I try on this sale?", "No, I'm 20%."]],
    ["Of course! … How is it?", "Əlbəttə! … Necədir?", "Конечно! … Ну как?", ["It's too small. Do you have a bigger size?", "It's too small me size.", "It's a receipt."]]],
  boss: { t: ["You are buying a present in a shop.", "Mağazada hədiyyə alırsan.", "Ты покупаешь подарок в магазине."],
    q: [["Hello! Can I help you?", "yes|no|looking|want|need|buy|present|gift|please", "Yes, I want to buy a present."], ["Is it for a man or a woman?", "man|woman|boy|girl|mum|dad|friend|sister|brother", "For a woman. My mum."], ["How about this bag? It's thirty manats.", "ok|yes|no|expensive|cheap|like|take|nice", "It's nice. I'll take it."], ["Cash or card?", "cash|card", "By card, please."], ["Do you need a bag?", "yes|no|please|thank", "Yes, please."]] },
  emo: [["🔖 + 🛍️", "sale"], ["🧾", "receipt"]] },

{ e: "🌦️", t: ["Weather and seasons", "Hava və fəsillər", "Погода и сезоны"],
  g: ["It's sunny / rainy / cold. Fəsillər: spring, summer, autumn, winter. in summer — yayda.", "It's sunny / rainy / cold. Сезоны: spring, summer, autumn, winter. in summer — летом."],
  can: ["talk about the weather and seasons", "hava və fəsillər haqqında danışmaq", "говорить о погоде и временах года"],
  nat: ["It's freezing today!", "Bu gün şaxtadır!", "Сегодня просто мороз!"],
  x: `
weather | hava | погода | 🌦️ | The *weather* is nice today. | Bu gün hava gözəldir. | Сегодня хорошая погода.
sunny | günəşli | солнечно | ☀️ | It's *sunny* and warm. | Hava günəşli və istidir. | Солнечно и тепло.
rainy | yağışlı | дождливо | 🌧️ | It's *rainy* in Ganja. | Gəncədə hava yağışlıdır. | В Гяндже дождливо.
windy | küləkli | ветрено | 🌬️ | Baku is very *windy*. | Bakı çox küləklidir. | В Баку очень ветрено.
snow | qar | снег | ❄️ | There is a lot of *snow* in winter. | Qışda çoxlu qar olur. | Зимой много снега.
warm | ilıq, isti | тёплый | 🌡️ | It's *warm* in spring. | Yazda hava ilıqdır. | Весной тепло.
spring | yaz | весна | 🌷 | Flowers open in *spring*. | Çiçəklər yazda açır. | Цветы распускаются весной.
summer | yay | лето | 🏖️ | We swim in the sea in *summer*. | Yayda dənizdə çimirik. | Летом мы купаемся в море.
autumn | payız | осень | 🍂 | Leaves fall in *autumn*. | Payızda yarpaqlar tökülür. | Осенью падают листья.
winter | qış | зима | ⛄ | It's cold in *winter*. | Qışda soyuq olur. | Зимой холодно.
umbrella | çətir | зонт | ☂️ | Take an *umbrella*! It's rainy. | Çətir götür! Yağış yağır. | Возьми зонт! Идёт дождь.
season | fəsil | время года | 🗓️ | My favourite *season* is summer. | Sevimli fəslim yaydır. | Моё любимое время года — лето.`,
  f: `It's cold ___ winter. | in | on, at
___ is sunny today. | It | This, There`,
  chat: [["Hi! What's the weather like in Baku today? 🌦️", "Salam! Bu gün Bakıda hava necədir? 🌦️", "Привет! Какая сегодня погода в Баку? 🌦️", ["It's sunny but windy.", "It's a sunny umbrella.", "It's Baku today."]],
    ["Here in London it's rainy again! ☔", "Burada, Londonda yenə yağış yağır! ☔", "А в Лондоне опять дождь! ☔", ["Take an umbrella!", "Take a summer!", "I'm rainy too me."]],
    ["What's your favourite season?", "Sevimli fəslin hansıdır?", "Какое твоё любимое время года?", ["Spring. It's warm and green.", "Spring is my favourite umbrella.", "I'm a season."]]],
  boss: { t: ["You are a TV weather presenter today! Answer the questions.", "Bu gün televiziyada hava proqnozunu sən aparırsan! Suallara cavab ver.", "Сегодня ты ведущий прогноза погоды! Ответь на вопросы."],
    q: [["What's the weather like today?", "sunny|rainy|windy|cloudy|cold|hot|warm|snow|nice", "It's sunny and warm."], ["Is it cold or warm?", "cold|warm|hot", "It's warm."], ["Do people need an umbrella?", "yes|no|umbrella", "No, they don't."], ["What's the weather like in winter?", "cold|snow|rainy|windy|freezing", "It's cold and snowy."], ["What's your favourite season?", "spring|summer|autumn|winter", "Summer!"]] },
  emo: [["☔ + 🌧️", "umbrella"], ["🍂 + 🍁", "autumn"]] },

{ e: "📨", t: ["A short message to a colleague", "İş yoldaşına qısa mesaj", "Короткое сообщение коллеге"],
  g: ["Qısa iş mesajı: Hi Anna, … Thanks! / Best, Ali. Can you…? Please send…", "Короткое рабочее сообщение: Hi Anna, … Thanks! / Best, Ali. Can you…? Please send…"],
  can: ["write a short message to a colleague", "iş yoldaşına qısa mesaj yazmaq", "написать короткое сообщение коллеге"],
  nat: ["Thanks in advance!", "Əvvəlcədən təşəkkürlər!", "Заранее спасибо!"],
  x: `
send | göndərmək | отправлять | 📤 | Please *send* me the file. | Zəhmət olmasa, faylı mənə göndər. | Пожалуйста, пришли мне файл.
file | fayl | файл | 📁 | The *file* is on my computer. | Fayl kompüterimdədir. | Файл у меня на компьютере.
today | bu gün | сегодня | 📅 | Can you call me *today*? | Bu gün mənə zəng edə bilərsən? | Можешь позвонить мне сегодня?
tomorrow | sabah | завтра | 🌅 | See you *tomorrow*! | Sabah görüşərik! | Увидимся завтра!
later | sonra | позже | ⏳ | I'll call you *later*. | Sənə sonra zəng edəcəyəm. | Я позвоню тебе позже.
ready | hazır | готов | ✅ | The report is *ready*. | Hesabat hazırdır. | Отчёт готов.
thanks | sağ ol | спасибо | 🙏 | *Thanks* for your help! | Köməyin üçün sağ ol! | Спасибо за помощь!
busy today | bu gün məşğul | занят сегодня | 📅 | I'm *busy today*. Can we talk tomorrow? | Bu gün məşğulam. Sabah danışa bilərik? | Я сегодня занят. Можем поговорить завтра?
check | yoxlamaq | проверять | ✔️ | Can you *check* my email? | E-poçtumu yoxlaya bilərsən? | Можешь проверить моё письмо?
report | hesabat | отчёт | 📊 | I'm writing the *report*. | Hesabatı yazıram. | Я пишу отчёт.
sick day | xəstəlik günü | больничный день | 🤧 | I'm taking a *sick day* today. | Bu gün xəstəlik səbəbindən işə gəlmirəm. | Сегодня я на больничном.
see you | görüşərik | увидимся | 👋 | *See you* at the meeting! | İclasda görüşərik! | Увидимся на совещании!`,
  f: `Can you ___ me the file, please? | send | sends, sending
The report ___ ready. | is | are, be`,
  chat: [["Anna: Hi! Is the report ready? 📊", "Anna: Salam! Hesabat hazırdır? 📊", "Анна: Привет! Отчёт готов? 📊", ["Not yet. It's ready tomorrow.", "Not yet. It's ready yesterday tomorrow.", "Yes, I'm report."]],
    ["OK. Can you send me the file today?", "Oldu. Faylı bu gün mənə göndərə bilərsən?", "Хорошо. Можешь прислать файл сегодня?", ["Sure, I'll send it later.", "Sure, I'll send it a later me.", "No, I'm file."]],
    ["Thanks in advance! 🙏", "Əvvəlcədən təşəkkürlər! 🙏", "Заранее спасибо! 🙏", ["No problem! See you tomorrow.", "No problem! See you file.", "Yes, I'm advance."]]],
  boss: { t: ["You are sick today. Your colleague Max writes to you. Reply to his questions.", "Bu gün xəstəsən. İş yoldaşın Maks sənə yazır. Suallarına cavab ver.", "Ты сегодня болеешь. Коллега Макс пишет тебе. Ответь на его вопросы."],
    q: [["Hi! Are you at work today?", "no|sick|home|not", "No, I'm sick today."], ["Oh no! Is the report ready?", "yes|no|not yet|tomorrow|ready", "Not yet. It's ready tomorrow."], ["Can you send me the file?", "yes|sure|ok|send|can", "Yes, I'll send it now."], ["Can you come to the meeting tomorrow?", "yes|no|can|maybe|sure", "Yes, I can."], ["Get well soon!", "thank|thanks", "Thanks!"]] },
  emo: [["📤 + 📁", "send"], ["🤧 + 📅", "sick day"]] },

{ e: "🎂", t: ["Birthday", "Ad günü", "День рождения"],
  g: ["Happy birthday! — Ad günün mübarək! Dəvət: Would you like to come to my party? Tarix: on 5 May.", "Happy birthday! — С днём рождения! Приглашение: Would you like to come to my party? Дата: on 5 May."],
  can: ["invite friends to a birthday party and wish happy birthday", "dostlarını ad gününə dəvət etmək və təbrik etmək", "приглашать на день рождения и поздравлять"],
  nat: ["Many happy returns!", "Neçə belə illərə!", "Многая лета! (С днём рождения!)"],
  x: `
birthday | ad günü | день рождения | 🎂 | Today is my *birthday*! | Bu gün mənim ad günümdür! | Сегодня мой день рождения!
party | qonaqlıq | вечеринка | 🎉 | Come to my *party*! | Qonaqlığıma gəl! | Приходи на мою вечеринку!
invite | dəvət etmək | приглашать | 💌 | I *invite* all my friends. | Bütün dostlarımı dəvət edirəm. | Я приглашаю всех своих друзей.
present | hədiyyə | подарок | 🎁 | This *present* is for you. | Bu hədiyyə sənin üçündür. | Этот подарок для тебя.
candle | şam | свеча | 🕯️ | There are ten *candles* on the cake. | Tortun üstündə on şam var. | На торте десять свечей.
balloon | şar | воздушный шар | 🎈 | I have a red *balloon*. | Qırmızı şarım var. | У меня красный шарик.
birthday card | ad günü açıqcası | открытка ко дню рождения | 💌 | I write a *birthday card*. | Ad günü açıqcası yazıram. | Я пишу открытку на день рождения.
guest | qonaq | гость | 🧑‍🤝‍🧑 | We have ten *guests*. | On qonağımız var. | У нас десять гостей.
month | ay | месяц | 📅 | My birthday is this *month*. | Ad günüm bu aydadır. | Мой день рождения в этом месяце.
May | may | май | 🌸 | My birthday is in *May*. | Ad günüm maydadır. | Мой день рождения в мае.
celebrate | qeyd etmək | праздновать | 🥳 | We *celebrate* at home. | Evdə qeyd edirik. | Мы празднуем дома.
happy birthday | ad günün mübarək | с днём рождения | 🎉 | *Happy birthday*, Emma! | Ad günün mübarək, Emma! | С днём рождения, Эмма!`,
  f: `My birthday is ___ May. | in | on, at
Would you like ___ come to my party? | to | for, at`,
  chat: [["Hey! My birthday is on Saturday! 🎂 Would you like to come to my party?", "Hey! Şənbə günü ad günümdür! 🎂 Qonaqlığıma gəlmək istəyirsən?", "Эй! В субботу мой день рождения! 🎂 Придёшь на вечеринку?", ["Yes, I'd love to! What time?", "Yes, I'd love to! What birthday?", "No, I'm Saturday."]],
    ["At five o'clock, at my house.", "Saat beşdə, bizim evdə.", "В пять, у меня дома.", ["Great! What present do you want?", "Great! What candle are you?", "No, I'm five."]],
    ["Just come! You're the best present! 😄", "Sadəcə gəl! Ən yaxşı hədiyyə sənsən! 😄", "Просто приходи! Ты лучший подарок! 😄", ["Ha-ha! See you on Saturday!", "Ha-ha! See you on present!", "No, I'm the best."]]],
  boss: { t: ["Plan a birthday party! Your friend asks you questions.", "Ad günü qonaqlığı planlaşdır! Dostun sənə suallar verir.", "Спланируй день рождения! Друг задаёт тебе вопросы."],
    q: [["When is your birthday?", "january|february|march|april|may|june|july|august|september|october|november|december|in|on", "It's in May."], ["Where is the party?", "at|in|home|house|café|cafe|park|restaurant", "At my house."], ["How many guests do you invite?", "one|two|three|four|five|six|seven|eight|nine|ten|twenty|guest|friend", "Ten guests."], ["What present do you want?", "want|book|phone|bag|game|ball|bike|flowers|present|nothing", "I want a new book."], ["Happy birthday!", "thank|thanks", "Thank you!"]] },
  emo: [["🎂 + 🕯️", "candle"], ["🎁", "present"]] }
];
