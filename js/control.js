let player1_right = false,
  player1_left = false;

document.addEventListener('keydown', press);
function press(e) {
  if (e.keyCode === 39) {
    player1_right = true;
  }

  if (e.keyCode === 37) {
    player1_left = true;
  }
  if (e.keyCode === 80) {
    pauseGame();
  }
}

document.addEventListener('keyup', release);
function release(e) {
  if (e.keyCode === 39) {
    player1_right = false;
  }
  if (e.keyCode === 37) {
    player1_left = false;
  }
}
