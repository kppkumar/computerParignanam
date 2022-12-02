var canvas = document.createElement("canvas");
document.body.append(canvas);
canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.9;
var ctx = canvas.getContext("2d");
var size = 100;
var val = 25;
ctx.fillStyle = "lightblue";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = "blue";
ctx.fillStyle = "yellow";
ctx.translate(canvas.width * 0.5, canvas.height * 0.5);

for(let i = 0; i < val; i++) {
    ctx.save();
    ctx.rotate(Math.PI * 2 / val * i);
    ctx.scale(.3, i / val);
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.arc(0, -size, size, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}



// var boxPos = 0;
// var rotation = 0;
// var flower = document.getElementById("flower");
// var pat = ctx.createPattern(flower, "repeat");
// ctx.lineWidth = 4;
// function drawBox() {
//     ctx.fillStyle = pat;
//     ctx.save();
//     if (boxPos > canvas.width - 100) boxPos = 0;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.translate(boxPos, canvas.height * 0.5);
//     ctx.rotate(rotation);
//     ctx.beginPath();
//     ctx.moveTo(-50, -50);
//     ctx.lineTo(50, -50);
//     ctx.lineTo(50, 50);
//     ctx.lineTo(-50, 50);
//     ctx.lineTo(-50, -50);
//     ctx.fill();
//     ctx.stroke();
//     ctx.closePath();
//     boxPos = boxPos + 10;
//     rotation = rotation + Math.PI / 18;
//     ctx.restore();
//     ctx.font = "30px Arial";
//     ctx.textAlign = "center";
//     ctx.fillStyle = "blue";
//     ctx.fillText("Hello", boxPos, canvas.height * 0.5 - 150);
// }
// setInterval(drawBox, 100);