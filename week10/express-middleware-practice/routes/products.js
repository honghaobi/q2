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
  res.render('products/index', {title: 'All products'})
});

router.get('/popular', userLoggedIn, function(req, res, next) {
  res.render('products/index', {title: 'Popular Products'})
});

router.get('/on-sale', userLoggedIn, function(req, res, next) {
  res.render('products/index', {title: 'Products on sale'})
});

module.exports = router;
