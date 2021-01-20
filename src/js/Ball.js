export default class Ball {
  constructor(ball) {
    this.id = uniqueId();
    this.type = 'ball';
    this.speedX = ball.speedX;
    this.speedY = ball.speedY;
    this.maxSpeed = ball.maxSpeed;
    this.size = ball.size;
    this.top = ball.top;
    this.left = ball.left;
    this.height = ball.size;
    this.width = ball.size;
    this.isSticked = true;
    if (this.maxSpeed >= 20) this.maxSpeed = 20;
  }

  move(p) {
    if (!this.isSticked) {
      this.left += this.speedX * p;
      this.top += this.speedY * p;
    }
  }

  speedUp() {
    const speed = Math.sqrt(
      this.speedX * this.speedX + this.speedY * this.speedY
    );
    if (speed < this.maxSpeed) {
      this.speedY *= 1.01;
      this.speedX *= 1.01;
    }
  }
}

let IdCounter = 0;
function uniqueId() {
  return IdCounter++;
}
