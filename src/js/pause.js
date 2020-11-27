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
  game.seconds = options.countdownDelay;
  if (game.seconds <= 0) game.resume();
  else {
    countdownTimeoutId = setInterval(() => {
      game.seconds--;
      if (game.seconds <= 0) {
        //if (isAnyBallSticked()) {
        game.hint = 'Press SPACEBAR to launch ball';
        //}
        window.clearInterval(countdownTimeoutId);
        game.resume();
      }
    }, 1000);
  }
}
