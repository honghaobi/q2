var fs = require('fs');
var net = require('net');

// When dealing with objects that have ErrorEvent listeners there are 2 behaviors:
// - if you register a handler, it will use it
// - if you don't register a handler, it will throw it and crash the process

// Example 1: attach an `on('error')` handler to `connection2` and log the error

var connection2 = net.connect('doesnt.work.galvanize.com');
connection2.pipe(process.stdout);

// Example 1: wrap the following statements in a try/catch block
// Notice how try/catch doesn't work at all
// Use  process.on('uncaughtException') to deal with this error

var connection = net.connect('doesnt.work.galvanize.com');
connection.pipe(process.stdout);
