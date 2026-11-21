/* ——— Страницы товара: три языка, меню, галерея, появление блоков ——— */

/* Словарь ключуется русской строкой ровно как в разметке — так же, как на
   главной. Строки, которых здесь нет (бренды, цифры, телефон), остаются как есть. */
window.I18N = (function () {
  var DICT = {
    "Услуги":{"kk":"Қызметтер","en":"Services"},
    "О нас":{"kk":"Біз туралы","en":"About us"},
    "Каталог":{"kk":"Каталог","en":"Catalog"},
    "Отзывы":{"kk":"Пікірлер","en":"Reviews"},
    "Контакты":{"kk":"Байланыс","en":"Contacts"},
    "Записаться на приём":{"kk":"Қабылдауға жазылу","en":"Book an appointment"},
    "Главная":{"kk":"Басты бет","en":"Home"},
    "Открыть меню":{"kk":"Мәзірді ашу","en":"Open menu"},
    "Закрыть меню":{"kk":"Мәзірді жабу","en":"Close menu"},

    "Очки":{"kk":"Көзілдірік","en":"Eyeglasses"},
    "Солнцезащитные очки":{"kk":"Күннен қорғайтын көзілдірік","en":"Sunglasses"},
    "Женская оправа":{"kk":"Әйелдер жақтауы","en":"Women's frame"},
    "Мужская оправа":{"kk":"Ерлер жақтауы","en":"Men's frame"},
    "Детская оправа":{"kk":"Балалар жақтауы","en":"Kids' frame"},
    "Для неё":{"kk":"Әйелдерге","en":"For her"},
    "Для него":{"kk":"Ерлерге","en":"For him"},
    "Для детей":{"kk":"Балаларға","en":"For kids"},

    "женская оправа":{"kk":"әйелдер жақтауы","en":"women's frame"},
    "мужская оправа":{"kk":"ерлер жақтауы","en":"men's frame"},
    "детская оправа":{"kk":"балалар жақтауы","en":"kids' frame"},
    "прочный пластик":{"kk":"берік пластик","en":"durable plastic"},
    "высокое качество":{"kk":"жоғары сапа","en":"high quality"},
    "солнцезащитные очки":{"kk":"күннен қорғайтын көзілдірік","en":"sunglasses"},
    "женские":{"kk":"әйелдерге","en":"women's"},
    "мужские":{"kk":"ерлерге","en":"men's"},
    "для детей":{"kk":"балаларға","en":"for kids"},

    "Женская оправа CHROME HEARTS. Прочный пластик, высокое качество исполнения.":{"kk":"CHROME HEARTS әйелдер жақтауы. Берік пластик, орындалу сапасы жоғары.","en":"A women's CHROME HEARTS frame. Durable plastic, high build quality."},
    "Мужская оправа DACCHI. Прочный пластик, высокое качество исполнения.":{"kk":"DACCHI ерлер жақтауы. Берік пластик, орындалу сапасы жоғары.","en":"A men's DACCHI frame. Durable plastic, high build quality."},
    "Детская оправа MORGANBOSS. Прочный пластик, высокое качество исполнения.":{"kk":"MORGANBOSS балалар жақтауы. Берік пластик, орындалу сапасы жоғары.","en":"A kids' MORGANBOSS frame. Durable plastic, high build quality."},
    "Солнцезащитные очки PRADA MILANO. Женская модель.":{"kk":"PRADA MILANO күннен қорғайтын көзілдірігі. Әйелдер моделі.","en":"PRADA MILANO sunglasses. A women's model."},
    "Солнцезащитные очки POLAROID. Мужская модель.":{"kk":"POLAROID күннен қорғайтын көзілдірігі. Ерлер моделі.","en":"POLAROID sunglasses. A men's model."},
    "Солнцезащитные очки для детей.":{"kk":"Балаларға арналған күннен қорғайтын көзілдірік.","en":"Sunglasses for kids."},

    "В салоне":{"kk":"Салонда","en":"At the store"},
    "Примерка в салоне — меряйте сколько угодно моделей":{"kk":"Салонда өлшеп көру — қалағаныңызша модель киіп көріңіз","en":"Try on as many frames as you like in the store"},
    "Установим линзы по вашему рецепту":{"kk":"Линзаларды рецептіңіз бойынша орнатамыз","en":"We fit lenses to your prescription"},
    "Можно изготовить с диоптриями по вашему рецепту":{"kk":"Рецептіңіз бойынша диоптриямен жасауға болады","en":"Can be made with prescription lenses"},
    "Проверка зрения бесплатно при заказе очков":{"kk":"Көзілдірік тапсырысы кезінде көру тексеруі тегін","en":"Free eye test when you order glasses"},
    "Гарантия 2 года, мелкий ремонт для клиентов бесплатно":{"kk":"Кепілдік 2 жыл, ұсақ жөндеу клиенттерге тегін","en":"2-year warranty, minor repairs free for our clients"},

    "Записаться на примерку":{"kk":"Өлшеп көруге жазылу","en":"Book a fitting"},
    "Спросить в WhatsApp":{"kk":"WhatsApp-та сұрау","en":"Ask on WhatsApp"},
    "Цену и наличие уточняйте у консультанта — ассортимент обновляется.":{"kk":"Бағасы мен бар-жоғын кеңесшіден нақтылаңыз — ассортимент жаңарып отырады.","en":"Ask a consultant about price and availability — the range is updated regularly."},

    "Наши салоны":{"kk":"Біздің салондар","en":"Our stores"},
    "6 мкр, 36 дом":{"kk":"6 ы/а, 36 үй","en":"Microdistrict 6, building 36"},
    "15 мкр, 69 дом":{"kk":"15 ы/а, 69 үй","en":"Microdistrict 15, building 69"},
    "Врач принимает 10:00 – 18:00, по живой очереди":{"kk":"Дәрігер қабылдайды 10:00 – 18:00, кезекпен","en":"Doctor's hours 10:00 – 18:00, walk-in"},
    "Врач принимает 15:00 – 19:00, по записи":{"kk":"Дәрігер қабылдайды 15:00 – 19:00, алдын ала жазылу бойынша","en":"Doctor's hours 15:00 – 19:00, by appointment"},

    "Другие модели каталога":{"kk":"Каталогтың басқа модельдері","en":"More from the catalog"},
    "Весь каталог":{"kk":"Толық каталог","en":"Full catalog"},
    "Фото модели":{"kk":"Модельдің фотосы","en":"Product photo"},
    "Фото в образе":{"kk":"Киілген күйдегі фото","en":"Worn photo"},

    "Профессиональная оптика в Актау. Проверка зрения, подбор очков и контактных линз с 2013 года.":{"kk":"Ақтаудағы кәсіби оптика. Көруді тексеру, көзілдірік пен контакт линзаларын таңдау — 2013 жылдан бері.","en":"Professional optics in Aktau. Eye tests, glasses and contact lenses since 2013."},
    "Салон":{"kk":"Салон","en":"Store"},
    "Проверка зрения":{"kk":"Көруді тексеру","en":"Eye test"},
    "Подбор очков":{"kk":"Көзілдірік таңдау","en":"Glasses fitting"},
    "Контактные линзы":{"kk":"Контакт линзалары","en":"Contact lenses"},
    "О салоне":{"kk":"Салон туралы","en":"About the store"},
    "Оставить отзыв":{"kk":"Пікір қалдыру","en":"Leave a review"},
    "© 2013–2026 Оптика ДОВЕРИЕ. Все права защищены.":{"kk":"© 2013–2026 «ДОВЕРИЕ» оптикасы. Барлық құқықтар қорғалған.","en":"© 2013–2026 Doverie Optics. All rights reserved."}
  };

  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1 };
  var ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];
  var lang = 'ru';
  var nodes = [], attrs = [], titleRu = document.title;

  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: function (n) {
      for (var e = n.parentElement; e; e = e.parentElement)
        if (SKIP[e.tagName.toUpperCase()]) return NodeFilter.FILTER_REJECT;
      return n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  for (var n; (n = walker.nextNode());) {
    var ru = n.nodeValue.trim();
    if (DICT[ru]) nodes.push({ n: n, raw: n.nodeValue, ru: ru });
  }
  document.querySelectorAll('[placeholder],[aria-label],[title],img[alt]').forEach(function (el) {
    ATTRS.forEach(function (a) {
      var v = el.getAttribute(a);
      if (v && DICT[v.trim()]) attrs.push({ el: el, a: a, ru: v.trim() });
    });
  });

  function tr(ru) { return lang === 'ru' ? ru : ((DICT[ru] && DICT[ru][lang]) || ru); }

  function apply(l) {
    lang = (l === 'kk' || l === 'en') ? l : 'ru';
    nodes.forEach(function (o) { o.n.nodeValue = o.raw.replace(o.ru, tr(o.ru)); });
    attrs.forEach(function (o) { o.el.setAttribute(o.a, tr(o.ru)); });
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.classList.toggle('on', b.dataset.lang === lang);
    });
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { apply(b.dataset.lang); });
  });

  var saved = 'ru';
  try { saved = localStorage.getItem('lang') || 'ru'; } catch (e) {}
  apply(saved);

  return { t: tr, set: apply, get: function () { return lang; } };
})();

/* ——— МОБИЛЬНОЕ МЕНЮ ——— */
(function () {
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  var ov = document.getElementById('navOv');
  if (!burger || !nav || !ov) return;
  function setMenu(open) {
    burger.classList.toggle('on', open);
    nav.classList.toggle('on', open);
    ov.classList.toggle('on', open);
    ov.hidden = !open;
    document.body.classList.toggle('nav-open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  }
  burger.addEventListener('click', function () { setMenu(!nav.classList.contains('on')); });
  ov.addEventListener('click', function () { setMenu(false); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
})();

/* ——— ГАЛЕРЕЯ ——— */
(function () {
  var main = document.getElementById('prMain');
  if (!main) return;
  document.querySelectorAll('.pr-thumb').forEach(function (t) {
    t.addEventListener('click', function () {
      document.querySelectorAll('.pr-thumb').forEach(function (x) { x.classList.remove('on'); });
      t.classList.add('on');
      var src = t.dataset.full, web = t.dataset.webp || '';
      main.querySelector('source').srcset = web;
      main.querySelector('img').src = src;
    });
  });
})();

/* ——— ПОЯВЛЕНИЕ БЛОКОВ ——— */
(function () {
  var all = document.querySelectorAll('.rv');
  if (!('IntersectionObserver' in window)) {
    all.forEach(function (el) { el.classList.add('on'); });
    return;
  }
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('on'); obs.unobserve(e.target); }
    });
  }, { threshold: .1 });
  all.forEach(function (el) { obs.observe(el); });
})();
