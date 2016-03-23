'use strict';
// requires Node's `http` module
var http = require('http');
var url = require('url');
// var routes = require('./routes');

var fs = require('fs');
var path = require('path');
var petsPath = path.join(__dirname, 'pets.json');

var pets;

fs.readFile(petsPath, 'utf8', (err, data) => {
  pets = JSON.parse(data);
});

function postData(data){
  var data = JSON.parse(data);
  pets.push({ age: parseInt(data.age, 10), kind: data.kind, name: data.name });
  const petsJSON = JSON.stringify(pets);

  fs.writeFile(petsPath, petsJSON, (writeErr) => {
    if (writeErr) {
      throw writeErr;
    }
  });
};

function handleRequest(req, res) {
  var arr = req.url.split('/');
  var index = arr[2];

  if (req.method === 'POST' && req.url.match('pets')){
    req.on('data', postData);
    res.end(JSON.stringify(pets));
  } else if (req.url.match('pets/')) {
    if (isNaN(index) || index >= pets.length || index < 0){
      res.statusMessage = '404';
      res.end(res.statusMessage);
    } else {
      res.end('here is your pet ' + JSON.stringify(pets[index]));
    }
  } else if (req.url.match('pets')) {
    res.end('here are your pets ' + JSON.stringify(pets));
  } else {
    res.end(req.url);
  }
}

// Creates an instance of a server with our callback
const server = http.createServer(handleRequest);
const port = process.env.PORT || 8080;
// Binds our server to a port, host, and then logs a message
server.listen(port, function() {
  console.log("Listening on port 8080");
});
