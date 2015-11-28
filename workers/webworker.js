/**
  to be compiled into the webworker script
**/

'use strict';

const Calculator = require('./curve_calculator.js');

self.addEventListener('message', function(e) {
    let data = JSON.parse(e.data);
    let stream = data.stream;
    let id = data.id;
    let result = Calculator.calculateMyCurve(stream);
    let message = JSON.stringify({
        id: id,
        result: result
    });
    self.postMessage(message);
});
