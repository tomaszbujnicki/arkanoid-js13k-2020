import { random } from './functions';
import Ball from './Ball';
import { SOUND } from './sound';

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
    weight: 10,
    color: 'white',
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
    weight: 10,
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
    weight: 1000,
    color: 'violet',
    action(level) {
      console.log(this.name);
      const playfield = level.playfield.width;
      const unit = playfield / 500;

      level.paddle.speedX += unit;
      if (level.paddle.speedX > 10 * unit) level.paddle.speedX = 10 * unit;
    },
  },
  {
    id: 3,
    name: 'Slower Paddle',
    weight: 10,
    color: 'pink',
    action(level) {
      console.log(this.name);
      const playfield = level.playfield.width;
      const unit = playfield / 500;

      level.paddle.speedX -= unit;
      if (level.paddle.speedX < unit) level.paddle.speedX = unit;
    },
  },
  {
    id: 4,
    name: 'Triple balls',
    weight: 100,
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
    id: 5,
    name: 'Live +1',
    weight: 10,
    color: 'green',
    action(level) {
      level.game.lives++;
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
  {
    id: 6,
    name: 'Balls speed up',
    weight: 10,
    color: 'red',
    action(level) {
      level.ballArray.forEach((ball) => {
        ball.newSpeed(1.5);
      });
    },
  },
  {
    id: 7,
    name: 'Balls slow down',
    weight: 10,
    color: 'white',
    action(level) {
      level.ballArray.forEach((ball) => {
        ball.newSpeed(0.7);
      });
    },
  },
  {
    id: 8,
    name: 'Smaller Balls',
    weight: 10,
    color: 'red',
    action(level) {
      level.ballArray.forEach((ball) => {
        let reduce;
        if (ball.radius <= 20) reduce = 5;
        else if (ball.radius <= 40) reduce = 10;
        else if (ball.radius <= 60) reduce = 20;
        else reduce = 30;
        ball.remainingSize -= reduce;
      });
    },
  },
  {
    id: 8,
    name: 'Bigger Ball',
    weight: 10,
    color: 'blue',
    action(level) {
      const rand = random(0, level.ballArray.length - 1);
      level.ballArray[rand].remainingSize += 10;
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
