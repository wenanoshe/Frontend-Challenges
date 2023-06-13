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

const startpoint = (e) => {
    drawing = true;
    x = e.offsetX;
    y = e.offsetY;
    ctx.beginPath();

    console.log(e)
}

const paintOnMove = (e) => {
    const color = document.getElementById('color').value;
    const range = document.getElementById('range').value;
    if(drawing) {
        drawLine(color, range, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }

    if(e.offsetX < 0 || e.offsetY < 0) endLine(e);
}

const endLine = (e) => {
    drawing = false;
    x = e.offsetX;
    y = e.offsetY;
}

/* === end === */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x,y;
let drawing = false;


/* === Execution === */
canvas.addEventListener('mousedown', e => startpoint(e));

canvas.addEventListener('mousemove', e => paintOnMove(e));

canvas.addEventListener('mouseup', e => endLine(e));

document.getElementById('clean').addEventListener('click', () => canvas.width = canvas.width);