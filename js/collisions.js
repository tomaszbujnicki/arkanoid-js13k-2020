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

        const offset =  1.8 * ( (ball.leftEdge + (ball.size/2)) - (paddle.leftEdge + (paddle.width/2)) ) / paddle.width;
        const speed = Math.sqrt ( ball.speedX * ball.speedX + ball.speedY * ball.speedY )
        ball.speedX = speed * offset;
        ball.speedY = -1 * Math.sqrt ( speed * speed - ball.speedX * ball.speedX );
        console.log(speed)
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

function damageBlock(block, blockIndex) {
    block.power--;
    if ( block.power <= 0 ) {
        removeBlock(block, blockIndex)
    }
    else{
        const element = document.getElementById("block_" + block.id);
        element.classList.add(getColor(block.power));
    }
}

function removeBlock(block, blockIndex) {
    const element = document.getElementById("block_" + block.id);
    element.remove();
    blocks.splice(blockIndex,1)
}

function isBlockHit(block) {
    return (ball.topEdge <= ( block.row +1 ) * playfield.rowHeight + playfield.topPadding &&
            ball.topEdge + ball.size >= block.row * playfield.rowHeight + playfield.topPadding &&
            ball.leftEdge + ball.size >= block.column * playfield.columnWidth    &&
            ball.leftEdge <= ( block.column + 1 ) * playfield.columnWidth)
}

function bounceBall(block) {
    if (ball.leftEdge + ball.size - ball.speedX <  block.column * playfield.columnWidth     ) ball.speedX *= -1;
    else{if (ball.leftEdge - ball.speedX             > ( block.column + 1 ) * playfield.columnWidth ) ball.speedX *= -1;
        else{if (ball.topEdge - ball.speedY              > ( block.row + 1 ) * playfield.rowHeight + playfield.topPadding ) ball.speedY *= -1;
            else{if (ball.topEdge + ball.size - ball.speedY  < block.row * playfield.rowHeight + playfield.topPadding ) ball.speedY *= -1;
            }
        }
    }
}