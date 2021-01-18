export const GAMESTATE = {
  RUN: 0,
  MENU: 1,
  ABORT: 2,
  WAIT: 3,
};

export const DOMelements = {
  // buttons
  buttons: [...document.querySelectorAll('button')],

  // menu buttons
  newGameBtn: document.getElementById('start-button'),
  startGameBtn: document.getElementById('playerName_Button'),
  continueGameBtn: document.getElementById('continue-button'),
  highscoreBtn: document.getElementById('high-score-button'),
  creditsBtn: document.getElementById('credits-button'),
  mainMenuBtns: [...document.querySelectorAll('.main-menu-button')],

  //options buttons
  muteBtn: document.getElementById('options__mute-button'),
  fullscreenBtn: document.getElementById('options__fullscreen-button'),

  // text input
  playerNameInput: document.getElementById('playerName_Field'),

  // cards
  cards: document.querySelectorAll('#game div.game-card'),
  playgroundCard: document.getElementById('playground'),
  playerNameCard: document.getElementById('playerName'),
  highscoreCard: document.getElementById('high-score'),
  creditsCard: document.getElementById('credits'),
  menuCard: document.getElementById('menu'),
  gameOverCard: document.getElementById('gameOver'),

  //
  options: document.getElementById('options'),
  infoPanel: document.getElementById('info-panel'),
};
