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
    this.ammo = 0;
  }
  reduceDuration() {
    if (this.isSticky > 0) this.isSticky -= 1;
    if (this.shootDelay > 0) this.shootDelay -= 1;
  }
  shoot() {
    if (this.shootDelay === 0 && this.ammo > 0) {
      this.ammo--;
      this.shootDelay = 100;
      SOUND.fire.play();
      return new Bullet(this);
    } else {
      return false;
    }
  }
}
