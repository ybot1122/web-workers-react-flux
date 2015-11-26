/**
  This store is an interface into the underlying web worker
  It will handle dispatches that include data to calculate, and will
  emitChange when its received a calculated value
**/

'use strict';

const Store = require('./Store.js');
const ActionTypes = require('../actions/ActionTypes');

let self;

class CurveStore extends Store {
  constructor() {
    super();
    self = this;
    self._cache = {};
  }

  _onDispatch(actionType, payload) {
    switch(actionType) {
      case ActionTypes.CALCULATE_CURVE:
        delete self._cache[action.id];
        // tell worker to calculate on action.data
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