class Game {
  constructor(levelArray) {
    this.lives = 2;
    this.levelNumber = 2;
    this.score = 0;
    this.playerName = getPlayerName();
    this.levels = levelArray;
  }
}

function getPlayerName() {
  let playerName = document.getElementById('playerName_Field').value;
  if (!playerName) {
    playerName = 'Player';
  }
  return playerName;
}
