import Bullet from './Bullet';
import { SOUND } from './sound';

export default class Paddle {
  constructor(paddle) {
    this.type = 'paddle';
    this.top = paddle.top;
    this.left = paddle.left;
    this.height = paddle.height;
    this.width = paddle.width;
    this.speedX = paddle.speedX;
    this.isSticky = 0;
    this.shootDelay = 0;
    this.ammo = 100;
    this.barrelPosition = 0.5;
    this.barrel = {
      top: this.top - 10,
      width: 12,
      height: this.height + 10,
      left: this.left,
    };
  }
  reduceDuration() {
    if (this.isSticky > 0) this.isSticky -= 1;
    if (this.shootDelay > 0) this.shootDelay -= 1;
  }
  shoot() {
    if (this.shootDelay === 0 && this.ammo > 0) {
      this.ammo--;
      this.shootDelay = 30;
      SOUND.fire.currentTime = 0;
      SOUND.fire.play();
      return new Bullet(this);
    } else {
      return false;
    }
  }
  moveBarrel(direction) {
    if (direction === 'left') {
      this.barrelPosition -= 0.01;
      if (this.barrelPosition < 0) this.barrelPosition = 0;
    }
    if (direction === 'right') {
      this.barrelPosition += 0.01;
      if (this.barrelPosition > 1) this.barrelPosition = 1;
    }
  }
}
