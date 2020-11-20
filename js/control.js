const controlState = {
  left: false,
  right: false,
  space: false,
  pause: false,
};

function keybordControl() {
  document.addEventListener('keydown', press);
  function press(e) {
    if (e.keyCode === 39) {
      controlState.right = true;
    }
    if (e.keyCode === 37) {
      controlState.left = true;
    }
    if (e.keyCode === 32) {
      controlState.space = true;
    }
    if (e.keyCode === 80) {
      controlState.pause = true;
    }
  }

  document.addEventListener('keyup', release);
  function release(e) {
    if (e.keyCode === 39) {
      controlState.right = false;
    }
    if (e.keyCode === 37) {
      controlState.left = false;
    }
    if (e.keyCode === 32) {
      controlState.space = false;
    }
    if (e.keyCode === 80) {
      controlState.pause = false;
    }
  }
}
