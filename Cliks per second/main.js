'use-strict';

import { Countdown } from "./simpleCountdown/countdown.js";

/* === Funcitions === */
const countClicks = () => {
    clicks++;
    currentClicks.textContent = `${clicks}`;
}

/* === Variables === */
let clicks = 0;
let isTestRunning = false;
let cps;

/* === Constants === */
const clickZone = document.getElementById("clickZone");
const currentClicks = document.getElementById('result');
const timeRemaining = document.getElementById('timeRemaining');
const confirmScore = document.getElementById('confirmScore');
const resultModal = document.querySelector('.modal');
const resultCPS = document.getElementById('cps');

const countdown = new Countdown(timeRemaining, 5000, true);

/* === Code execution === */
clickZone.addEventListener('click', () => {
    if(isTestRunning) {
        if(countdown.currentTime == 0) { // if the countdown ends
            cps = clicks / 5; 
            resultCPS.textContent = cps;
            
            resultModal.dataset.window = 'visible';
            isTestRunning = false;
        } else countClicks();
    } else {
        countdown.play();
        isTestRunning = true;
    }
});


confirmScore.addEventListener('click', () => {
    // reload all values 
    clicks = 0;
    currentClicks.textContent = '0';
    countdown.reload()
    resultModal.dataset.window = 'hidden';
});