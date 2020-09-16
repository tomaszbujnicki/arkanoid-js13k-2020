class Ball {
    constructor(id, speedX, speedY, maxSpeed, size, top, left) {

        this.id       = id;

        this.speedX   = speedX;
        this.speedY   = speedY;
        this.maxSpeed = maxSpeed;
        this.size    = size;

        this.top    = top;
        this.left   = left;
        this.height = size;
        this.width  = size;

    }

    move() {
        this.left += this.speedX;
        this.top  += this.speedY;
    }

    speedUp() {
        const speed = Math.sqrt( this.speedX * this.speedX + this.speedY * this.speedY );
        if ( speed < this.maxSpeed ){
            
            this.speedY > 0 ? this.speedY += 0.001 : this.speedY -= 0.001;
        }
    }

}

