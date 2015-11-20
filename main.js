// main.js

'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Dispatcher = require('./Dispatcher.js');
const Store = require('./Store.js');
const EndpointStore = require('./EndpointStore.js');
const ActionTypes = require('./ActionTypes');

class ClockStoreDef extends Store {
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

const ClockStore = new ClockStoreDef();

const News = React.createClass({
  componentWillMount: function() {
    Dispatcher.dispatch(ActionTypes.REQUEST_NEWS, {});
    this.
  }
});

const MainElement = React.createClass({
  _counter: function() {
    Dispatcher.dispatch(ActionTypes.UPDATE_CLOCK, this.state.time + 1);
  },

  _timeChange: function() {
    this.setState({
      time: ClockStore.getTime()
    });
  },

  getInitialState: function() {
    return {
      time: ClockStore.getTime()
    };
  },

  componentDidMount: function() {
    ClockStore.addListener(this._timeChange);
    setInterval(this._counter, 1000);
  },

  render: function() {
    return (
      <div>
        <h1>Hello Again, World!</h1>
        <p>Time is: {this.state.time}</p>
      </div>
    );
  }
});

ReactDOM.render(<MainElement />, document.getElementById('container'));
