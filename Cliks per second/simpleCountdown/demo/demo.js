'use-strict';

import { Countdown } from "./countdown.js";
/* Functions */
const getid = (id) => document.getElementById(id);

const verifyInitialValue = () => new Promise((resolve, reject) => {
   let initVal = parseInt(initValue.value);
   // When parse the value, if is not a number return NaN, and is taken like *false*
   if(initVal) resolve(initVal);
   else reject('error');
});

const runApp = () => {
   verifyInitialValue()
   .then(initVal => {
      countdown.stop() // to prevent that the timer runs when has changes
      let countdown =  new Countdown(timeTarget, initVal, useSeconds.checked);
      playPause.addEventListener('click', () => {
         if(running) {
           countdown.stop();
           running = false 
         } else {
            countdown.play();
            running = true;
         }
      });
      reload.addEventListener('click', countdown.reload);
   })
   .catch(() => alert('You can only set numbers!'));
}


/* Variables */
let running = false;

/* Constants */
const playPause = getid('playPause');
const reload = getid('reload');
const form = getid('form');
const timeTarget = getid('time');
const initValue = getid('initValue');
const useSeconds = getid('useMiliseconds');
const applySettings = getid('apply');

/* Code execution */
form.addEventListener('submit', e => e.preventDefault());

runApp();
applySettings.addEventListener('click', runApp);