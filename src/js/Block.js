export default class Block {
  constructor(block, playfield) {
    this.id = uniqueId();
    this.type = 'block';
    this.row = block[0];
    this.column = block[1];
    this.left = this.column * playfield.columnWidth;
    this.top = this.row * playfield.rowHeight;
    this.width = playfield.columnWidth;
    this.height = playfield.rowHeight;
    this.hitpoints = block[2];
    if (this.hitpoints <= 0) this.hitpoints = 1;
    if (this.hitpoints > 9) this.hitpoints = 9;
  }

  damage() {
    this.hitpoints--;
  }
}

let IdCounter = 0;
function uniqueId() {
  return IdCounter++;
}
