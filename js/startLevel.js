function startLevel() {
  closeCards();

  clearLevel();

  createLevelObjects(levelArray[currentLevel]);

  createLevelElements();

  drawLevelElements();

  updateInfoPanel();
  displayElement('info-panel');

  isPause = false;

  setTimeout(() => {
    ballArray.forEach((ball) => (ball.isSticked = false));
  }, 5000);

  gameLoop();
}

function clearLevel() {
  playfield = {};
  paddle = {};
  blockArray = [];
  ballArray = [];
  IdCounter = 0;

  const playfieldElement = document.getElementById('playfield');
  if (playfieldElement) playfieldElement.remove();
}

function createPlayfieldElement() {
  const element = document.createElement('div');
  element.id = 'playfield';
  element.style.top = playfield.top + 'px';
  element.style.left = playfield.left + 'px';
  element.classList.add('playfield');
  document.getElementById('game').appendChild(element);
}

function createLevelObjects(level) {
  playfield = Object.create(level.playfield);

  paddle = newPaddle(level.paddle, playfield);

  level.blocks.forEach((item) => {
    const block = newBlock(item, playfield);
    if (block) {
      blockArray.push(block);
    }
  });

  level.balls.forEach((item) => {
    ballArray.push(newBall(item));
  });
}

function createLevelElements() {
  createPlayfieldElement();
  createElement(paddle);
  blockArray.forEach(createElement);
  ballArray.forEach(createElement);
}

function drawLevelElements() {
  draw(paddle);

  blockArray.forEach(draw);
  blockArray.forEach(changeColor);

  ballArray.forEach(draw);
}
