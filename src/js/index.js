import Game from './Game';
import { highscore } from './highscore';
import { setTheme } from './theme';
import { keybordControl } from './keybordControl';
import { Navigation } from './navigation';

function init() {
  const game = new Game();
  const navigation = new Navigation(game);
  highscore.load();
  setTheme();
  keybordControl();
}

window.addEventListener('DOMContentLoaded', init);
