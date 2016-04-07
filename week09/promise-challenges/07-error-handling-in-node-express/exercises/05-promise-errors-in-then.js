var fs = require('fs');
var doAsyncStuff = require('./do-async-stuff');
var Promise = require('promise');

// run this file
// notice how the promise "swallows" the error that occurred in the function passed to `then`
// pass a second function to `then`
// notice how it does _not_ catch the error
// chain a `catch` function to the `then`

doAsyncStuff()
  .then(
    function (value) { throw "doh!" }
  )
