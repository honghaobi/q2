var express = require('express');
var app = express();

var guests = [{name: 'Teagan'}];

app.disable('x-powered-by');
app.set('port', process.env.PORT || 5000);

var morgan = require('morgan');
app.use(morgan('short'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());

// app.use(function(req, res, next){
//   var body = '';
//
//   req.on('data', function(chunk){
//     body += chunk.toString();
//   });
//
//   req.on('end', function(){
//     if (body !== ''){
//       req.body = JSON.parse(body);
//     }
//     next();
//   });
// });

// app.use(function(req, res, next) {
//   var start = new Date();
//   next();
//   var end = new Date();
//   console.log(req.method, req.url, res.statusCode, end - start, 'ms');
// });

app.get('/guests', function(req, res) {
  res.send(guests);
});

app.get('/guests/:index', function(req, res) {
  var index = Number.parseInt(req.params.index);

  if (Number.isNaN(index) || index < 0 || index >= guests.length) {
    return res.sendStatus(404);
  }

  res.send(guests[index]);
});

app.post('/guests', function(req, res){
  var guest = req.body;

  if (!guest) {
    return res.sendStatus(400);
  }

  guests.push(guest);

  res.send(guest);
});

app.put('/guests/:index', function(req, res) {
  var index = Number.parseInt(req.params.index);

  if(Number.isNaN(index) || index < 0 || index >= guests.length) {
    return res.sendStatus(404);
  }

  var guest = req.body;

  if(!guest) {
    return res.sendStatus(400);
  }

  guests[index] = guest;

  res.send(guest);
});

app.delete('/guests/:index', function(req, res) {
  var index = Number.parseInt(req.params.index);

  if (Number.isNaN(index) || index < 0 || index >= guests.length) {
    return res.sendStatus(404);
  }

  var guest = guests.splice(index, 1)[0];

  res.send(guest);

});

app.listen(app.get('port'), function() {
  console.log('Listening on', app.get('port'));
});
