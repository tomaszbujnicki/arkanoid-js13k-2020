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
      level.deleteBall(ball);
      SOUND.ballLost.play();
    }
  }

  function paddleCollisions(ball) {
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

    if (distance <= ball.radius) {
      let offset =
        (1.8 * (ball.posX - (paddle.left + paddle.width / 2))) / paddle.width;

      if (offset > 0.98) offset = 0.98;
      if (offset < -0.98) offset = -0.98;

      const speed = Math.sqrt(
        ball.speedX * ball.speedX + ball.speedY * ball.speedY
      );
      ball.speedX = speed * offset;
      ball.speedY = -1 * Math.sqrt(speed * speed - ball.speedX * ball.speedX);
    }
  }

  function blockCollisions(ball) {
    function hitBlock(block) {
      block.damage();
      SOUND['hit_' + random(1, 3)].play();
      if (block.power <= 0) {
        if (random(0, 100) < 5) {
          level.powerArray.push(new Power(block));
        }
        level.deleteBlock(block);
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
        console.log('HIT');
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
        console.log(walls);

        // if more then one wall - select first
        if (Object.keys(walls).length > 1) {
          let distanceX, distanceY;
          if (walls.right)
            distanceX =
              ball.posX - ball.speedX * p - (block.left + block.width);
          if (walls.left)
            distanceX =
              block.left - (ball.posX + ball.radius - ball.speedX * p);
          if (walls.top)
            distanceY = block.top - (ball.posY + ball.radius - ball.speedY * p);
          if (walls.bottom)
            distanceY =
              ball.posY - ball.speedY * p - (block.top + block.height);

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
      console.log('Y');
    }
    if (bounce.x === true) {
      ball.speedX *= -1;
      console.log('X');
    }
    /* console.log(bounce.x, bounce.y); */
    //console.log(ball.speedX, ball.speedY);
  }
}

/* function blockCollisions(ball) {
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
    }
    if (walls.top || walls.bottom) {
      ball.speedY *= -1;
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
        ball.posY + ball.radius >= block.top &&
        ball.posY - ball.radius <= block.top + block.height &&
        ball.posX + ball.radius >= block.left &&
        ball.posX - ball.radius <= block.left + block.width;

      if (hit) {
        return whichWall(block);
      } else {
        return false;
      }
    }

    
  } */
