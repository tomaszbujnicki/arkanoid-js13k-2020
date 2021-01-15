import '../css/reset.css';
import '../css/style.css';

import { navigation } from './navigation';
import { setScreen } from './setScreen';

function init() {
  setScreen();
  navigation();
}

window.addEventListener('DOMContentLoaded', init);
