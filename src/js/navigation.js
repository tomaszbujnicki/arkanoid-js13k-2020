import { action } from './action';

export function navigation() {
  document.getElementById('start-button').focus();
  document
    .getElementById('start-button')
    .addEventListener('click', () => action('new-game'));
  document
    .getElementById('playerName_Button')
    .addEventListener('click', () => action('start-game'));
  document
    .getElementById('continue-button')
    .addEventListener('click', () => action('continue-game'));
  document
    .getElementById('high-score-button')
    .addEventListener('click', () => action('highscore'));
  document
    .getElementById('credits-button')
    .addEventListener('click', () => action('credits'));
  document
    .querySelectorAll('.main-menu-button')
    .forEach((button) =>
      button.addEventListener('click', () => action('main-menu'))
    );
  document
    .getElementById('options__mute-button')
    .addEventListener('click', () => action('mute'));
  document
    .getElementById('options__fullscreen-button')
    .addEventListener('click', () => action('fullscreen'));

  document.addEventListener('keydown', press);
  function press(e) {
    // F
    if (e.keyCode === 70) {
      if (
        document.activeElement !== document.getElementById('playerName_Field')
      ) {
        action('fullscreen');
      }
    }
    // M
    if (e.keyCode === 77) {
      if (
        document.activeElement !== document.getElementById('playerName_Field')
      ) {
        action('mute');
      }
    }
  }
}
