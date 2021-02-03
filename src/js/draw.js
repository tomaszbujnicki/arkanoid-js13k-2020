import { theme } from './theme';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

export default function draw() {
  const colors = {
    background: theme.active.background,
    first: theme.active.first,
    second: theme.active.second,
    block1: theme.active.block1,
    block2: theme.active.block2,
    block3: theme.active.block3,
    block4: theme.active.block4,
    block5: theme.active.block5,
    block6: theme.active.block6,
  };
  resizeCanvas();
  ctx.clearRect(0, 0, 1000, 700);
  drawWalls(this.playfield, 'transparent');
  drawShape(this.paddle);
  this.ballArray.forEach((ball) => {
    drawShape(ball, colors.first, 'circle');
  });
  this.blockArray.forEach((block) => {
    drawShape(block, colors['block' + block.hitpoints]);
  });
  this.powerArray.forEach((power) => {
    drawShape(power, power.color);
  });
  this.bulletArray.forEach((bullet) => {
    drawShape(bullet, colors.second);
  });

  function drawShape(object, color = colors.first, shape) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    if (!shape) {
      ctx.rect(object.left, object.top, object.width, object.height);
    } else {
      if ((shape = 'circle')) {
        ctx.arc(object.posX, object.posY, object.radius, 0, 2 * Math.PI);
      }
    }

    ctx.clip();
    ctx.fill();
    ctx.restore();
  }

  function drawWalls(object, color = colors.first) {
    ctx.save();
    ctx.strokeStyle = 'red'; //color;
    ctx.beginPath();
    ctx.rect(object.left, object.top, object.width, object.height);
    ctx.stroke();
    ctx.clip();
    ctx.restore();
  }
}

function resizeCanvas() {
  const playground = document
    .getElementById('playground')
    .getBoundingClientRect();

  const canvasRatio = 1000 / 700;
  const playgroundRatio = playground.width / playground.height;

  if (playgroundRatio > canvasRatio) {
    canvas.style.height = playground.height + 'px';
    canvas.style.width = playground.height * canvasRatio + 'px';
  } else {
    canvas.style.width = playground.width + 'px';
    canvas.style.height = playground.width / canvasRatio + 'px';
  }

  const canvasSize = canvas.getBoundingClientRect();
}
