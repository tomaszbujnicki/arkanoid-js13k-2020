import { random } from './functions';
import Ball from './Ball';

export default class Power {
  constructor(block) {
    this.id = uniqueId();
    this.type = 'power';
    this.left = block.left;
    this.top = block.top;
    this.width = block.width;
    this.height = block.height;
    let index = pickPower();
    this.name = powers[index].name;
    this.color = powers[index].color;
    this.action = powers[index].action;
  }

  move() {
    this.top++;
  }
}

function pickPower() {
  const rand = random(0, weightRange - 1);
  const index = powersArray.findIndex((e) => e > rand);
  return index;
}

const powers = [
  {
    id: 0,
    name: 'Wider Paddle',
    weight: 1,
    color: 'blue',
    action(level) {
      console.log(this.name);
      const playfield = level.playfield.width;
      const width = level.paddle.width;
      let unit = playfield / 20;

      if (width < playfield / 2) {
        if (width + unit > playfield / 2) unit = playfield / 2 - width;
        level.paddle.width += unit;
        level.paddle.left -= unit / 2;
      } else {
        level.game.updateScore(50);
      }
    },
  },
  {
    id: 1,
    name: 'Shorter Paddle',
    weight: 1,
    color: 'red',
    action(level) {
      console.log(this.name);
      const playfield = level.playfield.width;
      const width = level.paddle.width;
      let unit = playfield / 20;

      if (width > unit) {
        if (width - unit < unit) unit = width - unit;
        level.paddle.width -= unit;
        level.paddle.left += unit / 2;
      } else {
        level.game.updateScore(-50);
      }
    },
  },
  {
    id: 2,
    name: 'Faster Paddle',
    weight: 100,
    color: 'green',
    action(level) {
      console.log(this.name);
      const playfield = level.playfield.width;
      const speedX = level.paddle.speedX;
      const unit = playfield / 200;

      if (speedX < 10 * unit) {
        level.paddle.speedX += unit;
        if (level.paddle.speedX > 10 * unit) level.paddle.speedX = 10 * unit;
      } else {
        level.game.updateScore(50);
      }
    },
  },
  {
    id: 3,
    name: 'Slower Paddle',
    weight: 100,
    color: 'pink',
    action(level) {
      console.log(this.name);
      const playfield = level.playfield.width;
      const speedX = level.paddle.speedX;
      const unit = playfield / 200;
      const min = unit / 2;

      if (speedX > min) {
        level.paddle.speedX -= unit;
        if (level.paddle.speedX < min) level.paddle.speedX = min;
      } else {
        level.game.updateScore(50);
      }
      console.log(level.paddle.speedX);
    },
  },
  {
    id: 4,
    name: 'Triple balls',
    weight: 50,
    color: 'white',
    action(level) {
      const ball = level.ballArray[random(0, level.ballArray.length - 1)];

      const newBall = new Ball(ball);
      newBall.speedX = -0.5 * ball.speedX - 0.866 * ball.speedY;
      newBall.speedY = 0.866 * ball.speedX - 0.5 * ball.speedY;
      level.ballArray.push(newBall);

      const newBall2 = new Ball(ball);
      newBall2.speedX = -0.5 * ball.speedX + 0.866 * ball.speedY;
      newBall2.speedY = -0.866 * ball.speedX - 0.5 * ball.speedY;
      level.ballArray.push(newBall2);
    },
  },
  {
    id: 6,
    name: 'Score Bonus',
    weight: 10,
    color: 'gold',
    action(level) {
      level.game.updateScore(50);
    },
  },
  /* {
    id: 2,
    name: 'Sticky Paddle',
    weight: 1,
    color: 'blue',
    action(level) {},
  },
  {
    id: 3,
    name: 'Shooting',
    weight: 1,
    color: 'blue',
    action(level) {},
  },
  {
    id: 4,
    name: 'Balls slow down',
    weight: 1,
    color: 'blue',
    action(level) {},
  },

*/
];

const weightRange = powers.reduce((a, b) => a + (b['weight'] || 0), 0);
const powersArray = [0];
for (let item of powers) {
  powersArray.push(item.weight + powersArray[powersArray.length - 1]);
}
powersArray.splice(0, 1);

let IdCounter = 0;
function uniqueId() {
  return IdCounter++;
}
