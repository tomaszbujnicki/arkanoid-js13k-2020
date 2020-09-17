function gameStart(level) {

    document.getElementById("menu").classList.add("none")

    clearPlayfield();

    const playfield = Object.create(level.playfield);
    playfield.element = createPlayfieldElement(playfield);

    const paddle = loadPaddle(level.paddle, level.playfield);
    paddle.element = createPaddleElement(paddle);
    
    const blockArray = loadBlocks(level.blocks, level.playfield);
    blockArray.forEach(createBlockElement)
 
    const ballArray = loadBalls(level.balls, level.playfield);
    for ( const ball of ballArray){
        ball.element = createBallElement(ball)
    }

    draw(playfield);
    draw(paddle);
    ballArray.forEach(draw);

    gameObject = {
        playfield: playfield,
        paddle: paddle,
        blockArray: blockArray
    };

    //console.log(playfield.element, paddle.element) // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/* 

    const blocks = [];
    

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

function createPaddleElement(paddle) {

    const element = document.createElement("div");
    element.id = "paddle";
    element.style.top = paddle.top + "px";
    element.style.left = paddle.left + "px";
    element.classList.add("paddle");
    document.getElementById("playfield").appendChild(element);

    return element;
}

function createBallElement(ball) {

    const element = document.createElement("div");
    element.id = "ball_" + ball.id;
    element.style.top = ball.top + "px";
    element.style.left = ball.left + "px";
    element.classList.add("ball");
    document.getElementById("playfield").appendChild(element);

    return element;
}

function createBlockElement(block) {

    const element = document.createElement("div");
    element.id = "block_" + block.id;
    element.style.top = block.top + "px";
    element.style.left = block.left + "px";
    element.classList.add("block", getColor(block.power));
    document.getElementById("playfield").appendChild(element);

    return element;
}

function loadPaddle(paddle, playfield) {

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

function loadBlocks(blocks, playfield) {

    const blockArray = []

    for (const i in blocks) {
        const block = new Block(
            i,
            blocks[i][0],
            blocks[i][1],
            blocks[i][2],
            playfield.rowHeight,
            playfield.columnWidth,
            playfield.paddingTop
        );
        blockArray.push(block)
    }

    return blockArray;
}

function loadBalls(balls) {
    const ballArray = [];

    for (const ball of balls) {
        const item = new Ball(
            ball.id,
            ball.speedX,
            ball.speedY,
            ball.maxSpeed,
            ball.size,
            ball.top,
            ball.left
        );

        ballArray.push(item);
    }

    return ballArray;
}



function setInitialValues() {
 
}