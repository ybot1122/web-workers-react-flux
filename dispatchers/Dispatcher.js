/**
  The most boring basic dispatcher;
  no waitFor functionality;
**/

'use strict';

class Dispatcher {
  constructor() {
    this._callbacks = [];
  }

  register(callback) {
    this._callbacks.push(callback) - 1;
  }

  dispatch(actionType, payload) {
    for (let callback of this._callbacks) {
      callback(actionType, payload);
    }
  }
}

module.exports = new Dispatcher();