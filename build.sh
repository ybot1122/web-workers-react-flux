# Sets index.html to show the webworker implementation

cp stores/CurveStore_async.js stores/CurveStore.js
#cp stores/CurveStore_sequential.js stores/CurveStore.js
#cp stores/CurveStore_webworker.js stores/CurveStore.js
browserify -t [ babelify --presets [ react ] ] workers/webworker.js > workers/worker.js
browserify -t [ babelify --presets [ react ] ] main.js > bundle.js
