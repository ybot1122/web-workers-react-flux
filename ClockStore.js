/**
  Holds a counter, which represents number of seconds
**/

'use strict';

class ClockStore extends Store {
  constructor() {
    super();
    this.time = 0;
  }

  _onDispatch(actionType, payload) {
    switch(actionType) {
      case ActionTypes.UPDATE_CLOCK:
        ClockStore.time = payload;
        ClockStore._emitChange();
        break;
      default:
        break;
    }
  }

  getTime() {
    return this.time;
  }
}

module.exports = new ClockStore();