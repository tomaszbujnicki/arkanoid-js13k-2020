class Game {
  constructor(levelArray) {
    this.lives = 1;
    this.levelNumber = 0;
    this.score = 0;
    this.playerName = getPlayerName();
    this.levels = levelArray;
    this.startLevel = startLevel;
    this.updateScore = updateScore;
  }
  loadLevel() {
    this.level = new Level(this.levels[this.levelNumber]);
  }
  checkWinConditions() {
    if (this.level.isLevelPassed()) {
      this.levelNumber++;
      this.updateScore(this.level.score);
      this.loadLevel();
      this.startLevel();
      return true;
    }
  }
  checkLoseConditions() {
    if (this.level.isLevelFailed()) {
      this.lives--;
      if (this.lives >= 0){
        this.loadLevel();
        this.startLevel();
        return true;
      }
      gameOver(this.playerName, this.score);
      return true;
    }
  }
}

function getPlayerName() {
  let playerName = document.getElementById('playerName_Field').value;
  if (!playerName) {
    playerName = 'Player';
  }
  return playerName;
}
