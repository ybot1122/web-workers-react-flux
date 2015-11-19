/**
  The most boring event emitter
**/

'use strict';

class EventEmitter {
  constructor() {
    this._listeners = [];
  }

  addListener(callback) {
    this._listeners.push(callback);
  }

  emit() {
    for (let callback of this._listeners) {
      callback();
    }
  }
}

module.exports = EventEmitter;
