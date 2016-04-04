var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Users() {
  return knex('users');
}

var errors = [];

router.get('/', function(req, res, next) {
  res.render('index', {messages: errors});
});

router.get('/new', function(req, res, next) {
  res.render('new', {messages: errors});
});

router.post('/new', function(req, res, next) {
  errors = [];
  if (req.body.name && req.body.hobby) {
    Users().insert({name: req.body.name, hobby: req.body.hobby}).then(function () {
      req.flash("success", "user added successfully");
      res.redirect('/people');
    }).catch(function(error){
      req.flash("fail", "user has been added");
      res.redirect('/people');
    });
  } else {
    !req.body.name ? errors.push('enter yo name yo!') : null;
    !req.body.hobby ? errors.push('enter yo hobby yo!') : null;
    res.render('new', {messages: errors});
  }
});

router.get('/people', function(req, res, next) {
  Users().select().then(function(users) {
    res.render('people', {users: users});
  });
});
module.exports = router;
