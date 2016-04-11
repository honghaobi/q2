var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('articles/index', {title: 'All Articles'})
});

router.get('/recent', function(req, res, next) {
  res.render('articles/index', {title: 'Recent Articles'})
});

router.get('/most-popular', function(req, res, next) {
  res.render('articles/index', {title: 'Most Popular Articles'})
});

module.exports = router;
