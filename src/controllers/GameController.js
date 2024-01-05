/**
 * Created by K.Sachko on 26.10.2017.
 */
import {GameMenuController} from "./GameMenuController";
import {CardController} from "./CardController";
import * as levels from '../constants/levels'

export class GameController {
  constructor() {
    this._boardElement = document.querySelector('.memory-bord');
    this._timerElement = document.querySelector('.timer');
    this.menu = new GameMenuController(this);
    this._victoryElement = document.querySelector('.end-game');
    this._menuElement = document.querySelector('.modal-container');
  }

  setBoard() {
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

  setGame(game) {
    this.unsetGame();
    this.model = game;
    this.setBoard();
    this.initCards();
    this.subscribeEvents();
  }

  subscribeEvents() {
    this.model.subscribe('tick', (event) => {
      this.updateTimer(event.timeElapsed);
    });
    this.model.subscribe('victory', () => {
      setTimeout(() => this._victoryElement.classList.remove('hidden'), 500);
    });
    this.model.subscribe('game-menu', () => {
      setTimeout(() => this._menuElement.classList.add('open'), 500);
    });
  }

  updateTimer(time) {
    const seconds = time % 60;
    const minutes = (time - seconds) / 60;
    const secondsString = seconds < 10 ? '0' + seconds : seconds.toString();
    const minutesString = minutes < 10 ? '0' + minutes : minutes.toString();
    this._timerElement.innerHTML = `${minutesString}:${secondsString}`;
  }

  initCards() {
    this.cards = this.model.getCards().map(card => new CardController(card, this._boardElement));
  }

  unsetGame() {
    if (this.model) {
      this.model.destroy();
      this.cards.forEach(cardController => cardController.destroy());
      this.model = null;
      this.cards = [];
      this._timerElement.innerHTML = '00:00';
      this._victoryElement.classList.add('hidden');
    }
  }
}

