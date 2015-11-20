/**
  Collection of wrappers to make asycnhronous calls to endpoints

  -- for now just a bunch of async routines with artifical delays
**/

'use strict';

module.exports = {
  getFakeWeather() {
    const fakeResult = {
      location: 'Portland, Oregon',
      forecast: 'Cloudy with a chance of rain'
    };
    return new Promise(function(resolve, reject) {
      window.setTimeout(function() {
        resolve(fakeResult);
      }, 3000);
    });
  },

  getFakeNews() {
    const fakeResult = {
      headline: 'Something Is Going On In Here',
      summary: 'Not long has passed since something went on here.'
    };
    return new Promise(function(resolve, reject) {
      window.setTimeout(function() {
        resolve(fakeResult);
      }, 1000);
    });
  },

  getFakeVideo() {
    return new Promise(function(resolve, reject) {
      window.setTimeout(function() {
        reject('rejected, lets just stay friends');
      }, 7000);
    });
  }
}