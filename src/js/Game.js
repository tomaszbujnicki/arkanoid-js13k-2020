import drawPanel from './drawPanel';
import { SOUND } from './sound';
import startLevel from './startLevel';
import { GAMESTATE } from './data';
import levelArray from './levels';
import { highscore } from './highscore';

export default class Game {
  constructor() {
    this.lives;
    this.levelNumber;
    this.score;
    this.level;
    this.playerName;
    this.countdownId;
    this.state = GAMESTATE.MENU;
    this.levels = levelArray;
    this.startLevel = startLevel;
    this.drawPanel = drawPanel;
  }

  startNewGame(playerName, callback) {
    this.lives = 0;
    this.levelNumber = 2;
    this.score = 0;
    this.level = null;
    this.playerName = playerName;
    this.state = GAMESTATE.ABORT;
    window.setTimeout(() => {
      this.startLevel();
      callback(true);
    }, 100);
  }

  pause() {
    if (this.state === GAMESTATE.RUN || this.state === GAMESTATE.WAIT) {
      this.state = GAMESTATE.MENU;
      window.clearInterval(this.countdownId);
      return true;
    }
  }

  resume() {
    if (this.lives >= 0 && this.state === GAMESTATE.MENU) {
      this.state = GAMESTATE.WAIT;
      this.level.seconds = 3;
      if (this.level.isAnyBallSticked()) {
        this.level.hint = 'Press SPACEBAR to launch ball';
      }
      this.countdownId = setInterval(() => {
        this.level.seconds--;
        if (this.level.seconds <= 0) {
          window.clearInterval(this.countdownId);
          this.state = GAMESTATE.RUN;
        }
      }, 1000);
      return true;
    }
  }

  theEnd() {} // game won, passed all levels

  nextLevel() {
    this.state = GAMESTATE.ABORT;
    this.levelNumber++;
    SOUND.levelClear.play();
    window.setTimeout(() => {
      if (this.levels.length > this.levelNumber) {
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
      level.hint = 'Press SPACEBAR to launch ball';
    } else {
      this.state = GAMESTATE.ABORT;
      const button = document.getElementById('endGame-button');
      button.classList.remove('hide');
      button.focus();
    }
  }

  endGame() {
    this.state = GAMESTATE.MENU;
    highscore.update(this.playerName, this.score);
    document.getElementById('gameOver__score').textContent = this.score;
    return true;
  }

  updateScore(points) {
    if (Number.isInteger(points)) {
      this.score += points;
    }
  }
}
