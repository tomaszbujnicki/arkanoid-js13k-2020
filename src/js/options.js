import SOUND from './sounds';
import fscreen from 'fscreen';

export const options = {
  isMuted: false,

  toggleMute() {
    this.isMuted = !this.isMuted;
    const button = document.getElementById('options__mute-button');
    this.isMuted
      ? button.classList.add('sound-off')
      : button.classList.remove('sound-off');
    for (let sound in SOUND) {
      SOUND[sound].muted = this.isMuted;
    }
  },
  toggleFullscreen() {
    let game = document.getElementById('game');

    if (fscreen.fullscreenElement === null) {
      fscreen.requestFullscreen(game);
    } else {
      if (fscreen.exitFullscreen()) {
        fscreen.exitFullscreen();
      }
    }
  },
};
