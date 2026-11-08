/* ===== story seasons: episodes follow each other with a bridge ("previously / next time") so students move from one story to the next ===== */
const SERIES = {
  bluesail: { name: { en: "BlueSail · Season 1", az: "BlueSail · 1-ci mövsüm", ru: "BlueSail · Сезон 1" }, eps: ["interview", "client", "contract", "call", "business"],
    bridge: {
      interview: { en: "Aysel got the job at BlueSail! Her first week starts with the hardest phone call of all: an angry client.", az: "Aysel BlueSail-də işə qəbul olundu! İlk həftəsi ən çətin zənglə başlayır: qəzəbli müştəri.", ru: "Айсель получила работу в BlueSail! Её первая неделя начинается с самого трудного звонка — злой клиент." },
      client:    { en: "The hotel client stays. But in the logistics office a signed contract has disappeared — and the shipment leaves on Friday.", az: "Otel müştərisi qaldı. Amma logistika ofisində imzalanmış müqavilə yoxa çıxıb — yük isə cümə günü yola düşür.", ru: "Клиент из отеля остался. Но в отделе логистики пропал подписанный контракт — а груз уходит в пятницу." },
      contract:  { en: "The contract is found and signed. Now Nigar must agree the shipments with Hamburg and Osaka — in one video call, in English.", az: "Müqavilə tapıldı və imzalandı. İndi Nigar Hamburq və Osaka ilə yükləri bir video zəngdə, ingiliscə razılaşdırmalıdır.", ru: "Контракт найден и подписан. Теперь Нигяр должна согласовать поставки с Гамбургом и Осакой — в одном видеозвонке, по-английски." },
      call:      { en: "BlueSail is growing fast. Leyla and Aysel decide to launch their own startup — and the investors are already waiting.", az: "BlueSail sürətlə böyüyür. Leyla və Aysel öz startaplarını qurmaq qərarına gəlir — investorlar artıq gözləyir.", ru: "BlueSail быстро растёт. Лейла и Айсель решают запустить свой стартап — инвесторы уже ждут." },
      business:  { en: "Season 1 is complete! The deal is signed and the real work begins. Season 2 is coming soon.", az: "1-ci mövsüm tamamlandı! Müqavilə imzalandı, əsl iş indi başlayır. 2-ci mövsüm tezliklə.", ru: "Сезон 1 завершён! Сделка подписана, настоящая работа только начинается. Сезон 2 — скоро." } } },
  leyla: { name: { en: "Leyla's Baku · Season 1", az: "Leylanın Bakısı · 1-ci mövsüm", ru: "Баку Лейлы · Сезон 1" }, eps: ["cafe", "mystery", "travel"],
    bridge: {
      cafe:    { en: "The café is a success. On your first free day you walk into Icherisheher — and an old carpet disappears in front of you.", az: "Kafe uğur qazandı. İlk boş gündə İçərişəhərə gedirsən — və gözünün qabağında qədim xalça yoxa çıxır.", ru: "Кафе процветает. В первый свободный день ты идёшь в Ичеришехер — и старинный ковёр исчезает у тебя на глазах." },
      mystery: { en: "The carpet is home again. Mr Rauf thanks you with a gift: plane tickets. Your trip around the world starts in London.", az: "Xalça evinə qayıtdı. Cənab Rauf sənə hədiyyə verir: təyyarə biletləri. Dünya səyahətin Londondan başlayır.", ru: "Ковёр снова дома. Мистер Рауф благодарит тебя подарком: билеты на самолёт. Твоё путешествие вокруг света начинается в Лондоне." },
      travel:  { en: "Season 1 is complete! You have seen the world — and Baku Café is waiting for your stories. Season 2 is coming soon.", az: "1-ci mövsüm tamamlandı! Dünyanı gördün — Baku Café hekayələrini gözləyir. 2-ci mövsüm tezliklə.", ru: "Сезон 1 завершён! Ты увидел(а) мир — а Baku Café ждёт твоих историй. Сезон 2 — скоро." } } }
};
Object.assign(UI.en, { epL: "Episode", nextEp: "Next episode", seasonDone: "Season complete", toBeCont: "To be continued…" });
Object.assign(UI.az, { epL: "Bölüm", nextEp: "Növbəti bölüm", seasonDone: "Mövsüm tamamlandı", toBeCont: "Davamı var…" });
Object.assign(UI.ru, { epL: "Эпизод", nextEp: "Следующий эпизод", seasonDone: "Сезон завершён", toBeCont: "Продолжение следует…" });
const seriesOf = story => { for (const k in SERIES) { const i = SERIES[k].eps.indexOf(story); if (i >= 0) return { key: k, s: SERIES[k], i, n: SERIES[k].eps.length, next: SERIES[k].eps[i + 1] || null }; } return null; };
const epBadge = story => { const o = seriesOf(story); return o ? `<span class="h-ep">${esc((o.s.name[LANG] || o.s.name.en).split(" · ")[0])} · ${L("epL")} ${o.i + 1}/${o.n}</span>` : ""; };
/* card for the result screen of a story's last chapter */
function seriesNextHTML(story) {
  const o = seriesOf(story); if (!o) return "";
  const br = o.s.bridge[story], txt = br ? (br[LANG] || br.en) : "", nx = o.next && STORIES[o.next];
  return `<div class="qz-ep ${nx ? "" : "fin"}"><p class="qz-epk">${nx ? "📺 " + L("toBeCont") : "🏆 " + L("seasonDone")}</p><p class="qz-ept">${esc(txt)}</p>
    ${nx ? `<a class="qz-btn qz-epgo" href="#${o.next}">${L("nextEp")}: ${esc(nx.title)} →</a>` : ""}</div>`;
}
