var fs = require('fs');

// If the `readFile` call succeeds, call your "success" callback
// If the `readFile` call fails, call your "failure" callback and pass it the error
exports.errorCallbacks = function (path, onSuccess, onFailure) {
  fs.readFile(path, 'utf8', function (err, data) {

  });
}

// If the `readFile` call succeeds, call your "success" callback
// If the `readFile` call fails, re-throw the exception
exports.raiseInCallback = function (path, onSuccess) {
  fs.readFile(path, 'utf8', function (err, data) {

  });
}
