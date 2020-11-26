import SOUND from "js/sounds";

const options = {
  countdownDelay: 1,
  isMuted = false,
};

export default function options() {
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
}

