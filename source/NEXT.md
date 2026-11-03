# Minaraverse — where we stopped (2026-11-03 05:07)

Live: artifact 9Hm3JHBvKwyTNEDyReqmeC (Version 11). Phases 1–3 DONE and published 2026-11-03 (views2.js, mystery.js, data2.js, tr2.js). All earlier features stay.

## Approved plan (do in this order)
1. Phase 1 (inside existing worlds): 1–2 typed answers per chapter (auto: questions with "___" and short answers), retype after a wrong answer;
   warm-up review queue (wrong answers return after 1/3/7/21 days, max 3 at chapter start); forgiving day streak (1 freeze a week);
   9:16 result card per world (VHS label / parchment / photo journal / boarding pass), no answers on it, QR → instagram;
   final screen CTA "Find your level" → #level.
2. Phase 2: home "Today" strip after hero (streak, Daily word, review due → #review); #daily Wordle-style (night sky, gold tiles, AZ/RU meaning);
   #level test 20 q A1–B2 (airport split-flap board) → DM CTA; home "Find your level" block after About;
   "Exam room" section after stories: #exam DİM practice (6 listening via TTS max 2 plays, 16 MC, 8 reading incl. 3 typed ×2; score /100 "unofficial");
   #errors Mistake hunters: 6 games (articles, he/she/it, word order tiles, w/v listen, Present Perfect, false friends).
3. Phase 3: #mystery "The Secret of Icherisheher" (lost "Seven Stars" carpet), 7 chapters:
   1 Old Guesthouse courtyard (DRAW, no image yet) · 2 Library (img/m-library.jpg) · 3 Kitchen (img/m-kitchen.jpg) · 4 Secret letter (img/m-letter.jpg)
   · 5 Cellar (img/m-cellar.jpg) · 6 Rooftop, Maiden Tower view (DRAW) · 7 Caravanserai finale (DRAW).
   Flashlight follows the pointer, a combination lock opens on a solved riddle, typewriter font. 5th card on home.
4. Translate new explanations to AZ/RU, test phone + desktop, publish.

## Rules from Minara
- NEVER start anything in Higgsfield without first showing the credit cost and getting her confirmation.
- Missing images: make them free (draw in code), no credits.
- Results to Google Sheet + GitHub hosting still wait for her GitHub account and Google Form link. WhatsApp number not known yet (use Instagram DM).

## 2026-11-03 v2 (separate artifact Nxydj2pAbbRFSj6Z3t1t9d, private until Minara shares it)
- Old artifact 9Hm3JHBvKwyTNEDyReqmeC (v12) stays untouched; old sources in src_v1_backup. build.py now writes ../minaraverse-v2.html.
- New: v2.js (strings, plan, formLink, Movie/Kids worlds, Club of the week), data3.js (movie, kids + TR/TXT), data4.js (WEEKLY, ERR_MORE, translations).
- Home order: hero → level test/plan → today → about(bio+approach) → formats/path → stories (level filter) → club → exam room → footer.
- Results: RESULTS.form (Google Form viewform URL + entry ids) → opens pre-filled form in new tab (works inside claude.ai). Waiting for Minara's form. db capability can't take writes from public-link visitors.
- v3 (Nov 3): +cafe, business, debate, ielts, heist (data5/6/7), ERR_ADV C1–C2 games, EXAM_BASIC/EXAM_ADV (#exam-basic/std/adv), levels A1–C2 (30-q test), lead form (#h-lead), hall of fame BOARD in v3.js (fill winners + republish), scroll teasers nx1–nx6.
- One Google Form expected with fields: type, name, surname, age, email, whatsapp, format, level, story, chapter, score, riddle, answers, message, lang → set RESULTS.form + RESULTS.f entry ids.
- Own hosting LIVE: https://minaraverse.github.io (repo Minaraverse/minaraverse.github.io, clone /home/claude/minaraverse.github.io). Deploy = python3 build.py; cp -r dist/* repo; commit (author Claude <noreply@anthropic.com>); push.
- Google Form connected (RESULTS in core.js). On own domain results/leads send directly (no extra page); on claude.ai the pre-filled form opens.
- PWA: dist/manifest.json, sw.js, icon-*.png (installable to home screen).
