'use strict';
// requires Node's `http` module
var http = require('http');
var routes = require('./routes');

// Declares a function that gets invoked on every request
function handleRequest(req, res) {
  if(routes[req.url]) {
    routes[req.url](req, res);
  } else {
    res.end('404, no such route');
  }
}

// Creates an instance of a server with our callback
var server = http.createServer(handleRequest);

// Binds our server to a port, host, and then logs a message
server.listen(8080, 'localhost', function() {
  console.log("Listening on port 8080");
});
