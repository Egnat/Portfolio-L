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
//ПЕРЕВОДЧИК ТЕКСТА ФЛАГИ C CLAUDE CODE. ЭТОТ КОД СОХРАНЯЕТ ВСЕ <br> В ТЕКСТЕ В ШТМЛ ФАЙЛE И ДАЖЕ <b></b> и <mark></mark> ОСТАВИЛ
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
    textWorld: "Весь Мир - Мой Дом Родной",
    frontend: "*фронтенд-разработчик",
    designer: "*веб/ux/ui дизайнер",
    maker: "*видео мейкер",
    openVideo: "Открыть унц-унц",
    magic: "Магия единого интерфейса",
    greeting: "Всем привет",
    //title: "Я фронтенд-разработчик / веб / ux / ui дизайнер / видео мейкер",
    about: "* Я специализируюсь на создании пользовательского опыта и интерфейса для веб-приложений и веб-сайтов,а также реализацией их на уровне кода. Эта совместная роль UX/UI дизайнера и фронтенд-разработчика объединяют усилия для создания эффективного пользовательского опыта, от исследований и проектирования до реализации и кодирования.",
    pgSlider1: "* Улучшение качества и добавление видеоматериалов <br>* Полное понимание пользовательского опыта <br>* Эффективная визуальная коммуникаци <br>* Синергия дизайна и разработки <br>* Лучшее общение",
    skiilsSlider1: "Навыки:",
    txtBtnSlider1: "Спросить Меня",
    txtBtn2Slider1: "Навыки",
    send: "Отправить",
    ask: "Спросить меня",
    price: "Цена",
    pgDesign: "* Как дизайнер, я создаю привлекательный и функциональный веб-дизайн. Я проектирую пользовательский интерфейс (UI) и пользовательский опыт (UX) веб-платформ, уделяя особое внимание эффективной навигации, визуальному дизайну и разработке макета. Я создаю удобный и визуально привлекательный дизайн, отвечающий потребностям и предпочтениям целевой аудитории. Я также гарантирую согласованность и совместимость дизайна на различных устройствах и платформах.",
    i18nPgGretting2: "* Улучшение качества и добавление видеоматериалов <br>* Полное понимание пользовательского опыта <br>* Эффективная визуальная коммуникация <br>* Синергия дизайна и разработки <br>* Лучшее общение",
    pgFrontEnd: "* Как разработчик, я работаю над созданием клиентских веб-приложений и веб-сайтов, созданием интерактивных пользовательских интерфейсов путем реализации дизайна и визуальной компановки веб-страниц. Я использую HTML, CSS и JavaScript для создания динамических и адаптивных веб-интерфейсов. Я также обеспечиваю оптимизацию производительности и совместимость с различными браузерами и устройствами. Трансформирую концепции дизайна в функциональные веб-сайты.",
    i18nPgGretting3: "* Улучшение качества и добавление видеоматериалов <br>* Полное понимание пользовательского опыта <br>* Эффективная визуальная коммуникация <br>* Синергия дизайна и разработки <br>* Лучшее общение",
    videoMaiker: "* Как видео мейкер, в мои обязанности входит создание и разработка идей и концепций для видеопроектов, редактирование и монтаж отснятого материала с использованием программного обеспечения для видеомонтажа,обработка и добавление звуковых эффектов,музыки и диалогов к видео, регулировка цветового баланса и улучшение визуального качества видеоматериала, добавление графических элементов и анимации в видеопроекты, подготовка видеоматериалов для различных платформ, включая оптимизацию для веб-сайтов и социальных сетей, обеспечение высокого качества конечного продукта и соответствие техническим требованиям, управление процессом создания видео, включая взаимодействие с клиентами, постоянное изучение новых технологий, программного обеспечения и тенденций в видеопроизводстве. понимание потребностей клиентов и адаптация видеопроектов под их требования, публикация видео на различных платформах и работа над его продвижением.",
    i18nPgGretting4: "* Улучшение качества и добавление видеоматериалов <br>* Полное понимание пользовательского опыта <br>* Эффективная визуальная коммуникация <br>* Синергия дизайна и разработки <br>* Лучшее общение",
    sectiontitle1WhyMe: "Почему я",
    year2: "2 Y +",
    pgExperience: "опыта",
    types30: "30 T +",
    pgPjs: "проектов",
    people100: "100 P +",
    pgTrust: "доверяют",
    pgIdeas: "идеи",
    section3Get: "Что Вы получите",
    h4WebUxUi: "ВЕБ / UX / UI",
    pgDesign1: "* Исследование и целевой аудитории",
    pgDesign2: "* Создание вайрфреймов и интерактивных прототипов",
    pgDesign3: "* Разработка привлекательного и интуитивно понятного пользовательского интерфейса",
    pgDesign4: "* Оптимизированный пользовательский интерфейс с упрощенными процессами навигации",
    pgDesign5: "* Адаптивный дизайн на различных устройствах",
    pgDesign6: "* Создание дизайн-системы и стандартизированных компонентов",
    pgDesign7: "* Разработка визуальных макетов и интерактивных элементов",
    pgDesign8: "* Подготовка документации и рекомендаций для разработчиков",
    pgDesign9: "* Постоянное улучшение продукта на основе отзывов",
    pgDesign10: "* Создание уникального дизайна, отражающего бренд и привлекающего целевую аудиторию",
    frPro: "FR-PRO",
    pgFrPro1: "* Кроссбраузерность и адаптивный макет для различных устройств и браузеров",
    pgFrPro2: "* Чистый семантический HTML для улучшения SEO и доступности",
    pgFrPro3: "* Стилизация с использованием CSS и препроцессоров",
    pgFrPro4: "* Базовая интерактивность с помощью JavaScript",
    pgFrPro5: "* Оптимизация производительности (минимизация, объединение файлов)",
    pgFrPro6: "* Точное выполнение макетов дизайна",
    pgFrPro7: "* Использование систем контроля версий (Git)",
    pgFrPro8: "* Внедрение методов обеспечения доступности",
    pgFrPro9: "* Подготовка кода для интеграции с CMS",
    pgFrPro10: "* Тестирование, отладка и документирование",
    pgvideoEditing:"Монтаж видео",
    pgVideo1: "* Разработка оригинальных идей и концепций, создание сценариев и раскодировок",
    pgVideo2: "* Монтаж и редактирование видео, добавление переходов и эффектов",
    pgVideo3: "* Цветокоррекция для улучшения визуального качества",
    pgVideo4: "* Звуковое оформление, включая добавление и обработку звуков",
    pgVideo5: "* Создание графики и анимации, внедрение интерактивных элементов",
    pgVideo6: "* Подготовка видео к публикации, экспорт в нужных форматах",
    pgVideo7: "* Соответствие техническим требованиям и оптимизация для различных платформ",
    pgVideo8: "* Консультации по стратегии продвижения и поддержка при публикации",
    pgVideo9: "* Управление проектами и взаимодействие с клиентами",
    pgVideo10: "* Постоянное совершенствование и анализ эффективности видео",
    section3Title: "Визуальное путешествие",
    textBtnCircle: "Хочу такой Хочу такой",
    articlepjsBe: "Посмотреть проект на Behance",
    articlepjsGitHub: "Посмотреть проект на GitHub",
    articlepjsYoutube: "Посмотреть проект на Youtube",
    chatHello: "Здравствуйте! <br> <br> Как я могу Вам помочь?",
    chatInput: "Введите ваше сообщение...",
    chatBtnSend: "Отправить",
    chatBtnOrderPj: "Заказать PJ",
    section4Title: "цена успеха",
    titleCubeDesign: "веб / ux / ui дизайн",
    typeBase: "Базовый",
    lending: "Лендинг",
    price14k: "14000 ₽",
    pgAnalysis: "Анализ и исследования конкурентов",
    pgWirefreming: "Вайрфрейминг",
    pgCreate: "Создание руководства по стилю и цвету",
    pgDesignLayout: "Дизайн-макет (до 3 ревизий)",
    pgResponsive: "Адаптивность (ПК / планшет / мобильное устройство)",
    typePlus:"Плюс",
    before5Pages: "До 5 страниц",
    price42k: "42000 ₽",
    pgCjm: "CJM (Карта пути пользователя)",
    pgCreateColor: "Создание руководства по стилю и цвету",
    pgAnimation: "Кликабельный прототип и анимация",
    typeProfessional: "профессиональный",
    before10Pages: "До 10 страниц",
    price70k: "70000 ₽",
    pgDesignLayout5: "Дизайн-макет (до 5 ревизий)",
    typeMobileApp: "мобильное приложение",
    spanFrom: "от",
    priceFrom70k: "70000 ₽",
    titleCubeCode: "вёрстка сайта",
    typeLayuotLayout: "по макету",
    typeSimpleLanding: "Простой лендинг",
    priceFrom7k: "7000 ₽",
    pgSimpleBlocks: "Простые блоки",
    pgComplexOnesBlocks: "Сложные блоки",
    pgBlocksWithAnAddendumJS: "Блоки с дополнением JS",
    pgWithAnAddendumForms: "Добавление формы",
    pgWithAnAddendumSlider: "Добавление слайдера фотографий",
    pgwResponsiveness: "Отзывчивость",
    pgwBrowserCompatibility: "Кроссбраузерная совместимость",
    typeDifficultLanding:"Сложный лендинг",
    priceFrom105Kk: "10500 ₽",
    typeMultiPageSite: "Многостраничный сайт",
    typeECom: "Интернет магазин",
    priceFrom21Kk: "21000 ₽",
    titleVideo: "монтаж видео",
    youtube: "for youtube",
    typeMp4: "Видеоклип",
    priceYoutube2K: "2100 ₽ / час",
    pgwChoiceMp4: "Выбор лучшего видео",
    pgwChoiceMp3: "Подборка идеальной музыки",
    pgwWorkWithEffects: "Работа с современными эффектами и переходами",
    pgWrittingTheScript: "Написание оригинального сценария",
    pgCorrectiontColor: "Коррекция цвета",
    pgButiful: "Красивое визуальное представление",
    priceYoutube2K1Video: "2100 ₽ за одно видео",
    insta: "видео instagram",
    priceInsta: "700 ₽ за одно видео",
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
    skiilsSlider1: "Skills:",
    txtBtnSlider1: "Ask Me",
    txtBtn2Slider1: "Skills",
    send: "Send",
    ask: "Ask me",
    price: "Price",
    pgDesign: "* As a designer, I create an attractive and functional web design. I design the user interface (UI) and user experience (UX) of web platforms, focusing on effective navigation, visual design, and layout development. I create a user-friendly and visually appealing design that meets the needs and preferences of the target audience. I also guarantee consistency and compatibility of the design across different devices and platforms..",
    i18nPgGretting2: "* Improving the quality and adding video materials <br>* Complete understanding of the user experience <br>* Effective visual communication <br>* Synergy of design and development <br>* Better communication",
    pgFrontEnd: "* As a developer, I work on creating client-side web applications and websites, creating interactive user interfaces by implementing the design and visual layout of web pages. I use HTML, CSS, and JavaScript to create dynamic and responsive web interfaces. I also ensure performance optimization and compatibility with various browsers and devices. I transform design concepts into functional websites.",
    i18nPgGretting3: "* Improving the quality and adding video materials <br>* Complete understanding of the user experience <br>* Effective visual communication <br>* Synergy of design and development <br>* Better communication",
    videoMaiker: "* As a video maker, my responsibilities include creating and developing ideas and concepts for video projects, editing and editing footage using video editing software, processing and adding sound effects, music and dialogues to videos, adjusting the color balance and improving the visual quality of video, adding graphic elements and animations to video projects, and preparing video materials. for various platforms, including optimization for websites and social networks, ensuring the high quality of the final product and meeting technical requirements, managing the video creation process, including customer interaction, and constantly exploring new technologies, software, and trends in video production. understanding the needs of clients and adapting video projects to their requirements, publishing videos on various platforms and working on its promotion.",
    i18nPgGretting4: "* Improving the quality and adding video materials <br>* Complete understanding of the user experience <br>* Effective visual communication <br>* Synergy of design and development <br>* Better communication",
    sectiontitle1WhyMe: "Why me",
    year2: "2 Y +",
    pgExperience: "experience",
    types30: "30 T +",
    pgPjs: "projects",
    people100: "100 P +",
    pgTrust: "trust",
    pgIdeas: "ideas",
    section3Get: "What you will get",
    h4WebUxUi: "WEB / UX / UI",
    pgDesign1: "* Research and target audience",
    pgDesign2: "* Creating wireframes and interactive prototypes",
    pgDesign3: "* Developing an attractive and intuitive user interface",
    pgDesign4: "* Optimized user interface with simplified navigation processes",
    pgDesign5: "* Responsive design across devices",
    pgDesign6: "* Creation of a design system and standardized components",
    pgDesign7: "* Development of visual layouts and interactive elements",
    pgDesign8: "* Preparation of documentation and recommendations for developers",
    pgDesign9: "* Continuous product improvement based on feedback",
    pgDesign10: "* Creating a unique design that reflects the brand and attracts the target audience",
    frPro: "FR-PRO",
    pgFrPro1: "* Cross-browser and adaptive layout for different devices and browsers",
    pgFrPro2: "* Clean semantic HTML to improve SEO and accessibility",
    pgFrPro3: "* Styling using CSS and preprocessors",
    pgFrPro4: "* Basic interactivity using JavaScript",
    pgFrPro5: "* Performance optimization (minimizing, merging files)",
    pgFrPro6: "* Accurate execution of design layouts",
    pgFrPro7: "* Use of version control systems (Git)",
    pgFrPro8: "* Implementation of accessibility methods",
    pgFrPro9: "* Code preparation for CMS integration",
    pgFrPro10: "* Testing, debugging and documentation",
    pgvideoEditing:"Video editing",
    pgVideo1: "* Development of original ideas and concepts, creation of scenarios and decoding",
    pgVideo2: "* Video editing and editing, adding transitions and effects",
    pgVideo3: "* Color correction to improve visual quality",
    pgVideo4: "* Sound design, including sound addition and processing",
    pgVideo5: "* Creation of graphics and animations, implementation of interactive elements",
    pgVideo6: "* Preparing videos for publication, exporting in the required formats",
    pgVideo7: "* Compliance with technical requirements and optimization for various platforms",
    pgVideo8: "* Advice on promotion strategy and support during publication",
    pgVideo9: "* Project management and customer interaction",
    pgVideo10: "* Continuous improvement and analysis of video effectiveness",
    section3Title: "Visual Journey",
    textBtnCircle: "I want this   I want this",
    articlepjsBe: "View the project on Behance",
    articlepjsGitHub: "View the project on GitHub",
    articlepjsYoutube: "View the project on Youtube",
    chatHello: "Hello! <br> <br> How can I help you?",
    chatInput: "Enter your message...",
    chatBtnSend: "Send",
    chatBtnOrderPj: "Order PJ",
    section4Title: "the price of success",
    titleCubeDesign: "Web /UX /UI design",
    typeBase: "Basic",
    lending: "Landing",
    price14k: "200 ＄",
    pgAnalysis: "Competitor Analysis and Research",
    pgWirefreming: "Wireframing",
    pgCreate: "Creating a style and color guide",
    pgDesignLayout: "Design layout (up to 3 revisions)",
    pgResponsive: "Adaptability (PC/Tablet/mobile device)",
    typePlus: "Plus",
    before5Pages: "Up to 5 pages",
    price42k: "590 ＄",
    pgCjm: "CJM (User Path Map)",
    pgCreateColor: "Creating a style and color guide",
    pgAnimation: "A clickable prototype and animation",
    typeProfessional: "professional",
    before10Pages: "Up to 10 pages",
    price70k: "980 ＄",
    pgDesignLayout5: "Design layout (up to 5 revisions)",
    typeMobileApp: "mobile app",
    spanFrom: "from",
    priceFrom70k: "980 ＄",
    titleCubeCode: "website layout",
    typeLayuotLayout: "by to the layout",
    typeSimpleLanding: "Simple landing page",
    priceFrom7k: "100 ＄",
    pgSimpleBlocks: "Siple blocks",
    pgComplexOnesBlocks: "Complex ones blocks",
    pgBlocksWithAnAddendumJS: "JS-augmented blocks",
    pgWithAnAddendumForms: "Adding a form",
    pgWithAnAddendumSlider: "Adding a photo slider",
    pgwResponsiveness: "Responsiveness",
    pgwBrowserCompatibility: "Browser compatibility",
    typeDifficultLanding:"Difficult lending page",
    priceFrom105Kk: "150 ＄",
    typeMultiPageSite: "Multi-page website",
    typeECom: "Online store",
    priceFrom21Kk: "300 ＄",
    titleVideo: "video editing",
    youtube: "for youtube",
    typeMp4: "Video Clip",
    priceYoutube2K: "30 ＄ / hour",
    pgwChoiceMp4: "Choosing the best video",
    pgwChoiceMp3: "A selection of perfect music",
    pgwWorkWithEffects: "Working with modern effects and transitions",
    pgWrittingTheScript: "Writing an original script",
    pgCorrectiontColor: "Color correction",
    pgButiful: "Beautiful visual representation",
    priceYoutube2K1Video: "2100 ＄ for one video",
    insta: "Instagram videos",
    priceInsta: "700 ＄ for one video",
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