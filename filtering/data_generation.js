
"use strict";

/***
    ALL DATA SETS ARE BOUND 0 <= x <= 100
***/
const RANGE_MAX = 100;
const RANGE_MIN = 0;
const RANGE = RANGE_MAX - RANGE_MIN;

function _signOf(val) {
    if (val < 0) {
        return -1;
    } else if (val > 0) {
        return 1;
    } else {
        return 0;
    }
}

function _getSlope(p1, p2) {
    return (p2.y - p1.y) / (p2.x - p1.x);
}

function smallHump(startPoint, numPoints) {
    const HEIGHT = 10;
    const avgRiseDelta = HEIGHT / (numPoints / 2);
    let result = [];
    let prevIncr = (Math.random() * avgRiseDelta) + .001;
    result[0] = {x: startPoint.x + 1, y: startPoint.y + prevIncr};
    for (let i = 1; i < numPoints; i++) {
        let incr;
        if (i % 2 == 0) {
            incr = (Math.random() * avgRiseDelta) + .001;
            prevIncr = incr;
        } else {
            incr = avgRiseDelta - prevIncr;
        }

        if (i > numPoints / 2) {
            incr *= -1;
        }

        result.push({x: startPoint.x + i, y: result[i - 1].y + incr});
    }
    return result;
}

console.log(smallHump({x: 0, y: 2}, 10));
