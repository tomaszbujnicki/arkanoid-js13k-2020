class Game {
  constructor() {
    this.lives = 2;
    this.level = 1;
    this.score = 0;
    this.playerName = getPlayerName();
  }
}

function getPlayerName() {
  let playerName = document.getElementById('playerName_Field').value;
  if (!playerName) {
    playerName = 'Player';    
  }
  return playerName;
}
