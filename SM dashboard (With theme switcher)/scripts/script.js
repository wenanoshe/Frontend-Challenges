/* Call action button */
const btn = document.getElementById('switcher');
const btnBall = document.getElementById('btnBall');
const body = document.getElementById('body');
const switchTxt = document.getElementById('switch-txt');
const topCard = document.querySelectorAll('.topCard');
const bottomCard = document.querySelectorAll('.bottomCard')


/* function */

const changeTheme = () => {
    /* changin the button ball of side */
    btn.classList.toggle('dash__w-switch');
    btnBall.classList.toggle('dash__w-ball');
    // console.log(btnBall);

    /* changin the general */
    body.classList.toggle('body-light');

    /* changin the header */
    switchTxt.classList.toggle('dash__switch-txt');

    /* changin the top part */
    topCard.forEach(i => i.classList.toggle('dash__w-card'));
    
    /* the bottom part */
    bottomCard.forEach(i => i.classList.toggle('overview__w-card'));

}


btn.addEventListener('click', changeTheme);
