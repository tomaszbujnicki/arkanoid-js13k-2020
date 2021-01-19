export { isKeyPressed, keybordControl };

const isKeyPressed = {
  left: false,
  right: false,
  space: false,
};

function keybordControl() {
  document.addEventListener('keydown', press);
  function press(e) {
    if (e.keyCode === 39) {
      isKeyPressed.right = true;
    }
    if (e.keyCode === 37) {
      isKeyPressed.left = true;
    }
    if (e.keyCode === 32) {
      isKeyPressed.space = true;
    }
  }

  document.addEventListener('keyup', release);
  function release(e) {
    if (e.keyCode === 39) {
      isKeyPressed.right = false;
    }
    if (e.keyCode === 37) {
      isKeyPressed.left = false;
    }
    if (e.keyCode === 32) {
      isKeyPressed.space = false;
    }
  }
}
