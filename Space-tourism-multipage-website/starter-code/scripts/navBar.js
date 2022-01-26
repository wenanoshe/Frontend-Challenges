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