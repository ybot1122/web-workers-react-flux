/**
    Worker that takes in an array of data and outputs an SVG path
**/

function calculateCurve(rawData) {
    // parse data into an array of values
    var data = [];
    for (var i = 0; i < rawData.length; i++) {
        data.push({
            x: rawData[i].start_epoch_ms,
            y: rawData[i].value
        });
    }
    return "Yoo hoo";
}

self.addEventListener('message', function(e) {
    var data = e.data.stream;
    var id = e.data.id;
    var result = calculateCurve(data);
    self.postMessage({
        id: id,
        result: result
    });
});
