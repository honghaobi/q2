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
  Authors().pluck('id').then(function(authorsIdArray) {
    var booksByAuthor = authorsIdArray.map(getBooksByAuthor);
    Promise.all(booksByAuthor).then(function(renderBooksByAuthor){
      res.render('authors', {renderBooksByAuthor});
    });
  });
});

router.get('/books', function(req, res, next) {
  Books().pluck('id').then(function(booksIdArray) {
    var authorsByBook = booksIdArray.map(getAuthorsByBook);
    Promise.all(authorsByBook).then(function(renderAuthorsByBook){
      res.render('books', {renderAuthorsByBook});
    });
  });
});

router.get('/books/create', function(req, res, next) {
  Authors().select().then(function(authors) {
    res.render('createBook', {authors});
  });
});

router.post('/books/create', function(req, res, next) {
  Books().insert({title: req.body.title, genre: req.body.genre, description: req.body.description, cover: req.body.cover}).then(function(data){
    Books().select().first().where({title:req.body.title}).then(function(newbook){
      if (typeof(req.body.author)==='object') {
        for (var i = 0; i < req.body.author.length; i++) {
          ABR().insert({author_id: req.body.author[i], book_id: newbook.id}).then(function(data){
          });
        }
      } else{
        ABR().insert({author_id: req.body.author, book_id: newbook.id}).then(function(data){
        });
      }
      res.redirect('/books');
    });
  });
});

router.get('/authors/create', function(req, res, next) {
  Books().select().then(function(books) {
    res.render('createAuthor', {books});
  });
});

router.post('/authors/create', function(req, res, next) {
  console.log(req.body.book);
  Authors().insert({full_name: req.body.first_name + ' ' + req.body.last_name , portrait_url: req.body.portrait_url, biography: req.body.biography}).then(function(data){
    Authors().select().first().where({full_name: req.body.first_name + ' ' + req.body.last_name}).then(function(newAuthor){
      if (typeof(req.body.book)==='object') {
        for (var i = 0; i < req.body.book.length; i++) {
          ABR().insert({book_id: req.body.book[i], author_id: newAuthor.id}).then(function(data){
          });
        }
      } else{
        ABR().insert({book_id: req.body.book, author_id: newAuthor.id}).then(function(data){
        });
      }
      res.redirect('/authors');
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

module.exports = router;
