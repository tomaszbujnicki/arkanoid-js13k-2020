const playfield = {},
      paddle = {},
      ball = {},
      el_playfield = document.getElementById("playfield"),
      el_paddle = document.getElementById("paddle"),
      el_ball = document.getElementById("ball");



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

    
function increaseBallSpeed() {

    ball.speedY += 0.001
} 

function limitBallSpeed() {

    if (ball.speedX > ball.maxSpeed) ball.speedX = ball.maxSpeed;
    if (ball.speedX < -ball.maxSpeed) ball.speedX = -ball.maxSpeed;
    if (ball.speedY < -ball.maxSpeed) ball.speedY = -ball.maxSpeed;
}
    



            

document.getElementById("start").addEventListener("click", gameStart, false)
document.getElementById("restart").addEventListener("click", gameStart, false)

function gameOver() {

    document.getElementById("gameOver").classList.remove("none")
    document.getElementById("playfield").classList.add("none")
    pause = true;
}

const map_01 = [
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
function getColor(number){

    switch(number) {
        case 0:
            return "none";
        case 1:
            return "yellow";
        case 2:
            return "green";
        case 3:
            return "red";  
        case 4:
            return "blue";
        default:
            return "none";
      } 
}

let blocks = []

function clearBlocks() {

    blocks = []
}

function fillBlocks() {

    for( let i = 0; i < map_01.length; i++ ){
        blocks[i] = {};
        blocks[i].id = i;
        blocks[i].row =  map_01[i][0];
        blocks[i].column =  map_01[i][1];
        blocks[i].power =  1;//map_01[i][2];
	}
}
function clearPlayfield() {

    const elements_block = document.getElementsByClassName("block");
    for ( let i = 0; i < elements_block.length; i){
        elements_block[i].remove();
    }
}
function fillPlayfield() {

    for ( const block of blocks){
        const element = document.createElement("div");
        element.id = "block_" + block.id;
        element.style.top = block.row*playfield.rowHeight+playfield.topPadding + "px";
        element.style.left = block.column*playfield.columnWidth + "px";
        element.classList.add("block", getColor(block.power));
        el_playfield.appendChild(element);
    }
}




function gameStart() { 

    clearBlocks()
    clearPlayfield()
    setInitialValue()
    fillBlocks()
    fillPlayfield()

    document.getElementById("header").textContent="GAME OVER";
    
    draw()

    document.getElementById("playfield").classList.remove("none")
    document.getElementById("menu").classList.add("none")
    document.getElementById("gameOver").classList.add("none")
    pause = false;
    gameLoop()
}

let pause = false;

function gameLoop() {

    movePaddle()
    moveBall()
    collisions()
    
    draw()
 
    increaseBallSpeed()

    end()

    if(pause) return;
    window.requestAnimationFrame(gameLoop);
}

function end(){

    for (x in blocks) return;
    document.getElementById("header").textContent="Theme not found";
    gameOver()
}

function movePaddle() {

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
}

function moveBall() {

    ball.leftEdge += ball.speedX;
    ball.topEdge  += ball.speedY;
}

function draw() {

    el_paddle.style.top     = paddle.topEdge  + "px";
    el_paddle.style.width   = paddle.width  + "px";
    el_paddle.style.height  = paddle.height  + "px";
    el_paddle.style.left    = paddle.leftEdge  + "px";

    el_ball.style.top       = ball.topEdge + "px";
    el_ball.style.left      = ball.leftEdge + "px";
    el_ball.style.width     = ball.size + "px";
    el_ball.style.height    = ball.size + "px";
}

function setInitialValue() {

    ball.speedX =        -2;
    ball.speedY =         2.7;
    ball.size =          10;
    ball.topEdge =      100;
    ball.leftEdge =     200;
    ball.maxSpeed =      10;

    paddle.speed =       10;
    paddle.height=       10;
    paddle.width =      200;
    paddle.topEdge =    670;
    paddle.leftEdge =   500;

    playfield.left =          5;
    playfield.top =           5;
    playfield.height =      700;
    playfield.width =      1000;
    playfield.rowHeight =    15;
    playfield.columnWidth =  50;
    playfield.topPadding =   150;
    
}
