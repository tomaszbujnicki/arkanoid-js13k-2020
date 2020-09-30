class Block {
  constructor(row, column, power, height, width, paddingTop) {
    this.id = uniqueId();
    this.type = 'block';
    this.row = row;
    this.column = column;
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
  const row = block[0],
    column = block[1],
    power = block[2],
    height = playfield.rowHeight,
    width = playfield.columnWidth,
    paddingTop = playfield.paddingTop;

  const canCreateBlock =
    column * width >= 0 &&
    (column + 1) * width <= playfield.width &&
    row * height + paddingTop >= 0 &&
    (row + 1) * height + paddingTop <= playfield.height &&
    power > 0 &&
    power < 10;

  if (!canCreateBlock) return false;

  const item = new Block(row, column, power, height, width, paddingTop);

  return item;
}
