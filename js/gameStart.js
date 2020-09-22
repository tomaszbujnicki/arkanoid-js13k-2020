function gameStart(level) {

    document.getElementById("menu").classList.add("none")

    clearPlayfield();


    const playfield = Object.create(level.playfield);
    playfield.element = createPlayfieldElement(playfield);


    const paddle = newPaddle(level.paddle, level.playfield);

    const blockArray = [];
    level.blocks.forEach(item => {
        let block = newBlock(item, level.playfield)
        blockArray.push(block)
    })

    const ballArray = [];
    level.balls.forEach(item => {
        let ball = newBall(item)
        ballArray.push(ball)
    })


    createElement(paddle);

    blockArray.forEach(createElement)

    ballArray.forEach(createElement)
 

    draw(paddle);

    blockArray.forEach(draw)
    blockArray.forEach(changeColor)

    ballArray.forEach(draw)




    gameObject = {
        playfield: playfield,
        paddle: paddle,
        blockArray: blockArray,
        ballArray: ballArray
    };

/*  

    setInitialValues(level);


    fillBlocks();
    fillPlayfield();

    document.getElementById("header").textContent = "GAME OVER";

    draw();

    document.getElementById("playfield").classList.remove("none");
    document.getElementById("menu").classList.add("none");
    document.getElementById("gameOver").classList.add("none");

 */

    let pause = false;
    gameLoop()
}

function clearPlayfield() {
    
    const playfield = document.getElementById("playfield")

    if (playfield) playfield.remove();
}

function createPlayfieldElement(playfield) {

    const element = document.createElement("div");
    element.id = "playfield";
    element.style.top = playfield.top + "px";
    element.style.left = playfield.left + "px";
    element.classList.add("playfield");
    document.getElementById("game").appendChild(element);

    return element;
}

function createElement(object) {

    const element = document.createElement("div");
    element.id = object.id;
    element.classList.add(object.type);
    document.getElementById("playfield").appendChild(element);

    return element;
}

function newPaddle(paddle, playfield) {

    const item = new Paddle(
        paddle.top,
        paddle.left,
        paddle.height,
        paddle.width,
        paddle.speedX,
        playfield.left,
        playfield.left + playfield.width
    );

    return item;
}

function newBlock(block, playfield) {

    const item = new Block(
        block[0],
        block[1],
        block[2],
        playfield.rowHeight,
        playfield.columnWidth,
        playfield.paddingTop
    );

    return item;
}
const blockArray = []

function newBall(ball) {

    const item = new Ball(
        ball.id,
        ball.speedX,
        ball.speedY,
        ball.maxSpeed,
        ball.size,
        ball.top,
        ball.left
    );

    return item;
}



function setInitialValues() {
 
}