var express = require('express');
var router = express.Router();

function userLoggedIn(req, res, next) {
  if (req.cookies.user) {
    next();
  } else {
    res.redirect('/');
  }
}

function userVerification(req, res, next) {
  if (req.cookies.user == req.params.username) {
    next();
  } else {
    res.redirect('/');
  }
}

router.get('/', userLoggedIn, function(req, res, next) {
  res.render('users/index')
});

router.get('/:username', userVerification, function(req, res, next) {
  res.render('users/show', {username: req.params.username})

});

router.get('/:someUser/edit', userVerification, function(req, res, next) {
  res.render('users/edit', {user: req.params.someUser})
});

router.get('/:user/profile', userVerification, function(req, res, next) {
  res.render('users/profile', {profileUser: req.params.user})
});

module.exports = router;
