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
         minutesEl.textContent = modalSetPomodoro;
         setTimer(); 
      break;

      case 'mode-shortBreak':
         minutesEl.textContent = modalSetShortbreak;
         setTimer(); 
      break;
      
      case 'mode-longBreak':
         minutesEl.textContent = modalSetLongBreak;
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

const setTimer = () => {
   let timeInSeconds = minutesEl.value * 60; // pass to seconds the current timer
   currentTimer = timeInSeconds;
}

const countdown = () => {
   // This is the interval that starts the count down
   if(!interval) {
      interval = setInterval(() => {
         // Verfiy if the interval has not finished
         if(currentPomo == -1) {
            stopInterval();
            playSound.bell();
            // change the status icon
            statusEl.classList.replace( 'fi-br-pause', 'fi-br-rotate-right');
         } else {
            let minutes = Math.floor(currentPomo / 60);
            let seconds = currentPomo % 60;
         
            currentPomo = currentPomo - 1;
         
            updateInterfaceTimer(minutes, seconds);
         }
      }, 1000);   
   }
}

const stopInterval = () => {
   // Function used to stop the interval
   clearInterval(interval);
   interval = null;
}

const startTimer = () => {
   
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

/* === Code execution === */
settingsBtn.addEventListener('click', toggleModalSettings);

applySettingsBtn.addEventListener('click', e => {
   e.preventDefault();
   toggleModalSettings();
});
applySettingsBtn.addEventListener('click', insertInputValuesInTheInterface);

closeModalBtn.addEventListener('click', toggleModalSettings);

// ---- Changing between modes (pomo and breaks) ----
modesBar.addEventListener('click', e => changeMode(e));

// ---- Set the curent timer instead the page loads ----
setTimer();

pomodoroElement.addEventListener('click', startTimer);