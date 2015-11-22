// main.js

'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Dispatcher = require('./Dispatcher.js');
const ActionTypes = require('./ActionTypes');

const ClockStore = require('./ClockStore.js');

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
