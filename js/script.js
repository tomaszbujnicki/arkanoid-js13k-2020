let playfield,
  paddle,
  blockArray,
  ballArray,
  pause = true,
  lives = 0,
  currentLevel = 0,
  IdCounter = 0;

function uniqueId() {
  return IdCounter++;
}

document
  .getElementById('start')
  .addEventListener('click', () => gameStart(), false);
document
  .getElementById('restart')
  .addEventListener('click', () => gameStart(), false);

function draw(object) {
  if (!object) return;

  let element = document.getElementById(object.id);

  element.style.top = object.top + 'px';
  element.style.left = object.left + 'px';
  element.style.height = object.height + 'px';
  element.style.width = object.width + 'px';
}

function createElement(object) {
  const element = document.createElement('div');
  element.id = object.id;
  element.classList.add(object.type);
  document.getElementById('playfield').appendChild(element);
}

function closeMenu() {
  document.getElementById('menu').classList.add('none');
}

function increaseBallSpeed() {
  ballArray.forEach((ball) => ball.speedUp());
}

function changeColor(object) {
  if (!object) return;

  let element = document.getElementById(object.id);

  let color = 'pink';

  switch (object.power) {
    case 1:
      color = 'white';
      break;
    case 2:
      color = 'green';
      break;
    case 3:
      color = 'red';
      break;
    case 4:
      color = 'blue';
      break;
    default:
      color = 'pink';
      break;
  }

  element.style.backgroundColor = color;
}

function win() {
  if (blockArray.length === 0) {
    levelPassed();
  }
}
function loss() {
  if (ballArray.length === 0) {
    levelFailed();
  }
}

function levelPassed() {
  pause = true;
  /* 
    is it last level ? gameEnd() : nextLevel()
   */
}

function levelFailed() {
  pause = true;
  lives -= 1;
  /* 
    lives <= 0 ? gameOver() : startLevel()
   */
}

function gameOver() {
  document.getElementById('header').textContent = 'Theme not found';
  document.getElementById('gameOver').classList.remove('none');
  document.getElementById('playfield').classList.add('none');
  pause = true;
}

const el_playfield = document.getElementById('playfield'),
  el_paddle = document.getElementById('paddle');

function deleteBlock(block) {
  const index = blockArray.findIndex((e) => e === block);
  blockArray.splice(index, 1);
}

function deleteBall(ball) {
  const index = ballArray.findIndex((e) => e === ball);
  ballArray.splice(index, 1);
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomlyCreateNewBall() {
  if (random(1, 100) <= 1) {
    const ball = new Ball(
      0,
      0,
      15,
      random(5, 50),
      random(0, playfield.height - 150),
      random(0, playfield.width - 50)
    );
    ballArray.push(ball);
    createElement(ball);
  }
}
