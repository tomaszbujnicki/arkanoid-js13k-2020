const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

function drawAll() {
  ctx.clearRect(0, 0, 1000 , 700)
  drawRectangle(level.playfield, 'transparent');
  drawRectangle(level.paddle);
  level.ballArray.forEach((ball) => {
    drawCircle(ball);
  });
  level.blockArray.forEach((block) => {
    drawRectangle(block, getColor(block.power));
  });
}

function drawRectangle(object, color = 'white') {
  ctx.save();
  ctx.fillStyle = color;
  ctx.strokeStyle = 'silver';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(object.left, object.top, object.width, object.height);
  ctx.clip();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function drawCircle(object, color = 'white') {
  ctx.save();
  ctx.fillStyle = color;
  ctx.strokeStyle = 'silver';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(
    object.left + object.size / 2,
    object.top + object.size / 2,
    object.size / 2,
    0,
    2 * Math.PI
  );
  ctx.clip();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}