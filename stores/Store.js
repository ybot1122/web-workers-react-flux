/**
  The most boring store;
**/

'use strict';

var EventEmitter = require('../EventEmitter.js');
var Dispatcher = require('../Dispatcher.js');

class Store {
  constructor() {
    this._emitter = new EventEmitter();
    Dispatcher.register(this._onDispatch);
  }

  addListener(callback) {
    this._emitter.addListener(callback);
  }

  _emitChange() {
    this._emitter.emit();
  }

  _onDispatch(actionType, payload) {
    console.warn('Override this function, fool!!!');
  }
}

module.exports = Store;