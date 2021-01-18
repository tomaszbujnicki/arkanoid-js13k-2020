import '../css/reset.css';
import '../css/style.css';
import Game from './Game';
import { keybordControl } from './keybordControl';
import { Navigation } from './navigation';
import { setScreen } from './setScreen';

function init() {
  const game = new Game();
  const navigation = new Navigation(game);
  setScreen();

  keybordControl();
}

window.addEventListener('DOMContentLoaded', init);
