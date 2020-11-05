let playfield = {},
  paddle = {},
  blockArray = [],
  ballArray = [],
  IdCounter,
  isPause = true,
  lives,
  currentLevel,
  playerName,
  score;

const options = {
  countdownDelay: 3,
};

const highScoreListMaxLength = 5,
  highScoreList = [
    { player: 'Mike', score: 2 },
    { player: 'Derrek', score: 22 },
    { player: 'Emily', score: 11 },
    { player: 'Bart', score: 44 },
    { player: 'Sally', score: 1 },
    { player: 'Cecile', score: 33 },
    { player: 'Jack', score: 4 },
    { player: 'Roland', score: 5 },
    { player: 'Amy', score: 55 },
    { player: 'Bob', score: 3 },
  ];

function startNewGame() {
  changePlayerName();
  setInitialValues();
  startLevel();
}

function changePlayerName() {
  const typedName = document.getElementById('playerName_Field').value;
  if (typedName.length > 0) {
    playerName = typedName;
  } else {
    playerName = 'Player';
  }
}

function setInitialValues() {
  lives = 2;
  currentLevel = 0;
  score = 0;
}

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

function updateScore(points) {
  if (Number.isInteger(points)) {
    score += points;
    document.getElementById('score').textContent = score;
  }
}

function hideElement(id) {
  document.getElementById(id).classList.add('hide');
}

function displayElement(id) {
  document.getElementById(id).classList.remove('hide');
}

function updateInfoPanel() {
  document.getElementById('level-name').textContent =
    levelArray[currentLevel].name;
  document.getElementById('level-number').textContent = currentLevel + 1;
  document.getElementById('lives').textContent = lives;
  document.getElementById('score').textContent = score;
}

function uniqueId() {
  return IdCounter++;
}

document.getElementById('start-button').addEventListener(
  'click',
  () => {
    openCard('playerName');
    document.getElementById('playerName_Field').focus();
  },
  false
);
document
  .getElementById('playerName_Button')
  .addEventListener('click', () => startNewGame(), false);
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
  document.getElementById(id).classList.remove('hide');
}

function closeCards() {
  document
    .querySelectorAll('#game div.game-card')
    .forEach((element) => element.classList.add('hide'));
}

function increaseBallsSpeed() {
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
  playfieldElement = document.getElementById('playfield');
  if (playfieldElement) {
    isPause = true;
    hideElement('playfield');
    continueButton = document.getElementById('continue-button');
    continueButton.disabled = false;
    continueButton.classList.remove('disabled');
    hideElement('info-panel');
    openCard('menu');
  }
}

function continueGame() {
  isPause = false;
  if (playfield) {
    displayElement('info-panel');
    openCard('playfield');
    gameLoop();
  }
}

function countDown(delay) {
  const countdownTimer = document.getElementById('countdownTimer');
  countdownTimer.classList.remove('hide');

  let seconds = delay;

  countdownTimer.textContent = seconds;

  countdownTimeoutId = setInterval(() => {
    seconds--;
    countdownTimer.textContent = seconds;
    if (seconds <= 0) {
      endCountDown();
    }
  }, 1000);
}

function endCountDown() {
  const countdownTimer = document.getElementById('countdownTimer');

  window.clearInterval(countdownTimeoutId);
  countdownTimer.textContent = '';
  countdownTimer.classList.add('hide');
}

function unstickBalls() {
  ballArray.forEach((ball) => (ball.isSticked = false));
}

function isLevelPassed() {
  return blockArray.length === 0;
}

function isLevelFailed() {
  return ballArray.length === 0;
}

function nextLevel() {
  currentLevel++;
  levelArray.length <= currentLevel ? gameEnd() : startLevel();
}

function gameEnd() {} // game won, passed all levels

function loseLife() {
  isPause = true;
  lives--;
  updateInfoPanel();
  lives <= 0 ? gameOver() : startLevel();
}

function gameOver() {
  highScoreList.push({ player: playerName, score: score });
  updateHighScoreList();
  displayElement('gameOver');
  hideElement('info-panel');
  continueButton = document.getElementById('continue-button');
  continueButton.disabled = true;
  continueButton.classList.add('disabled');
  document.getElementById('gameOver__score').textContent = score;
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
  if (random(1, 100) <= 10) {
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
