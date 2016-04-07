var fs = require('fs');
var doAsyncStuff = require('./do-async-stuff');
var Promise = require('promise');

// Notice how the third `then` throws an error
// And how it skips the next 2 `then` functions
// And how it is caught by the first error handler

// Also note how handling an error returns a _resolved_ promise which can be chained to

doAsyncStuff()
  .then( function (value) { console.log("1"); return value } )
  .then( function (value) { console.log("2"); return value } )
  .then( function (value) { console.log("3"); throw "oops" } )
  .then( function (value) { console.log("4"); return value } )
  .then( function (value) { console.log("5"); return value } )
  .catch(function (reason) { console.log("7"); return reason })
  .then( function (value) { console.log("8"); return value } )
