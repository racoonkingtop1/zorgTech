let sidebarCont = document.querySelector(`.menu-container`);
let sidebar = document.querySelector(`.menu__sidebar`);
let fullpage = document.querySelector(`#fullpage`);
let menuButton = document.querySelector(`.header__burger-btn`);

function sidebarHeight() {
    sidebar.classList.toggle(`h0`)
}

function sidebarvisibility() {
    sidebarCont.classList.toggle(`sidebar-none`)
}

function scroll() {
    fullpage.classList.toggle(`noscroll`) 
}

document.addEventListener(`click`, function(evt) {
    if (evt.target == sidebarCont) {
        setTimeout(sidebarvisibility, 200)
        sidebarHeight()
        scroll()
    }
})

menuButton.addEventListener(`click`, function(evt) {
    if (!sidebarCont.classList.contains(`sidebar-none`)) {
        sidebarHeight()
        setTimeout(sidebarvisibility, 200)
        scroll()
    } else {
        sidebarHeight()
        sidebarvisibility()
        scroll()
    }
})


// --------------------------------

let prevScrollPos = window.pageYOffset;
const header = document.querySelector('#header');
let isScrollingDown = false;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        isScrollingDown = false;
    } else if (prevScrollPos < currentScrollPos) {
        isScrollingDown = true;
    }

    if (isScrollingDown && currentScrollPos - prevScrollPos  >= 200) {
        header.style.transform = 'translateY(-100%)';
        prevScrollPos = currentScrollPos;
    } else if (!isScrollingDown && prevScrollPos - currentScrollPos >= 30) {
        header.style.transform = 'translateY(0)';
        prevScrollPos = currentScrollPos;
    }
};