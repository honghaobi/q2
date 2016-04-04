'use strict';

var express = require('express');
var app = express();

var morgan = require('morgan');
app.use(morgan('short'));

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies

var fs = require('fs');
var path = require('path');
var petsPath = path.join(__dirname, 'pets.json');

var pets;

var basicAuth = require('basic-auth');

var auth = function (req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.send(401);
  }

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  }

  if (user.name === 'admin' && user.pass === 'meowmix') {
    return next();
  } else {
    return unauthorized(res);
  }
};

app.use(function(req, res, next){
  fs.readFile(petsPath, 'utf8', function (readErr, data) {
    if(readErr){
      return next(readErr);
    }
    pets = JSON.parse(data);
    next();
  });
});

function postData(){
  var petsJSON = JSON.stringify(pets);

  fs.writeFile(petsPath, petsJSON, function (writeErr) {
    if (writeErr) {
      return next(writeErr);
    }
  });
  res.send(pets);
}

app.get('/pets', auth, function(req, res){
  res.send(JSON.stringify(pets));
});

app.get('/pets/:index', auth, function(req, res) {
  var index = req.params.index;

  if (isNaN(index) || index >= pets.length || index < 0) {
    res.status(404).send('invalid index');
  } else{
    res.send(JSON.stringify(pets[index]));
  }
});

app.get('/*', auth, function (req, res) {
  res.status(404).send('nope! nothing here.');
});

app.post('/pets', function(req, res, next){
  var age = parseInt(req.body.age);
  var kind = req.body.kind;
  var name = req.body.name;

  if (!age || !kind || !name) {
    res.status(400).send('missing a param');
  } else {
    pets.push({ age, kind, name});
    postData();

  }
});

app.put('/pets/:index', auth, function(req, res, next){
  var index = Number.parseInt(req.params.index);
  var age = parseInt(req.body.age);
  var kind = req.body.kind;
  var name = req.body.name;

  if(Number.isNaN(index) || index < 0 || index >= pets.length) {
    return res.sendStatus(404);
  } else {
    pets[index].age = age;
    pets[index].kind = kind;
    pets[index].name = name;
    postData();

  }
});

app.patch('/pets/:index', auth, function(req, res, next){
  var index = Number.parseInt(req.params.index);
  var age = parseInt(req.body.age);
  var kind = req.body.kind;
  var name = req.body.name;

  if(Number.isNaN(index) || index < 0 || index >= pets.length) {
    return res.sendStatus(404);
  } else {
    if (age || kind || name) {
      if (age) {
        pets[index].age = age;
      }
      if (kind) {
        pets[index].kind = kind;
      }
      if (name) {
        pets[index].name = name;
      }
    }
    postData();

  }
});


app.delete('/pets/:index', auth, function(req, res, next){
  var index = Number.parseInt(req.params.index);

  if(Number.isNaN(index) || index < 0 || index >= pets.length) {
    return res.sendStatus(404);
  } else {
    pets.splice(index, 1);
    postData();

  }
});

app.use('/*', auth, function(res, req){
  res.sendStatus(404);
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, {message: err.message });
});

// start the server
app.listen(8080, function() {
  console.log("Starting a server on localhost:8080");
});
