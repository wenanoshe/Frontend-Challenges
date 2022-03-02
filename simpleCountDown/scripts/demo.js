import { Countdown } from "./countdown.js";

const pause = document.getElementById('pause');
const play = document.getElementById('play');
const reload = document.getElementById('reload');

const timeTarget = document.getElementById('time');

let demo = new Countdown(timeTarget, 5000, true);

pause.addEventListener('click', demo.stop);
play.addEventListener('click', demo.play);
reload.addEventListener('click', demo.reload);