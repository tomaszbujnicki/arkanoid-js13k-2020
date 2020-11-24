function startNewGame() {
  hideElement('options');
  openCard('playground');
  displayElement('info-panel')
  keybordControl()
  const game = new Game(levelArray);
  game.loadLevel();
  game.startLevel();
}

let IdCounter = 0;
function uniqueId() {
  return IdCounter++;
}
