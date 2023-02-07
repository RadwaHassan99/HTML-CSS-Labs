function drawTriangle(context, point1, point2, point3, color) {
    context.beginPath();
    context.moveTo(point1.x, point1.y);
    context.lineTo(point2.x, point2.y);
    context.lineTo(point3.x, point3.y);
    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = color;
    context.fill();
    context.closePath();
}
var canvas = document.querySelector('#my-canvas');
var context = canvas.getContext('2d');
const point1 = {x: 10,  y: 20};
const point2 = {x: 10, y: 35};
const point3 = {x: 35, y: 35 };

drawTriangle(context, point1, point2, point3, 'red');











