class Game {
  constructor(levelArray) {
    this.lives = 2;
    this.levelNumber = 0;
    this.score = 0;
    this.level = null;
    this.playerName = getPlayerName();
    this.levels = levelArray;
    this.isPause = true;
    this.startLevel = startLevel;
    this.updateInfoPanel = updateInfoPanel;
  }

  loadLevel() {
    this.level = new Level(this.levels[this.levelNumber], this);
  }

  pause() {
    const game = this;
    this.isPause = true;
    //clearCountDown();
    const continueButton = document.getElementById('continue-button');
    continueButton.addEventListener('click', rel, false);
    function rel() {
      gameSound.mouseClick.play();
      game.releaseGame();
      continueButton.removeEventListener('click', rel, false);
    }

    continueButton.disabled = false;
    continueButton.classList.remove('disabled');

    hideElement('info-panel');
    displayElement('options');
    openCard('menu');
    hint();
  }

  releaseGame() {
    hideElement('options');
    displayElement('info-panel');
    openCard('playground');
    controlState.pause = false;
    this.startLevel();
    //countDown();
  }

  nextLevel() {
    this.isPause = true;
    //this.levelNumber++;

    gameSound.levelClear.play();
    window.setTimeout(() => {
      if (this.levels.length > this.levelNumber) {
        this.loadLevel();
        this.startLevel();
      } else {
        this.gameEnd();
      }
    }, 2000);
  }
  loseLife() {
    this.lives--;
    this.updateInfoPanel();
    if (this.lives >= 0) {
      this.level.ballArray = createBallArray(
        this.levels[this.levelNumber].balls,
        this.level.playfield
      );
      this.level.paddle = createPaddle(
        this.levels[this.levelNumber].paddle,
        this.level.playfield
      );
    } else {
      this.isPause = true;
      gameOver(this.playerName, this.score);
    }
  }
  updateScore(points) {
    if (Number.isInteger(points)) {
      this.score += points;
      this.updateInfoPanel();
    }
  }
}

function gameEnd() {} // game won, passed all levels

function getPlayerName() {
  let playerName = document.getElementById('playerName_Field').value;
  if (!playerName) {
    playerName = 'Player';
  }
  return playerName;
}
