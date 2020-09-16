let currentLevel = 0;

document.getElementById("start").addEventListener( "click", () =>	gameStart(level_1), false )
document.getElementById("restart").addEventListener( "click", () =>	gameStart(levels[currentLevel]), false )



function increaseBallSpeed() {

    for ( const ball of balls){
        ball.speedUp()
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


/* const clearBlocks = () => { blocks = [] } 
const clearBalls  = () => { balls  = [] }  */



let gameObject = {}


function gameLoop() {

    draw(gameObject.paddle)

    movePaddle(gameObject.paddle)
 /*    moveBall()
    collisions()
     */
    


 
/*     increaseBallSpeed() */

    //end()

    //if(pause) return;
    window.requestAnimationFrame(gameLoop);
}

function end(){

    for (x in blocks) return;
    document.getElementById("header").textContent="Theme not found";
    gameOver()
}

function movePaddle(paddle) {

    if (player1_left)  paddle.moveLeft()
    if (player1_right) paddle.moveRight()
}

function moveBall() {

    for (let ball of ballArr){
        ball.move()
    }
}

function draw(object) {


    if (!object) return
    object.element.style.top       = object.top       + "px";
    object.element.style.left      = object.left      + "px";
    object.element.style.height    = object.height    + "px";
    object.element.style.width     = object.width     + "px";
}


const el_playfield = document.getElementById("playfield"),
      el_paddle = document.getElementById("paddle");





/* 
const ball_1 = new Ball(-2, 2.7, 10, 20, 500, 400);
balls.push(ball_1);
ball_1.element     = document.getElementById("ball_" + 1)

 */




function createBlockElement(block) {

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