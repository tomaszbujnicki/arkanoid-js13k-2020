export default class Bullet {
  constructor(paddle) {
    this.id = uniqueId();
    this.type = 'bullet';
    this.height = 20;
    this.width = 8;
    this.top = paddle.top - this.height;
    this.left = paddle.left + paddle.width / 2 - this.width / 2;
    this.speedY = 5;
  }
  move() {
    if (!this.isSticked) {
      this.top += this.speedY;
    }
  }
}

let IdCounter = 0;
function uniqueId() {
  return IdCounter++;
}
