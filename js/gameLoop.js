function gameLoop(timestamp) {
  if (isPause) return;
  let progress = timestamp - lastRender;
  update(progress);
  check();
  drawAll();

  lastRender = timestamp;
  window.requestAnimationFrame(gameLoop);
}
let lastRender = 0;

function oldLoop() {
  increaseBallsSpeed();

  if (isLevelPassed()) {
    nextLevel();
    return;
  }

  if (isLevelFailed()) {
    loseLife();
    return;
  }
}

function update(progress) {
  let p = progress / 16;
  if (!p) p = 1;
  movePaddle(p);
  level.ballArray.forEach((ball) => ball.move(p));
}

function movePaddle(p) {
  const playfield = level.playfield;
  const paddle = level.paddle;
  const ballArray = level.ballArray;
  paddle.leftRange = playfield.left;
  paddle.rightRange = playfield.left + playfield.width;


  if (player1_left) {
    const before = paddle.left;
    paddle.moveLeft(p);
    const shift = before - paddle.left;

    ballArray.forEach((ball) => {
      if (ball.isSticked) {
        ball.left -= shift;
      }
    });
  }

  if (player1_right) {
    const before = paddle.left;
    paddle.moveRight(p);
    const shift = before - paddle.left;

    ballArray.forEach((ball) => {
      if (ball.isSticked) {
        ball.left -= shift;
      }
    });
  }
}

function check() {
  collisions();
}
