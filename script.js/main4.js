//КНОПКА ГУГЛ ПЕРЕВОДЧИК. РАБОЧАЯ, НО НЕ НА 100% В МОБ ВЕРСИИ КНОПКА НЕ АКТИВНА, НЕ ОТКРЫВАЕТ ПОПАП С ВЫБОРОМ ЯЗЫКОВ.ПОЧЕМУ МОЖЕТ НЕ ОТКРЫВАТЬСЯ, НАПИСАЛА ДАША В ДИСКОРДЕ. ГРОК ГОВОРИТ, ЧТО ЭТОТ ГУГЛ ВИДЖЕТ ДЕЛАТЬ С КЛАССОМ ДЕСКТОП И МОБАЙЛ НЕ НУЖНО, ПОТОМУ ЧТО Google Translate очень плохо работает с несколькими контейнерами и клонами. Проблема в том, что Google Translate не умеет нормально работать с клонированными элементами и с динамически созданными контейнерами после загрузки страницы. Когда ты клонируешь уже инициализированный элемент — копия остаётся «мёртвой» (без iframe и без попапа). Когда ты пытаешься переинициализировать в копии — оригинал тоже ломается (потому что скрипт Google может привязаться только к одному id за раз).
//ЗАКРОЮ, ПОТОМУ ЧТО ЕСТЬ ПЕРЕВОДЧИК С ФЛАГАМИ
// Элемент, который перемещаем
/*const translateId = 'google_translate_element';
const mobileNavListClass = 'nav-list-mobile';

// Функция для обработки видимости и перемещения
function handleTranslateElement() {
  const originalElement = document.getElementById(translateId);
  if (!originalElement) {
    console.warn('Элемент #google_translate_element не найден');
    return;
  }

  const isMobile = window.innerWidth <= 991;

  // Находим мобильный список <ul class="nav-list-mobile">
  const mobileNavList = document.querySelector(`ul.${mobileNavListClass}`);
  if (!mobileNavList) {
    console.warn('Не найден <ul class="nav-list-mobile">');
    return;
  }

  // Проверяем, есть ли уже копия в мобильном меню
  let mobileCopy = document.querySelector(`#${translateId}-mobile`);

  if (isMobile) {
    // Мобильная версия
    originalElement.style.display = 'none';  // скрываем оригинал в десктоп-хедере

    // Если копии ещё нет — создаём и вставляем перед списком
    if (!mobileCopy) {
      // Клонируем элемент (true — с содержимым и событиями)
      mobileCopy = originalElement.cloneNode(true);
      mobileCopy.id = `${translateId}-mobile`;  // меняем id, чтобы не конфликтовать
      // Вставляем перед <ul class="nav-list-mobile">
      mobileNavList.insertAdjacentElement('beforebegin', mobileCopy);
      // Внутри if (isMobile) после insertAdjacentElement
      /*if (window.google && google.translate) {//НУЖНО ДОБАВИТЬ Если Google Translate не инициализируется в копии Иногда виджет не рендерится в клонированном элементе. В таком случае добавь переинициализацию. *Доавляю этот код и кнопка появляется в моб версии, работает, но при переходе в десктопную версию кнопки нет и обратно при возврате в моб версию кнопка пропадает. Когда этот код не добавляю кнока есть и в десктопной, и в моб версии, но в моб версии кнопка не активна, не открывается попап с выбором языков.*
        new google.translate.TranslateElement({
          pageLanguage: 'ru',
          includedLanguages: 'en,uk,fr,zh',
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, `${translateId}-mobile`);
      }*
    }

    mobileCopy.style.display = 'block';  // показываем копию
  } else {
    // Десктопная версия
    originalElement.style.display = 'block';  // возвращаем оригинал

    // Удаляем копию, если она была создана
    if (mobileCopy) {
      mobileCopy.remove();
    }
  }
}

// Запускаем при загрузке страницы
handleTranslateElement();
// Перепроверяем при изменении размера окна
window.addEventListener('resize', handleTranslateElement);
*/
//КНОПКА ГУГЛ ПЕРЕВОДЧИК///

//ПЕРЕВОДЧИК ТЕКСТА ФЛАГИ ВАРИАНТ 3 В ГРОК РАБОЧАЯ, НО НЕ СОХРАНЯЕТ <br>, <mark></mark> в тексте
// Все элементы, которые нужно переводить
  /*const translations = {
    // добавь ВСЕ важные фразы из твоего сайта
    ru: {
      aboutMe: "Обо Мне",
      manifest: "Манифест",
      manifestoSideBar: "Мой Манифест",
      hTreeSideBar: "Когда я начал глубже вникать в мир профессий, которые я освоил, я почувствовал, что важно создать манифест для моей работы",
      hFourSideBar: "Итак, здесь я обрисую <b><mark>мои убеждения, мою миссию и мой подход</mark></b> как мы будем сотрудничать по вашему проекту",
      contacts: "Контакты",
      skills: "Навыки",
      atoms: "Атомы Дизайна",
      connect: "Связаться со Мной",
      textWorld: "Весь Мир Мой Дом Родной",
      frontend: "*фронтенд-разработчик",
      designer: "*веб/ux/ui дизайнер",
      maker: "*видео мейкер",
      openVideo: "Открыть унц-унц",
      greeting: "Всем привет",
      title: "Я фронтенд-разработчик / веб / ux / ui дизайнер / видео мейкер",
      about: "* Я специализируюсь на создании пользовательского опыта и интерфейса для веб-приложений и веб-сайтов,а также реализацией их на уровне кода. Эта совместная роль UX/UI дизайнера и фронтенд-разработчика объединяют усилия для создания эффективного пользовательского опыта, от исследований и проектирования до реализации и кодирования.",
      magic: "Магия единого интерфейса",
      send: "Отправить",
      ask: "Спросить меня",
      price: "Цена",
      // ...
    },
    en: {
      aboutMe: "About Me",
      manifest: "The Manifesto",
      manifestoSideBar: "My Manifesto",
      hTreeSideBar: "As I began to delve deeper into the world of the professions I had mastered, I felt it was important to create a manifesto for my work",
      hFourSideBar: "So, here I will outline <b><mark>my beliefs, my mission, and my approach</mark></b> to how we will collaborate on your project",
      contacts: "Contacts",
      skills: "Skills",
      atoms: "Atoms of Design",
      connect: "Contact Me",
      textWorld: "The Whole World Is My Home",
      frontend: "*frontend developer",
      designer: "*web/ux/ui designer",
      maker: "*video maker",
      openVideo: "Open the musik",
      greeting: "Hello everyone",
      title: "I am a frontend developer / web / ux / ui designer / video maker",
      about: "* I specialize in creating user experiences and interfaces for web applications and websites, as well as implementing them at the code level. This joint role of a UX/UI designer and a frontend developer combine efforts to create an effective user experience, from research and design to implementation and coding",
      magic: "The magic of a single interface",
      send: "Send",
      ask: "Ask me",
      price: "Price",
    },
    uk: {
      aboutMe: "Про Мене",
      manifest: "Маніфест",
      contacts: "Контакт",
      greeting: "Всім привіт 👋",
      title: "Я фронтенд-розробник / веб / ux / ui дизайнер / відео мейкер",
      // ...
    },
    fr: {
      greeting: "Bonjour à tous 👋",
      // ...
    },
    zh: {
      greeting: "大家好 👋",
      // ...
    }
  };

  function setLanguage(lang) {
    // Сохраняем выбор
    localStorage.setItem('lang', lang);

    // Меняем активный флаг
    document.querySelectorAll('.lang-link').forEach(el => {
      el.classList.toggle('active', el.dataset.lang === lang);
    });

    // Меняем язык страницы
    document.documentElement.lang = lang;

    // Обновляем все тексты
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  // При загрузке страницы
  document.addEventListener('DOMContentLoaded', () => {
    let savedLang = localStorage.getItem('lang') || 'ru';
    setLanguage(savedLang);
  });

  // Обработчик кликов по флагам
  document.querySelectorAll('.lang-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const lang = link.dataset.lang;
      setLanguage(lang);
    });
  });*/
//ПЕРЕВОДЧИК ТЕКСТА ФЛАГИ ВАРИАНТ 3 В ГРОК/////
//ПЕРЕВОДЧИК ТЕКСТА ФЛАГИ C CLAUD CODE. ЭТОТ КОД СОХРАНЯЕТ ВСЕ <br> В ТЕКСТЕ В ШТМЛ ФАЙЛE И ДАЖЕ <b></b> и <mark></mark> ОСТАВИЛ
const translations = {
  // добавь ВСЕ важные фразы из твоего сайта
  ru: {
    aboutMe: "Обо Мне",
    manifest: "Манифест",
    btnCloseSidebar: "Закрыть &times;",
    manifestoSideBar: "Мой Манифест",
    hTreeSideBar: "Когда я начал глубже вникать в мир профессий, которые я освоил, я почувствовал, что важно создать манифест для моей работы",
    hFourSideBar: "Итак, здесь я обрисую <b><mark>мои убеждения, мою миссию и мой подход</mark></b> как мы будем сотрудничать по вашему проекту",
    hFiveSideBar: "Вдохновлять",
    pSideBar: "Я не соглашусь пока мы не обнаружим самое вдохновляющее решение вместе",
    hFive2SideBar: "Создавать",
    p2SideBar: "Я возьму даже самые безумные идеи, серьезно. Если мы сможем мыслить масштабно и смело, ограничений не будет. тому, что мы можем создать!",
    hFive3SideBar: "Поиск",
    p3SideBar: "Я буду искать синергию, которая имеет потенциал трансформироваться в изменяющие жизнь, прекрасные творения и союзы",
    hFive4SideBar: "Анализировать",
    p4SideBar: "Я подробно проанализирую все  элементы вашего проекта и постараюсь создать между ними  уникальные отношения",
    hFive5SideBar: "Фокус",
    p5SideBar: "Я останусь преданным своему делу — качеству и детализации",
    hFive6SideBar: "Празднуйте",
    p6SideBar: "Я буду стремиться к красоте и совершенству, отдавая должное функциональности",
    hFive7SideBar: "Полагать",
    p7SideBar: "В мире, который постоянно меняется, я буду отстаивать свою веру в непреходящую силу повествования",
    hFive8SideBar: "Делай Добро",
    p8SideBar: "Я буду превозносить силу и преимущества дизайна не только как ремесла, но и как искусства ведения хорошего, этичного бизнеса",
    txtBtnSideBar: "Спросить Меня",
    contacts: "Контакты",
    skills: "Навыки",
    atoms: "Атомы Дизайна",
    connect: "Связаться со Мной",
    textWorld: "Весь Мир Мой Дом Родной",
    frontend: "*фронтенд-разработчик",
    designer: "*веб/ux/ui дизайнер",
    maker: "*видео мейкер",
    openVideo: "Открыть унц-унц",
    magic: "Магия единого интерфейса",
    greeting: "Всем привет",
    //title: "Я фронтенд-разработчик / веб / ux / ui дизайнер / видео мейкер",
    about: "* Я специализируюсь на создании пользовательского опыта и интерфейса для веб-приложений и веб-сайтов,а также реализацией их на уровне кода. Эта совместная роль UX/UI дизайнера и фронтенд-разработчика объединяют усилия для создания эффективного пользовательского опыта, от исследований и проектирования до реализации и кодирования.",
    pgSlider1: "* Улучшение качества и добавление видеоматериалов <br>* Полное понимание пользовательского опыта <br>* Эффективная визуальная коммуникаци <br>* Синергия дизайна и разработки <br>* Лучшее общение",
    skiilsSlider1: "Навыки",
    txtBtnSlider1: "Спросить Меня",
    txtBtn2Slider1: "Навыки",
    send: "Отправить",
    ask: "Спросить меня",
    price: "Цена",
    // ...
  },
  en: {
    aboutMe: "About Me",
    manifest: "The Manifesto",
    btnCloseSidebar: "Close &times;",
    manifestoSideBar: "My Manifesto",
    hTreeSideBar: "As I began to delve deeper into the world of the professions I had mastered, I felt it was important to create a manifesto for my work",
    hFourSideBar: "So, here I will outline <b><mark>my beliefs, my mission, and my approach</mark></b> to how we will collaborate on your project",
    hFiveSideBar: "Inspire",
    pSideBar: "I won't agree until we discover the most inspiring solution together",
    hFive2SideBar: "Create",
    p2SideBar: "I'll take even the craziest ideas, seriously. If we can think big and boldly, there will be no limits. what we can create!",
    hFive3SideBar: "Search",
    p3SideBar: "I will look for a synergy that has the potential to transform into life-changing, wonderful creations and alliances",
    hFive4SideBar: "Analyse",
    p4SideBar: "I will analyze all the elements of your project in detail and try to create a unique relationship between them",
    hFive5SideBar: "Stunt",
    p5SideBar: "I will continue to be dedicated to my work, quality, and attention to detail",
    hFive6SideBar: "Celebrate",
    p6SideBar: "I will strive for beauty and perfection, paying tribute to functionality",
    hFive7SideBar: "Think",
    p7SideBar: "In a world that is constantly changing, I will defend my faith in the enduring power of storytelling",
    hFive8SideBar: "Do Good",
    p8SideBar: "I will extol the power and benefits of design not only as a craft, but also as the art of running a good, ethical business",
    txtBtnSideBar: "Ask Me",
    contacts: "Contacts",
    skills: "Skills",
    atoms: "Atoms of Design",
    connect: "Contact Me",
    textWorld: "The Whole World Is My Home",
    frontend: "*frontend developer",
    designer: "*web/ux/ui designer",
    maker: "*video maker",
    openVideo: "Open the musik",
    magic: "Magic of a single interface",//ПИСАТЬ БЕЗ The magic ЭТО НОРМАЛЬНАЯ ПРАКТИКА В IT
    greeting: "Hello everyone",
    //title: "I am a frontend developer / web / ux / ui designer / video maker",
    about: "* I specialize in creating user experiences and interfaces for web applications and websites, as well as implementing them at the code level. This joint role of a UX/UI designer and a frontend developer combine efforts to create an effective user experience, from research and design to implementation and coding",
    pgSlider1: "* Improve the quality and add video materials<br>* Full understanding of the user experience <br>* Effective visual communication <br>* Synergy of design and development<br>* Better communication",
    skiilsSlider1: "Skills",
    txtBtnSlider1: "Ask Me",
    txtBtn2Slider1: "Skills",
    send: "Send",
    ask: "Ask me",
    price: "Price",
  },
  uk: {
    aboutMe: "Про Мене",
    manifest: "Маніфест",
    contacts: "Контакт",
    greeting: "Всім привіт 👋",
    //title: "Я фронтенд-розробник / веб / ux / ui дизайнер / відео мейкер",
    // ...
  },
  fr: {
    greeting: "Bonjour à tous 👋",
    // ...
  },
  zh: {
    greeting: "大家好 👋",
    // ...
  }
};

function setLanguage(lang) {
  // Сохраняем выбор
  localStorage.setItem('lang', lang);

  // Меняем активный флаг
  document.querySelectorAll('.lang-link').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === lang);
  });

  // Меняем язык страницы
  document.documentElement.lang = lang;

  // Обновляем все тексты
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key]; // Changed from textContent to preserve HTML tags
    }
  });
}

// При загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  let savedLang = localStorage.getItem('lang') || 'ru';
  setLanguage(savedLang);
});

// Обработчик кликов по флагам
document.querySelectorAll('.lang-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const lang = link.dataset.lang;
    setLanguage(lang);
  });
});
//ПЕРЕВОДЧИК ТЕКСТА ФЛАГИ C CLAUD CODE/////

//МАСКА ФОТО В САЙДБАРЕ GROK 3
gsap.registerPlugin(MorphSVGPlugin);

document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
    defaults: { ease: "power1.inOut" }
  });

  tl.to("#path", {
    duration: 7,
    morphSVG: "#morphShape",
    shapeIndex: "auto" // можно добавить, если морф выглядит странно. С этой штукой волна плавнее
  });
});
//МАСКА ФОТО В САЙДБАРЕ///