var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/authors', function(req, res, next) {
  res.render('authors');
});

router.get('/books', function(req, res, next) {
  res.render('books');
});

module.exports = router;
