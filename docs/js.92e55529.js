parcelRequire = (function (e, r, t, n) {
  var i,
    o = 'function' == typeof parcelRequire && parcelRequire,
    u = 'function' == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = 'function' == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && 'string' == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = 'MODULE_NOT_FOUND'), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = l)
      : 'function' == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    jN7l: [function (require, module, exports) {}, {}],
    KDhL: [
      function (require, module, exports) {},
      {
        './..\\img\\sound-on.svg': [['sound-on.af340991.svg', 'DYxi'], 'DYxi'],
        './..\\img\\sound-off.svg': [
          ['sound-off.ca92100a.svg', 'yanI'],
          'yanI',
        ],
      },
    ],
    iZNM: [
      function (require, module, exports) {
        module.exports = 'hit-1.1d4e4b67.wav';
      },
      {},
    ],
    cVxt: [
      function (require, module, exports) {
        module.exports = 'hit-2.3b06c89a.wav';
      },
      {},
    ],
    OllI: [
      function (require, module, exports) {
        module.exports = 'hit-3.6a54fd81.wav';
      },
      {},
    ],
    YJzC: [
      function (require, module, exports) {
        module.exports = 'ball-lost.2b4e17d4.wav';
      },
      {},
    ],
    vpSk: [
      function (require, module, exports) {
        module.exports = 'coin.7879a85f.wav';
      },
      {},
    ],
    jdxW: [
      function (require, module, exports) {
        module.exports = 'fire.1d4f2237.wav';
      },
      {},
    ],
    NTsW: [
      function (require, module, exports) {
        module.exports = 'game-over.1d4eba8b.wav';
      },
      {},
    ],
    rrpF: [
      function (require, module, exports) {
        module.exports = 'end-game.25dae403.wav';
      },
      {},
    ],
    KahT: [
      function (require, module, exports) {
        module.exports = 'level-clear.c85678c2.wav';
      },
      {},
    ],
    il2M: [
      function (require, module, exports) {
        module.exports = 'live-lost.7af040a8.wav';
      },
      {},
    ],
    ZFsl: [
      function (require, module, exports) {
        module.exports = 'mouse-click.2681cd42.wav';
      },
      {},
    ],
    KALG: [
      function (require, module, exports) {
        module.exports = 'power-down.e6cae2d8.wav';
      },
      {},
    ],
    SSxu: [
      function (require, module, exports) {
        module.exports = 'power-up-1.8d714bff.wav';
      },
      {},
    ],
    tmkP: [
      function (require, module, exports) {
        module.exports = 'power-up-2.fce8d8b3.wav';
      },
      {},
    ],
    Z6m9: [
      function (require, module, exports) {
        module.exports = 'power-up-3.1bae0e65.wav';
      },
      {},
    ],
    Tcmm: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0);
        var e = A(require('../audio/hit-1.wav')),
          u = A(require('../audio/hit-2.wav')),
          i = A(require('../audio/hit-3.wav')),
          a = A(require('../audio/ball-lost.wav')),
          o = A(require('../audio/coin.wav')),
          d = A(require('../audio/fire.wav')),
          r = A(require('../audio/game-over.wav')),
          w = A(require('../audio/end-game.wav')),
          l = A(require('../audio/level-clear.wav')),
          t = A(require('../audio/live-lost.wav')),
          n = A(require('../audio/mouse-click.wav')),
          v = A(require('../audio/power-down.wav')),
          f = A(require('../audio/power-up-1.wav')),
          p = A(require('../audio/power-up-2.wav')),
          q = A(require('../audio/power-up-3.wav'));
        function A(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var s = {
          hit_1: new Audio(e.default),
          hit_2: new Audio(u.default),
          hit_3: new Audio(i.default),
          ballLost: new Audio(a.default),
          coin: new Audio(o.default),
          fire: new Audio(d.default),
          gameOver: new Audio(r.default),
          endGame: new Audio(w.default),
          levelClear: new Audio(l.default),
          liveLost: new Audio(t.default),
          mouseClick: new Audio(n.default),
          powerDown: new Audio(v.default),
          powerUp_1: new Audio(f.default),
          powerUp_2: new Audio(p.default),
          powerUp_3: new Audio(q.default),
        };
        exports.default = s;
      },
      {
        '../audio/hit-1.wav': 'iZNM',
        '../audio/hit-2.wav': 'cVxt',
        '../audio/hit-3.wav': 'OllI',
        '../audio/ball-lost.wav': 'YJzC',
        '../audio/coin.wav': 'vpSk',
        '../audio/fire.wav': 'jdxW',
        '../audio/game-over.wav': 'NTsW',
        '../audio/end-game.wav': 'rrpF',
        '../audio/level-clear.wav': 'KahT',
        '../audio/live-lost.wav': 'il2M',
        '../audio/mouse-click.wav': 'ZFsl',
        '../audio/power-down.wav': 'KALG',
        '../audio/power-up-1.wav': 'SSxu',
        '../audio/power-up-2.wav': 'tmkP',
        '../audio/power-up-3.wav': 'Z6m9',
      },
    ],
    DzMv: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.keybordControl = o),
          (exports.isKeyPressed = void 0);
        var e = { left: !1, right: !1, space: !1, pause: !1 };
        function o() {
          document.addEventListener('keydown', function (o) {
            39 === o.keyCode && (e.right = !0);
            37 === o.keyCode && (e.left = !0);
            32 === o.keyCode && (e.space = !0);
            80 === o.keyCode && (e.pause = !0);
          }),
            document.addEventListener('keyup', function (o) {
              39 === o.keyCode && (e.right = !1);
              37 === o.keyCode && (e.left = !1);
              32 === o.keyCode && (e.space = !1);
              80 === o.keyCode && (e.pause = !1);
            });
        }
        exports.isKeyPressed = e;
      },
      {},
    ],
    dErh: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = l);
        var e = document.querySelector('#info-panel'),
          t = e.getContext('2d');
        function l() {
          t.save(), t.clearRect(0, 0, 256, 700);
          var l = e.height / 10;
          (t.font = 'bold 20pt Courier'),
            (t.fillStyle = 'white'),
            (t.textAlign = 'center'),
            t.fillText(this.level.name, e.width / 2, 1 * l),
            (t.font = 'bold 16pt Courier'),
            (t.textAlign = 'left'),
            t.fillText(
              this.levelNumber + 1 + ' / ' + (this.levels.length + 1),
              120,
              2 * l
            ),
            t.fillText(this.lives, 120, 3 * l),
            t.fillText(this.score, 120, 4 * l),
            (t.fillStyle = 'blue'),
            t.fillText('Level: ', 20, 2 * l),
            t.fillText('Lives: ', 20, 3 * l),
            t.fillText('Score: ', 20, 4 * l),
            t.restore();
        }
      },
      {},
    ],
    FEuJ: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = l);
        var e = document.querySelector('#playgroud-info'),
          t = e.getContext('2d');
        function l() {
          t.save(), t.clearRect(0, 0, 1260, 700);
          var e = this.level.playfield.width / 2 + this.level.playfield.left,
            l = this.level.playfield.height / 2 + this.level.playfield.top,
            i = this.level.paddle.top,
            o = this.seconds,
            n = this.hint;
          o > 0
            ? ((t.font = 'bold 200pt Verdana'),
              (t.textAlign = 'center'),
              (t.fillStyle = 'white'),
              t.fillText(o, e, l + 80),
              (t.strokeStyle = 'white'),
              (t.lineWidth = 6),
              t.strokeText(o, e, l + 80),
              (t.strokeStyle = 'blue'),
              (t.lineWidth = 3),
              t.strokeText(o, e, l + 80))
            : n &&
              ((t.strokeStyle = 'blue'),
              (t.lineWidth = 1),
              (t.font = 'bold 18pt Verdana'),
              (t.fillStyle = r()),
              (t.textAlign = 'center'),
              t.fillText(n, e, i - 40),
              t.strokeText(n, e, i - 40)),
            t.restore();
        }
        var i = { r: 255, g: 255, b: 255, up: !1 };
        function r() {
          return (
            i.up
              ? ((i.g += 5), (i.r += 5), i.r >= 250 && (i.up = !1))
              : ((i.g -= 5), (i.r -= 5), i.r <= 5 && (i.up = !0)),
            'rgb('.concat(i.r, ', ').concat(i.g, ', ').concat(i.b, ')')
          );
        }
      },
      {},
    ],
    betS: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = r);
        var e = document.querySelector('#canvas'),
          t = e.getContext('2d');
        function r() {
          function e(e) {
            var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 'white',
              i = arguments.length > 2 ? arguments[2] : void 0;
            t.save(),
              (t.fillStyle = r),
              (t.strokeStyle = 'silver'),
              (t.lineWidth = 2),
              t.beginPath(),
              i
                ? (i = 'circle') &&
                  t.arc(
                    e.left + e.size / 2,
                    e.top + e.size / 2,
                    e.size / 2,
                    0,
                    2 * Math.PI
                  )
                : t.rect(e.left, e.top, e.width, e.height),
              t.clip(),
              t.fill(),
              t.stroke(),
              t.restore();
          }
          t.clearRect(0, 0, 1260, 700),
            e(this.playfield, 'transparent'),
            e(this.paddle),
            this.ballArray.forEach(function (t) {
              e(t, 'white', 'circle');
            }),
            this.blockArray.forEach(function (t) {
              e(
                t,
                (function (e) {
                  var t = 'white';
                  switch (e) {
                    case 1:
                      t = 'white';
                      break;
                    case 2:
                      t = 'green';
                      break;
                    case 3:
                      t = 'red';
                      break;
                    case 4:
                      t = 'blue';
                      break;
                    default:
                      t = 'white';
                  }
                  return t;
                })(t.power)
              );
            });
        }
      },
      {},
    ],
    yA22: [
      function (require, module, exports) {
        'use strict';
        function r(r, n) {
          var e;
          if ('undefined' == typeof Symbol || null == r[Symbol.iterator]) {
            if (
              Array.isArray(r) ||
              (e = t(r)) ||
              (n && r && 'number' == typeof r.length)
            ) {
              e && (r = e);
              var o = 0,
                a = function () {};
              return {
                s: a,
                n: function () {
                  return o >= r.length
                    ? { done: !0 }
                    : { done: !1, value: r[o++] };
                },
                e: function (r) {
                  throw r;
                },
                f: a,
              };
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }
          var i,
            l = !0,
            u = !1;
          return {
            s: function () {
              e = r[Symbol.iterator]();
            },
            n: function () {
              var r = e.next();
              return (l = r.done), r;
            },
            e: function (r) {
              (u = !0), (i = r);
            },
            f: function () {
              try {
                l || null == e.return || e.return();
              } finally {
                if (u) throw i;
              }
            },
          };
        }
        function t(r, t) {
          if (r) {
            if ('string' == typeof r) return n(r, t);
            var e = Object.prototype.toString.call(r).slice(8, -1);
            return (
              'Object' === e && r.constructor && (e = r.constructor.name),
              'Map' === e || 'Set' === e
                ? Array.from(r)
                : 'Arguments' === e ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                ? n(r, t)
                : void 0
            );
          }
        }
        function n(r, t) {
          (null == t || t > r.length) && (t = r.length);
          for (var n = 0, e = new Array(t); n < t; n++) e[n] = r[n];
          return e;
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.random = o);
        var e = function () {
          var t,
            n = r(ballArray);
          try {
            for (n.s(); !(t = n.n()).done; ) {
              if (t.value.isSticked) return !0;
            }
          } catch (e) {
            n.e(e);
          } finally {
            n.f();
          }
          return !1;
        };
        function o(r, t) {
          return Math.floor(Math.random() * (t - r + 1)) + r;
        }
        function a() {
          if (o(1, 100) <= 10) {
            var r = new Ball(
              0,
              0,
              15,
              o(5, 50),
              o(0, playfield.height - 150),
              o(0, playfield.width - 50)
            );
            ballArray.push(r), createElement(r);
          }
        }
      },
      {},
    ],
    e8xm: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = l);
        var e = r(require('./sounds')),
          t = require('./functions');
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function n(e, t) {
          var r;
          if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
            if (
              Array.isArray(e) ||
              (r = o(e)) ||
              (t && e && 'number' == typeof e.length)
            ) {
              r && (e = r);
              var n = 0,
                i = function () {};
              return {
                s: i,
                n: function () {
                  return n >= e.length
                    ? { done: !0 }
                    : { done: !1, value: e[n++] };
                },
                e: function (e) {
                  throw e;
                },
                f: i,
              };
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }
          var l,
            f = !0,
            a = !1;
          return {
            s: function () {
              r = e[Symbol.iterator]();
            },
            n: function () {
              var e = r.next();
              return (f = e.done), e;
            },
            e: function (e) {
              (a = !0), (l = e);
            },
            f: function () {
              try {
                f || null == r.return || r.return();
              } finally {
                if (a) throw l;
              }
            },
          };
        }
        function o(e, t) {
          if (e) {
            if ('string' == typeof e) return i(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return (
              'Object' === r && e.constructor && (r = e.constructor.name),
              'Map' === r || 'Set' === r
                ? Array.from(e)
                : 'Arguments' === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? i(e, t)
                : void 0
            );
          }
        }
        function i(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function l() {
          var r = this,
            o = r.playfield,
            i = r.paddle,
            l = r.blockArray;
          r.ballArray.forEach(function (f) {
            !(function (t) {
              t.left > o.left + o.width - t.size &&
                ((t.left = o.left + o.width - t.size), (t.speedX *= -1));
              t.left < o.left && ((t.left = o.left), (t.speedX *= -1));
              t.top < o.top && ((t.top = o.top), (t.speedY *= -1));
              t.top > o.height + o.top - t.size &&
                (r.deleteBall(t), e.default.ballLost.play());
            })(f),
              (function (e) {
                if (
                  e.speedY > 0 &&
                  e.top >= i.top - e.size &&
                  e.top <= i.top + i.height &&
                  e.left >= i.left - e.size &&
                  e.left <= i.left + i.width
                ) {
                  var t =
                    (1.8 * (e.left + e.size / 2 - (i.left + i.width / 2))) /
                    i.width;
                  t > 0.95 && (t = 0.95), t < -0.95 && (t = -0.95);
                  var r = Math.sqrt(e.speedX * e.speedX + e.speedY * e.speedY);
                  (e.speedX = r * t),
                    (e.speedY = -1 * Math.sqrt(r * r - e.speedX * e.speedX));
                }
              })(f),
              (function (o) {
                var i,
                  f = n(l);
                try {
                  for (f.s(); !(i = f.n()).done; ) {
                    var a = i.value;
                    u(a) &&
                      d(a) &&
                      (a.damage(),
                      e.default['hit_' + (0, t.random)(1, 3)].play(),
                      a.power <= 0
                        ? (r.deleteBlock(a), r.game.updateScore(25))
                        : r.game.updateScore(5));
                  }
                } catch (s) {
                  f.e(s);
                } finally {
                  f.f();
                }
                function u(e) {
                  return (
                    o.top <= e.top + e.height &&
                    o.top + o.size >= e.top &&
                    o.left + o.size >= e.left &&
                    o.left <= e.left + e.width
                  );
                }
                function d(e) {
                  var t = !1,
                    r = l.find(function (t) {
                      return t.row === e.row && t.column === e.column - 1;
                    }),
                    n = l.find(function (t) {
                      return t.row === e.row && t.column === e.column + 1;
                    }),
                    i = l.find(function (t) {
                      return t.column === e.column && t.row === e.row + 1;
                    }),
                    f = l.find(function (t) {
                      return t.column === e.column && t.row === e.row - 1;
                    });
                  return (
                    o.left + o.size - o.speedX < e.left && void 0 === r
                      ? ((o.speedX = -1 * Math.abs(o.speedX)), (t = !0))
                      : o.left - o.speedX > e.left + e.width &&
                        void 0 === n &&
                        ((o.speedX = Math.abs(o.speedX)), (t = !0)),
                    o.top - o.speedY > e.top + e.height && void 0 === i
                      ? ((o.speedY = Math.abs(o.speedY)), (t = !0))
                      : o.top + o.size - o.speedY < e.top &&
                        void 0 === f &&
                        ((o.speedY = -1 * Math.abs(o.speedY)), (t = !0)),
                    t
                  );
                }
              })(f);
          });
        }
      },
      { './sounds': 'Tcmm', './functions': 'yA22' },
    ],
    dPtQ: [
      function (require, module, exports) {
        'use strict';
        function e(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }
        function t(e, t) {
          for (var s = 0; s < t.length; s++) {
            var i = t[s];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        function s(e, s, i) {
          return s && t(e.prototype, s), i && t(e, i), e;
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0);
        var i = (function () {
          function t(s) {
            e(this, t),
              (this.id = p()),
              (this.type = 'ball'),
              (this.speedX = s.speedX),
              (this.speedY = s.speedY),
              (this.maxSpeed = s.maxSpeed),
              (this.size = s.size),
              (this.top = s.top),
              (this.left = s.left),
              (this.height = s.size),
              (this.width = s.size),
              (this.isSticked = !0),
              this.maxSpeed >= 25 && (this.maxSpeed = 25);
          }
          return (
            s(t, [
              {
                key: 'move',
                value: function (e) {
                  this.isSticked ||
                    ((this.left += this.speedX * e),
                    (this.top += this.speedY * e));
                },
              },
              {
                key: 'speedUp',
                value: function (e) {
                  Math.sqrt(
                    this.speedX * this.speedX + this.speedY * this.speedY
                  ) < this.maxSpeed &&
                    (this.speedY > 0
                      ? (this.speedY += 5e-4 * e)
                      : (this.speedY -= 5e-4 * e),
                    this.speedX > 0
                      ? (this.speedX += 5e-4 * e)
                      : (this.speedX -= 5e-4 * e));
                },
              },
            ]),
            t
          );
        })();
        exports.default = i;
        var h = 0;
        function p() {
          return h++;
        }
      },
      {},
    ],
    y3qv: [
      function (require, module, exports) {
        'use strict';
        function t(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        }
        function e(t, e) {
          for (var i = 0; i < e.length; i++) {
            var o = e[i];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function i(t, i, o) {
          return i && e(t.prototype, i), o && e(t, o), t;
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0);
        var o = (function () {
          function e(i, o) {
            t(this, e),
              (this.id = n()),
              (this.type = 'block'),
              (this.row = i[0]),
              (this.column = i[1]),
              (this.left = this.column * o.columnWidth),
              (this.top = this.row * o.rowHeight),
              (this.width = o.columnWidth),
              (this.height = o.rowHeight),
              (this.power = i[2]),
              this.power <= 0 && (this.power = 1),
              this.power > 9 && (this.power = 9);
          }
          return (
            i(e, [
              {
                key: 'damage',
                value: function () {
                  this.power--;
                },
              },
            ]),
            e
          );
        })();
        exports.default = o;
        var r = 0;
        function n() {
          return r++;
        }
      },
      {},
    ],
    TZSx: [
      function (require, module, exports) {
        'use strict';
        function t(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        }
        function e(t, e) {
          for (var i = 0; i < e.length; i++) {
            var s = e[i];
            (s.enumerable = s.enumerable || !1),
              (s.configurable = !0),
              'value' in s && (s.writable = !0),
              Object.defineProperty(t, s.key, s);
          }
        }
        function i(t, i, s) {
          return i && e(t.prototype, i), s && e(t, s), t;
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0);
        var s = (function () {
          function e(i, s) {
            t(this, e),
              (this.type = 'paddle'),
              (this.top = i.top),
              (this.left = i.left),
              (this.height = i.height),
              (this.width = i.width),
              (this.speedX = i.speedX),
              (this.leftRange = s.left),
              (this.rightRange = s.left + s.width),
              this.speedX >= 50 && (this.speedX = 50);
          }
          return (
            i(e, [
              {
                key: 'moveLeft',
                value: function (t) {
                  (this.left -= this.speedX * t),
                    this.left < this.leftRange && (this.left = this.leftRange);
                },
              },
              {
                key: 'moveRight',
                value: function (t) {
                  (this.left += this.speedX * t),
                    this.left + this.width > this.rightRange &&
                      (this.left = this.rightRange - this.width);
                },
              },
            ]),
            e
          );
        })();
        exports.default = s;
      },
      {},
    ],
    C7QX: [
      function (require, module, exports) {
        'use strict';
        function t(t, i) {
          if (!(t instanceof i))
            throw new TypeError('Cannot call a class as a function');
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0);
        var i = function i(e) {
          t(this, i),
            (this.id = 'playfield'),
            (this.height = e.height),
            (this.width = e.width),
            (this.rowHeight = e.rowHeight),
            (this.columnWidth = e.columnWidth),
            (this.top = e.top),
            (this.left = e.left);
        };
        exports.default = i;
      },
      {},
    ],
    OQmG: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0);
        var e = require('./keybordControl'),
          t = s(require('./draw')),
          r = s(require('./collisions')),
          a = s(require('./Ball')),
          l = s(require('./Block')),
          i = s(require('./Paddle')),
          n = s(require('./Playfield'));
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }
        function o(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              'value' in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        function d(e, t, r) {
          return t && o(e.prototype, t), r && o(e, r), e;
        }
        var f = (function () {
          function s(e, a) {
            u(this, s),
              (this.playfield = new n.default(e.playfield)),
              (this.paddle = this.createPaddle(e.paddle, this.playfield)),
              (this.ballArray = this.createBallArray(e.balls, this.playfield)),
              (this.blockArray = this.createBlockArray(
                e.blocks,
                this.playfield
              )),
              (this.name = e.name),
              (this.game = a),
              (this.collisions = r.default),
              (this.draw = t.default);
          }
          return (
            d(s, [
              {
                key: 'deleteBall',
                value: function (e) {
                  var t = this.ballArray.findIndex(function (t) {
                    return t === e;
                  });
                  this.ballArray.splice(t, 1);
                },
              },
              {
                key: 'deleteBlock',
                value: function (e) {
                  var t = this.blockArray.findIndex(function (t) {
                    return t === e;
                  });
                  this.blockArray.splice(t, 1);
                },
              },
              {
                key: 'unstickBalls',
                value: function () {
                  this.ballArray.forEach(function (e) {
                    return (e.isSticked = !1);
                  });
                },
              },
              {
                key: 'isWon',
                value: function () {
                  return 0 === this.blockArray.length;
                },
              },
              {
                key: 'isLost',
                value: function () {
                  return 0 === this.ballArray.length;
                },
              },
              {
                key: 'update',
                value: function (t) {
                  var r = t / 16;
                  r || (r = 1),
                    e.isKeyPressed.space && this.unstickBalls(),
                    this.movePaddle(r),
                    this.ballArray.forEach(function (e) {
                      e.move(r), e.speedUp(r);
                    });
                },
              },
              {
                key: 'movePaddle',
                value: function (t) {
                  if (
                    !(
                      (e.isKeyPressed.right && e.isKeyPressed.left) ||
                      (!e.isKeyPressed.right && !e.isKeyPressed.left)
                    )
                  ) {
                    var r = this.paddle.left;
                    e.isKeyPressed.left
                      ? ((this.paddle.leftRange = this.playfield.left),
                        this.paddle.moveLeft(t))
                      : ((this.paddle.rightRange =
                          this.playfield.left + this.playfield.width),
                        this.paddle.moveRight(t));
                    var a = this.paddle.left - r;
                    this.ballArray.forEach(function (e) {
                      e.isSticked && (e.left += a);
                    });
                  }
                },
              },
              {
                key: 'createPaddle',
                value: function (e, t) {
                  var r = new i.default(e, t);
                  return !!this.canCreateObject(r, t) && r;
                },
              },
              {
                key: 'createBallArray',
                value: function (e, t) {
                  var r = this,
                    l = [];
                  return (
                    e.forEach(function (e) {
                      var i = new a.default(e, t);
                      r.canCreateObject(i, t) && l.push(i);
                    }),
                    l
                  );
                },
              },
              {
                key: 'createBlockArray',
                value: function (e, t) {
                  var r = this,
                    a = [];
                  return (
                    e.forEach(function (e) {
                      var i = new l.default(e, t);
                      r.canCreateObject(i, t) && a.push(i);
                    }),
                    a
                  );
                },
              },
              {
                key: 'canCreateObject',
                value: function (e, t) {
                  return (
                    e.width > 0 &&
                    e.height > 0 &&
                    e.left >= t.left &&
                    e.left + e.width <= t.left + t.width &&
                    e.top >= t.top &&
                    e.top + e.height <= t.top + t.height
                  );
                },
              },
            ]),
            s
          );
        })();
        exports.default = f;
      },
      {
        './keybordControl': 'DzMv',
        './draw': 'betS',
        './collisions': 'e8xm',
        './Ball': 'dPtQ',
        './Block': 'y3qv',
        './Paddle': 'TZSx',
        './Playfield': 'C7QX',
      },
    ],
    w7PE: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.GAMESTATE = void 0);
        var e = { RUN: 0, PAUSE: 1, ABORT: 2 };
        exports.GAMESTATE = e;
      },
      {},
    ],
    JUx4: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0);
        var e = {
          maxLength: 5,
          table: [
            { player: 'Mike', score: 1 },
            { player: 'Derrek', score: 2 },
            { player: 'Emily', score: 3 },
            { player: 'Bart', score: 4 },
            { player: 'Sally', score: 5 },
          ],
          update: function (e, t) {
            e && t && this.table.push({ player: e, score: t }),
              this.table.sort(function (e, t) {
                return t.score - e.score;
              }),
              (this.table.length = this.maxLength);
          },
          show: function () {
            for (var e in (this.update(), this.table)) {
              var t = document.getElementById('high-score-name-' + e),
                r = document.getElementById('high-score-score-' + e);
              if (!t || !r) break;
              (t.textContent = this.table[e].player),
                (r.textContent = this.table[e].score);
            }
          },
        };
        exports.default = e;
      },
      {},
    ],
    v33L: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.gameOver = o);
        var e = r(require('./highscore')),
          t = require('./action');
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o(r) {
          e.default.update(r.playerName, r.score),
            (document.getElementById('gameOver__score').textContent = r.score),
            (0, t.action)('game-over');
        }
      },
      { './highscore': 'JUx4', './action': 'QTTf' },
    ],
    orbB: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = a);
        var e = i(require('./Level')),
          t = require('./data'),
          r = require('./keybordControl'),
          s = require('./gameOver');
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function a() {
          var s = this;
          (s.level = new e.default(this.levels[this.levelNumber], this)),
            (s.state = t.GAMESTATE.RUN);
          var i,
            a = s.level;
          window.requestAnimationFrame(function e(n) {
            var o = n - i;
            if (s.state === t.GAMESTATE.ABORT) return;
            r.isKeyPressed.pause && s.stop();
            s.state === t.GAMESTATE.RUN &&
              (a.update(o),
              a.collisions(),
              a.isWon() && s.nextLevel(),
              a.isLost() && s.loseLife());
            a.draw();
            s.drawPanel();
            s.drawInfo();
            i = n;
            window.requestAnimationFrame(e);
          });
        }
      },
      {
        './Level': 'OQmG',
        './data': 'w7PE',
        './keybordControl': 'DzMv',
        './gameOver': 'v33L',
      },
    ],
    GjAz: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.options = void 0);
        var e = o(require('./sounds'));
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var t = { countdownDelay: 3, isMuted: !1 };
        exports.options = t;
      },
      { './sounds': 'Tcmm' },
    ],
    Me0g: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.pause = r),
          (exports.resume = t);
        var e,
          n,
          s = require('./action'),
          o = require('./options');
        function r(o) {
          window.clearInterval(n), (e = o), (0, s.action)('pause');
        }
        function t() {
          return (
            !!e &&
            ((e.seconds = o.options.countdownDelay),
            e.seconds <= 0
              ? e.resume()
              : (n = setInterval(function () {
                  e.seconds--,
                    e.seconds <= 0 &&
                      ((e.hint = 'Press SPACEBAR to launch ball'),
                      window.clearInterval(n),
                      e.resume());
                }, 1e3)),
            !0)
          );
        }
      },
      { './action': 'QTTf', './options': 'GjAz' },
    ],
    xcIM: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0);
        var e = u(require('./drawPanel')),
          t = u(require('./drawInfo')),
          l = u(require('./sounds')),
          a = u(require('./startLevel')),
          r = require('./data'),
          i = require('./gameOver'),
          s = require('./pause');
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function n(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }
        function o(e, t) {
          for (var l = 0; l < t.length; l++) {
            var a = t[l];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              'value' in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        function v(e, t, l) {
          return t && o(e.prototype, t), l && o(e, l), e;
        }
        var h = (function () {
          function u(l, i) {
            n(this, u),
              (this.lives = 0),
              (this.levelNumber = 0),
              (this.score = 0),
              (this.seconds = 0),
              (this.hint = ''),
              (this.level = null),
              (this.playerName = i),
              (this.levels = l),
              (this.startLevel = a.default),
              (this.drawPanel = e.default),
              (this.drawInfo = t.default),
              (this.state = r.GAMESTATE.ABORT);
          }
          return (
            v(u, [
              { key: 'loadLevel', value: function () {} },
              {
                key: 'stop',
                value: function () {
                  (this.state = r.GAMESTATE.PAUSE), (0, s.pause)(this);
                },
              },
              {
                key: 'resume',
                value: function () {
                  this.state = r.GAMESTATE.RUN;
                },
              },
              { key: 'theEnd', value: function () {} },
              {
                key: 'nextLevel',
                value: function () {
                  var e = this;
                  (this.state = r.GAMESTATE.ABORT),
                    this.levelNumber++,
                    l.default.levelClear.play(),
                    window.setTimeout(function () {
                      e.levels.length > e.levelNumber
                        ? (e.loadLevel(), e.startLevel())
                        : e.theEnd();
                    }, 2e3);
                },
              },
              {
                key: 'loseLife',
                value: function () {
                  var e = this.level;
                  this.lives--,
                    this.lives >= 0
                      ? ((e.ballArray = e.createBallArray(
                          this.levels[this.levelNumber].balls,
                          e.playfield
                        )),
                        (e.paddle = e.createPaddle(
                          this.levels[this.levelNumber].paddle,
                          e.playfield
                        )))
                      : ((this.state = r.GAMESTATE.ABORT),
                        (0, i.gameOver)(this));
                },
              },
              {
                key: 'updateScore',
                value: function (e) {
                  Number.isInteger(e) && (this.score += e);
                },
              },
            ]),
            u
          );
        })();
        exports.default = h;
      },
      {
        './drawPanel': 'dErh',
        './drawInfo': 'FEuJ',
        './sounds': 'Tcmm',
        './startLevel': 'orbB',
        './data': 'w7PE',
        './gameOver': 'v33L',
        './pause': 'Me0g',
      },
    ],
    D7EH: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0);
        var e = [
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
            paddle: { speedX: 10, height: 10, width: 200, top: 450, left: 200 },
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
            blocks: [
              [14, 14, 1],
              [14, 15, 1],
            ],
          },
          {
            name: '404 / 0',
            playfield: {
              height: 700,
              width: 1e3,
              rowHeight: 15,
              columnWidth: 50,
              top: 0,
              left: 0,
            },
            paddle: { speedX: 30, height: 10, width: 200, top: 650, left: 100 },
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
            blocks: [
              [0, 4, 4],
              [0, 8, 4],
              [0, 9, 4],
              [0, 10, 4],
              [0, 12, 4],
              [1, 4, 4],
              [1, 8, 4],
              [1, 9, 4],
              [1, 10, 4],
              [1, 12, 4],
              [2, 4, 4],
              [2, 8, 4],
              [2, 9, 4],
              [2, 10, 4],
              [2, 12, 4],
              [3, 4, 4],
              [3, 6, 4],
              [3, 8, 4],
              [3, 10, 4],
              [3, 12, 4],
              [3, 14, 4],
              [4, 4, 4],
              [4, 6, 4],
              [4, 8, 4],
              [4, 10, 4],
              [4, 12, 4],
              [4, 14, 4],
              [5, 4, 4],
              [5, 6, 4],
              [5, 8, 4],
              [5, 10, 4],
              [5, 12, 4],
              [5, 14, 4],
              [6, 4, 4],
              [6, 5, 4],
              [6, 6, 4],
              [6, 8, 4],
              [6, 10, 4],
              [6, 12, 4],
              [6, 13, 4],
              [6, 14, 4],
              [7, 4, 4],
              [7, 5, 4],
              [7, 6, 4],
              [7, 8, 4],
              [7, 10, 4],
              [7, 12, 4],
              [7, 13, 4],
              [7, 14, 4],
              [8, 4, 4],
              [8, 5, 4],
              [8, 6, 4],
              [8, 8, 3],
              [8, 10, 2],
              [8, 12, 4],
              [8, 13, 4],
              [8, 14, 4],
              [9, 6, 4],
              [9, 8, 4],
              [9, 10, 4],
              [9, 14, 4],
              [10, 6, 4],
              [10, 8, 4],
              [10, 10, 4],
              [10, 14, 4],
              [11, 6, 4],
              [11, 8, 4],
              [11, 10, 4],
              [11, 14, 4],
              [12, 6, 4],
              [12, 8, 4],
              [12, 9, 4],
              [12, 10, 1],
              [12, 14, 4],
              [13, 6, 4],
              [13, 8, 4],
              [13, 9, 4],
              [13, 10, 4],
              [13, 14, 4],
              [14, 6, 1],
              [14, 8, 1],
              [14, 9, 1],
              [14, 10, 1],
              [14, 14, 1],
            ],
          },
          {
            name: '404 / 1',
            playfield: {
              height: 700,
              width: 1e3,
              rowHeight: 30,
              columnWidth: 30,
              top: 0,
              left: 0,
            },
            paddle: { speedX: 10, height: 10, width: 600, top: 650, left: 200 },
            balls: [
              {
                speedX: 4,
                speedY: -3,
                size: 30,
                top: 100,
                left: 600,
                maxSpeed: 20,
              },
            ],
            blocks: [
              [0, 4, 4],
              [0, 8, 1],
              [0, 9, 1],
              [0, 10, 1],
              [0, 12, 1],
              [1, 4, 1],
              [1, 8, 1],
              [1, 9, 1],
              [1, 10, 1],
              [1, 12, 1],
              [2, 4, 1],
              [2, 8, 1],
              [2, 9, 1],
              [2, 10, 1],
              [2, 12, 1],
              [3, 4, 1],
              [3, 6, 1],
              [3, 8, 1],
              [3, 10, 1],
              [3, 12, 1],
              [3, 14, 1],
              [4, 4, 1],
              [4, 6, 1],
              [4, 8, 1],
              [4, 10, 1],
              [4, 12, 1],
              [4, 14, 1],
              [5, 4, 1],
              [5, 6, 1],
              [5, 8, 1],
              [5, 10, 1],
              [5, 12, 1],
              [5, 14, 1],
              [6, 4, 1],
              [6, 5, 1],
              [6, 6, 1],
              [6, 8, 1],
              [6, 10, 1],
              [6, 12, 1],
              [6, 13, 1],
              [6, 14, 1],
              [7, 4, 1],
              [7, 5, 1],
              [7, 6, 1],
              [7, 8, 1],
              [7, 10, 1],
              [7, 12, 1],
              [7, 13, 1],
              [7, 14, 1],
              [8, 4, 1],
              [8, 5, 1],
              [8, 6, 1],
              [8, 8, 3],
              [8, 10, 2],
              [8, 12, 1],
              [8, 13, 1],
              [8, 14, 1],
              [9, 6, 1],
              [9, 8, 1],
              [9, 10, 1],
              [9, 14, 1],
              [10, 6, 1],
              [10, 8, 1],
              [10, 10, 1],
              [10, 14, 1],
              [11, 6, 1],
              [11, 8, 1],
              [11, 10, 1],
              [11, 14, 1],
              [12, 6, 1],
              [12, 8, 1],
              [12, 9, 1],
              [12, 10, 1],
              [12, 14, 1],
              [13, 6, 1],
              [13, 8, 1],
              [13, 9, 1],
              [13, 10, 1],
              [13, 14, 1],
              [14, 6, 1],
              [14, 8, 1],
              [14, 9, 1],
              [14, 10, 0],
              [14, 14, 4],
            ],
          },
          {
            name: 'Tiny Squares',
            playfield: {
              height: 700,
              width: 1e3,
              rowHeight: 15,
              columnWidth: 15,
              top: 0,
              left: 0,
            },
            paddle: { speedX: 10, height: 10, width: 600, top: 650, left: 200 },
            balls: [
              {
                speedX: 11,
                speedY: -7,
                size: 15,
                top: 100,
                left: 600,
                maxSpeed: 20,
              },
              {
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
              },
            ],
            blocks: [
              [0, 0, 1],
              [0, 5, 1],
              [0, 10, 1],
              [0, 15, 1],
              [0, 20, 1],
              [0, 25, 1],
              [2, 0, 1],
              [2, 5, 1],
              [2, 10, 1],
              [2, 15, 1],
              [2, 20, 1],
              [2, 25, 1],
              [4, 0, 1],
              [4, 5, 1],
              [4, 10, 1],
              [4, 15, 1],
              [4, 20, 1],
              [4, 25, 1],
              [6, 0, 1],
              [6, 5, 1],
              [6, 10, 1],
              [6, 15, 1],
              [6, 20, 1],
              [6, 25, 1],
              [8, 0, 1],
              [8, 5, 1],
              [8, 10, 1],
              [8, 15, 1],
              [8, 20, 1],
              [8, 25, 1],
              [10, 0, 1],
              [10, 5, 1],
              [10, 10, 1],
              [10, 15, 1],
              [10, 20, 1],
              [10, 25, 1],
              [12, 0, 1],
              [12, 5, 1],
              [12, 10, 1],
              [12, 15, 1],
              [12, 20, 1],
              [12, 25, 1],
              [14, 0, 1],
              [14, 5, 1],
              [14, 10, 1],
              [14, 15, 1],
              [14, 20, 1],
              [14, 25, 1],
              [16, 0, 1],
              [16, 5, 1],
              [16, 10, 1],
              [16, 15, 1],
              [16, 20, 1],
              [16, 25, 1],
              [18, 0, 1],
              [18, 5, 1],
              [18, 10, 1],
              [18, 15, 1],
              [18, 20, 1],
              [18, 25, 1],
              [20, 0, 1],
              [20, 5, 1],
              [20, 10, 1],
              [20, 15, 1],
              [20, 20, 1],
              [20, 25, 1],
              [22, 0, 1],
              [22, 5, 1],
              [22, 10, 1],
              [22, 15, 1],
              [22, 20, 1],
              [22, 25, 1],
              [24, 0, 1],
              [24, 5, 1],
              [24, 10, 1],
              [24, 15, 1],
              [24, 20, 1],
              [24, 25, 1],
              [26, 0, 1],
              [26, 5, 1],
              [26, 10, 1],
              [26, 15, 1],
              [26, 20, 1],
              [26, 25, 1],
              [28, 0, 1],
              [28, 5, 1],
              [28, 10, 1],
              [28, 15, 1],
              [28, 20, 1],
              [28, 25, 1],
            ],
          },
          {
            name: '404 / 2',
            playfield: {
              height: 700,
              width: 1e3,
              rowHeight: 50,
              columnWidth: 5,
              top: 0,
              left: 0,
            },
            paddle: { speedX: 10, height: 10, width: 600, top: 650, left: 200 },
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
            blocks: [
              [0, 0, 1],
              [0, 15, 1],
              [0, 30, 1],
              [0, 45, 1],
              [0, 60, 1],
              [0, 75, 1],
              [2, 100, 1],
              [2, 125, 1],
              [2, 150, 1],
              [2, 175, 1],
              [4, 0, 1],
              [4, 5, 1],
              [4, 10, 1],
              [4, 15, 1],
              [4, 20, 1],
              [4, 25, 1],
              [6, 0, 1],
              [6, 5, 1],
              [6, 10, 1],
              [6, 15, 1],
              [6, 20, 1],
              [6, 25, 1],
              [8, 0, 1],
              [8, 5, 1],
              [8, 10, 1],
              [8, 15, 1],
              [8, 20, 1],
              [8, 25, 1],
            ],
          },
          {
            name: 'test',
            playfield: {
              height: 700,
              width: 1e3,
              rowHeight: 15,
              columnWidth: 50,
              top: 0,
              left: 0,
            },
            paddle: { speedX: 10, height: 10, width: 600, top: 650, left: 200 },
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
            blocks: [[14, 14, 1]],
          },
          {
            name: 'test',
            playfield: {
              height: 700,
              width: 1e3,
              rowHeight: 15,
              columnWidth: 50,
              top: 0,
              left: 0,
            },
            paddle: { speedX: 10, height: 10, width: 600, top: 650, left: 200 },
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
            blocks: [[14, 14, 1]],
          },
          {
            name: 'test',
            playfield: {
              height: 700,
              width: 1e3,
              rowHeight: 15,
              columnWidth: 50,
              top: 0,
              left: 0,
            },
            paddle: { speedX: 10, height: 10, width: 600, top: 650, left: 200 },
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
            blocks: [[14, 14, 1]],
          },
          {
            name: 'test',
            playfield: {
              height: 700,
              width: 1e3,
              rowHeight: 15,
              columnWidth: 50,
              top: 0,
              left: 0,
            },
            paddle: { speedX: 10, height: 10, width: 600, top: 650, left: 200 },
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
            blocks: [[14, 14, 1]],
          },
        ];
        exports.default = e;
      },
      {},
    ],
    Ilci: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = u);
        var e = require('./keybordControl'),
          r = l(require('./Game')),
          t = l(require('./levels'));
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u() {
          (0, e.keybordControl)();
          var l = (function () {
              var e = document.getElementById('playerName_Field').value;
              e || (e = 'Player');
              return e;
            })(),
            u = new r.default(t.default, l);
          u.loadLevel(), u.startLevel();
        }
      },
      { './keybordControl': 'DzMv', './Game': 'xcIM', './levels': 'D7EH' },
    ],
    QTTf: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.action = o);
        var e = n(require('./sounds')),
          a = n(require('./startNewGame')),
          t = n(require('./highscore')),
          s = require('./pause');
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o(n) {
          switch (n) {
            case 'new-game':
              e.default.mouseClick.play(),
                c('playerName'),
                document.getElementById('playerName_Field').focus();
              break;
            case 'start-game':
              e.default.mouseClick.play(),
                u(!1),
                i('options'),
                c('playground'),
                l('info-panel'),
                (0, a.default)();
              break;
            case 'continue-game':
              (0, s.resume)() &&
                (e.default.mouseClick.play(),
                i('options'),
                c('playground'),
                l('info-panel'));
              break;
            case 'highscore':
              e.default.mouseClick.play(), t.default.show(), c('high-score');
              break;
            case 'credits':
              e.default.mouseClick.play(), c('credits');
              break;
            case 'main-menu':
              e.default.mouseClick.play(), c('menu');
              break;
            case 'game-over':
              u(!0), c('gameOver'), i('info-panel'), l('options');
              break;
            case 'pause':
              c('menu'), i('info-panel'), l('options');
          }
        }
        function u(e) {
          var a = document.getElementById('continue-button');
          (a.disabled = e),
            e ? a.classList.add('disabled') : a.classList.remove('disabled');
        }
        function i(e) {
          document.getElementById(e).classList.add('hide');
        }
        function l(e) {
          document.getElementById(e).classList.remove('hide');
        }
        function c(e) {
          r(), l(e);
        }
        function r() {
          document
            .querySelectorAll('#game div.game-card')
            .forEach(function (e) {
              return e.classList.add('hide');
            });
        }
      },
      {
        './sounds': 'Tcmm',
        './startNewGame': 'Ilci',
        './highscore': 'JUx4',
        './pause': 'Me0g',
      },
    ],
    bekQ: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.navigation = e);
        var t = require('./action');
        function e() {
          document
            .getElementById('start-button')
            .addEventListener('click', function () {
              return (0, t.action)('new-game');
            }),
            document
              .getElementById('playerName_Button')
              .addEventListener('click', function () {
                return (0, t.action)('start-game');
              }),
            document
              .getElementById('continue-button')
              .addEventListener('click', function () {
                return (0, t.action)('continue-game');
              }),
            document
              .getElementById('high-score-button')
              .addEventListener('click', function () {
                return (0, t.action)('highscore');
              }),
            document
              .getElementById('credits-button')
              .addEventListener('click', function () {
                return (0, t.action)('credits');
              }),
            document
              .querySelectorAll('.main-menu-button')
              .forEach(function (e) {
                return e.addEventListener('click', function () {
                  return (0, t.action)('main-menu');
                });
              });
        }
      },
      { './action': 'QTTf' },
    ],
    Y5Mt: [
      function (require, module, exports) {
        'use strict';
        require('../css/reset.css'), require('../css/style.css');
        var e = require('./navigation');
        function s() {
          (0, e.navigation)();
        }
        window.addEventListener('DOMContentLoaded', s);
      },
      {
        '../css/reset.css': 'jN7l',
        '../css/style.css': 'KDhL',
        './navigation': 'bekQ',
      },
    ],
  },
  {},
  ['Y5Mt'],
  null
);
//# sourceMappingURL=js.92e55529.js.map
