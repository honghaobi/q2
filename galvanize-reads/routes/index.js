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

function getBooksByAuthor (authorId) {
  return Authors().select().first().where({id:authorId}).then(function(author){
    return Authors().join('author_book_relationship', 'authors.id', 'author_book_relationship.author_id').join('books', 'books.id', 'author_book_relationship.book_id').select().where({'authors.id': authorId}).then(function (booksByAuthor) {
      return {author, booksByAuthor} ;
    });
  });
};

function getAuthorsByBook (bookId) {
  return Books().select().first().where({id:bookId}).then(function(book){
    return Books().join('author_book_relationship', 'books.id', 'author_book_relationship.book_id').join('authors', 'authors.id', 'author_book_relationship.author_id').select().where({'books.id': bookId}).then(function (authorsByBook) {
      return {book, authorsByBook} ;
    });
  });
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/authors', function(req, res, next) {
  Authors().pluck('id').then(function (authorsIdArray) {
    var booksByAuthor = authorsIdArray.map(getBooksByAuthor);
    Promise.all(booksByAuthor).then(function(renderBooksByAuthor){
      res.render('authors', {renderBooksByAuthor});
    });
  });
});

router.get('/books', function(req, res, next) {
  Books().pluck('id').then(function (booksIdArray) {
    var authorsByBook = booksIdArray.map(getAuthorsByBook);
    Promise.all(authorsByBook).then(function(renderAuthorsByBook){
      res.render('books', {renderAuthorsByBook});
    });
  });
});

router.get('/books/:id', function(req, res, next) {
  Promise.resolve(getAuthorsByBook(req.params.id)).then(function(renderAuthorByBook){
    res.render('book', {renderAuthorByBook});
  });
});

router.get('/authors/:id', function(req, res, next) {
  Promise.resolve(getBooksByAuthor(req.params.id)).then(function(renderBookByAuthor){
    res.render('author', {renderBookByAuthor});
  });
});

router.get('/books/create', function(req, res, next) {

  res.render('create-book',{});
});

router.get('/authors/create', function(req, res, next) {

  res.render('create-author',{});
});

module.exports = router;
