export default class Ball {
  constructor(ball) {
    this.id = uniqueId();
    this.type = 'ball';
    this.speedX = ball.speedX;
    this.speedY = ball.speedY;
    this.minSpeedY = 0.5;
    this.maxSpeed = 12;
    this.radius = ball.radius;
    this.posY = ball.posY;
    this.posX = ball.posX;
    this.isSticked = ball.isSticked;
    this.remainingSize = 0;
  }

  move() {
    if (!this.isSticked) {
      this.posX += this.speedX;
      this.posY += this.speedY;
    }
  }

  speedUp() {
    if (!this.isSticked) {
      const speed = Math.sqrt(
        this.speedX * this.speedX + this.speedY * this.speedY
      );
      //console.log(speed);
      if (speed < this.maxSpeed) {
        this.speedY *= 1.00005;
        this.speedX *= 1.00005;
      }
      //console.log(speed);

      if (speed > this.maxSpeed) {
        const difference = this.maxSpeed / speed;
        this.speedX *= difference;
        this.speedY *= difference;
      }
      //console.log(speed);

      if (this.speedY < this.minSpeedY && this.speedY > -this.minSpeedY) {
        this.speedY = this.speedY > 0 ? this.minSpeedY : -this.minSpeedY;
        const speedXDirection = this.speedX > 0 ? 1 : -1;
        if (this.speedY < speed) {
          this.speedX =
            speedXDirection *
            Math.sqrt(speed * speed - this.speedY * this.speedY);
        } else this.speedX = 0;
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
    if (this.radius < 2.5) this.radius = 2.5;
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
