import SOUND from './sounds';
import { random } from './functions';

export default function collisions(progress) {
  let p = progress / 16;
  if (!p) p = 1;
  const level = this;
  const playfield = level.playfield;
  const paddle = level.paddle;
  const blockArray = level.blockArray;
  level.ballArray.forEach((ball) => {
    wallsCollisions(ball);
    paddleCollisions(ball);
    blockCollisions(ball);
  });

  function wallsCollisions(ball) {
    if (ball.left > playfield.left + playfield.width - ball.size) {
      ball.left = playfield.left + playfield.width - ball.size;
      ball.speedX *= -1;
    }

    if (ball.left < playfield.left) {
      ball.left = playfield.left;
      ball.speedX *= -1;
    }

    if (ball.top < playfield.top) {
      ball.top = playfield.top;
      ball.speedY *= -1;
    }

    if (ball.top > playfield.height + playfield.top - ball.size) {
      level.deleteBall(ball);
      SOUND.ballLost.play();
    }
  }

  function paddleCollisions(ball) {
    if (
      ball.speedY > 0 &&
      ball.top >= paddle.top - ball.size &&
      ball.top <= paddle.top + paddle.height &&
      ball.left >= paddle.left - ball.size &&
      ball.left <= paddle.left + paddle.width
    ) {
      let offset =
        (1.8 * (ball.left + ball.size / 2 - (paddle.left + paddle.width / 2))) /
        paddle.width;

      if (offset > 0.95) offset = 0.95;
      if (offset < -0.95) offset = -0.95;

      const speed = Math.sqrt(
        ball.speedX * ball.speedX + ball.speedY * ball.speedY
      );
      ball.speedX = speed * offset;
      ball.speedY = -1 * Math.sqrt(speed * speed - ball.speedX * ball.speedX);
    }
  }

  function blockCollisions(ball) {
    const hitArray = [];

    for (const block of blockArray) {
      if (isBlockHit(block)) {
        hitArray.push(block);
      }
    }

    if (hitArray.length === 1) {
      if (isHitAxisX(hitArray[0])) ball.speedX *= -1;
      else ball.speedY *= -1;
      hitBlock(hitArray[0]);
    }

    if (hitArray.length > 1) {
    }

    function hitBlock(block) {
      //bounceBall(block);
      block.damage();
      SOUND['hit_' + random(1, 3)].play();
      if (block.power <= 0) {
        level.deleteBlock(block);
        level.game.updateScore(25);
      } else {
        level.game.updateScore(5);
      }
    }

    function isBlockHit(block) {
      return (
        ball.top <= block.top + block.height &&
        ball.top + ball.size >= block.top &&
        ball.left + ball.size >= block.left &&
        ball.left <= block.left + block.width
      );
    }

    function isHitAxisX(block) {
      const walls = {};

      if (ball.top - ball.speedY * p > block.top + block.height)
        walls.bottom = true;

      if (ball.top + ball.size - ball.speedY * p < block.top) walls.top = true;

      if (ball.left + ball.size - ball.speedX * p < block.left)
        walls.left = true;

      if (ball.left - ball.speedX * p > block.left + block.width)
        walls.right = true;

      // if more then one wall - select first
      if (Object.keys(walls).length > 1) {
        let distanceX, distanceY;
        if (walls.right)
          distanceX = ball.left - ball.speedX * p - (block.left + block.width);
        if (walls.left)
          distanceX = block.left - (ball.left + ball.size - ball.speedX * p);
        if (walls.top)
          distanceY = block.top - (ball.top + ball.size - ball.speedY * p);
        if (walls.bottom)
          distanceY = ball.top - ball.speedY * p - (block.top + block.height);

        return (
          Math.abs(distanceX / ball.speedX) < Math.abs(distanceY / ball.speedY)
        );
      }

      return walls.left || walls.right;
    }

    function bounceBall(block) {
      let hasHit = false;

      const neighborLeft = blockArray.find(
        (item) => item.row === block.row && item.column === block.column - 1
      );
      const neighborRight = blockArray.find(
        (item) => item.row === block.row && item.column === block.column + 1
      );
      const neighborBottom = blockArray.find(
        (item) => item.column === block.column && item.row === block.row + 1
      );
      const neighborTop = blockArray.find(
        (item) => item.column === block.column && item.row === block.row - 1
      );

      if (
        ball.left + ball.size - ball.speedX < block.left &&
        neighborLeft === undefined
      ) {
        ball.speedX = Math.abs(ball.speedX) * -1;
        hasHit = true;
      } else {
        if (
          ball.left - ball.speedX > block.left + block.width &&
          neighborRight === undefined
        ) {
          ball.speedX = Math.abs(ball.speedX);
          hasHit = true;
        }
      }

      if (
        ball.top - ball.speedY > block.top + block.height &&
        neighborBottom === undefined
      ) {
        ball.speedY = Math.abs(ball.speedY);
        hasHit = true;
      } else {
        if (
          ball.top + ball.size - ball.speedY < block.top &&
          neighborTop === undefined
        ) {
          ball.speedY = Math.abs(ball.speedY) * -1;
          hasHit = true;
        }
      }
      return hasHit;
    }
  }
}
