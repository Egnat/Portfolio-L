//ПЕРЕКЛЮЧЕНИЕ ТЕМ
const lableFooterChange = document.querySelector('#label-footer-change');
const summaryFiveCausesSectionTree = document.querySelectorAll('#summary-block-five-causes');
const bigPgFiveCausesSectionTree = document.querySelectorAll('#big-pg-block-five-causes');
const bigPgSectionTreeAboutMe = document.querySelector('#big-pg-sectionTreeAboutMe');
document.querySelector("#theme_toggle").addEventListener("click", (event) => {
    event.preventDefault(); 
    document.querySelector('body').classList.toggle('dark_theme'); 
    if (document.querySelector('body').classList.contains('dark_theme')) {
        event.target.textContent = '◑'; // 🌝
        event.target.style.transform = 'rotate(0deg)';// 0deg если поставить желтый смайл тогда event.target.style.transform = 'rotate(0deg)'; нужно убрать
        event.target.style.transition = '500ms ease-in-out';
        lableFooterChange.style.color = "#ffff00";
        lableFooterChange.style.transition = "color 500ms ease-in-out'";
        bigPgSectionTreeAboutMe.style.color = '#ffff00';
        bigPgSectionTreeAboutMe.style.transition = "color 500ms ease-in-out'";
        summaryFiveCausesSectionTree.forEach(summaryFiveCausesSectionTree => {
            summaryFiveCausesSectionTree.style.color = '#ffff00';
            summaryFiveCausesSectionTree.style.transition = 'color 500ms ease-in-out';
        });
        bigPgFiveCausesSectionTree.forEach(bigPgFiveCausesSectionTree => {
            bigPgFiveCausesSectionTree.style.color = '#FDFDFD';
            bigPgFiveCausesSectionTree.style.transition = 'color 500ms ease-in-out';
        });
    } else {
        event.target.textContent = '◑'; //🌚
        event.target.style.transform = 'rotate(-180deg)';// 180deg если поставить серый смайл тогда event.target.style.transform = 'rotate(0deg)'; нужно убрать
        event.target.style.transition = '500ms ease-in-out';
        lableFooterChange.style.color = "#FDFDFD";//Возвращаем стандартный цвет
        lableFooterChange.style.transition = "color 500ms ease-in-out'";
        bigPgSectionTreeAboutMe.style.color = '#28004d';
        bigPgSectionTreeAboutMe.style.transition = "color 500ms ease-in-out'";
        summaryFiveCausesSectionTree.forEach(summaryFiveCausesSectionTree => {
            summaryFiveCausesSectionTree.style.color = '#28004d';
            summaryFiveCausesSectionTree.style.transition = 'color 500ms ease-in-out';
        });
        bigPgFiveCausesSectionTree.forEach(bigPgFiveCausesSectionTree => {
            bigPgFiveCausesSectionTree.style.color = '#28004d';
            bigPgFiveCausesSectionTree.style.transition = 'color 500ms ease-in-out';
        });
    }
});
document.querySelector('#theme_toggle').addEventListener('click', (event) => { 
    event.stopPropagation();
});
//ПЕРЕКЛЮЧЕНИЕ ТЕМ///

//PAGE FIVE UI KIT
const cardAdd = document.querySelector('.cardAdd_imgPageUIKit');
const btnAround = document.querySelector('.btn-arrow-bottom');
const newText = document.querySelector('.textAddPageUIKit');

cardAdd.addEventListener('click', (event) => {/*нажимаем на шишку, чтобы  выключить Деда Мороза */
    event.stopPropagation();//чтоб событие не всплывало 
    const photoOff = document.querySelector('.photoOff_imgPageUIKit');
    newText.innerHTML = "Спасибо за внимание";
  if (photoOff.style.display == "flex") { // block если элемент найден // 
    photoOff.style.display = "none";//none
    //cardAdd.style.transition = 'all 500ms ease-in-out';//я добавил
    btnAround.style.transform = "rotate(0deg)";
    btnAround.style.transition = 'transform 300ms ease-in-out';
    return true;
  } else { // иначе он не найден
    photoOff.style.display = "flex";//block
    photoOff.style.transition = 'all 500ms ease-in-out';//я добавил
    btnAround.style.transform = "rotate(180deg)";
    btnAround.style.transition = 'transform 300ms ease-in-out';
    return false;
    }
  //alert("hi");
});

//ЭТО КОД, ЧТОБЫ ТЕКСТ ИСЧЕЗ ПРИ КЛИКЕ НА ФОТО, НО ЕСТЬ ВАРИАНТ ЭТОТ КОД ЗАКРЫТЬ, ЧТОБЫ ПРИ СКРЫТИИИ БОЛЬШОЙ ФОТКИ ЮАЙ ПОСЛЕ ЕЕ ПРОСМОТРА ПОЛЬЗОВАТЕЛЕМ, ТЕКСТ БЛАГОДАРНОСТИ ОСТАЛСЯ, ТОЖЕ НОРМ ВАРИАНТ
cardAdd.addEventListener('click', (event) => {//нажимаем на шишку, чтобы  выключить Деда Мороза
    event.stopPropagation();//чтоб событие не всплывало 
    const photoOff = document.querySelector('.textAddPageUIKit');
        //newText.innerHTML = "Thank you for watching !";
        //newText.style.position = "absolute";
        //newText.style.width = "500px";
        //newText.style.fontSize = "85px";
        //newText.style.color = "#8be726";
        //newText.style.right = "231px";
        //newText.style.bottom = "284px";
        //newText.style.margin = "0";
    if (photoOff.style.display == "block") { // если элемент найден // 
        photoOff.style.display = "none";
        return true;
    } else { // иначе он не найден
        photoOff.style.display = "block";
        return false;
    }
});

let colorNames = ["blue", "cyan", "red", "gold", "green", "yellow", "orange", "violet", "#7fff00", "#ff7f50"];
  // функция поиска random-числа
const random = (min, max) => {
    max = colorNames.length - 1;
    const rand = min + Math.round(Math.random() * (max - min));
    return rand;
};
  // найти элементы для изменения свойств
let paragraphs = document.getElementsByClassName("textAddPageUIKit");/**/
  // менять цвет каждую секунду, присвоив каждому эл-ту массива paragraphs новое значение
setInterval(() => {
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = colorNames[random(0)];
    }
}, 3000);
console.log(colorNames);
//PAGE FIVE UI KIT///