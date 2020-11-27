// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../css/reset.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../css/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\img\\sound-on.svg":[["sound-on.9c2316ff.svg","../img/sound-on.svg"],"../img/sound-on.svg"],"./..\\img\\sound-off.svg":[["sound-off.8762b533.svg","../img/sound-off.svg"],"../img/sound-off.svg"],"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../audio/hit-1.wav":[function(require,module,exports) {
module.exports = "/hit-1.0eb2aaff.wav";
},{}],"../audio/hit-2.wav":[function(require,module,exports) {
module.exports = "/hit-2.820fc70e.wav";
},{}],"../audio/hit-3.wav":[function(require,module,exports) {
module.exports = "/hit-3.a797a424.wav";
},{}],"../audio/ball-lost.wav":[function(require,module,exports) {
module.exports = "/ball-lost.58086f92.wav";
},{}],"../audio/coin.wav":[function(require,module,exports) {
module.exports = "/coin.0a8c2ad8.wav";
},{}],"../audio/fire.wav":[function(require,module,exports) {
module.exports = "/fire.7d261f2a.wav";
},{}],"../audio/game-over.wav":[function(require,module,exports) {
module.exports = "/game-over.7f7a9722.wav";
},{}],"../audio/end-game.wav":[function(require,module,exports) {
module.exports = "/end-game.8f6538b6.wav";
},{}],"../audio/level-clear.wav":[function(require,module,exports) {
module.exports = "/level-clear.122bb378.wav";
},{}],"../audio/live-lost.wav":[function(require,module,exports) {
module.exports = "/live-lost.38bfe921.wav";
},{}],"../audio/mouse-click.wav":[function(require,module,exports) {
module.exports = "/mouse-click.808f3f8b.wav";
},{}],"../audio/power-down.wav":[function(require,module,exports) {
module.exports = "/power-down.5bba89a3.wav";
},{}],"../audio/power-up-1.wav":[function(require,module,exports) {
module.exports = "/power-up-1.34e93d8c.wav";
},{}],"../audio/power-up-2.wav":[function(require,module,exports) {
module.exports = "/power-up-2.bee6c631.wav";
},{}],"../audio/power-up-3.wav":[function(require,module,exports) {
module.exports = "/power-up-3.00df82a7.wav";
},{}],"../js/sounds.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hit = _interopRequireDefault(require("../audio/hit-1.wav"));

var _hit2 = _interopRequireDefault(require("../audio/hit-2.wav"));

var _hit3 = _interopRequireDefault(require("../audio/hit-3.wav"));

var _ballLost = _interopRequireDefault(require("../audio/ball-lost.wav"));

var _coin = _interopRequireDefault(require("../audio/coin.wav"));

var _fire = _interopRequireDefault(require("../audio/fire.wav"));

var _gameOver = _interopRequireDefault(require("../audio/game-over.wav"));

var _endGame = _interopRequireDefault(require("../audio/end-game.wav"));

var _levelClear = _interopRequireDefault(require("../audio/level-clear.wav"));

var _liveLost = _interopRequireDefault(require("../audio/live-lost.wav"));

var _mouseClick = _interopRequireDefault(require("../audio/mouse-click.wav"));

var _powerDown = _interopRequireDefault(require("../audio/power-down.wav"));

var _powerUp = _interopRequireDefault(require("../audio/power-up-1.wav"));

var _powerUp2 = _interopRequireDefault(require("../audio/power-up-2.wav"));

var _powerUp3 = _interopRequireDefault(require("../audio/power-up-3.wav"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  hit_1: new Audio(_hit.default),
  hit_2: new Audio(_hit2.default),
  hit_3: new Audio(_hit3.default),
  ballLost: new Audio(_ballLost.default),
  coin: new Audio(_coin.default),
  fire: new Audio(_fire.default),
  gameOver: new Audio(_gameOver.default),
  endGame: new Audio(_endGame.default),
  levelClear: new Audio(_levelClear.default),
  liveLost: new Audio(_liveLost.default),
  mouseClick: new Audio(_mouseClick.default),
  powerDown: new Audio(_powerDown.default),
  powerUp_1: new Audio(_powerUp.default),
  powerUp_2: new Audio(_powerUp2.default),
  powerUp_3: new Audio(_powerUp3.default)
};
exports.default = _default;
},{"../audio/hit-1.wav":"../audio/hit-1.wav","../audio/hit-2.wav":"../audio/hit-2.wav","../audio/hit-3.wav":"../audio/hit-3.wav","../audio/ball-lost.wav":"../audio/ball-lost.wav","../audio/coin.wav":"../audio/coin.wav","../audio/fire.wav":"../audio/fire.wav","../audio/game-over.wav":"../audio/game-over.wav","../audio/end-game.wav":"../audio/end-game.wav","../audio/level-clear.wav":"../audio/level-clear.wav","../audio/live-lost.wav":"../audio/live-lost.wav","../audio/mouse-click.wav":"../audio/mouse-click.wav","../audio/power-down.wav":"../audio/power-down.wav","../audio/power-up-1.wav":"../audio/power-up-1.wav","../audio/power-up-2.wav":"../audio/power-up-2.wav","../audio/power-up-3.wav":"../audio/power-up-3.wav"}],"../js/keybordControl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keybordControl = keybordControl;
exports.isKeyPressed = void 0;
var isKeyPressed = {
  left: false,
  right: false,
  space: false,
  pause: false
};
exports.isKeyPressed = isKeyPressed;

function keybordControl() {
  document.addEventListener('keydown', press);

  function press(e) {
    if (e.keyCode === 39) {
      isKeyPressed.right = true;
    }

    if (e.keyCode === 37) {
      isKeyPressed.left = true;
    }

    if (e.keyCode === 32) {
      isKeyPressed.space = true;
    }

    if (e.keyCode === 80) {
      isKeyPressed.pause = true;
    }
  }

  document.addEventListener('keyup', release);

  function release(e) {
    if (e.keyCode === 39) {
      isKeyPressed.right = false;
    }

    if (e.keyCode === 37) {
      isKeyPressed.left = false;
    }

    if (e.keyCode === 32) {
      isKeyPressed.space = false;
    }

    if (e.keyCode === 80) {
      isKeyPressed.pause = false;
    }
  }
}
},{}],"../js/drawPanel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = drawPanel;
var canvas = document.querySelector('#info-panel');
var ctx = canvas.getContext('2d');

function drawPanel() {
  var game = this;
  ctx.save();
  ctx.clearRect(0, 0, 256, 700);
  var row = canvas.height / 10;
  var column1 = 20;
  var column2 = 120;
  ctx.font = 'bold 20pt Courier';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.fillText(game.level.name, canvas.width / 2, row * 1);
  ctx.font = 'bold 16pt Courier';
  ctx.textAlign = 'left';
  ctx.fillText(game.levelNumber + 1 + ' / ' + (game.levels.length + 1), column2, row * 2);
  ctx.fillText(game.lives, column2, row * 3);
  ctx.fillText(game.score, column2, row * 4);
  ctx.fillStyle = 'blue';
  ctx.fillText('Level: ', column1, row * 2);
  ctx.fillText('Lives: ', column1, row * 3);
  ctx.fillText('Score: ', column1, row * 4);
  ctx.restore();
}
},{}],"../js/drawInfo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = drawInfo;
var canvas = document.querySelector('#playgroud-info');
var ctx = canvas.getContext('2d');

function drawInfo() {
  ctx.save();
  ctx.clearRect(0, 0, 1260, 700);
  var center_x = this.level.playfield.width / 2 + this.level.playfield.left;
  var center_y = this.level.playfield.height / 2 + this.level.playfield.top;
  var paddle = this.level.paddle.top;
  var seconds = this.seconds;
  var message = this.hint;

  if (seconds > 0) {
    countdown();
  } else {
    if (message) hint();
  }

  ctx.restore();

  function countdown() {
    ctx.font = 'bold 200pt Verdana';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';
    ctx.fillText(seconds, center_x, center_y + 80);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 6;
    ctx.strokeText(seconds, center_x, center_y + 80);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 3;
    ctx.strokeText(seconds, center_x, center_y + 80);
  }

  function hint() {
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 1;
    ctx.font = 'bold 18pt Verdana';
    ctx.fillStyle = blink();
    ctx.textAlign = 'center';
    ctx.fillText(message, center_x, paddle - 40);
    ctx.strokeText(message, center_x, paddle - 40);
  }
}

var myColor = {
  r: 255,
  g: 255,
  b: 255,
  up: false
};

function blink() {
  if (myColor.up) {
    myColor.g += 5;
    myColor.r += 5;
    if (myColor.r >= 250) myColor.up = false;
  } else {
    myColor.g -= 5;
    myColor.r -= 5;
    if (myColor.r <= 5) myColor.up = true;
  }

  var color = "rgb(".concat(myColor.r, ", ").concat(myColor.g, ", ").concat(myColor.b, ")");
  return color;
}
},{}],"../js/draw.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = draw;
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');

function draw() {
  ctx.clearRect(0, 0, 1260, 700);
  drawShape(this.playfield, 'transparent');
  drawShape(this.paddle);
  this.ballArray.forEach(function (ball) {
    drawShape(ball, 'white', 'circle');
  });
  this.blockArray.forEach(function (block) {
    drawShape(block, getColor(block.power));
  });

  function drawShape(object) {
    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'white';
    var shape = arguments.length > 2 ? arguments[2] : undefined;
    ctx.save();
    ctx.fillStyle = color;
    ctx.strokeStyle = 'silver';
    ctx.lineWidth = 2;
    ctx.beginPath();

    if (!shape) {
      ctx.rect(object.left, object.top, object.width, object.height);
    } else {
      if (shape = 'circle') {
        ctx.arc(object.left + object.size / 2, object.top + object.size / 2, object.size / 2, 0, 2 * Math.PI);
      }
    }

    ctx.clip();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  function getColor(power) {
    var color = 'white';

    switch (power) {
      case 1:
        color = 'white';
        break;

      case 2:
        color = 'green';
        break;

      case 3:
        color = 'red';
        break;

      case 4:
        color = 'blue';
        break;

      default:
        color = 'white';
        break;
    }

    return color;
  }
}
},{}],"../js/functions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.random = random;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var isAnyBallSticked = function isAnyBallSticked() {
  var _iterator = _createForOfIteratorHelper(ballArray),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var ball = _step.value;
      if (ball.isSticked) return true;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return false;
};

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomlyCreateNewBall() {
  if (random(1, 100) <= 10) {
    var ball = new Ball(0, 0, 15, random(5, 50), random(0, playfield.height - 150), random(0, playfield.width - 50));
    ballArray.push(ball);
    createElement(ball);
  }
}
},{}],"../js/collisions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = collisions;

var _sounds = _interopRequireDefault(require("./sounds"));

var _functions = require("./functions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function collisions() {
  var level = this;
  var playfield = level.playfield;
  var paddle = level.paddle;
  var blockArray = level.blockArray;
  level.ballArray.forEach(function (ball) {
    wallsCollisions(ball);
    paddleCollisions(ball);
    blockCollisions(ball);
  });

  function wallsCollisions(ball) {
    if (ball.left > playfield.left + playfield.width - ball.size) {
      ball.left = playfield.left + playfield.width - ball.size;
      ball.speedX *= -1;
    }

    if (ball.left < playfield.left) {
      ball.left = playfield.left;
      ball.speedX *= -1;
    }

    if (ball.top < playfield.top) {
      ball.top = playfield.top;
      ball.speedY *= -1;
    }

    if (ball.top > playfield.height + playfield.top - ball.size) {
      level.deleteBall(ball);

      _sounds.default.ballLost.play();
    }
  }

  function paddleCollisions(ball) {
    if (ball.speedY > 0 && ball.top >= paddle.top - ball.size && ball.top <= paddle.top + paddle.height && ball.left >= paddle.left - ball.size && ball.left <= paddle.left + paddle.width) {
      var offset = 1.8 * (ball.left + ball.size / 2 - (paddle.left + paddle.width / 2)) / paddle.width;
      if (offset > 0.95) offset = 0.95;
      if (offset < -0.95) offset = -0.95;
      var speed = Math.sqrt(ball.speedX * ball.speedX + ball.speedY * ball.speedY);
      ball.speedX = speed * offset;
      ball.speedY = -1 * Math.sqrt(speed * speed - ball.speedX * ball.speedX);
    }
  }

  function blockCollisions(ball) {
    var _iterator = _createForOfIteratorHelper(blockArray),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var block = _step.value;

        if (isBlockHit(block) && bounceBall(block)) {
          block.damage();

          _sounds.default['hit_' + (0, _functions.random)(1, 3)].play();

          if (block.power <= 0) {
            level.deleteBlock(block);
            level.game.updateScore(25);
          } else {
            level.game.updateScore(5);
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    function isBlockHit(block) {
      return ball.top <= block.top + block.height && ball.top + ball.size >= block.top && ball.left + ball.size >= block.left && ball.left <= block.left + block.width;
    }

    function bounceBall(block) {
      var hasHit = false;
      var neighborLeft = blockArray.find(function (item) {
        return item.row === block.row && item.column === block.column - 1;
      });
      var neighborRight = blockArray.find(function (item) {
        return item.row === block.row && item.column === block.column + 1;
      });
      var neighborBottom = blockArray.find(function (item) {
        return item.column === block.column && item.row === block.row + 1;
      });
      var neighborTop = blockArray.find(function (item) {
        return item.column === block.column && item.row === block.row - 1;
      });

      if (ball.left + ball.size - ball.speedX < block.left && neighborLeft === undefined) {
        ball.speedX = Math.abs(ball.speedX) * -1;
        hasHit = true;
      } else {
        if (ball.left - ball.speedX > block.left + block.width && neighborRight === undefined) {
          ball.speedX = Math.abs(ball.speedX);
          hasHit = true;
        }
      }

      if (ball.top - ball.speedY > block.top + block.height && neighborBottom === undefined) {
        ball.speedY = Math.abs(ball.speedY);
        hasHit = true;
      } else {
        if (ball.top + ball.size - ball.speedY < block.top && neighborTop === undefined) {
          ball.speedY = Math.abs(ball.speedY) * -1;
          hasHit = true;
        }
      }

      return hasHit;
    }
  }
}
},{"./sounds":"../js/sounds.js","./functions":"../js/functions.js"}],"../js/Ball.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ball = /*#__PURE__*/function () {
  function Ball(ball) {
    _classCallCheck(this, Ball);

    this.id = uniqueId();
    this.type = 'ball';
    this.speedX = ball.speedX;
    this.speedY = ball.speedY;
    this.maxSpeed = ball.maxSpeed;
    this.size = ball.size;
    this.top = ball.top;
    this.left = ball.left;
    this.height = ball.size;
    this.width = ball.size;
    this.isSticked = true;
    if (this.maxSpeed >= 25) this.maxSpeed = 25;
  }

  _createClass(Ball, [{
    key: "move",
    value: function move(p) {
      if (!this.isSticked) {
        this.left += this.speedX * p;
        this.top += this.speedY * p;
      }
    }
  }, {
    key: "speedUp",
    value: function speedUp(p) {
      var speed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);

      if (speed < this.maxSpeed) {
        this.speedY > 0 ? this.speedY += 0.0005 * p : this.speedY -= 0.0005 * p;
        this.speedX > 0 ? this.speedX += 0.0005 * p : this.speedX -= 0.0005 * p;
      }
    }
  }]);

  return Ball;
}();

exports.default = Ball;
var IdCounter = 0;

function uniqueId() {
  return IdCounter++;
}
},{}],"../js/Block.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Block = /*#__PURE__*/function () {
  function Block(block, playfield) {
    _classCallCheck(this, Block);

    this.id = uniqueId();
    this.type = 'block';
    this.row = block[0];
    this.column = block[1];
    this.left = this.column * playfield.columnWidth;
    this.top = this.row * playfield.rowHeight;
    this.width = playfield.columnWidth;
    this.height = playfield.rowHeight;
    this.power = block[2];
    if (this.power <= 0) this.power = 1;
    if (this.power > 9) this.power = 9;
  }

  _createClass(Block, [{
    key: "damage",
    value: function damage() {
      this.power--;
    }
  }]);

  return Block;
}();

exports.default = Block;
var IdCounter = 0;

function uniqueId() {
  return IdCounter++;
}
},{}],"../js/Paddle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Paddle = /*#__PURE__*/function () {
  function Paddle(paddle, playfield) {
    _classCallCheck(this, Paddle);

    this.type = 'paddle';
    this.top = paddle.top;
    this.left = paddle.left;
    this.height = paddle.height;
    this.width = paddle.width;
    this.speedX = paddle.speedX;
    this.leftRange = playfield.left;
    this.rightRange = playfield.left + playfield.width;
    if (this.speedX >= 50) this.speedX = 50;
  }

  _createClass(Paddle, [{
    key: "moveLeft",
    value: function moveLeft(p) {
      this.left -= this.speedX * p;

      if (this.left < this.leftRange) {
        this.left = this.leftRange;
      }
    }
  }, {
    key: "moveRight",
    value: function moveRight(p) {
      this.left += this.speedX * p;

      if (this.left + this.width > this.rightRange) {
        this.left = this.rightRange - this.width;
      }
    }
  }]);

  return Paddle;
}();

exports.default = Paddle;
},{}],"../js/Playfield.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Playfield = function Playfield(playfield) {
  _classCallCheck(this, Playfield);

  this.id = 'playfield';
  this.height = playfield.height;
  this.width = playfield.width;
  this.rowHeight = playfield.rowHeight;
  this.columnWidth = playfield.columnWidth;
  this.top = playfield.top;
  this.left = playfield.left;
};

exports.default = Playfield;
},{}],"../js/Level.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _keybordControl = require("./keybordControl");

var _draw = _interopRequireDefault(require("./draw"));

var _collisions = _interopRequireDefault(require("./collisions"));

var _Ball = _interopRequireDefault(require("./Ball"));

var _Block = _interopRequireDefault(require("./Block"));

var _Paddle = _interopRequireDefault(require("./Paddle"));

var _Playfield = _interopRequireDefault(require("./Playfield"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Level = /*#__PURE__*/function () {
  function Level(level, game) {
    _classCallCheck(this, Level);

    this.playfield = new _Playfield.default(level.playfield);
    this.paddle = this.createPaddle(level.paddle, this.playfield);
    this.ballArray = this.createBallArray(level.balls, this.playfield);
    this.blockArray = this.createBlockArray(level.blocks, this.playfield);
    this.name = level.name;
    this.game = game;
    this.collisions = _collisions.default;
    this.draw = _draw.default;
  }

  _createClass(Level, [{
    key: "deleteBall",
    value: function deleteBall(ball) {
      var index = this.ballArray.findIndex(function (e) {
        return e === ball;
      });
      this.ballArray.splice(index, 1);
    }
  }, {
    key: "deleteBlock",
    value: function deleteBlock(block) {
      var index = this.blockArray.findIndex(function (e) {
        return e === block;
      });
      this.blockArray.splice(index, 1);
    }
  }, {
    key: "unstickBalls",
    value: function unstickBalls() {
      this.ballArray.forEach(function (ball) {
        return ball.isSticked = false;
      });
    }
  }, {
    key: "isWon",
    value: function isWon() {
      return this.blockArray.length === 0;
    }
  }, {
    key: "isLost",
    value: function isLost() {
      return this.ballArray.length === 0;
    }
  }, {
    key: "update",
    value: function update(progress) {
      var p = progress / 16;
      if (!p) p = 1;

      if (_keybordControl.isKeyPressed.space) {
        this.unstickBalls();
      }

      this.movePaddle(p);
      this.ballArray.forEach(function (ball) {
        ball.move(p);
        ball.speedUp(p);
      });
    }
  }, {
    key: "movePaddle",
    value: function movePaddle(p) {
      if (_keybordControl.isKeyPressed.right && _keybordControl.isKeyPressed.left || !_keybordControl.isKeyPressed.right && !_keybordControl.isKeyPressed.left) {
        return;
      }

      var before = this.paddle.left;

      if (_keybordControl.isKeyPressed.left) {
        this.paddle.leftRange = this.playfield.left;
        this.paddle.moveLeft(p);
      } else {
        this.paddle.rightRange = this.playfield.left + this.playfield.width;
        this.paddle.moveRight(p);
      }

      var shift = this.paddle.left - before;
      this.ballArray.forEach(function (ball) {
        if (ball.isSticked) {
          ball.left += shift;
        }
      });
    }
  }, {
    key: "createPaddle",
    value: function createPaddle(paddle, playfield) {
      var newPaddle = new _Paddle.default(paddle, playfield);

      if (this.canCreateObject(newPaddle, playfield)) {
        return newPaddle;
      } else return false;
    }
  }, {
    key: "createBallArray",
    value: function createBallArray(balls, playfield) {
      var _this = this;

      var ballArray = [];
      balls.forEach(function (item) {
        var ball = new _Ball.default(item, playfield);

        if (_this.canCreateObject(ball, playfield)) {
          ballArray.push(ball);
        }
      });
      return ballArray;
    }
  }, {
    key: "createBlockArray",
    value: function createBlockArray(blocks, playfield) {
      var _this2 = this;

      var blockArray = [];
      blocks.forEach(function (item) {
        var block = new _Block.default(item, playfield);

        if (_this2.canCreateObject(block, playfield)) {
          blockArray.push(block);
        }
      });
      return blockArray;
    }
  }, {
    key: "canCreateObject",
    value: function canCreateObject(item, playfield) {
      if (item.width > 0 && item.height > 0 && item.left >= playfield.left && item.left + item.width <= playfield.left + playfield.width && item.top >= playfield.top && item.top + item.height <= playfield.top + playfield.height) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return Level;
}();

exports.default = Level;
},{"./keybordControl":"../js/keybordControl.js","./draw":"../js/draw.js","./collisions":"../js/collisions.js","./Ball":"../js/Ball.js","./Block":"../js/Block.js","./Paddle":"../js/Paddle.js","./Playfield":"../js/Playfield.js"}],"../js/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GAMESTATE = void 0;
var GAMESTATE = {
  RUN: 0,
  PAUSE: 1,
  ABORT: 2
};
exports.GAMESTATE = GAMESTATE;
},{}],"../js/highscore.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  maxLength: 5,
  table: [{
    player: 'Mike',
    score: 1
  }, {
    player: 'Derrek',
    score: 2
  }, {
    player: 'Emily',
    score: 3
  }, {
    player: 'Bart',
    score: 4
  }, {
    player: 'Sally',
    score: 5
  }],
  update: function update(player, score) {
    if (player && score) {
      this.table.push({
        player: player,
        score: score
      });
    }

    this.table.sort(function (a, b) {
      return b.score - a.score;
    });
    this.table.length = this.maxLength;
  },
  show: function show() {
    this.update();

    for (var index in this.table) {
      var name = document.getElementById('high-score-name-' + index);
      var score = document.getElementById('high-score-score-' + index);
      if (!name || !score) break;
      name.textContent = this.table[index].player;
      score.textContent = this.table[index].score;
    }
  }
};
exports.default = _default;
},{}],"../js/gameOver.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gameOver = gameOver;

var _highscore = _interopRequireDefault(require("./highscore"));

var _action = require("./action");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function gameOver(game) {
  _highscore.default.update(game.playerName, game.score);

  document.getElementById('gameOver__score').textContent = game.score;
  (0, _action.action)('game-over');
}
},{"./highscore":"../js/highscore.js","./action":"../js/action.js"}],"../js/startLevel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startLevel;

var _Level = _interopRequireDefault(require("./Level"));

var _data = require("./data");

var _keybordControl = require("./keybordControl");

var _gameOver = require("./gameOver");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function startLevel() {
  var game = this;
  game.level = new _Level.default(this.levels[this.levelNumber], this);
  game.state = _data.GAMESTATE.RUN;
  var level = game.level;
  var lastRender;
  window.requestAnimationFrame(gameLoop);

  function gameLoop(timestamp) {
    var progress = timestamp - lastRender;
    if (game.state === _data.GAMESTATE.ABORT) return; //console.log('.');

    if (_keybordControl.isKeyPressed.pause) game.stop();

    if (game.state === _data.GAMESTATE.RUN) {
      level.update(progress);
      level.collisions();

      if (level.isWon()) {
        game.nextLevel();
      }

      if (level.isLost()) {
        game.loseLife();
      }
    }

    level.draw();
    game.drawPanel();
    game.drawInfo();
    lastRender = timestamp;
    window.requestAnimationFrame(gameLoop);
  }
}
},{"./Level":"../js/Level.js","./data":"../js/data.js","./keybordControl":"../js/keybordControl.js","./gameOver":"../js/gameOver.js"}],"../js/options.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.options = void 0;

var _sounds = _interopRequireDefault(require("./sounds"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
  countdownDelay: 3,
  isMuted: false
};
/* export function options() {
  document.getElementById('options__mute-button').addEventListener(
    'click',
    () => {
      SOUND.mouseClick.play();
      toggleMute();
    },
    false
  );

  function toggleMute() {
    isMuted = !isMuted;
    const button = document.getElementById('options__mute-button');
    isMuted
      ? button.classList.add('sound-off')
      : button.classList.remove('sound-off');
    for (let sound in SOUND) {
      SOUND[sound].muted = isMuted;
    }
  }
} */

exports.options = options;
},{"./sounds":"../js/sounds.js"}],"../js/pause.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pause = pause;
exports.resume = resume;

var _action = require("./action");

var _options = require("./options");

var game;
var countdownTimeoutId;

function pause(gameObject) {
  window.clearInterval(countdownTimeoutId);
  game = gameObject;
  (0, _action.action)('pause');
}

function resume() {
  game.seconds = _options.options.countdownDelay;
  if (game.seconds <= 0) game.resume();else {
    countdownTimeoutId = setInterval(function () {
      game.seconds--;

      if (game.seconds <= 0) {
        //if (isAnyBallSticked()) {
        game.hint = 'Press SPACEBAR to launch ball'; //}

        window.clearInterval(countdownTimeoutId);
        game.resume();
      }
    }, 1000);
  }
}
},{"./action":"../js/action.js","./options":"../js/options.js"}],"../js/Game.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _drawPanel = _interopRequireDefault(require("./drawPanel"));

var _drawInfo = _interopRequireDefault(require("./drawInfo"));

var _sounds = _interopRequireDefault(require("./sounds"));

var _startLevel = _interopRequireDefault(require("./startLevel"));

var _data = require("./data");

var _gameOver = require("./gameOver");

var _pause = require("./pause");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Game = /*#__PURE__*/function () {
  function Game(levelArray, playerName) {
    _classCallCheck(this, Game);

    this.lives = 0;
    this.levelNumber = 0;
    this.score = 0;
    this.seconds = 0;
    this.hint = '';
    this.level = null;
    this.playerName = playerName;
    this.levels = levelArray;
    this.startLevel = _startLevel.default;
    this.drawPanel = _drawPanel.default;
    this.drawInfo = _drawInfo.default;
    this.state = _data.GAMESTATE.ABORT;
  }

  _createClass(Game, [{
    key: "loadLevel",
    value: function loadLevel() {}
  }, {
    key: "stop",
    value: function stop() {
      this.state = _data.GAMESTATE.PAUSE;
      (0, _pause.pause)(this);
    }
  }, {
    key: "resume",
    value: function resume() {
      this.state = _data.GAMESTATE.RUN;
    }
  }, {
    key: "theEnd",
    value: function theEnd() {} // game won, passed all levels

  }, {
    key: "nextLevel",
    value: function nextLevel() {
      var _this = this;

      this.state = _data.GAMESTATE.ABORT; // level passed info

      this.levelNumber++;

      _sounds.default.levelClear.play();

      window.setTimeout(function () {
        if (_this.levels.length > _this.levelNumber) {
          _this.loadLevel();

          _this.startLevel();
        } else {
          _this.theEnd();
        }
      }, 2000);
    }
  }, {
    key: "loseLife",
    value: function loseLife() {
      var level = this.level;
      this.lives--;

      if (this.lives >= 0) {
        level.ballArray = level.createBallArray(this.levels[this.levelNumber].balls, level.playfield);
        level.paddle = level.createPaddle(this.levels[this.levelNumber].paddle, level.playfield);
      } else {
        this.state = _data.GAMESTATE.ABORT;
        (0, _gameOver.gameOver)(this);
      }
    }
  }, {
    key: "updateScore",
    value: function updateScore(points) {
      if (Number.isInteger(points)) {
        this.score += points;
      }
    }
  }]);

  return Game;
}();

exports.default = Game;
},{"./drawPanel":"../js/drawPanel.js","./drawInfo":"../js/drawInfo.js","./sounds":"../js/sounds.js","./startLevel":"../js/startLevel.js","./data":"../js/data.js","./gameOver":"../js/gameOver.js","./pause":"../js/pause.js"}],"../js/levels.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  name: 'Black Hole',
  playfield: {
    height: 550,
    width: 800,
    rowHeight: 15,
    columnWidth: 50,
    top: 100,
    left: 100
  },
  paddle: {
    speedX: 10,
    height: 10,
    width: 200,
    top: 450,
    left: 200
  },
  balls: [{
    speedX: -2,
    speedY: -2.7,
    size: 10,
    top: 640,
    left: 300,
    maxSpeed: 20
  }, {
    speedX: 2,
    speedY: -3,
    size: 30,
    top: 620,
    left: 330,
    maxSpeed: 20
  }, {
    speedX: 3,
    speedY: -4,
    size: 30,
    top: 620,
    left: 270,
    maxSpeed: 20
  }, {
    speedX: 4,
    speedY: -5,
    size: 20,
    top: 630,
    left: 200,
    maxSpeed: 20
  }, {
    speedX: 2,
    speedY: -5,
    size: 5,
    top: 645,
    left: 400,
    maxSpeed: 20
  }],
  // prettier-ignore
  blocks: [[14, 14, 1], [14, 15, 1]]
}, {
  name: '404 / 0',
  playfield: {
    height: 700,
    width: 1000,
    rowHeight: 15,
    columnWidth: 50,
    top: 0,
    left: 0
  },
  paddle: {
    speedX: 30,
    height: 10,
    width: 200,
    top: 650,
    left: 100
  },
  balls: [{
    speedX: 2,
    speedY: -5,
    size: 30,
    top: 620,
    left: 300,
    maxSpeed: 20
  }],
  // prettier-ignore
  blocks: [[0, 4, 4], [0, 8, 4], [0, 9, 4], [0, 10, 4], [0, 12, 4], [1, 4, 4], [1, 8, 4], [1, 9, 4], [1, 10, 4], [1, 12, 4], [2, 4, 4], [2, 8, 4], [2, 9, 4], [2, 10, 4], [2, 12, 4], [3, 4, 4], [3, 6, 4], [3, 8, 4], [3, 10, 4], [3, 12, 4], [3, 14, 4], [4, 4, 4], [4, 6, 4], [4, 8, 4], [4, 10, 4], [4, 12, 4], [4, 14, 4], [5, 4, 4], [5, 6, 4], [5, 8, 4], [5, 10, 4], [5, 12, 4], [5, 14, 4], [6, 4, 4], [6, 5, 4], [6, 6, 4], [6, 8, 4], [6, 10, 4], [6, 12, 4], [6, 13, 4], [6, 14, 4], [7, 4, 4], [7, 5, 4], [7, 6, 4], [7, 8, 4], [7, 10, 4], [7, 12, 4], [7, 13, 4], [7, 14, 4], [8, 4, 4], [8, 5, 4], [8, 6, 4], [8, 8, 3], [8, 10, 2], [8, 12, 4], [8, 13, 4], [8, 14, 4], [9, 6, 4], [9, 8, 4], [9, 10, 4], [9, 14, 4], [10, 6, 4], [10, 8, 4], [10, 10, 4], [10, 14, 4], [11, 6, 4], [11, 8, 4], [11, 10, 4], [11, 14, 4], [12, 6, 4], [12, 8, 4], [12, 9, 4], [12, 10, 1], [12, 14, 4], [13, 6, 4], [13, 8, 4], [13, 9, 4], [13, 10, 4], [13, 14, 4], [14, 6, 1], [14, 8, 1], [14, 9, 1], [14, 10, 1], [14, 14, 1]]
}, {
  name: '404 / 1',
  playfield: {
    height: 700,
    width: 1000,
    rowHeight: 30,
    columnWidth: 30,
    top: 0,
    left: 0
  },
  paddle: {
    speedX: 10,
    height: 10,
    width: 600,
    top: 650,
    left: 200
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
    maxSpeed: 20
  }
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
  blocks: [[0, 4, 4], [0, 8, 1], [0, 9, 1], [0, 10, 1], [0, 12, 1], [1, 4, 1], [1, 8, 1], [1, 9, 1], [1, 10, 1], [1, 12, 1], [2, 4, 1], [2, 8, 1], [2, 9, 1], [2, 10, 1], [2, 12, 1], [3, 4, 1], [3, 6, 1], [3, 8, 1], [3, 10, 1], [3, 12, 1], [3, 14, 1], [4, 4, 1], [4, 6, 1], [4, 8, 1], [4, 10, 1], [4, 12, 1], [4, 14, 1], [5, 4, 1], [5, 6, 1], [5, 8, 1], [5, 10, 1], [5, 12, 1], [5, 14, 1], [6, 4, 1], [6, 5, 1], [6, 6, 1], [6, 8, 1], [6, 10, 1], [6, 12, 1], [6, 13, 1], [6, 14, 1], [7, 4, 1], [7, 5, 1], [7, 6, 1], [7, 8, 1], [7, 10, 1], [7, 12, 1], [7, 13, 1], [7, 14, 1], [8, 4, 1], [8, 5, 1], [8, 6, 1], [8, 8, 3], [8, 10, 2], [8, 12, 1], [8, 13, 1], [8, 14, 1], [9, 6, 1], [9, 8, 1], [9, 10, 1], [9, 14, 1], [10, 6, 1], [10, 8, 1], [10, 10, 1], [10, 14, 1], [11, 6, 1], [11, 8, 1], [11, 10, 1], [11, 14, 1], [12, 6, 1], [12, 8, 1], [12, 9, 1], [12, 10, 1], [12, 14, 1], [13, 6, 1], [13, 8, 1], [13, 9, 1], [13, 10, 1], [13, 14, 1], [14, 6, 1], [14, 8, 1], [14, 9, 1], [14, 10, 0], [14, 14, 4]]
}, {
  name: 'Tiny Squares',
  playfield: {
    height: 700,
    width: 1000,
    rowHeight: 15,
    columnWidth: 15,
    top: 0,
    left: 0
  },
  paddle: {
    speedX: 10,
    height: 10,
    width: 600,
    top: 650,
    left: 200
  },
  balls: [{
    speedX: 11,
    speedY: -7,
    size: 15,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 13,
    speedY: -3,
    size: 50,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 4,
    speedY: -3,
    size: 50,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 4,
    speedY: -3,
    size: 50,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 2.5,
    speedY: 7,
    size: 50,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 2,
    speedY: 6,
    size: 50,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 2,
    speedY: -5,
    size: 50,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 2,
    speedY: 3,
    size: 50,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 2,
    speedY: 8,
    size: 50,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 2,
    speedY: 4,
    size: 5,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 2,
    speedY: 3,
    size: 5,
    top: 100,
    left: 600,
    maxSpeed: 20
  }],
  // prettier-ignore
  blocks: [[0, 0, 1], [0, 5, 1], [0, 10, 1], [0, 15, 1], [0, 20, 1], [0, 25, 1], [2, 0, 1], [2, 5, 1], [2, 10, 1], [2, 15, 1], [2, 20, 1], [2, 25, 1], [4, 0, 1], [4, 5, 1], [4, 10, 1], [4, 15, 1], [4, 20, 1], [4, 25, 1], [6, 0, 1], [6, 5, 1], [6, 10, 1], [6, 15, 1], [6, 20, 1], [6, 25, 1], [8, 0, 1], [8, 5, 1], [8, 10, 1], [8, 15, 1], [8, 20, 1], [8, 25, 1], [10, 0, 1], [10, 5, 1], [10, 10, 1], [10, 15, 1], [10, 20, 1], [10, 25, 1], [12, 0, 1], [12, 5, 1], [12, 10, 1], [12, 15, 1], [12, 20, 1], [12, 25, 1], [14, 0, 1], [14, 5, 1], [14, 10, 1], [14, 15, 1], [14, 20, 1], [14, 25, 1], [16, 0, 1], [16, 5, 1], [16, 10, 1], [16, 15, 1], [16, 20, 1], [16, 25, 1], [18, 0, 1], [18, 5, 1], [18, 10, 1], [18, 15, 1], [18, 20, 1], [18, 25, 1], [20, 0, 1], [20, 5, 1], [20, 10, 1], [20, 15, 1], [20, 20, 1], [20, 25, 1], [22, 0, 1], [22, 5, 1], [22, 10, 1], [22, 15, 1], [22, 20, 1], [22, 25, 1], [24, 0, 1], [24, 5, 1], [24, 10, 1], [24, 15, 1], [24, 20, 1], [24, 25, 1], [26, 0, 1], [26, 5, 1], [26, 10, 1], [26, 15, 1], [26, 20, 1], [26, 25, 1], [28, 0, 1], [28, 5, 1], [28, 10, 1], [28, 15, 1], [28, 20, 1], [28, 25, 1]]
}, {
  name: '404 / 2',
  playfield: {
    height: 700,
    width: 1000,
    rowHeight: 50,
    columnWidth: 5,
    top: 0,
    left: 0
  },
  paddle: {
    speedX: 10,
    height: 10,
    width: 600,
    top: 650,
    left: 200
  },
  balls: [{
    speedX: 1,
    speedY: -3,
    size: 5,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 3,
    speedY: -3,
    size: 5,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 4,
    speedY: -3,
    size: 5,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 1.5,
    speedY: -3,
    size: 5,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 2.5,
    speedY: -3,
    size: 5,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 2,
    speedY: -2,
    size: 5,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 2,
    speedY: -1,
    size: 5,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 2,
    speedY: 3,
    size: 5,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 2,
    speedY: 0,
    size: 5,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 2,
    speedY: 1,
    size: 5,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 2,
    speedY: 2,
    size: 5,
    top: 100,
    left: 600,
    maxSpeed: 20
  }],
  // prettier-ignore
  blocks: [[0, 0, 1], [0, 15, 1], [0, 30, 1], [0, 45, 1], [0, 60, 1], [0, 75, 1], [2, 100, 1], [2, 125, 1], [2, 150, 1], [2, 175, 1], [4, 0, 1], [4, 5, 1], [4, 10, 1], [4, 15, 1], [4, 20, 1], [4, 25, 1], [6, 0, 1], [6, 5, 1], [6, 10, 1], [6, 15, 1], [6, 20, 1], [6, 25, 1], [8, 0, 1], [8, 5, 1], [8, 10, 1], [8, 15, 1], [8, 20, 1], [8, 25, 1]]
}, {
  name: 'test',
  playfield: {
    height: 700,
    width: 1000,
    rowHeight: 15,
    columnWidth: 50,
    top: 0,
    left: 0
  },
  paddle: {
    speedX: 10,
    height: 10,
    width: 600,
    top: 650,
    left: 200
  },
  balls: [{
    speedX: -2,
    speedY: 2.7,
    size: 10,
    top: 500,
    left: 400,
    maxSpeed: 20
  }, {
    speedX: 2,
    speedY: -3,
    size: 30,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 3,
    speedY: -4,
    size: 30,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 4,
    speedY: 5,
    size: 30,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 2,
    speedY: 5,
    size: 30,
    top: 100,
    left: 600,
    maxSpeed: 20
  }],
  // prettier-ignore
  blocks: [[14, 14, 1]]
}, {
  name: 'test',
  playfield: {
    height: 700,
    width: 1000,
    rowHeight: 15,
    columnWidth: 50,
    top: 0,
    left: 0
  },
  paddle: {
    speedX: 10,
    height: 10,
    width: 600,
    top: 650,
    left: 200
  },
  balls: [{
    speedX: -2,
    speedY: 2.7,
    size: 10,
    top: 500,
    left: 400,
    maxSpeed: 20
  }, {
    speedX: 2,
    speedY: -3,
    size: 30,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 3,
    speedY: -4,
    size: 30,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 4,
    speedY: 5,
    size: 30,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 2,
    speedY: 5,
    size: 30,
    top: 100,
    left: 600,
    maxSpeed: 20
  }],
  // prettier-ignore
  blocks: [[14, 14, 1]]
}, {
  name: 'test',
  playfield: {
    height: 700,
    width: 1000,
    rowHeight: 15,
    columnWidth: 50,
    top: 0,
    left: 0
  },
  paddle: {
    speedX: 10,
    height: 10,
    width: 600,
    top: 650,
    left: 200
  },
  balls: [{
    speedX: -2,
    speedY: 2.7,
    size: 10,
    top: 500,
    left: 400,
    maxSpeed: 20
  }, {
    speedX: 2,
    speedY: -3,
    size: 30,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 3,
    speedY: -4,
    size: 30,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 4,
    speedY: 5,
    size: 30,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 2,
    speedY: 5,
    size: 30,
    top: 100,
    left: 600,
    maxSpeed: 20
  }],
  // prettier-ignore
  blocks: [[14, 14, 1]]
}, {
  name: 'test',
  playfield: {
    height: 700,
    width: 1000,
    rowHeight: 15,
    columnWidth: 50,
    top: 0,
    left: 0
  },
  paddle: {
    speedX: 10,
    height: 10,
    width: 600,
    top: 650,
    left: 200
  },
  balls: [{
    speedX: -2,
    speedY: 2.7,
    size: 10,
    top: 500,
    left: 400,
    maxSpeed: 20
  }, {
    speedX: 2,
    speedY: -3,
    size: 30,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 3,
    speedY: -4,
    size: 30,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 4,
    speedY: 5,
    size: 30,
    top: 100,
    left: 600,
    maxSpeed: 20
  }, {
    speedX: 2,
    speedY: 5,
    size: 30,
    top: 100,
    left: 600,
    maxSpeed: 20
  }],
  // prettier-ignore
  blocks: [[14, 14, 1]]
}];
exports.default = _default;
},{}],"../js/startNewGame.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startNewGame;

var _keybordControl = require("./keybordControl");

var _Game = _interopRequireDefault(require("./Game"));

var _levels = _interopRequireDefault(require("./levels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function startNewGame() {
  (0, _keybordControl.keybordControl)();
  var playerName = getPlayerName();
  var game = new _Game.default(_levels.default, playerName);
  game.loadLevel();
  game.startLevel();

  function getPlayerName() {
    var playerName = document.getElementById('playerName_Field').value;

    if (!playerName) {
      playerName = 'Player';
    }

    return playerName;
  }
}
},{"./keybordControl":"../js/keybordControl.js","./Game":"../js/Game.js","./levels":"../js/levels.js"}],"../js/action.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.action = action;

var _sounds = _interopRequireDefault(require("./sounds"));

var _startNewGame = _interopRequireDefault(require("./startNewGame"));

var _highscore = _interopRequireDefault(require("./highscore"));

var _pause = require("./pause");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function action(view) {
  switch (view) {
    case 'new-game':
      {
        _sounds.default.mouseClick.play();

        openCard('playerName');
        document.getElementById('playerName_Field').focus();
      }
      break;

    case 'start-game':
      {
        _sounds.default.mouseClick.play();

        disableContinueButton(false);
        hideElement('options');
        openCard('playground');
        displayElement('info-panel');
        (0, _startNewGame.default)();
      }
      break;

    case 'continue-game':
      {
        _sounds.default.mouseClick.play();

        hideElement('options');
        openCard('playground');
        displayElement('info-panel');
        (0, _pause.resume)();
      }
      break;

    case 'highscore':
      {
        _sounds.default.mouseClick.play();

        _highscore.default.show();

        openCard('high-score');
      }
      break;

    case 'credits':
      {
        _sounds.default.mouseClick.play();

        openCard('credits');
      }
      break;

    case 'main-menu':
      {
        _sounds.default.mouseClick.play();

        openCard('menu');
      }
      break;

    case 'game-over':
      {
        disableContinueButton(true);
        openCard('gameOver');
        hideElement('info-panel');
        displayElement('options');
      }
      break;

    case 'pause':
      {
        openCard('menu');
        hideElement('info-panel');
        displayElement('options');
      }
      break;

    default:
      break;
  }
}

function disableContinueButton(isDisabled) {
  var continueButton = document.getElementById('continue-button');
  continueButton.disabled = isDisabled;

  if (!isDisabled) {
    continueButton.classList.remove('disabled');
  } else {
    continueButton.classList.add('disabled');
  }
}

function hideElement(id) {
  document.getElementById(id).classList.add('hide');
}

function displayElement(id) {
  document.getElementById(id).classList.remove('hide');
}

function openCard(id) {
  closeCards();
  displayElement(id);
}

function closeCards() {
  document.querySelectorAll('#game div.game-card').forEach(function (element) {
    return element.classList.add('hide');
  });
}
},{"./sounds":"../js/sounds.js","./startNewGame":"../js/startNewGame.js","./highscore":"../js/highscore.js","./pause":"../js/pause.js"}],"../js/navigation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigation = navigation;

var _action = require("./action");

function navigation() {
  document.getElementById('start-button').addEventListener('click', function () {
    return (0, _action.action)('new-game');
  });
  document.getElementById('playerName_Button').addEventListener('click', function () {
    return (0, _action.action)('start-game');
  });
  document.getElementById('continue-button').addEventListener('click', function () {
    return (0, _action.action)('continue-game');
  });
  document.getElementById('high-score-button').addEventListener('click', function () {
    return (0, _action.action)('highscore');
  });
  document.getElementById('credits-button').addEventListener('click', function () {
    return (0, _action.action)('credits');
  });
  document.querySelectorAll('.main-menu-button').forEach(function (button) {
    return button.addEventListener('click', function () {
      return (0, _action.action)('main-menu');
    });
  });
}
},{"./action":"../js/action.js"}],"../js/index.js":[function(require,module,exports) {
"use strict";

require("../css/reset.css");

require("../css/style.css");

var _navigation = require("./navigation");

function init() {
  (0, _navigation.navigation)();
}

window.addEventListener('DOMContentLoaded', init);
},{"../css/reset.css":"../css/reset.css","../css/style.css":"../css/style.css","./navigation":"../js/navigation.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57183" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../js/index.js"], null)
//# sourceMappingURL=/js.fcffc47e.js.map