var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('products/index', {title: 'All products'})
});

router.get('/popular', function(req, res, next) {
  res.render('products/index', {title: 'Popular Products'})
});

router.get('/on-sale', function(req, res, next) {
  res.render('products/index', {title: 'Products on sale'})
});

module.exports = router;
