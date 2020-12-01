import { action } from './action';
import { options } from './options';

let game;
let countdownTimeoutId;

export function pause(gameObject) {
  window.clearInterval(countdownTimeoutId);
  game = gameObject;
  action('pause');
}

export function resume() {
  if (game) {
    const level = game.level;
    level.seconds = options.countdownDelay;
    if (level.isAnyBallSticked()) {
      level.hint = 'Press SPACEBAR to launch ball';
    }

    if (level.seconds <= 0) game.resume();
    else {
      countdownTimeoutId = setInterval(() => {
        level.seconds--;
        if (level.seconds <= 0) {
          window.clearInterval(countdownTimeoutId);
          game.resume();
        }
      }, 1000);
    }
    return true;
  } else return false;
}
