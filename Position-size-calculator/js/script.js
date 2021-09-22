const as = document.getElementById('accountSize');
const rk = document.getElementById('risk');
const stoploss = document.getElementById('stopLoss');
const button = document.getElementById('button');

const riskN = parseInt(rk.value);

/* numbers converted */
const accSize = parseInt(as.value);
const riskP = riskN / 100;
const slPips = parseInt(stoploss.value);
/* -------------- */


/* areas to print */
const areaRisk = document.getElementById('areaRisk');
const areaUnits = document.getElementById('areaUnits');
const areaLots = document.getElementById('areaLots');
/* -------------- */


/* function that calculates */
let riskDll = accSize * riskP;

const calc = () => {
    let lots = riskDll / (slPips * 10);
    areaLots.textContent = lots.toPrecision(1);

    let units = riskDll / 0.0001;
    areaUnits.textContent = units;

    areaRisk.textContent = `$ ${riskDll}`;


}

button.addEventListener('click', calc);

// const calcLots = () => { 
//     let lots = riskDll / (slPips * 10);

//     areaLots.textContent = lots.toPrecision(1);
// }

// const calcRisk = () => areaRisk.textContent = `$ ${riskDll}`;

// const calcUnits = () => {
//     let units = riskDll / 0.0001;
//     areaUnits.textContent = units;
// }


// /* -------------- */

// /* function to print */
// const printResult = () => {
//     calcLots();
//     calcRisk();
//     calcUnits();
// }
// /* -------------- */


// button.addEventListener('click', printResult);




