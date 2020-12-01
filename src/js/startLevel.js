import Level from './Level';
import { GAMESTATE } from './data';
import { isKeyPressed } from './keybordControl';
import { gameOver } from './gameOver';

export default function startLevel() {
  const game = this;
  game.level = new Level(this.levels[this.levelNumber], this);
  game.state = GAMESTATE.RUN;
  const level = game.level;
  let lastRender;
  window.requestAnimationFrame(gameLoop);

  function gameLoop(timestamp) {
    let progress = timestamp - lastRender;

    if (game.state === GAMESTATE.ABORT) return;

    if (isKeyPressed.pause) game.stop();

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
    level.drawInfo();
    game.drawPanel();

    lastRender = timestamp;
    window.requestAnimationFrame(gameLoop);
  }
}
