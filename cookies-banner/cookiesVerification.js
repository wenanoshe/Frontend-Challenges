const fechaUTC = (days) => {
    let date = new Date();
    date.setTime(date.getTime() + days*1000*60*60*24);
    return date.toUTCString();
}

const createCookies = (name, days) => {
    document.cookie = `${name}; expires=${fechaUTC(days)}`;
}

const getCookies = cookieName => {
    let cookies = document.cookie;
    cookies = cookies.split(';');
    for(let i = 0; cookies.length > i; i++) {
        let cookie = cookies[i].trim();
        if(cookie.startsWith(cookieName)) return cookie.split('=')[1];
        else console.log('there are an error perro!');
    };
}

// --- --- //
const verifyCookies = () => {
        if(useCookies == 'accept') {
            createCookies('country=CO', 180);
        } else console.log('The user not accept the cookies');
}

const bgModal = document.querySelector('.bgmodal');
const accept = document.getElementById('accept');
const deny = document.getElementById('deny');

let useCookies = undefined;

accept.addEventListener('click', () => {
    bgModal.classList.add('hide-modal');
    useCookies = 'accept';
    verifyCookies();
});
deny.addEventListener('click', () => {
    bgModal.classList.add('hide-modal');
    useCookies = 'deny';
    verifyCookies();
});

if(getCookies('country')) bgModal.classList.add('hide-modal');
else {
    console.log(false);
}