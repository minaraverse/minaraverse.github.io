/* ===== Safiverse lesson exercises, level 2: every type gets harder from A1 to B2
   🎧 dlg  — listen to a conversation, answer a question about it
   🔎 spot — find the mistake in a sentence (B1+: also choose the right word)
   🔤 anag — put the letters in order (B1+: extra letters that don't belong)
   ✍️ gapt — write the missing word (from B1; A2 gets 4 choices instead of 3)
   🎙 say  — say the sentence; the words appear live as the child speaks, then the app checks them
   🎙 ans  — answer a question with your own sentence by voice (live text) — checked by rules per level ===== */
Object.assign(UI.en, { e2Almost: "Almost! Try once more next time", e2Dlg: "Listen to the conversation and answer", e2Spot: "Find the mistake", e2SpotFix: "Now choose the right word", e2Anag: "Put the letters in order", e2Gapt: "Write the missing word",
  e2Say: "Say this sentence", e2Dict: "Listen and write the sentence", e2Ans: "Answer the question by voice", e2AnsT: "Write your answer to the question", e2Mic: "Tap and speak", e2MicOn: "Listening… tap to stop",
  e2MicAgain: "Say it again", e2None: "I didn't hear you — tap and try again", e2Type: "⌨️ Can't speak now? Write it", e2Speak: "🎙 Speak instead", e2Sample: "Example:", e2Heard: "You said:", e2Words: "Practise these words:",
  e2Longer: "Say a little more — at least {n} words", e2Script: "Conversation:", e2Play: "Listen", e2Write: "Write here…", e2MicNo: "No microphone access — write your answer instead." });
Object.assign(UI.az, { e2Almost: "Az qaldı! Növbəti dəfə alınacaq", e2Dlg: "Söhbəti dinlə və cavab ver", e2Spot: "Səhvi tap", e2SpotFix: "İndi düzgün sözü seç", e2Anag: "Hərfləri düz sırala", e2Gapt: "Buraxılmış sözü yaz",
  e2Say: "Bu cümləni de", e2Dict: "Dinlə və cümləni yaz", e2Ans: "Suala səslə cavab ver", e2AnsT: "Suala cavabını yaz", e2Mic: "Bas və danış", e2MicOn: "Dinləyirəm… bitirəndə bas",
  e2MicAgain: "Yenidən de", e2None: "Səsini eşitmədim — bas və bir də de", e2Type: "⌨️ İndi danışa bilmirsən? Yaz", e2Speak: "🎙 Səslə de", e2Sample: "Nümunə:", e2Heard: "Sən dedin:", e2Words: "Bu sözləri məşq et:",
  e2Longer: "Bir az ətraflı de — ən azı {n} söz", e2Script: "Söhbət:", e2Play: "Dinlə", e2Write: "Bura yaz…", e2MicNo: "Mikrofona icazə yoxdur — cavabını yaz." });
Object.assign(UI.ru, { e2Almost: "Почти! В следующий раз получится", e2Dlg: "Послушай разговор и ответь", e2Spot: "Найди ошибку", e2SpotFix: "Теперь выбери правильное слово", e2Anag: "Расставь буквы по порядку", e2Gapt: "Впиши пропущенное слово",
  e2Say: "Скажи это предложение", e2Dict: "Послушай и напиши предложение", e2Ans: "Ответь на вопрос голосом", e2AnsT: "Напиши ответ на вопрос", e2Mic: "Нажми и говори", e2MicOn: "Слушаю… нажми, когда закончишь",
  e2MicAgain: "Сказать ещё раз", e2None: "Я тебя не услышал — нажми и скажи ещё раз", e2Type: "⌨️ Не можешь говорить? Напиши", e2Speak: "🎙 Сказать голосом", e2Sample: "Пример:", e2Heard: "Ты сказал(а):", e2Words: "Потренируй эти слова:",
  e2Longer: "Скажи чуть подробнее — хотя бы {n} слов", e2Script: "Разговор:", e2Play: "Слушать", e2Write: "Пиши здесь…", e2MicNo: "Нет доступа к микрофону — напиши ответ." });

const SR2 = window.SpeechRecognition || window.webkitSpeechRecognition;
/* level of the unit's section: 0 A1 · 1 A2 · 2 B1 · 3 B2 and above */
const exLv = U => Math.min(3, Math.max(0, ["A1", "A2", "B1", "B2", "C1", "C2"].indexOf((SECTIONS[U.sec] || {}).lv)));

/* ---------- 🎧 conversations: [voice, name, line] · questions: [en, az, ru, answer, [wrong…]] ---------- */
const DLG = [
  /* A1 — 2 lines, 3 choices, question translated */
  [[["f", "Emma", "Hi! I'm Emma. I'm eight."], ["m", "John", "Hello, Emma! I'm John. I'm nine."]],
    [["What is the boy's name?", "Oğlanın adı nədir?", "Как зовут мальчика?", "John", ["George", "Max"]], ["How old is John?", "John neçə yaşındadır?", "Сколько лет Джону?", "nine", ["eight", "ten"]]]],
  [[["f", "Anna", "I have a cat. It is white."], ["m", "Max", "I have a dog. It is big and brown."]],
    [["What colour is Anna's cat?", "Annanın pişiyi hansı rəngdədir?", "Какого цвета кошка Анны?", "white", ["brown", "black"]], ["What does Max have?", "Maxın nəyi var?", "Что есть у Макса?", "a dog", ["a cat", "a bird"]]]],
  [[["f", "Bella", "Do you like apples?"], ["m", "Lewis", "No, I don't. I like bananas."]],
    [["What does Lewis like?", "Lewis nəyi sevir?", "Что любит Льюис?", "bananas", ["apples", "oranges"]]]],
  [[["m", "George", "Who is this?"], ["f", "Laura", "This is my brother. His name is Oscar."]],
    [["Who is Oscar?", "Oscar kimdir?", "Кто такой Оскар?", "Laura's brother", ["Laura's father", "Laura's friend"]]]],
  [[["f", "Nicole", "Where is my bag?"], ["m", "Charles", "It's on the table."]],
    [["Where is the bag?", "Çanta haradadır?", "Где сумка?", "on the table", ["under the chair", "in the box"]]]],
  [[["f", "Jessica", "Is it cold today?"], ["m", "Kimi", "Yes, it is. Take your coat."]],
    [["What is the weather like?", "Hava necədir?", "Какая погода?", "cold", ["hot", "sunny"]]]],
  [[["m", "Tyson", "What time is it?"], ["f", "Angelina", "It's three o'clock."]],
    [["What time is it?", "Saat neçədir?", "Который час?", "three o'clock", ["two o'clock", "five o'clock"]]]],
  [[["f", "Jennifer", "What's your favourite colour?"], ["m", "Max", "My favourite colour is green."]],
    [["What is Max's favourite colour?", "Maxın sevimli rəngi hansıdır?", "Любимый цвет Макса?", "green", ["red", "blue"]]]],
  /* A2 — 3–4 lines, 3 choices, question translated */
  [[["f", "Emma", "What did you do on Saturday?"], ["m", "John", "I went to the park with my sister. We played football."], ["f", "Emma", "That sounds fun! I stayed at home and read a book."]],
    [["Where did John go?", "John hara getdi?", "Куда ходил Джон?", "to the park", ["to the cinema", "to school"]], ["What did Emma do?", "Emma nə etdi?", "Что делала Эмма?", "She read a book.", ["She played football.", "She went shopping."]]]],
  [[["f", "Anna", "How much is this T-shirt?"], ["m", "Lewis", "It's twelve manats. The blue one is ten."], ["f", "Anna", "I'll take the blue one, please."]],
    [["Which T-shirt does Anna buy?", "Anna hansı köynəyi alır?", "Какую футболку покупает Анна?", "the blue one", ["the red one", "the green one"]], ["How much does she pay?", "O neçə manat ödəyir?", "Сколько она платит?", "ten manats", ["twelve manats", "twenty manats"]]]],
  [[["m", "George", "Would you like to come to my birthday party on Friday?"], ["f", "Bella", "I'd love to! What time does it start?"], ["m", "George", "At five o'clock, at my house."]],
    [["When is the party?", "Ad günü nə vaxtdır?", "Когда праздник?", "on Friday at five", ["on Saturday at five", "on Friday at three"]]]],
  [[["f", "Nicole", "What time do you get up?"], ["m", "Oscar", "I usually get up at seven, but on Sundays I sleep until nine."]],
    [["When does Oscar get up on Sundays?", "Oscar bazar günləri nə vaxt durur?", "Когда Оскар встаёт по воскресеньям?", "at nine", ["at seven", "at eight"]]]],
  [[["f", "Laura", "Excuse me, where is the library?"], ["m", "Charles", "Go straight and turn left. It's next to the bank."]],
    [["Where is the library?", "Kitabxana haradadır?", "Где библиотека?", "next to the bank", ["next to the park", "opposite the school"]]]],
  [[["m", "Kimi", "Are you ready to order?"], ["f", "Jessica", "Yes, I'd like chicken soup and a salad."], ["m", "Kimi", "Anything to drink?"], ["f", "Jessica", "Just water, please."]],
    [["What does Jessica drink?", "Jessica nə içir?", "Что пьёт Джессика?", "water", ["juice", "tea"]], ["What does Jessica eat?", "Jessica nə yeyir?", "Что ест Джессика?", "soup and a salad", ["pizza", "chicken and rice"]]]],
  [[["m", "Max", "You look tired. Are you OK?"], ["f", "Jennifer", "I have a headache. I didn't sleep well last night."]],
    [["What is wrong with Jennifer?", "Jenniferin nəyi var?", "Что с Дженнифер?", "She has a headache.", ["She is hungry.", "She is cold."]]]],
  [[["m", "Tyson", "What do you do in your free time?"], ["f", "Angelina", "I play the piano and I draw. What about you?"], ["m", "Tyson", "I love swimming."]],
    [["What does Tyson love?", "Tyson nəyi sevir?", "Что любит Тайсон?", "swimming", ["drawing", "playing the piano"]]]],
  /* B1 — 4 lines, 4 choices, English only */
  [[["f", "Emma", "Are you going anywhere this summer?"], ["m", "George", "We're planning to visit my grandparents in Gabala. We go every year."], ["f", "Emma", "Lucky you! I've never been there."], ["m", "George", "You should come with us one day. The mountains are beautiful."]],
    [["Who is George going to visit?", "", "", "his grandparents", ["his cousins", "his friends", "his teacher"]], ["How often does George go to Gabala?", "", "", "every year", ["every month", "once in his life", "never"]]]],
  [[["f", "Laura", "I can't find my phone anywhere."], ["m", "John", "When did you last use it?"], ["f", "Laura", "On the bus this morning, I think."], ["m", "John", "Call the bus company — someone might have found it."]],
    [["Where did Laura probably lose her phone?", "", "", "on the bus", ["at school", "at home", "in a shop"]], ["What does John suggest?", "", "", "calling the bus company", ["buying a new phone", "going home", "waiting until tomorrow"]]]],
  [[["f", "Anna", "How was your first day at the new job?"], ["m", "Max", "Tiring, but my colleagues were really friendly."], ["f", "Anna", "What do you have to do?"], ["m", "Max", "I answer customers' emails and help with the website."]],
    [["How did Max feel after his first day?", "", "", "tired", ["bored", "angry", "ill"]], ["What is one of Max's tasks?", "", "", "answering emails", ["driving a bus", "cooking", "teaching children"]]]],
  [[["f", "Bella", "Have you seen the new film at the cinema?"], ["m", "Charles", "Yes, I saw it last weekend. Honestly, it was a bit too long."], ["f", "Bella", "Really? Everyone says it's great."], ["m", "Charles", "The ending was good, but the middle was boring."]],
    [["What did Charles think of the film?", "", "", "It was too long.", ["It was too short.", "It was perfect.", "It was scary."]]]],
  [[["f", "Nicole", "This soup is delicious! Did you make it yourself?"], ["m", "Lewis", "Yes, it's my mum's recipe. The secret is fresh herbs."], ["f", "Nicole", "Could you teach me how to make it?"], ["m", "Lewis", "Sure, come on Saturday."]],
    [["What is the secret of the soup?", "", "", "fresh herbs", ["a lot of salt", "expensive meat", "lemon juice"]], ["When will Nicole learn the recipe?", "", "", "on Saturday", ["tomorrow", "on Monday", "next month"]]]],
  [[["m", "Oscar", "You've been running a lot lately."], ["f", "Jessica", "I'm training for a ten-kilometre race next month."], ["m", "Oscar", "Wow! How far can you run now?"], ["f", "Jessica", "About seven kilometres, so I still need practice."]],
    [["Why is Jessica running a lot?", "", "", "She is preparing for a race.", ["She wants to lose weight.", "Her doctor told her to.", "She works in a park."]], ["How far can she run now?", "", "", "about seven kilometres", ["ten kilometres", "three kilometres", "one kilometre"]]]],
  [[["m", "Kimi", "I heard you're moving to a new flat."], ["f", "Jennifer", "Yes, it's closer to my office, so I won't need to drive."], ["m", "Kimi", "Is it bigger?"], ["f", "Jennifer", "A little smaller, but it has a lovely balcony."]],
    [["Why is Jennifer moving?", "", "", "The flat is closer to her office.", ["The flat is bigger.", "The flat is cheaper.", "Her family lives there."]]]],
  [[["m", "Tyson", "Shall we have a picnic tomorrow?"], ["f", "Angelina", "The forecast says it's going to rain all day."], ["m", "Tyson", "Then let's go to the museum instead."], ["f", "Angelina", "Good idea. I haven't been there for ages."]],
    [["What will they probably do tomorrow?", "", "", "go to the museum", ["have a picnic", "stay at home", "go swimming"]]]],
  /* B2 — 4–5 lines, 4 choices, attitude and meaning between the lines */
  [[["f", "Emma", "So, did you accept the offer from that company in London?"], ["m", "John", "Not yet. The salary is much better, but I'd have to leave my family behind."], ["f", "Emma", "Couldn't they come with you?"], ["m", "John", "My parents are getting older, and I don't want to be so far away."], ["f", "Emma", "That's a tough decision."]],
    [["Why hasn't John accepted the offer yet?", "", "", "He doesn't want to be far from his parents.", ["The salary is too low.", "He doesn't like London.", "The company hasn't replied."]], ["How does Emma feel about his situation?", "", "", "She understands that it's difficult.", ["She thinks he should go at once.", "She is angry with him.", "She isn't interested."]]]],
  [[["f", "Laura", "I'm thinking of giving up social media for a month."], ["m", "George", "Seriously? How would you keep in touch with people?"], ["f", "Laura", "Phone calls, messages — the old-fashioned way. I just spend too many hours scrolling."], ["m", "George", "Fair enough. I'd probably last two days."]],
    [["What is Laura's main reason?", "", "", "She wastes too much time on it.", ["She lost her account.", "Her friends left it.", "It is too expensive."]], ["What does George say about himself?", "", "", "He couldn't do it for long.", ["He has already done it.", "He thinks it's a bad idea.", "He will join her."]]]],
  [[["f", "Anna", "The meeting has been moved to Thursday."], ["m", "Charles", "Again? That's the third time this month."], ["f", "Anna", "I know. Apparently the director's schedule keeps changing."], ["m", "Charles", "Well, as long as we get the budget approved before the deadline."]],
    [["How does Charles feel?", "", "", "annoyed", ["delighted", "frightened", "surprised it happened for the first time"]], ["What matters most to Charles?", "", "", "getting the budget approved in time", ["meeting the director", "changing the date", "finishing work early"]]]],
  [[["f", "Bella", "You should've seen the queue at the new café — it went round the block."], ["m", "Max", "Was the coffee worth the wait?"], ["f", "Bella", "Honestly? It was average. I think people go there just to post photos."], ["m", "Max", "Typical."]],
    [["What does Bella suggest about the café?", "", "", "It's popular for its look, not its coffee.", ["Its coffee is the best in town.", "It's always empty.", "It's too far away."]]]],
  [[["f", "Nicole", "Did you manage to fix the washing machine?"], ["m", "Oscar", "I watched three tutorials and took the whole thing apart."], ["f", "Nicole", "And?"], ["m", "Oscar", "And now I have a box of spare screws and a machine that still doesn't work."], ["f", "Nicole", "Maybe it's time to call a professional."]],
    [["What happened?", "", "", "Oscar's repair attempt failed.", ["Oscar fixed the machine.", "They bought a new machine.", "A professional repaired it."]]]],
  [[["f", "Jessica", "I've decided to study medicine after all."], ["m", "Lewis", "I thought you'd set your heart on architecture."], ["f", "Jessica", "I had, but volunteering at the hospital last summer changed my mind."], ["m", "Lewis", "Well, you've always been good at helping people."]],
    [["What changed Jessica's mind?", "", "", "volunteering at a hospital", ["her parents' advice", "a film she saw", "failing an exam"]], ["What does Lewis think?", "", "", "Medicine suits her.", ["She should choose architecture.", "She is making a mistake.", "He isn't sure."]]]],
  [[["m", "Kimi", "The tickets sold out in ten minutes."], ["f", "Jennifer", "Ten minutes? I was on the website the second they went on sale!"], ["m", "Kimi", "Same here. Someone said there might be a second concert."], ["f", "Jennifer", "I won't hold my breath."]],
    [["What does Jennifer mean by «I won't hold my breath»?", "", "", "She doesn't expect it to happen.", ["She is very excited.", "She is going swimming.", "She will buy tickets now."]]]],
  [[["m", "Tyson", "Your presentation was brilliant — the client loved it."], ["f", "Angelina", "Thanks, though I was so nervous I nearly forgot the last slide."], ["m", "Tyson", "Nobody noticed. You came across as really confident."]],
    [["How did Angelina feel during the presentation?", "", "", "nervous", ["bored", "relaxed", "angry"]], ["What did the audience think?", "", "", "She seemed confident.", ["She seemed nervous.", "Some slides were missing.", "It was too long."]]]]
];
const DLG_LV = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3];

/* ---------- 🎙 open questions by level: [en, az, ru, example answer, [checks]] ---------- */
const E2C = {
  name: [/\b(my name is|i am|name is|call me)\b/, ["Answer with a full sentence: My name is …", "Tam cümlə ilə de: My name is …", "Ответь полным предложением: My name is …"]],
  age: [/\b(i am|years old)\b/, ["Say: I am … years old.", "De: I am … years old.", "Скажи: I am … years old."]],
  colour: [/\b(red|blue|green|yellow|black|white|pink|purple|orange|brown|grey|gold|silver)\b/, ["Name a colour: My favourite colour is …", "Bir rəng de: My favourite colour is …", "Назови цвет: My favourite colour is …"]],
  have: [/\bi (have|do not have|have got|do|do not)\b|\b(yes|no)\b/, ["Use «I have …» or «I don't have …».", "«I have …» və ya «I don't have …» işlət.", "Используй «I have …» или «I don't have …»."]],
  can: [/\bi can\b/, ["Use «I can …».", "«I can …» işlət.", "Используй «I can …»."]],
  live: [/\bi (live|am from)\b|\b(from|in) [a-z]/, ["Use «I live in …».", "«I live in …» işlət.", "Используй «I live in …»."]],
  like: [/\bi (really )?(like|love|enjoy|prefer)\b|\bfavourite\b/, ["Use «I like …» or «My favourite … is …».", "«I like …» və ya «My favourite … is …» işlət.", "Используй «I like …» или «My favourite … is …»."]],
  fam: [/\b(mother|mum|father|dad|sister|brother|grandma|grandmother|granny|grandpa|grandfather|family|parents|aunt|uncle|cousin|baby)\b/, ["Name family members: my mum, my dad…", "Ailə üzvlərini de: my mum, my dad…", "Назови членов семьи: my mum, my dad…"]],
  past: [/\b(was|were|went|did|had|saw|ate|made|got|came|took|drank|slept|swam|ran|read|met|bought|wrote|gave|found|left|told|felt|won|lost|began|spent|became|built|thought|could|\w{2,}ed)\b/, ["Use the past tense: I went, I played, I ate…", "Keçmiş zamanla de: I went, I played, I ate…", "Используй прошедшее время: I went, I played, I ate…"]],
  usual: [/\bi (usually|always|often|sometimes|never|normally|go|play|watch|visit|sleep|stay|read|meet|help|clean|cook|listen|try|talk|take|walk|do|have|get)\b/, ["Talk about habits: I usually…, I often…", "Vərdişlərdən danış: I usually…, I often…", "Расскажи о привычках: I usually…, I often…"]],
  future: [/\b(will|going to|plan to|planning to|would like to|want to|hope to)\b/, ["Talk about the future: I will…, I'm going to…", "Gələcəkdən danış: I will…, I'm going to…", "Говори о будущем: I will…, I'm going to…"]],
  weather: [/\b(sunny|cold|hot|warm|rainy|raining|cloudy|windy|snowing|snowy|foggy|cool|nice|wet)\b/, ["Say: It is sunny / cold / rainy…", "De: It is sunny / cold / rainy…", "Скажи: It is sunny / cold / rainy…"]],
  there: [/\b(there is|there are|i can see|i see|i have|it has|my room has)\b/, ["Use «There is / There are …».", "«There is / There are …» işlət.", "Используй «There is / There are …»."]],
  perf: [/\b(have|has) (not )?(ever |never |already |just )?(been|visited|seen|tried|eaten|done|gone|had|met|read|travelled|traveled|lived|learnt|learned|changed|become|grown|built|opened|got|made|overcome|faced|influenced|taught|helped)\b|\bnever\b/, ["Use the present perfect: I have been…, I have never…", "Present perfect işlət: I have been…, I have never…", "Используй present perfect: I have been…, I have never…"]],
  because: [/\b(because|since|so that|that is why|the reason|as a result)\b/, ["Give a reason with «because».", "«because» ilə səbəbini de.", "Объясни причину с «because»."]],
  reason: [/\b(because|so that|to|since|for)\b/, ["Say why: because … / to …", "Səbəbini de: because … / to …", "Скажи почему: because … / to …"]],
  compare: [/\b\w+er than\b|\bmore \w+ than\b|\bless \w+ than\b|\b(better|worse|best|worst|prefer)\b/, ["Compare: bigger than, better, more … than", "Müqayisə et: bigger than, better, more … than", "Сравни: bigger than, better, more … than"]],
  opinion: [/\b(i think|in my opinion|i believe|i feel|personally|i am sure|it seems)\b/, ["Give your opinion: I think…, In my opinion…", "Fikrini de: I think…, In my opinion…", "Выскажи мнение: I think…, In my opinion…"]],
  cond: [/\b(would|i would|could)\b/, ["Use «I would …».", "«I would …» işlət.", "Используй «I would …»."]],
  contrast: [/\b(but|however|on the other hand|although|while|whereas)\b/, ["Show both sides: but, however, on the other hand", "Hər iki tərəfi göstər: but, however, on the other hand", "Покажи обе стороны: but, however, on the other hand"]],
  advice: [/\b(should|must|need to|have to|try to|would|recommend|it is important|do not)\b/, ["Give advice: You should…, It is important to…", "Məsləhət ver: You should…, It is important to…", "Дай совет: You should…, It is important to…"]],
  change: [/\b(has|have) (changed|become|grown|got|opened|built)\b|\b(changed|became|built|opened|new|more|now)\b/, ["Describe a change: has changed, there is a new…, became", "Dəyişikliyi təsvir et: has changed, there is a new…, became", "Опиши изменение: has changed, there is a new…, became"]]
};
const E2MIN = [3, 5, 7, 10];
const E2Q = [
  [["What is your name?", "Adın nədir?", "Как тебя зовут?", "My name is Safi.", ["name"]], ["How old are you?", "Neçə yaşın var?", "Сколько тебе лет?", "I am eight years old.", ["age"]],
   ["What is your favourite colour?", "Sevimli rəngin hansıdır?", "Твой любимый цвет?", "My favourite colour is blue.", ["colour"]], ["Do you have a pet?", "Ev heyvanın var?", "У тебя есть питомец?", "Yes, I have a cat.", ["have"]],
   ["What can you do?", "Nə edə bilirsən?", "Что ты умеешь?", "I can swim and draw.", ["can"]], ["Where do you live?", "Harada yaşayırsan?", "Где ты живёшь?", "I live in Baku.", ["live"]],
   ["What do you like to eat?", "Nə yeməyi sevirsən?", "Что ты любишь есть?", "I like pizza and apples.", ["like"]], ["Who is in your family?", "Ailəndə kimlər var?", "Кто в твоей семье?", "My mum, my dad and my sister.", ["fam"]]],
  [["What did you do yesterday?", "Dünən nə etdin?", "Что ты делал(а) вчера?", "Yesterday I went to the park and played with my friends.", ["past"]],
   ["What do you usually do on Sundays?", "Bazar günləri adətən nə edirsən?", "Что ты обычно делаешь по воскресеньям?", "I usually sleep late and visit my grandmother.", ["usual"]],
   ["What are you going to do this weekend?", "Bu həftə sonu nə edəcəksən?", "Что ты будешь делать в эти выходные?", "I am going to watch a film with my family.", ["future"]],
   ["What is the weather like today?", "Bu gün hava necədir?", "Какая сегодня погода?", "It is sunny and warm today.", ["weather"]],
   ["What did you eat for breakfast?", "Səhər yeməyində nə yedin?", "Что ты ел(а) на завтрак?", "I had eggs, bread and tea for breakfast.", ["past"]],
   ["Describe your bedroom.", "Yataq otağını təsvir et.", "Опиши свою спальню.", "There is a big bed and a desk in my room.", ["there"]],
   ["What do you like about your school?", "Məktəbində nəyi sevirsən?", "Что тебе нравится в школе?", "I like my teachers and my friends at school.", ["like"]],
   ["What can you see from your window?", "Pəncərəndən nə görürsən?", "Что ты видишь из окна?", "I can see a park and some tall buildings.", ["there"]]],
  [["What will you do after you finish school?", "", "", "I will go to university and study medicine.", ["future"]],
   ["Have you ever been to another country?", "", "", "Yes, I have been to Turkey. It was amazing.", ["perf"]],
   ["Why do you want to learn English?", "", "", "I want to learn English because I want to travel and work abroad.", ["reason"]],
   ["What was the best day of your life? Why?", "", "", "The best day was my birthday last year because all my friends came.", ["past", "because"]],
   ["What do you usually do when you feel stressed?", "", "", "When I feel stressed, I usually go for a walk or listen to music.", ["usual"]],
   ["How has your town changed in the last few years?", "", "", "My town has changed a lot. There are more cafés and a new park now.", ["change"]],
   ["Which is better: living in a city or in a village? Why?", "", "", "I think a city is better because there are more things to do.", ["compare", "because"]],
   ["What is the most interesting film you have seen?", "", "", "The most interesting film I have seen is Inside Out because it is clever and funny.", ["because"]]],
  [["What would you do if you won a million manats?", "", "", "If I won a million manats, I would buy a house for my parents and travel around the world.", ["cond"]],
   ["Do you think social media is good for teenagers? Why?", "", "", "I think social media can be useful, but teenagers spend too much time on it, so it can be harmful.", ["opinion", "because"]],
   ["Describe a challenge you have overcome.", "", "", "I have overcome my fear of speaking in public by practising every week in front of my class.", ["perf"]],
   ["If you could change one thing about your city, what would it be?", "", "", "If I could change one thing, I would build more parks because the city needs more green spaces.", ["cond"]],
   ["What are the advantages and disadvantages of working from home?", "", "", "Working from home saves time, but on the other hand it can be lonely and hard to focus.", ["contrast"]],
   ["How do you think technology will change education?", "", "", "I think technology will make lessons more personal, and students will learn at their own speed.", ["opinion", "future"]],
   ["What advice would you give to someone learning English?", "", "", "I would tell them to speak every day and not to be afraid of making mistakes.", ["advice"]],
   ["Tell me about a person who has influenced you.", "", "", "My grandmother has influenced me a lot because she taught me to be patient and kind.", ["perf", "because"]]]
];

/* ---------- 🔎 mistakes to plant: a correct word → a wrong one, with the rule that explains it ---------- */
const SPOT_SW = [["be", ["am", "is", "are"]], ["was", ["was", "were"]], ["do", ["do", "does"]], ["do", ["don't", "doesn't"]], ["has", ["has", "have"]], ["an", ["a", "an"]],
  ["this", ["this", "these"]], ["this", ["that", "those"]], ["many", ["much", "many"]]];
const SPOT_IRR = { went: ["goed", "past"], ate: ["eated", "past"], bought: ["buyed", "past"], came: ["comed", "past"], took: ["taked", "past"], made: ["maked", "past"], saw: ["seed", "past"], gave: ["gived", "past"],
  wrote: ["writed", "past"], ran: ["runned", "past"], children: ["childs", "irr"], men: ["mans", "irr"], women: ["womans", "irr"], feet: ["foots", "irr"], teeth: ["tooths", "irr"], mice: ["mouses", "irr"], people: ["peoples", "irr"] };
Object.assign(WHY, { irr: ["Some nouns have a special plural: child → children, man → men, foot → feet.", "Bəzi isimlər -s almır, xüsusi forması var: child → children, man → men, foot → feet.", "У некоторых существительных особое множественное число: child → children, man → men, foot → feet."] });
const capLike = (src, w) => /^[A-Z]/.test(src) ? w[0].toUpperCase() + w.slice(1) : w;
function spotMake(U, ref, lvl) {
  const S = U.S, start = /^s\d+$/.test(ref) ? +ref.slice(1) % S.length : (Math.random() * S.length) | 0, order = S.map((_, i) => S[(start + i) % S.length]);
  if (lvl >= 3) order.sort((a, b) => b.en.length - a.en.length);
  for (const s of order) { const toks = s.en.split(/\s+/), cands = [];
    toks.forEach((t, i) => { const core = t.replace(/^[^\w']+|[^\w']+$/g, ""), lw = core.toLowerCase().replace(/’/g, "'");
      if (SPOT_IRR[lw] && lvl >= 1) cands.push({ i, core, bad: SPOT_IRR[lw][0], rule: SPOT_IRR[lw][1], alts: [lw, SPOT_IRR[lw][0]] });
      SPOT_SW.forEach(([rule, set]) => { if (!set.includes(lw)) return; if (rule === "an" && !toks[i + 1]) return;
        const others = set.filter(o => o !== lw); cands.push({ i, core, bad: others[(Math.random() * others.length) | 0], rule, alts: set }); }); });
    if (!cands.length) continue;
    const c = cands[(Math.random() * cands.length) | 0], shown = toks.slice(); shown[c.i] = toks[c.i].replace(c.core, capLike(c.core, c.bad));
    const fix = shuffle([...new Set([c.core.toLowerCase(), c.bad, ...c.alts.filter(a => a !== c.core.toLowerCase() && a !== c.bad)])].slice(0, lvl >= 3 ? 4 : 3));
    return { k: "spot", s, toks: shown, err: c.i, orig: c.core.toLowerCase(), bad: c.bad, rule: c.rule, fix, lvl }; }
  return null;
}

/* ---------- 🔤 letters ---------- */
function anagMake(U, ref, lvl) {
  const ok = w => /^[a-z]+$/i.test(w.en) && w.en.length >= [3, 4, 5, 6][lvl] && w.en.length <= [6, 8, 10, 14][lvl];
  let w = /^a\d+$/.test(ref) ? U.W[+ref.slice(1) % Math.min(6, U.W.length)] : /^b\d+$/.test(ref) ? U.W[5 + (+ref.slice(1) % Math.max(1, U.W.length - 5))] : null;
  if (!w || !ok(w)) { const pool = U.W.filter(ok); w = pool.length ? pool[(Math.random() * pool.length) | 0] : U.W.find(x => /^[a-z]{3,}$/i.test(x.en)); }
  if (!w) return null;
  const word = w.en.toLowerCase(), fixed = lvl === 0 ? word[0] : "", rest = [...word.slice(fixed.length)], extra = lvl >= 2 ? Array.from({ length: lvl - 1 }, () => "aeiorstnl"[(Math.random() * 9) | 0]) : [];
  let bank = shuffle([...rest, ...extra]); for (let t = 0; t < 5 && bank.join("") === rest.join(""); t++) bank = shuffle(bank);
  return { k: "anag", w, word, fixed, bank, ans: rest, lvl };
}

/* ---------- exercise registry used by the lesson player ---------- */
let EX2_TOK = 0, EX2_REC = null;
function ex2Stop() { EX2_TOK++; try { if (EX2_REC) EX2_REC.abort(); } catch (e) {} EX2_REC = null; }
function playLines(lines, rate, onLine) {
  const tok = ++EX2_TOK; let i = 0;
  const step = () => { if (tok !== EX2_TOK) return; if (i >= lines.length) { onLine(-1); return; } const t = lines[i][2]; onLine(i); i++;
    const nxt = () => setTimeout(step, 380), h = fnv1a(t.trim());
    if (CLIPS.has(h)) { try { AUD = AUD || new Audio(); if (TTS) speechSynthesis.cancel(); AUD.pause(); AUD.src = "img/tts/" + h + ".mp3"; AUD.playbackRate = rate; if ("preservesPitch" in AUD) AUD.preservesPitch = true;
      AUD.onended = nxt; AUD.onerror = nxt; const p = AUD.play(); if (p && p.catch) p.catch(nxt); } catch (e) { nxt(); } }
    else if (TTS) { const u = new SpeechSynthesisUtterance(t); voiceFor(u, t); u.rate = .9 * rate; u.onend = nxt; u.onerror = nxt; speakU(u, t); } else nxt(); };
  step();
}
const tokN = s => dNorm(s).split(" ").filter(Boolean);
function sayScore(target, heard) { const T = tokN(target), H = tokN(heard); if (!T.length) return 0; return Math.max(0, 1 - lev(T, H) / T.length); }
function ansCheck(x, text) { const t = dNorm(text), n = t.split(" ").filter(Boolean).length, need = E2MIN[x.lvl];
  for (const c of x.q[4]) if (!E2C[c][0].test(t)) return { ok: false, hint: E2C[c][1][LANG === "ru" ? 2 : LANG === "az" ? 1 : 0] };
  if (n < need) return { ok: false, hint: L("e2Longer").replace("{n}", need) };
  return { ok: true }; }
const e2Tr = row => LANG === "ru" ? row[2] : LANG === "az" ? row[1] : "";

/* live speech block: the words appear while the child is talking */
const micHTML = typing => `<div class="dx-live" aria-live="polite"></div><input class="dx-in dx-ain" ${typing ? "" : "hidden"} autocomplete="off" autocapitalize="sentences" spellcheck="false" placeholder="${L("e2Write")}">
  ${SR2 ? `<button class="dx-mic" data-mic><span class="dx-dot"></span><b>${L("e2Mic")}</b></button><button class="dx-alt" data-alt>${typing ? L("e2Speak") : L("e2Type")}</button>` : ""}`;
function micWire(x, box, ready, score) {
  const live = box.querySelector(".dx-live"), mic = box.querySelector("[data-mic]"), alt = box.querySelector("[data-alt]"), inp = box.querySelector(".dx-ain");
  x.given = ""; x.alts = []; let tries = 0;
  const typing = on => { x.typing = on; box.classList.toggle("typing", on); inp.hidden = !on; if (alt) alt.textContent = on ? L("e2Speak") : L("e2Type"); if (on) { try { EX2_REC && EX2_REC.abort(); } catch (e) {} setTimeout(() => inp.focus(), 120); x.given = inp.value; ready(inp.value.trim().length > 1); } else { x.given = ""; ready(false); live.innerHTML = ""; } };
  if (!SR2) typing(true);
  inp.oninput = () => { x.given = inp.value; x.alts = [inp.value]; ready(inp.value.trim().length > 1); };
  if (alt) alt.onclick = () => typing(!x.typing);
  if (!mic) return;
  mic.onclick = () => {
    if (EX2_REC) { try { EX2_REC.stop(); } catch (e) {} return; }
    let rec; try { rec = new SR2(); } catch (e) { return typing(true); }
    EX2_REC = rec; rec.lang = "en-US"; rec.interimResults = true; rec.continuous = x.k === "ans" && x.lvl >= 2; rec.maxAlternatives = 3;
    try { AUD && AUD.pause(); } catch (e) {} if (TTS) speechSynthesis.cancel();
    let fin = "", alts = []; mic.classList.add("on"); mic.querySelector("b").textContent = L("e2MicOn"); live.innerHTML = `<i>…</i>`; live.classList.add("on"); ready(false);
    rec.onresult = e => { let f = "", im = ""; alts = [];
      for (let i = 0; i < e.results.length; i++) { const r = e.results[i]; if (r.isFinal) { f += (f ? " " : "") + r[0].transcript.trim(); if (e.results.length === 1) for (let a = 0; a < r.length; a++) alts.push(r[a].transcript.trim()); } else im += r[0].transcript; }
      fin = f; live.innerHTML = `<b>${esc(f)}</b> <i>${esc(im)}</i>`; };
    rec.onerror = e => { if (e.error === "not-allowed" || e.error === "service-not-allowed") { live.innerHTML = `<small>${L("e2MicNo")}</small>`; typing(true); } };
    rec.onend = () => { EX2_REC = null; mic.classList.remove("on"); live.classList.remove("on");
      if (fin) { const list = alts.length ? alts : [fin]; const best = score ? list.slice().sort((a, b) => score(b) - score(a))[0] : list[0];
        x.given = best; x.alts = list; live.innerHTML = `<b>${esc(best)}</b>`; mic.querySelector("b").textContent = L("e2MicAgain"); ready(true); }
      else { tries++; mic.querySelector("b").textContent = L("e2Mic"); live.innerHTML = `<small>${L("e2None")}</small>`; if (tries >= 2 && alt) alt.classList.add("hi"); } };
    try { rec.start(); } catch (e) { EX2_REC = null; typing(true); } };
}

const EX2 = {
  dlg: {
    make(U, ref, ctx) { const lvl = exLv(U), pool = DLG.map((d, i) => i).filter(i => DLG_LV[i] === lvl), used = ctx.dlgUsed || (ctx.dlgUsed = []);
      const left = pool.filter(i => !used.includes(i)), di = (left.length ? left : pool)[(Math.random() * (left.length || pool.length)) | 0]; used.push(di);
      const d = DLG[di], q = d[1][(Math.random() * d[1].length) | 0]; return { k: "dlg", di, lines: d[0], q, a: q[3], opts: shuffle([q[3], ...q[4]]), lvl }; },
    html(x, T, opts) { const who = [...new Map(x.lines.map(l => [l[1], l[0]])).entries()], kid = x.lvl <= 1;
      return T("e2Dlg") + `<div class="dx-dlg"><div class="dl-cast">${who.map(([n, g]) => `<span class="dl-who" data-who="${esc(n)}"><i>${g === "f" ? (kid ? "👧" : "👩") : (kid ? "👦" : "👨")}</i><b>${esc(n)}</b></span>`).join("")}</div>
        <div class="dl-ctl"><button class="dx-sp dl-play" data-dlg aria-label="${L("e2Play")}">🔊</button>${x.lvl <= 1 ? `<button class="dx-sp sm" data-dlg data-slow="1" aria-label="${L("dSlow")}">🐢</button>` : ""}</div></div>
        <div class="dx-q2"><b>${esc(x.q[0])}</b>${e2Tr(x.q) ? `<small>${esc(e2Tr(x.q))}</small>` : ""}</div>` + opts(x.opts, o => esc(o), "col"); },
    wire(x, box) { const whos = box.querySelectorAll(".dl-who"), on = i => whos.forEach(w => w.classList.toggle("on", i > -1 && w.dataset.who === x.lines[i][1]));
      const run = slow => { box.querySelectorAll("[data-dlg]").forEach(b => b.classList.add("on")); playLines(x.lines, slow ? .8 : 1, i => { on(i); if (i < 0) box.querySelectorAll("[data-dlg]").forEach(b => b.classList.remove("on")); }); };
      box.querySelectorAll("[data-dlg]").forEach(b => b.onclick = () => run(!!b.dataset.slow)); setTimeout(() => window.__dx === x && run(false), 450); },
    judge: (x, box, sel) => ({ ok: x.opts[sel] === x.a, note: `<details class="dx-script"><summary>📜 ${L("e2Script")}</summary>${x.lines.map(l => `<p><b>${esc(l[1])}:</b> ${esc(l[2])}</p>`).join("")}</details>` }),
    ans: x => x.a,
    noListen: x => makeEx("smean", x.U, "R", x.U.ctx || {})
  },
  spot: {
    make(U, ref) { return spotMake(U, ref, exLv(U)) || makeEx("build", U, ref && ref[0] === "s" ? ref : "R", U.ctx || {}); },
    html(x, T) { return T("e2Spot") + (x.lvl === 0 ? `<p class="dx-q">«${esc(nat(x.s))}»</p>` : "") + `<div class="dx-spot">${x.toks.map((t, i) => `<button class="dx-sw" data-w="${i}" style="--k:${i}">${esc(t)}</button>`).join("")}</div>`
      + (x.lvl >= 2 ? `<div class="dx-fixw" hidden><small>${L("e2SpotFix")}</small><div class="dx-fixes">${x.fix.map((o, i) => `<button class="dx-fix" data-f="${i}">${esc(o)}</button>`).join("")}</div></div>` : ""); },
    wire(x, box, ready, live) { x.tap = null; x.fsel = null; const fw = box.querySelector(".dx-fixw");
      box.querySelector(".dx-spot").onclick = e => { const b = e.target.closest(".dx-sw"); if (!b || !live()) return; sfx("tap");
        box.querySelectorAll(".dx-sw").forEach(o => o.classList.toggle("sel", o === b)); x.tap = +b.dataset.w; if (fw) { fw.hidden = false; ready(x.fsel != null); } else ready(true); };
      if (fw) fw.onclick = e => { const b = e.target.closest(".dx-fix"); if (!b || !live()) return; sfx("tap"); fw.querySelectorAll(".dx-fix").forEach(o => o.classList.toggle("sel", o === b)); x.fsel = +b.dataset.f; ready(x.tap != null); }; },
    judge(x, box) { const ok = x.tap === x.err && (x.lvl < 2 || x.fix[x.fsel] === x.orig);
      box.querySelectorAll(".dx-sw").forEach((b, i) => { if (i === x.err) { b.classList.add(ok ? "good" : "bad", "fixd"); b.textContent = x.toks[i].replace(new RegExp(x.bad, "i"), capLike(x.toks[i], x.orig)); } else if (i === x.tap) b.classList.add("bad"); });
      return { ok }; },
    given: x => x.tap == null ? "" : x.toks[x.tap],
    why: x => whyTxt(x.rule),
    ans: x => x.s.en
  },
  anag: {
    make(U, ref) { return anagMake(U, ref, exLv(U)) || makeEx("mean", U, "r", U.ctx || {}); },
    html(x, T) { return T("e2Anag") + `<div class="dx-word">${x.lvl === 0 ? `<span>${x.w.e || ""}</span>` : ""}<b>${esc(nat(x.w))}</b>${x.lvl <= 1 ? sayBtn(x.w.en) : ""}</div>
      <div class="dx-anagw">${x.fixed ? `<span class="dx-tile dx-fixed">${esc(x.fixed)}</span>` : ""}<div class="dx-line" aria-live="polite"></div></div><div class="dx-bank dx-letters">${x.bank.map((t, i) => `<button class="dx-tile" data-ti="${i}" style="--k:${i}">${esc(t)}</button>`).join("")}</div>`; },
    judge: (x, box) => ({ ok: x.fixed + [...box.querySelectorAll(".dx-line .dx-tile")].map(t => t.textContent).join("") === x.word }),
    given: (x, box) => x.fixed + [...box.querySelectorAll(".dx-line .dx-tile")].map(t => t.textContent).join(""),
    why: () => "",
    ans: x => x.w.en
  },
  gapt: {
    html(x, T) { const a = x.f.a, hint = x.lvl === 2 ? esc(a[0]) + "<i>" + "_".repeat(Math.max(1, a.length - 1)).split("").join(" ") + "</i>" : "&nbsp;";
      return T("e2Gapt") + `<div class="dx-fill">${x.f.e ? `<span class="dx-hint">${x.f.e}</span>` : ""}<p>${esc(x.f.q).replace("___", `<i class="dx-gap dx-gaph">${hint}</i>`)}</p></div><input class="dx-in" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${L("dTypeHere")}">`; },
    wire(x, box, ready) { const inp = box.querySelector(".dx-in"); inp.oninput = () => ready(inp.value.trim().length > 0); setTimeout(() => inp.focus(), 400); },
    judge(x, box) { const r = dTyped(box.querySelector(".dx-in").value, x.f.a); return { ok: r.ok, note: r.ok && r.typo ? `${L("dTypo")} <u>${esc(x.f.a)}</u>` : "" }; },
    given: (x, box) => (box.querySelector(".dx-in") || {}).value || "",
    ans: x => x.f.q.replace("___", x.f.a)
  },
  say: {
    make(U, ref, ctx) { const S = U.S, lvl = exLv(U); let s = /^s\d+$/.test(ref) ? S[+ref.slice(1) % S.length] : null;
      if (!s) { ctx.sq2 = ctx.sq2 && ctx.sq2.length ? ctx.sq2 : shuffle(S.slice()); s = ctx.sq2.pop(); }
      if (lvl === 0 && tokN(s.en).length > 7) s = S.slice().sort((a, b) => a.en.length - b.en.length)[(Math.random() * Math.min(4, S.length)) | 0];
      return { k: "say", s, lvl, need: [.6, .7, .8, .85][lvl] }; },
    html(x, T) { if (!SR2) return T("e2Dict") + bigSay(x.s.en, true) + micHTML(true);
      return T("e2Say") + `<div class="dx-say">${pixMini(x.s.en)}<div class="dx-bub"><b class="dx-sayt">${esc(x.s.en)}</b>${sayBtn(x.s.en)}${x.lvl <= 1 ? `<small>${esc(nat(x.s))}</small>` : ""}</div></div>` + micHTML(false); },
    wire(x, box, ready) { micWire(x, box, ready, h => sayScore(x.s.en, h)); if (!SR2) setTimeout(() => window.__dx === x && sayRate(x.s.en, .9), 350); },
    judge(x) { const h = x.given || "", sc = sayScore(x.s.en, h), ok = sc >= x.need, got = new Set(tokN(h));
      const marked = x.s.en.split(/\s+/).map(w => { const n = tokN(w); return `<span class="${n.every(t => got.has(t)) ? "w-ok" : "w-no"}">${esc(w)}</span>`; }).join(" ");
      return { ok, note: `<span class="dx-heard">${x.typing ? "" : `🎙 ${L("e2Heard")} «${esc(h)}»<br>`}${marked}</span>` }; },
    given: x => x.given || "",
    ans: x => x.s.en
  },
  ans: {
    make(U, ref, ctx) { const lvl = exLv(U), pool = E2Q[lvl], used = ctx.ansUsed || (ctx.ansUsed = []); const left = pool.filter(q => !used.includes(q));
      const q = (left.length ? left : pool)[(Math.random() * (left.length || pool.length)) | 0]; used.push(q); return { k: "ans", q, lvl }; },
    html(x, T) { return T(SR2 ? "e2Ans" : "e2AnsT") + `<div class="dx-say">${pixMini(x.q[0])}<div class="dx-bub"><b>${esc(x.q[0])}</b>${sayBtn(x.q[0])}${e2Tr(x.q) ? `<small>${esc(e2Tr(x.q))}</small>` : ""}</div></div>` + micHTML(!SR2); },
    wire(x, box, ready) { micWire(x, box, ready, h => ansCheck(x, h).ok ? 1 + h.length / 1e3 : h.length / 1e3); setTimeout(() => window.__dx === x && say(x.q[0]), 350); },
    judge(x) { const r = ansCheck(x, x.given || ""); const heard = x.typing ? "" : `🎙 ${L("e2Heard")} «${esc(x.given || "")}»<br>`;
      return { ok: r.ok, note: `<span class="dx-heard">${heard}${r.ok ? "" : `💡 ${esc(r.hint)}<br>`}<b>${L("e2Sample")}</b> ${esc(x.q[3])}</span>`, noAns: true, title: r.ok ? "" : L("e2Almost") }; },
    given: x => x.given || "",
    ans: x => x.q[3]
  }
};
/* fill-in-the-gap gets harder with the level: A1 3 choices · A2 4 choices · B1 write it (first letter shown) · B2 write it, no hint */
function ex2Boost(x) {
  if (!x || x.k !== "fill" || !x.U || x.prev) return x; const lvl = exLv(x.U), U = x.U;
  const more = () => { const extra = U.F.map(f => f.a).filter(a => a !== x.f.a && !x.f.w.includes(a)); if (extra.length && x.opts.length < 4) x.opts = shuffle([...x.opts, extra[(Math.random() * extra.length) | 0]]); return x; };
  if (lvl === 1) return more();
  if (lvl === 2) return Math.random() < .5 ? { ...x, k: "gapt", lvl, opts: undefined } : more();
  if (lvl >= 3) return Math.random() < .7 ? { ...x, k: "gapt", lvl, opts: undefined } : more();
  return x;
}
