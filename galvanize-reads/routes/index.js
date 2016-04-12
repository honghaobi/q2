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
      return {author, booksByAuthor};
    });
  });
}

function getBooksByAuthorName (authorName) {
  return Authors().select().first().where({full_name:authorName}).then(function(author){
    return Authors().join('author_book_relationship', 'authors.id', 'author_book_relationship.author_id').join('books', 'books.id', 'author_book_relationship.book_id').select().where({full_name:authorName}).then(function (booksByAuthor) {
      return {author, booksByAuthor};
    });
  });
}

function getAuthorsByBook (bookId) {
  return Books().select().first().where({id:bookId}).then(function(book){
    return Books().join('author_book_relationship', 'books.id', 'author_book_relationship.book_id').join('authors', 'authors.id', 'author_book_relationship.author_id').select().where({'books.id':bookId}).then(function (authorsByBook) {
      return {book, authorsByBook};
    });
  });
}

function getAuthorsByBookTitle (bookTitle) {
  return Books().select().first().where({title:bookTitle}).then(function(book){
    return Books().join('author_book_relationship', 'books.id', 'author_book_relationship.book_id').join('authors', 'authors.id', 'author_book_relationship.author_id').select().where({title:bookTitle}).then(function (authorsByBook) {
      return {book, authorsByBook};
    });
  });
}

function getBooksGenre() {
  return Books().select('genre').groupBy('genre').then(function(genres){
    return genres;
  });
}

function getBooksCount(){
  return Books().count().then(function(count){
    return count;
  })
}

function getAuthorsCount(){
  return Authors().count().then(function(count){
    return count;
  })
}

function toTitleCase(str)
{
  return str.replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

/* GET home page. */

router.use(function(req, res, next) {
  Promise.resolve(getBooksGenre()).then(function(genres){
    res.locals.genres = genres;
  })

  Promise.resolve(getBooksCount()).then(function(bookCount){
    res.locals.bookCount = bookCount;
  })

  Promise.resolve(getAuthorsCount()).then(function(authorCount){
    res.locals.authorCount = authorCount;
  })
  next();
});

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/search', function(req, res, next) {
  if (req.body.searchBook) {
    Promise.resolve(getAuthorsByBookTitle(toTitleCase(req.body.searchBook))).then(function(renderAuthorByBook){
      res.redirect('/books/' + renderAuthorByBook.book.id);
    });
  } else if (req.body.searchAuthor) {

    Promise.resolve(getBooksByAuthorName(toTitleCase(req.body.searchAuthor))).then(function(renderBookByAuthor){
      res.redirect('/authors/' + renderBookByAuthor.author.id);
    });
  }
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

router.get('/books/:genre', function(req, res, next) {
  Books().pluck('id').where({genre:req.params.genre}).then(function(booksIdArray) {
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

router.get('/books/:id/edit', function(req, res, next) {
  Promise.resolve(getAuthorsByBook(req.params.id)).then(function(renderAuthorByBook){
    Authors().select().then(function(allAuthors){
      res.render('editBook', {renderAuthorByBook, allAuthors});
    });
  });
});

router.get('/authors/:id/edit', function(req, res, next) {
  Promise.resolve(getBooksByAuthor(req.params.id)).then(function(renderBookByAuthor){
    Books().select().then(function(allBooks){
      res.render('editAuthor', {renderBookByAuthor, allBooks});
    });
  });
});

router.post('/books/:id/edit', function(req, res, next) {
  Books().where({id:req.params.id}).update({title: req.body.title, genre: req.body.genre, description: req.body.description, cover: req.body.cover}).then(function(data){
    Books().select().first().where({id:req.params.id}).then(function(editbook){
      ABR().del().where({book_id: editbook.id}).then(function(){
        if (typeof(req.body.author)==='object') {
          for (var i = 0; i < req.body.author.length; i++) {
            ABR().insert({author_id: req.body.author[i], book_id: editbook.id}).then(function(data){
            });
          }
        } else{
          ABR().insert({author_id: req.body.author, book_id: editbook.id}).then(function(data){
          });
        }
        res.redirect('/books/' + req.params.id);
      });
    });
  });
});

router.post('/authors/:id/edit', function(req, res, next) {
  Authors().where({id:req.params.id}).update({full_name: req.body.full_name, portrait_url: req.body.portrait_url, biography: req.body.biography}).then(function(data){
    Authors().select().first().where({id:req.params.id}).then(function(editAuthor){
      ABR().del().where({author_id: editAuthor.id}).then(function(){
        if (typeof(req.body.book)==='object') {
          for (var i = 0; i < req.body.book.length; i++) {
            ABR().insert({book_id: req.body.book[i], author_id: editAuthor.id}).then(function(data){
            });
          }
        } else{
          ABR().insert({book_id: req.body.book, author_id: editAuthor.id}).then(function(data){
          });
        }
        res.redirect('/authors/' + req.params.id);
      });
    });
  });
});

router.get('/books/:id/delete', function(req, res, next) {
  Books().del().where({id:req.params.id}).then(function(){
    res.redirect('/books');
  });
});

router.get('/authors/:id/delete', function(req, res, next) {
  Authors().del().where({id:req.params.id}).then(function(){
    res.redirect('/authors');
  });
});


module.exports = router;
