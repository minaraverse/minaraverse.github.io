/* ===== MILINGO COURSE CONTENT: 3 sections, 24 units, easy → hard =====
   w: en|az|ru|emoji   s: en|az|ru   f: sentence with ___|answer|wrong,wrong|hint emoji   g: [tip az, tip ru] */
const COURSE_SECTIONS = [
 { lv: "A1", t: ["Beginner", "Başlanğıc", "Начало"], units: [
  { e: "👋", t: ["Hello!", "Salamlaşma", "Приветствия"],
    g: ["Hello — hər kəsə «salam». Good morning səhər, good night yatmazdan əvvəl deyilir. Adı soruşmaq: What is your name? Cavab: My name is …",
        "Hello — «привет» для всех. Good morning — утром, good night — перед сном. Спросить имя: What is your name? Ответ: My name is …"],
    w: `hello|salam|привет|👋
goodbye|sağ ol, əlvida|до свидания|🙋
thank you|təşəkkür edirəm|спасибо|🙏
please|zəhmət olmasa|пожалуйста|🥺
yes|bəli|да|✅
no|xeyr|нет|❌
good morning|sabahınız xeyir|доброе утро|🌅
good night|gecəniz xeyrə|спокойной ночи|🌙
sorry|bağışlayın|извините|😔
name|ad|имя|🏷️`,
    s: `Hello, I am Minara.|Salam, mən Minarayam.|Привет, я Минара.
My name is Ali.|Mənim adım Əlidir.|Меня зовут Али.
What is your name?|Sənin adın nədir?|Как тебя зовут?
Nice to meet you.|Tanış olmağıma şadam.|Приятно познакомиться.
How are you?|Necəsən?|Как дела?
I am fine, thank you.|Yaxşıyam, təşəkkür edirəm.|Я в порядке, спасибо.
Good morning, teacher!|Sabahınız xeyir, müəllim!|Доброе утро, учитель!
Goodbye, see you tomorrow.|Sağ ol, sabah görüşərik.|До свидания, увидимся завтра.`,
    f: `My ___ is Ali.|name|am,you|🏷️
How ___ you?|are|is,am|🙂
Nice to ___ you.|meet|name,fine|🤝
Thank ___!|you|me,your|🙏` },

  { e: "🧑", t: ["I, you, he, she, it", "Mən, sən, o (he, she, it)", "Я, ты, он, она, оно"],
    g: ["Azərbaycan dilində «o» bir sözdür, ingiliscə üç: he — kişi, oğlan; she — qadın, qız; it — əşya və heyvan. «I» (mən) həmişə böyük hərflə yazılır. we — biz, they — onlar, you — sən/siz.",
        "he — он (мужчина), she — она (женщина), it — для предметов и животных, даже если по-русски «он» (стол → it). «I» (я) всегда с большой буквы. we — мы, they — они, you — ты/вы."],
    w: `I|mən|я|🙋
you|sən, siz|ты, вы|👉
he|o (kişi)|он|👨
she|o (qadın)|она|👩
it|o (əşya, heyvan)|оно, это|📦
we|biz|мы|👨‍👩‍👧
they|onlar|они|👥
boy|oğlan|мальчик|👦
girl|qız|девочка|👧
man|kişi|мужчина|🧔
woman|qadın|женщина|👩‍🦰`,
    s: `He is a boy.|O oğlandır.|Он мальчик.
She is a girl.|O qızdır.|Она девочка.
It is a box.|O qutudur.|Это коробка.
We are friends.|Biz dostuq.|Мы друзья.
They are students.|Onlar tələbədirlər.|Они студенты.
You are my friend.|Sən mənim dostumsan.|Ты мой друг.
I am a woman.|Mən qadınam.|Я женщина.`,
    f: `___ is a doctor.|He|She,It|👨
___ is my mother.|She|He,It|👩
___ is a cat.|It|He,She|🐱
___ are happy.|They|He,It|👥
___ am Minara.|I|She,We|🙋` },

  { e: "🟰", t: ["am, is, are", "am, is, are (olmaq)", "am, is, are (быть)"],
    g: ["I → am, he/she/it → is, you/we/they → are. İnkar: not əlavə olunur — I am not sad. Sual: fel önə keçir — Are you hungry?",
        "I → am, he/she/it → is, you/we/they → are. В русском «быть» пропускается, в английском — никогда. Отрицание: I am not sad. Вопрос: Are you hungry?"],
    w: `happy|xoşbəxt|счастливый|😊
sad|kədərli|грустный|😢
tired|yorğun|уставший|😴
hungry|ac|голодный|🤤
teacher|müəllim|учитель|🧑‍🏫
student|tələbə|студент|🧑‍🎓
doctor|həkim|врач|🧑‍⚕️
at home|evdə|дома|🏠
cold|soyuq|холодно|🥶
hot|isti|жарко|🥵`,
    s: `I am happy.|Mən xoşbəxtəm.|Я счастлив.
She is a doctor.|O həkimdir.|Она врач.
We are at home.|Biz evdəyik.|Мы дома.
They are tired.|Onlar yorğundurlar.|Они устали.
He is not a teacher.|O müəllim deyil.|Он не учитель.
Are you hungry?|Sən acsan?|Ты голоден?
It is cold today.|Bu gün soyuqdur.|Сегодня холодно.
I am not sad.|Mən kədərli deyiləm.|Мне не грустно.`,
    f: `I ___ a student.|am|is,are|🧑‍🎓
She ___ tired.|is|am,are|😴
We ___ at home.|are|is,am|🏠
___ you happy?|Are|Is,Am|😊
He ___ not a doctor.|is|are,am|🧑‍⚕️` },

  { e: "🎒", t: ["Things: a / an", "Əşyalar: a / an", "Вещи: a / an"],
    g: ["a — samitlə başlayan sözdən əvvəl (a book, a pen), an — saitlə başlayan sözdən əvvəl (an apple, an egg). Azərbaycan dilində artikl yoxdur, ingiliscə tək əşyanın qarşısında mütləq olmalıdır.",
        "a — перед согласным звуком (a book), an — перед гласным (an apple, an egg). В русском артиклей нет, а в английском перед одним предметом он обязателен."],
    w: `book|kitab|книга|📕
pen|qələm|ручка|🖊️
apple|alma|яблоко|🍎
egg|yumurta|яйцо|🥚
bag|çanta|сумка|👜
umbrella|çətir|зонт|☂️
phone|telefon|телефон|📱
orange|portağal|апельсин|🍊
chair|stul|стул|🪑
key|açar|ключ|🔑`,
    s: `This is a book.|Bu kitabdır.|Это книга.
I have an apple.|Məndə bir alma var.|У меня есть яблоко.
It is an umbrella.|O çətirdir.|Это зонт.
Where is my phone?|Telefonum haradadır?|Где мой телефон?
The bag is on the chair.|Çanta stulun üstündədir.|Сумка на стуле.
This is a pen, not a key.|Bu qələmdir, açar deyil.|Это ручка, а не ключ.
She has an orange.|Onun bir portağalı var.|У неё есть апельсин.`,
    f: `This is ___ book.|a|an,am|📕
It is ___ egg.|an|a,is|🥚
I have ___ orange.|an|a,are|🍊
She has ___ phone.|a|an,is|📱
It is ___ umbrella.|an|a,am|☂️` },

  { e: "🐾", t: ["Animals", "Heyvanlar", "Животные"],
    g: ["Heyvanlar üçün it işlənir: It is a cat. Cəm: bir neçə heyvan — sözün sonuna -s: cats, dogs. Bəziləri dəyişmir: fish → fish.",
        "Для животных обычно it: It is a cat. Множественное число: -s (cats, dogs). Некоторые не меняются: fish → fish."],
    w: `cat|pişik|кошка|🐱
dog|it|собака|🐶
bird|quş|птица|🐦
fish|balıq|рыба|🐟
horse|at|лошадь|🐴
cow|inək|корова|🐮
lion|şir|лев|🦁
elephant|fil|слон|🐘
rabbit|dovşan|кролик|🐰
monkey|meymun|обезьяна|🐵
bear|ayı|медведь|🐻
duck|ördək|утка|🦆`,
    s: `The cat is small.|Pişik balacadır.|Кошка маленькая.
The elephant is big.|Fil böyükdür.|Слон большой.
I have a dog.|Mənim itim var.|У меня есть собака.
The bird can fly.|Quş uça bilir.|Птица умеет летать.
A lion is strong.|Şir güclüdür.|Лев сильный.
The monkey is funny.|Meymun gülməlidir.|Обезьяна смешная.
Fish live in water.|Balıqlar suda yaşayır.|Рыбы живут в воде.
My rabbit is white.|Mənim dovşanım ağdır.|Мой кролик белый.`,
    f: `The dog ___ big.|is|are,am|🐶
___ is my cat.|It|He,They|🐱
I have ___ elephant.|an|a,am|🐘
Two ___ are in the garden.|cats|cat,a cat|🐱🐱` },

  { e: "🎨", t: ["Colours", "Rənglər", "Цвета"],
    g: ["Sifət ismdən əvvəl gəlir: a red car (car red yox). Sifət cəmdə dəyişmir: red cars. Rəngi soruşmaq: What colour is it?",
        "Прилагательное стоит перед существительным: a red car. Во множественном числе не меняется: red cars. Спросить цвет: What colour is it?"],
    w: `red|qırmızı|красный|🔴
blue|mavi, göy|синий|🔵
green|yaşıl|зелёный|🟢
yellow|sarı|жёлтый|🟡
black|qara|чёрный|⚫
white|ağ|белый|⚪
orange|narıncı|оранжевый|🟠
purple|bənövşəyi|фиолетовый|🟣
brown|qəhvəyi|коричневый|🟤
pink|çəhrayı|розовый|🩷`,
    s: `The sky is blue.|Səma mavidir.|Небо голубое.
I like red apples.|Mən qırmızı almaları sevirəm.|Я люблю красные яблоки.
My bag is black.|Mənim çantam qaradır.|Моя сумка чёрная.
The grass is green.|Ot yaşıldır.|Трава зелёная.
What colour is your car?|Maşının hansı rəngdədir?|Какого цвета твоя машина?
Her dress is pink.|Onun paltarı çəhrayıdır.|Её платье розовое.
The banana is yellow.|Banan sarıdır.|Банан жёлтый.`,
    f: `The sky ___ blue.|is|are,am|🌤️
Bananas are ___.|yellow|blue,black|🍌
I have a ___ car.|red|reds,a red|🚗
What ___ is your bag?|colour|colours,red|👜` },

  { e: "🔢", t: ["Numbers", "Rəqəmlər", "Числа"],
    g: ["İki və daha çox olanda isimə -s artırılır: one cat, two cats. Yaş belə deyilir: I am 20 years old. (I have 20 years — səhvdir!)",
        "Если больше одного — добавляем -s: one cat, two cats. Возраст: I am 20 years old. (I have 20 years — ошибка!)"],
    w: `one|bir|один|1️⃣
two|iki|два|2️⃣
three|üç|три|3️⃣
four|dörd|четыре|4️⃣
five|beş|пять|5️⃣
six|altı|шесть|6️⃣
seven|yeddi|семь|7️⃣
eight|səkkiz|восемь|8️⃣
nine|doqquz|девять|9️⃣
ten|on|десять|🔟
hundred|yüz|сто|💯`,
    s: `I have two cats.|Mənim iki pişiyim var.|У меня две кошки.
She is ten years old.|Onun on yaşı var.|Ей десять лет.
There are seven days in a week.|Həftədə yeddi gün var.|В неделе семь дней.
How old are you?|Neçə yaşın var?|Сколько тебе лет?
I am twenty years old.|Mənim iyirmi yaşım var.|Мне двадцать лет.
Three apples, please.|Üç alma, zəhmət olmasa.|Три яблока, пожалуйста.`,
    f: `I have two ___.|cats|cat,a cat|🐱🐱
She is ten years ___.|old|age,year|🎂
How ___ are you?|old|many,much|🎂
I ___ twenty years old.|am|have,is|🙋` },

  { e: "👨‍👩‍👧", t: ["Family", "Ailə", "Семья"],
    g: ["Kimin olduğunu göstərən sözlər: my — mənim, your — sənin, his — onun (kişi), her — onun (qadın), its — onun (heyvan), our — bizim, their — onların.",
        "Притяжательные: my — мой, your — твой, his — его, her — её, its — его (о животном/предмете), our — наш, their — их."],
    w: `mother|ana|мама|👩
father|ata|папа|👨
sister|bacı|сестра|👧
brother|qardaş|брат|👦
baby|körpə|малыш|👶
grandmother|nənə|бабушка|👵
grandfather|baba|дедушка|👴
son|oğul|сын|🧒
daughter|qız (övlad)|дочь|👧🏻
family|ailə|семья|👨‍👩‍👧
husband|ər|муж|🤵
wife|həyat yoldaşı|жена|👰`,
    s: `This is my mother.|Bu mənim anamdır.|Это моя мама.
My father is a doctor.|Mənim atam həkimdir.|Мой папа врач.
I have one brother.|Mənim bir qardaşım var.|У меня один брат.
Her sister is a student.|Onun bacısı tələbədir.|Её сестра студентка.
His grandmother is kind.|Onun nənəsi mehribandır.|Его бабушка добрая.
We are a big family.|Biz böyük ailəyik.|Мы большая семья.
The baby is sleeping.|Körpə yatır.|Малыш спит.`,
    f: `___ name is Tom.|His|Her,Its|👨
___ name is Anna.|Her|His,Its|👩
I love ___ family.|my|I,me|❤️
We love ___ grandmother.|our|we,us|👵` },

  { e: "🍞", t: ["Food & drinks", "Yemək və içki", "Еда и напитки"],
    g: ["eat — yemək, drink — içmək. Nəzakətlə istəmək: Can I have …, please? Bəzi sözlər sayılmır: water, milk, bread — onlarla «a» işlənmir: some water.",
        "eat — есть, drink — пить. Вежливая просьба: Can I have …, please? Неисчисляемые: water, milk, bread — без «a»: some water."],
    w: `bread|çörək|хлеб|🍞
water|su|вода|💧
milk|süd|молоко|🥛
tea|çay|чай|🍵
coffee|qəhvə|кофе|☕
cheese|pendir|сыр|🧀
meat|ət|мясо|🥩
rice|düyü|рис|🍚
soup|şorba|суп|🍲
cake|tort|торт|🎂
juice|şirə|сок|🧃
salad|salat|салат|🥗`,
    s: `I drink tea every morning.|Mən hər səhər çay içirəm.|Я пью чай каждое утро.
She eats bread and cheese.|O, çörək və pendir yeyir.|Она ест хлеб и сыр.
Can I have some water?|Bir az su ala bilərəm?|Можно мне воды?
The soup is hot.|Şorba istidir.|Суп горячий.
We like cake.|Biz tortu sevirik.|Мы любим торт.
I don't eat meat.|Mən ət yemirəm.|Я не ем мясо.
A coffee with milk, please.|Südlü qəhvə, zəhmət olmasa.|Кофе с молоком, пожалуйста.`,
    f: `I ___ tea every day.|drink|eat,drinks|🍵
She ___ salad.|eats|eat,eating|🥗
Can I ___ some water?|have|has,having|💧
I don't ___ meat.|eat|eats,eating|🥩` },

  { e: "👉", t: ["This, that, these", "Bu, o, bunlar", "Этот, тот, эти"],
    g: ["this — bu (yaxında, tək), these — bunlar (yaxında, cəm), that — o (uzaqda, tək), those — onlar (uzaqda, cəm).",
        "this — этот (близко), these — эти (близко), that — тот (далеко), those — те (далеко)."],
    w: `this|bu|этот, это|👇
that|o|тот, то|👉
these|bunlar|эти|🫳
those|onlar (orada)|те|🫱
car|maşın|машина|🚗
house|ev|дом|🏠
tree|ağac|дерево|🌳
shoe|ayaqqabı|туфля|👟
flower|gül|цветок|🌸
star|ulduz|звезда|⭐`,
    s: `This is my house.|Bu mənim evimdir.|Это мой дом.
That car is red.|O maşın qırmızıdır.|Та машина красная.
These flowers are beautiful.|Bu güllər gözəldir.|Эти цветы красивые.
Those trees are tall.|O ağaclar hündürdür.|Те деревья высокие.
Are these your shoes?|Bunlar sənin ayaqqabılarındır?|Это твои туфли?
Look at that star!|O ulduza bax!|Посмотри на ту звезду!`,
    f: `___ is my pen.|This|These,Those|👇
___ are my shoes.|These|This,That|👇👟👟
___ car over there is fast.|That|Those,These|👉🚗
___ trees over there are old.|Those|That,This|👉🌳🌳` }
 ]},
 { lv: "A2", t: ["Everyday life", "Gündəlik həyat", "Повседневная жизнь"], units: [
  { e: "🏃", t: ["Action verbs", "Hərəkət felləri", "Глаголы действия"],
    g: ["Fel hərəkəti bildirir: eat, run, read. I/you/we/they ilə fel dəyişmir: We play football. Like + to: I like to dance.",
        "Глагол — это действие: eat, run, read. С I/you/we/they глагол не меняется: We play football. I like to dance."],
    w: `eat|yemək (yeyir)|есть|🍽️
drink|içmək|пить|🥤
sleep|yatmaq|спать|😴
read|oxumaq (kitab)|читать|📖
write|yazmaq|писать|✍️
run|qaçmaq|бегать|🏃
swim|üzmək|плавать|🏊
sing|mahnı oxumaq|петь|🎤
dance|rəqs etmək|танцевать|💃
play|oynamaq|играть|⚽
go|getmək|идти|🚶
cook|bişirmək|готовить|🍳`,
    s: `I read books.|Mən kitab oxuyuram.|Я читаю книги.
We play football.|Biz futbol oynayırıq.|Мы играем в футбол.
They swim in the sea.|Onlar dənizdə üzürlər.|Они плавают в море.
I like to dance.|Mən rəqs etməyi sevirəm.|Я люблю танцевать.
You cook very well.|Sən çox yaxşı yemək bişirirsən.|Ты очень хорошо готовишь.
Let's go home.|Gəl evə gedək.|Пойдём домой.
Children sleep at night.|Uşaqlar gecə yatırlar.|Дети спят ночью.`,
    f: `I ___ books.|read|reads,reading|📖
We ___ football.|play|plays,playing|⚽
They ___ in the sea.|swim|swims,swimming|🏊
I like to ___.|dance|dances,dancing|💃` },

  { e: "🔁", t: ["Present Simple", "İndiki sadə zaman", "Present Simple"],
    g: ["Vərdiş, hər gün olan iş. he/she/it ilə felə -s/-es: she works, he watches. İnkar: don't / doesn't + fel (doesn't like — likes yox!). Sual: Do you…? Does she…?",
        "Привычки и регулярные действия. С he/she/it — окончание -s/-es: she works, he watches. Отрицание: don't / doesn't + глагол (doesn't like, не likes!). Вопрос: Do you…? Does she…?"],
    w: `every day|hər gün|каждый день|📅
always|həmişə|всегда|♾️
usually|adətən|обычно|🔄
sometimes|bəzən|иногда|🔀
never|heç vaxt|никогда|🚫
work|işləmək|работать|💼
live|yaşamaq|жить|🏡
like|xoşlamaq|нравиться|❤️
watch|baxmaq (TV)|смотреть|📺
study|öyrənmək|учиться|📚`,
    s: `She works in a bank.|O, bankda işləyir.|Она работает в банке.
He lives in Baku.|O, Bakıda yaşayır.|Он живёт в Баку.
My brother watches TV every day.|Qardaşım hər gün televizora baxır.|Мой брат смотрит телевизор каждый день.
I always drink coffee.|Mən həmişə qəhvə içirəm.|Я всегда пью кофе.
She doesn't like milk.|O, südü sevmir.|Она не любит молоко.
Do you study English?|Sən ingilis dili öyrənirsən?|Ты учишь английский?
Does he play tennis?|O, tennis oynayır?|Он играет в теннис?
We never eat fast food.|Biz heç vaxt fast-food yemirik.|Мы никогда не едим фастфуд.`,
    f: `She ___ in a bank.|works|work,working|💼
He ___ TV every day.|watches|watch,watchs|📺
___ you like tea?|Do|Does,Are|🍵
___ she speak English?|Does|Do,Is|🗣️
He doesn't ___ milk.|like|likes,liking|🥛` },

  { e: "🎁", t: ["have / has", "have / has (var)", "have / has (иметь)"],
    g: ["I/you/we/they → have, he/she/it → has. «Mənim … var» = I have … Sualda və inkarda yenə have: Does she have…? He doesn't have…",
        "«У меня есть» = I have. I/you/we/they → have, he/she/it → has. В вопросе и отрицании снова have: Does she have…? He doesn't have…"],
    w: `bike|velosiped|велосипед|🚲
computer|kompüter|компьютер|💻
ticket|bilet|билет|🎟️
idea|fikir|идея|💡
question|sual|вопрос|❓
time|vaxt|время|⏰
money|pul|деньги|💰
children|uşaqlar|дети|🧒
gift|hədiyyə|подарок|🎁
car|maşın|машина|🚗`,
    s: `I have a bike.|Mənim velosipedim var.|У меня есть велосипед.
She has a new computer.|Onun yeni kompüteri var.|У неё новый компьютер.
Do you have a ticket?|Sənin biletin var?|У тебя есть билет?
He doesn't have time.|Onun vaxtı yoxdur.|У него нет времени.
I have a question.|Mənim bir sualım var.|У меня есть вопрос.
We have a good idea.|Bizim yaxşı fikrimiz var.|У нас есть хорошая идея.
They have two children.|Onların iki uşağı var.|У них двое детей.`,
    f: `She ___ a cat.|has|have,is|🐱
I ___ a question.|have|has,am|❓
Does he ___ a car?|have|has,is|🚗
We ___ a lot of time.|have|has,are|⏰` },

  { e: "⏰", t: ["My day & time", "Gündəlik rejim", "Мой день и время"],
    g: ["Saatla at: at 7 o'clock. Günün hissəsi ilə in: in the morning, in the evening. Amma: at night. Saatı soruşmaq: What time is it?",
        "Со временем — at: at 7 o'clock. С частью дня — in: in the morning. Но: at night. Спросить время: What time is it?"],
    w: `wake up|oyanmaq|просыпаться|⏰
breakfast|səhər yeməyi|завтрак|🥞
lunch|nahar|обед|🍱
dinner|şam yeməyi|ужин|🍝
morning|səhər|утро|🌅
evening|axşam|вечер|🌇
shower|duş|душ|🚿
school|məktəb|школа|🏫
bed|çarpayı|кровать|🛏️
clock|saat|часы|🕐`,
    s: `I wake up at seven o'clock.|Mən saat yeddidə oyanıram.|Я просыпаюсь в семь часов.
She has breakfast at eight.|O, saat səkkizdə səhər yeməyi yeyir.|Она завтракает в восемь.
We go to school in the morning.|Biz səhər məktəbə gedirik.|Мы идём в школу утром.
He takes a shower every evening.|O, hər axşam duş qəbul edir.|Он принимает душ каждый вечер.
What time is it?|Saat neçədir?|Который час?
I go to bed at ten.|Mən saat onda yatıram.|Я ложусь спать в десять.`,
    f: `I wake up ___ seven.|at|in,on|⏰
We go to school ___ the morning.|in|at,on|🌅
What ___ is it?|time|hour,clock|🕐
I go to bed ___ ten.|at|in,on|🛏️` },

  { e: "🏙️", t: ["In the city", "Şəhərdə", "В городе"],
    g: ["There is — tək şey var (There is a park), there are — cəm (There are two shops). Yer: next to — yanında, near — yaxınlığında, opposite — qarşısında. turn left/right — sola/sağa dön.",
        "There is — есть (один): There is a park. There are — есть (много). next to — рядом с, near — недалеко, opposite — напротив. turn left/right — налево/направо."],
    w: `shop|mağaza|магазин|🏪
bank|bank|банк|🏦
hospital|xəstəxana|больница|🏥
park|park|парк|🏞️
street|küçə|улица|🛣️
station|stansiya|станция|🚉
cinema|kinoteatr|кинотеатр|🎬
restaurant|restoran|ресторан|🍽️
museum|muzey|музей|🏛️
library|kitabxana|библиотека|📚`,
    s: `Where is the bank?|Bank haradadır?|Где банк?
The park is near my house.|Park evimin yaxınlığındadır.|Парк рядом с моим домом.
Go straight and turn left.|Düz gedin və sola dönün.|Идите прямо и поверните налево.
There is a cinema on this street.|Bu küçədə kinoteatr var.|На этой улице есть кинотеатр.
The museum is next to the library.|Muzey kitabxananın yanındadır.|Музей рядом с библиотекой.
Is there a restaurant here?|Burada restoran var?|Здесь есть ресторан?`,
    f: `___ is a park near here.|There|It,This|🏞️
The shop is ___ to the bank.|next|near,between|🏪
Turn ___ at the station.|left|straight,go|⬅️
There ___ two cinemas here.|are|is,am|🎬` },

  { e: "💪", t: ["can / can't", "Bacarıram: can / can't", "Умею: can / can't"],
    g: ["can — bacarmaq, edə bilmək. can-dan sonra fel dəyişmir və to işlənmir: She can swim (cans / can to swim — səhv). İnkar: can't. Sual: Can you…?",
        "can — уметь, мочь. После can глагол без изменений и без to: She can swim (не cans, не can to swim). Отрицание: can't. Вопрос: Can you…?"],
    w: `can|bacarmaq|мочь, уметь|✅
can't|bacarmamaq|не мочь|⛔
drive|maşın sürmək|водить|🚗
speak|danışmaq|говорить|🗣️
climb|dırmaşmaq|лазать|🧗
ride|sürmək (velosiped)|ездить|🚴
draw|şəkil çəkmək|рисовать|🎨
help|kömək etmək|помогать|🤝
fly|uçmaq|летать|🕊️
jump|tullanmaq|прыгать|🦘`,
    s: `I can swim.|Mən üzə bilirəm.|Я умею плавать.
She can speak three languages.|O, üç dildə danışa bilir.|Она говорит на трёх языках.
He can't drive.|O, maşın sürə bilmir.|Он не умеет водить.
Can you help me?|Mənə kömək edə bilərsən?|Ты можешь мне помочь?
Birds can fly.|Quşlar uça bilir.|Птицы умеют летать.
I can't draw very well.|Mən yaxşı şəkil çəkə bilmirəm.|Я не очень хорошо рисую.`,
    f: `She can ___ English.|speak|speaks,speaking|🗣️
___ you help me?|Can|Do,Are|🤝
Fish ___ climb trees.|can't|can,is|🐟
He can ___ a bike.|ride|rides,riding|🚴` },

  { e: "🎬", t: ["Right now: -ing", "Elə indi: -ing", "Прямо сейчас: -ing"],
    g: ["Hazırda baş verən iş: am/is/are + fel-ing. I am reading now. Present Simple — vərdiş (I read every day), Continuous — elə bu an (I am reading now).",
        "Действие прямо сейчас: am/is/are + глагол-ing. I am reading now. Present Simple — привычка, Continuous — то, что происходит в этот момент."],
    w: `now|indi|сейчас|⏳
look|baxmaq|смотреть|👀
listen|qulaq asmaq|слушать|🎧
wait|gözləmək|ждать|⌛
talk|danışmaq (söhbət)|разговаривать|💬
rain|yağış yağmaq|дождь идёт|🌧️
smile|gülümsəmək|улыбаться|😊
wear|geyinmək|носить, быть одетым|👕
laugh|gülmək|смеяться|😂
bus|avtobus|автобус|🚌`,
    s: `I am reading a book now.|Mən indi kitab oxuyuram.|Я сейчас читаю книгу.
She is talking on the phone.|O, telefonla danışır.|Она разговаривает по телефону.
It is raining.|Yağış yağır.|Идёт дождь.
They are waiting for the bus.|Onlar avtobus gözləyirlər.|Они ждут автобус.
What are you doing?|Nə edirsən?|Что ты делаешь?
He is not listening.|O, qulaq asmır.|Он не слушает.
Why are you laughing?|Niyə gülürsən?|Почему ты смеёшься?`,
    f: `She is ___ now.|sleeping|sleep,sleeps|😴
They ___ waiting for the bus.|are|is,am|🚌
It ___ raining.|is|are,am|🌧️
What are you ___?|doing|do,does|🤔` },

  { e: "☀️", t: ["Clothes & weather", "Geyim və hava", "Одежда и погода"],
    g: ["Hava: It is sunny / rainy / windy / cold. Geyinmək: put on (geyin), wear (əynində olmaq): She is wearing a red dress.",
        "Погода: It is sunny / rainy / windy / cold. Одеваться: put on (надеть), wear (быть одетым в): She is wearing a red dress."],
    w: `coat|palto|пальто|🧥
dress|don, paltar|платье|👗
shirt|köynək|рубашка|👔
hat|papaq|шляпа|🎩
jeans|cins şalvar|джинсы|👖
sunny|günəşli|солнечно|☀️
rainy|yağışlı|дождливо|🌧️
windy|küləkli|ветрено|🌬️
snow|qar|снег|❄️
warm|isti (mülayim)|тепло|🌤️`,
    s: `It is sunny today.|Bu gün günəşlidir.|Сегодня солнечно.
Put on your coat, it is cold.|Paltonu gey, soyuqdur.|Надень пальто, холодно.
She is wearing a red dress.|O, qırmızı don geyinib.|Она в красном платье.
It often snows in winter.|Qışda tez-tez qar yağır.|Зимой часто идёт снег.
Baku is very windy.|Bakı çox küləklidir.|В Баку очень ветрено.
I need a new shirt.|Mənə yeni köynək lazımdır.|Мне нужна новая рубашка.`,
    f: `It ___ sunny today.|is|are,has|☀️
Baku is very ___.|windy|wind,winds|🌬️
She is ___ a hat.|wearing|wear,wears|🎩
Put ___ your coat!|on|in,at|🧥` }
 ]},
 { lv: "B1", t: ["Tell your story", "Öz hekayəni danış", "Расскажи свою историю"], units: [
  { e: "⏪", t: ["Past: -ed", "Keçmiş zaman: -ed", "Прошедшее: -ed"],
    g: ["Keçmişdə olub bitən iş: fel + -ed (play → played). Sual və inkarda did / didn't + felin əsas forması: Did you watch? I didn't watch (didn't watched — səhv).",
        "Законченное действие в прошлом: глагол + -ed (play → played). В вопросе и отрицании — did / didn't + начальная форма: Did you watch? I didn't watch (не didn't watched)."],
    w: `yesterday|dünən|вчера|📆
last week|keçən həftə|на прошлой неделе|🗓️
ago|əvvəl|назад|⏮️
visited|ziyarət etdi|посетил|🧳
watched|baxdı|смотрел|📺
played|oynadı|играл|🎮
cooked|bişirdi|приготовил|🍳
called|zəng etdi|позвонил|📞
walked|gəzdi|гулял|🚶
studied|öyrəndi, oxudu|учил|📚`,
    s: `I watched a film yesterday.|Mən dünən film izlədim.|Я вчера смотрел фильм.
She visited her grandmother last week.|O, keçən həftə nənəsinə baş çəkdi.|Она навестила бабушку на прошлой неделе.
We played football after school.|Biz dərsdən sonra futbol oynadıq.|Мы играли в футбол после школы.
He called me two days ago.|O, iki gün əvvəl mənə zəng etdi.|Он позвонил мне два дня назад.
Did you cook dinner?|Şam yeməyini sən bişirdin?|Ты приготовил ужин?
I didn't study last night.|Mən dünən axşam dərs oxumadım.|Я не учился вчера вечером.`,
    f: `I ___ a film yesterday.|watched|watch,watches|📺
Did you ___ dinner?|cook|cooked,cooks|🍳
She didn't ___ me.|call|called,calls|📞
We ___ in the park yesterday.|walked|walk,walks|🚶` },

  { e: "🌀", t: ["Past: went, saw, ate", "Keçmiş: went, saw, ate", "Прошедшее: went, saw, ate"],
    g: ["Bəzi fellər -ed qəbul etmir, yadda saxlanılır: go → went, see → saw, eat → ate, buy → bought. was — I/he/she/it, were — you/we/they.",
        "Неправильные глаголы нужно запомнить: go → went, see → saw, eat → ate, buy → bought. was — I/he/she/it, were — you/we/they."],
    w: `went|getdi|пошёл, поехал|🚶
saw|gördü|увидел|👀
ate|yedi|съел|🍽️
drank|içdi|выпил|🥤
bought|aldı|купил|🛍️
made|düzəltdi|сделал|🛠️
came|gəldi|пришёл|🏃
took|götürdü|взял|✋
wrote|yazdı|написал|✍️
was|idi|был|🕰️`,
    s: `We went to the sea last summer.|Biz keçən yay dənizə getdik.|Прошлым летом мы ездили на море.
I saw a big lion at the zoo.|Mən zooparkda böyük bir şir gördüm.|Я видел большого льва в зоопарке.
She bought a new bag.|O, yeni çanta aldı.|Она купила новую сумку.
He came home late.|O, evə gec gəldi.|Он поздно пришёл домой.
The film was very good.|Film çox yaxşı idi.|Фильм был очень хорошим.
They were at school yesterday.|Onlar dünən məktəbdə idilər.|Вчера они были в школе.
I wrote a letter to my friend.|Mən dostuma məktub yazdım.|Я написал письмо другу.`,
    f: `We ___ to Gabala last year.|went|go,goed|🏔️
She ___ a new phone yesterday.|bought|buyed,buy|📱
They ___ at home yesterday.|were|was,are|🏠
I ___ tired yesterday.|was|were,am|😴` },

  { e: "📏", t: ["Bigger, better, the best", "Müqayisə", "Сравнение"],
    g: ["Qısa sifət: -er + than (bigger than — ...dan böyük). Uzun sifət: more + sifət (more beautiful). Ən: the -est / the most. good → better → the best, bad → worse → the worst.",
        "Короткие прилагательные: -er + than (bigger than). Длинные: more + прилагательное (more beautiful). Самый: the -est / the most. good → better → the best, bad → worse → the worst."],
    w: `bigger|daha böyük|больше|🐘
smaller|daha kiçik|меньше|🐭
taller|daha hündür|выше|🦒
faster|daha sürətli|быстрее|🐆
better|daha yaxşı|лучше|👍
worse|daha pis|хуже|👎
more beautiful|daha gözəl|красивее|🌺
the best|ən yaxşı|лучший|🏆
cheaper|daha ucuz|дешевле|🏷️
older|daha yaşlı|старше|👴`,
    s: `An elephant is bigger than a dog.|Fil itdən böyükdür.|Слон больше собаки.
My sister is taller than me.|Bacım məndən hündürdür.|Моя сестра выше меня.
This book is better than that one.|Bu kitab o birindən yaxşıdır.|Эта книга лучше той.
A cheetah is the fastest animal.|Gepard ən sürətli heyvandır.|Гепард — самое быстрое животное.
Baku is more beautiful at night.|Bakı gecələr daha gözəldir.|Баку красивее ночью.
Tea is cheaper than coffee here.|Burada çay qəhvədən ucuzdur.|Здесь чай дешевле кофе.`,
    f: `A lion is ___ than a cat.|bigger|big,biggest|🦁
She is taller ___ me.|than|that,then|🦒
This is the ___ day of my life!|best|better,good|🏆
Paris is ___ beautiful than my town.|more|most,much|🗼` },

  { e: "🔮", t: ["Future: will & going to", "Gələcək zaman", "Будущее время"],
    g: ["will — anda verilən qərar, söz, proqnoz: I will help you. going to — əvvəlcədən plan: We are going to travel. will-dən sonra fel dəyişmir.",
        "will — решение в момент речи, обещание, прогноз: I will help you. going to — заранее запланированное: We are going to travel. После will глагол без изменений."],
    w: `tomorrow|sabah|завтра|🌄
next week|gələn həftə|на следующей неделе|📅
plan|plan|план|🗺️
holiday|tətil|отпуск, каникулы|🏖️
travel|səyahət etmək|путешествовать|✈️
maybe|bəlkə|может быть|🤔
soon|tezliklə|скоро|⏩
promise|söz vermək|обещать|🤞
future|gələcək|будущее|🔮
dream|arzu|мечта|💭`,
    s: `I will call you tomorrow.|Sabah sənə zəng edəcəyəm.|Я позвоню тебе завтра.
We are going to travel next week.|Gələn həftə səyahət edəcəyik.|На следующей неделе мы собираемся путешествовать.
It will rain soon.|Tezliklə yağış yağacaq.|Скоро пойдёт дождь.
She is going to study medicine.|O, tibb oxumaq niyyətindədir.|Она собирается изучать медицину.
Maybe I will come.|Bəlkə gələrəm.|Может быть, я приду.
I promise I will help you.|Söz verirəm, sənə kömək edəcəyəm.|Обещаю, я тебе помогу.`,
    f: `I ___ call you tomorrow.|will|am,did|📞
We are going ___ travel.|to|for,will|✈️
It will ___ soon.|rain|rains,raining|🌧️
She ___ going to study.|is|will,are|📚` },

  { e: "✈️", t: ["Travel", "Səyahət", "Путешествия"],
    g: ["Səyahətdə lazım olan suallar: How much is…? — …neçəyədir? Where is…? — …haradadır? Can you show me…? — …göstərə bilərsiniz? I have a booking — bronum var.",
        "Полезные вопросы в поездке: How much is…? — Сколько стоит…? Where is…? — Где…? Can you show me…? — Покажите…? I have a booking — у меня бронь."],
    w: `passport|pasport|паспорт|🛂
airport|hava limanı|аэропорт|🛫
hotel|otel|отель|🏨
suitcase|çamadan|чемодан|🧳
map|xəritə|карта|🗺️
beach|çimərlik|пляж|🏖️
mountain|dağ|гора|⛰️
booking|bron|бронь|📝
flight|uçuş, reys|рейс|✈️
room|otaq|номер, комната|🛏️`,
    s: `Where is my passport?|Pasportum haradadır?|Где мой паспорт?
I have a booking for two nights.|İki gecəlik bronum var.|У меня бронь на две ночи.
Our flight is at six o'clock.|Bizim uçuşumuz saat altıdadır.|Наш рейс в шесть часов.
How much is a room?|Otaq neçəyədir?|Сколько стоит номер?
Can you show me on the map?|Xəritədə göstərə bilərsiniz?|Можете показать на карте?
We want to see the mountains.|Biz dağları görmək istəyirik.|Мы хотим увидеть горы.`,
    f: `I have a ___ for two nights.|booking|book,booked|📝
How ___ is a room?|much|many,more|💰
Our flight is ___ six o'clock.|at|in,on|✈️
Where ___ my passport?|is|are,am|🛂` },

  { e: "💛", t: ["Feelings", "Hisslər", "Чувства"],
    g: ["-ed sifət insanın hissidir: I am bored, I am excited. -ing — hissə səbəb olan şey: The film is boring. Sözönləri: proud of, excited about, afraid of.",
        "-ed — что чувствует человек: I am bored. -ing — что вызывает чувство: The film is boring. Предлоги: proud of, excited about, afraid of."],
    w: `excited|çox sevinən, həvəsli|в восторге|🤩
nervous|həyəcanlı (qorxu ilə)|нервничает|😬
angry|qəzəbli|злой|😠
bored|darıxan|скучающий|🥱
surprised|təəccüblənmiş|удивлённый|😮
scared|qorxmuş|испуганный|😨
proud|qürurlu|гордый|🦚
worried|narahat|обеспокоенный|😟
calm|sakit|спокойный|😌
lonely|tənha|одинокий|🥀`,
    s: `I am excited about the trip.|Səfərə görə çox sevinirəm.|Я в восторге от поездки.
She is nervous before the exam.|O, imtahandan əvvəl həyəcanlıdır.|Она нервничает перед экзаменом.
Why are you angry?|Niyə qəzəblisən?|Почему ты злишься?
The film was boring.|Film darıxdırıcı idi.|Фильм был скучным.
My parents are proud of me.|Valideynlərim mənimlə qürur duyur.|Родители гордятся мной.
Don't worry, be calm.|Narahat olma, sakit ol.|Не волнуйся, будь спокоен.`,
    f: `The film was boring, so I was ___.|bored|boring,bore|🥱
She is proud ___ her son.|of|on,with|🦚
Don't ___, everything is OK.|worry|worried,worrying|😟
I am excited ___ the trip.|about|on,at|🤩` }
 ]}
];
