'use-strict';

/* === Functions === */

const updateInterfaceTimer = (min, sec) => {
   // Function that update the interface timer
   minutesEl = document.querySelector('.pomo__minutes');
   secondsEl = document.querySelector('.pomo__seconds');

   minutesEl.textContent = min.toString().padStart(2, "0");
   secondsEl.textContent = sec.toString().padStart(2, "0");
}

const countdown = () => {
   // This is the interval that starts the count down
   if(!interval) {
      interval = setInterval(() => {
      let minutes = Math.floor(currentPomo / 60);
      let seconds = currentPomo % 60;
      
      currentPomo = currentPomo - 1;
   
      updateInterfaceTimer(minutes, seconds);
   }, 1000);   
   }
}

const runTimer = () => {
   let statusEl = document.getElementById('status');
   if(statusEl.classList.contains('fi-br-play')){
      statusEl.classList.replace('fi-br-play', 'fi-br-pause');

      countdown();
   } else {
      statusEl.classList.replace( 'fi-br-pause', 'fi-br-play');
      clearInterval(interval);
      interval = null;
   }
}

// ---- Handdle the settings (modal window) ----
const showSettings = () => document.querySelector('.modal').classList.toggle('show-modal');

// const getPomodoroValues = () => {
//    // This is for get the values of the pomo short and long break
//    currentPomo = document.getElementById('modal--setPomodoro').value * 60; 
//    // currentPomo = document.getElementById('modal--setShort-break').value * 60;
//    // currentPomo = document.getElementById('modal--setLong-break').value * 60;
//    applyChangesInInterface();
// }

const applyChangesInInterface = () => {
   // We need to verify in which mode we are and insert that values in the interface
   let modesCollection = []

   // With this loop we add the btn element to the modesCollection array
   for (const elem of modesBar.children) {modesCollection.push(elem.children[0])} 

   // Now, we filter the modesCollection array to get that has the class *active-mode*
   let activeMode = modesCollection.filter(i => {
      if(i.classList.contains('active-mode')) {return i};
   });

   // Here we access to the active element and depending on the id of the element we made the insertion of the minutes that we set in the
   const modalSetPomodoro = document.getElementById('modal--setPomodoro').value;
   const modalSetShortbreak = document.getElementById('modal--setShort-break').value;
   const modalSetLongBreak = document.getElementById('modal--setLong-break').value;

   switch (activeMode[0].id) {
      case 'mode-pomodoro':
         minutesEl.textContent = modalSetPomodoro;
         currentPomo = modalSetPomodoro * 60;
      break;
      case 'mode-shortBreak':
         minutesEl.textContent = modalSetShortbreak;
         currentPomo = modalSetShortbreak * 60;
      break;
      case 'mode-longBreak':
         minutesEl.textContent = modalSetLongBreak;
         currentPomo = modalSetLongBreak * 60;
      break;
   }
}

/* === === === */

/* === Variables declarations === */
let currentPomo;  
let currentShortBreak;
let currentLongBreak;

let isRunning = false;
let interval;

const formEl = document.querySelector('.modal__settings');

let pomodoroEl = document.querySelector('.pomo');
let applySettingsBtn = document.getElementById('applyChanges');

let minutesEl = document.querySelector('.pomo__minutes');
let secondsEl = document.querySelector('.pomo__seconds');

const modesBar = document.querySelector('.modes__ul');

let settingsBtn = document.querySelector('.settings__btn');
let closeModalBtn = document.querySelector('.modal__close');

/* === === === */


/* === Code execution === */

// ---- show and hide the modal ----
settingsBtn.addEventListener('click', showSettings);
closeModalBtn.addEventListener('click', showSettings);

// Reset the form
formEl.addEventListener('submit', e => e.preventDefault()); 
applySettingsBtn.addEventListener('click', applyChangesInInterface);
applySettingsBtn.addEventListener('click', showSettings);

// I load this funcito instead the page loads for stores the values
applyChangesInInterface();

// ---- When starts the pomodoro ----
pomodoroEl.addEventListener('click', runTimer);

// ---- changing between modes (pomo and breaks) ----
modesBar.addEventListener('click', e => {
   if(e.target && e.target.tagName == 'BUTTON') {
      // First I remove the active state of the element that has it
      for (const child of modesBar.children) {
         child.children[0].classList.remove('active-mode');
      }
      // After I adds the active state of the clicked element
      e.target.classList.add('active-mode');

      // Update the values in interface
      applyChangesInInterface()
   }
})

/* === === === */