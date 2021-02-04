export default class Bullet {
  constructor(paddle) {
    this.id = uniqueId();
    this.type = 'bullet';
    this.height = 36;
    this.width = paddle.barrel.width;
    this.top = paddle.top - this.height;
    this.left = paddle.barrel.left;
    this.speedY = 3;
  }
  move() {
    this.top -= this.speedY;
  }
}

let IdCounter = 0;
function uniqueId() {
  return IdCounter++;
}
