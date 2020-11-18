let playfield = {},
  paddle = {},
  blockArray = [],
  ballArray = [],
  isPause = true,
  player,
  isMuted = false;

const options = {
  countdownDelay: 1, // fix it
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

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

function draw(object, color = 'white') {
  ctx.save();
  ctx.rect(object.left, object.top, object.width, object.height);
  ctx.clip();
  ctx.fillStyle = color;
  ctx.strokeStyle = 'silver';
  ctx.lineWidth = 10;
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  
  //
  //ctx.fillStyle = 'silver';
  //
  //
  //ctx.fillRect(object.left+1, object.top+1, object.width-2, object.height-2);
  //ctx.strokeRect(object.left, object.top, object.width, object.height);
  // 
  /*   ctx.clip();
  ctx.lineWidth *= 2;
  ctx.fill();
  ctx.stroke(); */
  //ctx.restore();
}

function drawAll(level) {
  //draw(level.playfield, 'transparent');
  draw(level.paddle);
   level.ballArray.forEach(draw);
  level.blockArray.forEach((block) => {
    draw(block, getColor(block.power));
  });
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
    game.score += points;
    document.getElementById('score').textContent = game.score;
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
    levelArray[game.level].name;
  document.getElementById('level-number').textContent = game.level + 1;
  document.getElementById('lives').textContent = game.lives;
  document.getElementById('score').textContent = game.score;
}

/* function draw(object) {
  if (!object) return;

  let element = document.getElementById(object.id);
  if (!element) return;

  element.style.top = object.top + 'px';
  element.style.left = object.left + 'px';
  element.style.height = object.height + 'px';
  element.style.width = object.width + 'px';
} */

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

function getColor(power) {
  let color = 'white';

  switch (power) {
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
      color = 'white';
      break;
  }

  return color;
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
  updateInfoPanel();
  displayElement('info-panel');
  hideElement('options');
  openCard('playfield');
  countDown();
}

function countDown() {
  const levelName = document.getElementById('countdown__levelName');
  const timer = document.getElementById('countdown__timer');
  displayElement('countdown');

  isPause = false;

  let seconds = options.countdownDelay;

  levelName.textContent = levelArray[game.level].name;
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
  game.level++;
  isPause = true;
  window.setTimeout(() => {
    levelArray.length <= game.level ? gameEnd() : startLevel();
  }, 2000);
}

function gameEnd() {} // game won, passed all levels

function loseLife() {
  game.lives--;
  updateInfoPanel();
  isPause = true;
  window.setTimeout(() => {
    game.lives <= 0 ? gameOver() : startLevel();
  }, 2000);
}

function gameOver() {
  highScoreList.push({ player: playerName, score: game.score });
  updateHighScoreList();
  displayElement('gameOver');
  hideElement('info-panel');
  continueButton = document.getElementById('continue-button');
  continueButton.disabled = true;
  continueButton.classList.add('disabled');
  document.getElementById('gameOver__score').textContent = game.score;
  clearLevel();
  isPause = true;
}

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
