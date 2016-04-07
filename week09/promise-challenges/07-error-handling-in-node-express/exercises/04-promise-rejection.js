var fs = require('fs');
var doAsyncStuff = require('./do-async-stuff');
var Promise = require('promise');

// run this file
// notice how your `then` function is never called
// add a second function to `then` to handle the rejection

doAsyncStuff('reject')
  .then(
    function (value) { throw "doh!" }
  )
