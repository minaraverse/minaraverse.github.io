# Extra tasks for Minaraverse story chapters — content spec

You write ONE JavaScript file per story: `/home/claude/mv/src/tasks/<story>.js`, containing exactly:

```js
TASKS.<story> = {
  0: [ /* 4 questions for chapter index 0 */ ],
  1: [ ... ],
  ...
};
```

Chapter indexes are 0-based and must cover EVERY chapter of the story (`STORIES.<story>.units` in the data file). Read the chapter's reading text(s) and its existing questions first — every task must be answerable from THAT chapter's text (or be a poll about the NEXT chapter). Do not repeat an existing question. Use only facts, words and sentences that really appear in the chapter.

## Question format (same as the rest of the site)

`[text, options, explanation, opt]`
- `text` — English question / statement / instruction.
- `options` — array; **the correct answer is ALWAYS first** (the engine shuffles).
- `explanation` — one short English sentence explaining the answer (shown after answering). For write/poll see below.
- `opt` — object with `t` (kind) and `tr: { az: "...", ru: "..." }` — the explanation translated to Azerbaijani and Russian (natural, not word-by-word). Always include `tr`.

## Kinds

1. **tf** — true/false about the chapter.
   `["Leyla orders a tea with lemon.", ["True", "False"], "She orders a coffee, not tea.", { t: "tf", tr: {az, ru} }]`
   Correct value first: `["True","False"]` if true, `["False","True"]` if false. Mix true and false statements across chapters.

2. **gap** — a sentence from (or close to) the text with a gap `____`, 4 word chips, correct first. Distractors must be the same part of speech and plausible.
   `["Aysel ____ the contract on Monday.", ["signed", "sang", "sold", "sent"], "She signed it — the text says so.", { t: "gap", tr }]`

3. **match** — 4 pairs word → meaning/synonym/collocation half (short, max 3 words each side). `options[0]` is a text summary.
   `["Match the words with their meanings", ["deadline = last day; invoice = bill; …"], "These are key business words from the chapter.", { t: "match", pairs: [["deadline","last day"],["invoice","bill"],["refund","money back"],["client","customer"]], tr }]`

4. **seq** — 4 events from the chapter, in the correct order (each item ≤ 8 words). `options[0]` = items joined with " → ".
   `["Put the events in order", ["Aysel arrives → She meets the client → The client shouts → She offers a refund"], "This is the order in the text.", { t: "seq", items: ["Aysel arrives","She meets the client","The client shouts","She offers a refund"], tr }]`

5. **dict** — dictation: a REAL sentence from the chapter, 5–9 words, no numbers/names that are hard to spell. The learner listens and types it.
   `["Listen and type the sentence", ["We need the contract by Friday."], "A useful sentence from the text.", { t: "dict", say: "We need the contract by Friday.", tr }]`

6. **fix** — one grammar mistake to correct. `text` is the WRONG sentence, `options[0]` the corrected sentence, `alt` other acceptable forms. The mistake must be a grammar point of this level (A1: is/are, a/an, plural -s; A2: past simple, some/any; B1: present perfect, articles, prepositions; B2+: conditionals, reported speech, inversion…).
   `["She have worked here since 2019.", ["She has worked here since 2019."], "Present perfect with she/he/it uses has.", { t: "fix", alt: ["She's worked here since 2019."], tr }]`

7. **poll** — "What happens next?" with 3 plausible options, no correct answer (the first option is simply listed first; nothing is graded). Options MUST be real possibilities for the NEXT chapter (read it). Put the polls in every chapter except the last.
   `["What will the client do next?", ["Accept the apology", "Call the manager", "Leave a bad review"], "Let's see in the next chapter!", { t: "poll", tr: { az: "Növbəti fəsildə görərik!", ru: "Увидим в следующей главе!" } }]`

8. **write** — free writing, graded automatically as done; the text is sent to the teacher. Prompt must be personal and tied to the chapter. `min` = minimum words (A1: 5, A2: 8, B1: 12, B2+: 20).
   `["Have you ever had an angry customer or an angry friend? What did you do? Write 3–4 sentences.", ["✍️"], "Thank you! Minara will read your answer.", { t: "write", min: 12, tr: { az: "Təşəkkürlər! Minara cavabını oxuyacaq.", ru: "Спасибо! Минара прочитает твой ответ." } }]`

## What each chapter gets (exactly 4 items, in this order in the array)

1. one **tf**
2. one varied item from {gap, match, seq, dict, fix}
3. a second varied item, a DIFFERENT kind from item 2
4. a **poll** (all chapters except the last) — or a **write** in the LAST chapter. Additionally the MIDDLE chapter (index ⌊n/2⌋) gets a **write** INSTEAD of its poll.

Across the whole story, rotate so that all five varied kinds appear several times (don't use the same pair in two consecutive chapters). For **kids** (A1, story `kids`) use only gap, match, dict, seq (very short items), no fix; write min 5; keep everything in the kids' vocabulary.

## Quality rules
- Everything factually tied to the chapter text; distractors plausible but clearly wrong.
- Level-appropriate English (see the story's `level`).
- Explanations: one friendly sentence; translations natural AZ/RU.
- Escape quotes properly inside JS strings (use double quotes for strings; use ’ for apostrophes inside text where convenient, or escape).
- The file must be valid JavaScript (run `node --check` on it). Nothing else in the file besides the `TASKS.<story> = {...};` assignment.
