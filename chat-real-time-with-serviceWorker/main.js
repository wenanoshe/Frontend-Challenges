const input = document.querySelector('.entry');
const send = document.querySelector('.send');

send.addEventListener('click', (e) => {
    if(input.value !== '' || input.value.length !== 0) {
        sendMessage();
    } else alert('You need to write something!');
});

input.addEventListener('keyup', () => {
    if(input.value == '' || input.value.lenght == 0) send.classList.remove('ready-send');
    else send.classList.add('ready-send');
});

const sendMessage = () => {
    const sw = navigator.serviceWorker;
    sw.register('worker.js');
    sw.ready.then(ok => ok.active.postMessage(input.value));
    sw.addEventListener('message', e => {
        console.log('this is the response of worker.js =>  ',e.data);

    });
}

console.log(navigator.getGamepads());