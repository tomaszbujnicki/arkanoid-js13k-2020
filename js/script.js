// playfield
const playfield = {
    left: 5,
    top: 5,
    height: 700,
    width: 1260
}

const paddleArr = []
const paddle_1 = new Paddle(1, 1, 5, 10, 70, 10, 300, 1230, 600, 350, 50, 860);
const paddle_2 = new Paddle(2, 2, 5, 10, 70, 10, 300, 230, 600, 350, 50, 60);
const paddle_3 = new Paddle(3, 2, 5, 10, 70, 10, 200, 130, 600, 100, 80, 40);
paddleArr.push(paddle_1)
paddleArr.push(paddle_2)
paddleArr.push(paddle_3)
paddle_1.element     = document.getElementById("paddle_" + 1)
paddle_2.element     = document.getElementById("paddle_" + 2)
paddle_3.element     = document.getElementById("paddle_" + 3)
paddle_1.rangeElement     = document.getElementById("rangeLine_" + 1)
paddle_2.rangeElement     = document.getElementById("rangeLine_" + 2)
paddle_3.rangeElement     = document.getElementById("rangeLine_" + 3)

const ballArr = []
const ball_1 = new Ball(1, 5, 1, 10, 5, 1);
ballArr.push(ball_1);
const ball_2 = new Ball(2, 0.5, 0.1, 50, 500, 500);
ballArr.push(ball_2);
const ball_3 = new Ball(3, -2, -1, 10, 50, 100);
ballArr.push(ball_3);
const ball_4 = new Ball(4, -5, 4, 3, 50, 100);
ballArr.push(ball_4);
const ball_5 = new Ball(5, 7, 2, 5, 500, 100);
ballArr.push(ball_5);
ball_1.element     = document.getElementById("ball_" + 1)
ball_2.element     = document.getElementById("ball_" + 2)
ball_3.element     = document.getElementById("ball_" + 3)
ball_4.element     = document.getElementById("ball_" + 4)
ball_5.element     = document.getElementById("ball_" + 5)
const ball_6 = new Ball(6, -8, 0.1, 15, 7, 9);
ballArr.push(ball_6);
const ball_7 = new Ball(7, -2, 2, 35, 500, 500);
ballArr.push(ball_7);
const ball_8 = new Ball(8, -2, -1, 10, 50, 100);
ballArr.push(ball_8);
const ball_9 = new Ball(9, -5, -2, 3, 50, 100);
ballArr.push(ball_9);
const ball_10 = new Ball(10, -3, -2, 5, 500, 100);
ballArr.push(ball_10);
ball_6.element     = document.getElementById("ball_" + 6)
ball_7.element     = document.getElementById("ball_" + 7)
ball_8.element     = document.getElementById("ball_" + 8)
ball_9.element     = document.getElementById("ball_" + 9)
ball_10.element     = document.getElementById("ball_" + 10)


function paddleMovement() {
    if (player1_up)    paddle_1.moveUp()
    if (player1_down)  paddle_1.moveDown()
    if (player1_left)  paddle_1.moveLeft()
    if (player1_right) paddle_1.moveRight()

    if (player2_up)    {paddle_2.moveUp(); paddle_3.moveUp()}
    if (player2_down)  {paddle_2.moveDown(); paddle_3.moveDown()}
    if (player2_left)  {paddle_2.moveLeft(); paddle_3.moveLeft()}
    if (player2_right) {paddle_2.moveRight(); paddle_3.moveRight()}
}

function ballMovement() {
    for (let ball of ballArr){
        ball.move()
    }
}

function collision() {
    for (let ball of ballArr) {

        // walls
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

        //paddles
        for (let paddle of paddleArr){
            if (
                ball.topEdge  >= paddle.topEdge  - ball.size     &&
                ball.topEdge  <= paddle.topEdge  + paddle.height &&
                ball.leftEdge >= paddle.leftEdge - ball.size    &&
                ball.leftEdge <= paddle.leftEdge + paddle.width
            ) {
                paddle.player == 1 ? ball.speedX = Math.abs(ball.speedX) * -1 : ball.speedX = Math.abs(ball.speedX);
                ball.element.style.backgroundColor = "red";
            }
        }
        
    }
}


const el_playfield = document.getElementById("playfield");





function showPaddle(){
    for (let paddle of paddleArr){
        paddle.element.style.top    = paddle.topEdge + "px";
        paddle.element.style.left   = paddle.leftEdge  + "px";
        paddle.element.style.height = paddle.height + "px"; 
        paddle.element.style.width  = paddle.width + "px"; 
    }
}

function showPlayfield(){
    el_playfield.style.top    =  playfield.top + "px";
    el_playfield.style.left   =  playfield.left + "px";
    el_playfield.style.height =  playfield.height + "px";
    el_playfield.style.width  =  playfield.width + "px";
}

function showRangeLine(){
    for (let paddle of paddleArr){
        paddle.rangeElement.style.top    = paddle.topRange + "px";
        paddle.rangeElement.style.left   = paddle.leftRange  + "px";
        paddle.rangeElement.style.height = paddle.heightRange + "px"; 
        paddle.rangeElement.style.width  = paddle.widthRange + "px"; 
    }
}

function showBall(){
    for (let ball of ballArr){
        ball.element.style.top      = ball.topEdge + "px";
        ball.element.style.left     = ball.leftEdge + "px";
        ball.element.style.height   = ball.size + "px";
        ball.element.style.width    = ball.size + "px";
    }
}
// game

function gameStart() {

    showPlayfield()
    showPaddle()
    showRangeLine()
    
    gameLoop()
}
gameStart();

function gameLoop() {

    paddleMovement()
    ballMovement()

    collision()
    
    showPaddle()
    showBall()

    window.requestAnimationFrame(gameLoop);
}

