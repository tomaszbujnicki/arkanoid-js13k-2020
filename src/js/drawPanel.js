const canvas = document.querySelector('#info-panel');
const ctx = canvas.getContext('2d');

export default function drawPanel() {
  const game = this;
  ctx.save();
  ctx.clearRect(0, 0, 256, 700);

  const row = canvas.height / 10;
  const column1 = 20;
  const column2 = 120;

  ctx.font = 'bold 20pt Courier';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.fillText(game.level.name, canvas.width / 2, row * 1);

  ctx.font = 'bold 16pt Courier';
  ctx.textAlign = 'left';

  ctx.fillText(
    game.levelNumber + 1 + ' / ' + (game.levels.length + 1),
    column2,
    row * 2
  );
  ctx.fillText(game.lives, column2, row * 3);
  ctx.fillText(game.score, column2, row * 4);

  ctx.fillStyle = 'blue';

  ctx.fillText('Level: ', column1, row * 2);
  ctx.fillText('Lives: ', column1, row * 3);
  ctx.fillText('Score: ', column1, row * 4);

  ctx.restore();
}
