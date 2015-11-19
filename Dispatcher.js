/**
  The most boring basic dispatcher;
  no waitFor functionality;
**/

'use strict';

class Dispatcher {
  constructor() {
    this._callbacks = [];
    this._isDispatching = false;
  }

  register(callback) {
    this._callbacks.push(callback);
    return this._callbacks.length - 1;
  }

  unregister(id) {
    if (id > 0 && id < this._callbacks.length) {
      this._callbacks.splice(id, 1);
    }
  }

  dispatch(payload) {
    for (callback of this._callbacks) {
      callback(payload);
    }
  }
}

modules.export = new Dispatcher();