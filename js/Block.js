class Block {
    constructor(id, row, column, power, height, width, paddingTop) {

        this.id = id;

        this.left = column * width;
        this.top = row * height + paddingTop;
        this.rightEdge = (column + 1) * width;
        this.bottomEdge = (row + 1) * height + paddingTop;
        this.power = power;

    }

    damage() {
        this.power--;
    }
}
