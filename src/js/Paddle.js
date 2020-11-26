export default class Paddle {
  constructor(paddle, playfield) {
    this.type = 'paddle';
    this.top = paddle.top;
    this.left = paddle.left;
    this.height = paddle.height;
    this.width = paddle.width;
    this.speedX = paddle.speedX;
    this.leftRange = playfield.left;
    this.rightRange = playfield.left + playfield.width;
    if (this.speedX >= 50) this.speedX = 50;
  }

  moveLeft(p) {
    this.left -= this.speedX * p;
    if (this.left < this.leftRange) {
      this.left = this.leftRange;
    }
  }

  moveRight(p) {
    this.left += this.speedX * p;
    if (this.left + this.width > this.rightRange) {
      this.left = this.rightRange - this.width;
    }
  }
}