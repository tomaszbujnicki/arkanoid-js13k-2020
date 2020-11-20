document.getElementById('start-button').addEventListener(
  'click',
  () => {
    gameSound.mouseClick.play();
    openCard('playerName');
    document.getElementById('playerName_Field').focus();
  },
  false
);
document.getElementById('playerName_Button').addEventListener(
  'click',
  () => {
    gameSound.mouseClick.play();
    hideElement('options');
    displayElement('info-panel')
    openCard('playGround');
    startNewGame();
  },
  false
);
document.getElementById('continue-button').addEventListener(
  'click',
  () => {
    gameSound.mouseClick.play();
    releaseGame();
  },
  false
);
document.getElementById('high-score-button').addEventListener(
  'click',
  () => {
    gameSound.mouseClick.play();
    showHighScoreList();
    openCard('high-score');
  },
  false
);
document.getElementById('credits-button').addEventListener(
  'click',
  () => {
    gameSound.mouseClick.play();
    openCard('credits');
  },
  false
);
document.querySelectorAll('.main-menu-button').forEach((button) =>
  button.addEventListener(
    'click',
    () => {
      gameSound.mouseClick.play();
      openCard('menu');
    },
    false
  )
);
document.getElementById('options__mute-button').addEventListener(
  'click',
  () => {
    gameSound.mouseClick.play();
    toggleMute();
  },
  false
);

function openCard(id) {
  closeCards();
  displayElement(id);
}

function closeCards() {
  document
    .querySelectorAll('#game div.game-card')
    .forEach((element) => element.classList.add('hide'));
}