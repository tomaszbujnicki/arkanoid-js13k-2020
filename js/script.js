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


const block = [
    [0, 4, 4],                           [ 0, 8, 4], [ 0, 9, 4], [ 0,10, 4],    [ 0,12, 4],
    [1, 4, 4],                           [ 1, 8, 4], [ 1, 9, 4], [ 1,10, 4],    [ 1,12, 4],
    [2, 4, 4],                           [ 2, 8, 4], [ 2, 9, 4], [ 2,10, 4],    [ 2,12, 4],
    [3, 4, 4],            [ 3, 6, 4],    [ 3, 8, 4],             [ 3,10, 4],    [ 3,12, 4],             [ 3,14, 4],
    [4, 4, 4],            [ 4, 6, 4],    [ 4, 8, 4],             [ 4,10, 4],    [ 4,12, 4],             [ 4,14, 4],
    [5, 4, 4],            [ 5, 6, 4],    [ 5, 8, 4],             [ 5,10, 4],    [ 5,12, 4],             [ 5,14, 4],
    [6, 4, 4], [6, 5, 4], [ 6, 6, 4],    [ 6, 8, 4],             [ 6,10, 4],    [ 6,12, 4], [ 6,13, 4], [ 6,14, 4],
    [7, 4, 4], [7, 5, 4], [ 7, 6, 4],    [ 7, 8, 4],             [ 7,10, 4],    [ 7,12, 4], [ 7,13, 4], [ 7,14, 4],
    [8, 4, 4], [8, 5, 4], [ 8, 6, 4],    [ 8, 8, 4],             [ 8,10, 4],    [ 8,12, 4], [ 8,13, 4], [ 8,14, 4],
                          [ 9, 6, 4],    [ 9, 8, 4],             [ 9,10, 4],                            [ 9,14, 4],
                          [10, 6, 4],    [10, 8, 4],             [10,10, 4],                            [10,14, 4],
                          [11, 6, 4],    [11, 8, 4],             [11,10, 4],                            [11,14, 4],
                          [12, 6, 4],    [12, 8, 4], [12, 9, 4], [12,10, 4],                            [12,14, 4],
                          [13, 6, 4],    [13, 8, 4], [13, 9, 4], [13,10, 4],                            [13,14, 4],
                          [14, 6, 4],    [14, 8, 4], [14, 9, 4], [14,10, 4],                            [14,14, 4],
    
    ]
    
    let id = 0;
    block.forEach( bl => {
        const el = document.createElement("div");
        bl[3] = id;
        el.id = id
        id++;
        el.style.top = bl[0]*15+150 + "px";
        el.style.left = bl[1]*50 + "px";
        let color;
        if (bl[2] == 1) color = "yellow";
        if (bl[2] == 2) color = "green";
        if (bl[2] == 3) color = "red";
        if (bl[2] == 4) color = "blue";
        el.classList.add("block", color);
        el_playfield.appendChild(el);
        
    })


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


            for (let i = 0; i < block.length; i++){
                if (                    
                    ball.topEdge <= block[i][0]*15+165 &&
                    ball.topEdge >= block[i][0]*15+150 - ball.size &&
                    ball.leftEdge >= block[i][1]*50 - ball.size    &&
                    ball.leftEdge <= block[i][1]*50
                ){
                    block[i][2]--;
                    let color;
                    if (block[i][2] == 1) color = "yellow";
                    if (block[i][2] == 2) color = "green";
                    if (block[i][2] == 3) color = "red";
                    if (block[i][2] == 4) color = "blue";
                    document.getElementById(block[i][3]).classList.add(color)
                }
            }
        
}






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

