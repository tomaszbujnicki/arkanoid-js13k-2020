import { SOUND } from './sound';
import { random } from './functions';

export default function collisions() {
  const level = this;
  const playfield = level.playfield;
  const paddle = level.paddle;
  const ballArray = level.ballArray;
  const blockArray = level.blockArray;
  const bulletArray = level.bulletArray;
  const powerArray = level.powerArray;

  ballArray.forEach((ball) => {
    ballVsWalls(ball);
    ballVsPaddle(ball);
    ballVsBlocks(ball);
    ballVsLimit(ball);
  });
  bulletArray.forEach((bullet) => {
    bulletVsBlocks(bullet);
    bulletVsLimit(bullet);
  });
  powerArray.forEach((power) => {
    powerVsPaddle(power);
    powerVsLimit(power);
  });

  function powerVsLimit(power) {
    if (power.top > playfield.height + playfield.top) {
      level.delete(power);
    }
  }
  function ballVsLimit(ball) {
    if (ball.posY - ball.radius > playfield.height + playfield.top) {
      level.delete(ball);
      SOUND.ballLost.play();
    }
  }
  function bulletVsLimit(bullet) {
    if (bullet.top < 0) {
      level.delete(bullet);
    }
  }

  function bulletVsBlocks(bullet) {
    let isHit = false;
    for (const block of blockArray) {
      if (
        bullet.top < block.top + block.height &&
        bullet.left < block.left + block.width &&
        bullet.left + bullet.width > block.left
      ) {
        hitBlock(block);
        isHit = true;
      }
    }
    if (isHit) level.delete(bullet);
  }

  function powerVsPaddle(power) {
    if (
      power.top >= paddle.top - power.height &&
      power.top <= paddle.top + paddle.height &&
      power.left >= paddle.left - power.width &&
      power.left <= paddle.left + paddle.width
    ) {
      console.log(power);
      power.action(level);
      power.makeSound();
      level.delete(power);
    }
  }

  function ballVsWalls(ball) {
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
  }

  function ballVsPaddle(ball) {
    // ! add condition
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

  function ballVsBlocks(ball) {
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

  function hitBlock(block) {
    const hasSurvived = block.damage();
    if (hasSurvived) {
      level.game.updateScore(5);
      SOUND['hit_' + random(1, 2)].play();
    } else {
      level.delete(block);
      level.game.updateScore(25);
      SOUND.hit_3.play();
      const newPower = block.createPower();
      if (newPower) {
        powerArray.push(newPower);
      }
    }
  }
}
