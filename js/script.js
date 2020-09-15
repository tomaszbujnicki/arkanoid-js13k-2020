const playfield = {},
      paddle = {},
      ball = {},
      el_playfield = document.getElementById("playfield"),
      el_paddle = document.getElementById("paddle"),
      el_ball = document.getElementById("ball");

document.getElementById("start").addEventListener("click", gameStart, false)
document.getElementById("restart").addEventListener("click", gameStart, false)




    
function increaseBallSpeed() {

    const speed = Math.sqrt(ball.speedX*ball.speedX+ball.speedY*ball.speedY);
    if (speed < ball.maxSpeed){
        ball.speedY > 0 ? ball.speedY += 0.001 : ball.speedY -= 0.001;
    }
    
} 


function gameOver() {

    document.getElementById("gameOver").classList.remove("none")
    document.getElementById("playfield").classList.add("none")
    pause = true;
}


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

    for( let i = 0; i < level_01_map.length; i++ ){
        blocks[i] = {};
        blocks[i].id = i;
        blocks[i].row =  level_01_map[i][0];
        blocks[i].column =  level_01_map[i][1];
        blocks[i].power =  1;//level_01_map[i][2];
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
    ball.topEdge =      500;
    ball.leftEdge =     400;
    ball.maxSpeed =      20;

    paddle.speed =       10;
    paddle.height=       10;
    paddle.width =      200;
    paddle.topEdge =    670;
    paddle.leftEdge =   200;

    playfield.left =          5;
    playfield.top =           5;
    playfield.height =      700;
    playfield.width =      1000;
    playfield.rowHeight =    15;
    playfield.columnWidth =  50;
    playfield.topPadding =   150;
    
}
