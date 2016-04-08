var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Authors() {
  return knex('authors');
}

function Books() {
  return knex('books');
}

function ABR() {
  return knex('author_book_relationship');
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/authors', function(req, res, next) {
  Authors().select().then(function (authors) {
    res.render('authors', {allAuthors: authors});
  });
});

router.get('/books', function(req, res, next) {
  Books().select().then(function (books) {
    res.render('books', {allBooks: books});
  });
});

module.exports = router;
