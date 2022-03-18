const HAMBURGER = document.getElementById('hamburgerMenu');
const MENU = document.getElementById('navMenu');
const LINES = document.getElementsByClassName('navigation__topRightMobileLine');

HAMBURGER.addEventListener('click', () => {
    MENU.classList.toggle('openNav');

    document.querySelectorAll('.navigation__topRightMobileLine')
    .forEach(element => {
        element.classList.toggle('transform');
    })
})