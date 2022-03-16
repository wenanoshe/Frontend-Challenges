'use-strict';

const marker = document.getElementById('marker');
const menu = document.querySelectorAll('.menu__link');

const indicator = (e) => {
   marker.style.left = `${e.offsetLeft}px`;
   marker.style.width = `${e.offsetWidth}px`;
}

indicator(menu[0]);

menu.forEach(link => {
   link.addEventListener('click', e => indicator(e.target));
});