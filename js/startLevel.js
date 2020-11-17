function startLevel() {
  clearLevel();

  createLevelObjects(levelArray[game.level]);

  createLevelElements();

  drawLevelElements();

  releaseGame();
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
  playfield = new Playfield(level.playfield);

  paddle = new Paddle(level.paddle, playfield);

  level.blocks.forEach((item) => {
    const block = new Block(item, playfield);
    if (block) {
      blockArray.push(block);
    }
  });

  level.balls.forEach((item) => {
    ballArray.push(new Ball(item));
  });
}

function createLevelElements() {
  createPlayfieldElement();
  createElement(paddle);
  blockArray.forEach(createElement);
  ballArray.forEach(createElement);
}

function drawLevelElements() {
  draw(playfield);
  console.log(playfield)
  draw(paddle);

  blockArray.forEach(draw);
  blockArray.forEach(changeColor);

  ballArray.forEach(draw);
}
