import fscreen from 'fscreen';

export function fullscreen() {
  if (fscreen.fullscreenElement !== null) {
    document
      .getElementById('options__fullscreen-button')
      .classList.add('fullscreen-on');
  } else {
    document
      .getElementById('options__fullscreen-button')
      .classList.remove('fullscreen-on');
  }
}
