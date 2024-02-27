let sidebarCont = document.querySelector(`.menu-container`);
let sidebar = document.querySelector(`.menu__sidebar`);
let fullpage = document.querySelector(`#fullpage`);
let menuButton = document.querySelector(`.header__burger-btn`);

function sidebarHeight() {
    sidebar.classList.remove(`h0`)
}

function sidebarvisibility() {
    sidebarCont.classList.add(`sidebar-none`)
}

function scroll() {
    fullpage.classList.toggle(`noscroll`) 
}

document.addEventListener(`click`, function(evt) {
    if (evt.target == sidebarCont && evt.target != sidebar) {
        sidebar.classList.add(`h0`)
        setTimeout(sidebarvisibility, 400)
        setTimeout(scroll, 400)
    }
})

menuButton.addEventListener(`click`, function(evt) {
    if (!(sidebarCont.classList.contains(`sidebar-none`))) {
        sidebar.classList.add(`h0`)
        setTimeout(sidebarvisibility, 400)
        setTimeout(scroll, 400)
    } else {
        sidebarCont.classList.remove(`sidebar-none`)
        setTimeout(sidebarHeight, 100)
        setTimeout(scroll, 0)
    }
})

// -------------------

// var header = document.getElementById("header");

// // Задать начальное значение скролла
// var prevScrollPos = window.pageYOffset; 

// // Обработчик события прокрутки страницы
// window.onscroll = function() {
//   // Получить текущее значение скролла
//   var currentScrollPos = window.pageYOffset;

  // Проверить направление скролла
//   if (prevScrollPos > currentScrollPos) {
//     // Если скролл вверх, проверить на сколько пикселей сдвинуть header
//     if (currentScrollPos < 30) {
//       header.style.top = "0";
//     }
//   } else {
//     // Если скролл вниз, проверить на сколько пикселей сдвинуть header
//     if (currentScrollPos > 200) {
//       header.style.top = "-100px";
//     }
//   }

//   // Обновить значение предыдущего скролла
//   prevScrollPos = currentScrollPos;
// }

let prevScrollpos = window.pageYOffset;
let currentScrollPos = window.pageYOffset;
const header = document.getElementById("header"); // замените yourHeaderId на реальный идентификатор вашего header

window.onscroll = function() {
    currentScrollPos = window.pageYOffset;
   
    if (prevScrollpos - currentScrollPos >= 1) {
      header.style.top = "0";
    } else if (prevScrollpos - currentScrollPos <= 200) {
      header.style.top = "-100px"; // Подставьте нужное вам значение для сдвига header
    }
    prevScrollpos = currentScrollPos;
}

// Сперва, найдите ваш header
// var header = document.getElementById("header");

// // Сохраните вертикальную позицию страницы
// var prevScrollPos = window.pageYOffset;

// // Добавьте обработчик событий на скролл
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollPos > currentScrollPos) {
//     if (prevScrollPos - currentScrollPos >= 30) {
//       header.style.top = "0";
//     }
//   } else {
//     if (currentScrollPos - prevScrollPos <= 200) {
//       header.style.top = "-100px"; 
//     }
//   }
//   prevScrollPos = currentScrollPos;
// }