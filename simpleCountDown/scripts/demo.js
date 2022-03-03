'use-strict';

import { Countdown } from "./countdown.js";

const pause = document.getElementById('pause');
const play = document.getElementById('play');
const reload = document.getElementById('reload');
const timeTarget = document.getElementById('time');
const initValue = document.getElementById('initValue');

let demo;

demo = new Countdown(timeTarget, initValue.defaultValue);

if(!typeof initValue.value == "number") {
   console.log('nices');
} else console.log(initValue.value);

initValue.addEventListener('keyup', () => {
   demo = new Countdown(timeTarget, initValue.value);
   console.log(initValue.value);
});

pause.addEventListener('click', demo.stop);
play.addEventListener('click', demo.play);
reload.addEventListener('click', demo.reload);