var path = require('path');
var fs = require('fs');
var parse = require('csv-parse');
var knex = require('./db/knex');

function Authors() {
  return knex('authors');
}

function Books() {
  return knex('books');
}

function ABR() {
  return knex('author_book_relationship');
}

function load_books (data) {
  console.log('loading books');
  for (var i = 1; i < data.length; i++) {
    Books().insert({title:data[i][1], genre:data[i][2], description:data[i][3], cover:data[i][4]}).then(function(data){
      console.log('book loaded');
    }).catch(function(error){
      console.log(error);
    });
  }
}

function load_authors (data, index) {
  console.log('loading authors');
  for (var i = 1; i < data.length; i++) {

    var fullName = data[i][5] + ' ' + data[i][6];
    Authors().insert({full_name:fullName, biography:data[i][7], portrait_url: data[i][8]}).then(function(data){
      console.log('author loaded');
    }).catch(function(error){
      console.log(error);
    });

  }

  var fullName2 = data[1][9] + ' ' + data[1][10];
  Authors().insert({full_name:fullName2, biography:data[1][11], portrait_url: data[1][12]}).then(function(data){
    console.log('author loaded');
  }).catch(function(error){
    console.log(error);
  });

  var fullName3 = data[1][13] + ' ' + data[1][14];
  Authors().insert({full_name:fullName3, biography:data[1][15], portrait_url: data[1][16]}).then(function(data){
    console.log('author loaded');
  }).catch(function(error){
    console.log(error);
  });
}

function load_author_book_relationship (data) {
  console.log('load_author_book_relationship');
  // ABR().insert({book_id:1, author_id:1}).then(function(data){
  //   console.log('relationship loaded');
  // });
  // ABR().insert({book_id:1, author_id:7}).then(function(data){
  //   console.log('relationship loaded');
  // });
  // ABR().insert({book_id:1, author_id:8}).then(function(data){
  //   console.log('relationship loaded');
  // });
  // ABR().insert({book_id:2, author_id:2}).then(function(data){
  //   console.log('relationship loaded');
  // });
  // ABR().insert({book_id:3, author_id:3}).then(function(data){
  //   console.log('relationship loaded');
  // });
  // ABR().insert({book_id:4, author_id:4}).then(function(data){
  //   console.log('relationship loaded');
  // });
  // ABR().insert({book_id:5, author_id:4}).then(function(data){
  //   console.log('relationship loaded');
  // });
  // ABR().insert({book_id:6, author_id:4}).then(function(data){
  //   console.log('relationship loaded');
  // });
}

var parser = parse({delimiter: ','}, function(err, data){
  load_books(data);
  load_authors(data);
  load_author_book_relationship(data);
});

module.exports = function(){
  fs.createReadStream(__dirname+'/data/galvanize_reads_sample_data.csv').pipe(parser);
};
