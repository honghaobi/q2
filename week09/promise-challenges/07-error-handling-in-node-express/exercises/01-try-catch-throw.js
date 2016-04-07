var fs = require('fs');

// Wrap the failing call below in a try-catch block.
// When the function call succeeds, return the text of the file
// When the function fails, return the string "doh!"
exports.catchThisError = function (path) {
  return fs.readFileSync(path, 'utf8');
}

// Wrap the failing call below in a try-catch block.
// When the function call succeeds, return the text of the file
// When the function fails, throw a new error with the string "doh!"
exports.catchAndThrowString = function (path) {
  return fs.readFileSync(path, 'utf8');
}

// Wrap the failing call below in a try-catch block.
// When the function call succeeds, return the text of the file
// When the function fails, throw an instance of a new Error object with the message "doh!"
exports.catchAndThrowError = function (path) {
  return fs.readFileSync(path, 'utf8');
}
