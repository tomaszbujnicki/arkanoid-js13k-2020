function startNewGame() {
  const game = new Game(levelArray);
  game.loadLevel();
  game.startLevel();
}

let IdCounter = 0;
function uniqueId() {
  return IdCounter++;
}
