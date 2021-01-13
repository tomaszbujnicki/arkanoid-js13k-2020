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
    this.paddle = this.createPaddle(level.paddle, this.playfield);
    this.ballArray = this.createBallArray(level.balls, this.playfield);
    this.blockArray = this.createBlockArray(level.blocks, this.playfield);
    this.name = level.name;
    this.game = game;
    this.hint = 'Press SPACEBAR to launch ball';
    this.seconds = 0;
    this.collisions = collisions;
    this.draw = draw;
    this.drawInfo = drawInfo;
  }

  deleteBall(ball) {
    const index = this.ballArray.findIndex((e) => e === ball);
    this.ballArray.splice(index, 1);
  }
  deleteBlock(block) {
    const index = this.blockArray.findIndex((e) => e === block);
    this.blockArray.splice(index, 1);
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

  update(progress) {
    let p = progress / 16;
    if (!p) p = 1;
    p /= 2;
    if (isKeyPressed.space) {
      this.unstickBalls();
    }
    this.movePaddle(p);
    this.ballArray.forEach((ball) => {
      ball.move(p);
      ball.speedUp();
    });
  }

  movePaddle(p) {
    if (
      (isKeyPressed.right && isKeyPressed.left) ||
      (!isKeyPressed.right && !isKeyPressed.left)
    ) {
      return;
    }
    const before = this.paddle.left;

    if (isKeyPressed.left) {
      this.paddle.leftRange = this.playfield.left;
      this.paddle.moveLeft(p);
    } else {
      this.paddle.rightRange = this.playfield.left + this.playfield.width;
      this.paddle.moveRight(p);
    }
    const shift = this.paddle.left - before;
    this.ballArray.forEach((ball) => {
      if (ball.isSticked) {
        ball.left += shift;
      }
    });
  }

  isAnyBallSticked() {
    for (const ball of this.ballArray) {
      if (ball.isSticked) return true;
    }
    return false;
  }

  randomlyCreateNewBall() {
    if (random(1, 100) <= 10) {
      const item = {
        speedX: 1.5,
        speedY: -3,
        size: random(5, 50),
        top: random(0, this.playfield.height - 150),
        left: random(0, this.playfield.width - 50),
        maxSpeed: 20,
      };
      const ball = new Ball(item, this.playfield);
      ball.isSticked = false;
      this.ballArray.push(ball);
    }
  }

  createPaddle(paddle, playfield) {
    let newPaddle = new Paddle(paddle, playfield);
    if (this.canCreateObject(newPaddle, playfield)) {
      return newPaddle;
    } else return false;
  }

  createBallArray(balls, playfield) {
    const ballArray = [];
    balls.forEach((item) => {
      const ball = new Ball(item, playfield);
      if (this.canCreateObject(ball, playfield)) {
        ballArray.push(ball);
      }
    });

    return ballArray;
  }

  createBlockArray(blocks, playfield) {
    const blockArray = [];
    blocks.forEach((item) => {
      const block = new Block(item, playfield);
      if (this.canCreateObject(block, playfield)) {
        blockArray.push(block);
      }
    });

    return blockArray;
  }

  canCreateObject(item, playfield) {
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
}
