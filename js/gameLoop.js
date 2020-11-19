function startLevel() {
  const level = this;
  level.drawAll();
  isPause = false;
  let lastRender = 0;
  window.requestAnimationFrame(gameLoop);

  function gameLoop(timestamp) {
    if (isPause) return;
    let progress = timestamp - lastRender;
    level.update(progress);
    //level.check();
    level.drawAll();
    lastRender = timestamp;
    window.requestAnimationFrame(gameLoop);
  }
}

function update(progress) {
  let p = progress / 16;
  if (!p) p = 1;
  this.movePaddle(p);
  this.ballArray.forEach((ball) => ball.move(p));
  //increaseBallsSpeed();
}

function movePaddle(p) {
  if ((player1_right && player1_left) || (!player1_right && !player1_left)) {
    return;
  }
  const playfield = this.playfield;
  const paddle = this.paddle;
  const ballArray = this.ballArray;
  const before = paddle.left;
  if (player1_left){
    paddle.leftRange = playfield.left;
    paddle.moveLeft(p)
  } else{
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

function check() {
  collisions();

  /*   if (isLevelPassed()) {
    nextLevel();
    return;
  }

  if (isLevelFailed()) {
    loseLife();
    return;
  } */
}
