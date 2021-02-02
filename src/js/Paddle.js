export default class Paddle {
  constructor(paddle) {
    this.type = 'paddle';
    this.top = paddle.top;
    this.left = paddle.left;
    this.height = paddle.height;
    this.width = paddle.width;
    this.speedX = paddle.speedX;
    this.isSticky = 0;
    this.canShoot = 0;
  }
  reduceDuration() {
    if (this.isSticky > 0) this.isSticky -= 1;
    if (this.canShoot > 0) this.canShoot -= 1;
  }
}
