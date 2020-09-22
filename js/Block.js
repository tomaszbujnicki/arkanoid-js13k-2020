class Block {
    constructor(row, column, power, height, width, paddingTop) {

        this.id = uniqueId();
        this.type = "block";
        
        this.left = column * width;
        this.top = row * height + paddingTop;
        this.width = width;
        this.height = height;
        //this.rightEdge = (column + 1) * width;
        //this.bottomEdge = (row + 1) * height + paddingTop;
        this.power = power;

    }

    damage() {
        this.power--;
    }
}
