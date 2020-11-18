class Ball {
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
    if (this.maxSpeed >= 25) this.maxSpeed = 25;
  }

  move() {
    if (!this.isSticked) {
      this.left += this.speedX;
      this.top += this.speedY;
    }
  }

  speedUp() {
    const speed = Math.sqrt(
      this.speedX * this.speedX + this.speedY * this.speedY
    );
    if (speed < this.maxSpeed) {
      this.speedY > 0 ? (this.speedY += 0.0005) : (this.speedY -= 0.0005);
      this.speedX > 0 ? (this.speedX += 0.0005) : (this.speedX -= 0.0005);
    }
  }
}
