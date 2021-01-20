import SOUND from './sounds';
import fscreen from 'fscreen';
import { DOMelements, SVG } from './data';

export const options = {
  isMuted: false,

  toggleMute() {
    this.isMuted = !this.isMuted;
    this.isMuted
      ? (DOMelements.muteBtn.innerHTML = SVG.soundOff)
      : (DOMelements.muteBtn.innerHTML = SVG.soundOn);
    for (let sound in SOUND) {
      SOUND[sound].muted = this.isMuted;
    }
  },
  toggleFullscreen() {
    if (fscreen.fullscreenElement === null) {
      fscreen.requestFullscreen(DOMelements.game);
    } else {
      if (fscreen.exitFullscreen()) {
        fscreen.exitFullscreen();
      }
    }
  },
};
