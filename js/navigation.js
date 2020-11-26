import SOUND from 'js/sounds';
import startNewGame from 'js/startNewGame';

export default function navigation() {
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

  document.getElementById('start-button').addEventListener(
    'click',
    () => {
      SOUND.mouseClick.play();
      openCard('playerName');
      document.getElementById('playerName_Field').focus();
    },
    false
  );
  document.getElementById('playerName_Button').addEventListener(
    'click',
    () => {
      SOUND.mouseClick.play();
      hideElement('options');
      openCard('playground');
      displayElement('info-panel');
      startNewGame();
    },
    false
  );
  document.getElementById('high-score-button').addEventListener(
    'click',
    () => {
      SOUND.mouseClick.play();
      showHighScoreList();
      openCard('high-score');
    },
    false
  );
  document.getElementById('credits-button').addEventListener(
    'click',
    () => {
      SOUND.mouseClick.play();
      openCard('credits');
    },
    false
  );
  document.querySelectorAll('.main-menu-button').forEach((button) =>
    button.addEventListener(
      'click',
      () => {
        SOUND.mouseClick.play();
        openCard('menu');
      },
      false
    )
  );
}
