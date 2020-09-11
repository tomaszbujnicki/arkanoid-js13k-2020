const playfield = {
    left: 5,
    top: 5,
    height: 700,
    width: 1000
}

const el_playfield = document.getElementById("playfield");

const paddle = {
    speed: 10,
    height: 10,
    width: 110,
    topEdge: 670,
    leftEdge: 500
}

const el_paddle = document.getElementById("paddle")

function moveLeft() {
    paddle.leftEdge -= paddle.speed;

        if (paddle.leftEdge < 0) {
            paddle.leftEdge = 0;
        }
}

function moveRight() {
    paddle.leftEdge += paddle.speed;

        if (paddle.leftEdge > playfield.width - paddle.width) {
            paddle.leftEdge = playfield.width - paddle.width;
        }
}

function paddleMovement() {
    if (player1_left)  moveLeft()
    if (player1_right) moveRight()
}

const ball = {
    speedX: 5,
    speedY: 5,
    size: 10,
    topEdge: 200,
    leftEdge: 200
}

const el_ball = document.getElementById("ball")

function move() {
        ball.leftEdge += ball.speedX;
        ball.topEdge  += ball.speedY;
}


function collision() {

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
            ball.topEdge = playfield.height - ball.size;
            ball.speedY *= -1;
        }

            if (
                ball.topEdge  >= paddle.topEdge  - ball.size     &&
                ball.topEdge  <= paddle.topEdge  + paddle.height &&
                ball.leftEdge >= paddle.leftEdge - ball.size    &&
                ball.leftEdge <= paddle.leftEdge + paddle.width
            ) {
                ball.speedY = Math.abs(ball.speedY) * -1;
            }
        
}


function showBall(){
    el_ball.style.top      = ball.topEdge + "px";
    el_ball.style.left     = ball.leftEdge + "px";
}

function gameStart() {    
    gameLoop()
    el_paddle.style.top   = paddle.topEdge  + "px";
    el_paddle.style.width   = paddle.width  + "px";
    el_paddle.style.height   = paddle.height  + "px";
}
gameStart();

function gameLoop() {

    paddleMovement()
    move()

    collision()
    
    el_paddle.style.left   = paddle.leftEdge  + "px";
    el_ball.style.top      = ball.topEdge + "px";
    el_ball.style.left     = ball.leftEdge + "px";

    window.requestAnimationFrame(gameLoop);
}

