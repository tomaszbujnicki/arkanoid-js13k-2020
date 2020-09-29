function collisions(ball) {
  wallsCollisions(ball);
  paddleCollisions(ball);
  blockCollisions(ball);
}

function wallsCollisions(ball) {
  if (ball.left > playfield.width - ball.size) {
    ball.left = playfield.width - ball.size;
    ball.speedX *= -1;
  }

  if (ball.left < 0) {
    ball.left = 0;
    ball.speedX *= -1;
  }

  if (ball.top < 0) {
    ball.top = 0;
    ball.speedY *= -1;
  }

  if (ball.top > playfield.height - ball.size) {
    document.getElementById(ball.id).remove();
    deleteBall(ball);
    if (ballArray.length == 0) gameOver();
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

    console.log(offset);
  }
}

function blockCollisions(ball) {
  for (const block of blockArray) {
    if (isBlockHit(block) && bounceBall(block)) {
      block.damage();
      if (block.power <= 0) {
        document.getElementById(block.id).remove();
        deleteBlock(block);
      } else {
        changeColor(block);
      }
    }
  }

  function isBlockHit(block) {
    return (
      ball.top <= block.bottomEdge &&
      ball.top + ball.size >= block.top &&
      ball.left + ball.size >= block.left &&
      ball.left <= block.rightEdge
    );
  }

  function bounceBall(block) {
  let hasHit = false; 

    const neighborLeft = blockArray.find(item => item.row === block.row && item.column === block.column -1 );
    const neighborRight = blockArray.find(item => item.row === block.row && item.column === block.column +1 );
    const neighborBottom = blockArray.find(item => item.column === block.column && item.row === block.row +1 );
    const neighborTop = blockArray.find(item => item.column === block.column && item.row === block.row -1 );

    if (ball.left + ball.size - ball.speedX < block.left && neighborLeft === undefined ){
      ball.speedX = Math.abs(ball.speedX) * -1; 
      hasHit = true;
    }
    else {
      if (ball.left - ball.speedX > block.rightEdge && neighborRight === undefined ){
        ball.speedX = Math.abs(ball.speedX);
        hasHit = true;
      }
        
    }

    if (ball.top - ball.speedY > block.bottomEdge && neighborBottom === undefined ){
      ball.speedY = Math.abs(ball.speedY);
      hasHit = true;
    }
    else {
      if (ball.top + ball.size - ball.speedY < block.top && neighborTop === undefined ){
        ball.speedY = Math.abs(ball.speedY) * -1;
        hasHit = true;
      }
        
    }
    return hasHit
  }
}
