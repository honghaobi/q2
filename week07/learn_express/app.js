// requirements
var express = require('express');
var app = express();

var vegetables = [
  "Carrots",
  "Cucumber",
  "Peas",
  "Melon"
];

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  // use res.render
  res.render('index', {name: "Elie"});
});

// a "GET" request to "/" will run the function below
app.get('/', function(req, res) {
  // send back the response: 'Hello World'
  res.send('hello');
});

app.get('/new', function(req, res) {
  res.send("congrats on new route!");
});

app.get("/vegetables", function (req, res) {
  //send all the veggies
  res.send(vegetables.join(", "));
});

app.get("/hello/:name", function (req, res) {
  res.send('hello, ' + req.params.name);
});

app.get("/hi", function (req, res) {
  var name = req.query.name;
  res.send("hi, " + name);
});

// Our new route utilizing a wild card
app.get('/*', function (req, res) {

  // var response = res.status(404);
  // response.send('nope');

  res.status(404).send('Nope! Nothing here.');
});

// start the server
app.listen(3000, function() {
  console.log("Starting a server on localhost:3000");
});
