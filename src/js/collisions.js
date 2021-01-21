import { SOUND } from './sound';
import { random } from './functions';
import Power from './Power';

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
      ball.speedUp();
    }

    if (ball.left < playfield.left) {
      ball.left = playfield.left;
      ball.speedX *= -1;
      ball.speedUp();
    }

    if (ball.top < playfield.top) {
      ball.top = playfield.top;
      ball.speedY *= -1;
      ball.speedUp();
    }

    if (ball.top > playfield.height + playfield.top) {
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
    const walls = {};

    for (const block of blockArray) {
      const wall = isBlockHit(block);
      if (wall) {
        walls[wall] = true;
        hitArray.push(block);
      }
    }
    if (hitArray.length === 0) {
      return;
    }

    for (const block of hitArray) {
      hitBlock(block);
    }

    if (walls.right || walls.left) {
      ball.speedX *= -1;
      ball.speedUp();
    }
    if (walls.top || walls.bottom) {
      ball.speedY *= -1;
      ball.speedUp();
    }

    function hitBlock(block) {
      block.damage();
      SOUND['hit_' + random(1, 3)].play();
      if (block.power <= 0) {
        if (random(0, 100) < 100) {
          level.powerArray.push(new Power(block));
        }
        level.deleteBlock(block);
        level.game.updateScore(25);
      } else {
        level.game.updateScore(5);
      }
    }

    function isBlockHit(block) {
      const hit =
        ball.top <= block.top + block.height &&
        ball.top + ball.size >= block.top &&
        ball.left + ball.size >= block.left &&
        ball.left <= block.left + block.width;

      if (hit) {
        return whichWall(block);
      } else {
        return false;
      }
    }

    function whichWall(block) {
      const walls = {};

      if (ball.top - ball.speedY * p > block.top + block.height) {
        const neighborBottom = blockArray.find(
          (item) => item.column === block.column && item.row === block.row + 1
        );
        if (neighborBottom === undefined) {
          walls.bottom = true;
        }
      }

      if (ball.top + ball.size - ball.speedY * p < block.top) {
        const neighborTop = blockArray.find(
          (item) => item.column === block.column && item.row === block.row - 1
        );
        if (neighborTop === undefined) {
          walls.top = true;
        }
      }

      if (ball.left + ball.size - ball.speedX * p < block.left) {
        const neighborLeft = blockArray.find(
          (item) => item.row === block.row && item.column === block.column - 1
        );
        if (neighborLeft === undefined) {
          walls.left = true;
        }
      }

      if (ball.left - ball.speedX * p > block.left + block.width) {
        const neighborRight = blockArray.find(
          (item) => item.row === block.row && item.column === block.column + 1
        );
        if (neighborRight === undefined) {
          walls.right = true;
        }
      }

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

        let firstAxisX = false;
        if (
          Math.abs(distanceX / ball.speedX) < Math.abs(distanceY / ball.speedY)
        ) {
          firstAxisX = true;
        }
        if (firstAxisX) {
          walls.top = false;
          walls.bottom = false;
        } else {
          walls.left = false;
          walls.right = false;
        }
      }

      if (walls.top === true) return 'top';
      if (walls.bottom === true) return 'bottom';
      if (walls.left === true) return 'left';
      if (walls.right === true) return 'right';

      return false;
    }
  }
}
