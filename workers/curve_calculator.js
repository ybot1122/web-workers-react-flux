/**
    Worker that takes in an array of data and outputs an SVG path
**/

'use strict';

const d3 = require('./d3.min.js');

function calculateMyCurve(rawData) {
    // parse data into an array of values
    let data = [];
    for (let i = 0; i < rawData.length; i++) {
        data.push({x: i, y: rawData[i].value});
    }

    const line = d3.svg.line().interpolate('basis')
        .x(function (d) {
            return d.x
        })
        .y(function (d) {
            return d.y
        });

    return line(data);
}

self.addEventListener('message', function(e) {
    let data = JSON.parse(e.data);
    let stream = data.stream;
    let id = data.id;
    let result = calculateMyCurve(stream);
    let message = JSON.stringify({
        id: id,
        result: result
    });
    self.postMessage(message);
});
