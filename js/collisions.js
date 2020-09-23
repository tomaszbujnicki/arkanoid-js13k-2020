function collisions(ball) {

    wallsCollisions(ball)
    paddleCollisions(ball)
    blockCollisions(ball)
}

function wallsCollisions (ball) {
        
    if (ball.left > playfield.width - ball.size) {
        ball.left = playfield.width - ball.size;
        ball.speedX *= -1;
    }

    if (ball.left < 0) {
        ball.left = 0;
        ball.speedX *= -1;
    }

    if (ball.top < 0) {
        ball.top = 0;
        ball.speedY *= -1;
    }

    if (ball.top > playfield.height - ball.size) {
        gameOver()
    }
}

function paddleCollisions(ball) {

    if (
        ball.speedY > 0 &&
        ball.top  >= paddle.top  - ball.size     &&
        ball.top  <= paddle.top  + paddle.height &&
        ball.left >= paddle.left - ball.size    &&
        ball.left <= paddle.left + paddle.width
    ) {

        const offset =  1.8 * ( (ball.left + (ball.size/2)) - (paddle.left + (paddle.width/2)) ) / paddle.width;
        const speed = Math.sqrt ( ball.speedX * ball.speedX + ball.speedY * ball.speedY )
        ball.speedX = speed * offset;
        ball.speedY = -1 * Math.sqrt ( speed * speed - ball.speedX * ball.speedX );
        console.log(speed)
    }
}

function blockCollisions(ball) {

    let blockIndex = 0;

    for ( const block of blockArray){

        if ( isBlockHit(block) ){

            damageBlock(block, blockIndex)
            bounceBall(block)
            
            break;
        }
        blockIndex++
    }

    function isBlockHit(block) {
        return (ball.top <= block.bottomEdge &&
                ball.top + ball.size >= block.top &&
                ball.left + ball.size >= block.left    &&
                ball.left <= block.rightEdge)
    }
    
    function bounceBall(block) {
        if (ball.left + ball.size - ball.speedX <  block.left     ) ball.speedX *= -1;
        else{if (ball.left - ball.speedX             >  block.rightEdge ) ball.speedX *= -1;
            else{if (ball.top - ball.speedY              >  block.bottomEdge ) ball.speedY *= -1;
                else{if (ball.top + ball.size - ball.speedY  < block.top ) ball.speedY *= -1;
                }
            }
        }
    }
}



