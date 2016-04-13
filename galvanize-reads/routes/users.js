var express = require('express');
var router = express.Router();
var Users = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', function(req, res, next) {
  res.render('new');
});

router.post('/new/signup', function(req, res, next) {
  console.log('signup');
  Users.createUser(req.body, (err, data) => {
    res.send(data);
  });
});

router.post('/new/signin', function(req, res, next) {
  console.log('signin');
  Users.authenticateUser(req.body.user_email, req.body.password, (err, user) => {
    if (err) {
      res.redirect('/new');
    } else {
      req.session.user = user;
      res.redirect('/');
    }
  });
});

router.get('/signout', (req, res, next) => {
  req.session = null;
  res.redirect('/');
});

module.exports = router;
