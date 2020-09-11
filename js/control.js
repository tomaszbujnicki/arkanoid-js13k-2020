let player1_up      = false,
    player1_right   = false,
    player1_down    = false,
    player1_left    = false;
    player2_up      = false,
    player2_right   = false,
    player2_down    = false,
    player2_left    = false;

document.addEventListener("keydown", press);
function press(e) {
    // player 1
    if (e.keyCode === 38 /* up */) {
        player1_up = true;
    }
    if (e.keyCode === 39 /* right */) {
        player1_right = true;
    }
    if (e.keyCode === 40 /* down */) {
        player1_down = true;
    }
    if (e.keyCode === 37 /* left */) {
        player1_left = true;
    }
    // player 2
    if (e.keyCode === 87 /* w */) {
        player2_up = true;
    }
    if (e.keyCode === 68 /* d */) {
        player2_right = true;
    }
    if (e.keyCode === 83 /* s */) {
        player2_down = true;
    }
    if (e.keyCode === 65 /* a */) {
        player2_left = true;
    }
}
document.addEventListener("keyup", release);
function release(e) {
    // player 1
    if (e.keyCode === 38 /* up */) {
        player1_up = false;
    }
    if (e.keyCode === 39 /* right */) {
        player1_right = false;
    }
    if (e.keyCode === 40 /* down */) {
        player1_down = false;
    }
    if (e.keyCode === 37 /* left */) {
        player1_left = false;
    }
    // player 2
    if (e.keyCode === 87 /* w */) {
        player2_up = false;
    }
    if (e.keyCode === 68 /* d */) {
        player2_right = false;
    }
    if (e.keyCode === 83 /* s */) {
        player2_down = false;
    }
    if (e.keyCode === 65 /* a */) {
        player2_left = false;
    }
}
