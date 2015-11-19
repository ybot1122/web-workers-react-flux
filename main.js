// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var Dispatcher = require('./Dispatcher.js');

var MyStore = Store.create(Dispatcher, {
  dispatch: function (payload) {
    switch (payload.type) {
      case 'updateData':
        this.data = payload.data;
        this.flush();
        break;
    }
  }
});

ReactDOM.render(<h1>Hello, world!</h1>, document.body);
