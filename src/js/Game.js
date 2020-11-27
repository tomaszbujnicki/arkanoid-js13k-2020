import drawPanel from './drawPanel';
import drawInfo from './drawInfo';
import SOUND from './sounds';
import startLevel from './startLevel';
import { GAMESTATE } from './data';
import { gameOver } from './gameOver';
import { pause } from './pause';

export default class Game {
  constructor(levelArray, playerName) {
    this.lives = 0;
    this.levelNumber = 0;
    this.score = 0;
    this.seconds = 0;
    this.hint = '';
    this.level = null;
    this.playerName = playerName;
    this.levels = levelArray;
    this.startLevel = startLevel;
    this.drawPanel = drawPanel;
    this.drawInfo = drawInfo;
    this.state = GAMESTATE.ABORT;
  }

  loadLevel() {}

  stop() {
    this.state = GAMESTATE.PAUSE;
    pause(this);
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
      gameOver(this);
    }
  }

  updateScore(points) {
    if (Number.isInteger(points)) {
      this.score += points;
    }
  }
}
