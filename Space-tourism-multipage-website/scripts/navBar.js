const navBar = document.querySelector('.nav__ul');

switch (location.pathname) {
    case '/index.html':
        navBar.children[0].classList.add('active__link');
        break;
    case '/':
        navBar.children[0].classList.add('active__link');
        break;
    case '/destination.html':
        navBar.children[1].classList.add('active__link');
    break;

    case '/crew.html': 
        navBar.children[2].classList.add('active__link');
    break;

    case '/technology.html': 
        navBar.children[3].classList.add('active__link');
    break;

    default:
        console.log('error');
        break;
}

/* === When is in mobile === */
const hamburgerBtn = document.getElementById('hamburguer');
hamburgerBtn.addEventListener('click', () => {
    navBar.classList.toggle('visible');
    /* This is the img inside the button, and i am changing it src
        If has the class visible, change to close button, else hamburguer */
    if(navBar.classList.contains('visible')) {
        hamburgerBtn.children[0].setAttribute('src', 'assets/shared/icon-close.svg');
    } else {
        hamburgerBtn.children[0].setAttribute('src', 'assets/shared/icon-hamburger.svg');
    }
});

