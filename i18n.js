/**
 * Frihetsbibliotek · SV (default) | EN | BG
 * Persist: localStorage key "frihet-lang"
 * Apply: [data-i18n], [data-i18n-html], [data-i18n-aria], [data-i18n-title]
 */
(function (global) {
  'use strict';

  var STORAGE_KEY = 'frihet-lang';
  var SUPPORTED = ['sv', 'en', 'bg'];

  var I18N = {
    sv: {
      'nav.aria': 'Navigering',
      'nav.brand': '☦ Hospits',
      'nav.home': '← Frihetsbibliotek',
      'nav.back': '← Hospits',
      'nav.nyhet': 'Nyhet',
      'nav.kunskap': 'Kunskap',
      'nav.jamforelse': 'Jämförelse',
      'nav.metoder': 'Metoder',
      'nav.talmud': 'Talmud',
      'nav.hadith': 'Hadith',
      'nav.stod': 'Stöd',
      'nav.donate': 'Donate',
      'nav.alla': 'Alla poster',
      'nav.serie': 'Serie',
      'nav.huvudfeature': 'Huvudfeature',
      'nav.huvudfeatureSudan': 'Huvudfeature Sudan',

      'hero.stamp': '☦ Salomos fattiga riddare',
      'hero.title': 'Frihetsbibliotek',
      'hero.lede': '<b>Messias först.</b> Kunskapens hospits — skydda, undervisa, bjuda in. Stöd via krypto <b>mottagning live</b>. Utbetalning till tredjepart = separat spår.',

      'section.nyhet': 'Nyhet · feature',
      'feature.typ': '7 sep 2026 · Sudan',
      'feature.title': 'Sudan: vem skapar offren?',
      'feature.body': 'Guld finansierar båda sidor. Namngivna generaler: Hemedti/RSF · Burhan/SAF · Al Junaid · UAE som handelsnav (BELAGD). Militärt UAE-stöd OMSTRIDD.',
      'feature.badge': 'FEATURE · LÄS →',
      'series.typ': 'Serie · 5 artiklar',
      'series.title': 'Sudan · Etiopien · Eritrea (+ Nigeria-regel)',
      'series.body': 'El Fasher · Zamzam · Masalit-retorik · St Arsema · Eritrea FoRB',
      'series.badge': 'LÄS →',

      'section.alla': 'Alla poster · full katalog',
      'section.kunskap': 'Kunskap',
      'section.jamforelse': 'Jämförelse',
      'section.metoder': 'Metoder',
      'section.talmud': 'Talmud',
      'section.hadith': 'Hadith',
      'note.talmud': 'Europa ≠ Talmud. VdL-citat BELAGD som utsaga; genealogi HELT FEL/OBELAGT. Folkskuld förklaras, accepteras inte.',
      'note.hadith': 'Verklighetsbas + koran-test (KORANSTÖD vs AVVIKELSE). Ibland ≠ alltid. Metod: teman/hadith-verklighetsbas.md.',
      'section.stod': 'Stöd · mottagning',
      'stod.lede': 'Stöd kunskapens hospits / akut behov. Self-custody ÖB. Fel nät = risk. Utbetalning till tredjepart = separat spår.',
      'stod.ledeSudan': 'Krypto <b>live</b> · self-custody ÖB. Utbetalning tredjepart = <b>separat spår</b>. ÖB %-lås: <b>40 % mat Sudan</b>. Fel nät = risk.',
      'stod.eth': 'ETH · mainnet',

      'footer.stamp': '☦ Messias först · icke-våld · krypto-mottagning live · utbetalning separat spår',
      'footer.stampSudan': '☦ Messias först · krypto-mottagning live · utbetalning separat spår',
      'footer.back': '← Tillbaka till Frihetsbibliotek',
      'footer.katalogNote': 'Katalogetiketter är på svenska.',
      'footer.loading': 'katalog…',
      'footer.meta': '{n} poster · {date}',
      'empty.loading': 'laddar…',
      'empty.missing': 'saknas',

      'typ.person': 'Person',
      'typ.tema': 'Tema',
      'typ.metod': 'Metod',
      'typ.jamforelse': 'Jämförelse',
      'typ.plattform': 'Plattform',
      'typ.bemotande': 'Bemötande',
      'typ.skapare': 'Skapare',
      'typ.kalla': 'Källa',
      'typ.deklaration': 'Deklaration',
      'typ.vittnesmal': 'Vittnesmål',
      'typ.index': 'Index',
      'typ.ovrig': 'Övrigt',
      'typ.post': 'post',

      'lang.label': 'Språk',
      'emblem.alt': 'Korsémblem',
      'meta.description': 'Kunskapens hospits — Messias först. Salomos fattiga riddare. Krypto-mottagning live (BTC/ETH/LTC). Utbetalning till tredjepart = separat spår.',
      'doc.title': 'Frihetsbibliotek · Hospits',

      'sudan.navStamp': '7 sep 2026 · inte advokatprodukt',
      'sudan.title': 'Sudan: vem skapar offren?',
      'sudan.lede': 'Namngivna aktörer — Hemedti/RSF, Burhan/SAF, Al Junaid, UAE-guldhubb. Orsakskedja <b>BELAGD som mönster</b>. Metod: namnge · <i>ibland ≠ alltid</i> · inventera inte citat.',
      'sudan.h2.actors': 'Vem skapar offren (NAMNGA)',
      'sudan.h2.social': 'Social bas (ledarskap / rekrytering)',
      'sudan.h2.victims': 'Offer-mönster',
      'sudan.h2.chain': 'Orsakskedja (BELAGD som mönster)',
      'sudan.h2.source': 'Källa',
      'sudan.h2.conclusion': 'ÖB-lås · slutsats',
      'sudan.conclusion': 'Spåret som pekar ut <b>vem som ska lida · arbeta · nyttjas</b> är låst. Hierarki + namngivna aktörer. Guld och 2023-bristning driver parallellt — motsäger inte.',
      'sudan.th.actor': 'Aktör',
      'sudan.th.claim': 'Claim',
      'sudan.th.status': 'Status',
      'sudan.th.source': 'Källa',
      'sudan.th.org': 'Organisation',
      'sudan.th.link': 'Länk',
      'sudan.note.actors': 'Ansvar där ägande/kontroll finns. Civila i samma folkgrupp ≠ skyldiga.',
      'sudan.note.social': 'Inte «alla Rizeigat» / «alla nordaraber». Trupprekrytering blandad.',
      'sudan.callout': '<b>En rad:</b> Blodet = namngivna generaler, milis, bolag, handelsnav.',
      'sudan.sourceLead': 'Underlag (URL:er endast därifrån):',
      'sudan.docTitle': 'Sudan: vem skapar offren? · Frihetsbibliotek',

      'featureIndex.stamp': 'ÖB «Kör» · live på lokal sida',
      'featureIndex.title': 'Fem artiklar · Sudan · Etiopien · Eritrea',
      'featureIndex.lede': 'Kärna låst. Nigeria bara om det lägger till. Term: <b>ägbar underordnad</b> — beskrivs, godkänns inte.',
      'featureIndex.footer': 'BTC/ETH/LTC mottagning: <a href="../frihet.html#stod">#stod</a> · utbetalning separat spår',
      'featureIndex.docTitle': 'Feature-serie · 5 artiklar · Frihetsbibliotek',

      'featureArt.stamp': 'Feature-serie · ÖB «Kör» 7 sep 2026 · inte advokatprodukt',
      'featureArt.navSerie': 'Serie',

      'post.back': '← Tillbaka till katalog',
      'post.missing': 'Posten hittades inte.',
      'post.vaultNote': 'Fullständig text ligger i valvet. Här visas etikett, typ och filväg.',
      'post.typ': 'Typ',
      'post.fil': 'Fil',
      'post.loading': 'laddar…',
      'post.docTitle': 'Katalogpost · Frihetsbibliotek'
    },

    en: {
      'nav.aria': 'Navigation',
      'nav.brand': '☦ Hospice',
      'nav.home': '← Freedom Library',
      'nav.back': '← Hospice',
      'nav.nyhet': 'Feature',
      'nav.kunskap': 'Knowledge',
      'nav.jamforelse': 'Compare',
      'nav.metoder': 'Methods',
      'nav.talmud': 'Talmud',
      'nav.hadith': 'Hadith',
      'nav.stod': 'Support',
      'nav.donate': 'Donate',
      'nav.alla': 'All entries',
      'nav.serie': 'Series',
      'nav.huvudfeature': 'Main feature',
      'nav.huvudfeatureSudan': 'Main feature · Sudan',

      'hero.stamp': '☦ Solomon’s poor knights',
      'hero.title': 'Freedom Library',
      'hero.lede': '<b>Messiah first.</b> A hospice of knowledge — protect, teach, invite. Support via crypto <b>live reception</b>. Third-party payout = separate track.',

      'section.nyhet': 'News · feature',
      'feature.typ': '7 Sep 2026 · Sudan',
      'feature.title': 'Sudan: who creates the victims?',
      'feature.body': 'Gold funds both sides. Named generals: Hemedti/RSF · Burhan/SAF · Al Junaid · UAE as trade hub (ESTABLISHED). Military UAE support DISPUTED.',
      'feature.badge': 'FEATURE · READ →',
      'series.typ': 'Series · 5 articles',
      'series.title': 'Sudan · Ethiopia · Eritrea (+ Nigeria rule)',
      'series.body': 'El Fasher · Zamzam · Masalit rhetoric · St Arsema · Eritrea FoRB',
      'series.badge': 'READ →',

      'section.alla': 'All entries · full catalog',
      'section.kunskap': 'Knowledge',
      'section.jamforelse': 'Compare',
      'section.metoder': 'Methods',
      'section.talmud': 'Talmud',
      'section.hadith': 'Hadith',
      'note.talmud': 'Europe ≠ Talmud. VdL quote ESTABLISHED as statement; genealogy wholly WRONG/UNATTESTED. Collective guilt explained, not accepted.',
      'note.hadith': 'Reality base + Qur’an test (QURAN-SUPPORT vs DEVIATION). Sometimes ≠ always. Method: teman/hadith-verklighetsbas.md.',
      'section.stod': 'Support · reception',
      'stod.lede': 'Support the hospice of knowledge / urgent need. Self-custody as standing order. Wrong network = risk. Third-party payout = separate track.',
      'stod.ledeSudan': 'Crypto <b>live</b> · self-custody standing order. Third-party payout = <b>separate track</b>. Standing split: <b>40% food Sudan</b>. Wrong network = risk.',
      'stod.eth': 'ETH · mainnet',

      'footer.stamp': '☦ Messiah first · non-violence · crypto reception live · payout separate track',
      'footer.stampSudan': '☦ Messiah first · crypto reception live · payout separate track',
      'footer.back': '← Back to Freedom Library',
      'footer.katalogNote': 'Catalog labels remain in Swedish.',
      'footer.loading': 'catalog…',
      'footer.meta': '{n} entries · {date}',
      'empty.loading': 'loading…',
      'empty.missing': 'none',

      'typ.person': 'Person',
      'typ.tema': 'Theme',
      'typ.metod': 'Method',
      'typ.jamforelse': 'Compare',
      'typ.plattform': 'Platform',
      'typ.bemotande': 'Response',
      'typ.skapare': 'Maker',
      'typ.kalla': 'Source',
      'typ.deklaration': 'Declaration',
      'typ.vittnesmal': 'Witness',
      'typ.index': 'Index',
      'typ.ovrig': 'Other',
      'typ.post': 'post',

      'lang.label': 'Language',
      'emblem.alt': 'Cross emblem',
      'meta.description': 'Hospice of knowledge — Messiah first. Solomon’s poor knights. Crypto reception live (BTC/ETH/LTC). Third-party payout = separate track.',
      'doc.title': 'Freedom Library · Hospice',

      'sudan.navStamp': '7 Sep 2026 · not a legal product',
      'sudan.title': 'Sudan: who creates the victims?',
      'sudan.lede': 'Named actors — Hemedti/RSF, Burhan/SAF, Al Junaid, UAE gold hub. Causal chain <b>ESTABLISHED as pattern</b>. Method: name · <i>sometimes ≠ always</i> · do not invent quotes.',
      'sudan.h2.actors': 'Who creates the victims (NAME THEM)',
      'sudan.h2.social': 'Social base (leadership / recruitment)',
      'sudan.h2.victims': 'Victim patterns',
      'sudan.h2.chain': 'Causal chain (ESTABLISHED as pattern)',
      'sudan.h2.source': 'Sources',
      'sudan.h2.conclusion': 'Standing lock · conclusion',
      'sudan.conclusion': 'The track that names <b>who is to suffer · labour · be used</b> is locked. Hierarchy + named actors. Gold and the 2023 rupture run in parallel — they do not contradict.',
      'sudan.th.actor': 'Actor',
      'sudan.th.claim': 'Claim',
      'sudan.th.status': 'Status',
      'sudan.th.source': 'Source',
      'sudan.th.org': 'Organisation',
      'sudan.th.link': 'Link',
      'sudan.note.actors': 'Responsibility where ownership/control sits. Civilians in the same ethnic group ≠ guilty.',
      'sudan.note.social': 'Not “all Rizeigat” / “all northern Arabs”. Troop recruitment is mixed.',
      'sudan.callout': '<b>One line:</b> The blood = named generals, militias, companies, trade hubs.',
      'sudan.sourceLead': 'Basis (URLs only from there):',
      'sudan.docTitle': 'Sudan: who creates the victims? · Freedom Library',

      'featureIndex.stamp': 'Standing order «Go» · live on local page',
      'featureIndex.title': 'Five articles · Sudan · Ethiopia · Eritrea',
      'featureIndex.lede': 'Core locked. Nigeria only if it adds. Term: <b>ownable subordinate</b> — described, not endorsed.',
      'featureIndex.footer': 'BTC/ETH/LTC reception: <a href="../frihet.html#stod">#stod</a> · payout separate track',
      'featureIndex.docTitle': 'Feature series · 5 articles · Freedom Library',

      'featureArt.stamp': 'Feature series · standing order «Go» 7 Sep 2026 · not a legal product',
      'featureArt.navSerie': 'Series',

      'post.back': '← Back to catalog',
      'post.missing': 'Entry not found.',
      'post.vaultNote': 'The full text is in the vault. This page shows the label, type, and file path.',
      'post.typ': 'Type',
      'post.fil': 'File',
      'post.loading': 'loading…',
      'post.docTitle': 'Catalog entry · Freedom Library'
    },

    bg: {
      'nav.aria': 'Навигация',
      'nav.brand': '☦ Хоспис',
      'nav.home': '← Библиотека на свободата',
      'nav.back': '← Хоспис',
      'nav.nyhet': 'Новина',
      'nav.kunskap': 'Знание',
      'nav.jamforelse': 'Сравнение',
      'nav.metoder': 'Методи',
      'nav.talmud': 'Талмуд',
      'nav.hadith': 'Хадис',
      'nav.stod': 'Подкрепа',
      'nav.donate': 'Donate',
      'nav.alla': 'Всички записи',
      'nav.serie': 'Серия',
      'nav.huvudfeature': 'Главна статия',
      'nav.huvudfeatureSudan': 'Главна статия · Судан',

      'hero.stamp': '☦ Бедните рицари на Соломон',
      'hero.title': 'Библиотека на свободата',
      'hero.lede': '<b>Месия първи.</b> Хоспис на знанието — пази, учи, кани. Подкрепа чрез крипто <b>прием на живо</b>. Изплащане към трета страна = отделен път.',

      'section.nyhet': 'Новина · feature',
      'feature.typ': '7 сеп 2026 · Судан',
      'feature.title': 'Судан: кой създава жертвите?',
      'feature.body': 'Златото финансира и двете страни. Именовани генерали: Hemedti/RSF · Burhan/SAF · Al Junaid · ОАЕ като търговски център (УСТАНОВЕНО). Военна подкрепа от ОАЕ ОСПОРВАНА.',
      'feature.badge': 'FEATURE · ЧЕТИ →',
      'series.typ': 'Серия · 5 статии',
      'series.title': 'Судан · Етиопия · Еритрея (+ правило Нигерия)',
      'series.body': 'El Fasher · Zamzam · реторика Masalit · St Arsema · Еритрея FoRB',
      'series.badge': 'ЧЕТИ →',

      'section.alla': 'Всички записи · пълен каталог',
      'section.kunskap': 'Знание',
      'section.jamforelse': 'Сравнение',
      'section.metoder': 'Методи',
      'section.talmud': 'Талмуд',
      'section.hadith': 'Хадис',
      'note.talmud': 'Европа ≠ Талмуд. Цитат VdL УСТАНОВЕН като изказване; генеалогия напълно ГРЕШНА/НЕУСТАНОВЕНА. Колективна вина се обяснява, не се приема.',
      'note.hadith': 'База в реалността + Коран-тест (КОРАНСКА ПОДКРЕПА vs ОТКЛОНЕНИЕ). Понякога ≠ винаги. Метод: teman/hadith-verklighetsbas.md.',
      'section.stod': 'Подкрепа · прием',
      'stod.lede': 'Подкрепи хосписа на знанието / спешна нужда. Self-custody като постоянна заповед. Грешна мрежа = риск. Изплащане към трета страна = отделен път.',
      'stod.ledeSudan': 'Крипто <b>на живо</b> · self-custody. Изплащане към трета страна = <b>отделен път</b>. Заключен дял: <b>40 % храна Судан</b>. Грешна мрежа = риск.',
      'stod.eth': 'ETH · mainnet',

      'footer.stamp': '☦ Месия първи · ненасилие · крипто-прием на живо · изплащане отделен път',
      'footer.stampSudan': '☦ Месия първи · крипто-прием на живо · изплащане отделен път',
      'footer.back': '← Назад към Библиотека на свободата',
      'footer.katalogNote': 'Етикетите в каталога остават на шведски.',
      'footer.loading': 'каталог…',
      'footer.meta': '{n} записа · {date}',
      'empty.loading': 'зареждане…',
      'empty.missing': 'липсва',

      'typ.person': 'Лице',
      'typ.tema': 'Тема',
      'typ.metod': 'Метод',
      'typ.jamforelse': 'Сравнение',
      'typ.plattform': 'Платформа',
      'typ.bemotande': 'Отговор',
      'typ.skapare': 'Творец',
      'typ.kalla': 'Източник',
      'typ.deklaration': 'Декларация',
      'typ.vittnesmal': 'Свидетелство',
      'typ.index': 'Индекс',
      'typ.ovrig': 'Друго',
      'typ.post': 'запис',

      'lang.label': 'Език',
      'emblem.alt': 'Емблема с кръст',
      'meta.description': 'Хоспис на знанието — Месия първи. Бедните рицари на Соломон. Крипто-прием на живо (BTC/ETH/LTC). Изплащане към трета страна = отделен път.',
      'doc.title': 'Библиотека на свободата · Хоспис',

      'sudan.navStamp': '7 сеп 2026 · не е правен продукт',
      'sudan.title': 'Судан: кой създава жертвите?',
      'sudan.lede': 'Именовани актьори — Hemedti/RSF, Burhan/SAF, Al Junaid, златен хъб ОАЕ. Причинна верига <b>УСТАНОВЕНА като модел</b>. Метод: именувай · <i>понякога ≠ винаги</i> · не измисляй цитати.',
      'sudan.h2.actors': 'Кой създава жертвите (ИМЕНУВАЙ)',
      'sudan.h2.social': 'Социална база (лидерство / набор)',
      'sudan.h2.victims': 'Модели на жертви',
      'sudan.h2.chain': 'Причинна верига (УСТАНОВЕНА като модел)',
      'sudan.h2.source': 'Източник',
      'sudan.h2.conclusion': 'Заключена заповед · заключение',
      'sudan.conclusion': 'Следата, която сочи <b>кой да страда · да работи · да бъде използван</b>, е заключена. Йерархия + именовани актьори. Златото и разривът през 2023 вървят паралелно — не се отричат.',
      'sudan.th.actor': 'Актьор',
      'sudan.th.claim': 'Твърдение',
      'sudan.th.status': 'Статус',
      'sudan.th.source': 'Източник',
      'sudan.th.org': 'Организация',
      'sudan.th.link': 'Връзка',
      'sudan.note.actors': 'Отговорност там, където има собственост/контрол. Цивилни от същата група ≠ виновни.',
      'sudan.note.social': 'Не «всички Rizeigat» / «всички северни араби». Наборът е смесен.',
      'sudan.callout': '<b>Един ред:</b> Кръвта = именовани генерали, милиции, фирми, търговски хъбове.',
      'sudan.sourceLead': 'Основа (URL-и само оттам):',
      'sudan.docTitle': 'Судан: кой създава жертвите? · Библиотека на свободата',

      'featureIndex.stamp': 'Постоянна заповед «Давай» · на живо на локалната страница',
      'featureIndex.title': 'Пет статии · Судан · Етиопия · Еритрея',
      'featureIndex.lede': 'Ядрото е заключено. Нигерия само ако добавя. Термин: <b>притежаван подчинен</b> — описва се, не се одобрява.',
      'featureIndex.footer': 'BTC/ETH/LTC прием: <a href="../frihet.html#stod">#stod</a> · изплащане отделен път',
      'featureIndex.docTitle': 'Feature-серия · 5 статии · Библиотека на свободата',

      'featureArt.stamp': 'Feature-серия · постоянна заповед «Давай» 7 сеп 2026 · не е правен продукт',
      'featureArt.navSerie': 'Серия',

      'post.back': '← Назад към каталога',
      'post.missing': 'Записът не е намерен.',
      'post.vaultNote': 'Пълният текст е в хранилището. Тук се виждат етикет, тип и път до файла.',
      'post.typ': 'Тип',
      'post.fil': 'Файл',
      'post.loading': 'зареждане…',
      'post.docTitle': 'Каталожен запис · Библиотека на свободата'
    }
  };

  function normalize(lang) {
    lang = String(lang || '').toLowerCase();
    return SUPPORTED.indexOf(lang) >= 0 ? lang : 'sv';
  }

  function t(key, lang) {
    lang = normalize(lang || current);
    var pack = I18N[lang] || I18N.sv;
    if (pack[key] != null) return pack[key];
    if (I18N.sv[key] != null) return I18N.sv[key];
    return key;
  }

  function tf(key, vars, lang) {
    var s = t(key, lang);
    vars = vars || {};
    return s.replace(/\{(\w+)\}/g, function (_, k) {
      return vars[k] != null ? String(vars[k]) : '';
    });
  }

  var current = 'sv';
  try {
    current = normalize(localStorage.getItem(STORAGE_KEY) || 'sv');
  } catch (e) {
    current = 'sv';
  }

  function apply(root) {
    root = root || document;
    var lang = current;
    var pack = I18N[lang] || I18N.sv;

    root.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!key || pack[key] == null && I18N.sv[key] == null) return;
      el.textContent = t(key, lang);
    });

    root.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (!key || pack[key] == null && I18N.sv[key] == null) return;
      el.innerHTML = t(key, lang);
    });

    root.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (!key) return;
      el.setAttribute('alt', t(key, lang));
    });

    root.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (!key) return;
      el.setAttribute('aria-label', t(key, lang));
    });

    root.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      if (!key) return;
      el.setAttribute('title', t(key, lang));
    });

    document.documentElement.setAttribute('lang', lang);

    var meta = document.querySelector('meta[name="description"][data-i18n-content]');
    if (meta) {
      meta.setAttribute('content', t(meta.getAttribute('data-i18n-content'), lang));
    }

    var titleEl = document.querySelector('title[data-i18n-doc]');
    if (titleEl) {
      document.title = t(titleEl.getAttribute('data-i18n-doc'), lang);
    }

    root.querySelectorAll('.lang-switch [data-lang]').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      btn.classList.toggle('is-active', active);
    });
  }

  function setLang(lang) {
    current = normalize(lang);
    try {
      localStorage.setItem(STORAGE_KEY, current);
    } catch (e) { /* ignore */ }
    apply(document);
    try {
      document.dispatchEvent(new CustomEvent('frihet-lang', { detail: { lang: current } }));
    } catch (e2) { /* IE noop */ }
    return current;
  }

  function typLabel(typ) {
    var map = {
      person: 'typ.person',
      tema: 'typ.tema',
      metod: 'typ.metod',
      jamforelse: 'typ.jamforelse',
      plattform: 'typ.plattform',
      bemotande: 'typ.bemotande',
      skapare: 'typ.skapare',
      kalla: 'typ.kalla',
      deklaration: 'typ.deklaration',
      vittnesmal: 'typ.vittnesmal',
      index: 'typ.index',
      'övrigt': 'typ.ovrig'
    };
    return t(map[typ] || 'typ.post');
  }

  function mountSwitcher(navInner) {
    if (!navInner || navInner.querySelector('.lang-switch')) return;
    var wrap = document.createElement('div');
    wrap.className = 'lang-switch';
    wrap.setAttribute('role', 'group');
    wrap.setAttribute('data-i18n-aria', 'lang.label');
    wrap.setAttribute('aria-label', t('lang.label'));

    SUPPORTED.forEach(function (code, i) {
      if (i) {
        var sep = document.createElement('span');
        sep.className = 'lang-sep';
        sep.setAttribute('aria-hidden', 'true');
        sep.textContent = '|';
        wrap.appendChild(sep);
      }
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lang-btn';
      btn.setAttribute('data-lang', code);
      btn.textContent = code.toUpperCase();
      btn.addEventListener('click', function () {
        setLang(code);
      });
      wrap.appendChild(btn);
    });

    navInner.appendChild(wrap);
  }

  function boot() {
    var nav = document.querySelector('nav.top .inner') || document.querySelector('nav .inner') || document.querySelector('nav');
    if (nav) mountSwitcher(nav);
    apply(document);
  }

  global.FrihetI18n = {
    I18N: I18N,
    STORAGE_KEY: STORAGE_KEY,
    t: t,
    tf: tf,
    typLabel: typLabel,
    getLang: function () { return current; },
    setLang: setLang,
    apply: apply,
    mountSwitcher: mountSwitcher,
    boot: boot
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})(typeof window !== 'undefined' ? window : this);
