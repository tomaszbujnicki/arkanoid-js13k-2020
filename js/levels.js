const levelArray = [
  {
    name: 'Black Hole',

    playfield: {
      height: 550,
      width: 800,
      rowHeight: 15,
      columnWidth: 50,
      top: 100,
      left: 100,
    },

    paddle: {
      speedX: 10,
      height: 10,
      width: 200,
      top: 450,
      left: 200,
    },

    balls: [
      {
        speedX: -2,
        speedY: -2.7,
        size: 10,
        top: 640,
        left: 300,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: -3,
        size: 30,
        top: 620,
        left: 330,
        maxSpeed: 20,
      },
      {
        speedX: 3,
        speedY: -4,
        size: 30,
        top: 620,
        left: 270,
        maxSpeed: 20,
      },
      {
        speedX: 4,
        speedY: -5,
        size: 20,
        top: 630,
        left: 200,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: -5,
        size: 5,
        top: 645,
        left: 400,
        maxSpeed: 20,
      },
    ],
    // prettier-ignore
    blocks: [
                                                  [14,14, 1],   
    ],
  },
  {
    name: '404 / 0',

    playfield: {
      height: 700,
      width: 1000,
      rowHeight: 15,
      columnWidth: 50,
      top: 0,
      left: 0,
    },

    paddle: {
      speedX: 30,
      height: 10,
      width: 200,
      top: 650,
      left: 100,
    },

    balls: [
      {
        speedX: 2,
        speedY: -5,
        size: 30,
        top: 620,
        left: 300,
        maxSpeed: 20,
      },
    ],
    // prettier-ignore
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
                            [14, 6, 1],    [14, 8, 1], [14, 9, 1], [14,10, 1],                            [14,14, 1],   
    ],
  },
  {
    name: '404 / 1',

    playfield: {
      height: 700,
      width: 1000,
      rowHeight: 30,
      columnWidth: 30,
      top: 0,
      left: 0,
    },

    paddle: {
      speedX: 10,
      height: 10,
      width: 600,
      top: 650,
      left: 200,
    },

    balls: [
/*       {
        speedX: 1,
        speedY: -3,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 3,
        speedY: -3,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      }, */
      {
        speedX: 4,
        speedY: -3,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      /* {
        speedX: 1.5,
        speedY: -3,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2.5,
        speedY: -3,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: -2,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: -1,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: 3,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: 0,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: 1,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: 2,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      }, */
    ],

    // prettier-ignore
    blocks: [
      [0, 4, 4],                           [ 0, 8, 1], [ 0, 9, 1], [ 0,10, 1],    [ 0,12, 1],
      [1, 4, 1],                           [ 1, 8, 1], [ 1, 9, 1], [ 1,10, 1],    [ 1,12, 1],
      [2, 4, 1],                           [ 2, 8, 1], [ 2, 9, 1], [ 2,10, 1],    [ 2,12, 1],
      [3, 4, 1],            [ 3, 6, 1],    [ 3, 8, 1],             [ 3,10, 1],    [ 3,12, 1],             [ 3,14, 1],
      [4, 4, 1],            [ 4, 6, 1],    [ 4, 8, 1],             [ 4,10, 1],    [ 4,12, 1],             [ 4,14, 1],
      [5, 4, 1],            [ 5, 6, 1],    [ 5, 8, 1],             [ 5,10, 1],    [ 5,12, 1],             [ 5,14, 1],
      [6, 4, 1], [6, 5, 1], [ 6, 6, 1],    [ 6, 8, 1],             [ 6,10, 1],    [ 6,12, 1], [ 6,13, 1], [ 6,14, 1],
      [7, 4, 1], [7, 5, 1], [ 7, 6, 1],    [ 7, 8, 1],             [ 7,10, 1],    [ 7,12, 1], [ 7,13, 1], [ 7,14, 1],
      [8, 4, 1], [8, 5, 1], [ 8, 6, 1],    [ 8, 8, 3],             [ 8,10, 2],    [ 8,12, 1], [ 8,13, 1], [ 8,14, 1],
                            [ 9, 6, 1],    [ 9, 8, 1],             [ 9,10, 1],                            [ 9,14, 1],
                            [10, 6, 1],    [10, 8, 1],             [10,10, 1],                            [10,14, 1],
                            [11, 6, 1],    [11, 8, 1],             [11,10, 1],                            [11,14, 1],
                            [12, 6, 1],    [12, 8, 1], [12, 9, 1], [12,10, 1],                            [12,14, 1],
                            [13, 6, 1],    [13, 8, 1], [13, 9, 1], [13,10, 1],                            [13,14, 1],
                            [14, 6, 1],    [14, 8, 1], [14, 9, 1], [14,10, 0],                            [14,14, 4],   
    ],
  },
  {
    name: 'Tiny Squares',

    playfield: {
      height: 700,
      width: 1000,
      rowHeight: 15,
      columnWidth: 15,
      top: 0,
      left: 0,
    },

    paddle: {
      speedX: 10,
      height: 10,
      width: 60,
      top: 650,
      left: 200,
    },

    balls: [
      {
        speedX: 11,
        speedY: -7,
        size: 5,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 13,
        speedY: -3,
        size: 5,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 4,
        speedY: -3,
        size: 5,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 4,
        speedY: -3,
        size: 5,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2.5,
        speedY: 7,
        size: 5,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: 6,
        size: 5,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: -5,
        size: 5,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: 3,
        size: 5,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: 8,
        size: 5,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: 4,
        size: 5,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: 3,
        size: 5,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
    ],

    // prettier-ignore
    blocks: [
      [0, 0, 1],      [0, 5, 1],      [0, 10, 1],      [0, 15, 1],      [0, 20, 1],       [0, 25, 1], 

      [2, 0, 1],      [2, 5, 1],      [2, 10, 1],      [2, 15, 1],      [2, 20, 1],       [2, 25, 1], 

      [4, 0, 1],      [4, 5, 1],      [4, 10, 1],      [4, 15, 1],      [4, 20, 1],       [4, 25, 1], 

      [6, 0, 1],      [6, 5, 1],      [6, 10, 1],      [6, 15, 1],      [6, 20, 1],       [6, 25, 1], 

      [8, 0, 1],      [8, 5, 1],      [8, 10, 1],      [8, 15, 1],      [8, 20, 1],       [8, 25, 1], 

      [10, 0, 1],     [10, 5, 1],      [10, 10, 1],      [10, 15, 1],      [10, 20, 1],       [10, 25, 1], 

      [12, 0, 1],     [12, 5, 1],      [12, 10, 1],      [12, 15, 1],      [12, 20, 1],       [12, 25, 1], 

      [14, 0, 1],     [14, 5, 1],      [14, 10, 1],      [14, 15, 1],      [14, 20, 1],       [14, 25, 1], 

      [16, 0, 1],     [16, 5, 1],      [16, 10, 1],      [16, 15, 1],      [16, 20, 1],       [16, 25, 1], 

      [18, 0, 1],     [18, 5, 1],      [18, 10, 1],      [18, 15, 1],      [18, 20, 1],       [18, 25, 1], 

      [20, 0, 1],     [20, 5, 1],      [20, 10, 1],      [20, 15, 1],      [20, 20, 1],       [20, 25, 1], 

      [22, 0, 1],     [22, 5, 1],      [22, 10, 1],      [22, 15, 1],      [22, 20, 1],       [22, 25, 1], 

      [24, 0, 1],     [24, 5, 1],      [24, 10, 1],      [24, 15, 1],      [24, 20, 1],       [24, 25, 1], 

      [26, 0, 1],     [26, 5, 1],      [26, 10, 1],      [26, 15, 1],      [26, 20, 1],       [26, 25, 1], 

      [28, 0, 1],     [28, 5, 1],      [28, 10, 1],      [28, 15, 1],      [28, 20, 1],       [28, 25, 1], 
  
    ],
  },
  {
    name: '404 / 2',

    playfield: {
      height: 700,
      width: 1000,
      rowHeight: 50,
      columnWidth: 5,
      top: 0,
      left: 0,
    },

    paddle: {
      speedX: 10,
      height: 10,
      width: 600,
      top: 650,
      left: 200,
    },

    balls: [
      {
        speedX: 1,
        speedY: -3,
        size: 5,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 3,
        speedY: -3,
        size: 5,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 4,
        speedY: -3,
        size: 5,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 1.5,
        speedY: -3,
        size: 5,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2.5,
        speedY: -3,
        size: 5,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: -2,
        size: 5,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: -1,
        size: 5,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: 3,
        size: 5,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: 0,
        size: 5,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: 1,
        size: 5,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: 2,
        size: 5,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
    ],

    // prettier-ignore
    blocks: [
      [0, 0, 1],      [0, 15, 1],      [0, 30, 1],      [0, 45, 1],      [0, 60, 1],       [0, 75, 1], 

      [2, 100, 1],      [2, 125, 1],      [2, 150, 1],      [2, 175, 1], 

      [4, 0, 1],      [4, 5, 1],      [4, 10, 1],      [4, 15, 1],      [4, 20, 1],       [4, 25, 1], 

      [6, 0, 1],      [6, 5, 1],      [6, 10, 1],      [6, 15, 1],      [6, 20, 1],       [6, 25, 1], 

      [8, 0, 1],      [8, 5, 1],      [8, 10, 1],      [8, 15, 1],      [8, 20, 1],       [8, 25, 1], 
    ],
  },
  {
    name: 'test',

    playfield: {
      height: 700,
      width: 1000,
      rowHeight: 15,
      columnWidth: 50,
      top: 0,
      left: 0,
    },

    paddle: {
      speedX: 10,
      height: 10,
      width: 600,
      top: 650,
      left: 200,
    },

    balls: [
      {
        speedX: -2,
        speedY: 2.7,
        size: 10,
        top: 500,
        left: 400,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: -3,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 3,
        speedY: -4,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 4,
        speedY: 5,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: 5,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
    ],
    // prettier-ignore
    blocks: [
                                                  [14,14, 1],   
    ],
  },
  {
    name: 'test',

    playfield: {
      height: 700,
      width: 1000,
      rowHeight: 15,
      columnWidth: 50,
      top: 0,
      left: 0,
    },

    paddle: {
      speedX: 10,
      height: 10,
      width: 600,
      top: 650,
      left: 200,
    },

    balls: [
      {
        speedX: -2,
        speedY: 2.7,
        size: 10,
        top: 500,
        left: 400,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: -3,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 3,
        speedY: -4,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 4,
        speedY: 5,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: 5,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
    ],
    // prettier-ignore
    blocks: [
                                                  [14,14, 1],   
    ],
    
  },
  {
    name: 'test',

    playfield: {
      height: 700,
      width: 1000,
      rowHeight: 15,
      columnWidth: 50,
      top: 0,
      left: 0,
    },

    paddle: {
      speedX: 10,
      height: 10,
      width: 600,
      top: 650,
      left: 200,
    },

    balls: [
      {
        speedX: -2,
        speedY: 2.7,
        size: 10,
        top: 500,
        left: 400,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: -3,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 3,
        speedY: -4,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 4,
        speedY: 5,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: 5,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
    ],
    // prettier-ignore
    blocks: [
                                                  [14,14, 1],   
    ],
  },
  {
    name: 'test',

    playfield: {
      height: 700,
      width: 1000,
      rowHeight: 15,
      columnWidth: 50,
      top: 0,
      left: 0,
    },

    paddle: {
      speedX: 10,
      height: 10,
      width: 600,
      top: 650,
      left: 200,
    },

    balls: [
      {
        speedX: -2,
        speedY: 2.7,
        size: 10,
        top: 500,
        left: 400,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: -3,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 3,
        speedY: -4,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 4,
        speedY: 5,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: 5,
        size: 30,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
    ],
    // prettier-ignore
    blocks: [
                                                  [14,14, 1],   
    ],
  },
  
];
