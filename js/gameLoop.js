function gameLoop() {
  if (isPause) return;

  draw(paddle);
  ballArray.forEach(draw);

  movePaddle();
  ballArray.forEach((ball) => ball.move());

  ballArray.forEach(collisions);

  increaseBallsSpeed();

  if (isLevelPassed()) {
    nextLevel();
    return;
  }

  if (isLevelFailed()) {
    loseLife();
    return;
  }

  window.requestAnimationFrame(gameLoop);
}

function movePaddle() {
  if (player1_left) {
    const before = paddle.left;
    paddle.moveLeft();
    const shift = before - paddle.left;

    ballArray.forEach((ball) => {
      if (ball.isSticked) {
        ball.left -= shift;
      }
    });
  }

  if (player1_right) {
    const before = paddle.left;
    paddle.moveRight();
    const shift = before - paddle.left;

    ballArray.forEach((ball) => {
      if (ball.isSticked) {
        ball.left -= shift;
      }
    });
  }
}
