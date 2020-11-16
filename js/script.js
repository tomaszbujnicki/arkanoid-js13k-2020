let playfield = {},
  paddle = {},
  blockArray = [],
  ballArray = [],
  IdCounter,
  isPause = true,
  lives,
  currentLevel,
  playerName,
  score,
  isMuted = false;

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
  currentLevel = 2;
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
  displayElement(id);
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
  if (playfieldElement && !isPause) {
    isPause = true;
    clearCountDown();
    hideElement('playfield');
    continueButton = document.getElementById('continue-button');
    continueButton.disabled = false;
    continueButton.classList.remove('disabled');
    hideElement('info-panel');
    displayElement('options');
    openCard('menu');
    hint();
  }
}

function releaseGame() {
  if (playfield && isPause) {
    updateInfoPanel();
    displayElement('info-panel');
    hideElement('options');
    openCard('playfield');
    countDown();
  }
}

function countDown() {
  const levelName = document.getElementById('countdown__levelName');
  const timer = document.getElementById('countdown__timer');
  displayElement('countdown');

  isPause = false;

  let seconds = options.countdownDelay;

  levelName.textContent = levelArray[currentLevel].name;
  timer.textContent = seconds;

  countdownTimeoutId = setInterval(() => {
    seconds--;
    timer.textContent = seconds;
    if (seconds <= 0) {
      clearCountDown();
      if (isAnyBallSticked()) {
        hint('Press SPACEBAR to launch ball');
      }
      gameLoop();
    }
  }, 1000);
}

const isAnyBallSticked = () => {
  for (const ball of ballArray) {
    if (ball.isSticked) return true;
  }
  return false;
};

function clearCountDown() {
  const card = document.getElementById('countdown');
  const levelName = document.getElementById('countdown__levelName');
  const timer = document.getElementById('countdown__timer');

  window.clearInterval(countdownTimeoutId);
  levelName.textContent = '';
  timer.textContent = '';
  card.classList.add('hide');
}

function hint(text) {
  const message = document.getElementById('hint-message');
  if (!text) {
    message.textContent = '';
    hideElement('hint');
    return;
  }

  message.textContent = text;
  displayElement('hint');
}

function unstickBalls() {
  hint();
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
  isPause = true;
  window.setTimeout(() => {
    levelArray.length <= currentLevel ? gameEnd() : startLevel();
  }, 2000);
}

function gameEnd() {} // game won, passed all levels

function loseLife() {
  lives--;
  updateInfoPanel();
  isPause = true;
  window.setTimeout(() => {
    lives <= 0 ? gameOver() : startLevel();
  }, 2000);
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
