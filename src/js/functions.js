export { random };

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

function updateHighScoreList(playerName, playerScore) {
  highScoreList.push({ player: playerName, score: playerScore });
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

function gameOver(playerName, playerScore) {
  updateHighScoreList(playerName, playerScore);
  openCard('gameOver');
  hideElement('info-panel');
  const continueButton = document.getElementById('continue-button');
  continueButton.disabled = true;
  continueButton.classList.add('disabled');
  document.getElementById('gameOver__score').textContent = playerScore;
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
