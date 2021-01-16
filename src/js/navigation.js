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

  // focus order
  document.querySelector('#menu button').focus();
  const optionsButtons = document.querySelectorAll('#options button');

  document.addEventListener('keydown', press);
  function press(e) {
    if (document.activeElement.tagName !== 'INPUT') {
      // F
      if (e.keyCode === 70) {
        action('fullscreen');
      }
      // M
      if (e.keyCode === 77) {
        action('mute');
      }
      // Right
      if (e.keyCode === 39) {
        if (document.getElementById('playground').offsetWidth === 0) {
          const firstButton = document.querySelector('.options__button');
          firstButton.focus();
        }
      }
      // Left
      if (e.keyCode === 37) {
        if (document.getElementById('playground').offsetWidth === 0) {
          const firstButton = document.querySelector(
            '.game-card:not(.hide) button'
          );
          firstButton.focus();
        }
      }
    }

    // Enter
    if (e.keyCode === 13) {
      if (
        document.activeElement === document.getElementById('playerName_Field')
      ) {
        action('start-game');
      }
    }

    // Down
    if (e.keyCode === 40) {
      const focused = document.activeElement;
      const buttons = focused.classList.contains('options__button')
        ? [...document.querySelectorAll('.options__button')]
        : [
            ...document.querySelectorAll(
              '.game-card:not(.hide) button:not(.disabled)'
            ),
          ];

      if (buttons.length > 1) {
        if (focused !== buttons[buttons.length - 1]) {
          const index = buttons.findIndex((e) => e === focused);
          buttons[index + 1].focus();
        }
      }
    }

    // Up
    if (e.keyCode === 38) {
      const focused = document.activeElement;
      const buttons = focused.classList.contains('options__button')
        ? [...document.querySelectorAll('.options__button')]
        : [
            ...document.querySelectorAll(
              '.game-card:not(.hide) button:not(.disabled)'
            ),
          ];

      if (buttons.length > 1) {
        if (focused !== buttons[0]) {
          const index = buttons.findIndex((e) => e === focused);
          buttons[index - 1].focus();
        }
      }
    }
  }
}
