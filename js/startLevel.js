function startNewGame() {
  const game = new Game(levelArray);
  while (game.levelNumber < game.levels.length) {
    const level = new Level(game.levels[game.levelNumber]);
    level.startLevel();
    return;
  }
  gameEndYouWin();
}


let IdCounter = 0;
function uniqueId() {
  return IdCounter++;
}