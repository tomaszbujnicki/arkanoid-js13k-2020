class Ball {
    constructor(id, speedX, speedY, size, topEdge, leftEdge) {

        this.id       = id;

        this.speedX   = speedX;
        this.speedY   = speedY;

        this.size     = size;
        this.topEdge  = topEdge;
        this.leftEdge = leftEdge;

    }

    move() {
        this.leftEdge += this.speedX;
        this.topEdge  += this.speedY;
    }

}