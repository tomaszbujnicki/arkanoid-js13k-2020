let playfield, paddle, blockArray, ballArray;

let pause = true;

let currentLevel = 0;
let IdCounter = 0;

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

function gameOver() {
  document.getElementById('gameOver').classList.remove('none');
  document.getElementById('playfield').classList.add('none');
  pause = true;
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

function end() {
  for (x in blockArray) return;
  document.getElementById('header').textContent = 'Theme not found';
  gameOver();
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
