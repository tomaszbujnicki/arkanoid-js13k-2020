const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
function drawAll() {
  ctx.clearRect(0, 0, 1260, 700);
  drawShape(this.playfield, 'transparent');
  drawShape(this.paddle);
  this.ballArray.forEach((ball) => {
    drawShape(ball, 'white', 'circle');
  });
  this.blockArray.forEach((block) => {
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

function getColor(power) {
  let color = 'white';

  switch (power) {
    case 1:
      color = 'white';
      break;
    case 2:
      color = 'green';
      break;
    case 3:
      color = 'red';
      break;
    case 4:
      color = 'blue';
      break;
    default:
      color = 'white';
      break;
  }

  return color;
}
