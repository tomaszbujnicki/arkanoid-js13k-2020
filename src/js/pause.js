import { action } from './action';
import { GAMESTATE } from './data';
import { options } from './options';

let game;
let countdownTimeoutId;

export function pause(gameObject) {
  game = gameObject;
  if (game.state === GAMESTATE.RUN || game.state === GAMESTATE.WAIT) {
    game.state = GAMESTATE.MENU;
    window.clearInterval(countdownTimeoutId);
    action('pause');
  }
}

export function resume() {
  if (game.state === GAMESTATE.MENU) {
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
