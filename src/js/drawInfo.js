const canvas = document.querySelector('#playgroud-info');
const ctx = canvas.getContext('2d');

export default function drawInfo() {
  ctx.save();
  ctx.clearRect(0, 0, 1260, 700);

  const center_x = this.level.playfield.width / 2 + this.level.playfield.left;
  const center_y = this.level.playfield.height / 2 + this.level.playfield.top;
  const paddle = this.level.paddle.top;
  const seconds = this.seconds;
  const message = this.hint;

  if (seconds > 0) {
    countdown();
  } else {
    if (message) hint();
  }

  ctx.restore();

  function countdown() {
    ctx.font = 'bold 200pt Verdana';
    ctx.textAlign = 'center';

    ctx.fillStyle = 'white';
    ctx.fillText(seconds, center_x, center_y + 80);

    ctx.strokeStyle = 'white';
    ctx.lineWidth = 6;
    ctx.strokeText(seconds, center_x, center_y + 80);

    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 3;
    ctx.strokeText(seconds, center_x, center_y + 80);
  }

  function hint() {
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 1;
    ctx.font = 'bold 18pt Verdana';
    ctx.fillStyle = blink();
    ctx.textAlign = 'center';
    ctx.fillText(message, center_x, paddle - 40);
    ctx.strokeText(message, center_x, paddle - 40);
  }
}

const myColor = {
  r: 255,
  g: 255,
  b: 255,
  up: false,
};

function blink() {
  if (myColor.up) {
    myColor.g += 5;
    myColor.r += 5;
    if (myColor.r >= 250) myColor.up = false;
  } else {
    myColor.g -= 5;
    myColor.r -= 5;
    if (myColor.r <= 5) myColor.up = true;
  }
  const color = `rgb(${myColor.r}, ${myColor.g}, ${myColor.b})`;
  return color;
}
