/**
  This store is an interface into the underlying web worker
  It will handle dispatches that include data to calculate, and will
  emitChange when its received a calculated value
**/

'use strict';

const FakeData = require('../fake_data.json');

const Store = require('./Store.js');
const ActionTypes = require('../actions/ActionTypes');
const Calculator = require('../workers/curve_calculator.js');

let self;

class CurveStore extends Store {
  constructor() {
    super();
    console.log('USING ASYNC STORE');
    self = this;
    self._worker = new Worker("workers/worker.js");
    self._cache = {};
    // add listener to worker for receiving calcuations
    self._worker.addEventListener('message', function(e) {
      var data = JSON.parse(e.data);
      var id = data.id;
      var result = data.result;
      self._cache[id] = result;
      self._emitChange();
    });
  }

  _onDispatch(actionType, payload) {
    switch(actionType) {
      case ActionTypes.CALCULATE_CURVE:
        setTimeout((function() {
          return function() {
            self._cache[payload.id] = Calculator.calculateMyCurve(FakeData.values);
            self._emitChange();
          };
        })(), 0);
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