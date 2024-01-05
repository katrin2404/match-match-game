/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = exports.EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this._subscribers = {};
  }

  _createClass(EventEmitter, [{
    key: "subscribe",
    value: function subscribe(eventName, handler) {
      if (!this._subscribers[eventName]) {
        this._subscribers[eventName] = [];
      }
      this._subscribers[eventName].push(handler);
    }
  }, {
    key: "emit",
    value: function emit(eventName, details) {
      if (this._subscribers[eventName]) {
        this._subscribers[eventName].forEach(function (handler) {
          return handler(details);
        });
      }
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(eventName, handler) {
      if (this._subscribers[eventName]) {
        this._subscribers[eventName] = this._subscribers[eventName].filter(function (h) {
          return handler && handler !== h;
        });
      }
    }
  }]);

  return EventEmitter;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by K.Sachko on 30.10.2017.
 */

var easy = exports.easy = 'Easy';
var medium = exports.medium = 'Medium';
var hard = exports.hard = 'Hard';

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by K.Sachko on 26.10.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _GameMenuController = __webpack_require__(6);

var _CardController = __webpack_require__(5);

var _levels = __webpack_require__(1);

var levels = _interopRequireWildcard(_levels);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameController = exports.GameController = function () {
  function GameController() {
    _classCallCheck(this, GameController);

    this._boardElement = document.querySelector('.memory-bord');
    this._timerElement = document.querySelector('.timer');
    this.menu = new _GameMenuController.GameMenuController(this);
    this._victoryElement = document.querySelector('.end-game');
    this._menuElement = document.querySelector('.modal-container');
  }

  _createClass(GameController, [{
    key: "setBoard",
    value: function setBoard() {
      if (this.model.difficulty.name === levels.easy) {
        this._boardElement.classList.remove('medium-difficulty');
        this._boardElement.classList.remove('hard-difficulty');
        this._boardElement.classList.add('easy-difficulty');
      } else if (this.model.difficulty.name === levels.medium) {
        this._boardElement.classList.remove('easy-difficulty');
        this._boardElement.classList.remove('hard-difficulty');
        this._boardElement.classList.add('medium-difficulty');
      } else if (this.model.difficulty.name === levels.hard) {
        this._boardElement.classList.remove('easy-difficulty');
        this._boardElement.classList.remove('medium-difficulty');
        this._boardElement.classList.add('hard-difficulty');
      }
    }
  }, {
    key: "setGame",
    value: function setGame(game) {
      this.unsetGame();
      this.model = game;
      this.setBoard();
      this.initCards();
      this.subscribeEvents();
    }
  }, {
    key: "subscribeEvents",
    value: function subscribeEvents() {
      var _this = this;

      this.model.subscribe('tick', function (event) {
        _this.updateTimer(event.timeElapsed);
      });
      this.model.subscribe('victory', function () {
        setTimeout(function () {
          return _this._victoryElement.classList.remove('hidden');
        }, 500);
      });
      this.model.subscribe('game-menu', function () {
        setTimeout(function () {
          return _this._menuElement.classList.add('open');
        }, 500);
      });
    }
  }, {
    key: "updateTimer",
    value: function updateTimer(time) {
      var seconds = time % 60;
      var minutes = (time - seconds) / 60;
      var secondsString = seconds < 10 ? '0' + seconds : seconds.toString();
      var minutesString = minutes < 10 ? '0' + minutes : minutes.toString();
      this._timerElement.innerHTML = minutesString + ":" + secondsString;
    }
  }, {
    key: "initCards",
    value: function initCards() {
      var _this2 = this;

      this.cards = this.model.getCards().map(function (card) {
        return new _CardController.CardController(card, _this2._boardElement);
      });
    }
  }, {
    key: "unsetGame",
    value: function unsetGame() {
      if (this.model) {
        this.model.destroy();
        this.cards.forEach(function (cardController) {
          return cardController.destroy();
        });
        this.model = null;
        this.cards = [];
        this._timerElement.innerHTML = '00:00';
        this._victoryElement.classList.add('hidden');
      }
    }
  }]);

  return GameController;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _levels = __webpack_require__(1);

var levels = _interopRequireWildcard(_levels);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = [{
  name: levels.easy,
  caption: '5x2',
  count: 10
}, {
  name: levels.medium,
  caption: '6x3',
  count: 18
}, {
  name: levels.hard,
  caption: '8x3',
  count: 24
}]; /**
     * Created by K.Sachko on 30.10.2017.
     */

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by K.Sachko on 30.10.2017.
 */

exports.default = [{
  id: 'boby',
  name: 'Sponge Bob',
  avatar: 'src/images/mini/back_bob_mini.png',
  back: 'src/images/sponge_bob/back_bob.png',
  faces: ['src/images/sponge_bob/bob_1.png', 'src/images/sponge_bob/bob_2.png', 'src/images/sponge_bob/bob_3.png', 'src/images/sponge_bob/gery_1.png', 'src/images/sponge_bob/krabs_1.png', 'src/images/sponge_bob/krabs_2.png', 'src/images/sponge_bob/patrick_1.png', 'src/images/sponge_bob/patrick_2.png', 'src/images/sponge_bob/pearl_1.png', 'src/images/sponge_bob/plankton_1.png', 'src/images/sponge_bob/squidward_2.png', 'src/images/sponge_bob/squidward_3.png']
}, {
  id: 'hahariki',
  name: 'Smeshariki',
  avatar: 'src/images/mini/smeshariki_back_mini.png',
  back: 'src/images/smeshariki/smeshariki_back.png',
  faces: ['src/images/smeshariki/1.png', 'src/images/smeshariki/2.png', 'src/images/smeshariki/3.png', 'src/images/smeshariki/4.png', 'src/images/smeshariki/5.png', 'src/images/smeshariki/6.png', 'src/images/smeshariki/7.png', 'src/images/smeshariki/8.png', 'src/images/smeshariki/9.png', 'src/images/smeshariki/10.png', 'src/images/smeshariki/11.png', 'src/images/smeshariki/12.png']
}, {
  id: 'south_park',
  name: 'South Park',
  avatar: 'src/images/mini/Park_back_mini.png',
  back: 'src/images/south_park/back.png',
  faces: ['src/images/south_park/cartman_1.png', 'src/images/south_park/cartman_2.png', 'src/images/south_park/cartman_3.png', 'src/images/south_park/kenny_1.png', 'src/images/south_park/kenny_2.png', 'src/images/south_park/kenny_3.png', 'src/images/south_park/kyle_1.png', 'src/images/south_park/kyle_2.png', 'src/images/south_park/kyle_3.png', 'src/images/south_park/stan_1.png', 'src/images/south_park/stan_2.png', 'src/images/south_park/stan_3.png']
}];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by K.Sachko on 26.10.2017.
 */

var CardController = exports.CardController = function () {
  function CardController(card, root) {
    _classCallCheck(this, CardController);

    this.model = card;
    this.initElement(root);
    this.registerEvents();
    this.subscribeEvents();
  }

  _createClass(CardController, [{
    key: 'initElement',
    value: function initElement(root) {
      this._element = document.createElement('div');
      this._element.classList.add('card');
      this._element.classList.add('flip-container');
      this._flipper = document.createElement('div');
      this._flipper.classList.add('flipper');
      this._element.appendChild(this._flipper);
      this._backElement = document.createElement('img');
      this._backElement.classList.add('back');
      this._backElement.src = this.model.game.theme.back;
      this._flipper.appendChild(this._backElement);
      this._faceElement = document.createElement('img');
      this._faceElement.src = this.model.cardType;
      this._faceElement.classList.add('front');
      this._flipper.appendChild(this._faceElement);

      root.appendChild(this._element);
    }
  }, {
    key: 'registerEvents',
    value: function registerEvents() {
      var _this = this;

      this._element.addEventListener('click', function () {
        _this.model.turn();
      });
    }
  }, {
    key: 'subscribeEvents',
    value: function subscribeEvents() {
      var _this2 = this;

      this.model.subscribe('turn', function () {
        return _this2.update();
      });
      this.model.subscribe('complete', function () {
        return setTimeout(function () {
          return _this2._element.classList.add('vanishOut');
        }, 300);
      });
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.model.isOpen) {
        this._element.classList.add('hover');
      } else {
        this._element.classList.remove('hover');
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      this.model = null;
      this._element.removeEventListener('click', function () {
        _this3.model.turn();
      });
      this._element.parentNode.removeChild(this._element);
      this._element = null;
    }
  }]);

  return CardController;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameMenuController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by K.Sachko on 28.10.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _GameMenu = __webpack_require__(9);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameMenuController = exports.GameMenuController = function () {
  function GameMenuController(gameController) {
    _classCallCheck(this, GameMenuController);

    this.gameController = gameController;
    this.model = new _GameMenu.GameMenu();
    this.showPopover();
    this.initMenu();
    this.initThemes(this.model.themes);
    this.initDifficulties(this.model.difficulties);
    this.initStartButton();
    this.toggleMenu();
  }

  _createClass(GameMenuController, [{
    key: 'showPopover',
    value: function showPopover() {
      var _this = this;

      this._menuButtonElement = document.querySelector('.modal-trigger');
      this._menuButtonElement.addEventListener('click', function () {
        return _this.toggleMenu();
      });
    }
  }, {
    key: 'initMenu',
    value: function initMenu() {
      var _this2 = this;

      this._menuElement = document.querySelector('.modal-container');
      this._menuStartButtonElement = document.querySelector('.submit');
      this._menuStartButtonElement.disabled = true;
      this._menuStartButtonElement.addEventListener('click', function () {
        return _this2.toggleMenu();
      });
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu() {
      var selectedTheme = this._themeElement.querySelector('.selected');
      var selectedDifficulty = this._difficultyElement.querySelector('.selected-btn');
      if (this._menuElement.classList.contains('open') && selectedTheme && selectedDifficulty) {
        this._menuElement.classList.remove('open');
      } else {
        this._menuElement.classList.add('open');
      }
    }
  }, {
    key: 'initThemes',
    value: function initThemes(themes) {
      var _this3 = this;

      this._themeElement = document.querySelector('.menu-selector.theme');
      themes.forEach(function (theme) {
        var item = document.createElement('li');
        item.classList.add('theme-element');
        item.innerHTML = '<img src="' + theme.avatar + '"><span class="caption-theme">' + theme.name + '</span>';
        item.addEventListener('click', function (event) {
          if (_this3._difficultyElement.querySelector('.selected-btn')) {
            _this3._menuStartButtonElement.disabled = false;
          }
          _this3.setTheme(event, theme);
        });
        _this3._themeElement.appendChild(item);
      });
    }
  }, {
    key: 'setTheme',
    value: function setTheme(event, theme) {
      this.model.setTheme(theme);
      var selectedElement = this._themeElement.querySelector('.selected');
      if (selectedElement && selectedElement !== event.currentTarget) {
        selectedElement.classList.remove('selected');
      }
      event.currentTarget.classList.add('selected');
    }
  }, {
    key: 'initDifficulties',
    value: function initDifficulties(difficulties) {
      var _this4 = this;

      this._difficultyElement = document.querySelector('.menu-selector.difficulty');
      difficulties.forEach(function (difficulty) {
        var item = document.createElement('li');
        item.innerHTML = '<button class=\'difficulty-button\'>' + difficulty.name + '</button>';
        item.addEventListener('click', function (event) {
          if (_this4._themeElement.querySelector('.selected')) {
            _this4._menuStartButtonElement.disabled = false;
          }
          _this4.setDifficulty(event, difficulty);
        });
        _this4._difficultyElement.appendChild(item);
      });
    }
  }, {
    key: 'setDifficulty',
    value: function setDifficulty(event, difficulty) {
      this.model.setDifficulty(difficulty);
      var selectedElement = this._difficultyElement.querySelector('.selected-btn');
      if (selectedElement && selectedElement !== event.currentTarget) {
        selectedElement.classList.remove('selected-btn');
      }
      event.currentTarget.classList.add('selected-btn');
    }
  }, {
    key: 'initStartButton',
    value: function initStartButton() {
      var _this5 = this;

      this._startGameElement = document.querySelector('.submit');
      this._startGameElement.addEventListener('click', function () {
        var game = _this5.model.startGame();
        _this5.gameController.setGame(game);
      });
    }
  }]);

  return GameMenuController;
}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventEmitter2 = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by K.Sachko on 26.10.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Card = exports.Card = function (_EventEmitter) {
  _inherits(Card, _EventEmitter);

  function Card(cardType, game) {
    _classCallCheck(this, Card);

    var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this));

    _this.cardType = cardType;
    _this.game = game;
    _this._isOpen = false;
    _this._isComplete = false;
    return _this;
  }

  _createClass(Card, [{
    key: 'isEqual',
    value: function isEqual(card) {
      return this.cardType === card.cardType;
    }
  }, {
    key: 'turn',
    value: function turn() {
      if (!this.isComplete && this.game.isCardTurnAllowed(this)) {
        this.forceTurn();
        this.game.turnCard(this);
        return true;
      }
      return false;
    }
  }, {
    key: 'forceTurn',
    value: function forceTurn() {
      this._isOpen = !this._isOpen;
      this.emit('turn', this);
    }
  }, {
    key: 'complete',
    value: function complete() {
      this._isComplete = true;
      this.emit('complete', this);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.game = null;
      this.cardType = null;
      this.unsubscribe('turn');
      this.unsubscribe('complete');
    }
  }, {
    key: 'isOpen',
    get: function get() {
      return this._isOpen;
    }
  }, {
    key: 'isComplete',
    get: function get() {
      return this._isComplete;
    }
  }]);

  return Card;
}(_EventEmitter2.EventEmitter);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Game = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventEmitter2 = __webpack_require__(0);

var _Card = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = exports.Game = function (_EventEmitter) {
  _inherits(Game, _EventEmitter);

  function Game(difficulty, theme) {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this));

    _this.theme = theme;
    _this.difficulty = difficulty;
    _this.initCards(difficulty);
    _this.startTimer();
    _this.openCards = [];
    return _this;
  }

  _createClass(Game, [{
    key: "initCards",
    value: function initCards(difficulty) {
      var cardCount = difficulty.count;
      var distinctCards = cardCount / 2;
      var cards = [];
      for (var i = 0; i < distinctCards; i++) {
        var card = new _Card.Card(this.theme.faces[i], this);
        var couple = new _Card.Card(this.theme.faces[i], this);
        var cardWeight = Math.random();
        var coupleWeight = Math.random();
        cards.push({ card: card, weight: cardWeight });
        cards.push({ card: couple, weight: coupleWeight });
      }
      cards.sort(function (a, b) {
        if (a.weight < b.weight) {
          return -1;
        }
        return a.weight === b.weight ? 0 : 1;
      });

      this.cards = cards.map(function (card) {
        return card.card;
      });
    }
  }, {
    key: "getCards",
    value: function getCards() {
      return this.cards;
    }
  }, {
    key: "startTimer",
    value: function startTimer() {
      var _this2 = this;

      this._startTime = Date.now();
      this._endTime = null;
      this.emit('tick', { timeElapsed: this.timeElapsed });
      this._interval = setInterval(function () {
        _this2.emit('tick', { timeElapsed: _this2.timeElapsed });
      }, 1000);
    }
  }, {
    key: "stopTimer",
    value: function stopTimer() {
      clearInterval(this._interval);
      this._endTime = Date.now();
    }
  }, {
    key: "isCardTurnAllowed",
    value: function isCardTurnAllowed(card) {
      return this.openCards.indexOf(card) === -1;
    }
  }, {
    key: "turnCard",
    value: function turnCard(card) {
      if (this.openCards.length === 0) {
        //Empty list
        this.openCards.push(card);
      } else if (this.openCards.length === 1) {
        if (card.isEqual(this.openCards[0])) {
          //Bingo
          this.openCards[0].complete();
          card.complete();
          this.openCards.length = 0;
          this.checkVictory();
        } else {
          //Two cards are open
          this.openCards.push(card);
        }
      } else {
        //Start over again
        this.openCards.forEach(function (card) {
          return card.forceTurn();
        });
        this.openCards.length = 0;
        this.openCards.push(card);
      }
    }
  }, {
    key: "checkVictory",
    value: function checkVictory() {
      if (this.cards.every(function (card) {
        return card.isComplete;
      })) {
        //Victory!
        this.stopTimer();
        this.emit('victory', this);
        this.emit('game-menu', this);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.stopTimer();
      this.unsubscribe('tick');
      this.unsubscribe('victory');
      this.cards.forEach(function (card) {
        return card.destroy();
      });
      this.cards = [];
      this.openCards = [];
      this.difficulty = null;
      this.theme = null;
    }
  }, {
    key: "timeElapsed",
    get: function get() {
      if (!this._startTime) {
        return 0;
      }
      if (this._endTime) {
        return Math.round((this._endTime - this._startTime) / 1000);
      }
      return Math.round((Date.now() - this._startTime) / 1000);
    }
  }]);

  return Game;
}(_EventEmitter2.EventEmitter);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by K.Sachko on 28.10.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _themes = __webpack_require__(4);

var _themes2 = _interopRequireDefault(_themes);

var _difficulties = __webpack_require__(3);

var _difficulties2 = _interopRequireDefault(_difficulties);

var _Game = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameMenu = exports.GameMenu = function () {
  function GameMenu() {
    _classCallCheck(this, GameMenu);
  }

  _createClass(GameMenu, [{
    key: 'setDifficulty',
    value: function setDifficulty(difficulty) {
      this.difficulty = difficulty;
    }
  }, {
    key: 'setTheme',
    value: function setTheme(theme) {
      this.theme = theme;
    }
  }, {
    key: 'getDifficulty',
    value: function getDifficulty() {
      return this.difficulty;
    }
  }, {
    key: 'getTheme',
    value: function getTheme() {
      return this.theme;
    }
  }, {
    key: 'startGame',
    value: function startGame() {
      return new _Game.Game(this.difficulty, this.theme);
    }
  }, {
    key: 'themes',
    get: function get() {
      return _themes2.default;
    }
  }, {
    key: 'difficulties',
    get: function get() {
      return _difficulties2.default;
    }
  }]);

  return GameMenu;
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _GameController = __webpack_require__(2);

var game = new _GameController.GameController();

/***/ })
/******/ ]);