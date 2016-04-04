var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
function Users() {
  return knex('users');
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/new', function(req, res, next) {
  res.render('new');
});

router.post('/new', function(req, res, next) {
  var errors = [];

  if (req.body.name && req.body.hobby) {
    Users().insert({name: req.body.name, hobby: req.body.hobby}).then(function () {
      res.redirect('/people');
    });
  } else {
    if (!req.body.name) {
      errors.push("enter yo name yo!");
    }
    if (!req.body.hobby) {
      errors.push("enter yo hobby yo!");
    }
    res.render('new', {messages: errors});
  }
});

router.get('/people', function(req, res, next) {
  Users().select().then(function(users) {
    res.render('people', {users: users});
  });
});
module.exports = router;
