function startLevel() {
  const game = this;
  const level = game.level;
  game.drawAll();
  isPause = false;
  let lastRender;
  window.requestAnimationFrame(gameLoop);

  function gameLoop(timestamp) {
    if (isPause) return;
    let progress = timestamp - lastRender;

    game.update(progress);
    game.collisions();
    game.drawAll();

    if (level.isWon()) {
      game.nextLevel();
    }
    if (level.isLost()) {
      game.loseLife();
    }
    lastRender = timestamp;
    window.requestAnimationFrame(gameLoop);
  }
}

function update(progress) {
  let p = progress / 16;
  if (!p) p = 1;
  this.level.movePaddle(p);
  this.level.ballArray.forEach((ball) => {
    ball.move(p);
    ball.speedUp(p);
  });
}

function movePaddle(p) {
  if (
    (controlState.right && controlState.left) ||
    (!controlState.right && !controlState.left)
  ) {
    return;
  }
  const playfield = this.playfield;
  const paddle = this.paddle;
  const ballArray = this.ballArray;
  const before = paddle.left;
  if (controlState.left) {
    paddle.leftRange = playfield.left;
    paddle.moveLeft(p);
  } else {
    paddle.rightRange = playfield.left + playfield.width;
    paddle.moveRight(p);
  }
  const shift = paddle.left - before;
  ballArray.forEach((ball) => {
    if (ball.isSticked) {
      ball.left += shift;
    }
  });
}




