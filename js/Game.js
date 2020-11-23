class Game {
  constructor(levelArray) {
    this.lives = 1;
    this.levelNumber = 0;
    this.score = 0;
    this.level = null;
    this.playerName = getPlayerName();
    this.levels = levelArray;
    this.startLevel = startLevel;
    this.updateInfoPanel = updateInfoPanel;
  }

  loadLevel() {
    this.level = new Level(this.levels[this.levelNumber], this);
  }
  nextLevel() {
    this.levelNumber++;
    isPause = true;
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
      isPause = true;
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

function loseLife() {
  game.lives--;
  isPause = true;
  window.setTimeout(() => {
    game.lives <= 0 ? gameOver() : startLevel();
  }, 2000);
}

function getPlayerName() {
  let playerName = document.getElementById('playerName_Field').value;
  if (!playerName) {
    playerName = 'Player';
  }
  return playerName;
}
