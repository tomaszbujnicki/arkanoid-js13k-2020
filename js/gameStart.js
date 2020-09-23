function gameStart() {

    closeMenu();

    clearLevel();

    createLevelObjects(levelArray[currentLevel]);

    createLevelElements();

    drawLevelElements();

    pause = false;
    
    gameLoop()
}


function clearLevel() {

    blockArray = [];
    ballArray = [];

    const playfield = document.getElementById("playfield")
    if (playfield) playfield.remove();
}


function createPlayfieldElement() {

    const element = document.createElement("div");
    element.id = "playfield";
    element.style.top = playfield.top + "px";
    element.style.left = playfield.left + "px";
    element.classList.add("playfield");
    document.getElementById("game").appendChild(element);
}


function createLevelObjects(level) {

    playfield = Object.create(level.playfield);

    paddle = newPaddle(level.paddle, level.playfield);

    level.blocks.forEach( item => {

        blockArray.push( newBlock( item, level.playfield ))
    })

    level.balls.forEach( item => {
  
        ballArray.push( newBall( item ) )
    })
    
}

function createLevelElements() {

    createPlayfieldElement();
    createElement(paddle);
    blockArray.forEach(createElement)
    ballArray.forEach(createElement)
}


function drawLevelElements() {
    draw(paddle);

    blockArray.forEach(draw)
    blockArray.forEach(changeColor)

    ballArray.forEach(draw)
}