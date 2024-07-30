//СОВЕТУЕТ ПЕРФЛЕКСИТИ ИЗМЕНИТЬ НАЗВАНИЯ
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
////////////
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
  ////

  //СОВЕТУЕТ ПЕРФЛЕКСИТИ ИЗМЕНИТЬ НАЗВАНИЯ
  //Chat
const menuToggleBtn = document.querySelector(".menu-toggle");//menuToggle
const navMenu = document.querySelector(".nav-menu");//menu
  
menuToggleBtn.addEventListener("click", /*function*/ () => {/*можно перед () прописать function, но тогда стрелку => убрать*/
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      //menu.style.transition = 'transform 500ms easy-in-out';
    } else {
      navMenu.classList.add("active");
     // menu.style.transition = 'transform 500ms easy-in-out';
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
    //techServiceDialog.style.transition = 'opacity 500ms easy-in-out' я мастерю
    sendBtn.disabled = false;
    sendBtn.textContent = "Send";//Отправить
    input.value = "";
});
  
sendBtn.addEventListener("click", function (e) {
    e.preventDefault();
    this.textContent = "Sent";//Отправлено
    this.disabled = true;
    input.value = "";
});
//Chat//

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
document.getElementsByTagName("h5")[0].style.fontSize = "24px";
const touchElement = document.querySelector(".touch");
// Автоматически добавляем класс при загрузке страницы load для window (в место mousemove), который автоматически добавляет класс touch--magic элементу при загрузке страницы.
window.addEventListener('load', () => {
  touchElement.classList.add('touch--magic');
});
//ДВИГАЮЩАЯСЯ РУКА АВТОМАТ///

/*Сайдбар*/ 
/*function openLeftMenu() {
  document.getElementById("leftMenu").style.display = "block";
}
function closeLeftMenu() {
  document.getElementById("leftMenu").style.display = "none";
}*/

function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
  document.getElementById("rightMenu").style.display = "none";
}
/*/Сайдбар*/ 

//ACCORDIONS
//ACCORDIONS CLOSE
/*const acc = document.getElementsByClassName("contentBx");// если отключить, то он все-равно будет в свернутом виде и открытых плиток не получится
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}*/
///////////
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
/////////////
/////ACCORDIONS////////

//ЧТОБ НЕ БЫЛО ПРОКРУТКИ У БОДИ, КОГДА СКРОЛЮ КОНТЕНТ АККОРДЕОНСА, ПОКА НЕ АЛЁ
const accordionHeaders = document.querySelectorAll('.accordion');
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                item.classList.toggle('active');
                document.body.classList.toggle('no-scroll');
            });
        });
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
  let dots = document.getElementsByClassName("dot");  

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

showSlides(slideIndex);

const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

btnPrev.addEventListener("click", () => {positionSlides(-1);});
btnNext.addEventListener("click", () => {positionSlides(1);});
//NO AUTOMATE///

/*
//AUTOMAT
let slideIndex = 0;
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
}
//AUTOMATE
*/
////MY FIRST SLIDER//////////////////////////////////