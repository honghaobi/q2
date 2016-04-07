var bluebirdPromise = require('bluebird');

module.exports = {
  // your code here
  simplePromise: function(val) {
    return new Promise(function (resolve, reject) {
      if (val === true) {
        resolve('OK');
      } else {
        reject('BAD');
      }
    });
  },
  add10Promise: function(val) {
    return new Promise(function (resolve, reject) {
      if (val) {
        resolve(val + 10);
      } else {
        resolve(0 + 10);
      }
    });
  },
  reject: function(val) {
    return new Promise(function (resolve, reject) {
      reject(10);
    });
  },
  sum50: function(val) {
    return module.exports.add10Promise(0).then(function(val){
      return module.exports.add10Promise(val);
    }).then(function(val){
      return module.exports.add10Promise(val);
    }).then(function(val){
      return module.exports.reject(val);
    }).then(function(val){
      return module.exports.add10Promise(val);
    }).then(function(val){
      return module.exports.add10Promise(val);
    }).catch(function(){
      return(50);
    });
  }
};

new bluebirdPromise(function(resolve, reject){
  console.log('A promise.');
  throw 'Boom!';
});
