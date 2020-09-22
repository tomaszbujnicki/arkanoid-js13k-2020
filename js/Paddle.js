class Paddle {
    constructor(top, left, height, width, speedX, leftRange, rightRange) {

        this.id = uniqueId();
        this.type = "paddle";

        this.top     = top;
        this.left    = left;
        this.height  = height;
        this.width   = width;

        this.speedX      = speedX;
        this.leftRange   = leftRange;
        this.rightRange   = rightRange;
    }

    moveLeft() {
        this.left -= this.speedX;

        if (this.left < this.leftRange) {
            this.left = this.leftRange;
        }
    }

    moveRight() {
        this.left += this.speedX;

        if (this.left + this.width > this.rightRange) {
            this.left = this.rightRange - this.width;
        }
    }

}