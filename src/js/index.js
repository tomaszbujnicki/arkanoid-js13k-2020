import Game from './Game';
import { highscore } from './highscore';
import { theme } from './theme';
import { keybordControl } from './keybordControl';
import { Navigation } from './navigation';
import { SOUND } from './sound';
import { DOMelements, SVG } from './data';

function init() {
  const game = new Game();
  const navigation = new Navigation(game);
  initialSettings();
  keybordControl();
}

function initialSettings() {
  highscore.get();
  theme.get();
  SOUND.get();
  DOMelements.muteBtn.innerHTML = SOUND.isMuted ? SVG.soundOff : SVG.soundOn;
  DOMelements.volumeInput.value = SOUND.volume;
}

window.addEventListener('DOMContentLoaded', init);
