/**
  Holds a counter, which represents number of seconds
**/

'use strict';

const Store = require('./Store.js');
const ActionTypes = require('./ActionTypes');

let self;

class ClockStore extends Store {
  constructor() {
    super();
    self = this;
    self.time = 0;
  }

  _onDispatch(actionType, payload) {
    switch(actionType) {
      case ActionTypes.UPDATE_CLOCK:
        self.time = payload;
        self._emitChange();
        break;
      default:
        break;
    }
  }

  getTime() {
    return self.time;
  }
}

module.exports = new ClockStore();