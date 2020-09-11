class Paddle {
    constructor(id, player, speedX, speedY, height, width, topEdge, leftEdge, heightRange, widthRange, topRange, leftRange) {

        this.id          = id;
        this.player      = player;

        this.speedX      = speedX;
        this.speedY      = speedY;

        this.height      = height;
        this.width       = width;
        this.topEdge     = topEdge;
        this.leftEdge    = leftEdge;

        this.heightRange = heightRange;
        this.widthRange  = widthRange;
        this.topRange    = topRange;
        this.leftRange   = leftRange;

    }

    moveUp() {
        this.topEdge -= this.speedY;

        if (this.topEdge < this.topRange) {
            this.topEdge = this.topRange;
        }
    }

    moveDown() {
        this.topEdge += this.speedY;

        if (this.topEdge > this.topRange + this.heightRange - this.height) {
            this.topEdge = this.topRange + this.heightRange - this.height;
        }
    }

    moveLeft() {
        this.leftEdge -= this.speedX;

        if (this.leftEdge < this.leftRange) {
            this.leftEdge = this.leftRange;
        }
    }

    moveRight() {
        this.leftEdge += this.speedX;

        if (this.leftEdge > this.leftRange + this.widthRange - this.width) {
            this.leftEdge = this.leftRange + this.widthRange - this.width;
        }
    }

}