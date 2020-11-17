class Block {
  constructor(block, playfield) {
    this.id = uniqueId();
    this.type = 'block';
    this.row = block[0];
    this.column = block[1];
    this.left = this.column * playfield.columnWidth;
    this.top = this.row * playfield.rowHeight;
    this.width = playfield.columnWidth;
    this.height = playfield.rowHeight;
    this.power = block[2];
    if (this.power <= 0) this.power = 1;
    if (this.power > 9) this.power = 9;
  }

  damage() {
    this.power--;
  }
}