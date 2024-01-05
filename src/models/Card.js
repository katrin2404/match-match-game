/**
 * Created by K.Sachko on 26.10.2017.
 */


import {EventEmitter} from "../common/EventEmitter";

export class Card extends EventEmitter {

  constructor(cardType, game) {
    super();
    this.cardType = cardType;
    this.game = game;
    this._isOpen = false;
    this._isComplete = false;
  }

  isEqual(card) {
    return this.cardType === card.cardType;
  }

  turn() {
    if (!this.isComplete && this.game.isCardTurnAllowed(this)) {
      this.forceTurn();
      this.game.turnCard(this);
      return true;
    }
    return false;
  }

  forceTurn() {
    this._isOpen = !this._isOpen;
    this.emit('turn', this);
  }

  complete() {
    this._isComplete = true;
    this.emit('complete', this);
  }

  get isOpen() {
    return this._isOpen;
  }

  get isComplete() {
    return this._isComplete;
  }

  destroy() {
    this.game = null;
    this.cardType = null;
    this.unsubscribe('turn');
    this.unsubscribe('complete');
  }
}

