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
  console.log(index);
  return index;
}

const powers = [
  {
    id: 0,
    name: 'Wider Paddle',
    weight: 10,
    color: 'red',
    action(level) {
      level.paddle.width += 20;
      level.paddle.left -= 10;
    },
  },
  {
    id: 1,
    name: 'Faster Paddle',
    weight: 1,
    color: 'green',
    action(level) {},
  },
  {
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
  {
    id: 5,
    name: 'Triple balls',
    weight: 50,
    color: 'yellow',
    action(level) {
      const ball = level.ballArray[random(0, level.ballArray.length - 1)];
      const preBall = {
        speedX: -0.5 * ball.speedX - 0.866 * ball.speedY,
        speedY: 0.866 * ball.speedX - 0.5 * ball.speedY,
        size: ball.size,
        top: ball.top,
        left: ball.left,
        maxSpeed: 20,
      };
      const newBall = new Ball(preBall);
      newBall.isSticked = false;
      level.ballArray.push(newBall);
      const preBall2 = {
        speedX: -0.5 * ball.speedX + 0.866 * ball.speedY,
        speedY: -0.866 * ball.speedX - 0.5 * ball.speedY,
        size: ball.size,
        top: ball.top,
        left: ball.left,
        maxSpeed: 20,
      };
      const newBall2 = new Ball(preBall2);
      newBall2.isSticked = false;
      level.ballArray.push(newBall2);
    },
  },
  {
    id: 6,
    name: 'Score Bonus',
    weight: 10,
    color: 'white',
    action(level) {
      level.game.updateScore(100);
    },
  },
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
