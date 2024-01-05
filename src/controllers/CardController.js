/**
 * Created by K.Sachko on 26.10.2017.
 */

export class CardController {
  constructor(card, root) {
    this.model = card;
    this.initElement(root);
    this.registerEvents();
    this.subscribeEvents();
  }

  initElement(root) {
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

  registerEvents() {
    this._element.addEventListener('click', () => {
      this.model.turn();
    });
  }

  subscribeEvents() {
    this.model.subscribe('turn', () => this.update());
    this.model.subscribe('complete', () => setTimeout(() => this._element.classList.add('vanishOut'), 300));
  }

  update() {
    if (this.model.isOpen) {
      this._element.classList.add('hover');
    } else {
      this._element.classList.remove('hover');
    }
  }

  destroy() {
    this.model = null;
    this._element.removeEventListener('click', () => {
      this.model.turn();
    });
    this._element.parentNode.removeChild(this._element);
    this._element = null;
  }
}

