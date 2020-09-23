const levelArray = [
    {
        blocks: [
            [0, 4, 4],                           [ 0, 8, 4], [ 0, 9, 4], [ 0,10, 4],    [ 0,12, 4],
            [1, 4, 4],                           [ 1, 8, 4], [ 1, 9, 4], [ 1,10, 4],    [ 1,12, 4],
            [2, 4, 4],                           [ 2, 8, 4], [ 2, 9, 4], [ 2,10, 4],    [ 2,12, 4],
            [3, 4, 4],            [ 3, 6, 4],    [ 3, 8, 4],             [ 3,10, 4],    [ 3,12, 4],             [ 3,14, 4],
            [4, 4, 4],            [ 4, 6, 4],    [ 4, 8, 4],             [ 4,10, 4],    [ 4,12, 4],             [ 4,14, 4],
            [5, 4, 4],            [ 5, 6, 4],    [ 5, 8, 4],             [ 5,10, 4],    [ 5,12, 4],             [ 5,14, 4],
            [6, 4, 4], [6, 5, 4], [ 6, 6, 4],    [ 6, 8, 4],             [ 6,10, 4],    [ 6,12, 4], [ 6,13, 4], [ 6,14, 4],
            [7, 4, 4], [7, 5, 4], [ 7, 6, 4],    [ 7, 8, 4],             [ 7,10, 4],    [ 7,12, 4], [ 7,13, 4], [ 7,14, 4],
            [8, 4, 4], [8, 5, 4], [ 8, 6, 4],    [ 8, 8, 3],             [ 8,10, 2],    [ 8,12, 4], [ 8,13, 4], [ 8,14, 4],
                                [ 9, 6, 4],    [ 9, 8, 4],             [ 9,10, 4],                            [ 9,14, 4],
                                [10, 6, 4],    [10, 8, 4],             [10,10, 4],                            [10,14, 4],
                                [11, 6, 4],    [11, 8, 4],             [11,10, 4],                            [11,14, 4],
                                [12, 6, 4],    [12, 8, 4], [12, 9, 4], [12,10, 1],                            [12,14, 4],
                                [13, 6, 4],    [13, 8, 4], [13, 9, 4], [13,10, 4],                            [13,14, 4],
                                [14, 6, 4],    [14, 8, 4], [14, 9, 4], [14,10, 0],                            [14,14, 4],   
        ],

        balls: [
            {
                speedX :        -2,
                speedY :         2.7,
                size :          10,
                top :      500,
                left :     400,
                maxSpeed :      20  
            },
            {
                speedX :        2,
                speedY :         -3,
                size :          30,
                top :      100,
                left :     600,
                maxSpeed :      20  
            }
        ],

        playfield: {
            height :      700,
            width :      1000,
            rowHeight :    15,
            columnWidth :  50,
            paddingTop :   150,
            top: 0,
            left: 0
        },

        paddle: {
            speedX :       10,
            height:       10,
            width :      200,
            top :    650,
            left :   200
        }
    },
    {
        blocks: [
            [0, 4, 2],                           [ 0, 8, 4], [ 0, 9, 4], [ 0,10, 4],    [ 0,12, 4],
            [1, 4, 1],                           [ 1, 8, 4], [ 1, 9, 4], [ 1,10, 4],    [ 1,12, 4],
            [2, 4, 2],                           [ 2, 8, 4], [ 2, 9, 4], [ 2,10, 4],    [ 2,12, 4],
            [3, 4, 3],            [ 3, 6, 4],    [ 3, 8, 4],             [ 3,10, 4],    [ 3,12, 4],             [ 3,14, 4],
            [4, 4, 4],            [ 4, 6, 4],    [ 4, 8, 4],             [ 4,10, 4],    [ 4,12, 4],             [ 4,14, 4],
            [5, 4, 1],            [ 5, 6, 4],    [ 5, 8, 4],             [ 5,10, 4],    [ 5,12, 4],             [ 5,14, 4],
            [6, 4, 1], [6, 5, 4], [ 6, 6, 4],    [ 6, 8, 4],             [ 6,10, 4],    [ 6,12, 4], [ 6,13, 4], [ 6,14, 4],
            [7, 4, 1], [7, 5, 4], [ 7, 6, 4],    [ 7, 8, 4],             [ 7,10, 4],    [ 7,12, 4], [ 7,13, 4], [ 7,14, 4],
            [8, 4, 4], [8, 5, 4], [ 8, 6, 4],    [ 8, 8, 3],             [ 8,10, 2],    [ 8,12, 4], [ 8,13, 4], [ 8,14, 4],
                                [ 9, 6, 4],    [ 9, 8, 4],             [ 9,10, 4],                            [ 9,14, 4],
                                [10, 6, 4],    [10, 8, 4],             [10,10, 4],                            [10,14, 4],
                                [11, 6, 4],    [11, 8, 4],             [11,10, 4],                            [11,14, 4],
                                [12, 6, 4],    [12, 8, 4], [12, 9, 4], [12,10, 1],                            [12,14, 4],
                                [13, 6, 4],    [13, 8, 4], [13, 9, 4], [13,10, 4],                            [13,14, 4],
                                [14, 6, 4],    [14, 8, 4], [14, 9, 4], [14,10, 0],                            [14,14, 4],   
        ],

        balls: [
            {
                speedX :        -2,
                speedY :         2.7,
                size :          10,
                top :      500,
                left :     400,
                maxSpeed :      20  
            },
            {
                speedX :        2,
                speedY :         -3,
                size :          30,
                top :      100,
                left :     600,
                maxSpeed :      20  
            }
        ],

        playfield: {
            height :      700,
            width :      1000,
            rowHeight :    15,
            columnWidth :  50,
            paddingTop :   150,
            top: 0,
            left: 0
        },

        paddle: {
            speedX :       10,
            height:       10,
            width :      200,
            top :    650,
            left :   200
        }
    }
]