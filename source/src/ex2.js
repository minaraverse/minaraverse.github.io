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
const exLv = U => Math.min(4, Math.max(0, ["A1", "A2", "B1", "B2", "C1", "C2"].indexOf((SECTIONS[U.sec] || {}).lv)));

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
  /* C1–C2 — professional English: negotiation, feedback, deadlines, interviews */
  ,[[["f", "Emma", "We'd like to place a larger order, but your price is a little higher than we expected."], ["m", "John", "I understand. If you order more than five hundred units, we can offer a ten percent discount."], ["f", "Emma", "That's helpful. Could you also include free delivery?"], ["m", "John", "I'm afraid that's not possible, but we can guarantee delivery within a week."]],
    [["What does John agree to?", "", "", "a discount for large orders", ["free delivery", "a lower price for any order", "delivery in one day"]], ["What does John refuse?", "", "", "free delivery", ["a discount", "delivery within a week", "a larger order"]]]],
  [[["f", "Laura", "Overall, your first quarter has been really impressive."], ["m", "Max", "Thank you. I wasn't sure the client presentation went well."], ["f", "Laura", "It did, although next time I'd like you to keep the slides more concise."], ["m", "Max", "That makes sense. I tend to include too much detail."]],
    [["What does Laura want Max to improve?", "", "", "making his slides more concise", ["arriving on time", "talking to clients more", "adding more detail"]]]],
  [[["f", "Anna", "The client has brought the deadline forward to Monday."], ["m", "Charles", "Monday? We'd have to work over the weekend to manage that."], ["f", "Anna", "I know it's tight. I'll ask whether we can deliver the main part on Monday and the rest on Wednesday."], ["m", "Charles", "That would make it far more realistic."]],
    [["What does Anna suggest?", "", "", "delivering the work in two parts", ["refusing the project", "working all weekend", "asking for more money"]], ["How does Charles feel about Anna's idea?", "", "", "It sounds more realistic.", ["It is impossible.", "It is too expensive.", "He prefers working at the weekend."]]]],
  [[["f", "Jessica", "Why are you interested in this position?"], ["m", "Lewis", "I've spent five years in sales, and I'm keen to move into a role that focuses more on strategy."], ["f", "Jessica", "And what would you say is your main weakness?"], ["m", "Lewis", "I sometimes find it hard to delegate, but I've been learning to trust my team more."]],
    [["Why does Lewis want the job?", "", "", "He wants to focus more on strategy.", ["He wants a higher salary.", "He doesn't like sales at all.", "He wants to work alone."]], ["Which weakness does he mention?", "", "", "difficulty delegating", ["being late", "poor sales results", "lack of experience"]]]],
  [[["f", "Nicole", "I'm calling about the software update — since we installed it, our system keeps crashing."], ["m", "Oscar", "I'm sorry to hear that. Have you tried restarting the server?"], ["f", "Nicole", "Several times. It's affecting our whole team."], ["m", "Oscar", "In that case, I'll escalate it to our technical department and get back to you within two hours."]],
    [["What will Oscar do?", "", "", "pass the problem to the technical department", ["visit the office", "cancel the update", "refund the software"]]]],
  [[["f", "Bella", "Our competitors have cut their prices again."], ["m", "George", "Should we do the same?"], ["f", "Bella", "I'd rather not. If we compete on price alone, we'll damage our brand. Let's focus on quality and service instead."], ["m", "George", "Agreed — our customers value reliability more than discounts."]],
    [["What is Bella's strategy?", "", "", "focusing on quality and service", ["lowering prices", "copying the competitors", "stopping production"]], ["What does George believe about their customers?", "", "", "They value reliability more than discounts.", ["They only care about price.", "They are leaving the brand.", "They want more discounts."]]]]
];
const DLG_LV = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4];

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
const E2MIN = [3, 5, 7, 10, 12];
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
   ["Do you think social media is good for teenagers? Why?", "", "", "I think social media can be useful, but it can also be harmful because teenagers spend too much time on it.", ["opinion", "because"]],
   ["Describe a challenge you have overcome.", "", "", "I have overcome my fear of speaking in public by practising every week in front of my class.", ["perf"]],
   ["If you could change one thing about your city, what would it be?", "", "", "If I could change one thing, I would build more parks because the city needs more green spaces.", ["cond"]],
   ["What are the advantages and disadvantages of working from home?", "", "", "Working from home saves time, but on the other hand it can be lonely and hard to focus.", ["contrast"]],
   ["How do you think technology will change education?", "", "", "I think technology will make lessons more personal, and students will learn at their own speed.", ["opinion", "future"]],
   ["What advice would you give to someone learning English?", "", "", "I would tell them to speak every day and not to be afraid of making mistakes.", ["advice"]],
   ["Tell me about a person who has influenced you.", "", "", "My grandmother has influenced me a lot because she taught me to be patient and kind.", ["perf", "because"]]],
  [["How would you persuade a team to accept a big change?", "", "", "I would explain why the change is necessary, listen to their concerns and show how it will help them in the long term.", ["cond"]],
   ["Describe a difficult situation you had to deal with at work or at school.", "", "", "Last year I had to solve a conflict between two colleagues, so I listened to both sides and we found a compromise.", ["past"]],
   ["What are the pros and cons of remote work for companies?", "", "", "Remote work reduces office costs, but on the other hand it can make teamwork and communication harder.", ["contrast"]],
   ["Should governments invest more in technology or in education? Why?", "", "", "I believe education should come first because without well-educated people, technology cannot be used properly.", ["opinion", "because"]],
   ["How do you usually prepare for an important presentation?", "", "", "I usually research the topic carefully, prepare clear slides and practise several times in front of a friend.", ["usual"]],
   ["Where do you see yourself in five years?", "", "", "In five years I hope to be leading a small team and working on international projects.", ["future"]],
   ["What makes a good leader, in your opinion?", "", "", "In my opinion, a good leader listens to people, makes clear decisions and takes responsibility when things go wrong.", ["opinion"]],
   ["If you could start your own business, what would it be and why?", "", "", "I would open a language school because I love teaching and there is a real need for good teachers.", ["cond", "because"]]]
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
  const ok = w => /^[a-z]+$/i.test(w.en) && w.en.length >= [3, 4, 5, 6, 7][lvl] && w.en.length <= [6, 8, 10, 14, 16][lvl];
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
      return { k: "say", s, lvl, need: [.6, .7, .8, .85, .9][lvl] }; },
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

/* =================== advanced types (B1 → C2): collocations · word formation · same meaning · idioms · reading =================== */
Object.assign(UI.en, { e2Coll: "Choose the word that goes with it", e2Wform: "Write the right form of the word", e2Para: "Which sentence means the same?", e2Idiom: "What does it mean?", e2Read: "Read and answer" });
Object.assign(UI.az, { e2Coll: "Bu ifadə ilə işlənən sözü seç", e2Wform: "Sözün düzgün formasını yaz", e2Para: "Hansı cümlə eyni mənanı verir?", e2Idiom: "Bu ifadə nə deməkdir?", e2Read: "Oxu və cavab ver" });
Object.assign(UI.ru, { e2Coll: "Выбери слово, которое подходит", e2Wform: "Напиши правильную форму слова", e2Para: "Какое предложение значит то же самое?", e2Idiom: "Что значит это выражение?", e2Read: "Прочитай и ответь" });
/* [phrase with ___, answer, wrong…, level 2 B1 · 3 B2 · 4 C] */
const COLL = [
  ["___ a mistake", "make", ["do", "take"], 2], ["___ your homework", "do", ["make", "take"], 2], ["___ a photo", "take", ["make", "do"], 2], ["___ a shower", "have", ["make", "do"], 2],
  ["___ a decision", "make", ["do", "get"], 2], ["___ attention", "pay", ["do", "make"], 2], ["___ the washing-up", "do", ["make", "take"], 2], ["___ friends with someone", "make", ["do", "get"], 2],
  ["___ a break", "take", ["do", "make"], 2], ["___ a phone call", "make", ["do", "say"], 2], ["___ the truth", "tell", ["say", "talk"], 2], ["___ a noise", "make", ["do", "take"], 2],
  ["___ a deadline", "meet", ["do", "arrive"], 3], ["___ responsibility for something", "take", ["make", "do"], 3], ["___ an effort", "make", ["do", "take"], 3], ["___ a complaint", "make", ["do", "say"], 3],
  ["___ research", "do", ["make", "take"], 3], ["___ a risk", "take", ["make", "do"], 3], ["___ a profit", "make", ["do", "win"], 3], ["___ someone a favour", "do", ["make", "give"], 3],
  ["___ progress", "make", ["do", "get"], 3], ["___ a presentation", "give", ["say", "tell"], 3], ["___ an agreement", "reach", ["arrive", "win"], 3], ["She always ___ her promises.", "keeps", ["holds", "saves"], 3],
  ["___ a compromise", "reach", ["arrive", "get"], 4], ["___ the blame", "take", ["make", "do"], 4], ["___ an impression", "make", ["do", "take"], 4], ["___ a conclusion", "draw", ["pull", "paint"], 4],
  ["___ consideration to an idea", "give", ["make", "do"], 4], ["___ a new policy", "implement", ["install", "perform"], 4], ["___ an objection", "raise", ["rise", "lift"], 4], ["___ a concern", "voice", ["speak", "tell"], 4],
  ["___ the importance of something", "stress", ["press", "push"], 4], ["___ a precedent", "set", ["put", "make"], 4], ["___ a deal", "strike", ["hit", "beat"], 4], ["___ a living", "earn", ["win", "gain"], 4]];
/* [sentence with ___, BASE, answer, level] */
const WFORM = [
  ["The film was really ___.", "BORE", "boring", 3], ["She is very ___ — she always helps others.", "HELP", "helpful", 3], ["Please be ___ when you cross the road.", "CARE", "careful", 3],
  ["There is a big ___ between the two cities.", "DIFFER", "difference", 3], ["His ___ surprised everyone.", "DECIDE", "decision", 3], ["My phone keeps crashing — it's so ___!", "ANNOY", "annoying", 3],
  ["The ___ of the project was a big success.", "COMPLETE", "completion", 3], ["Smoking is ___ to your health.", "HARM", "harmful", 3], ["We need to make an ___ before Friday.", "ANNOUNCE", "announcement", 3],
  ["She answered every question ___.", "CORRECT", "correctly", 3], ["It's ___ to drive without a licence.", "LEGAL", "illegal", 3], ["He felt ___ because nobody called him on his birthday.", "HAPPY", "unhappy", 3],
  ["The ___ of the company lives in London.", "OWN", "owner", 3], ["Thank you for your ___.", "PATIENT", "patience", 3],
  ["The government's ___ to act surprised many experts.", "FAIL", "failure", 4], ["Her ___ to detail makes her an excellent editor.", "ATTEND", "attention", 4],
  ["The results were ___ different from what we expected.", "SIGNIFY", "significantly", 4], ["The plan was rejected as completely ___.", "REAL", "unrealistic", 4], ["There has been a ___ increase in prices.", "DRAMA", "dramatic", 4],
  ["We need to ___ our position in the market.", "STRONG", "strengthen", 4], ["His ___ to help was obvious from the way he spoke.", "RELUCTANT", "reluctance", 4], ["The ___ of the new law caused protests.", "INTRODUCE", "introduction", 4],
  ["Older computers can't run it: the software is ___ with them.", "COMPATIBLE", "incompatible", 4], ["The meeting was postponed ___ — nobody knows the new date.", "DEFINITE", "indefinitely", 4],
  ["She spoke with great ___ about the project.", "ENTHUSIASTIC", "enthusiasm", 4], ["We value ___ and honesty in our team.", "RELY", "reliability", 4], ["Talks failed because of a serious ___ about money.", "AGREE", "disagreement", 4]];
/* [sentence, same meaning, wrong…, level] */
const PARA = [
  ["I'm not able to come tomorrow.", "I can't come tomorrow.", ["I don't want to come tomorrow.", "I must come tomorrow.", "I came yesterday."], 3],
  ["She started working here three years ago.", "She has worked here for three years.", ["She worked here for three years and then left.", "She will work here for three years.", "She stopped working here three years ago."], 3],
  ["It isn't necessary to bring food.", "You don't have to bring food.", ["You mustn't bring food.", "You have to bring food.", "There is no food here."], 3],
  ["The meeting was cancelled because of the storm.", "The storm caused the meeting to be cancelled.", ["The meeting caused the storm.", "The meeting took place during the storm.", "The storm was cancelled."], 3],
  ["I'd rather stay at home tonight.", "I prefer to stay at home tonight.", ["I have to stay at home tonight.", "I stayed at home last night.", "I don't like my home."], 3],
  ["He's too young to drive.", "He isn't old enough to drive.", ["He is old enough to drive.", "He drives too fast.", "He doesn't want to drive."], 3],
  ["Although it was raining, we went out.", "We went out in spite of the rain.", ["We stayed in because of the rain.", "It rained after we went out.", "We went out to watch the rain."], 3],
  ["If you don't hurry, you'll miss the train.", "Unless you hurry, you'll miss the train.", ["If you hurry, you'll miss the train.", "You missed the train because you hurried.", "The train will wait for you."], 3],
  ["This is the best pizza I've ever eaten.", "I've never eaten a better pizza.", ["I've never eaten pizza.", "This pizza is worse than the others.", "I eat pizza every day."], 3],
  ["She fell asleep because she was very tired.", "She was so tired that she fell asleep.", ["She was tired because she fell asleep.", "She was too tired to sleep.", "She wasn't tired at all."], 3],
  ["Hardly had we arrived when it started to rain.", "It started to rain as soon as we arrived.", ["We arrived because it was raining.", "It had stopped raining when we arrived.", "We hardly arrived at all."], 4],
  ["The project is unlikely to be finished by Friday.", "The project probably won't be finished by Friday.", ["The project will definitely be finished by Friday.", "Nobody likes the project.", "The project was finished last Friday."], 4],
  ["Had I known about the problem, I would have helped.", "I didn't know about the problem, so I didn't help.", ["I knew about the problem and helped.", "I will help if I hear about the problem.", "I helped, but I didn't know why."], 4],
  ["It's high time we changed our strategy.", "We should change our strategy now.", ["We changed our strategy at the right time.", "Our strategy is still perfect.", "We have no time to change our strategy."], 4],
  ["She's bound to get the job.", "She's almost certain to get the job.", ["She has to accept the job.", "She's tied to her old job.", "She probably won't get the job."], 4],
  ["The proposal was turned down.", "The proposal was rejected.", ["The proposal was accepted.", "The proposal was made shorter.", "The proposal was printed."], 4],
  ["There's no point in calling him now.", "It's useless to call him now.", ["You must call him now.", "He has no phone.", "Calling him now is a great idea."], 4],
  ["Not only is the plan expensive, but it's also risky.", "The plan is both expensive and risky.", ["The plan is cheap but risky.", "The plan is expensive but safe.", "Only the risky part is expensive."], 4],
  ["I'm used to working long hours.", "Working long hours is normal for me.", ["I worked long hours in the past, but not now.", "I want to work long hours.", "I hate working long hours."], 4],
  ["Sales fell short of our expectations.", "Sales were lower than we expected.", ["Sales were higher than we expected.", "We expected sales to fall.", "Sales were exactly as expected."], 4]];
/* [idiom, meaning, wrong…, level] */
const IDIOM = [
  ["It's raining cats and dogs.", "It's raining very heavily.", ["Animals are falling from the sky.", "It's raining a little.", "The weather is getting better."], 3],
  ["The exam was a piece of cake.", "The exam was very easy.", ["The exam was about food.", "The exam was very hard.", "The exam was short."], 3],
  ["I'm feeling under the weather.", "I'm feeling a little ill.", ["I'm feeling very happy.", "I'm standing in the rain.", "I'm worried about the weather."], 3],
  ["Let's call it a day.", "Let's stop working for today.", ["Let's phone someone.", "Let's start a new day.", "Let's give this day a name."], 3],
  ["He's on cloud nine.", "He's extremely happy.", ["He's flying a plane.", "He's very tired.", "He's confused."], 3],
  ["Break a leg!", "Good luck!", ["Be careful!", "Hurry up!", "Get well soon!"], 3],
  ["We need to think outside the box.", "We need to think creatively.", ["We need to think about the box.", "We need to stop thinking.", "We need to work outside."], 4],
  ["Let's not beat around the bush.", "Let's speak directly.", ["Let's work in the garden.", "Let's take our time.", "Let's avoid the problem."], 4],
  ["The new manager hit the ground running.", "He started working successfully right away.", ["He fell on his first day.", "He arrived late.", "He left the job quickly."], 4],
  ["That's the last straw.", "That's the final problem I can accept.", ["That's the best idea.", "That's the last drink.", "That's a small problem."], 4],
  ["We're back to square one.", "We have to start again from the beginning.", ["We have finished the project.", "We are in first place.", "We moved to a new office."], 4],
  ["She's got a lot on her plate right now.", "She is very busy at the moment.", ["She is eating a big meal.", "She is very rich.", "She has nothing to do."], 4],
  ["Can we touch base next week?", "Can we talk briefly next week?", ["Can we play baseball next week?", "Can we meet at the base?", "Can we finish next week?"], 4],
  ["The deal is in the bag.", "The deal is almost certainly ours.", ["The deal is lost.", "The deal is secret.", "The deal is inside a bag."], 4],
  ["He's sitting on the fence.", "He won't choose a side.", ["He is relaxing in the garden.", "He has made a decision.", "He is fixing the fence."], 4],
  ["Let's get the ball rolling.", "Let's start.", ["Let's play football.", "Let's stop.", "Let's go home."], 4],
  ["It costs an arm and a leg.", "It's very expensive.", ["It's very cheap.", "It's dangerous.", "It hurts."], 4],
  ["I'll keep you in the loop.", "I'll keep you informed.", ["I'll keep you waiting.", "I'll keep you busy.", "I'll keep you out."], 4]];
/* [title, text, question, answer, wrong…, level] */
const READ = [
  ["💬 A message from Anna", "Hi Tom! I'm sorry, but I can't meet you at the café on Saturday. My grandmother is visiting us, and my mum wants me to stay at home. Can we meet on Sunday afternoon instead? Let me know! Anna", "Why can't Anna meet on Saturday?", "Her grandmother is visiting.", ["She is ill.", "The café is closed.", "She has to work."], 2],
  ["📌 Summer job", "Summer job at Sunny Café! We are looking for friendly students to work as waiters in July and August. You must be 17 or older and speak English. Work is from 10 am to 4 pm, five days a week. Send your CV to our email.", "Who can apply?", "students who are 17 or older", ["anyone under 17", "only professional chefs", "people who want to work at night"], 2],
  ["🐶 Lost dog", "LOST DOG. Our small brown dog, Max, ran away from Nizami Park on Tuesday evening. He is very friendly and wears a red collar. If you see him, please call us. Reward!", "What is Max wearing?", "a red collar", ["a blue coat", "a brown hat", "nothing"], 2],
  ["🚌 School trip", "On Friday, Class 7B is going to the History Museum. The bus leaves school at 9 o'clock, so please arrive by 8:45. Bring a packed lunch and a notebook. We will be back at 3 o'clock.", "What time should students arrive?", "by 8:45", ["at 9 o'clock", "at 3 o'clock", "at 10 o'clock"], 2],
  ["📧 Email from the office", "Dear team, the printer on the second floor is broken. A technician will fix it tomorrow morning. Until then, please use the printer in the meeting room. Thank you, Laura", "Where should people print today?", "in the meeting room", ["on the second floor", "at home", "in the technician's office"], 2],
  ["⭐ Hotel review", "I stayed at the Green Hotel for three nights. The room was clean and the staff were helpful, but the Wi-Fi was very slow and breakfast was expensive. I would stay there again, but I'd eat breakfast somewhere else.", "What did the writer NOT like?", "the slow Wi-Fi and the expensive breakfast", ["the dirty room", "the unhelpful staff", "the location"], 2],
  ["📧 New office rules", "From next month, employees may work from home two days a week. Teams must agree which days they will be in the office so that meetings can still take place in person. Managers will review the arrangement after three months.", "What must teams do?", "agree on their office days", ["work from home every day", "stop having meetings", "choose a new manager"], 3],
  ["📰 Multitasking", "Many people believe that multitasking makes them more productive. However, research suggests that switching between tasks actually reduces efficiency, because the brain needs time to refocus each time. Experts recommend finishing one task before starting another.", "What is the main idea?", "Doing one task at a time is more efficient.", ["Multitasking makes people more productive.", "The brain never needs to refocus.", "Experts recommend switching tasks often."], 3],
  ["📧 Reply to a complaint", "Dear Mr Aliyev, thank you for your email. We are sorry that your order arrived late and that one item was damaged. We have sent a replacement, which should reach you within three working days, and we have refunded your delivery fee.", "What has the company done?", "sent a new item and refunded the delivery fee", ["refunded the full price", "cancelled the order", "asked him to return everything"], 3],
  ["🚲 Bikes in the city", "The city's new bike-sharing scheme has been more popular than expected. In its first month, over 20,000 trips were made. The city now plans to add more stations, especially near metro stations, to encourage people to combine cycling with public transport.", "Why will new stations be near the metro?", "to help people combine cycling and public transport", ["because there is no space elsewhere", "to replace the metro", "because bikes are cheaper"], 3],
  ["📝 Feedback on a report", "Your report was well organised and the data was clear. However, the conclusion was rather short. Next time, try to explain what the results mean for the company and suggest some next steps.", "What should the writer improve?", "the conclusion", ["the organisation", "the data", "the title"], 3],
  ["📰 The merger", "Although the merger was expected to cut costs, the first year brought the opposite result. Joining two different IT systems proved far more complicated than anticipated, and several key employees left during the transition. Analysts now suggest that the benefits may only become visible in the long term.", "What do analysts think?", "The benefits may appear later.", ["The merger was a complete failure.", "Costs were cut immediately.", "The IT systems were easy to join."], 4],
  ["📰 A four-day week", "Critics of the four-day working week argue that it simply squeezes the same workload into fewer days, leading to longer and more stressful shifts. Supporters, however, point to trials in which productivity remained stable while employee wellbeing improved significantly.", "What did the trials show?", "Productivity stayed the same and wellbeing improved.", ["Productivity fell sharply.", "Employees felt more stressed.", "The workload was cut in half."], 4],
  ["📧 A partnership", "Dear Ms Huseynova, following our conversation last week, I am pleased to confirm that we would like to proceed with the partnership. However, before signing the contract, our legal department has requested a few minor changes to the payment terms, which I have attached for your review.", "What has to happen before signing?", "The payment terms need small changes.", ["The partnership is cancelled.", "A new meeting must be held.", "The legal department will sign it alone."], 4],
  ["📰 Digital detox", "The phrase 'digital detox' has become fashionable, yet few people manage to disconnect for long. Researchers note that our dependence on smartphones is less about the devices themselves and more about the fear of missing out on information and social contact.", "According to researchers, what is the real reason for our dependence?", "the fear of missing out", ["the design of the phones", "the price of devices", "boredom at work"], 4],
  ["📰 Salary freeze", "Despite record profits, the company announced it would freeze salaries for another year, citing economic uncertainty. Unsurprisingly, the decision was met with frustration by staff, many of whom felt their efforts had not been recognised.", "How did employees feel?", "frustrated and unappreciated", ["relieved", "surprised and grateful", "indifferent"], 4],
  ["📰 Learning as an adult", "Learning a language as an adult is often said to be harder than learning one as a child. However, adults have advantages too: they can use strategies consciously, understand grammar explanations and connect new words to what they already know.", "What does the text suggest?", "Adults also have advantages when learning languages.", ["Only children can learn languages.", "Grammar is useless for adults.", "Adults learn faster in every way."], 4]];
/* pick an item of the right level that this lesson hasn't used yet */
function e2Pick(bank, lvlIx, U, ctx, key) { const L = Math.min(4, exLv(U)), used = ctx[key] || (ctx[key] = []);
  let pool = bank.map((r, i) => i).filter(i => bank[i][lvlIx] === L); if (!pool.length) pool = bank.map((r, i) => i).filter(i => bank[i][lvlIx] <= L);
  const left = pool.filter(i => !used.includes(i)), i = (left.length ? left : pool)[(Math.random() * (left.length || pool.length)) | 0]; used.push(i); return bank[i]; }
Object.assign(EX2, {
  coll: { make(U, ref, ctx) { const r = e2Pick(COLL, 3, U, ctx, "collU"); return { k: "coll", r, a: r[1], opts: shuffle([r[1], ...r[2]]), item: r[0] + " → " + r[1] }; },
    html: (x, T, opts) => T("e2Coll") + `<div class="dx-fill"><p>${esc(x.r[0]).replace("___", `<i class="dx-gap">&nbsp;</i>`)}</p></div>` + opts(x.opts, o => esc(o), "row"),
    judge: (x, box, sel) => ({ ok: x.opts[sel] === x.a }), ans: x => x.r[0].replace("___", x.a) },
  wform: { make(U, ref, ctx) { const r = e2Pick(WFORM, 3, U, ctx, "wformU"); return { k: "wform", r, item: r[0] + " (" + r[1] + ") → " + r[2] }; },
    html: (x, T) => T("e2Wform") + `<div class="dx-fill"><p>${esc(x.r[0]).replace("___", `<i class="dx-gap">&nbsp;</i>`)}</p><span class="dx-base">${esc(x.r[1])}</span></div><input class="dx-in" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${L("dTypeHere")}">`,
    wire(x, box, ready) { const inp = box.querySelector(".dx-in"); inp.oninput = () => ready(inp.value.trim().length > 0); setTimeout(() => inp.focus(), 400); },
    judge(x, box) { const r = dTyped(box.querySelector(".dx-in").value, x.r[2]); return { ok: r.ok, note: r.ok && r.typo ? `${L("dTypo")} <u>${esc(x.r[2])}</u>` : "" }; },
    given: (x, box) => (box.querySelector(".dx-in") || {}).value || "", ans: x => x.r[0].replace("___", x.r[2]) },
  para: { make(U, ref, ctx) { const r = e2Pick(PARA, 3, U, ctx, "paraU"); return { k: "para", r, a: r[1], opts: shuffle([r[1], ...r[2]]), item: r[0] + " = " + r[1] }; },
    html: (x, T, opts) => T("e2Para") + `<div class="dx-say"><div class="dx-bub"><b>${esc(x.r[0])}</b>${sayBtn(x.r[0])}</div></div>` + opts(x.opts, o => esc(o), "col"),
    judge: (x, box, sel) => ({ ok: x.opts[sel] === x.a }), ans: x => x.a },
  idiom: { make(U, ref, ctx) { const r = e2Pick(IDIOM, 3, U, ctx, "idiomU"); return { k: "idiom", r, a: r[1], opts: shuffle([r[1], ...r[2]]), item: r[0] + " = " + r[1] }; },
    html: (x, T, opts) => T("e2Idiom") + `<div class="dx-say"><div class="dx-bub dx-idiom"><b>“${esc(x.r[0])}”</b>${sayBtn(x.r[0])}</div></div>` + opts(x.opts, o => esc(o), "col"),
    judge: (x, box, sel) => ({ ok: x.opts[sel] === x.a }), ans: x => x.a },
  read: { make(U, ref, ctx) { const r = e2Pick(READ, 5, U, ctx, "readU"); return { k: "read", r, a: r[3], opts: shuffle([r[3], ...r[4]]), item: r[0] + ": " + r[2] + " → " + r[3] }; },
    html: (x, T, opts) => T("e2Read") + `<article class="dx-read"><h3>${esc(x.r[0])}</h3><p>${esc(x.r[1])}</p></article><div class="dx-q2"><b>${esc(x.r[2])}</b></div>` + opts(x.opts, o => esc(o), "col"),
    judge: (x, box, sel) => ({ ok: x.opts[sel] === x.a }), ans: x => x.a }
});

/* =================== lesson builder: the number of questions and the mix of exercise types grow with the level =================== */
/* questions per lesson part: A1 5 · A2 8 · B1 11 · B2 15 · C1/C2 20 (the unit's big review is a little longer, max 20) */
const PART_N = [5, 8, 11, 15, 20, 20], REVIEW_N = [7, 10, 14, 18, 20, 20];
const lv6 = U => Math.max(0, ["A1", "A2", "B1", "B2", "C1", "C2"].indexOf((SECTIONS[U.sec] || {}).lv));
/* exercise families and the levels where each type lives [type, from, to] — simple types fade out, new ones appear */
const E2TY = {
  W: [["img", 0, 0], ["mean", 0, 2], ["rmean", 0, 3], ["hearw", 0, 2], ["pairs", 0, 5], ["anag", 0, 4], ["writew", 1, 5], ["typew", 2, 5]],
  S: [["smean", 0, 1], ["build", 0, 4], ["buildr", 1, 3], ["listen", 1, 5]],
  G: [["afill", 0, 1], ["fill", 0, 5], ["spot", 1, 5], ["coll", 2, 5], ["wform", 3, 5]],
  L: [["dlg", 0, 5], ["listen", 0, 5], ["hearw", 0, 1], ["typew", 2, 5]],
  P: [["say", 0, 5], ["ans", 0, 5]],
  X: [["read", 2, 5], ["para", 3, 5], ["idiom", 3, 5]]
};
/* what each star practises: 1 new words · 2 recognise & recall · 3 listen & build · 4 grammar, writing, speaking · trophy = everything */
const NODE_W = [{ W: 70, S: 10, L: 10, P: 10 }, { W: 40, S: 20, L: 15, G: 15, P: 10 }, { S: 30, L: 30, G: 15, P: 15, W: 10 }, { G: 35, P: 20, S: 15, L: 10, X: 20 }, { W: 12, S: 18, G: 20, L: 20, P: 15, X: 15 }];
function nodeRecipe(U, j, p) {
  const L = lv6(U), n = j === 4 ? REVIEW_N[L] : PART_N[L], want = { ...NODE_W[j] };
  if (L >= 3) { want.W = Math.round((want.W || 0) / 2); want.X = (want.X || 0) + 15; }   /* B2+: fewer single-word drills, more real English */
  if (L >= 4) { want.X += 10; want.L = (want.L || 0) + 5; }
  const avail = c => E2TY[c].filter(t => L >= t[1] && L <= t[2]).map(t => t[0]);
  const fams = Object.keys(want).filter(c => want[c] > 0 && avail(c).length), tot = fams.reduce((a, c) => a + want[c], 0);
  const cap = { pairs: 1, read: 1, dlg: Math.max(1, Math.ceil(n / 7)), ans: Math.max(1, Math.ceil(n / 8)), say: Math.max(1, Math.ceil(n / 7)) }, cnt = {};
  const out = []; let wi = 0, si = p * 3, fi = p, last = "";
  for (let i = 0; i < n; i++) {
    let fam = j === 0 && i < 2 ? "W" : null;
    if (!fam || !avail(fam).length) { let r = Math.random() * tot; fam = fams.find(c => (r -= want[c]) < 0) || fams[0]; }
    let types = avail(fam).filter(t => t !== last && (cnt[t] || 0) < (cap[t] || 99));
    if (!types.length) types = Object.values(E2TY).flat().filter(t => L >= t[1] && L <= t[2] && t[0] !== last && (cnt[t[0]] || 0) < (cap[t[0]] || 99)).map(t => t[0]);
    const t = types[(Math.random() * types.length) | 0]; cnt[t] = (cnt[t] || 0) + 1; last = t;
    const isW = ["img", "mean", "rmean", "hearw", "anag", "writew", "typew"].includes(t), isS = ["smean", "build", "buildr", "listen", "say", "spot"].includes(t);
    const ref = isW ? (j === 0 ? "a" + (wi++) : j === 1 ? "b" + (wi++) : "r") : isS ? (j >= 2 && j < 4 ? "s" + (si++) : "R") : t === "fill" || t === "afill" ? (j < 4 ? "f" + (fi++) : "F") : t === "pairs" ? (j === 0 ? "A" : j === 1 ? "B" : "M") : "X";
    out.push(t + ":" + ref); }
  return out.join(" ");
}
