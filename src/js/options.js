import SOUND from './sounds';

export const options = {
  countdownDelay: 3,
  isMuted: false,
};

/* export function options() {
  document.getElementById('options__mute-button').addEventListener(
    'click',
    () => {
      SOUND.mouseClick.play();
      toggleMute();
    },
    false
  );

  function toggleMute() {
    isMuted = !isMuted;
    const button = document.getElementById('options__mute-button');
    isMuted
      ? button.classList.add('sound-off')
      : button.classList.remove('sound-off');
    for (let sound in SOUND) {
      SOUND[sound].muted = isMuted;
    }
  }
} */
