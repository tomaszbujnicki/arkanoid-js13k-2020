export default class Bullet {
  constructor(paddle) {
    this.id = uniqueId();
    this.type = 'bullet';
    this.height = 36;
    this.width = 12;
    this.top = paddle.top - this.height;
    this.left =
      paddle.left + (paddle.width - this.width) * paddle.barrelPosition;
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
