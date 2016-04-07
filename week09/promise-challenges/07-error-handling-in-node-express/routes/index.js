var express = require('express');
var router = express.Router();
var fs = require('fs');
var net = require('net');
var doAsyncStuff = require('../exercises/do-async-stuff');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Notice how if the code in your route throws an error
// Express's error handler is triggered and you see the stack trace
router.get('/errors/1', function(req, res, next) {
  var data = fs.readFileSync('does not exist');
  res.render('index', { title: 'Express' });
});

// If you throw an error inside a node-style callback
// it does _not_ trigger express's error handling
// But it _does_ crash your process and turn your web server off
// Type `rs` to restart nodemon
// To properly handle this error use `return next(err)` when there's an error
router.get('/errors/2', function(req, res, next) {
  var data = fs.readFile('does not exist', function (err, data) {
    if (err) {
      throw(err)
    }
    res.render('index', { title: 'Express' });
  });
});

// Similar to the code above, if you throw an error inside the error event
// it will crash your process, and will not show you the stack trace
// and you'll have to restart your web server
router.get('/errors/3', function (req, res, next) {
  var connection = net.connect('doesnt.work.galvanize.com');

  connection.on("error", function (err) {
    throw err;
  })

  connection.on("close", function () {
    res.render('index', { title: 'Express' });
  })
})

// If your promise never resolves your render line will never be called
// Notice how your browser just hangs
// You need to call `next` in the error handler
router.get('/errors/4', function (req, res, next) {
  doAsyncStuff('reject').then(function () {
    res.render('index', {title: 'Express'})
  })
})

// If your code inside of a `then` function throws an error
// By default it's swalled, and your render line will never be called
// Notice how your browser just hangs
// You need to add a pass `next` as the error handler
router.get('/errors/5', function (req, res, next) {
  doAsyncStuff().then(function () {
    fs.readFileSync('some nonexistant file');
    res.render('index', {title: 'Express'})
  })
})

module.exports = router;
