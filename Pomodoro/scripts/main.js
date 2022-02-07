'use-strict';

/* === Functions === */

const statusPlayOrPause = () => {
   // Changing the icon depending if is play or pause
   if (isStart) {
      document.getElementById('status').classList.replace('fi-br-play', 'fi-br-pause');
      isStart = false;
   } else {
      document.getElementById('status').classList.replace( 'fi-br-pause', 'fi-br-play');
      isStart = true;
   }
}

const updateInterfaceTimer = (min, sec) => {
   // Function that update the interface timer
   minutesEl = document.querySelector('.pomo__minutes');
   secondsEl = document.querySelector('.pomo__seconds');

   minutesEl.textContent = min.toString().padStart(2, "0");
   secondsEl.textContent = sec.toString().padStart(2, "0");
}

const countdown = () => {
   // This is the interval that starts the count down
   var interval = setInterval(() => {
      let minutes = Math.floor(currentPomo / 60);
      let seconds = currentPomo % 60;
      
      currentPomo = currentPomo - 1;
   
      if(currentPomo == -1) clearInterval(interval);
   
      console.log(minutes, seconds);
      updateInterfaceTimer(minutes, seconds);
   }, 1000);   
}

const runTimer = () => {
   if(isStart) isStart = false;
   else isStart = true; // stores true, the timer is runing
   

   statusPlayOrPause();
   
   countdown(); // starts the countdown

}

// ---- Handdle the settings (modal window) ----
const showSettings = () => document.querySelector('.modal').classList.toggle('show-modal');

const getPomodoroValues = () => {
   // This is for get the values of the pomo short and long break
   currentPomo = document.getElementById('pomodoro').value * 60; 
   currentShortBreak = document.getElementById('short-break').value * 60;
   currentLongBreak = document.getElementById('long-break').value * 60;
   applyChangesInInterface();
}

const applyChangesInInterface = () => {
   minutesEl.textContent = document.getElementById('pomodoro').value;
   // minutesEl.textContent = document.getElementById('pomodoro').value;
   // minutesEl.textContent = document.getElementById('pomodoro').value;
}

/* === === === */

/* === Variables declarations === */
let currentPomo;  
let currentShortBreak;
let currentLongBreak;

let isStart = false;
console.log(isStart + ' initial');

const formEl = document.querySelector('.modal__settings');

let pomodoroEl = document.querySelector('.pomo');
let applySettingsBtn = document.getElementById('applyChanges');

let minutesEl = document.querySelector('.pomo__minutes');
let secondsEl = document.querySelector('.pomo__seconds');

/* === === === */


/* === Code execution === */

// ---- show and hide the modal ----
   let settingsBtn = document.querySelector('.settings__btn');
   let closeModalBtn = document.querySelector('.modal__close');

   settingsBtn.addEventListener('click', showSettings);
   closeModalBtn.addEventListener('click', showSettings);
// ---- --- ----

formEl.addEventListener('submit', e => e.preventDefault());
getPomodoroValues();
applySettingsBtn.addEventListener('click', getPomodoroValues);

// When starts the pomodoro
pomodoroEl.addEventListener('click', runTimer);

/* === === === */
