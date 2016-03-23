var http = require('http');
var url = require('url');

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies

var fs = require('fs');
var path = require('path');
var petsPath = path.join(__dirname, 'pets.json');

var pets;

fs.readFile(petsPath, 'utf8', (err, data) => {
  pets = JSON.parse(data);
});

function postData(){
  var petsJSON = JSON.stringify(pets);

  fs.writeFile(petsPath, petsJSON, (writeErr) => {
    if (writeErr) {
      throw writeErr;
    }
  });
};

app.post('/pets', function(req,res){
  var age = parseInt(req.body.age);
  var kind = req.body.kind;
  var name = req.body.name;

  if (!age || !kind || !name) {
    res.status(400).send('missing a param');
  } else {
    pets.push({ age, kind, name});
    postData();
    res.send(pets);
  }
});

app.get('/pets', function(req, res){
  res.send('here are your pets ' + JSON.stringify(pets));
});

app.get('/pets/:index', function(req, res) {
  var index = req.params.index;

  if (isNaN(index) || index >= pets.length || index < 0) {
    res.status(404).send('invalid index');
  } else{
    res.send('here is your pet ' + JSON.stringify(pets[index]));
  }
});

app.get('/*', function (req, res) {
  res.status(404).send('nope! nothing here.');
});

// start the server
app.listen(8080, function() {
  console.log("Starting a server on localhost:8080");
});
