import { theme } from './theme';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

export default function draw() {
  const colors = {
    background: theme.background ? theme.background : themeList[0].background,
    first: theme.first ? theme.first : themeList[0].first,
    stroke: theme.stroke ? theme.stroke : themeList[0].stroke,
    block1: theme.block1 ? theme.block1 : themeList[0].block1,
    block2: theme.block2 ? theme.block2 : themeList[0].block2,
    block3: theme.block3 ? theme.block3 : themeList[0].block3,
    block4: theme.block4 ? theme.block4 : themeList[0].block4,
  };
  resizeCanvas();
  ctx.clearRect(0, 0, 1000, 700);
  drawShape(this.playfield, 'transparent');
  drawShape(this.paddle);
  this.ballArray.forEach((ball) => {
    drawShape(ball, theme.first, 'circle');
  });
  this.blockArray.forEach((block) => {
    drawShape(block, getColor(block.power));
  });
  this.powerArray.forEach((power) => {
    drawShape(power, power.color);
  });

  function drawShape(object, color = theme.first, shape) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.strokeStyle = 'none';
    ctx.lineWidth = 1;
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
    let color = theme.background;

    switch (power) {
      case 1:
        {
          color = colors.block1;
        }
        break;
      case 2:
        color = theme.color2 ? theme.color2 : 'blue';
        break;
      case 3:
        color = theme.color3 ? theme.color3 : 'green';
        break;
      case 4:
        color = theme.color4 ? theme.color4 : 'red';
        break;
      default:
        color = theme.background;
        break;
    }

    return color;
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
