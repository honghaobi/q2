var fs = require('fs');
var doAsyncStuff = require('./do-async-stuff');
var Promise = require('promise');

// run this file
// see what comes out
// go to https://www.promisejs.org/ to find out _why_ this happens

doAsyncStuff('reject')
  .then(
    function (value) { throw "doh!" },
    function (reason) { throw "handled it" }
  )
  .then(
    function (value) { console.log("second then", value); },
    function (reason) { console.log("second rejection handler - ", reason);}
  )
  .catch(function (err) { console.log(err); })
