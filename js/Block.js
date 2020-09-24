class Block {
  constructor(row, column, power, height, width, paddingTop) {
    this.id = uniqueId();
    this.type = 'block';

    this.left = column * width;
    this.top = row * height + paddingTop;
    this.width = width;
    this.height = height;
    this.rightEdge = (column + 1) * width;
    this.bottomEdge = (row + 1) * height + paddingTop;
    this.power = power;
  }

  damage() {
    this.power--;
  }
}

function newBlock(block, playfield) {
  const item = new Block(
    block[0],
    block[1],
    block[2],
    playfield.rowHeight,
    playfield.columnWidth,
    playfield.paddingTop
  );

  return item;
}
