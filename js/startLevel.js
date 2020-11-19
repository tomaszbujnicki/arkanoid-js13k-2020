function startNewGame() {
  const game = new Game(levelArray);
  while (game.levelNumber < game.levels.length) {
    const level = new Level(game.levels[game.levelNumber]);
    level.startLevel();
    //console.log(level);
    return;
  }
  gameEndYouWin();
}

function startLevel() {}

/* function startLevel(levelNumber) {
  const level = new Level(levelArray[levelNumber]);
  console.log(level);
  drawAll(level)
  
  //clearPlayfield();
  //createLevelElements();

  //drawLevelElements();

  //releaseGame();
} */

function clearPlayfield() {
  const playfieldElement = document.getElementById('playfield');
  if (playfieldElement) playfieldElement.remove();
  IdCounter = 0;
}

let IdCounter = 0;
function uniqueId() {
  return IdCounter++;
}

function createLevelElements() {
  createPlayfieldElement();
  createElement(paddle);
  blockArray.forEach(createElement);
  ballArray.forEach(createElement);
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

function drawLevelElements() {
  draw(playfield);
  draw(paddle);

  blockArray.forEach(draw);
  blockArray.forEach(changeColor);

  ballArray.forEach(draw);
}
