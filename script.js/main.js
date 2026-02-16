    //ЛОАДЕР, ПРЕЛОАДЕР С ЦИФРАМИ КОД ВТОРОЙ С ГРОК 3
    /*const percentElem = document.getElementById('percent');
    const preloader = document.getElementById('preloader');
    const body = document.body;
    let percent = 0;

    // Имитация загрузки
    const interval = setInterval(() => {
      if (percent < 90) {
        percent += Math.floor(Math.random() * 10) + 1;//ИЗНАЧАЛЬНО* 15) + 5
        percentElem.textContent = percent + '%';
      }
    }, 2500);//120

    // Когда всё загрузилось
    window.addEventListener('load', () => {
      clearInterval(interval);
      percent = 100;
      percentElem.textContent = '100%';

      setTimeout(() => {
        // Плавное исчезновение
        preloader.style.transition = 'opacity 0.6s ease';
        preloader.style.opacity = '0';

        setTimeout(() => {
          preloader.style.display = 'none';
          body.classList.add('loaded'); // Показываем сайт
        }, 600);
      }, 300);
    });*/

//ПРЕЛОАДЕР ПЕРВЫЙ КОД С ЦИФРАМИ С ГРОК 3 ( НЕ ТОЧНО, ЧТО В ЭТОМ КОДЕ СРАЗУ ПОЯВЛЯЕТСЯ ЛОАДЕР И ИЗНАЧАЛЬНО ФОНА БОДИ НЕ ВИДНО), А В КОДЕ ПЕРПЛЕКСИТИ НА НЕСКОЛЬКО СЕКУНД ПЕРЕД ПОЯВЛЕНИЕМ ЛОАДЕРА, ПОЯВЛЯЕТСЯ ФОН БОДИ - ЭТО НЕ ПРИКОЛЬНО
// Счётчик процентов
   /* let percent = 0;
    const percentElem = document.getElementById('percent');
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    // Имитация прогресса (можно убрать, если не нужен)
    const progressInterval = setInterval(() => {
      if (percent < 90) {
        percent += Math.floor(Math.random() * 10) + 1;
        percentElem.textContent = percent + '%';
      }
    }, 1900);//ИЗНАЧАЛЬНО 100

    // Когда всё загрузилось
    window.addEventListener('load', () => {
      clearInterval(progressInterval);
      percent = 100;
      percentElem.textContent = '100%';

      // Плавное исчезновение прелоадера
      setTimeout(() => {
        preloader.style.transition = 'opacity 0.6s ease';
        preloader.style.opacity = '0';

        setTimeout(() => {
          preloader.style.display = 'none';
          content.style.display = 'block';// в html эти свойства не использовал id="content" style="display:none;". Работает без них
        }, 600);
      }, 300); // Пауза на 100%
    });*/
///ПРЕЛОАДЕР КОД С ЦИФРАМИ С ГРОК 3///

//PRELOADER КОД С PERPLEXITY С ЧИСЛАМИ В ЭТОМ КОДЕ НА НЕСКОЛЬКО СЕКУНД ПЕРЕД ПОЯВЛЕНИЕМ ЛОАДЕРА, ПОЯВЛЯЕТСЯ ФОН БОДИ - ЭТО НЕ ПРИКОЛЬНО
 // Индикатор для имитации загрузки (цифра 0-100)
/*let percent = 0;
const percentElem = document.getElementById('percent');
const preloader = document.getElementById('preloader');
// Интервал до полной загрузки (пример — обновляется каждые 10 мс)
const interval = setInterval(() => {
  percent++;
  percentElem.textContent = percent + '%';
  if (percent >= 100) {
    clearInterval(interval);
  }
}, 500);//570 - НОРМАЛЬНО //БЫЛО ИЗНАЧАЛЬНО 10, НО 10 МАЛО ВРЕМЕНИ ДЛЯ ПОЛНОЙ ЗАГРУЗКИ СТРАНИЦЫ
window.addEventListener('load', function() {
  // Убедиться, что счетчик дошёл до 100
  percent = 100;
  percentElem.textContent = '100%';
  setTimeout(function() {
    preloader.style.opacity = 0;
    setTimeout(function() {
      preloader.style.display = 'none';
      document.getElementById('content').style.display = 'block';
    }, 500);//500 это скорость исчезновения прелоадера Увеличить, например, до 800 мс — это сделать анимацию исчезновения прелоадера более плавной и долгой; уменьшить до 200 мс — прелоадер исчезнет почти мгновенно, и основной контент покажется быстрее после полной загрузки. Для согласованности UX держите время в диапазоне 400–800 мс для анимации скрытия и последовательности показа контента.
  }, 300);//300 — задержка перед началом плавного исчезновения прелоадера после того, как счетчик достиг 100%. То есть прелоадер с цифрой “100%” остаётся видимым еще 300 мс, чтобы пользователь заметил завершение загрузки.
});*\
///PRELOADER КОД С PERPLEXITY С ЧИСЛАМИ///
//PRELOАDER КОД С ПЕРПЛЕКСИТИ БЕЗ ЦИФР НА НЕСКОЛЬКО СЕКУНД ПЕРЕД ПОЯВЛЕНИЕМ ЛОАДЕРА, ПОЯВЛЯЕТСЯ ФОН БОДИ - ЭТО НЕ ПРИКОЛЬНО
/*window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.transition = 'opacity 0.5s';
    preloader.style.opacity = 0;
    setTimeout(function() {
    preloader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
    }, 500);///*500 это скорость исчезновения прелоадера Увеличить, например, до 800 мс — это сделать анимацию исчезновения прелоадера более плавной и долгой; уменьшить до 200 мс — прелоадер исчезнет почти мгновенно, и основной контент покажется быстрее после полной загрузки. Для согласованности UX держите время в диапазоне 400–800 мс для анимации скрытия и последовательности показа контента.
});*/
///PRELOАDER КОД С ПЕРПЛЕКСИТИ БЕЗ ЦИФР ТОЖЕ РАБОЧИЙ///

//ЧТОБ ХЕДЕР НЕ НАЛEЗАЛ НА ФУТЕР РАБОЧАЯ, ЕСЛИ НЕ МЕНЯТЬ ВЫЧОТУ В ЭЛЕМЕНТАХ ФУТЕРА
/*const header = document.querySelector('header');
const footer = document.querySelector('footer');

function adjustHeaderPosition() {
  const headerRect = header.getBoundingClientRect();
  const footerRect = footer.getBoundingClientRect();
  
  if (footerRect.top <= headerRect.bottom) {
    header.style.position = 'absolute';
    header.style.top = `${footerRect.top - headerRect.height}px`;
  } else {
    header.style.position = 'sticky';
    header.style.top = '0';
  }
}

window.addEventListener('scroll', adjustHeaderPosition);
window.addEventListener('resize', adjustHeaderPosition);*/
//ВАРИАНТ-1///

//ВАРИАНТ-2
/*const header = document.querySelector('header');
const footer = document.querySelector('footer');
const main = document.querySelector('main'); // Добавляем основной контент

function adjustLayout() {
  const headerHeight = header.offsetHeight;
  const footerHeight = footer.offsetHeight;
  const windowHeight = window.innerHeight;

  // Устанавливаем минимальную высоту для основного контента
  main.style.minHeight = `${windowHeight - headerHeight - footerHeight}px`;

  // Проверяем, не перекрывает ли header footer
  const headerBottom = header.getBoundingClientRect().bottom;
  const footerTop = footer.getBoundingClientRect().top;

  if (headerBottom > footerTop) {
    header.style.position = 'absolute';
    header.style.top = `${footerTop - headerHeight}px`;
  } else {
    header.style.position = 'sticky';
    header.style.top = '0';
  }
}

// Вызываем функцию при загрузке, прокрутке и изменении размера окна
window.addEventListener('load', adjustLayout);
window.addEventListener('scroll', adjustLayout);
window.addEventListener('resize', adjustLayout);

// Добавляем слушатель для изменений в DOM, которые могут повлиять на высоту футера
const observer = new MutationObserver(adjustLayout);
observer.observe(footer, { childList: true, subtree: true });*/
//ВАРИАНТ-2///

//VARIANT-3 С ДИВОМ ПЕРЕД ФУТЕРОМ
/*const header = document.querySelector('header');
const footerAnchor = document.getElementById('footer-anchor');

function adjustHeaderPosition() {
  const headerRect = header.getBoundingClientRect();
  const footerAnchorRect = footerAnchor.getBoundingClientRect();
  
  if (footerAnchorRect.top <= headerRect.bottom) {
    header.style.position = 'absolute';
    header.style.top = `${footerAnchorRect.top - headerRect.height}px`;
  } else {
    header.style.position = 'sticky';
    header.style.top = '0';
  }
}

window.addEventListener('scroll', adjustHeaderPosition);
window.addEventListener('resize', adjustHeaderPosition);*/
//VARIANT-3 С ДИВОМ ПЕРЕД ФУТЕРОМ///
//ЧТОБ ХЕДЕР НЕ НАЛИЗАЛ НА ФУТЕР///

//СОВЕТУЕТ ПЕРФЛЕКСИТИ ИЗМЕНИТЬ НАЗВАНИЯ
//ГАМБУРГЕР-МЕНЮ
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerToggle = document.getElementById('hamburger');//menuToggle
    const mainMenu = document.getElementById('menu');//menu
    const overlay = document.getElementById('overlay');
  
    const toggleMenu = () => {
      mainMenu.classList.toggle('open');//menu
      overlay.classList.toggle('open');
    };

    //menuToggle
    hamburgerToggle.addEventListener('click', () => {
      toggleMenu();
    });

    // Закрытие меню при клике на overlay
    overlay.addEventListener('click', () => {
      toggleMenu();
    });
  });
  //ГАМБУРГЕР-МЕНЮ//

  //ЧТОБ НЕ БЫЛО ПРОКРУТКИ У БОДИ, КОГДА СКРОЛЮ КОНТЕНТ MENU NAV MOBILE, ПОКА НЕ АЛЁ
  /*const menuToggles = document.querySelector('.overlay');
  const body = document.body;
  
  menuToggles.addEventListener('click', () => {
      menuToggles.classList.toggle('active');
      toggleBodyScroll();
  });
  
  function toggleBodyScroll() {
      if (menuToggles.classList.contains('active')) {
          body.style.overflow = 'hidden';
      } else {
          body.style.overflow = '';
      }
  }*/
  //ЧТОБ НЕ БЫЛО ПРОКРУТКИ У БОДИ, КОГДА СКРОЛЮ КОНТЕНТ MENU NAV MOBILE, ПОКА НЕ АЛЁ//

 /* //SHEVRON CONTACT без вращения капрала ORIGIN VARIANT

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content *
const shavronTransform = document.querySelector(".imgDropShevronLinkItemListContentHeaderNavig");

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("showShavron");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.imgDropShevronLinkItemListContentHeaderNavig')) {
    var dropdowns = document.getElementsByClassName("dropdownShevron-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showShavron')) {
          openDropdown.classList.remove('showShavron');
      }
    }
  }
}*/
////////
/*//SHAVRON CONTACT С вращением капрала РАБОЧИЙ. ОТКЛЮЧИЛ, ПОТОМУ ЧТО В КОДЕ НИЖЕ
const shavronTransform = document.querySelector(".imgDropShevronLinkItemListContentHeaderNavig");

function myFunction() {
  const dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("showShavron");
  //dropdown.style.transition = 'transform 500ms easy-in-out';
  if (dropdown.classList.contains("showShavron")) {
    shavronTransform.style.transform = 'rotate(180deg)';
  } else {
    shavronTransform.style.transform = 'rotate(0deg)';
  }
}

window.onclick = function(event) {
  if (!event.target.matches('.imgDropShevronLinkItemListContentHeaderNavig')) {
    const dropdowns = document.getElementsByClassName("dropdownShevron-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showShavron')) {
        openDropdown.classList.remove('showShavron');
        shavronTransform.style.transform = 'rotate(0deg)';
      }
    }
  }
}*/
/////////
/*SHAVRON CONTACT С вращением капрала ТОЖЕ САМОЕ, ЧТО И КОД СВЕРУ
по этому коду перфлексити внесла дополнение свойств элементам в файл css*/
const shavronTransform = document.querySelector(".imgDropShevronLinkItemListContentHeaderNavig");
const openLinkWindow = document.querySelector('.linkContact');

function myFunction() {
  const dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("showShavron");
  //dropdown.style.transition = 'opacity 500ms ease-in-out';//я добавил

  if (dropdown.classList.contains("showShavron")) {
    shavronTransform.style.transform = 'rotate(180deg)';
  } else {
    shavronTransform.style.transform = 'rotate(0deg)';
  }
}

window.onclick = function(event) {
  if (!event.target.matches('.linkContact, .imgDropShevronLinkItemListContentHeaderNavig')) {//linkContact, liDropdownShevron, imgDropShevronLinkItemListContentHeaderNavig
    const dropdowns = document.getElementsByClassName("dropdownShevron-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showShavron')) {
        openDropdown.classList.remove('showShavron');
        //openDropdown.style.transition = 'opacity 500ms easy-in-out';//я добавил
        shavronTransform.style.transform = 'rotate(0deg)';
      }
    }
  }
}
/*/////////SHAVRON CONTACT С вращением капрала НЕМЕЦКИЙ ЧАТ 
const shavronTransform = document.querySelector(".imgDropShevronLinkItemListContentHeaderNavig");

function myFunction() {
  const dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("showShavron");

  if (dropdown.classList.contains("showShavron")) {
    shavronTransform.style.transform = 'rotate(180deg)';
    dropdown.style.opacity = '1';
  } else {
    shavronTransform.style.transform = 'rotate(0deg)';
    dropdown.style.opacity = '0';
  }
}

window.onclick = function(event) {
  if (!event.target.matches('.imgDropShevronLinkItemListContentHeaderNavig')) {
    const dropdowns = document.getElementsByClassName("dropdownShevron-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showShavron')) {
        openDropdown.classList.remove('showShavron');
        shavronTransform.style.transform = 'rotate(0deg)';
        openDropdown.style.opacity = '0';
      }
    }
  }
}*/
/////SHAVRON CONTACT С вращением капрала НЕМЕЦКИЙ ЧАТ///////
/*//SHAVRON CONTACT TIMEOUT ПОКА НЕ РАБОТАЕТ
const shavronTransform = document.querySelector(".imgDropShevronLinkItemListContentHeaderNavig");

function myFunction() {
  const dropdown = document.getElementById("myDropdown");
  if (dropdown.classList.contains("showShavron")) {
    dropdown.classList.remove("showShavron");
    shavronTransform.style.transform = 'rotate(0deg)';
    setTimeout(() => {
      dropdown.style.display = 'none';
    }, 500); // Match the duration of the opacity transition
  } else {
    dropdown.style.display = 'block';
    setTimeout(() => {
      dropdown.classList.add("showShavron");
    }, 10); // Small delay to ensure the display is set before the opacity transition starts
    shavronTransform.style.transform = 'rotate(180deg)';
  }
}

window.onclick = function(event) {
  if (!event.target.matches('.imgDropShevronLinkItemListContentHeaderNavig')) {
    const dropdowns = document.getElementsByClassName("dropdownShevron-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showShavron')) {
        openDropdown.classList.remove('showShavron');
        shavronTransform.style.transform = 'rotate(0deg)';
        setTimeout(() => {
          openDropdown.style.display = 'none';
        }, 500); // Match the duration of the opacity transition
      }
    }
  }
}*/
  //SHAVRON CONTACT TIMEOUT ПОКА НЕ РАБОТАЕТ//

  //СОВЕТУЕТ ПЕРФЛЕКСИТИ ИЗМЕНИТЬ НАЗВАНИЯ
  //Chat
const menuToggleBtn = document.querySelector(".menu-toggle");//menuToggle
const navMenu = document.querySelector(".nav-menu");//menu
const closedChat = document.querySelector(".oval-2-chat");//тоже можно, я добавил
  
menuToggleBtn.addEventListener("click", /*function*/ () => {/*можно перед () прописать function, но тогда стрелку => убрать*/
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      navMenu.style.transition = 'transform 500ms easy-in-out';
    } else {
      navMenu.classList.add("active");
      navMenu.style.transition = 'transform 500ms easy-in-out';
    }
});
  // тех-поддержка
const techServiceBtn = document.querySelector(".tech-service-btn");
const techServiceDialog = document.querySelector(".tech-service-dialog");
const sendBtn = document.querySelector(".chat-send-btn");
const input = document.querySelector(".chat-input");
  
techServiceBtn.addEventListener("click", function (e) {
    e.preventDefault();
    techServiceDialog.classList.toggle("show");
    techServiceDialog.style.transition = 'opacity 500ms easy-in-out' //я мастерю
    sendBtn.disabled = false;
    sendBtn.textContent = "Отправить";//Send
    input.value = "";
});
  
sendBtn.addEventListener("click", function (e) {
    e.preventDefault();
    this.textContent = "Отправлено";//Sent
    this.disabled = true;
    input.value = "";
});
//ЧТОБ ПРИНИМАТЬ СМС НА ПОЧТУ ОТ ЗАКАЗЧИКОВ PERPLEXITY. В ОРИГИНАЛЕ НЕ БЫЛО
document.querySelector('.chat-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var form = this;
  var formData = new FormData(form);
  
  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      // Очистить поле ввода
      form.reset();
      // Показать сообщение об успешной отправке
      alert('Сообщение отправлено!');
    } else {
      alert('Ошибка при отправке сообщения.');
    }
  }).catch(error => {
    console.error('Error:', error);
    alert('Произошла ошибка при отправке сообщения.');
  });
});
//ЧТОБ ПРИНИМАТЬ СМС НА ПОЧТУ ОТ ЗАКАЗЧИКОВ PERPLEXITY. В ОРИГИНАЛЕ НЕ БЫЛО///
//ЭТОГО В ОРРИГИНАЛЬНОМ КОДЕ НЕТ, Я ДОБАВИЛ, ЧТОБЫ РАБОТАЛО В СЛАЙДЕРЕ КАРУСЕЛЬ 
function openChat() {
  document.getElementById("showChat").style.display = "block";
}

function closeChat() {
  document.getElementById("showChat").style.display = "none";
}

function openChatMobile() {
  document.getElementById("showChatMobile").style.display = "block";
}

function closeChatMobile() {
  document.getElementById("showChatMobile").style.display = "none";
}
///ЭТОГО В ОРИГИНАЛЬНОМ КОДЕ НЕТ, Я ДОБАВИЛ, ЧТОБЫ РАБОТАЛО В СЛАЙДЕРЕ КАРУСЕЛЬ //
//Chat///

/*
//ДВИГАЮЩАЯСЯ РУКА ПРИ НАВЕДЕНИИ МЫШИ РАБОТАЕТ ОТКЛЮЧИЛ, ПОТОМУ ЧТО ПОДКЛЮЧИЛ АВТОМАТ
document.getElementsByTagName("h5")[0].style.fontSize = "24px";// Тег должен быть уникальнм, больше не присутствовать не в одном элементе
const touchElement = document.querySelector(".touch");//[0].style.fontSize = "7vw";
touchElement.addEventListener('mousemove', (event) => {
  touchElement.classList.toggle('touch--magic');
  touchElement.style.animationIterationCount=1500;//когда подключу при косании мышкой, махнет 15 раз
  //touchElement.innerHTML = "👋 HI";//поменяет текст в <р>
  //touchElement.style.color = "red";
  //p.style.marginLeft = "90px";
  event.stopPropagation();//чтоб событие не всплывало
  //p.style.transform = "1.05";
});
*/
//ДВИГАЮЩАЯСЯ РУКА АВТОМАТ
document.getElementsByTagName("h6")[0].style.fontSize = "24px";
const touchElement = document.querySelector(".touch");
// Автоматически добавляем класс при загрузке страницы load для window (в место mousemove), который автоматически добавляет класс touch--magic элементу при загрузке страницы.
window.addEventListener('load', () => {
  touchElement.classList.add('touch--magic');
});
//ДВИГАЮЩАЯСЯ РУКА АВТОМАТ///

/*Сайдбар*///ДЛЯ ОТКРЫТИЯ САЙДБАРА ВО ВСЕХ СЛAЙДАХ СЛАЙДЕРА В ПЕРВОМ ЭКРАНЕ, КОД НИЖЕ 
/*function openLeftMenu() {
  document.getElementById("leftMenu").style.display = "block";
}
function closeLeftMenu() {
  document.getElementById("leftMenu").style.display = "none";
}*/

/*function openRightMenu() {РАБОЧИЙ
  document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
  document.getElementById("rightMenu").style.display = "none";
}*/

//ГРОК3 
// Открываем сайдбар
function openRightMenu() {
  const menu = document.getElementById("rightMenu");
  menu.style.display = "block";
  
  // Включаем прослушивание кликов вне меню
  setTimeout(() => {
    document.addEventListener("click", closeOnOutsideClick);
  }, 0); // setTimeout нужен, чтобы не закрыло сразу от текущего клика
}

// Закрываем сайдбар
function closeRightMenu() {
  const menu = document.getElementById("rightMenu");
  menu.style.display = "none";
  
  // Убираем слушатель, чтобы он не висел постоянно
  document.removeEventListener("click", closeOnOutsideClick);
}

// Функция, которая проверяет — кликнули ли мы вне сайдбара
function closeOnOutsideClick(event) {
  const menu = document.getElementById("rightMenu");
  
  // Если меню открыто И клик произошёл НЕ внутри меню → закрываем
  if (menu.style.display === "block" && !menu.contains(event.target)) {
    closeRightMenu();
  }
}
/*/Сайдбар*/ 

//МАСКА ФОТО В САЙДБАРЕ
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

//ACCORDIONS
//ACCORDIONS CLOSE
/*const acc = document.getElementsByClassName("contentBx");// если отключить, то он все-равно будет в свернутом виде и открытых плиток не получится
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}*/
/////ACCORDIONS CLOSE//////
//АККОРДЕОН ПОСТОЯННО ОТКРЫТ
const acc = document.getElementsByClassName("contentBx");

// Открываем все элементы при загрузке страницы
for (let i = 0; i < acc.length; i++) {
  acc[i].classList.add("active");
}

// Опционально: если вы хотите, чтобы элементы оставались открытыми при клике
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function (event) {
    // Предотвращаем стандартное поведение (сворачивание/разворачивание)
    event.preventDefault();
    
    // Если элемент каким-то образом потерял класс "active", добавляем его обратно
    if (!this.classList.contains("active")) {
      this.classList.add("active");
    }
  });
}
//////АККОРДЕОН ПОСТОЯННО ОТКРЫТ///////
/////ACCORDIONS////////
//ЧТОБ НЕ БЫЛО ПРОКРУТКИ У БОДИ, КОГДА СКРОЛЮ КОНТЕНТ АККОРДЕОНСА, ПОКА НЕ АЛЁ
/*const accordionHeaders = document.querySelectorAll('.accordion');
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                item.classList.toggle('active');
                document.body.classList.toggle('no-scroll');
        });
});*/
//ЧТОБ НЕ БЫЛО ПРОКРУТКИ У БОДИ, КОГДА СКРОЛЮ КОНТЕНТ АККОРДЕОНСА, ПОКА НЕ АЛЁ//

//МОЙ САМЫЙ ПЕРВЫЙ CЛАЙДЕР 
//NO AUTOMATE
let slideIndex = 1;
        
function positionSlides(n) {
  showSlides(slideIndex += n);
} 

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dotas = document.getElementsByClassName("dotas"); //здесь заменил dots на dotas во всем коде

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (let i = 0; i < dotas.length; i++) {
    dotas[i].className = dotas[i].className.replace(" active", "");
  }
    slides[slideIndex-1].style.display = "block";  
    dotas[slideIndex-1].className += " active";
}

showSlides(slideIndex);

const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

btnPrev.addEventListener("click", () => {positionSlides(-1);});
btnNext.addEventListener("click", () => {positionSlides(1);});
//NO AUTOMATE///

//AUTOMAT
/*let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}*/
//AUTOMATE
////MY FIRST SLIDER//////////////////////////////////

/*
//ЧТОБЫ ЧАТ ОТКРЫВАЛСЯ В КАЖДОМ СЛАЙДЕ
document.addEventListener('DOMContentLoaded', () => {
  const slideContainer = document.querySelector('.slideshow-container');

  slideContainer.addEventListener('click', (event) => {
    const techServiceBtn = event.target.closest('.btnCTA.tech-service');
    if (techServiceBtn) {
      event.preventDefault();
      const slide = techServiceBtn.closest('.mySlides');
      const techServiceDialog = slide.querySelector('.tech-service-dialog');
      
      if (techServiceDialog) {
        techServiceDialog.classList.toggle('show');
        
        const sendBtn = techServiceDialog.querySelector('.chat-send-btn');
        const input = techServiceDialog.querySelector('.chat-input');
        
        if (sendBtn && input) {
          sendBtn.disabled = false;
          sendBtn.textContent = 'Send';
          input.value = '';
        }
      }
    }

    // Обработка клика для кнопки отправки сообщения в чате
    if (event.target.classList.contains('chat-send-btn')) {
      event.preventDefault();
      event.target.textContent = 'Sent';
      event.target.disabled = true;
      const input = event.target.closest('.chat-form').querySelector('.chat-input');
      if (input) {
        input.value = '';
      }
    }
  });
});

// Остальной код остается без изменений
function openRightMenu() {
  document.getElementById('rightMenu').style.display = 'block';
}

function closeRightMenu() {
  document.getElementById('rightMenu').style.display = 'none';
}*/
//ЧТОБЫ ЧАТ ОТКРЫВАЛСЯ В КАЖДОМ СЛАЙДЕ//

/*// КОГДА МНОГО ТЕКСТА В КОНТЕЙНЕРЕ ПОМЕНЬШЕ, ПОЯВЛЯЕТСЯ ТРОЕТОЧИЕ, А ПРИ СКРОЛЕ ПРОПАДАЕТ. ВРОДЕ БЫ РАБОЧИЙ, НО НУЖНО ПОДШАМАНИТЬ
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.slide-text');
  const text = container.querySelector('.pg-gretting');

  container.addEventListener('scroll', function() {
    if (container.scrollTop + container.clientHeight >= text.offsetHeight - 10) {
      container.classList.add('scrolled');
    } else {
      container.classList.remove('scrolled');
    }
  });
});
//КОГДА МНОГО ТЕКСТА В КОНТЕЙНЕРЕ ПОМЕНЬШЕ, ПОЯВЛЯЕТСЯ ТРОЕТОЧИЕ*/

//ЧТОБЫ ЧАТ И САЙДБАР  ОТКРЫВАЛСЯ В КАЖДОМ СЛАЙДЕ. САЙДБАР ПОКА ОТКРЫВАЕТСЯ ТОЛЬКО В ПЕРВОМ СЛАЙДЕ
/*document.addEventListener('DOMContentLoaded', () => {
  const slideContainer = document.querySelector('.slideshow-container');

  slideContainer.addEventListener('click', (event) => {
    // Обработка клика для чата
    const techServiceBtn = event.target.closest('.btnCTA.tech-service');
    if (techServiceBtn) {
      event.preventDefault();
      const slide = techServiceBtn.closest('.mySlides');
      const techServiceDialog = slide.querySelector('.tech-service-dialog');
      
      if (techServiceDialog) {
        techServiceDialog.classList.toggle('show');
        
        const sendBtn = techServiceDialog.querySelector('.chat-send-btn');
        const input = techServiceDialog.querySelector('.chat-input');
        
        if (sendBtn && input) {
          sendBtn.disabled = false;
          sendBtn.textContent = 'Send';
          input.value = '';
        }
      }
    }

    // Обработка клика для кнопки отправки сообщения в чате
    if (event.target.classList.contains('chat-send-btn')) {
      event.preventDefault();
      event.target.textContent = 'Sent';
      event.target.disabled = true;
      const input = event.target.closest('.chat-form').querySelector('.chat-input');
      if (input) {
        input.value = '';
      }
    }

    // Обработка клика для сайдбара
    const btnSkills = event.target.closest('.btnSkills');
    if (btnSkills) {
      openRightMenu();
    }
  });
});

// Остальной код остается без изменений
function openRightMenu() {
  document.getElementById('rightMenu').style.display = 'block';
}

function closeRightMenu() {
  document.getElementById('rightMenu').style.display = 'none';
}*/
//ЭТО ПЕРВЫЙ КОД - РАБОЧИЙ ДЛЯ ЧАТА, ДЛЯ САЙДБАРА ВО ВСЕХ СЛАЙДАХ ПОКА НЕТ

//ЭТО ВТОРОЙ КОД - РАБОЧИЙ ДЛЯ ЧАТА, ДЛЯ САЙДБАРА ВО ВСЕХ СЛАЙДАХ
/*document.addEventListener('DOMContentLoaded', () => {
  const slideContainer = document.querySelector('.slideshow-container');

  slideContainer.addEventListener('click', (event) => {
    // Обработка клика для чата
    if (event.target.closest('.btnCTA.tech-service')) {
      event.preventDefault();
      const slide = event.target.closest('.mySlides');
      const techServiceDialog = slide.querySelector('.tech-service-dialog');
      
      if (techServiceDialog) {
        techServiceDialog.classList.toggle('show');
        
        const sendBtn = techServiceDialog.querySelector('.chat-send-btn');
        const input = techServiceDialog.querySelector('.chat-input');
        
        if (sendBtn && input) {
          sendBtn.disabled = false;
          sendBtn.textContent = 'Отправить';//Send
          input.value = '';
        }
      }
    }

    // Обработка клика для кнопки отправки сообщения в чате
    if (event.target.classList.contains('chat-send-btn')) {
      event.preventDefault();
      event.target.textContent = 'Отправлено';//Sent
      event.target.disabled = true;
      const input = event.target.closest('.chat-form').querySelector('.chat-input');
      if (input) {
        input.value = '';
      }
    }

    // Обработка клика для сайдбара
    if (event.target.closest('.btnSidebar')) {
      openRightMenu();
    }
  });
});

function openRightMenu() {
  document.getElementById('rightMenu').style.display = 'block';
}

function closeRightMenu() {
  document.getElementById('rightMenu').style.display = 'none';
}
//ЧТОБ ПРИНИМАТЬ СМС НА ПОЧТУ ОТ ЗАКАЗЧИКОВ PERPLEXITY. В ОРИГИНАЛЕ НЕ БЫЛО
document.querySelector('.chat-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var form = this;
  var formData = new FormData(form);
  
  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      // Очистить поле ввода
      form.reset();
      // Показать сообщение об успешной отправке
      alert('Сообщение отправлено!');
    } else {
      alert('Ошибка при отправке сообщения.');
    }
  }).catch(error => {
    console.error('Error:', error);
    alert('Произошла ошибка при отправке сообщения.');
  });
});*/
//ЧТОБ ПРИНИМАТЬ СМС НА ПОЧТУ ОТ ЗАКАЗЧИКОВ PERPLEXITY. В ОРИГИНАЛЕ НЕ БЫЛО///
//ЭТО ВТОРОЙ КОД - РАБОЧИЙ //ДЛЯ ЧАТА, И ДЛЯ САЙДБАРА ВО ВСЕХ СЛАЙДАХ //
//КОД ПЕРПЛЕКСИТИ ТРИ, ЧТОБ ЧАТ ОТКРЫВАЛСЯ В КАЖДОМ СЛАЙДЕ И С ОТПРАВКОЙ МНЕ СМС ОТ КЛИЕНТОВ. ПОКА НЕ ПРИНИМАЕТ И НЕ ОТПРАВЛЯЕТ СМС
//КОД СЕЙЧАС НЕ АКТИВЕН, ПОТОМУ ЧТО ПОМЕНЯЛ ЧАТ В СЛАЙДАХ НА ССЫЛКУ В ТЕЛЕГУ
/*document.addEventListener('DOMContentLoaded', () => {
  const slideContainer = document.querySelector('.slideshow-container');

  slideContainer.addEventListener('click', (event) => {
    // Обработка клика для чата
    if (event.target.closest('.btnCTA.tech-service')) {
      event.preventDefault();
      const slide = event.target.closest('.mySlides');
      const techServiceDialog = slide.querySelector('.tech-service-dialog');
      
      if (techServiceDialog) {
        techServiceDialog.classList.toggle('show');
        
        const sendBtn = techServiceDialog.querySelector('.chat-send-btn');
        const input = techServiceDialog.querySelector('.chat-input');
        
        if (sendBtn && input) {
          sendBtn.disabled = false;
          sendBtn.textContent = 'Отправить'; // Send
          input.value = '';
        }
      }
    }

    // Обработка клика для кнопки отправки сообщения в чате
    if (event.target.classList.contains('chat-send-btn')) {
      event.preventDefault();
      event.target.textContent = 'Отправлено'; // Sent
      event.target.disabled = true;
      const input = event.target.closest('.chat-form').querySelector('.chat-input');
      if (input) {
        input.value = '';
      }
    }

    // Обработка клика для сайдбара
    if (event.target.closest('.btnSidebar')) {
      openRightMenu();
    }
  });
});

function openRightMenu() {
  document.getElementById('rightMenu').style.display = 'block';
}

function closeRightMenu() {
  document.getElementById('rightMenu').style.display = 'none';
}

// Обработчик отправки формы
document.querySelector('.chat-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var form = this;
  var formData = new FormData(form);
  
  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      // Очистить поле ввода
      form.reset();
      // Показать сообщение об успешной отправке
      alert('Сообщение отправлено!');
    } else {
      alert('Ошибка при отправке сообщения.');
    }
  }).catch(error => {
    console.error('Error:', error);
    alert('Произошла ошибка при отправке сообщения.');
  });
});*/
//КОД СЕЙЧАС НЕ АКТИВЕН, ПОТОМУ ЧТО ПОМЕНЯЛ ЧАТ В СЛАЙДАХ НА ССЫЛКУ В ТЕЛЕГУ
//КОД ПЕРПЛЕКСИТИ ТРИ, ЧТОБ ЧАТ ОТКРЫВАЛСЯ В КАЖДОМ СЛАЙДЕ И С ОТПРАВКОЙ МНЕ СМС ОТ КЛИЕНТОВ///
//ЧТОБЫ ЧАТ И САЙДБАР  ОТКРЫВАЛСЯ В КАЖДОМ СЛАЙДЕ.//

//SLIDER YOUTUBE https://www.youtube.com/watch?v=9v_2YPnRqi0
/* БЕЗ АВТОСТОПА ПРИ НАВЕДЕНИИ МЫШКИ, КОД ОРИГИНАЛ
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
      loop:true,
      margin:20,//маржин между проектами 30
      nav:true,
      dots:false,
      dots:false,
       autoplay:true,//
       autoplaySpeed:1500,//
       autoplayTimeout:2000,//
      // autoWidth:true,
      dotsEach:true,
       stagePadding:100,//100 по краям показывает половинки предыдущего и следующего проекта, если отключен то боковушек боковых проектов видно не будет
       center:true,//у фотки по середине видимость 100%
      navText:[
          '<img src="images/arrow-slider-left.svg" alt="arrow-left">',
          '<img src="images/arrow-slider-right.svg" alt="arrow-right">'
      ],
      responsive:{
          0:{//количество проектов на разрешениях экранов
              items:1,
              navText:[]
          },
          768:{//количество проектов на разрешениях экранов
              items:2,
              dots:true,
              navText:[]
          },
          1000:{//количество проектов на разрешениях экранов
              items:3
          }
      }
  });
});
БЕЗ АВТОСТОПА ПРИ НАВЕДЕНИИ МЫШКИ, КОД ОРИГИНАЛ
*/
//С АВТОСТОПОМ ПРИ НАВЕДЕНИИ МЫШКИ, КОД ПЕРФЛЕКСИТИ
$(document).ready(function () {
  var owl = $(".owl-carousel").owlCarousel({
    loop: true,//включение автомата слайдера
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,//элемент для включение автомата слайдера
    autoplaySpeed: 1500,//элемент для включение автомата слайдера
    autoplayTimeout: 2000,//2000 БЫЛО//элемент для включение автомата слайдера
    autoplayHoverPause: true, // Добавлено для паузы при наведении//элемент для включение автомата слайдера
    autoWidth: true,//когда включен, то все слайды разной ширины(своей ширины), смотрится тоже хорошо, но по бокам не всегда есть боковушки проектов, паддинг не отделяет по бокам чёткие границы проекта крайнего слева и крайнего справа
    autoHeight: true,//этого не было, я добавил
    dotsEach: true,
    stagePadding: 150,//изначально было 100
    center: true,
    navText: [
      '<img src="images/arrow-slider-left.svg" alt="arrow-left">',
      '<img src="images/arrow-slider-right.svg" alt="arrow-right">'
    ],
    responsive: {
      0: {
        items: 1,  //КОЛЛИЧЕСТВО ПОКАЗЫВАЕМЫХ СЛАЙДОВ НА РАЗРЕШЕНИИ ДЕВАЙСА
        navText: []
      },
      768: {
        items: 2,  //КОЛЛИЧЕСТВО ПОКАЗЫВАЕМЫХ СЛАЙДОВ НА РАЗРЕШЕНИИ ДЕВАЙСА
        dots: true,
        navText: []
      },
      1000: {
        items: 3  //КОЛЛИЧЕСТВО ПОКАЗЫВАЕМЫХ СЛАЙДОВ НА РАЗРЕШЕНИИ ДЕВАЙСА
      }
    }
  });

  // Остановка автопрокрутки при наведении мыши
  $(".owl-carousel").on("mouseenter", function() {
    owl.trigger('stop.owl.autoplay');
  });

  // Возобновление автопрокрутки при уходе мыши
  $(".owl-carousel").on("mouseleave", function() {
    owl.trigger('play.owl.autoplay', [2000]);
  });
});
//С АВТОСТОПОМ ПРИ НАВЕДЕНИИ МЫШКИ, КОД ПЕРФЛЕКСИТИ
//SLIDER CARUSEL YOUTUBE//

//SLIDER SWIPER CODAPEN https://codepen.io/kristen17/pen/poqMegm
/*
inspiration
https://cz.pinterest.com/pin/830703093792161391/
*/
/*var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  spaceBetween: 30,
  loop: false,
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});
swiper.slideTo(1, false, false);
*/
//SLIDER SWIPER CODEPAN///

//SLIDER SWIPER CUBE
//Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
//SLIDER SWIPER CUBE///

/*//VIDEO CUBE ДЛЯ ВКЛЮЧЕНИЯ И ОТКЛЮЧЕНИЯ ПО КЛИКУ НО У ВИДЕО В ШТМЛ ПРОПИСАН КОНТРОЛЗ ЭТА ФУНКЦИЯ И БЕЗ СКРИПТА ПОЗВОЛЯЕТ ВКЛЮЧАТЬ И ОСТАНАВЛИВАТЬ ВИДЕО ПО КЛИКУ
document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('video-cube');
  
  video.addEventListener('click', function() {
      if (video.paused) {
          video.play();
      } else {
          video.pause();
      }
  });
});
//VIDEO CUBE ДЛЯ ВКЛЮЧЕНИЯ И ОТКЛЮЧЕНИЯ ПО КЛИКУ, НО У ВИДЕО В ШТМЛ ПРОПИСАН КОНТРОЛЗ ЭТА ФУНКЦИЯ И БЕЗ СКРИПТА ПОЗВОЛЯЕТ ВКЛЮЧАТЬ И ОСТАНАВЛИВАТЬ ВИДЕО ПО КЛИКУ////
*/

//HORISONTAL ACCORDION
document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.accordion-item');

  items.forEach(item => {
    item.addEventListener('mousemove', function() {//click  mouseover
      items.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
//HORISONTAL ACCORDION

//CANVAS NETWORK
//ОРИГИНАЛ
/*(function() {
    
  var canvas;
  var pen;
  var width;
  var height;
  var points = [];
  var threshold = 100;
  
  document.addEventListener('DOMContentLoaded', init, false);

  function init() {
      canvas = document.querySelector('canvas');
      pen = canvas.getContext('2d');
      width = canvas.width;
      height = canvas.height;
      window.setInterval(draw, 33);
  }

  // Function is called every 33 milliseconds
  function draw() {
      // Creates an object q with random coordinates
      var q = {
              x : getRandomNumber(0, 499),
              y : getRandomNumber(0, 499),
      };

      // A for loop which creates an object p with random x and y co-ordinates and appends them onto the list.

      for (p = 0; p < 500; p += 1) {
          var p ={
              x : getRandomNumber(0, 499),
              y : getRandomNumber(0, 499) 
          }
          points.push(p);
      }
      var colours = ['red', 'yellow', 'orange', 'lightcoral', 'orangered', 'green', 'blue', 'hotpink', 'blue'];

      console.log(points)
      var randomNumber = getRandomNumber(0, colours.length - 1);
      for (var index = 0; index < points.length; index += 1) {
          var distance = Math.sqrt(Math.pow(points[index].x - q.x, 2) + Math.pow(points[index].y - q.y, 2))

          if (distance < threshold) {                
              pen.strokeStyle = colours[randomNumber];
              pen.lineWidth = (5 / distance);
              pen.beginPath();
              pen.moveTo(points[index].x, points[index].y);
              pen.lineTo(q.x, q.y);
              pen.stroke();
              // The pen stroke then draws a line over the canvas and then draws it out accordingly. 
          }
      }
  }

  // This function will get a random number from the min to the max and then output it accordingly. 
  function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;

  }
})();*/
//ОРИГИНАЛ
//CHAT GPT //CANVAS NETWORK ЛУЧШИЙ
(function() {
  var canvas;
  var pen;
  var width;
  var height;
  var points = [];
  var threshold = 100;

  document.addEventListener('DOMContentLoaded', function() {
      canvas = document.querySelector('canvas');
      pen = canvas.getContext('2d');
      width = canvas.width;
      height = canvas.height;

      // Используем Intersection Observer для запуска анимации, когда canvas становится видимым
      var observer = new IntersectionObserver(function(entries) {
          if (entries[0].isIntersecting) {
              window.setInterval(draw, 33);
              observer.disconnect(); // Отключаем наблюдателя после начала анимации
          }
      }, { threshold: 0.1 });

      observer.observe(canvas);
  });

  function draw() {
      var q = {
          x: getRandomNumber(0, 499),
          y: getRandomNumber(0, 499),
      };

      for (p = 0; p < 500; p += 1) {
          var p = {
              x: getRandomNumber(0, 499),
              y: getRandomNumber(0, 499)
          }
          points.push(p);
      }

      var colours = ['red', 'yellow', 'orange', 'lightcoral', 'orangered', 'green', 'blue', 'hotpink', 'blue'];
      var randomNumber = getRandomNumber(0, colours.length - 1);
      for (var index = 0; index < points.length; index += 1) {
          var distance = Math.sqrt(Math.pow(points[index].x - q.x, 2) + Math.pow(points[index].y - q.y, 2))

          if (distance < threshold) {
              pen.strokeStyle = colours[randomNumber];
              pen.lineWidth = (5 / distance);
              pen.beginPath();
              pen.moveTo(points[index].x, points[index].y);
              pen.lineTo(q.x, q.y);
              pen.stroke();
          }
      }
  }

  function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
})();
//CHAT GPT///
//ВАРИАНТ ПЕРПЛЕКСИТИ РАБОЧИЙ
/*(function() {
    
  var canvas;
  var pen;
  var width;
  var height;
  var points = [];
  var threshold = 100;
  var animationFrameId;
  var intervalId;
  var index = 0;
  
  document.addEventListener('DOMContentLoaded', init, false);

  function init() {
      canvas = document.querySelector('canvas');
      pen = canvas.getContext('2d');
      width = canvas.width;
      height = canvas.height;
      
      // Создаем Intersection Observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Если canvas видим, запускаем анимацию
            startAnimation();
          } else {
            // Если canvas не видим, останавливаем анимацию
            stopAnimation();
          }
        });
      }, { threshold: 0.1 }); // Запускаем, когда хотя бы 10% элемента видно

      // Начинаем наблюдение за canvas
      observer.observe(canvas);
  }

  function startAnimation() {
    if (!animationFrameId) {
      points = generatePoints(100000);//500 КОЛИЧЕСТВО ТОЧЕК
      index = 0;
      intervalId = setInterval(() => {
        if (index < points.length) {
          drawPoint(points[index]);
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, 5); // Задержка между созданием точек 100
    }
  }

  function stopAnimation() {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  function generatePoints(count) {
    var newPoints = [];
    for (var i = 0; i < count; i++) {
      newPoints.push({
        x: getRandomNumber(0, width - 1),
        y: getRandomNumber(0, height - 1)
      });
    }
    return newPoints;
  }

  function drawPoint(p) {
    var q = {
      x: getRandomNumber(0, width - 1),
      y: getRandomNumber(0, height - 1)
    };

    var colours = ['red', 'yellow', 'orange', 'lightcoral', 'orangered', 'green', 'blue', 'hotpink', 'aqua', 'cyan'];
    var randomNumber = getRandomNumber(0, colours.length - 1);
    var distance = Math.sqrt(Math.pow(p.x - q.x, 2) + Math.pow(p.y - q.y, 2));

    if (distance < threshold) {
      pen.strokeStyle = colours[randomNumber];
      pen.lineWidth = (5 / distance);
      pen.beginPath();
      pen.moveTo(p.x, p.y);
      pen.lineTo(q.x, q.y);
      pen.stroke();
    }
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
})();*/
//ВАРИАНТ ПЕРПЛЕКСИТИ РАБОЧИЙ, НО НЕ ТАК ДОСКОНАЛЬНО, КАК CHAT GPT
//CANVAS NETWORK//

//ТЕМНАЯ И СВЕТЛАЯ ТЕМА ОРИГИНАЛ
/*document.querySelector("#theme_toggle").addEventListener("click", (event) => {

  event.preventDefault();

  document.body.classList.toggle('dark_theme');

  event.target.textContent = document.body.classList.contains('dark_theme') ? 'Light theme' : 'Dark theme';
});*/
//ТЕМНАЯ И СВЕТЛАЯ ТЕМА ОРИГИНАЛ///
//VARIANT 2 MY
// Обработка клика по ссылке
/*const textBlock = document.querySelectorAll('.h4-main-text');//пока не але
document.querySelector("#theme_toggle").addEventListener("click", (event) => {
  event.preventDefault(); // отменяет все обработчики, в том числе и браузерные отличается от eventstopPropagation тем, что вырубает все обработчики, в том числе и браузерные, а eventstopPropagation просто не дает событию всплыть, а обработчик работает
// здесь условия if, else 
  document.querySelector('body').classList.toggle('dark_theme'); 
// метод contains говорит есть ли такая тема или нет, возвращает true или false, если true возвращает, то         
  if (document.querySelector('body').classList.contains('dark_theme')) {
      event.target.textContent = '🌝'; //Light theme/☀ через event.target прописываем Светлая тема'
      theme_toggle.style.color = "yellow";//yellow если прописать текст Light theme, то тогда нужно прописать
      theme_toggle.style.fontSize = "25p";
      textBlock.style.color = 'white';//пока не але
  } else if ('theme_toggle.style.color' !== "Light theme") {//'h1' !== "namber" || 'h1' !== "string"
   //alert('ogo'); 
      theme_toggle.style.color = "#6900cb";//#6900cb если прописать текст Dark theme, то тогда нужно прописать
      event.target.textContent = '🌚'; //Dark theme если нет 'dark_theme', то тогда стави 'Темная тема'
    } 
  });
document.querySelector('#theme_toggle').addEventListener('click', ( event) => { 
event.stopPropagation();
lert('ok');});   

// В обработчике клика мы добавляем или удаляем элементу body класс dark_theme,
// затем проверяем наличие у него этого класса, в зависимости от этого меняем текст самой ссылки.

// Почитать: https://learn.javascript.ru/default-browser-action
// https://learn.javascript.ru/styles-and-classes#classname-i-classlist
// https://learn.javascript.ru/basic-dom-node-properties#textcontent-prosto-tekst
//ТЕМНАЯ И СВЕТЛАЯ ТЕМА
*/
//VARIANT 2 MY///
//CODE PERPLEXITY DARK/LIGHT THEMES ПОДКЛЮЧИЛ В МЕЙН.ДЖС-3, ЧТОБЫ ПЕРЕКЛЮЧАЛКА ЗАРАБОТАЛА И НА ДРУГИХ СТРАНИЦАХ, А НЕ ТОЛЬКО НА ГЛАВНОЙ
/*//const headerColor = document.querySelector('.header');//ЗАКРЫЛ, ПОТОМУ ЧТО СДЕЛАЛ ОДИН ЦВЕТ НА ВСЕХ ТЕМАХ
const textBlocks = document.querySelectorAll('.h5-main-text');
const titleSection = document.querySelectorAll('.sectionTitle');
const textSpanHOne = document.querySelector('.span');
const sectionReviews = document.querySelector('.sectionReviews');
const titleSectionReviews = document.querySelector('.titleSectionReviews');
const titleQuestions = document.querySelectorAll('.title-question');
const pgAnswers = document.querySelectorAll('.pg-answer');
const lableFooterChange = document.querySelector('#label-footer-change');
document.querySelector("#theme_toggle").addEventListener("click", (event) => {
  event.preventDefault(); 
  document.querySelector('body').classList.toggle('dark_theme'); 
  if (document.querySelector('body').classList.contains('dark_theme')) {
    event.target.textContent = '◑'; // 🌝
    event.target.style.transform = 'rotate(0deg)';// 0deg если поставить желтый смайл тогда event.target.style.transform = 'rotate(0deg)'; нужно убрать
    event.target.style.transition = '500ms ease-in-out';
    //headerColor.style.backgroundColor = '#000000';
    textSpanHOne.style.color = '#ffff00';
    textSpanHOne.style.transition = 'color 500ms ease-in-out';
    sectionReviews.style.backgroundColor = '#ffff00';
    lableFooterChange.style.color = "#ffff00";
    //event.target.style.color = "yellow";
    //event.target.style.fontSize = "25p";*
    // Изменяем цвет текста для всех элементов с классом 'h4-main-text'
    textBlocks.forEach(textBlock => {
      textBlock.style.color = '#ffff00';
      textBlock.style.transition = 'color 500ms ease-in-out';
    });
    titleSection.forEach(titleSection => {
      titleSection.style.color = '#ffff00';
      titleSection.style.transition = 'color 500ms ease-in-out';
      titleSectionReviews.style.color = '#28004d';//#FDFDFD хотел сделать в темной теме белый цвет заголовку, но он не очень смотрится, чтобы его не удалять, оставил ему темный цвет, который у него в светлой теме
    });
    titleQuestions.forEach(titleQuestions => {
      titleQuestions.style.color = '#ffff00';
      titleQuestions.style.transition = 'color 500ms ease-in-out';
    });
    pgAnswers.forEach(pgAnswers => {
      pgAnswers.style.color = '#FDFDFD';
      pgAnswers.style.transition = 'color 500ms ease-in-out';
    });
  } else {
    event.target.textContent = '◑'; //🌚
    event.target.style.transform = 'rotate(-180deg)';// 180deg если поставить серый смайл тогда event.target.style.transform = 'rotate(0deg)'; нужно убрать
    event.target.style.transition = '500ms ease-in-out';
    //headerColor.style.backgroundColor = '#000';
    textSpanHOne.style.color = '#28004d';// Возвращаем стандартный цвет
    textSpanHOne.style.transition = 'color 500ms ease-in-out';
    sectionReviews.style.backgroundColor = '#FDFDFD';// Возвращаем стандартный цвет
    lableFooterChange.style.color = "#FDFDFD";//Возвращаем стандартный цвет
    //event.target.style.color = ""; // Возвращаем стандартный цвет нужно если текст Светлая тема или Темная
    //event.target.style.fontSize = ""; // Возвращаем стандартный размер
    // Возвращаем стандартный цвет текста для всех элементов с классом 'h4-main-text'
    textBlocks.forEach(textBlock => {
      textBlock.style.color = '#28004d';// Возвращаем стандартный цвет 
      textBlock.style.transition = 'color 500ms ease-in-out';
    });
    titleSection.forEach(titleSection => {
      titleSection.style.color = '#FDFDFD';//Возвращаем стандартный цвет 
      titleSection.style.transition = 'color 500ms ease-in-out';
      titleSectionReviews.style.color = '#28004d';// Возвращаем стандартный цвет
    });
    titleQuestions.forEach(titleQuestions => {
      titleQuestions.style.color = '#FDFDFD';
      titleQuestions.style.transition = 'color 500ms ease-in-out';
    });
    pgAnswers.forEach(pgAnswers => {
      pgAnswers.style.color = '#28004d';
      pgAnswers.style.transition = 'color 500ms ease-in-out';
    });
  }
});
document.querySelector('#theme_toggle').addEventListener('click', (event) => { 
  event.stopPropagation();
});*/
//CODE PERPLEXITY DARK/LIGHT THEMES ПОДКЛЮЧИЛ В МЕЙН.ДЖС-3, ЧТОБЫ ПЕРЕКЛЮЧАЛКА ЗАРАБОТАЛА И НА ДРУГИХ СТРАНИЦАХ, А НЕ ТОЛЬКО НА ГЛАВНОЙ///
//УСОВЕРШЕНСТВОВАННЫЙ
// Функция для применения темы
function applyTheme(isDarkTheme) {
  document.body.classList.toggle('dark_theme', isDarkTheme);
  
  const themeToggle = document.querySelector("#theme_toggle");
  if (themeToggle) {
    themeToggle.textContent = isDarkTheme ? '◑' : '◑';
    themeToggle.style.transform = isDarkTheme ? 'rotate(0deg)' : 'rotate(-180deg)';
    themeToggle.style.transition = '500ms ease-in-out';
  }
  // Объект с селекторами и их стилями для темной и светлой тем
  const elementsToStyle = {
    '.span': { dark: '#ffff00', light: '#28004d' },
    '.sectionReviews': { dark: '#ffff00', light: '#FDFDFD', property: 'backgroundColor' },
    '#label-footer-change': { dark: '#ffff00', light: '#FDFDFD' },
    '.h5-main-text': { dark: '#ffff00', light: '#28004d' },
    '.sectionTitle': { dark: '#ffff00', light: '#FDFDFD' },
    '.titleSectionReviews': { dark: '#28004d', light: '#28004d' },
    '.title-question': { dark: '#ffff00', light: '#FDFDFD' },
    '.pg-answer': { dark: '#FDFDFD', light: '#28004d' }
  };
  // Применение стилей
  for (const [selector, styles] of Object.entries(elementsToStyle)) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      const property = styles.property || 'color';
      element.style[property] = isDarkTheme ? styles.dark : styles.light;
      element.style.transition = `${property} 500ms ease-in-out`;
    });
  }
}
// Функция для установки темы и сохранения в localStorage
function setTheme(isDarkTheme) {
  applyTheme(isDarkTheme);
  localStorage.setItem('darkTheme', isDarkTheme);
}
// Инициализация темы при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('darkTheme');
  const isDarkTheme = savedTheme === 'true';
  setTheme(isDarkTheme);
  // Обработчик клика по переключателю темы
  const themeToggle = document.querySelector("#theme_toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const newTheme = !document.body.classList.contains('dark_theme');
      setTheme(newTheme);
    });
  }
});
//УСОВЕРШЕНСТВОВАННЫЙ///
//CODE PERPLEXITY DARK/LIGHT THEMES///

//МОЙ САМЫЙ ПЕРВЫЙ CЛАЙДЕР REVIEWS ОРИГИНАЛ
//NO AUTOMATE
let slideIndexx = 1;
        
function positionSlidess(n) {
  showSlidess(slideIndexx += n);
} 

function currentSlidee(n) {
  showSlidess(slideIndexx = n);
}

function showSlidess(n) {
  let slidess = document.getElementsByClassName("mySlidess");
  let dotass = document.getElementsByClassName("dotass"); //здесь заменил dots на dotas во всем коде

  if (n > slidess.length) {slideIndexx = 1}    
  if (n < 1) {slideIndexx = slidess.length}
  for (let i = 0; i < slidess.length; i++) {
    slidess[i].style.display = "none";  
  }
  for (let i = 0; i < dotass.length; i++) {
    dotass[i].className = dotass[i].className.replace(" active", "");
  }
    slidess[slideIndexx-1].style.display = "block";  
    dotass[slideIndexx-1].className += " active";
}

showSlidess(slideIndexx);

const btnPrevv = document.querySelector(".btn-prevv");
const btnNextt = document.querySelector(".btn-nextt");

btnPrevv.addEventListener("click", () => {positionSlidess(-1);});
btnNextt.addEventListener("click", () => {positionSlidess(1);});
//ОРИГИНАЛ///
//КОД 1 ПЕРПЛЕКСИТИ ДОБАВЛЕН СВАЙП, ЧТОБ ПОЛЬЗОВАТЕЛЬ МОГ ПРОКРУЧИВАТЬ СЛАЙДЕР И ПАЛЬЦАМИ НА ТЕЛЕФОНЕ
/*let slideIndexx = 1;
let touchStartX = 0;
let touchEndX = 0;

function positionSlidess(n) {
  showSlidess(slideIndexx += n);
}

function currentSlidee(n) {
  showSlidess(slideIndexx = n);
}

function showSlidess(n) {
  let slidess = document.getElementsByClassName("mySlidess");
  let dotass = document.getElementsByClassName("dotass");

  if (n > slidess.length) {slideIndexx = 1}    
  if (n < 1) {slideIndexx = slidess.length}
  for (let i = 0; i < slidess.length; i++) {
    slidess[i].style.display = "none";  
  }
  for (let i = 0; i < dotass.length; i++) {
    dotass[i].className = dotass[i].className.replace(" active", "");
  }
  slidess[slideIndexx-1].style.display = "block";  
  dotass[slideIndexx-1].className += " active";
}

showSlidess(slideIndexx);

const btnPrevv = document.querySelector(".btn-prevv");
const btnNextt = document.querySelector(".btn-nextt");
const sliderContainer = document.querySelector(".slider-container"); // Добавьте этот класс к контейнеру слайдера

btnPrevv.addEventListener("click", () => {positionSlidess(-1);});
btnNextt.addEventListener("click", () => {positionSlidess(1);});

// Добавляем обработчики событий для свайпа
sliderContainer.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

sliderContainer.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50; // Минимальное расстояние свайпа для переключения слайда
  if (touchEndX < touchStartX - swipeThreshold) {
    // Свайп влево
    positionSlidess(1);
  } else if (touchEndX > touchStartX + swipeThreshold) {
    // Свайп вправо
    positionSlidess(-1);
  }
}
*/
//КОД ДЛЯ РАБОТЫ СВАЙПЕРА 1 ПЕРПЛЕКСИТИ ПРОИСХОДИТ КОНФЛИКТ С АККОРДЕОНСОМ ВОПРОСЫ///
//КОД ДЛЯ РАБОТЫ СВАЙПЕРА 2 ПЕРПЛЕКСИТИ ПРОИСХОДИТ КОНФЛИКТ С АККОРДЕОНСОМ ВОПРОСЫ
/*let slideIndexx = 1;
let touchStartX = 0;
let touchEndX = 0;
let touchMoveX = 0;
let isSwipeInProgress = false;

function positionSlidess(n) {
  showSlidess(slideIndexx += n);
}

function currentSlidee(n) {
  showSlidess(slideIndexx = n);
}

function showSlidess(n) {
  let slidess = document.getElementsByClassName("mySlidess");
  let dotass = document.getElementsByClassName("dotass");

  if (n > slidess.length) {slideIndexx = 1}    
  if (n < 1) {slideIndexx = slidess.length}
  for (let i = 0; i < slidess.length; i++) {
    slidess[i].style.display = "none";  
  }
  for (let i = 0; i < dotass.length; i++) {
    dotass[i].className = dotass[i].className.replace(" active", "");
  }
  slidess[slideIndexx-1].style.display = "block";  
  dotass[slideIndexx-1].className += " active";
}

showSlidess(slideIndexx);

const btnPrevv = document.querySelector(".btn-prevv");
const btnNextt = document.querySelector(".btn-nextt");
const sliderContainer = document.querySelector(".slider-container");

btnPrevv.addEventListener("click", () => {positionSlidess(-1);});
btnNextt.addEventListener("click", () => {positionSlidess(1);});

sliderContainer.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
  isSwipeInProgress = true;
});

sliderContainer.addEventListener('touchmove', (e) => {
  if (isSwipeInProgress) {
    touchMoveX = e.changedTouches[0].screenX;
    e.preventDefault(); // Предотвращаем прокрутку страницы
  }
});

sliderContainer.addEventListener('touchend', (e) => {
  if (isSwipeInProgress) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    isSwipeInProgress = false;
  }
});

function handleSwipe() {
  const swipeThreshold = 50;
  const swipeDistance = touchEndX - touchStartX;
  const swipeDuration = touchEndX - touchMoveX;

  if (Math.abs(swipeDistance) > swipeThreshold && Math.abs(swipeDuration) < 300) {
    if (swipeDistance < 0) {
      positionSlidess(1); // Свайп влево
    } else {
      positionSlidess(-1); // Свайп вправо
    }
  }
}*/
//КОД ДЛЯ РАБОТЫ СВАЙПЕРА 2 ПЕРПЛЕКСИТИ///
//ДОБАВЛЕН СВАЙП, ЧТОБ ПОЛЬЗОВАТЕЛЬ МОГ ПРОКРУЧИВАТЬ СЛАЙДЕР И ПАЛЬЦАМИ НА ТЕЛЕФОНЕ
//ЧАТ ДЖИ ПИ ТИ ПРОИСХОДИТ КОНФЛИКТ С АККОРДЕОНСОМ ВОПРОСЫ
/*let slideIndexx = 1;

function positionSlidess(n) {
  showSlidess(slideIndexx += n);
}

function currentSlidee(n) {
  showSlidess(slideIndexx = n);
}

function showSlidess(n) {
  let slidess = document.getElementsByClassName("mySlidess");
  let dotass = document.getElementsByClassName("dotass");

  if (n > slidess.length) { slideIndexx = 1 }
  if (n < 1) { slideIndexx = slidess.length }
  for (let i = 0; i < slidess.length; i++) {
    slidess[i].style.display = "none";
  }
  for (let i = 0; i < dotass.length; i++) {
    dotass[i].className = dotass[i].className.replace(" active", "");
  }
  slidess[slideIndexx - 1].style.display = "block";
  dotass[slideIndexx - 1].className += " active";
}

showSlidess(slideIndexx);

const btnPrevv = document.querySelector(".btn-prevv");
const btnNextt = document.querySelector(".btn-nextt");

btnPrevv.addEventListener("click", () => { positionSlidess(-1); });
btnNextt.addEventListener("click", () => { positionSlidess(1); });

// Swipe detection
let startX = 0;
let endX = 0;
const threshold = 50; // Minimum distance to be considered a swipe

const slider = document.querySelector(".slider-container");

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX;
});

slider.addEventListener("touchend", () => {
  if (startX - endX > threshold) {
    positionSlidess(1); // Swipe left to navigate to the next slide
  } else if (endX - startX > threshold) {
    positionSlidess(-1); // Swipe right to navigate to the previous slide
  }
});*/
//ЧАТ ДЖИ ПИ ТИ 
//NO AUTOMATE///
//МОЙ САМЫЙ ПЕРВЫЙ CЛАЙДЕР REVIEWS///

/* ЧТОБЫ ФОТО В СЛАЙДЕРЕ НЕ ПРЫГАЛИ
function preloadImages() {
  const images = document.querySelectorAll('.img-reviews');
  images.forEach(img => {
    const src = img.getAttribute('src');
    const newImg = new Image();
    newImg.src = src;
  });
}

window.addEventListener('load', preloadImages);
//ЧТОБЫ ФОТО В СЛАЙДЕРЕ НЕ ПРЫГАЛИ ??? 
*/

//ACCORDIONS FAQ ОТКЛЮЧИЛ ВО ВСЕХ ФАЙЛАХ, ПОТОМУ ЧТО ЕСТЬ ДЕЙСТВУЮЩИЙ
/*//ВСЕ ОКНА МОГУТ ПРИ КЛИКЕ ОТКРЫВАТЬСЯ, НО ПРЕДЫДУЩЕЕ НЕ ЗАКРЫВАЕТСЯ
const accc = document.getElementsByClassName("contentBxx");
for (i = 0; i < accc.length; i++) {
  accc[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
//ВСЕ ОКНА МОГУТ ПРИ КЛИКЕ ОТКРЫВАТЬСЯ, НО ПРЕДЫДУЩЕЕ НЕ ЗАКРЫВАЕТСЯ
*/

//ПРИ КЛИКЕ ОДИН ОТКРЫВАЕТСЯ, ДРУГОЙ ЗАКРЫВАЕТСЯ
/*const accc = document.getElementsByClassName("contentBxx");

for (let i = 0; i < accc.length; i++) {
  accc[i].addEventListener("click", function () {
    // Закрываем все открытые аккордеоны
    for (let j = 0; j < accc.length; j++) {
      if (accc[j] !== this && accc[j].classList.contains("active")) {
        accc[j].classList.remove("active");
      }
    }
    // Переключаем класс "active" для текущего аккордеона
    this.classList.toggle("active");
  });
}*/
////ПРИ КЛИКЕ ОДИН ОТКРЫВАЕТСЯ, ДРУГОЙ ЗАКРЫВАЕТСЯ
//ACCORDIONS FAQ ОТКЛЮЧИЛ ВО ВСЕХ ФАЙЛАХ, ПОТОМУ ЧТО ЕСТЬ ДЕЙСТВУЮЩИЙ///

//ACCORDIONS FAQ ДЕЙСТВУЮЩИЙ
let questions = document.querySelectorAll(".faq_question");

      questions.forEach((question) => {
        let icon = question.querySelector(".icon-shape");

        question.addEventListener("click", (event) => {
          const active = document.querySelector(".faq_question.active");
          const activeIcon = document.querySelector(".icon-shape.active");

          if (active && active !== question) {
            active.classList.toggle("active");
            activeIcon.classList.toggle("active");
            active.nextElementSibling.style.maxHeight = 0;
          }

          question.classList.toggle("active");
          icon.classList.toggle("active");

          const answer = question.nextElementSibling;

          if (question.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
          } else {
            answer.style.maxHeight = 0;
          }
        });
      });   
//ACCORDIONS FAQ ДЕЙСТВУЮЩИЙ///

//BG СЕКЦИИ PRICE БЕСКОНЕЧНЫЕ КУБИКИ
//ОРИГИНАЛ https://codepen.io/porsake/pen/ZEyapXY
let colors = ["#2196f3", "#e91e63", "#ffeb3b", "#74ff1d", "#28004d", "#FDFDFD", "#14fef7", "#333"];
function createSquare() {
  const figure = document.querySelector(".cubiks");//section
  const square = document.createElement("i");// в скобки поставить i ( теги подходящие для этой анимации i div em mark strong span) 
  let size = Math.random() * 50;// * 50
  square.style.width = 20 + size + "px";
  square.style.height = 20 + size + "px";
  let bg = colors[Math.floor(Math.random() * colors.length)];
  square.style.background = bg;
  square.style.top = Math.random() * innerHeight + "px";
  square.style.left = Math.random() * innerWidth + "px";
  figure.appendChild(square);

  setTimeout(() => {
    square.remove();
  }, 5000);
}
setInterval(createSquare, 150);
//ОРИГИНАЛ///
//CODЕ PERPLEXITY РАБОЧИЙ НА ЗАМЕНУ ОРИГИНАЛА ЕСЛИ НУЖНО БУДЕТ///
/*let colors = ["#2196f3", "#e91e63", "#ffeb3b", "#74ff1d"];

function createSquare() {
  const figure = document.querySelector(".cubiks");
  const square = document.createElement("i"); // div i mark em strong b span

  let size = Math.random() * 50;
  square.style.width = 20 + size + "px";
  square.style.height = 20 + size + "px";
  
  let bg = colors[Math.floor(Math.random() * colors.length)];
  square.style.background = bg;
  
  square.style.position = "absolute"; // Добавлено абсолютное позиционирование
  square.style.top = Math.random() * innerHeight + "px";
  square.style.left = Math.random() * innerWidth + "px";
  
  square.style.borderRadius = "50%"; // Добавлено для создания круглой формы
  square.style.opacity = "0"; // Начальная прозрачность
  square.style.transition = "all 0.5s ease"; // Добавлен переход для плавного появления

  figure.appendChild(square);

  // Задержка для запуска анимации появления
  setTimeout(() => {
    square.style.opacity = "0.7"; // Конечная прозрачность
  }, 10);

  setTimeout(() => {
    square.style.opacity = "0"; // Начало исчезновения
    setTimeout(() => {
      square.remove(); // Удаление элемента после исчезновения
    }, 500);
  }, 4500);
}
setInterval(createSquare, 150);
//CODЕ PERPLEXITY РАБОЧИЙ НА ЗАМЕНУ ОРИГИНАЛА ЕСЛИ НУЖНО БУДЕТ///
//БГ СЕКЦИИ БЕСКОНЕЧНЫЕ КУБИКИ
*/
//БГ СЕКЦИИ PRICE БЕСКОНЕЧНЫЕ КУБИКИ///

//SCRIPT FOR FORM НЕ РАБОЧИЙ
/*document.querySelector('.form-contact-me').addEventListener('submit', function(e) {
  e.preventDefault();
  
  let formData = new FormData(this);
  
  fetch('process_form.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    console.log('Success:', data);
    // Показать сообщение об успешной отправке
  })
  .catch((error) => {
    console.error('Error:', error);
    // Показать сообщение об ошибке
  });
});*/
//SCRIPT FOR FORM///

////MY FIRST SLIDER СЕКЦИЯ ЦИТАТЫ
//AUTOMAT 
//ORIGIN
/*let slideIndexxx = 0;
showSlidesss();

function showSlidesss() {
  let i;
  let slidesss = document.getElementsByClassName("mySlidesss");
  let dotsss = document.getElementsByClassName("dotasss");
  for (i = 0; i < slidesss.length; i++) {
    slidesss[i].style.display = "none";
  }
  slideIndexxx++;
  if (slideIndexxx > slidesss.length) {slideIndexxx = 1}    
  for (i = 0; i < dotsss.length; i++) {
    dotsss[i].className = dotsss[i].className.replace(" active", "");
  }
  slidesss[slideIndexxx-1].style.display = "block";  
  dotsss[slideIndexxx-1].className += " active";
  setTimeout(showSlidesss, 5000); // Change image every 2 seconds
}*/
//ORIGIN////

//СЛАЙДЫ УХОДЯТ СПРАВО НАЛЕВО
//VARIANT-1
let slideIndexxx = 0;
showSlidesss();

function showSlidesss() {
  let i;
  let slidesss = document.getElementsByClassName("mySlidesss");
  let dotsss = document.getElementsByClassName("dotasss");
  
  // Скрываем текущий слайд
  if (slideIndexxx > 0) {
    slidesss[slideIndexxx - 1].style.animation = 'slideOutLeft 0.9s forwards';// both
  }
  
  slideIndexxx++;
  if (slideIndexxx > slidesss.length) {slideIndexxx = 1}
  
  for (i = 0; i < dotsss.length; i++) {
    dotsss[i].className = dotsss[i].className.replace(" active", "");
  }
  
  // Показываем новый слайд
  slidesss[slideIndexxx-1].style.display = "block";
  slidesss[slideIndexxx-1].style.animation = 'slideInRight 0.9s forwards';// both
  dotsss[slideIndexxx-1].className += " active";
  
  setTimeout(showSlidesss, 5000); // Меняем изображение каждые 5 секунд
}
//VARIANT-1////

//VARIANT-2ПОКА НЕ АЛЕ
/*function showSlidesss() {
  let slidesss = document.getElementsByClassName("mySlidesss");
  let dotsss = document.getElementsByClassName("dotasss");
  
  // Скрываем текущий слайд
  if (slideIndexxx > 0) {
    slidesss[slideIndexxx - 1].style.opacity = 0;
    slidesss[slideIndexxx - 1].style.zIndex = 0;
  }
  
  slideIndexxx++;
  if (slideIndexxx > slidesss.length) {slideIndexxx = 1}
  
  for (let i = 0; i < dotsss.length; i++) {
    dotsss[i].className = dotsss[i].className.replace(" active", "");
  }
  
  // Показываем новый слайд
  slidesss[slideIndexxx-1].style.opacity = 1;
  slidesss[slideIndexxx-1].style.zIndex = 1;
  dotsss[slideIndexxx-1].className += " active";
  
  setTimeout(showSlidesss, 5000);
}*/
//VARIANT -2 ПОКА НЕ АЛЕ

//Предзагрузка изображений: Чтобы избежать проблем с загрузкой, предзагрузите все изображения:
function preloadImages() {
  let slidesss = document.getElementsByClassName("mySlidesss");
  for (let i = 0; i < slidesss.length; i++) {
    let img = new Image();
    img.src = slidesss[i].querySelector('img').src;
  }
}
window.onload = preloadImages;
//Предзагрузка изображений///
//СЛАЙДЫ УХОДЯТ СПРАВА НАЛЕВО
//AUTOMATE
////MY FIRST SLIDER СЕКЦИЯ ЦИТАТЫ//////////////////////////////////

//SECTION LIKE HORISONTAL SCROLL SWIP
//ТОЛЬКО ДЛЯ МОБИЛОК И ПЛАНШЕТОВ
/*const container = document.querySelector('.block-items-like');

container.addEventListener('touchstart', handleTouchStart, false);        
container.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;                                                        
let yDown = null;

function getTouches(evt) {
  return evt.touches ||             // браузер DOM
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    let xUp = evt.touches[0].clientX;                                    
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*
        if ( xDiff > 0 ) {
            /* свайп влево *
            container.scrollLeft += 200;
        } else {
            /* свайп вправо *
            container.scrollLeft -= 200;
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* свайп вверх *
        } else { 
            /* свайп вниз *
        }                                                                 
    }
    /* сбрасываем значения *
    xDown = null;
    yDown = null;                                             
};*/
//ТОЛЬКО ДЛЯ МОБИЛОК И ПЛАНШЕТОВ///

//ДЛЯ ВСЕХ ДЕВАЙСОВ КРОМЕ БОЛЬШИХ РАЗРЕШЕНИЙ
const container = document.querySelector('.block-items-like');

// Обработка свайпов на мобильных устройствах
container.addEventListener('touchstart', handleTouchStart, false);        
container.addEventListener('touchmove', handleTouchMove, false);

// Обработка свайпов на компьютерах с помощью мыши
container.addEventListener('mousedown', handleMouseDown, false);
container.addEventListener('mousemove', handleMouseMove, false);
container.addEventListener('mouseup', handleMouseUp, false);

let xDown = null;
let yDown = null;
let isMouseDown = false;

function getTouches(evt) {
  return evt.touches ||             // браузер DOM
         evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
}

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    let xUp = evt.touches[0].clientX;                                    
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* свайп влево */
            container.scrollLeft += 200;//200
        } else {
            /* свайп вправо */
            container.scrollLeft -= 200;//200
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* свайп вверх */
        } else { 
            /* свайп вниз */
        }                                                                 
    }
    /* сбрасываем значения */
    xDown = null;
    yDown = null;                                             
}

function handleMouseDown(evt) {
    isMouseDown = true;
    xDown = evt.clientX;
    yDown = evt.clientY;
}

function handleMouseMove(evt) {
    if (!isMouseDown || !xDown || !yDown) {
        return;
    }

    let xUp = evt.clientX;
    let yUp = evt.clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            /* свайп влево */
            container.scrollLeft += 200;//200
        } else {
            /* свайп вправо */
            container.scrollLeft -= 200;//200
        }
    } else {
        if (yDiff > 0) {
            /* свайп вверх */
        } else {
            /* свайп вниз */
        }
    }

    xDown = null;
    yDown = null;
}

function handleMouseUp() {
    isMouseDown = false;
}
//ДЛЯ ВСЕХ ДЕВАЙСОВ КРОМЕ БОЛЬШИХ РАЗРЕШЕНИЙ///

//ДЛЯ ВСЕХ УСТРОЙСТВ И КОМПЬЮТЕРОВ СВЫШЕ 1300ПИКСЕЛЕЙ. ПОКА НЕ РАБОТАЕТ
/*const container = document.querySelector('.block-items-like');

// Обработка свайпов на мобильных устройствах
container.addEventListener('touchstart', handleTouchStart, false);        
container.addEventListener('touchmove', handleTouchMove, false);

// Обработка свайпов на компьютерах с помощью мыши
container.addEventListener('mousedown', handleMouseDown, false);
container.addEventListener('mousemove', handleMouseMove, false);
container.addEventListener('mouseup', handleMouseUp, false);

let xDown = null;
let yDown = null;
let isMouseDown = false;

function getTouches(evt) {
  return evt.touches ||             // браузер DOM
         evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
}

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    let xUp = evt.touches[0].clientX;                                    
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*
        if ( xDiff > 0 ) {
            /* свайп влево *
            container.scrollLeft += 200;
        } else {
            /* свайп вправо *
            container.scrollLeft -= 200;
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* свайп вверх *
        } else { 
            /* свайп вниз *
        }                                                                 
    }
    /* сбрасываем значения *
    xDown = null;
    yDown = null;                                             
}

function handleMouseDown(evt) {
    isMouseDown = true;
    xDown = evt.clientX;
    yDown = evt.clientY;
}

function handleMouseMove(evt) {
    if (!isMouseDown || !xDown || !yDown) {
        return;
    }

    let xUp = evt.clientX;
    let yUp = evt.clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            /* свайп влево *
            container.scrollLeft += 200;
        } else {
            /* свайп вправо *
            container.scrollLeft -= 200;
        }
    } else {
        if (yDiff > 0) {
            /* свайп вверх *
        } else {
            /* свайп вниз *
        }
    }

    xDown = null;
    yDown = null;
}

function handleMouseUp() {
    isMouseDown = false;
}

// Проверяем размер экрана и включаем/выключаем обработчики событий мыши
function checkScreenSize() {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1300) {
    container.addEventListener('mousedown', handleMouseDown, false);
    container.addEventListener('mousemove', handleMouseMove, false);
    container.addEventListener('mouseup', handleMouseUp, false);
  } else {
    container.removeEventListener('mousedown', handleMouseDown);
    container.removeEventListener('mousemove', handleMouseMove);
    container.removeEventListener('mouseup', handleMouseUp);
  }
}

// Вызываем функцию при загрузке страницы и при изменении размера окна
window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);
*/
//ДЛЯ ВСЕХ УСТРОЙСТВ И КОМПЬЮТЕРОВ СВЫШЕ 1300ПИКСЕЛЕЙ. ПОКА НЕ РАБОТАЕТ///
//SECTION LIKE HORISONTAL SCROLL SWIP///

//ДЛЯ ПЛАВНОГО БИХЕВИОР СКРОЛА ПО СТРАНИЦЕ
function smoothScroll(target, duration) {
  const targetPosition = target.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}
// Использование:
const target = document.querySelector('#target-element');
smoothScroll(target, 1000); // 1000 мс для анимации
//ДЛЯ ПЛАВНОГО БИХЕВИОР СКРОЛА ПО СТРАНИЦЕ///

//СКРИПТ ДЛЯ СМЕНЫ ЯЗЫКА ПЕРПЛЕКСИТИ
// Объекты с текстовыми строками для разных языков
/*const texts = {
  en: {
    header: "Welcome to our website",
    paragraph: "This is a paragraph of text.",
    button: "Click me"
  },
  ru: {
    header: "Добро пожаловать на наш сайт",
    paragraph: "Это абзац текста.",
    button: "Нажми меня"
  }
};

// Получаем элементы, которые нужно перевести
const header = document.querySelector("h1");
const paragraph = document.querySelector("p");
const button = document.querySelector("button");

// Функция для смены языка
function changeLanguage(lang) {
  header.textContent = texts[lang].header;
  paragraph.textContent = texts[lang].paragraph;
  button.textContent = texts[lang].button;
}

// Добавляем обработчик клика на кнопку
const languageButton = document.querySelector("#language-button");
languageButton.addEventListener("click", () => {
  const currentLanguage = languageButton.textContent.toLowerCase();
  const newLanguage = currentLanguage === "en" ? "ru" : "en";
  changeLanguage(newLanguage);
  languageButton.textContent = newLanguage.toUpperCase();
});*/
//СКРИПТ ДЛЯ СМЕНЫ ЯЗЫКА

//MAP
/*document.addEventListener('DOMContentLoaded', () => {
  const areas = document.querySelectorAll('area');
  const tooltip = document.getElementById('tooltip');

  areas.forEach(area => {
      area.addEventListener('mouseover', (event) => {
          const title = event.target.getAttribute('data-title');
          tooltip.textContent = title;
          tooltip.style.display = 'block';
      });

      area.addEventListener('mousemove', (event) => {
          tooltip.style.left = event.pageX + 10 + 'px';
          tooltip.style.top = event.pageY + 10 + 'px';
      });

      area.addEventListener('mouseout', () => {
          tooltip.style.display = 'none';
      });
  });
});*/
//MAP///

//КОД МЕДИАЗАПРОСЫ
//СЕКЦИЯ ВОПРОСЫ
//КОД ДЛЯ ФОТО ПОЗИЦИИ СТИКИ
/*document.addEventListener('DOMContentLoaded', function() {
  const stickyPhoto = document.querySelector('.filter-myPhotoFaq');
  const stickyWrapper = document.querySelector('.wrapp-sticky-photo');

  function adjustStickyPosition() {
      if (window.matchMedia("(max-width: 1199px)").matches) {
          const wrapperRect = stickyWrapper.getBoundingClientRect();
          const photoRect = stickyPhoto.getBoundingClientRect();
          const maxTop = wrapperRect.height - photoRect.height;

          if (wrapperRect.top < 0) {
              const newTop = Math.min(Math.max(-wrapperRect.top, 0), maxTop);
              stickyPhoto.style.top = `${newTop}px`;
          } else {
              stickyPhoto.style.top = '0';
          }
      } else {
          stickyPhoto.style.top = '';
      }
  }

  if (window.matchMedia("(max-width: 1199px)").matches) {
      window.addEventListener('scroll', adjustStickyPosition);
      window.addEventListener('resize', adjustStickyPosition);
      adjustStickyPosition();
  }
});*/
//КОД ДЛЯ ФОТО ПОЗИЦИИ СТИКИ///
//СЕКЦИЯ ВОПРОСЫ///
//КОД МЕДИАЗАПРОСЫ///

//PAGE THREE SKILLS
//ДВИЖЕНИЕ И ОСТАНОВКА ФОТО СКИДКА В ЦСС ВСЕ РАБОТАЕТ И БЕЗ ЭТОГО КОДА
document.addEventListener('DOMContentLoaded', function() {
  const elementDiscoynt = document.querySelector('.filter-img-discount');

  elementDiscount.addEventListener('mouseenter', function() {
      this.style.animationPlayState = 'paused';
  });

  elementDiscount.addEventListener('mouseleave', function() {
      this.style.animationPlayState = 'running';
  });
});
//ДВИЖЕНИЕ И ОСТАНОВКА ФОТО СКИДКА///
//PAGE THREE SKILLS///


//SLIDER Congratulation BROTHER SITE
/*var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
  controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,11000);//время сменки фото

function nextSlide(){
  goToSlide(currentSlide+1);
}

function previousSlide(){
  goToSlide(currentSlide-1);
}

function goToSlide(n){
  slides[currentSlide].className = 'slide';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'slide showing';
}

var playing = true;
var pauseButton = document.getElementById('pause');
//pauseButton.style.position = "absolute";
pauseButton.style.width = "833px";
pauseButton.style.height = "67px";
pauseButton.style.top = "185px";
pauseButton.style.left = "449px";
pauseButton.style.transform = "rotate(0deg)";
pauseButton.style.borderRadius = "115p";

function pauseSlideshow(){
  pauseButton.innerHTML = '&#9658;'; // play character
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow(){
  pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
  playing = true;
  slideInterval = setInterval(nextSlide,11000);// время сменки фото
}

pauseButton.onclick = function(){
  if(playing){ pauseSlideshow(); }
  else{ playSlideshow(); }
};

var next = document.getElementById('next');
next.onclick = function(){
  pauseSlideshow();
  nextSlide();
};
//next.style.position = "absolute";
next.style.width = "56px";
next.style.height = "64px";
next.style.top = "217px";
next.style.left = "879px";

var previous = document.getElementById('previous');
previous.onclick = function(){
  pauseSlideshow();
  previousSlide(); 
};
//previous.style.position = "absolute";
previous.style.width = "56px";
previous.style.height = "64px";
previous.style.top = "217px";
previous.style.left = "30px";
//previous.style.transform = "rotate(180deg)"; ?width: 56px; height: 64px; top: 217px;
///СЛАЙДЕР BROTHER SITE*/