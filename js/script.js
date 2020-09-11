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
    width: 100,
    topEdge: 670,
    leftEdge: 500
}

const el_paddle = document.getElementById("paddle")



const ball = {
    speedX: 5,
    speedY: 5,
    size: 10,
    topEdge: 200,
    leftEdge: 200
}

const el_ball = document.getElementById("ball")



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

const block = [
[0, 4, "blue"],                                  [ 0, 8, "blue"],  [ 0, 9, "blue"], [ 0,10, "blue"], [ 0,12, "blue"],
[1, 4, "blue"],                                  [ 1, 8, "blue"],  [ 1, 9, "blue"], [ 1,10, "blue"], [ 1,12, "blue"],
[2, 4, "blue"],                                  [ 2, 8, "blue"],  [ 2, 9, "blue"], [ 2,10, "blue"], [ 2,12, "blue"],
[3, 4, "blue"],                 [ 3, 6, "blue"], [ 3, 8, "blue"],                   [ 3,10, "blue"], [ 3,12, "blue"],                  [ 3,14, "blue"],
[4, 4, "blue"],                 [ 4, 6, "blue"], [ 4, 8, "blue"],                   [ 4,10, "blue"], [ 4,12, "blue"],                  [ 4,14, "blue"],
[5, 4, "blue"],                 [ 5, 6, "blue"], [ 5, 8, "blue"],                   [ 5,10, "blue"], [ 5,12, "blue"],                  [ 5,14, "blue"],
[6, 4, "blue"], [6, 5, "blue"], [ 6, 6, "blue"], [ 6, 8, "blue"],                   [ 6,10, "blue"], [ 6,12, "blue"], [ 6,13, "blue"], [ 6,14, "blue"],
[7, 4, "blue"], [7, 5, "blue"], [ 7, 6, "blue"], [ 7, 8, "blue"],                   [ 7,10, "blue"], [ 7,12, "blue"], [ 7,13, "blue"], [ 7,14, "blue"],
[8, 4, "blue"], [8, 5, "blue"], [ 8, 6, "blue"], [ 8, 8, "blue"],                   [ 8,10, "blue"], [ 8,12, "blue"], [ 8,13, "blue"], [ 8,14, "blue"],
                                [ 9, 6, "blue"], [ 9, 8, "blue"],                   [ 9,10, "blue"],                                   [ 9,14, "blue"],
                                [10, 6, "blue"], [10, 8, "blue"],                   [10,10, "blue"],                                   [10,14, "blue"],
                                [11, 6, "blue"], [11, 8, "blue"],                   [11,10, "blue"],                                   [11,14, "blue"],
                                [12, 6, "blue"], [12, 8, "blue"],  [12, 9, "blue"], [12,10, "blue"],                                   [12,14, "blue"],
                                [13, 6, "blue"], [13, 8, "blue"],  [13, 9, "blue"], [13,10, "blue"],                                   [13,14, "blue"],
                                [14, 6, "blue"], [14, 8, "blue"],  [14, 9, "blue"], [14,10, "blue"],                                   [14,14, "blue"],

]


block.forEach( bl => {
    console.log(bl)
    const el = document.createElement("div");
    el.classList.add("block", bl[2]);

    el.style.top = bl[0]*15+50 + "px";
    el.style.left = bl[1]*50 + "px";
    el_playfield.appendChild(el);
})




function gameStart() {    
    el_paddle.style.top   = paddle.topEdge  + "px";
    el_paddle.style.width   = paddle.width  + "px";
    el_paddle.style.height   = paddle.height  + "px";
    gameLoop()
}
gameStart();

function gameLoop() {

    if (player1_left){
        paddle.leftEdge -= paddle.speed;

        if (paddle.leftEdge < 0) {
            paddle.leftEdge = 0;
        }
    }
    if (player1_right) {
        paddle.leftEdge += paddle.speed;

        if (paddle.leftEdge > playfield.width - paddle.width) {
            paddle.leftEdge = playfield.width - paddle.width;
        }
    }
    ball.leftEdge += ball.speedX;
    ball.topEdge  += ball.speedY;

    collision()
    
    el_paddle.style.left   = paddle.leftEdge  + "px";
    el_ball.style.top      = ball.topEdge + "px";
    el_ball.style.left     = ball.leftEdge + "px";

    window.requestAnimationFrame(gameLoop);
}

