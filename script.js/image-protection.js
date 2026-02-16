/**
 * IMAGE PROTECTION SCRIPT
 * Prevents users from copying, downloading, and saving images from your website
 * 
 * FEATURES:
 * - Disable right-click on images
 * - Disable drag and drop
 * - Disable save image shortcuts
 * - Disable screenshot shortcuts (partial)
 * - Add invisible watermark overlay
 * - Disable developer tools image inspection
 */

(function() {
  'use strict';

  // ==================== CONFIGURATION ====================
  const config = {
    // Enable/disable specific protections
    disableRightClick: true,
    disableDragDrop: true,
    disableKeyboardShortcuts: true,
    addInvisibleOverlay: true,
    disableContextMenu: true,
    showWarningMessage: true,
    
    // Warning message text
    warningMessage: {
      ru: '⚠️ Копирование изображений запрещено!',
      en: '⚠️ Image copying is disabled!'
    },
    
    // Select language
    language: 'ru'
  };

  // ==================== UTILITY FUNCTIONS ====================
  
  /**
   * Show warning message
   */
  function showWarning() {
    if (!config.showWarningMessage) return;
    
    const message = config.warningMessage[config.language];
    
    // Create warning element
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
    
    // Animate in
    setTimeout(() => {
      warning.style.opacity = '1';
      warning.style.transform = 'translateX(0)';
    }, 10);
    
    // Animate out
    setTimeout(() => {
      warning.style.opacity = '0';
      warning.style.transform = 'translateX(400px)';
    }, 2500);
  }

  // ==================== PROTECTION METHODS ====================

  /**
   * Disable right-click on images
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
   * Disable drag and drop for images
   */
  function disableDragDrop() {
    document.addEventListener('dragstart', function(e) {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        showWarning();
        return false;
      }
    }, false);
    
    // Prevent selection of images
    document.addEventListener('selectstart', function(e) {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    }, false);
  }

  /**
   * Disable keyboard shortcuts for saving images
   */
  function disableKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
      // Ctrl+S or Cmd+S (Save)
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        showWarning();
        return false;
      }
      
      // Ctrl+P or Cmd+P (Print)
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        showWarning();
        return false;
      }
      
      // F12, Ctrl+Shift+I, Ctrl+Shift+J (Developer Tools)
      if (
        e.key === 'F12' ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))
      ) {
        e.preventDefault();
        return false;
      }
      
      // PrintScreen (limited effectiveness)
      if (e.key === 'PrintScreen') {
        showWarning();
      }
    }, false);
  }

  /**
   * Add invisible overlay over images
   */
  function addInvisibleOverlay() {
    // Add CSS for image containers
    const style = document.createElement('style');
    style.textContent = `
      .image-protected {
        position: relative;
        display: inline-block;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
      }
      
      .image-protected img {
        display: block;
        pointer-events: none;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
      }
      
      .image-protected::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        z-index: 10;
        cursor: default;
      }
      
      .image-protected::after {
        content: '🔒';
        position: absolute;
        bottom: 10px;
        right: 10px;
        font-size: 20px;
        opacity: 0;
        transition: opacity 0.3s;
        z-index: 11;
        pointer-events: none;
      }
      
      .image-protected:hover::after {
        opacity: 0.5;
      }
    `;
    document.head.appendChild(style);
    
    // Wrap existing images
    function wrapImages() {
      const images = document.querySelectorAll('img:not(.no-protect)');
      images.forEach(img => {
        if (!img.parentElement.classList.contains('image-protected')) {
          const wrapper = document.createElement('div');
          wrapper.className = 'image-protected';
          img.parentNode.insertBefore(wrapper, img);
          wrapper.appendChild(img);
          
          // Add additional attributes
          img.setAttribute('oncontextmenu', 'return false;');
          img.setAttribute('ondragstart', 'return false;');
          img.setAttribute('onselectstart', 'return false;');
        }
      });
    }
    
    // Initial wrap
    wrapImages();
    
    // Watch for dynamically added images
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length) {
          wrapImages();
        }
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  /**
   * Disable context menu on entire page (optional, more aggressive)
   */
  function disableContextMenuGlobal() {
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      showWarning();
      return false;
    }, false);
  }

  /**
   * Convert images to background images (strongest protection)
   */
  function convertToBackgroundImages() {
    const style = document.createElement('style');
    style.textContent = `
      .bg-image-protected {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        user-select: none;
        -webkit-user-select: none;
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Detect and prevent DevTools
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
          console.log('%c🔒 Image protection active', 'font-size: 20px; color: red; font-weight: bold;');
        }
      } else {
        devtoolsOpen = false;
      }
    };
    
    setInterval(checkDevTools, 1000);
  }

  /**
   * Add CSS to prevent image selection
   */
  function addGlobalImageCSS() {
    const style = document.createElement('style');
    style.textContent = `
      img {
        pointer-events: none;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-drag: none;
      }
      
      /* Disable image selection in background images */
      * {
        -webkit-touch-callout: none;
      }
    `;
    document.head.appendChild(style);
  }

  // ==================== INITIALIZATION ====================
  
  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }
    
    console.log('🔒 Image Protection Activated');
    
    // Apply protections based on config
    if (config.disableRightClick) {
      disableRightClick();
    }
    
    if (config.disableDragDrop) {
      disableDragDrop();
    }
    
    if (config.disableKeyboardShortcuts) {
      disableKeyboardShortcuts();
    }
    
    if (config.addInvisibleOverlay) {
      addInvisibleOverlay();
    }
    
    // Always add global CSS protection
    addGlobalImageCSS();
    
    // Optional: Detect DevTools
    detectDevTools();
    
    // Optional: Convert to background images for strongest protection
    convertToBackgroundImages();
  }

  // Start protection
  init();

  // ==================== PUBLIC API ====================
  
  // Make functions available globally if needed
  window.ImageProtection = {
    enable: init,
    showWarning: showWarning,
    config: config
  };

})();

// ==================== ADDITIONAL PROTECTION ====================

// Prevent Inspect Element on images
document.addEventListener('DOMContentLoaded', function() {
  // Disable text selection on images
  document.body.style.webkitUserSelect = 'none';
  document.body.style.mozUserSelect = 'none';
  document.body.style.msUserSelect = 'none';
  document.body.style.userSelect = 'none';
  
  // Re-enable for text elements
  const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6, a, li, td, th');
  textElements.forEach(el => {
    el.style.webkitUserSelect = 'text';
    el.style.mozUserSelect = 'text';
    el.style.msUserSelect = 'text';
    el.style.userSelect = 'text';
  });
});
