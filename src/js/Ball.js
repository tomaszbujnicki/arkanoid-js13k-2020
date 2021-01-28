export default class Ball {
  constructor(ball) {
    this.id = uniqueId();
    this.type = 'ball';
    this.speedX = ball.speedX;
    this.speedY = ball.speedY;
    this.maxSpeed = ball.maxSpeed;
    this.radius = ball.size / 2;
    this.posY = ball.top;
    this.posX = ball.left;
    this.isSticked = ball.isSticked;
    this.remainingSize = 0;
    if (this.maxSpeed >= 25) this.maxSpeed = 25;
  }

  move(p) {
    if (!this.isSticked) {
      this.posX += this.speedX * p;
      this.posY += this.speedY * p;
    }
  }

  speedUp(p) {
    if (!this.isSticked) {
      const speed = Math.sqrt(
        this.speedX * this.speedX + this.speedY * this.speedY
      );
      if (speed < this.maxSpeed) {
        this.speedY += this.speedY > 0 ? 0.0005 * p : -0.0005 * p;
        this.speedX += this.speedX > 0 ? 0.0005 * p : -0.0005 * p;
      }
      if (this.speedY < 0.5 && this.speedY > -0.5) {
        this.speedY = this.speedY > 0 ? 0.5 : -0.5;
      }
    }
  }

  changeSize() {
    if (this.remainingSize > 0) {
      this.radius += 0.25;
      this.remainingSize -= 0.25;
    }
    if (this.remainingSize < 0) {
      this.radius -= 0.25;
      this.remainingSize += 0.25;
    }
    if (this.radius < 5) this.radius = 5;
    if (this.radius > 100) this.radius = 100;
  }

  newSpeed(multiplier) {
    this.speedY *= multiplier;
    this.speedX *= multiplier;
  }
}

let IdCounter = 0;
function uniqueId() {
  return IdCounter++;
}
