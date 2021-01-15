import SOUND from './sounds';
import startNewGame from './startNewGame';
import highscore from './highscore';
import { resume } from './pause';
import { options } from './options';

export function action(view) {
  switch (view) {
    case 'new-game':
      {
        SOUND.mouseClick.play();
        openCard('playerName');
        document.getElementById('playerName_Field').focus();
      }
      break;
    case 'start-game':
      {
        SOUND.mouseClick.play();
        disableContinueButton(false);
        hideElement('options');
        openCard('playground');
        displayElement('info-panel');
        startNewGame();
      }
      break;
    case 'continue-game':
      {
        if (resume()) {
          SOUND.mouseClick.play();
          hideElement('options');
          openCard('playground');
          displayElement('info-panel');
        }
      }
      break;

    case 'highscore':
      {
        SOUND.mouseClick.play();
        highscore.show();
        openCard('high-score');
        document.getElementById('main-menu-highscore').focus();
      }
      break;
    case 'credits':
      {
        SOUND.mouseClick.play();
        openCard('credits');
        document.getElementById('main-menu-credits').focus();
      }
      break;
    case 'main-menu':
      {
        SOUND.mouseClick.play();
        openCard('menu');
        document.getElementById('start-button').focus();
      }
      break;
    case 'game-over':
      {
        disableContinueButton(true);
        openCard('gameOver');
        document.getElementById('main-menu-gameOver').focus();
        hideElement('info-panel');
        displayElement('options');
      }
      break;
    case 'pause':
      {
        openCard('menu');
        hideElement('info-panel');
        displayElement('options');
        document.getElementById('continue-button').focus();
      }
      break;
    case 'mute':
      {
        SOUND.mouseClick.play();
        options.toggleMute();
      }
      break;
    case 'fullscreen':
      {
        SOUND.mouseClick.play();
        options.toggleFullscreen();
      }
      break;

    default:
      break;
  }
}

function disableContinueButton(isDisabled) {
  const continueButton = document.getElementById('continue-button');
  continueButton.disabled = isDisabled;
  if (!isDisabled) {
    continueButton.classList.remove('disabled');
  } else {
    continueButton.classList.add('disabled');
  }
}

function hideElement(id) {
  document.getElementById(id).classList.add('hide');
}
function displayElement(id) {
  document.getElementById(id).classList.remove('hide');
}
function openCard(id) {
  closeCards();
  displayElement(id);
}
function closeCards() {
  document
    .querySelectorAll('#game div.game-card')
    .forEach((element) => element.classList.add('hide'));
}
