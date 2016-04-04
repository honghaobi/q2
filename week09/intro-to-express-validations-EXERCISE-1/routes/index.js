var express = require('express');
var router = express.Router();
var validate = require('../lib/validations.js');


router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next) {
  var errors = [];
  if (!req.body.name) {
    errors.push(validate.nameIsNotBlank(req.body.name));
  }
  if (!req.body.email) {
    errors.push(validate.emailIsValid(req.body.email));
  }
  if (!req.body.phone) {
    errors.push(validate.phoneIsValid(req.body.phone));
  }
  res.render('index', {messages: errors});
});


module.exports = router;
