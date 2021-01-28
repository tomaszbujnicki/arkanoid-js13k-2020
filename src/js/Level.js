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
  deletePower(power) {
    const index = this.powerArray.findIndex((e) => e === power);
    this.powerArray.splice(index, 1);
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
      ball.changeSize();
      ball.speedUp(p);
      ball.move(p);
    });
    this.powerArray.forEach((power) => {
      power.move(p);
    });
  }

  checkPowers() {
    const playfield = this.playfield;
    const paddle = this.paddle;
    const powerArray = this.powerArray;
    powerArray.forEach((power) => {
      const isCaught =
        power.top >= paddle.top - power.height &&
        power.top <= paddle.top + paddle.height &&
        power.left >= paddle.left - power.width &&
        power.left <= paddle.left + paddle.width;

      if (isCaught) {
        power.action(this);
        this.deletePower(power);
      }

      if (power.top > playfield.height + playfield.top) {
        this.deletePower(power);
      }
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

  createPaddle(paddle) {
    const playfield = this.playfield;
    let newPaddle = new Paddle(paddle, playfield);
    if (this.canCreateObject(newPaddle)) {
      return newPaddle;
    } else return false;
  }

  createBallArray(balls) {
    const playfield = this.playfield;
    const ballArray = [];
    balls.forEach((item) => {
      const ball = new Ball(item, playfield);
      //if (this.canCreateObject(ball)) {
      ballArray.push(ball);
      //}
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
}
