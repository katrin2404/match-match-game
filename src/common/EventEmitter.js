export class EventEmitter {
  constructor() {
    this._subscribers = {};
  }

  subscribe(eventName, handler) {
    if (!this._subscribers[eventName]) {
      this._subscribers[eventName] = [];
    }
    this._subscribers[eventName].push(handler);
  }

  emit(eventName, details) {
    if (this._subscribers[eventName]) {
      this._subscribers[eventName].forEach(handler => handler(details));
    }
  }

  unsubscribe(eventName, handler) {
    if (this._subscribers[eventName]) {
      this._subscribers[eventName] = this._subscribers[eventName].filter(h => handler && handler !== h);
    }
  }
}
