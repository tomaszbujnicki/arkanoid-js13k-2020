function collisions() {

    wallsCollisions()
    paddleCollisions()
    blockCollisions()
}

function wallsCollisions () {
        
    if (ball.leftEdge > playfield.width - ball.size) {
        ball.leftEdge = playfield.width - ball.size;
        ball.speedX *= -1;
    }

    if (ball.leftEdge < 0) {
        ball.leftEdge = 0;
        ball.speedX *= -1;
    }

    if (ball.topEdge < 0) {
        ball.topEdge = 0;
        ball.speedY *= -1;
    }

    if (ball.topEdge > playfield.height - ball.size) {
        gameOver()
    }
}

function paddleCollisions() {

    if (
        ball.speedY > 0 &&
        ball.topEdge  >= paddle.topEdge  - ball.size     &&
        ball.topEdge  <= paddle.topEdge  + paddle.height &&
        ball.leftEdge >= paddle.leftEdge - ball.size    &&
        ball.leftEdge <= paddle.leftEdge + paddle.width
    ) {
        let a = 0;
        
        if (paddle.leftEdge + paddle.width / 5 > ball.leftEdge + 5) {
            a = (Math.abs(ball.speedX) + Math.abs(ball.speedY))/4;               
        }
        else {
            if (paddle.leftEdge + paddle.width / 5 * 2 > ball.leftEdge + 5) {
                a = (Math.abs(ball.speedX) + Math.abs(ball.speedY))/8;   
            }
            else {
                if (paddle.leftEdge + paddle.width / 5 * 4 < ball.leftEdge + 5) {
                    a = (Math.abs(ball.speedX) + Math.abs(ball.speedY))/4 * -1;   
                }
                else {
                    if (paddle.leftEdge + paddle.width / 5 * 3 < ball.leftEdge + 5) {
                    }
                }
            }
        }
        if (ball.speedX > 0) {
            ball.speedY += a;
            ball.speedX -= a
        }
        else{
            ball.speedY -= a
            ball.speedX -= a
        }

        if (ball.speedY < 1){
            ball.speedY = 1;
        }
        if (ball.speedX < 0.2 && ball.speedX > -0.2){
            ball.speedX < 0 ? ball.speedX = -0.2 : ball.speedX = 0.2
        }
         
        ball.speedY = Math.abs(ball.speedY) * -1;
        
    }
}

function blockCollisions() {
    
    let blockIndex = 0;

    for ( const block of blocks){

        if ( isBlockHit(block) ){

            damageBlock(block, blockIndex)
            bounceBall(block)
            
            break;
        }
        blockIndex++
    }
}