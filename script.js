const canvas = document.getElementById('face');
const ctx = canvas.getContext('2d');

let eyes = true;
let nose = true;
let mouth = true;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // head
  ctx.fillStyle = '#ffeb3b';
  ctx.beginPath();
  ctx.arc(150, 150, 100, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  if (eyes) {
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(110, 120, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(190, 120, 10, 0, Math.PI * 2);
    ctx.fill();
  }

  if (nose) {
    ctx.fillStyle = '#ffa500';
    ctx.beginPath();
    ctx.moveTo(150, 140);
    ctx.lineTo(140, 170);
    ctx.lineTo(160, 170);
    ctx.closePath();
    ctx.fill();
  }

  if (mouth) {
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(150, 170, 50, 0, Math.PI, false);
    ctx.stroke();
  }
}

document.getElementById('toggleEyes').addEventListener('click', () => {
  eyes = !eyes;
  draw();
});

document.getElementById('toggleNose').addEventListener('click', () => {
  nose = !nose;
  draw();
});

document.getElementById('toggleMouth').addEventListener('click', () => {
  mouth = !mouth;
  draw();
});

draw();
