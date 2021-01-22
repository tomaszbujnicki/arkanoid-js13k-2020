export default class Block {
  constructor(block, playfield) {
    this.id = uniqueId();
    this.type = 'block';
    this.row = block[0];
    this.column = block[1];
    this.left = this.column * playfield.columnWidth + 1;
    this.top = this.row * playfield.rowHeight + 1;
    this.width = playfield.columnWidth - 2;
    this.height = playfield.rowHeight - 2;
    this.power = block[2];
    if (this.power <= 0) this.power = 1;
    if (this.power > 9) this.power = 9;
  }

  damage() {
    this.power--;
  }
}

let IdCounter = 0;
function uniqueId() {
  return IdCounter++;
}
