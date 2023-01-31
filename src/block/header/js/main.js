let menuButton = document.querySelector('.menu__button');
let menu = document.querySelector('.menu__list');

menuButton.addEventListener('click', e => {

    if (e.target == menuButton) {
        menu.classList.toggle('open');
    }
})