class Level {
  constructor(level) {
    this.playfield = new Playfield(level.playfield);
    this.paddle = createPaddle(level.paddle, this.playfield);
    this.ballArray = createBallArray(level.balls, this.playfield);
    this.blockArray = createBlockArray(level.blocks, this.playfield);
    this.score = 0;
    this.update = update;
    this.drawAll = drawAll;
    this.movePaddle = movePaddle;
    this.collisions = collisions;
    this.updateScore = updateScore;
  }
  
  deleteBall(ball) {
    const index = this.ballArray.findIndex((e) => e === ball);
    this.ballArray.splice(index, 1);
  }

  deleteBlock(block) {
    const index = this.blockArray.findIndex((e) => e === block);
    this.blockArray.splice(index, 1);
  }

  isLevelPassed() {
    return this.blockArray.length === 0;
  }

  isLevelFailed() {
    return this.ballArray.length === 0;
  }

  unstickBalls() {
    hint();
    this.ballArray.forEach((ball) => (ball.isSticked = false));
  }
}

function createPaddle(paddle, playfield) {
  let newPaddle = new Paddle(paddle, playfield);
  if (canCreateObject(newPaddle, playfield)) {
    return newPaddle;
  } else return false;
}

function createBallArray(balls, playfield) {
  const ballArray = [];
  balls.forEach((item) => {
    const ball = new Ball(item, playfield);
    if (canCreateObject(ball, playfield)) {
      ballArray.push(ball);
    }
  });

  return ballArray;
}

function createBlockArray(blocks, playfield) {
  const blockArray = [];
  blocks.forEach((item) => {
    const block = new Block(item, playfield);
    if (canCreateObject(block, playfield)) {
      blockArray.push(block);
    }
  });

  return blockArray;
}

function canCreateObject(item, playfield) {
  if (
    item.width > 0 &&
    item.height > 0 &&
    item.left >= playfield.left &&
    item.left + item.width <= playfield.left + playfield.width &&
    item.top >= playfield.top &&
    item.top + item.height <= playfield.top + playfield.height
  ) {
    return true;
  } else {
    return false;
  }
}
