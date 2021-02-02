import { SOUND } from './sound';
import { random } from './functions';
import Power from './Power';

export default function collisions() {
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
    if (ball.posX + ball.radius > playfield.left + playfield.width) {
      ball.posX = playfield.left + playfield.width - ball.radius;
      ball.speedX *= -1;
    }

    if (ball.posX - ball.radius < playfield.left) {
      ball.posX = playfield.left + ball.radius;
      ball.speedX *= -1;
    }

    if (ball.posY - ball.radius < playfield.top) {
      ball.posY = playfield.top + ball.radius;
      ball.speedY *= -1;
    }

    if (ball.posY - ball.radius > playfield.top + playfield.height) {
      level.delete(ball);
      SOUND.ballLost.play();
    }
  }

  function paddleCollisions(ball) {
    if (ball.speedY > 0) {
      let testX = ball.posX;
      let testY = ball.posY;

      if (ball.posX < paddle.left) {
        testX = paddle.left;
      } else if (ball.posX > paddle.left + paddle.width)
        testX = paddle.left + paddle.width;

      if (ball.posY < paddle.top) {
        testY = paddle.top;
      } else if (ball.posY > paddle.top + paddle.height)
        testY = paddle.top + paddle.height;

      // get distance from closest edges
      const distX = ball.posX - testX;
      const distY = ball.posY - testY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      // collision detected
      if (distance <= ball.radius) {
        if (ball.posY > paddle.top) {
          ball.speedX =
            ball.posX > paddle.left + paddle.width / 2
              ? Math.abs(ball.speedX)
              : -1 * Math.abs(ball.speedX);
        } else {
          let offset =
            (1.8 * (ball.posX - (paddle.left + paddle.width / 2))) /
            paddle.width;

          if (offset > 0.98) offset = 0.98;
          if (offset < -0.98) offset = -0.98;

          const speed = Math.sqrt(
            ball.speedX * ball.speedX + ball.speedY * ball.speedY
          );
          ball.speedX = speed * offset;
          ball.speedY =
            -1 * Math.sqrt(speed * speed - ball.speedX * ball.speedX);
          if (paddle.isSticky) ball.isSticked = true;
        }
      }
    }
  }

  function blockCollisions(ball) {
    function hitBlock(block) {
      block.damage();
      SOUND['hit_' + random(1, 3)].play();
      if (block.hitpoints <= 0) {
        if (random(0, 100) < 100) {
          level.powerArray.push(new Power(block));
        }
        level.delete(block);
        level.game.updateScore(25);
      } else {
        level.game.updateScore(5);
      }
    }
    const hitArray = [];
    const bounce = {
      x: false,
      y: false,
    };
    for (const block of blockArray) {
      let testX = ball.posX;
      let testY = ball.posY;

      if (ball.posX < block.left) {
        testX = block.left;
      } else if (ball.posX > block.left + block.width)
        testX = block.left + block.width;

      if (ball.posY < block.top) {
        testY = block.top;
      } else if (ball.posY > block.top + block.height)
        testY = block.top + block.height;

      // get distance from closest edges
      const distX = ball.posX - testX;
      const distY = ball.posY - testY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      if (distance <= ball.radius) {
        // which edge
        const walls = {};

        if (ball.speedY < 0) {
          const neighborBottom = blockArray.find(
            (item) => item.column === block.column && item.row === block.row + 1
          );
          if (neighborBottom === undefined) {
            walls.bottom = true;
          }
        }

        if (ball.speedY > 0) {
          const neighborTop = blockArray.find(
            (item) => item.column === block.column && item.row === block.row - 1
          );
          if (neighborTop === undefined) {
            walls.top = true;
          }
        }

        if (ball.speedX > 0) {
          const neighborLeft = blockArray.find(
            (item) => item.row === block.row && item.column === block.column - 1
          );
          if (neighborLeft === undefined) {
            walls.left = true;
          }
        }

        if (ball.speedX < 0) {
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
            distanceX =
              ball.posX -
              ball.radius -
              ball.speedX -
              (block.left + block.width);
          if (walls.left)
            distanceX = block.left - (ball.posX + ball.radius - ball.speedX);
          if (walls.top)
            distanceY = block.top - (ball.posY + ball.radius - ball.speedY);
          if (walls.bottom)
            distanceY =
              ball.posY -
              ball.radius -
              ball.speedY -
              (block.top + block.height);

          let firstAxisX = false;
          if (
            Math.abs(distanceX / ball.speedX) <
            Math.abs(distanceY / ball.speedY)
          ) {
            firstAxisX = true;
          }
          if (firstAxisX) {
            bounce.x = true;
          } else {
            bounce.y = true;
          }
        } else {
          if (walls.right === true) bounce.x = true;
          if (walls.left === true) bounce.x = true;
          if (walls.top === true) bounce.y = true;
          if (walls.bottom === true) bounce.y = true;
        }
        hitArray.push(block);
      }
    }
    for (const block of hitArray) {
      hitBlock(block);
    }
    if (bounce.y === true) {
      ball.speedY *= -1;
    }
    if (bounce.x === true) {
      ball.speedX *= -1;
    }
  }
}
