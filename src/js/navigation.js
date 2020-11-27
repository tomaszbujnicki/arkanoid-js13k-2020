import { menu } from './menu';

export function navigation() {
  document
    .getElementById('start-button')
    .addEventListener('click', () => menu('new-game'));
  document
    .getElementById('playerName_Button')
    .addEventListener('click', () => menu('start-game'));
  document
    .getElementById('high-score-button')
    .addEventListener('click', () => menu('highscore'));
  document
    .getElementById('credits-button')
    .addEventListener('click', () => menu('credits'));
  document
    .querySelectorAll('.main-menu-button')
    .forEach((button) =>
      button.addEventListener('click', () => menu('main-menu'))
    );
}
