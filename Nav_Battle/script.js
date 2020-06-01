
const CELL_SIZE = 20;
const FIELD_SIZE = 25;

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const mouse=getMouse(canvas);

canvas.width = 600;
canvas.height = 400;

const player = new Topology({
    offsetX: 60,
    offsetY: 90
});

player
    .addSheeps(
        { x: 0, y: 0, direct: 0, size: 3 },
        { x: 0, y: 2, direct: 1, size: 4 }
    )
    .addChecks(
        { x: 5, y: 5 },
        { x: 5, y: 4 }
    )

drawGrid();
player.draw(context);

// player.drawShepps(context,{ x: 0, y: 0, direct: 0, size: 3 });
// player.drawCheck(context, { x:5, y: 3 });

// drawRect({
//     x: 10,
//     y: 10,
//     width: 100,
//     height: 200,

//     strokeStyle: 'red',
//     stroke: true,

//     fillStyle: 'green',
//     fill: true,

//     lineWidth: 10
// })

// function drawRect(param) {

//     if (!param.fill && !param.stroke) {
//         return;
//     }

//     context.beginPath();
//     context.rect(param.x, param.y, param.width, param.height);
//     context.lineWidth = param.lineWidth;

//     if (param.fill) {
//         context.fillStyle = param.fillStyle;
//         context.fill();
//     }
//     if (param.stroke) {
//         context.strokeStyle = param.strokeStyle;
//         context.stroke();
//     }

// }

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


