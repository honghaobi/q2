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

// router.get('/authors', function(req, res, next) {
//   Authors().join('author_book_relationship', 'authors.id', 'author_book_relationship.author_id').join('books', 'books.id', 'author_book_relationship.book_id').select().then(function (authors) {
//     res.render('authors', {authors});
//   });
// });

router.get('/authors', function(req, res, next) {

  var getBooksByAuthor = function(authorId) {
    return Authors().select().first().where({id:authorId}).then(function(author){
      return Authors().join('author_book_relationship', 'authors.id', 'author_book_relationship.author_id').join('books', 'books.id', 'author_book_relationship.book_id').select().where({'authors.id': authorId}).then(function (booksByAuthor) {
        return {author, booksByAuthor} ;
      });
    });
  };

    var uniqueAuthorIdArray = [];

    Authors().pluck('id').then(function (authorIdArray) {
      uniqueAuthorIdArray = authorIdArray;
      var booksByAuthor = authorIdArray.map(getBooksByAuthor);
      Promise.all(booksByAuthor).then(function(finalBooksByAuthor){
        console.log(finalBooksByAuthor);
        res.render('authors', {finalBooksByAuthor});
      });
    });
});

router.get('/books', function(req, res, next) {
  Books().join('author_book_relationship', 'books.id', 'author_book_relationship.book_id').join('authors', 'authors.id', 'author_book_relationship.author_id').select().then(function (books) {
    res.render('books', {books});
  });
});

module.exports = router;
