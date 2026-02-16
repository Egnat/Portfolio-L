/**
 * ЗАЩИТА ИЗОБРАЖЕНИЙ ДЛЯ PORTFOLIO SITE
 * Специально адаптирован для https://egnat.github.io/Portfolio-L/
 * 
 * ВАЖНО: Этот скрипт НЕ изменяет существующие стили и классы!
 * Он добавляет только защиту без вмешательства в дизайн.
 */

(function() {
  'use strict';

  // ==================== КОНФИГУРАЦИЯ ====================
  const config = {
    disableRightClick: true,
    disableDragDrop: true,
    disableKeyboardShortcuts: true,
    showWarningMessage: true,
    
    warningMessage: {
      ru: '⚠️ Копирование изображений запрещено!',
      en: '⚠️ Image copying is disabled!'
    },
    
    language: 'ru'
  };

  // ==================== УТИЛИТЫ ====================
  
  function showWarning() {
    if (!config.showWarningMessage) return;
    
    const message = config.warningMessage[config.language];
    let warning = document.getElementById('image-protection-warning');
    
    if (!warning) {
      warning = document.createElement('div');
      warning.id = 'image-protection-warning';
      warning.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ff5252;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 999999;
        font-family: Arial, sans-serif;
        font-size: 14px;
        font-weight: bold;
        opacity: 0;
        transform: translateX(400px);
        transition: all 0.3s ease;
      `;
      warning.textContent = message;
      document.body.appendChild(warning);
    }
    
    setTimeout(() => {
      warning.style.opacity = '1';
      warning.style.transform = 'translateX(0)';
    }, 10);
    
    setTimeout(() => {
      warning.style.opacity = '0';
      warning.style.transform = 'translateX(400px)';
    }, 2500);
  }

  // ==================== МЕТОДЫ ЗАЩИТЫ ====================

  /**
   * Отключить правый клик на изображениях
   */
  function disableRightClick() {
    document.addEventListener('contextmenu', function(e) {
      if (e.target.tagName === 'IMG' || e.target.closest('img')) {
        e.preventDefault();
        showWarning();
        return false;
      }
    }, false);
  }

  /**
   * Отключить перетаскивание изображений
   */
  function disableDragDrop() {
    document.addEventListener('dragstart', function(e) {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        showWarning();
        return false;
      }
    }, false);
    
    document.addEventListener('selectstart', function(e) {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    }, false);
  }

  /**
   * Отключить горячие клавиши
   */
  function disableKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
      // Ctrl+S или Cmd+S (Сохранить)
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        showWarning();
        return false;
      }
      
      // Ctrl+P или Cmd+P (Печать)
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        showWarning();
        return false;
      }
      
      // F12, Ctrl+Shift+I (DevTools)
      if (
        e.key === 'F12' ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))
      ) {
        e.preventDefault();
        return false;
      }
      
      // PrintScreen
      if (e.key === 'PrintScreen') {
        showWarning();
      }
    }, false);
  }

  /**
   * Добавить CSS защиту БЕЗ изменения существующих стилей
   */
  function addProtectionStyles() {
    const style = document.createElement('style');
    style.id = 'image-protection-styles';
    style.textContent = `
      /* ЗАЩИТА ИЗОБРАЖЕНИЙ - НЕ ВЛИЯЕТ НА СУЩЕСТВУЮЩИЕ СТИЛИ */
      
      img:not(.no-protect) {
        /* Отключить перетаскивание */
        -webkit-user-drag: none !important;
        -khtml-user-drag: none !important;
        -moz-user-drag: none !important;
        -o-user-drag: none !important;
        user-drag: none !important;
        
        /* Отключить выделение */
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
        
        /* Отключить callout на iOS */
        -webkit-touch-callout: none !important;
      }
      
      /* Для изображений в Swiper слайдере */
      .swiper-slide img {
        pointer-events: auto !important; /* Разрешить клики для навигации */
        -webkit-user-drag: none !important;
        user-drag: none !important;
        -webkit-user-select: none !important;
        user-select: none !important;
      }
      
      /* Скрыть контекстное меню браузера для изображений */
      img::-webkit-image-controls {
        display: none !important;
      }
      
      img::-webkit-media-controls {
        display: none !important;
      }
      
      /* Защита для background images */
      [style*="background-image"] {
        -webkit-user-select: none !important;
        user-select: none !important;
      }
      
      /* Исключение для элементов с классом .no-protect */
      .no-protect {
        -webkit-user-drag: auto !important;
        user-drag: auto !important;
        -webkit-user-select: auto !important;
        user-select: auto !important;
        pointer-events: auto !important;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Защитить существующие изображения БЕЗ изменения структуры HTML
   */
  function protectExistingImages() {
    const images = document.querySelectorAll('img:not(.no-protect)');
    
    images.forEach(img => {
      // Добавить атрибуты защиты БЕЗ изменения классов
      img.setAttribute('oncontextmenu', 'return false;');
      img.setAttribute('ondragstart', 'return false;');
      img.setAttribute('onselectstart', 'return false;');
    });
  }

  /**
   * Наблюдать за динамически добавляемыми изображениями
   */
  function watchNewImages() {
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length) {
          mutation.addedNodes.forEach(function(node) {
            if (node.tagName === 'IMG' && !node.classList.contains('no-protect')) {
              node.setAttribute('oncontextmenu', 'return false;');
              node.setAttribute('ondragstart', 'return false;');
              node.setAttribute('onselectstart', 'return false;');
            }
            
            // Проверить дочерние изображения
            if (node.querySelectorAll) {
              const childImages = node.querySelectorAll('img:not(.no-protect)');
              childImages.forEach(img => {
                img.setAttribute('oncontextmenu', 'return false;');
                img.setAttribute('ondragstart', 'return false;');
                img.setAttribute('onselectstart', 'return false;');
              });
            }
          });
        }
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  /**
   * Обнаружение DevTools
   */
  function detectDevTools() {
    const threshold = 160;
    let devtoolsOpen = false;
    
    const checkDevTools = () => {
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      
      if (widthThreshold || heightThreshold) {
        if (!devtoolsOpen) {
          devtoolsOpen = true;
          console.log('%c🔒 Защита изображений активна', 'font-size: 20px; color: red; font-weight: bold;');
        }
      } else {
        devtoolsOpen = false;
      }
    };
    
    setInterval(checkDevTools, 1000);
  }

  // ==================== ИНИЦИАЛИЗАЦИЯ ====================
  
  function init() {
    // Ждем полной загрузки DOM
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }
    
    console.log('🔒 Защита изображений активирована для Portfolio');
    
    // Применяем защиту
    if (config.disableRightClick) {
      disableRightClick();
    }
    
    if (config.disableDragDrop) {
      disableDragDrop();
    }
    
    if (config.disableKeyboardShortcuts) {
      disableKeyboardShortcuts();
    }
    
    // Добавляем CSS защиту
    addProtectionStyles();
    
    // Защищаем существующие изображения
    protectExistingImages();
    
    // Следим за новыми изображениями
    watchNewImages();
    
    // Обнаружение DevTools
    detectDevTools();
  }

  // Запускаем защиту
  init();

  // ==================== PUBLIC API ====================
  
  window.ImageProtection = {
    enable: init,
    showWarning: showWarning,
    config: config
  };

})();

// ==================== ДОПОЛНИТЕЛЬНАЯ ЗАЩИТА ====================

// Защита от копирования через буфер обмена
document.addEventListener('copy', function(e) {
  const selection = window.getSelection();
  if (selection && selection.toString()) {
    // Разрешаем копирование текста
    return;
  }
  
  // Блокируем копирование изображений
  e.preventDefault();
});

// Сообщение в консоли
console.log(
  '%c🔒 ЗАЩИТА ИЗОБРАЖЕНИЙ АКТИВНА',
  'font-size: 24px; color: #ff5252; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);'
);
console.log(
  '%cВсе изображения на этой странице защищены от копирования и скачивания.',
  'font-size: 14px; color: #666;'
);
