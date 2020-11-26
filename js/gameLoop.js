function startLevel() {
  const game = this;
  game.level = new Level(this.levels[this.levelNumber], this);
  game.state = GAMESTATE.RUN;
  const level = game.level;
  let lastRender;
  window.requestAnimationFrame(gameLoop);

  function gameLoop(timestamp) {
    let progress = timestamp - lastRender;

    if (game.state === GAMESTATE.ABORT) return;

    if (game.state === GAMESTATE.RUN) {
      level.update(progress);
      level.collisions();
      if (level.isWon()) {
        game.nextLevel();
      }
      if (level.isLost()) {
        game.loseLife();
      }
    }

    level.draw();
    game.drawInfoPanel();

    lastRender = timestamp;
    window.requestAnimationFrame(gameLoop);
  }
}
