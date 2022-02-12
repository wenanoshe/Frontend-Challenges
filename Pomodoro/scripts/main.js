'use-strict';

const verifyFormFields = (pomo_value, short_value, long_value) => {
   // This promise is for verify if the user not set invalid numbers in the settings
   return new Promise((resolve, reject) => {
      if(pomo_value <= 0 || short_value <= 0 || long_value <= 0) {
         reject(alert('Numbers less than 0 are not allowed!!'));
      } 
      else if(pomo_value.length == 0 || short_value.length == 0 || long_value.length == 0) {
         reject(alert('Empty values are not allowed!!'));
      }
      else if(pomo_value.length > 3 || short_value.length > 3 || long_value.length > 3) {
         reject(alert('The number is too long!!'));
      }
      else {
         resolve('Verification complete');
      }
   });
}

const whatchCurrentMode = () => {
   //This function returns the current mode (pomo, short or long break)
   let modesCollection = []
   
   // With this loop we each btn element to the modesCollection array
   for (const elem of modesBar.children) {
      modesCollection.push(elem.children[0])
   } 
   // Now, we filter the modesCollection array to get that has the class *active-mode*
   let activeMode = modesCollection.filter(mode => {
      if(mode.classList.contains('active-mode')) {return mode};
   });

   return activeMode;
}

const insertDependingCurrentMode  = () => {
   // This function is a switch case, that gets the id, and inserts that in the DOM
   switch (whatchCurrentMode()[0].id) {
      case 'mode-pomodoro':
         minutesEl.textContent = modalSetPomodoro.toString().padStart(2, "0");
         secondsEl.textContent = '00';
         setTimer(); 
      break;
         
      case 'mode-shortBreak':
         minutesEl.textContent = modalSetShortbreak.toString().padStart(2, "0");
         secondsEl.textContent = '00';
         setTimer(); 
      break;
         
      case 'mode-longBreak':
         minutesEl.textContent = modalSetLongBreak.toString().padStart(2, "0");
         secondsEl.textContent = '00';
         setTimer(); 
      break;
   }
   ////... I set the timer for get the values inserted in the DOM
}

const insertInputValuesInTheInterface = () => {
   modalSetPomodoro = document.getElementById('modal--setPomodoro').value;
   modalSetShortbreak = document.getElementById('modal--setShort-break').value;
   modalSetLongBreak = document.getElementById('modal--setLong-break').value;

   verifyFormFields(modalSetPomodoro, modalSetLongBreak, modalSetLongBreak)
   .then(() => {
      // Now, i insert the corresponding value depending in the mode
      insertDependingCurrentMode();
   })
   .catch(err => console.error(err));
}

const toggleModalSettings = () => {
   // Toggle the visivility of the modal settings
   settingsModalW.classList.toggle('show-modal');
}

const changeMode = (e) => {
   if(e.target && e.target.tagName == 'BUTTON') {
      // First I remove the active state of the element that has it
      for (const child of modesBar.children) {
         child.children[0].classList.remove('active-mode');
      }
      // After I adds the active state of the clicked element
      e.target.classList.add('active-mode');

      // To the end, i inserts the the value provided by the mode
      insertInputValuesInTheInterface();
   }
}

const playSound =  {
   // Play a sound when starts and ends the pomodoro
   switch: () => document.getElementById('switchSound').play(),
   bell: () => document.getElementById('bellSound').play()
}

const togglePlayPauseIcon = () => {
   // Change the icon when starts or stops the timer
   if(statusEl.classList.contains('fi-br-play')){
      statusEl.classList.replace('fi-br-play', 'fi-br-pause');
      playSound.switch();
   } else {
      statusEl.classList.replace( 'fi-br-pause', 'fi-br-play');
      playSound.switch();
   }
}

const updateInterfaceTimer = (min, sec) => {
   // Function that update the interface timer
   minutesEl.textContent = min.toString().padStart(2, "0");
   secondsEl.textContent = sec.toString().padStart(2, "0");
}

const countdown = () => {
   // This is the interval that starts the count down
   if(!interval) {
      interval = setInterval(() => {
         // Verfiy if the interval has not finished
         if(currentTimer == -1) {
            stopInterval();
            playSound.bell();
            // change the status icon
            statusEl.classList.replace( 'fi-br-pause', 'fi-br-rotate-right');
         } else {
            let minutes = Math.floor(currentTimer / 60);
            let seconds = currentTimer % 60;
         
            currentTimer = currentTimer - 1;
         
            updateInterfaceTimer(minutes, seconds);
         }
      }, 1000);   
   }
}

const setTimer = () => {
   let timeInSeconds = minutesEl.textContent * 60; // pass to seconds the current timer
   currentTimer = timeInSeconds;
}

const stopInterval = () => {
   // Function used to stop the interval
   clearInterval(interval);
   interval = null;
}

const reloadTimer = () => {
   statusEl.classList.replace('fi-br-rotate-right','fi-br-pause');
   // stopInterval();
   insertInputValuesInTheInterface();
}

const startTimer = () => {
   // If we have the 'play' status, it's to say that the timer is stop, and we play it, and change the status of the icon
   // but if we have the 'pause' status, the timer is runing and we stops it
   if(statusEl.classList.contains('fi-br-play')) {
      countdown();
   } else if(statusEl.classList.contains('fi-br-pause')){
      stopInterval();
   } else {
      reloadTimer();
   }

   togglePlayPauseIcon();
}

/* === Variables === */
let interval;
let currentTimer;

let modalSetPomodoro, modalSetShortbreak ,modalSetLongBreak;


/* === Constants === */
const modesBar = document.querySelector('.modes__ul');
const minutesEl = document.querySelector('.pomo__minutes');
const secondsEl = document.querySelector('.pomo__seconds');

const settingsBtn = document.querySelector('.settings__btn');
const closeModalBtn = document.querySelector('.modal__close');
const settingsModalW = document.querySelector('.modal');
const applySettingsBtn = document.getElementById('applyChanges');

const pomodoroElement = document.querySelector('.pomo');

const statusEl = document.getElementById('status');

/* === Code execution === */

setTimer(); // Set the curent timer instead the page loads

settingsBtn.addEventListener('click', toggleModalSettings);

applySettingsBtn.addEventListener('click', e => {
   e.preventDefault();
   toggleModalSettings();
});
applySettingsBtn.addEventListener('click', insertInputValuesInTheInterface);

closeModalBtn.addEventListener('click', toggleModalSettings);

modesBar.addEventListener('click', e => changeMode(e)); // Changing between modes (pomo and breaks)

// statusEl.addEventListener('click', reloadTimer);

pomodoroElement.addEventListener('click', startTimer);