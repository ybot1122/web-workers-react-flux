/**
  This store is an interface into the underlying web worker
  It will handle dispatches that include data to calculate, and will
  emitChange when its received a calculated value
**/

'use strict';

var FakeData = require('../fake_data.json');

const Store = require('./Store.js');
const ActionTypes = require('../actions/ActionTypes');

let self;

class CurveStore extends Store {
  constructor() {
    super();
    self = this;
    self._worker = new Worker("workers/curve_calculator.js");
    self._cache = {};
    // add listener to worker for receiving calcuations
    self._worker.addEventListener('message', function(e) {
      var data = e.data;
      var id = data.id;
      var result = data.result;
      self._cache[id] = result;
      self._emitChange();
    });
  }

  _onDispatch(actionType, payload) {
    switch(actionType) {
      case ActionTypes.CALCULATE_CURVE:
        delete self._cache[payload.id];
        // tell worker to calculate on action.data
        self._worker.postMessage({'stream': FakeData, 'id': payload.id})
        self._emitChange();
        break;
      default:
        break;
    }
  }

  getCalculation(id) {
    return self._cache[id];
  }
}

module.exports = new CurveStore();