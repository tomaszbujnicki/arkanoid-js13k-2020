import SOUND from './sounds';
import startNewGame from './startNewGame';
import highscore from './highscore';

export function menu(action) {
  switch (action) {
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
        hideElement('options');
        openCard('playground');
        displayElement('info-panel');
        startNewGame();
      }
      break;
    case 'highscore':
      {
        SOUND.mouseClick.play();
        highscore.show();
        openCard('high-score');
      }
      break;
    case 'credits':
      {
        SOUND.mouseClick.play();
        openCard('credits');
      }
      break;
    case 'main-menu':
      {
        SOUND.mouseClick.play();
        openCard('menu');
      }
      break;

    default:
      break;
  }
}

export function gameOver(playerName, playerScore) {
  highscore.update(playerName, playerScore);
  disableContinueButton(true);
  openCard('gameOver');
  hideElement('info-panel');
  document.getElementById('gameOver__score').textContent = playerScore;
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
