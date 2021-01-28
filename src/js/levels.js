export default [
  {
    name: 'Black Hole',

    playfield: {
      height: 700,
      width: 1000,
      rowHeight: 20,
      columnWidth: 62.5,
      top: 0,
      left: 0,
    },

    paddle: {
      speedX: 20,
      height: 20,
      width: 600,
      top: 650,
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
        isSticked: true,
      },
      {
        speedX: 2,
        speedY: -3,
        size: 30,
        top: 620,
        left: 330,
        maxSpeed: 20,
        isSticked: true,
      },
      {
        speedX: 3,
        speedY: -4,
        size: 30,
        top: 620,
        left: 270,
        maxSpeed: 20,
        isSticked: true,
      },
      {
        speedX: 4,
        speedY: -5,
        size: 20,
        top: 630,
        left: 200,
        maxSpeed: 20,
        isSticked: true,
      },
      {
        speedX: 2,
        speedY: -5,
        size: 5,
        top: 645,
        left: 400,
        maxSpeed: 20,
        isSticked: true,
      },
    ],
    // prettier-ignore
    blocks: [
      [0, 0, 6], [0, 1, 6], [0, 2, 6], [0, 3, 6], [0, 4, 6], [0, 5, 6], [0, 6, 6], [0, 7, 6], [0, 8, 6], [0, 9, 6], [0, 10, 6], [0, 11, 6], [0, 12, 6], [0, 13, 6], [0, 14, 6],[0, 15, 6], [0, 16, 6],
      [1, 0, 5], [1, 1, 5], [1, 2, 5], [1, 3, 5], [1, 4, 5], [1, 5, 5], [1, 6, 5], [1, 7, 5], [1, 8, 5], [1, 9, 5], [1, 10, 5], [1, 11, 5], [1, 12, 5], [1, 13, 5], [1, 14, 5],[1, 15, 5], [1, 16, 5],
      [2, 0, 4], [2, 1, 4], [2, 2, 4], [2, 3, 4], [2, 4, 4], [2, 5, 4], [2, 6, 4], [2, 7, 4], [2, 8, 4], [2, 9, 4], [2, 10, 4], [2, 11, 4], [2, 12, 4], [2, 13, 4], [2, 14, 4],[2, 15, 4], [2, 16, 4],
      [3, 0, 3], [3, 1, 3], [3, 2, 3], [3, 3, 3], [3, 4, 3], [3, 5, 3], [3, 6, 3], [3, 7, 3], [3, 8, 3], [3, 9, 3], [3, 10, 3], [3, 11, 3], [3, 12, 3], [3, 13, 3], [3, 14, 3],[3, 15, 3], [3, 16, 3],
      [4, 0, 2], [4, 1, 2], [4, 2, 2], [4, 3, 2], [4, 4, 2], [4, 5, 2], [4, 6, 2], [4, 7, 2], [4, 8, 2], [4, 9, 2], [4, 10, 2], [4, 11, 2], [4, 12, 2], [4, 13, 2], [4, 14, 2],[4, 15, 2], [4, 16, 2],
      [5, 0, 1], [5, 1, 1], [5, 2, 1], [5, 3, 1], [5, 4, 1], [5, 5, 1], [5, 6, 1], [5, 7, 1], [5, 8, 1], [5, 9, 1], [5, 10, 1], [5, 11, 1], [5, 12, 1], [5, 13, 1], [5, 14, 1],[5, 15, 1], [5, 16, 1], 
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
      speedX: 5,
      height: 10,
      width: 200,
      top: 650,
      left: 100,
    },

    balls: [
      {
        speedX: 0,
        speedY: 2,
        size: 80,
        top: 400,
        left: 300,
        maxSpeed: 20,
        isSticked: true,
      },
      /*      {
        speedX: -1,
        speedY: -1,
        size: 25,
        top: 620,
        left: 300,
        maxSpeed: 20,
        isSticked: true,
      },
      {
        speedX: 2,
        speedY: 5,
        size: 10,
        top: 80,
        left: 460,
        maxSpeed: 20,
        isSticked: false,
      }, */
    ],
    // prettier-ignore
    blocks: [
      [0, 4, 4],                           [ 0, 8, 4], [ 0, 9, 4], [ 0,10, 4],    [ 0,12, 4],
      [1, 4, 4],                           [ 1, 8, 4], [ 1, 9, 4], [ 1,10, 4],    [ 1,12, 4],
      [2, 4, 4],                           [ 2, 8, 4], [ 2, 9, 4], [ 2,10, 4],    [ 2,12, 4],
      [3, 4, 4],            [ 3, 6, 4],    [ 3, 8, 4],             [ 3,10, 4],    [ 3,12, 4],             [ 3,14, 4],
      [4, 4, 4],            [ 4, 6, 1],    [ 4, 8, 4],             [ 4,10, 4],    [ 4,12, 4],             [ 4,14, 4],
      [5, 4, 4],            [ 5, 6, 4],    [ 5, 8, 4],             [ 5,10, 4],    [ 5,12, 4],             [ 5,14, 4],
      [6, 4, 4], [6, 5, 4], [ 6, 6, 1],    [ 6, 8, 4],             [ 6,10, 4],    [ 6,12, 4], [ 6,13, 4], [ 6,14, 4],
      [7, 4, 4], [7, 5, 4], [ 7, 6, 4],    [ 7, 8, 4],             [ 7,10, 4],    [ 7,12, 4], [ 7,13, 4], [ 7,14, 4],
      [8, 4, 1], [8, 5, 1], [ 8, 6, 1],    [ 8, 8, 3],             [ 8,10, 2],    [ 8,12, 4], [ 8,13, 4], [ 8,14, 4],
                            [ 9, 6, 4],    [ 9, 8, 4],             [ 9,10, 4],                            [ 9,14, 4],
                            [10, 6, 1],    [10, 8, 4],             [10,10, 4],                            [10,14, 4],
                            [11, 6, 4],    [11, 8, 4],             [11,10, 4],                            [11,14, 4],
                            [12, 6, 1],    [12, 8, 4], [12, 9, 4], [12,10, 1],                            [12,14, 1],
                            [13, 6, 4],    [13, 8, 4], [13, 9, 4], [13,10, 1],                            [13,14, 1],
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
      width: 200,
      top: 650,
      left: 200,
    },

    balls: [
      {
        speedX: -4,
        speedY: 4,
        size: 15,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: -4.1,
        speedY: 4,
        size: 15,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: -4.2,
        speedY: 4,
        size: 15,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      /* {
        speedX: 13,
        speedY: -3,
        size: 50,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 4,
        speedY: -3,
        size: 50,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 4,
        speedY: -3,
        size: 50,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2.5,
        speedY: 7,
        size: 50,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: 6,
        size: 50,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: -5,
        size: 50,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: 3,
        size: 50,
        top: 100,
        left: 600,
        maxSpeed: 20,
      },
      {
        speedX: 2,
        speedY: 8,
        size: 50,
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
      }, */
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
    name: 'Milk',

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
        speedY: 1,
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
