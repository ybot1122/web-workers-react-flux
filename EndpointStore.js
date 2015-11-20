/**
  A store that keeps track of which service calls are in progress
**/

'use strict';

const Store = require('./Store.js');
const ServiceCalls = require('./ServiceCalls.js');
const ActionTypes = require('./ActionTypes.js');

class EndpointStore extends Store {
  contructor() {
    // maybe should store objects which status AND data
    this.inProgress =  {};
  }

  _onDispatch(actionType, payload) {
    switch (actionType) {
      case ActionTypes.REQUEST_VIDEO:
      case ActionTypes.REQUEST_WEATHER:
      case ActionTypes.REQUEST_NEWS:
        EndpointStore.inProgress[actionType] = 1;
        ServiceCalls.getFakeNews().then(function(val) {
          EndpointStore.inProgress[actionType] = 2;
          EndpointStore._emitChange();
        }).catch(function(reason) {
          EndpointStore.inProgress[actionType] = 0;
          EndpointStore._emitChange();
        });
        EndpointStore._emitChange();
        break;
      default:
        break;
    }
  }

  /**
   * actionType: action that was dispatched to start the service call
   * returns the most recent status of that call
   *  -1 : never initiated
   *  0  : failure
   *  1  : in progress
   *  2  : success
  */
  getCallbackStatus(actionType) {
    if (EndpointStore.inProgress[actionType]) {
      return EndpointStore.inProgress[actionType];
    }
    return -1;
  }

};

module.exports = new EndpointStore();