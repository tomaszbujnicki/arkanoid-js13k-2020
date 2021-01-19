export const GAMESTATE = {
  RUN: 0,
  MENU: 1,
  ABORT: 2,
  WAIT: 3,
};

export const DOMelements = {
  // buttons
  buttons: [...document.querySelectorAll('button')],
  newGameBtn: document.getElementById('new-button'),
  startGameBtn: document.getElementById('playerName_Button'),
  continueGameBtn: document.getElementById('continue-button'),
  highscoreBtn: document.getElementById('high-score-button'),
  creditsBtn: document.getElementById('credits-button'),
  menuBtns: [...document.querySelectorAll('.main-menu-button')],
  menuHighscoreBtn: document.getElementById('main-menu-highscore'),
  menuCreditsBtn: document.getElementById('main-menu-credits'),
  menuGameOverBtn: document.getElementById('main-menu-gameOver'),
  muteBtn: document.getElementById('options__mute-button'),
  fullscreenBtn: document.getElementById('options__fullscreen-button'),
  // text input
  playerNameInput: document.getElementById('playerName_Field'),
  // cards
  cards: document.querySelectorAll('#game div.game-card'),
  playgroundCard: document.getElementById('playground'),
  newGameCard: document.getElementById('new-game'),
  highscoreCard: document.getElementById('high-score'),
  creditsCard: document.getElementById('credits'),
  menuCard: document.getElementById('menu'),
  gameOverCard: document.getElementById('gameOver'),
  // panel
  options: document.getElementById('options'),
  infoPanel: document.getElementById('info-panel'),
};
