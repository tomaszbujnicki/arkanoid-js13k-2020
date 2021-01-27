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
    this.isSticked = ball.isSticked;
    this.remainingSize = 0;
    if (this.maxSpeed >= 25) this.maxSpeed = 25;
  }

  move(p) {
    if (!this.isSticked) {
      this.left += this.speedX * p;
      this.top += this.speedY * p;
    }
  }

  speedUp(p) {
    if (!this.isSticked) {
      const speed = Math.sqrt(
        this.speedX * this.speedX + this.speedY * this.speedY
      );
      if (speed < this.maxSpeed) {
        this.speedY += this.speedY > 0 ? 0.001 * p : -0.001 * p;
      }
    }
  }

  changeSize() {
    if (this.remainingSize > 0) {
      this.size += 0.25;
      this.remainingSize -= 0.25;
    }
    if (this.remainingSize < 0) {
      this.size -= 0.25;
      this.remainingSize += 0.25;
    }
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
