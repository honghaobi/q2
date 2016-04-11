var express = require('express');
var router = express.Router();

function userLoggedIn(req, res, next) {
  if (req.cookies.user) {
    next();
  } else {
    res.redirect('/login');
  }
}

router.get('/', userLoggedIn, function(req, res, next) {
  res.render('articles/index', {title: 'All Articles'})
});

router.get('/recent', userLoggedIn, function(req, res, next) {
  res.render('articles/index', {title: 'Recent Articles'})
});

router.get('/most-popular', userLoggedIn, function(req, res, next) {
  res.render('articles/index', {title: 'Most Popular Articles'})
});

module.exports = router;
