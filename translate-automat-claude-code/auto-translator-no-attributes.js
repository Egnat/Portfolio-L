/**
 * АВТОМАТИЧЕСКИЙ ПЕРЕВОДЧИК БЕЗ data-i18n
 * Переводит весь текст на странице автоматически
 * Не требует добавления атрибутов к элементам
 */

// ==================== СЛОВАРЬ ПЕРЕВОДОВ ====================
const translationDictionary = {
  // Русский -> Английский
  ru_to_en: {
    // Заголовки и основной текст
    "Всем привет": "Hello everyone",
    "Обо Мне": "About Me",
    "Портфолио": "Portfolio",
    "Манифест": "The Manifesto",
    "Мой Манифест": "My Manifesto",
    "Контакты": "Contacts",
    "Навыки": "Skills",
    "Атомы Дизайна": "Atoms of Design",
    "Связаться со Мной": "Contact Me",
    "Весь Мир Мой Дом Родной": "The Whole World Is My Home",
    
    // Профессии
    "фронтенд-разработчик": "frontend developer",
    "веб/ux/ui дизайнер": "web/ux/ui designer",
    "видео мейкер": "video maker",
    
    // Действия
    "Отправить": "Send",
    "Спросить меня": "Ask me",
    "Открыть унц-унц": "Open the musik",
    "Цена": "Price",
    "Язык:": "Language:",
    
    // Длинные фразы
    "Я фронтенд-разработчик / веб / ux / ui дизайнер / видео мейкер": "I am a frontend developer / web / ux / ui designer / video maker",
    
    "Я специализируюсь на создании пользовательского опыта и интерфейса для веб-приложений и веб-сайтов, а также реализацией их на уровне кода. Эта совместная роль UX/UI дизайнера и фронтенд-разработчика объединяют усилия для создания эффективного пользовательского опыта, от исследований и проектирования до реализации и кодирования.": "I specialize in creating user experiences and interfaces for web applications and websites, as well as implementing them at the code level. This joint role of a UX/UI designer and a frontend developer combine efforts to create an effective user experience, from research and design to implementation and coding",
    
    "Магия единого интерфейса": "The magic of a single interface",
    
    "Когда я начал глубже вникать в мир профессий, которые я освоил, я почувствовал, что важно создать манифест для моей работы": "As I began to delve deeper into the world of the professions I had mastered, I felt it was important to create a manifesto for my work",
    
    "Итак, здесь я обрисую": "So, here I will outline",
    "мои убеждения, мою миссию и мой подход": "my beliefs, my mission, and my approach",
    "как мы будем сотрудничать по вашему проекту": "to how we will collaborate on your project",
    
    // Добавляйте свои переводы здесь
  },
  
  // Английский -> Русский (автоматически генерируется)
  en_to_ru: {}
};

// Автоматически создаем обратный словарь
Object.keys(translationDictionary.ru_to_en).forEach(key => {
  translationDictionary.en_to_ru[translationDictionary.ru_to_en[key]] = key;
});

// ==================== НАСТРОЙКИ ====================
const config = {
  // Элементы, которые НЕ нужно переводить
  excludeSelectors: [
    'script',
    'style',
    'code',
    'pre',
    'iframe',
    'noscript',
    '.no-translate',  // Добавьте класс .no-translate к элементам, которые не нужно переводить
    '[translate="no"]'
  ],
  
  // Атрибуты, которые нужно переводить
  translateAttributes: [
    'placeholder',
    'title',
    'alt',
    'aria-label'
  ],
  
  // Текущий язык (по умолчанию русский)
  currentLang: 'ru'
};

// ==================== ОСНОВНЫЕ ФУНКЦИИ ====================

/**
 * Сохраняет оригинальный текст элемента
 */
function saveOriginalText(element) {
  if (!element.hasAttribute('data-original-text')) {
    element.setAttribute('data-original-text', element.textContent);
  }
  
  // Сохраняем атрибуты
  config.translateAttributes.forEach(attr => {
    if (element.hasAttribute(attr) && !element.hasAttribute(`data-original-${attr}`)) {
      element.setAttribute(`data-original-${attr}`, element.getAttribute(attr));
    }
  });
}

/**
 * Проверяет, нужно ли исключить элемент из перевода
 */
function shouldExclude(element) {
  return config.excludeSelectors.some(selector => {
    try {
      return element.matches(selector) || element.closest(selector);
    } catch (e) {
      return false;
    }
  });
}

/**
 * Получает все текстовые узлы элемента
 */
function getTextNodes(element) {
  const textNodes = [];
  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function(node) {
        // Пропускаем пустые узлы и узлы внутри исключенных элементов
        if (!node.textContent.trim() || shouldExclude(node.parentElement)) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );
  
  let node;
  while (node = walker.nextNode()) {
    textNodes.push(node);
  }
  
  return textNodes;
}

/**
 * Переводит текст используя словарь
 */
function translateText(text, fromLang, toLang) {
  const dictionary = fromLang === 'ru' ? translationDictionary.ru_to_en : translationDictionary.en_to_ru;
  
  // Сначала ищем точное совпадение
  if (dictionary[text]) {
    return dictionary[text];
  }
  
  // Затем ищем совпадение без учета регистра и пробелов
  const normalizedText = text.trim();
  const foundKey = Object.keys(dictionary).find(key => 
    key.toLowerCase() === normalizedText.toLowerCase()
  );
  
  if (foundKey) {
    return dictionary[foundKey];
  }
  
  // Если не нашли точного совпадения, пытаемся перевести по частям
  let translated = text;
  Object.keys(dictionary).forEach(key => {
    const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    translated = translated.replace(regex, dictionary[key]);
  });
  
  return translated;
}

/**
 * Переводит атрибуты элемента
 */
function translateAttributes(element, fromLang, toLang) {
  config.translateAttributes.forEach(attr => {
    if (element.hasAttribute(attr)) {
      const originalValue = element.getAttribute(`data-original-${attr}`) || element.getAttribute(attr);
      const translatedValue = translateText(originalValue, fromLang, toLang);
      element.setAttribute(attr, translatedValue);
    }
  });
}

/**
 * Переводит всю страницу
 */
function translatePage(toLang) {
  const fromLang = config.currentLang;
  
  // Получаем все элементы body
  const elements = document.body.querySelectorAll('*');
  
  elements.forEach(element => {
    // Пропускаем исключенные элементы
    if (shouldExclude(element)) {
      return;
    }
    
    // Сохраняем оригинальный текст при первом переводе
    if (fromLang === 'ru' && toLang === 'en') {
      saveOriginalText(element);
    }
    
    // Переводим атрибуты
    translateAttributes(element, fromLang, toLang);
  });
  
  // Получаем все текстовые узлы
  const textNodes = getTextNodes(document.body);
  
  textNodes.forEach(node => {
    const originalText = node.textContent;
    const translatedText = translateText(originalText, fromLang, toLang);
    
    if (translatedText !== originalText) {
      node.textContent = translatedText;
    }
  });
  
  // Обновляем текущий язык
  config.currentLang = toLang;
  
  // Сохраняем в localStorage
  localStorage.setItem('lang', toLang);
  
  // Обновляем атрибут lang в HTML
  document.documentElement.lang = toLang;
  
  // Обновляем состояние переключателя
  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.checked = (toLang === 'en');
  }
  
  // Отправляем событие
  document.dispatchEvent(new CustomEvent('languageChanged', { 
    detail: { lang: toLang, fromLang: fromLang } 
  }));
  
  console.log(`Страница переведена с ${fromLang} на ${toLang}`);
}

/**
 * Восстанавливает оригинальный текст
 */
function restoreOriginalText() {
  const elements = document.querySelectorAll('[data-original-text]');
  
  elements.forEach(element => {
    element.textContent = element.getAttribute('data-original-text');
    
    // Восстанавливаем атрибуты
    config.translateAttributes.forEach(attr => {
      const originalAttr = `data-original-${attr}`;
      if (element.hasAttribute(originalAttr)) {
        element.setAttribute(attr, element.getAttribute(originalAttr));
      }
    });
  });
}

/**
 * Переключает язык
 */
function toggleLanguage() {
  const newLang = config.currentLang === 'ru' ? 'en' : 'ru';
  
  if (newLang === 'ru') {
    // Возвращаемся к русскому - восстанавливаем оригинал
    restoreOriginalText();
    config.currentLang = 'ru';
    localStorage.setItem('lang', 'ru');
    document.documentElement.lang = 'ru';
    
    const toggle = document.getElementById('langToggle');
    if (toggle) toggle.checked = false;
  } else {
    // Переводим на английский
    translatePage('en');
  }
}

/**
 * Устанавливает конкретный язык
 */
function setLanguage(lang) {
  if (lang === config.currentLang) {
    return; // Уже на этом языке
  }
  
  if (lang === 'ru') {
    restoreOriginalText();
    config.currentLang = 'ru';
  } else if (lang === 'en') {
    translatePage('en');
  }
  
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  
  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.checked = (lang === 'en');
  }
}

/**
 * Получает текущий язык
 */
function getCurrentLanguage() {
  return config.currentLang;
}

/**
 * Добавляет новые переводы в словарь
 */
function addTranslations(translations) {
  Object.assign(translationDictionary.ru_to_en, translations);
  
  // Обновляем обратный словарь
  Object.keys(translations).forEach(key => {
    translationDictionary.en_to_ru[translations[key]] = key;
  });
}

// ==================== ИНИЦИАЛИЗАЦИЯ ====================
document.addEventListener('DOMContentLoaded', () => {
  // Получаем сохраненный язык
  const savedLang = localStorage.getItem('lang') || 'ru';
  config.currentLang = 'ru'; // Всегда начинаем с русского
  
  // Если нужен английский, переводим
  if (savedLang === 'en') {
    setTimeout(() => translatePage('en'), 100);
  }
  
  // Добавляем обработчик на переключатель
  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.checked = (savedLang === 'en');
    toggle.addEventListener('change', (e) => {
      const newLang = e.target.checked ? 'en' : 'ru';
      setLanguage(newLang);
    });
  }
  
  console.log('Автопереводчик инициализирован. Текущий язык:', config.currentLang);
});

// ==================== ЭКСПОРТ ====================
window.translatePage = translatePage;
window.setLanguage = setLanguage;
window.getCurrentLanguage = getCurrentLanguage;
window.toggleLanguage = toggleLanguage;
window.addTranslations = addTranslations;
window.translationConfig = config;
