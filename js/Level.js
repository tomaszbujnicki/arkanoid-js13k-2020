class Level {
  constructor(level) {
    this.playfield = new Playfield(level.playfield);
    this.paddle = createPaddle(level.paddle, this.playfield);
    this.ballArray = createBallArray(level.balls, this.playfield);
    this.blockArray = createBlockArray(level.blocks, this.playfield);
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
    item.left >= 0 &&
    item.left + item.width <= playfield.width &&
    item.top >= 0 &&
    item.top + item.height <= playfield.height
  ) {
    return true;
  } else {
    return false;
  }
}