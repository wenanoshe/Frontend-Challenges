'use-strict';

const canvas = document.getElementById('cancha');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = '#eee';
ctx.fillStyle = '#eee';
ctx.lineWidth = 5;

let counter = 1;

const intervl = () => {
    let intervalDrawer = setInterval(() => {
        ctx.beginPath();
        ctx.arc(200, 200, 100, 0, counter);
        ctx.stroke();
        ctx.closePath();
        counter++;
        if(counter == 9) {
            clearInterval(intervalDrawer);
            counter = 1;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            intervl();
        }
    }, 1000);
}
// intervl();


//Making triangle
const drawTriangle = () => {
    ctx.beginPath();
    ctx.moveTo(0,0); 
    ctx.lineTo(700,0);
    ctx.lineTo(700,500);   
    ctx.fill();
}
// drawTriangle();

// == smile face
const smileFace = () => {
    ctx.beginPath();
    ctx.arc(200, 200, 100, 0, 7);
    ctx.moveTo(250, 200);
    ctx.arc(200, 200, 60, 0, 3); // mouth
    ctx.moveTo(200, 170);
    ctx.arc(170, 170, 10, 0, 7);
    ctx.moveTo(200, 170);
    ctx.arc(230, 170, 10, 0, 7);
    
    ctx.stroke();
}
smileFace();

window.location
