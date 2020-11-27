import highscore from './highscore';
import { action } from './action';

export function gameOver(game) {
  highscore.update(game.playerName, game.score);

  document.getElementById('gameOver__score').textContent = game.score;
  action('game-over');
}
