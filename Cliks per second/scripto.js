const clickZone = document.getElementById("clickZone");
const result = document.getElementById('result');

let cont = 0;
const clickCounter = () => {
    cont++
    result.textContent = `${cont}`;
}

clickZone.addEventListener('click', clickCounter);

