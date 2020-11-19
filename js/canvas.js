const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

function drawAll() {
  ctx.clearRect(0, 0, 1000, 700);
  drawShape(level.playfield, 'transparent');
  drawShape(level.paddle);
  level.ballArray.forEach((ball) => {
    drawShape(ball, 'white', 'circle');
  });
  level.blockArray.forEach((block) => {
    drawShape(block, getColor(block.power));
  });
}

function drawShape(object, color = 'white', shape) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.strokeStyle = 'silver';
  ctx.lineWidth = 2;
  ctx.beginPath();
  if (!shape) {
    ctx.rect(object.left, object.top, object.width, object.height);
  } else {
    if ((shape = 'circle')) {
      ctx.arc(
        object.left + object.size / 2,
        object.top + object.size / 2,
        object.size / 2,
        0,
        2 * Math.PI
      );
    }
  }
  ctx.clip();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}
