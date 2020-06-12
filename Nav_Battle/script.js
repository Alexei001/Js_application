
const CELL_SIZE = 20;
const FIELD_SIZE = 25;

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 500;

const mouse = getMouse(canvas);
const game= new Game;

function clearCanvas(){
    canvas.width |=0
}

function drawGrid() {

    context.strokeStyle = 'blue';
    context.lineWidth = 0.5;

    for (let i = 0; i < canvas.width / CELL_SIZE; i++) {
        context.beginPath();
        context.moveTo(i * CELL_SIZE, 0);
        context.lineTo(i * CELL_SIZE, canvas.height);
        context.stroke();
    }
    for (let i = 0; i < canvas.height / CELL_SIZE; i++) {
        context.beginPath();
        context.moveTo(0, i * CELL_SIZE);
        context.lineTo(canvas.width, i * CELL_SIZE);
        context.stroke();
    }

    context.strokeStyle = 'red';
    context.lineWidth = 0, 8;

    context.beginPath();
    context.moveTo(0, 70);
    context.lineTo(canvas.width, 70);
    context.stroke();
}


