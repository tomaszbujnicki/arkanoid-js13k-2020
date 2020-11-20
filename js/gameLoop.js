function startLevel() {
  const game = this;
  const level = game.level;
  level.drawAll();
  isPause = false;
  let lastRender;
  window.requestAnimationFrame(gameLoop);

  function gameLoop(timestamp) {
    if (isPause) return;
    let progress = timestamp - lastRender;
    level.update(progress);
    level.collisions();
    level.drawAll();
    if (game.checkWinConditions()) return;
    if (game.checkLoseConditions()) return;
    lastRender = timestamp;
    window.requestAnimationFrame(gameLoop);
  }
}

function update(progress) {
  let p = progress / 16;
  if (!p) p = 1;
  this.movePaddle(p);
  this.ballArray.forEach((ball) => {
    ball.move(p);
    ball.speedUp(p);
  });
}

function movePaddle(p) {
  if ((player1_right && player1_left) || (!player1_right && !player1_left)) {
    return;
  }
  const playfield = this.playfield;
  const paddle = this.paddle;
  const ballArray = this.ballArray;
  const before = paddle.left;
  if (player1_left) {
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

function nextLevel() {
  game.level++;
  isPause = true;
  window.setTimeout(() => {
    levelArray.length <= game.level ? gameEnd() : startLevel();
  }, 2000);
}

function gameEnd() {} // game won, passed all levels

function loseLife() {
  game.lives--;
  updateInfoPanel();
  isPause = true;
  window.setTimeout(() => {
    game.lives <= 0 ? gameOver() : startLevel();
  }, 2000);
}

function gameOver(playerName, playerScore) {
  highScoreList.push({ player: playerName, score: playerScore });
  updateHighScoreList();
  displayElement('gameOver');
  hideElement('info-panel');
  hideElement('canvas');
  continueButton = document.getElementById('continue-button');
  continueButton.disabled = true;
  continueButton.classList.add('disabled');
  document.getElementById('gameOver__score').textContent = playerScore;
  isPause = true;
}
