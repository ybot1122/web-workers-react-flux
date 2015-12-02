# Sets index.html to show the webworker implementation

mkdir build
mkdir build/async
mkdir build/sequential
mkdir build/webworker

cp index.html build/async/index.html
cp index.html build/sequential/index.html
cp index.html build/webworker/index.html

cp stores/CurveStore_async.js stores/CurveStore.js
browserify -t [ babelify --presets [ react ] ] workers/webworker.js > workers/worker.js
browserify -t [ babelify --presets [ react ] ] main.js > bundle.js
cp bundle.js build/async/bundle.js

cp stores/CurveStore_sequential.js stores/CurveStore.js
browserify -t [ babelify --presets [ react ] ] workers/webworker.js > workers/worker.js
browserify -t [ babelify --presets [ react ] ] main.js > bundle.js
cp bundle.js build/async/bundle.js

cp stores/CurveStore_webworker.js stores/CurveStore.js
browserify -t [ babelify --presets [ react ] ] workers/webworker.js > workers/worker.js
browserify -t [ babelify --presets [ react ] ] main.js > bundle.js
cp bundle.js build/async/bundle.js
