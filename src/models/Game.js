import {EventEmitter} from "../common/EventEmitter";
import {Card} from "./Card";

export class Game extends EventEmitter {
  constructor(difficulty, theme) {
    super();
    this.theme = theme;
    this.difficulty = difficulty;
    this.initCards(difficulty);
    this.startTimer();
    this.openCards = [];
  }

  initCards(difficulty) {
    const cardCount = difficulty.count;
    const distinctCards = cardCount / 2;
    const cards = [];
    for (let i = 0; i < distinctCards; i++) {
      const card = new Card(this.theme.faces[i], this);
      const couple = new Card(this.theme.faces[i], this);
      const cardWeight = Math.random();
      const coupleWeight = Math.random();
      cards.push({card:card, weight: cardWeight});
      cards.push({card:couple, weight: coupleWeight});
    }
    cards.sort((a, b) => {
      if (a.weight < b.weight) {
        return -1;
      }
      return a.weight === b.weight ? 0 : 1;
    });

    this.cards = cards.map(card => card.card);
  }

  getCards() {
    return this.cards;
  }

  startTimer() {
    this._startTime = Date.now();
    this._endTime = null;
    this.emit('tick', {timeElapsed: this.timeElapsed});
    this._interval = setInterval(() => {
      this.emit('tick', {timeElapsed: this.timeElapsed});
    }, 1000);
  }

  get timeElapsed() {
    if (!this._startTime) {
      return 0;
    }
    if (this._endTime) {
      return Math.round((this._endTime - this._startTime) / 1000);
    }
    return Math.round((Date.now() - this._startTime)/1000);
  }

  stopTimer() {
    clearInterval(this._interval);
    this._endTime = Date.now();
  }

  isCardTurnAllowed(card) {
    return this.openCards.indexOf(card) === -1;
  }

  turnCard(card) {
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
      this.openCards.forEach(card => card.forceTurn());
      this.openCards.length = 0;
      this.openCards.push(card);
    }
  }

  checkVictory() {
    if (this.cards.every(card => card.isComplete)) {
      //Victory!
      this.stopTimer();
      this.emit('victory', this);
      this.emit('game-menu', this);
    }
  }

  destroy() {
    this.stopTimer();
    this.unsubscribe('tick');
    this.unsubscribe('victory');
    this.cards.forEach(card => card.destroy());
    this.cards = [];
    this.openCards = [];
    this.difficulty = null;
    this.theme = null;
  }
}

