export default function startNewGame() {
  keybordControl()
  const playerName = getPlayerName();
  const game = new Game(levelArray, playerName);
  game.loadLevel();
  game.startLevel();

  function getPlayerName() {
    let playerName = document.getElementById('playerName_Field').value;
    if (!playerName) {
      playerName = 'Player';
    }
    return playerName;
  }
}
