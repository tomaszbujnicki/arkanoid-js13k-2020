let playfield = {},
  paddle = {},
  blockArray = [],
  ballArray = [],
  isPause = true,
  lives = 2,
  currentLevel = 0,
  IdCounter = 0,
  playerName = 'Player',
  score = 0;

const highScoreListMaxLength = 5,
  highScoreList = [
    { player: 'Mike', score: 2 },
    { player: 'Derrek', score: 20 },
    { player: 'Emily', score: 10 },
    { player: 'Bart', score: 40 },
    { player: 'Sally', score: 1 },
    { player: 'Cecile', score: 30 },
    { player: 'Jack', score: 4 },
    { player: 'Roland', score: 5 },
    { player: 'Amy', score: 50 },
    { player: 'Bob', score: 3 },
  ];

function updateHighScoreList() {
  highScoreList.sort(function (a, b) {
    return b.score - a.score;
  });

  highScoreList.length = highScoreListMaxLength;
}

function showHighScoreList() {
  for (const index in highScoreList) {
    let name = document.getElementById('high-score-name-' + index);
    let score = document.getElementById('high-score-score-' + index);
    if (!name || !score) break;
    name.textContent = highScoreList[index].player;
    score.textContent = highScoreList[index].score;
  }
}

updateHighScoreList();

function updateScore() {}

function uniqueId() {
  return IdCounter++;
}

document
  .getElementById('start-button')
  .addEventListener('click', () => gameStart(), false);
document
  .getElementById('continue-button')
  .addEventListener('click', () => continueGame(), false);
document.getElementById('high-score-button').addEventListener(
  'click',
  () => {
    showHighScoreList();
    openCard('high-score');
  },
  false
);
document
  .getElementById('credits-button')
  .addEventListener('click', () => openCard('credits'), false);
document.querySelectorAll('.main-menu-button').forEach((button) =>
  button.addEventListener(
    'click',
    () => {
      openCard('menu');
    },
    false
  )
);

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

function openCard(id) {
  closeCards();
  document.getElementById(id).classList.remove('none');
}

function closeCards() {
  document
    .querySelectorAll('#game div.game-card')
    .forEach((element) => element.classList.add('none'));
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

function pauseGame() {
  isPause = true;
  playfieldElement = document.getElementById('playfield');
  if (playfieldElement) {
    playfieldElement.classList.add('none');
    continueButtonElement = document.getElementById('continue-button');
    continueButtonElement.disabled = false;
    continueButtonElement.classList.remove('disabled');
  }
  openCard('menu');
}

function continueGame() {
  isPause = false;
  if (playfield) {
    openCard('playfield');
    gameLoop();
  }
}

function isLevelPassed() {
  return blockArray.length === 0;
}

function isLevelFailed() {
  return ballArray.length === 0;
}

function nextLevel() {
  currentLevel++;
  levelArray.length <= currentLevel ? gameEnd() : gameStart();
}

function gameEnd() {} // game won, passed all levels
// split gameStart() to levelStart()

function loseLife() {
  isPause = true;
  lives--;
  lives <= 0 ? gameOver() : gameStart();
}

function gameOver() {
  document.getElementById('header').textContent = 'Theme not found';
  document.getElementById('gameOver').classList.remove('none');
  continueButtonElement = document.getElementById('continue-button');
  continueButtonElement.disabled = true;
  continueButtonElement.classList.add('disabled');
  clearLevel();
  isPause = true;
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
