import drawInfoPanel from 'js/drawInfoPanel';
import SOUND from "js/sounds";

const GAMESTATE = {
  RUN: 0,
  PAUSE: 1,
  ABORT: 2,
};

export default class Game {
  constructor(levelArray, playerName) {
    this.lives = 2;
    this.levelNumber = 0;
    this.score = 0;
    this.level = null;
    this.playerName = playerName;
    this.levels = levelArray;
    this.startLevel = startLevel;
    this.drawInfoPanel = drawInfoPanel;
    this.state = GAMESTATE.ABORT;
  }

  loadLevel() {}

/*   pause() {
    const game = this;
    this.isPause = true;
    //clearCountDown();
    const continueButton = document.getElementById('continue-button');
    continueButton.addEventListener('click', rel, false);
    function rel() {
      SOUND.mouseClick.play();
      game.releaseGame();
      continueButton.removeEventListener('click', rel, false);
    }

    continueButton.disabled = false;
    continueButton.classList.remove('disabled');

    hideElement('info-panel');
    displayElement('options');
    openCard('menu');
    hint();
  } */

  theEnd() {} // game won, passed all levels

  nextLevel() {
    this.state = GAMESTATE.ABORT;
    // level passed info
    this.levelNumber++;
    SOUND.levelClear.play();
    window.setTimeout(() => {
      if (this.levels.length > this.levelNumber) {
        this.loadLevel();
        this.startLevel();
      } else {
        this.theEnd();
      }
    }, 2000);
  }

  loseLife() {
    this.lives--;
    if (this.lives >= 0) {
      this.level.ballArray = createBallArray(
        this.levels[this.levelNumber].balls,
        this.level.playfield
      );
      this.level.paddle = createPaddle(
        this.levels[this.levelNumber].paddle,
        this.level.playfield
      );
    } else {
      this.state = GAMESTATE.ABORT;
      gameOver(this.playerName, this.score);
    }
  }

  updateScore(points) {
    if (Number.isInteger(points)) {
      this.score += points;
    }
  }
}
