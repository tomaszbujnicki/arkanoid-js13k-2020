import hit_1 from '../audio/hit-1.wav';
import hit_2 from '../audio/hit-2.wav';
import hit_3 from '../audio/hit-3.wav';
import ballLost from '../audio/ball-lost.wav';
import coin from '../audio/coin.wav';
import fire from '../audio/fire.wav';
import gameOver from '../audio/game-over.wav';
import endGame from '../audio/end-game.wav';
import levelClear from '../audio/level-clear.wav';
import liveLost from '../audio/live-lost.wav';
import mouseClick from '../audio/mouse-click.wav';
import powerDown from '../audio/power-down.wav';
import powerUp_1 from '../audio/power-up-1.wav';
import powerUp_2 from '../audio/power-up-2.wav';
import powerUp_3 from '../audio/power-up-3.wav';

export const SOUND = {
  isMuted: false,
  volume: 80,

  hit_1: new Audio(hit_1),
  hit_2: new Audio(hit_2),
  hit_3: new Audio(hit_3),
  ballLost: new Audio(ballLost),
  coin: new Audio(coin),
  fire: new Audio(fire),
  gameOver: new Audio(gameOver),
  endGame: new Audio(endGame),
  levelClear: new Audio(levelClear),
  liveLost: new Audio(liveLost),
  mouseClick: new Audio(mouseClick),
  powerDown: new Audio(powerDown),
  powerUp_1: new Audio(powerUp_1),
  powerUp_2: new Audio(powerUp_2),
  powerUp_3: new Audio(powerUp_3),

  get() {
    if (localStorage.getItem('isMuted')) {
      this.isMuted = JSON.parse(localStorage.getItem('isMuted'));
    }
    Object.defineProperty(this, 'isMuted', {
      enumerable: false,
    });
    if (localStorage.getItem('volume')) {
      this.volume = parseInt(localStorage.getItem('volume'));
    }
    Object.defineProperty(this, 'volume', {
      enumerable: false,
    });
    this.setVolume();
    this.setMute();
  },

  setMute() {
    for (let sound in SOUND) {
      SOUND[sound].muted = this.isMuted;
    }
  },

  setVolume() {
    for (let sound in SOUND) {
      SOUND[sound].volume = this.volume / 100;
    }
  },

  toggleMute() {
    this.isMuted = !this.isMuted;
    this.save();
    this.setMute();
  },

  changeVolume(volume) {
    this.volume = volume;
    this.save();
    this.setVolume();
  },

  save() {
    localStorage.setItem('isMuted', this.isMuted);
    localStorage.setItem('volume', this.volume);
  },
};
