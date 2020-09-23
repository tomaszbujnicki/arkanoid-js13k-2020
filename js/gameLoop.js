function gameLoop() {

    draw(paddle);
    ballArray.forEach(draw);

    movePaddle();
    moveBall();

    ballArray.forEach(collisions)

    /*     increaseBallSpeed() */
    //end()
    if (pause)
        return;
    window.requestAnimationFrame(gameLoop);
}



function movePaddle() {

    if (player1_left)  paddle.moveLeft()
    if (player1_right) paddle.moveRight()
}

function moveBall() {

    ballArray.forEach( ball => ball.move() )
}