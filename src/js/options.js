import SOUND from './sounds';

export const options = {
  countdownDelay: 3,
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
};
