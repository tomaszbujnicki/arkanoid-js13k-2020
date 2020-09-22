let currentLevel = 0;
let IdCounter = 0;

function uniqueId() {
    return IdCounter++
}

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


function changeColor(object){

    if (!object) return

    let element = document.getElementById(object.id)

    let color = "pink"

    switch(object.power) {
        case 1:
            color = "white";
            break;
        case 2:
            color = "green";
            break;
        case 3:
            color = "red";  
            break;
        case 4:
            color = "blue";
            break;
        default:
            color = "pink";
            break;
      }

      element.style.backgroundColor = color;
}

let gameObject = {}


function gameLoop() {

    draw(gameObject.paddle)
    gameObject.ballArray.forEach(draw)
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

    let element = document.getElementById(object.id)
    
    element.style.top       = object.top       + "px";
    element.style.left      = object.left      + "px";
    element.style.height    = object.height    + "px";
    element.style.width     = object.width     + "px";
    //element.style.backgroundColor = changeColor(object.power);
}


const el_playfield = document.getElementById("playfield"),
      el_paddle = document.getElementById("paddle");


function damageBlock(block, blockIndex) {
    block.power--;
    if ( block.power <= 0 ) {
        removeBlock(block, blockIndex)
    }
    else{
        const element = document.getElementById("block_" + block.id);
        element.classList.add(changeColor(block.power));
    }
}

function removeBlock(block, blockIndex) {
    const element = document.getElementById("block_" + block.id);
    element.remove();
    blocks.splice(blockIndex,1)
}