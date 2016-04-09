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

  var getBooksByAuthor = function(authorId) {
    return Authors().select().first().where({id:authorId}).then(function(author){
      return Authors().join('author_book_relationship', 'authors.id', 'author_book_relationship.author_id').join('books', 'books.id', 'author_book_relationship.book_id').select().where({'authors.id': authorId}).then(function (booksByAuthor) {
        return {author, booksByAuthor} ;
      });
    });
  };

  Authors().pluck('id').then(function (authorsIdArray) {
    var booksByAuthor = authorsIdArray.map(getBooksByAuthor);
    Promise.all(booksByAuthor).then(function(renderBooksByAuthor){
      res.render('authors', {renderBooksByAuthor});
    });
  });
});

router.get('/books', function(req, res, next) {

  var getAuthorsByBook = function(bookId) {
    return Books().select().first().where({id:bookId}).then(function(book){
      return Books().join('author_book_relationship', 'books.id', 'author_book_relationship.book_id').join('authors', 'authors.id', 'author_book_relationship.author_id').select().where({'books.id': bookId}).then(function (authorsByBook) {
        return {book, authorsByBook} ;
      });
    });
  };

  Books().pluck('id').then(function (booksIdArray) {
    var authorsByBook = booksIdArray.map(getAuthorsByBook);
    Promise.all(authorsByBook).then(function(renderAuthorsByBook){
      res.render('books', {renderAuthorsByBook});
    });
  });
});

module.exports = router;
