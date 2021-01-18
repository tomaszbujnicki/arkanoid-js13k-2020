import drawPanel from './drawPanel';
import SOUND from './sounds';
import startLevel from './startLevel';
import { GAMESTATE } from './data';
import { gameOver } from './gameOver';
import levelArray from './levels';
import { resume } from './pause';

export default class Game {
  constructor() {
    this.lives;
    this.levelNumber;
    this.score;
    this.level;
    this.playerName;
    this.state = GAMESTATE.MENU;
    this.levels = levelArray;
    this.startLevel = startLevel;
    this.drawPanel = drawPanel;
  }

  startNewGame(playerName) {
    this.lives = 1;
    this.levelNumber = 0;
    this.score = 0;
    this.level = null;
    this.playerName = playerName;
    this.state = GAMESTATE.ABORT;
    window.setTimeout(() => {
      this.startLevel();
    }, 100);
  }

  resume() {
    this.state = GAMESTATE.RUN;
  }

  theEnd() {} // game won, passed all levels

  nextLevel() {
    this.state = GAMESTATE.ABORT;
    // level passed info
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
      gameOver(this);
    }
  }

  updateScore(points) {
    if (Number.isInteger(points)) {
      this.score += points;
    }
  }
}
