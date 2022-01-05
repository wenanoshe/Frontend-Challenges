/* === Functions === */
const drawLine = (color, lineWidth, x_initial, y_initial, x_final, y_final) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(x_initial, y_initial);
    ctx.lineTo(x_final, y_final);
    ctx.stroke();
    ctx.closePath();
}

/* === end === */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x,y;
let drawing = false;

canvas.addEventListener('mousedown', e => {
    drawing = true;
    x = e.layerX;
    y = e.layerY;
    ctx.beginPath();
});

canvas.addEventListener('mousemove', e => {
    const color = document.getElementById('color').value;
    const range = document.getElementById('range').value;
    if(drawing) {
        drawLine(color, range, x, y, e.layerX, e.layerY);
        x = e.layerX;
        y = e.layerY;
    }
});

canvas.addEventListener('mouseup', e => {
    drawing = false;
    x = e.layerX;
    y = e.layerY;
});

document.getElementById('clean').addEventListener('click', () => canvas.width = canvas.width);

/* =================For nice.html=================== */
const canva2 = document.getElementById('cancha');
const ctx2 = canva2.getContext('2d');

ctx2.beginPath();
ctx2.strokeStyle = '#eee';
ctx2.arc(100, 75, 50, 0, 2 * Math.PI);
ctx2.stroke();