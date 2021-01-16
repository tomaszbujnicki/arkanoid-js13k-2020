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
        './..\\img\\sound-on.svg': [['sound-on.50987f47.svg', 'DYxi'], 'DYxi'],
        './..\\img\\sound-off.svg': [
          ['sound-off.b1260333.svg', 'yanI'],
          'yanI',
        ],
        './..\\img\\language.svg': [['language.5c63fd2c.svg', 'ToCN'], 'ToCN'],
        './..\\img\\theme.svg': [['theme.d53d3ccf.svg', 'Nzpx'], 'Nzpx'],
        './..\\img\\fullscreen.svg': [
          ['fullscreen.97038300.svg', 'jChv'],
          'jChv',
        ],
        './..\\img\\fullscreen-exit.svg': [
          ['fullscreen-exit.f765bf7d.svg', 'ykdK'],
          'ykdK',
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
          var l = e.height / 8;
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
    yA22: [
      function (require, module, exports) {
        'use strict';
        function e(e, r) {
          return Math.floor(Math.random() * (r - e + 1)) + e;
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.random = e);
      },
      {},
    ],
    betS: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = i);
        var e = document.querySelector('#canvas'),
          t = e.getContext('2d');
        function i() {
          function e(e) {
            var i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 'white',
              r = arguments.length > 2 ? arguments[2] : void 0;
            t.save(),
              (t.fillStyle = i),
              (t.strokeStyle = 'silver'),
              (t.lineWidth = 2),
              t.beginPath(),
              r
                ? (r = 'circle') &&
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
          l(),
            t.clearRect(0, 0, 1e3, 700),
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
        var r = 0;
        function l() {
          if (!((r += 1) < 60)) {
            r = 0;
            var t = document
              .getElementById('playground')
              .getBoundingClientRect();
            t.width / t.height > 1e3 / 700
              ? ((e.style.height = t.height + 'px'),
                (e.style.width = t.height * (1e3 / 700) + 'px'))
              : ((e.style.width = t.width + 'px'),
                (e.style.height = t.width / (1e3 / 700) + 'px'));
            e.getBoundingClientRect();
          }
        }
      },
      {},
    ],
    FEuJ: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = l);
        var t = document.querySelector('#canvas'),
          e = t.getContext('2d');
        function l() {
          e.save();
          var t = this.playfield.width / 2 + this.playfield.left,
            l = this.playfield.height / 2 + this.playfield.top,
            i = this.paddle.top,
            n = this.seconds,
            o = this.hint;
          n > 0
            ? ((e.font = 'bold 200pt Verdana'),
              (e.textAlign = 'center'),
              (e.fillStyle = 'white'),
              e.fillText(n, t, l + 80),
              (e.strokeStyle = 'white'),
              (e.lineWidth = 6),
              e.strokeText(n, t, l + 80),
              (e.strokeStyle = 'blue'),
              (e.lineWidth = 3),
              e.strokeText(n, t, l + 80))
            : o &&
              ((e.strokeStyle = 'blue'),
              (e.font = '14pt Verdana'),
              (e.fillStyle = r()),
              (e.textAlign = 'center'),
              e.fillText(o, t, i - 40)),
            e.restore();
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
    e8xm: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = f);
        var t = o(require('./sounds')),
          e = require('./functions');
        function o(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function r(t, e) {
          var o;
          if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
            if (
              Array.isArray(t) ||
              (o = n(t)) ||
              (e && t && 'number' == typeof t.length)
            ) {
              o && (t = o);
              var r = 0,
                i = function () {};
              return {
                s: i,
                n: function () {
                  return r >= t.length
                    ? { done: !0 }
                    : { done: !1, value: t[r++] };
                },
                e: function (t) {
                  throw t;
                },
                f: i,
              };
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }
          var f,
            l = !0,
            a = !1;
          return {
            s: function () {
              o = t[Symbol.iterator]();
            },
            n: function () {
              var t = o.next();
              return (l = t.done), t;
            },
            e: function (t) {
              (a = !0), (f = t);
            },
            f: function () {
              try {
                l || null == o.return || o.return();
              } finally {
                if (a) throw f;
              }
            },
          };
        }
        function n(t, e) {
          if (t) {
            if ('string' == typeof t) return i(t, e);
            var o = Object.prototype.toString.call(t).slice(8, -1);
            return (
              'Object' === o && t.constructor && (o = t.constructor.name),
              'Map' === o || 'Set' === o
                ? Array.from(t)
                : 'Arguments' === o ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                ? i(t, e)
                : void 0
            );
          }
        }
        function i(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var o = 0, r = new Array(e); o < e; o++) r[o] = t[o];
          return r;
        }
        function f(o) {
          var n = o / 16;
          n || (n = 1);
          var i = this,
            f = i.playfield,
            l = i.paddle,
            a = i.blockArray;
          i.ballArray.forEach(function (o) {
            !(function (e) {
              e.left > f.left + f.width - e.size &&
                ((e.left = f.left + f.width - e.size), (e.speedX *= -1));
              e.left < f.left && ((e.left = f.left), (e.speedX *= -1));
              e.top < f.top && ((e.top = f.top), (e.speedY *= -1));
              e.top > f.height + f.top - e.size &&
                (i.deleteBall(e), t.default.ballLost.play());
            })(o),
              (function (t) {
                if (
                  t.speedY > 0 &&
                  t.top >= l.top - t.size &&
                  t.top <= l.top + l.height &&
                  t.left >= l.left - t.size &&
                  t.left <= l.left + l.width
                ) {
                  var e =
                    (1.8 * (t.left + t.size / 2 - (l.left + l.width / 2))) /
                    l.width;
                  e > 0.95 && (e = 0.95), e < -0.95 && (e = -0.95);
                  var o = Math.sqrt(t.speedX * t.speedX + t.speedY * t.speedY);
                  (t.speedX = o * e),
                    (t.speedY = -1 * Math.sqrt(o * o - t.speedX * t.speedX));
                }
              })(o),
              (function (o) {
                var f,
                  l = [],
                  u = {},
                  p = r(a);
                try {
                  for (p.s(); !(f = p.n()).done; ) {
                    var d = f.value,
                      s = y(d);
                    s && ((u[s] = !0), l.push(d));
                  }
                } catch (b) {
                  p.e(b);
                } finally {
                  p.f();
                }
                if (0 === l.length) return;
                for (var c = 0, h = l; c < h.length; c++) {
                  var v = h[c];
                  m(v);
                }
                (u.right || u.left) && (o.speedX *= -1);
                (u.top || u.bottom) && (o.speedY *= -1);
                function m(o) {
                  o.damage(),
                    t.default['hit_' + (0, e.random)(1, 3)].play(),
                    o.power <= 0
                      ? (i.deleteBlock(o), i.game.updateScore(25))
                      : i.game.updateScore(5);
                }
                function y(t) {
                  var e =
                    o.top <= t.top + t.height &&
                    o.top + o.size >= t.top &&
                    o.left + o.size >= t.left &&
                    o.left <= t.left + t.width;
                  return (
                    !!e &&
                    (function (t) {
                      var e = {};
                      if (o.top - o.speedY * n > t.top + t.height) {
                        var r = a.find(function (e) {
                          return e.column === t.column && e.row === t.row + 1;
                        });
                        void 0 === r && (e.bottom = !0);
                      }
                      if (o.top + o.size - o.speedY * n < t.top) {
                        var i = a.find(function (e) {
                          return e.column === t.column && e.row === t.row - 1;
                        });
                        void 0 === i && (e.top = !0);
                      }
                      if (o.left + o.size - o.speedX * n < t.left) {
                        var f = a.find(function (e) {
                          return e.row === t.row && e.column === t.column - 1;
                        });
                        void 0 === f && (e.left = !0);
                      }
                      if (o.left - o.speedX * n > t.left + t.width) {
                        var l = a.find(function (e) {
                          return e.row === t.row && e.column === t.column + 1;
                        });
                        void 0 === l && (e.right = !0);
                      }
                      if (Object.keys(e).length > 1) {
                        var u, p;
                        e.right &&
                          (u = o.left - o.speedX * n - (t.left + t.width)),
                          e.left &&
                            (u = t.left - (o.left + o.size - o.speedX * n)),
                          e.top &&
                            (p = t.top - (o.top + o.size - o.speedY * n)),
                          e.bottom &&
                            (p = o.top - o.speedY * n - (t.top + t.height));
                        var d = !1;
                        Math.abs(u / o.speedX) < Math.abs(p / o.speedY) &&
                          (d = !0),
                          d
                            ? ((e.top = !1), (e.bottom = !1))
                            : ((e.left = !1), (e.right = !1));
                      }
                      return !0 === e.top
                        ? 'top'
                        : !0 === e.bottom
                        ? 'bottom'
                        : !0 === e.left
                        ? 'left'
                        : !0 === e.right && 'right';
                    })(t)
                  );
                }
              })(o);
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
              (this.id = h()),
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
              this.maxSpeed >= 20 && (this.maxSpeed = 20);
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
                value: function () {
                  Math.sqrt(
                    this.speedX * this.speedX + this.speedY * this.speedY
                  ) < this.maxSpeed &&
                    ((this.speedY *= 1.0001), (this.speedX *= 1.0001));
                },
              },
            ]),
            t
          );
        })();
        exports.default = i;
        var n = 0;
        function h() {
          return n++;
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
          t = require('./functions'),
          r = u(require('./draw')),
          n = u(require('./drawInfo')),
          a = u(require('./collisions')),
          i = u(require('./Ball')),
          l = u(require('./Block')),
          o = u(require('./Paddle')),
          s = u(require('./Playfield'));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function f(e, t) {
          var r;
          if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
            if (
              Array.isArray(e) ||
              (r = d(e)) ||
              (t && e && 'number' == typeof e.length)
            ) {
              r && (e = r);
              var n = 0,
                a = function () {};
              return {
                s: a,
                n: function () {
                  return n >= e.length
                    ? { done: !0 }
                    : { done: !1, value: e[n++] };
                },
                e: function (e) {
                  throw e;
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
            o = !1;
          return {
            s: function () {
              r = e[Symbol.iterator]();
            },
            n: function () {
              var e = r.next();
              return (l = e.done), e;
            },
            e: function (e) {
              (o = !0), (i = e);
            },
            f: function () {
              try {
                l || null == r.return || r.return();
              } finally {
                if (o) throw i;
              }
            },
          };
        }
        function d(e, t) {
          if (e) {
            if ('string' == typeof e) return c(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return (
              'Object' === r && e.constructor && (r = e.constructor.name),
              'Map' === r || 'Set' === r
                ? Array.from(e)
                : 'Arguments' === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? c(e, t)
                : void 0
            );
          }
        }
        function c(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function h(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }
        function y(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        function p(e, t, r) {
          return t && y(e.prototype, t), r && y(e, r), e;
        }
        var v = (function () {
          function u(e, t) {
            h(this, u),
              (this.playfield = new s.default(e.playfield)),
              (this.paddle = this.createPaddle(e.paddle, this.playfield)),
              (this.ballArray = this.createBallArray(e.balls, this.playfield)),
              (this.blockArray = this.createBlockArray(
                e.blocks,
                this.playfield
              )),
              (this.name = e.name),
              (this.game = t),
              (this.hint = 'Press SPACEBAR to launch ball'),
              (this.seconds = 0),
              (this.collisions = a.default),
              (this.draw = r.default),
              (this.drawInfo = n.default);
          }
          return (
            p(u, [
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
                  }),
                    (this.hint = '');
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
                    (r /= 2),
                    e.isKeyPressed.space && this.unstickBalls(),
                    this.movePaddle(r),
                    this.ballArray.forEach(function (e) {
                      e.move(r), e.speedUp();
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
                    var n = this.paddle.left - r;
                    this.ballArray.forEach(function (e) {
                      e.isSticked && (e.left += n);
                    });
                  }
                },
              },
              {
                key: 'isAnyBallSticked',
                value: function () {
                  var e,
                    t = f(this.ballArray);
                  try {
                    for (t.s(); !(e = t.n()).done; ) {
                      if (e.value.isSticked) return !0;
                    }
                  } catch (r) {
                    t.e(r);
                  } finally {
                    t.f();
                  }
                  return !1;
                },
              },
              {
                key: 'randomlyCreateNewBall',
                value: function () {
                  if ((0, t.random)(1, 100) <= 10) {
                    var e = {
                        speedX: 1.5,
                        speedY: -3,
                        size: (0, t.random)(5, 50),
                        top: (0, t.random)(0, this.playfield.height - 150),
                        left: (0, t.random)(0, this.playfield.width - 50),
                        maxSpeed: 20,
                      },
                      r = new i.default(e, this.playfield);
                    (r.isSticked = !1), this.ballArray.push(r);
                  }
                },
              },
              {
                key: 'createPaddle',
                value: function (e, t) {
                  var r = new o.default(e, t);
                  return !!this.canCreateObject(r, t) && r;
                },
              },
              {
                key: 'createBallArray',
                value: function (e, t) {
                  var r = this,
                    n = [];
                  return (
                    e.forEach(function (e) {
                      var a = new i.default(e, t);
                      r.canCreateObject(a, t) && n.push(a);
                    }),
                    n
                  );
                },
              },
              {
                key: 'createBlockArray',
                value: function (e, t) {
                  var r = this,
                    n = [];
                  return (
                    e.forEach(function (e) {
                      var a = new l.default(e, t);
                      r.canCreateObject(a, t) && n.push(a);
                    }),
                    n
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
            u
          );
        })();
        exports.default = v;
      },
      {
        './keybordControl': 'DzMv',
        './functions': 'yA22',
        './draw': 'betS',
        './drawInfo': 'FEuJ',
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
        var e = { RUN: 0, PAUSE: 1, ABORT: 2, WAIT: 3 };
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
        var e = s(require('./Level')),
          r = require('./data'),
          t = require('./keybordControl'),
          i = require('./gameOver');
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function a() {
          var i = this;
          (i.level = new e.default(this.levels[this.levelNumber], this)),
            (i.state = r.GAMESTATE.RUN);
          var s,
            a = i.level;
          window.requestAnimationFrame(function e(o) {
            var n = o - s;
            if (i.state === r.GAMESTATE.ABORT) return;
            t.isKeyPressed.pause && i.stop();
            if (i.state === r.GAMESTATE.RUN) {
              for (var l = 0; l < 2; l++) a.update(n), a.collisions(n);
              a.isWon() && i.nextLevel(), a.isLost() && i.loseLife();
            }
            a.draw();
            a.drawInfo();
            i.drawPanel();
            s = o;
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
    A48Y: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var e = {
            fullscreenEnabled: 0,
            fullscreenElement: 1,
            requestFullscreen: 2,
            exitFullscreen: 3,
            fullscreenchange: 4,
            fullscreenerror: 5,
            fullscreen: 6,
          },
          n = [
            'webkitFullscreenEnabled',
            'webkitFullscreenElement',
            'webkitRequestFullscreen',
            'webkitExitFullscreen',
            'webkitfullscreenchange',
            'webkitfullscreenerror',
            '-webkit-full-screen',
          ],
          l = [
            'mozFullScreenEnabled',
            'mozFullScreenElement',
            'mozRequestFullScreen',
            'mozCancelFullScreen',
            'mozfullscreenchange',
            'mozfullscreenerror',
            '-moz-full-screen',
          ],
          r = [
            'msFullscreenEnabled',
            'msFullscreenElement',
            'msRequestFullscreen',
            'msExitFullscreen',
            'MSFullscreenChange',
            'MSFullscreenError',
            '-ms-fullscreen',
          ],
          u =
            'undefined' != typeof window && void 0 !== window.document
              ? window.document
              : {},
          s =
            ('fullscreenEnabled' in u && Object.keys(e)) ||
            (n[0] in u && n) ||
            (l[0] in u && l) ||
            (r[0] in u && r) ||
            [];
        exports.default = {
          requestFullscreen: function (n) {
            return n[s[e.requestFullscreen]]();
          },
          requestFullscreenFunction: function (n) {
            return n[s[e.requestFullscreen]];
          },
          get exitFullscreen() {
            return u[s[e.exitFullscreen]].bind(u);
          },
          get fullscreenPseudoClass() {
            return ':' + s[e.fullscreen];
          },
          addEventListener: function (n, l, r) {
            return u.addEventListener(s[e[n]], l, r);
          },
          removeEventListener: function (n, l, r) {
            return u.removeEventListener(s[e[n]], l, r);
          },
          get fullscreenEnabled() {
            return Boolean(u[s[e.fullscreenEnabled]]);
          },
          set fullscreenEnabled(e) {},
          get fullscreenElement() {
            return u[s[e.fullscreenElement]];
          },
          set fullscreenElement(e) {},
          get onfullscreenchange() {
            return u[('on' + s[e.fullscreenchange]).toLowerCase()];
          },
          set onfullscreenchange(n) {
            return (u[('on' + s[e.fullscreenchange]).toLowerCase()] = n);
          },
          get onfullscreenerror() {
            return u[('on' + s[e.fullscreenerror]).toLowerCase()];
          },
          set onfullscreenerror(n) {
            return (u[('on' + s[e.fullscreenerror]).toLowerCase()] = n);
          },
        };
      },
      {},
    ],
    GjAz: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.options = void 0);
        var e = u(require('./sounds')),
          t = u(require('fscreen'));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var s = {
          countdownDelay: 3,
          isMuted: !1,
          toggleMute: function () {
            this.isMuted = !this.isMuted;
            var t = document.getElementById('options__mute-button');
            for (var u in (this.isMuted
              ? t.classList.add('sound-off')
              : t.classList.remove('sound-off'),
            e.default))
              e.default[u].muted = this.isMuted;
          },
          toggleFullscreen: function () {
            var e = document.getElementById('game');
            null === t.default.fullscreenElement
              ? t.default.requestFullscreen(e)
              : t.default.exitFullscreen() && t.default.exitFullscreen();
          },
        };
        exports.options = s;
      },
      { './sounds': 'Tcmm', fscreen: 'A48Y' },
    ],
    Me0g: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.pause = o),
          (exports.resume = a);
        var e,
          t,
          s = require('./action'),
          n = require('./data'),
          r = require('./options');
        function o(r) {
          ((e = r).state !== n.GAMESTATE.RUN && e.state !== n.GAMESTATE.WAIT) ||
            ((e.state = n.GAMESTATE.PAUSE),
            window.clearInterval(t),
            (0, s.action)('pause'));
        }
        function a() {
          if (e) {
            e.state = n.GAMESTATE.WAIT;
            var s = e.level;
            return (
              (s.seconds = r.options.countdownDelay),
              s.isAnyBallSticked() &&
                (s.hint = 'Press SPACEBAR to launch ball'),
              s.seconds <= 0
                ? e.resume()
                : (t = setInterval(function () {
                    s.seconds--,
                      s.seconds <= 0 && (window.clearInterval(t), e.resume());
                  }, 1e3)),
              !0
            );
          }
          return !1;
        }
      },
      { './action': 'QTTf', './data': 'w7PE', './options': 'GjAz' },
    ],
    xcIM: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0);
        var e = s(require('./drawPanel')),
          t = s(require('./sounds')),
          l = s(require('./startLevel')),
          a = require('./data'),
          r = require('./gameOver'),
          i = require('./pause');
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }
        function n(e, t) {
          for (var l = 0; l < t.length; l++) {
            var a = t[l];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              'value' in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        function o(e, t, l) {
          return t && n(e.prototype, t), l && n(e, l), e;
        }
        var v = (function () {
          function s(t, r) {
            u(this, s),
              (this.lives = 1),
              (this.levelNumber = 0),
              (this.score = 0),
              (this.level = null),
              (this.playerName = r),
              (this.levels = t),
              (this.startLevel = l.default),
              (this.drawPanel = e.default),
              (this.state = a.GAMESTATE.ABORT);
          }
          return (
            o(s, [
              { key: 'loadLevel', value: function () {} },
              {
                key: 'stop',
                value: function () {
                  (0, i.pause)(this);
                },
              },
              {
                key: 'resume',
                value: function () {
                  this.state = a.GAMESTATE.RUN;
                },
              },
              { key: 'theEnd', value: function () {} },
              {
                key: 'nextLevel',
                value: function () {
                  var e = this;
                  (this.state = a.GAMESTATE.ABORT),
                    this.levelNumber++,
                    t.default.levelClear.play(),
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
                        )),
                        (e.hint = 'Press SPACEBAR to launch ball'))
                      : ((this.state = a.GAMESTATE.ABORT),
                        (0, r.gameOver)(this));
                },
              },
              {
                key: 'updateScore',
                value: function (e) {
                  Number.isInteger(e) && (this.score += e);
                },
              },
            ]),
            s
          );
        })();
        exports.default = v;
      },
      {
        './drawPanel': 'dErh',
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
            paddle: { speedX: 10, height: 10, width: 200, top: 650, left: 200 },
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
            name: 'Milk',
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
          (exports.action = s);
        var e = u(require('./sounds')),
          t = u(require('./startNewGame')),
          a = u(require('./highscore')),
          n = require('./pause'),
          o = require('./options');
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function s(u) {
          switch (u) {
            case 'new-game':
              e.default.mouseClick.play(),
                d('playerName'),
                document.getElementById('playerName_Field').focus();
              break;
            case 'start-game':
              e.default.mouseClick.play(),
                c(!1),
                l('options'),
                d('playground'),
                i('info-panel'),
                (0, t.default)();
              break;
            case 'continue-game':
              (0, n.resume)() &&
                (e.default.mouseClick.play(),
                l('options'),
                d('playground'),
                i('info-panel'));
              break;
            case 'highscore':
              e.default.mouseClick.play(),
                a.default.show(),
                d('high-score'),
                document.getElementById('main-menu-highscore').focus();
              break;
            case 'credits':
              e.default.mouseClick.play(),
                d('credits'),
                document.getElementById('main-menu-credits').focus();
              break;
            case 'main-menu':
              e.default.mouseClick.play(),
                d('menu'),
                document.getElementById('start-button').focus();
              break;
            case 'game-over':
              c(!0),
                d('gameOver'),
                document.getElementById('main-menu-gameOver').focus(),
                l('info-panel'),
                i('options');
              break;
            case 'pause':
              d('menu'),
                l('info-panel'),
                i('options'),
                document.getElementById('continue-button').focus();
              break;
            case 'mute':
              e.default.mouseClick.play(), o.options.toggleMute();
              break;
            case 'fullscreen':
              e.default.mouseClick.play(), o.options.toggleFullscreen();
          }
        }
        function c(e) {
          var t = document.getElementById('continue-button');
          (t.disabled = e),
            e ? t.classList.add('disabled') : t.classList.remove('disabled');
        }
        function l(e) {
          document.getElementById(e).classList.add('hide');
        }
        function i(e) {
          document.getElementById(e).classList.remove('hide');
        }
        function d(e) {
          r(), i(e);
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
        './options': 'GjAz',
      },
    ],
    bekQ: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.navigation = i);
        var t = require('./action');
        function e(t) {
          return c(t) || r(t) || o(t) || n();
        }
        function n() {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        function o(t, e) {
          if (t) {
            if ('string' == typeof t) return u(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return (
              'Object' === n && t.constructor && (n = t.constructor.name),
              'Map' === n || 'Set' === n
                ? Array.from(t)
                : 'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? u(t, e)
                : void 0
            );
          }
        }
        function r(t) {
          if ('undefined' != typeof Symbol && Symbol.iterator in Object(t))
            return Array.from(t);
        }
        function c(t) {
          if (Array.isArray(t)) return u(t);
        }
        function u(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
          return o;
        }
        function i() {
          document.getElementById('start-button').focus(),
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
              }),
            document
              .getElementById('options__mute-button')
              .addEventListener('click', function () {
                return (0, t.action)('mute');
              }),
            document
              .getElementById('options__fullscreen-button')
              .addEventListener('click', function () {
                return (0, t.action)('fullscreen');
              }),
            document.querySelector('#menu button').focus();
          document.querySelectorAll('#options button');
          document.addEventListener('keydown', function (n) {
            if ('INPUT' !== document.activeElement.tagName) {
              if (
                (70 === n.keyCode && (0, t.action)('fullscreen'),
                77 === n.keyCode && (0, t.action)('mute'),
                39 === n.keyCode &&
                  0 === document.getElementById('playground').offsetWidth)
              ) {
                var o = document.querySelector('.options__button');
                o.focus();
              }
              if (
                37 === n.keyCode &&
                0 === document.getElementById('playground').offsetWidth
              ) {
                var r = document.querySelector('.game-card:not(.hide) button');
                r.focus();
              }
            }
            13 === n.keyCode &&
              document.activeElement ===
                document.getElementById('playerName_Field') &&
              (0, t.action)('start-game');
            if (40 === n.keyCode) {
              var c = document.activeElement,
                u = c.classList.contains('options__button')
                  ? e(document.querySelectorAll('.options__button'))
                  : e(
                      document.querySelectorAll(
                        '.game-card:not(.hide) button:not([disabled="true"])'
                      )
                    );
              if (u.length > 1 && c !== u[u.length - 1]) {
                var i = u.findIndex(function (t) {
                  return t === c;
                });
                u[i + 1].focus();
              }
            }
            if (38 === n.keyCode) {
              var d = document.activeElement,
                a = d.classList.contains('options__button')
                  ? e(document.querySelectorAll('.options__button'))
                  : e(
                      document.querySelectorAll(
                        '.game-card:not(.hide) button:not([disabled="true"])'
                      )
                    );
              if (a.length > 1 && d !== a[0]) {
                var l = a.findIndex(function (t) {
                  return t === d;
                });
                a[l - 1].focus();
              }
            }
          });
        }
      },
      { './action': 'QTTf' },
    ],
    j3Tq: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.setScreen = t);
        var e = n(require('fscreen'));
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function t() {
          e.default.addEventListener('fullscreenchange', l, !1);
        }
        function l() {
          null !== e.default.fullscreenElement
            ? document
                .getElementById('options__fullscreen-button')
                .classList.add('fullscreen-on')
            : document
                .getElementById('options__fullscreen-button')
                .classList.remove('fullscreen-on');
        }
      },
      { fscreen: 'A48Y' },
    ],
    Y5Mt: [
      function (require, module, exports) {
        'use strict';
        require('../css/reset.css'), require('../css/style.css');
        var e = require('./navigation'),
          s = require('./setScreen');
        function r() {
          (0, s.setScreen)(), (0, e.navigation)();
        }
        window.addEventListener('DOMContentLoaded', r);
      },
      {
        '../css/reset.css': 'jN7l',
        '../css/style.css': 'KDhL',
        './navigation': 'bekQ',
        './setScreen': 'j3Tq',
      },
    ],
  },
  {},
  ['Y5Mt'],
  null
);
//# sourceMappingURL=js.dc8954c1.js.map
