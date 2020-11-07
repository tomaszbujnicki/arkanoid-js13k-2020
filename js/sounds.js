const gameSound = {
  hit_1: new Audio('audio/hit-1.wav'),
  hit_2: new Audio('audio/hit-2.wav'),
  hit_3: new Audio('audio/hit-3.wav'),
  hit_4: new Audio('audio/hit-4.wav'),
  hit_5: new Audio('audio/hit-5.wav'),
  destroyed_1: new Audio('audio/destroyed-1.wav'),
  destroyed_2: new Audio('audio/destroyed-2.wav'),
  ballLost_1: new Audio('audio/ball-lost-1.wav'),
  ballLost_2: new Audio('audio/ball-lost-2.wav'),
  fire: new Audio('audio/fire.wav'),
  gameOver: new Audio('audio/game-over.wav'),
  gameWon: new Audio('audio/game-won.wav'),
  liveLost: new Audio('audio/live-lost.wav'),
  levelClear: new Audio('audio/level-clear.wav'),
  mouseClick: new Audio('audio/mouse-click.wav'),
  powerDown: new Audio('audio/power-down.wav'),
  powerUp_1: new Audio('audio/power-up-1.wav'),
  powerUp_2: new Audio('audio/power-up-2.wav'),
  powerUp_3: new Audio('audio/power-up-3.wav'),
};

function muteAudio() {
  for (let sound in gameSound) {
    gameSound[sound].muted = true;
  }
}

function unmuteAudio() {
  for (let sound in gameSound) {
    gameSound[sound].muted = false;
  }
}
