import { isKeyPressed } from './keybordControl';
import { random } from './functions';
import draw from './draw';
import drawInfo from './drawInfo';
import collisions from './collisions';
import Ball from './Ball';
import Block from './Block';
import Paddle from './Paddle';
import Playfield from './Playfield';

export default class Level {
  constructor(level, game) {
    this.playfield = new Playfield(level.playfield);
    this.paddle = this.createPaddle(level.paddle);
    this.ballArray = this.createBallArray(level.balls);
    this.blockArray = this.createBlockArray(level.blocks);
    this.powerArray = [];
    this.bulletArray = [];
    this.name = level.name;
    this.game = game;
    this.hint = 'Press SPACEBAR to launch ball';
    this.seconds = 0;
    this.collisions = collisions;
    this.draw = draw;
    this.drawInfo = drawInfo;
  }
  delete(object) {
    const arr = object.type + 'Array';
    const index = this[arr].findIndex((e) => e === object);
    this[arr].splice(index, 1);
  }
  unstickBalls() {
    this.ballArray.forEach((ball) => (ball.isSticked = false));
    this.hint = '';
  }
  isWon() {
    return this.blockArray.length === 0;
  }
  isLost() {
    return this.ballArray.length === 0;
  }

  update() {
    if (isKeyPressed.space) {
      this.unstickBalls();
      const newBullet = this.paddle.shoot();
      if (newBullet) {
        this.bulletArray.push(newBullet);
      }
    }
    this.movePaddle();
    this.paddle.reduceDuration();
    this.ballArray.forEach((ball) => {
      ball.changeSize();
      ball.speedUp();
      ball.move();
    });
    this.powerArray.forEach((power) => {
      power.move();
    });
    this.bulletArray.forEach((bullet) => {
      bullet.move();
    });
  }

  movePaddle() {
    const paddle = this.paddle;
    const playfield = this.playfield;
    const before = paddle.left;

    if (isKeyPressed.left) {
      paddle.left -= paddle.speedX;
    }
    if (isKeyPressed.right) {
      paddle.left += paddle.speedX;
    }

    if (paddle.left < playfield.left) {
      paddle.left = playfield.left;
    }

    if (paddle.left + paddle.width > playfield.left + playfield.width) {
      paddle.left = playfield.left + playfield.width - paddle.width;
    }

    const shift = this.paddle.left - before;
    if (shift !== 0) {
      this.ballArray.forEach((ball) => {
        if (ball.isSticked) {
          ball.posX += shift;
        }
      });
    }
  }

  createPaddle(paddle) {
    let newPaddle = new Paddle(paddle);
    if (this.canCreateObject(newPaddle)) {
      return newPaddle;
    } else return false;
  }

  createBallArray(balls) {
    const playfield = this.playfield;
    const ballArray = [];
    balls.forEach((item) => {
      const ball = new Ball(item, playfield);
      if (this.canCreateBall) {
        ballArray.push(ball);
      }
    });

    return ballArray;
  }

  createBlockArray(blocks) {
    const playfield = this.playfield;
    const blockArray = [];
    blocks.forEach((item) => {
      const block = new Block(item, playfield);
      if (this.canCreateObject(block)) {
        blockArray.push(block);
      }
    });

    return blockArray;
  }

  canCreateObject(item) {
    const playfield = this.playfield;
    if (
      item.width > 0 &&
      item.height > 0 &&
      item.left >= playfield.left &&
      item.left + item.width <= playfield.left + playfield.width &&
      item.top >= playfield.top &&
      item.top + item.height <= playfield.top + playfield.height
    ) {
      return true;
    } else {
      return false;
    }
  }

  canCreateBall(ball) {
    const playfield = this.playfield;
    if (
      ball.radius > 0 &&
      ball.posX - ball.radius >= playfield.left &&
      ball.posX + ball.radius <= playfield.left + playfield.width &&
      ball.posY + ball.radius >= playfield.top &&
      ball.posY + ball.radius <= playfield.top + playfield.height
    ) {
      return true;
    } else {
      return false;
    }
  }
}
