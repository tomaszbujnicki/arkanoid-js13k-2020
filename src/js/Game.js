import drawInfoPanel from './drawInfoPanel';
import SOUND from './sounds';
import startLevel from './startLevel';
import { GAMESTATE } from './data';
import { gameOver } from './menu';

export default class Game {
  constructor(levelArray, playerName) {
    this.lives = 0;
    this.levelNumber = 1;
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
    const level = this.level;
    this.lives--;
    if (this.lives >= 0) {
      level.ballArray = level.createBallArray(
        this.levels[this.levelNumber].balls,
        level.playfield
      );
      level.paddle = level.createPaddle(
        this.levels[this.levelNumber].paddle,
        level.playfield
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
