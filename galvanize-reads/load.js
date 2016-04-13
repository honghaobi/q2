var path = require('path');
var fs = require('fs');
var parse = require('csv-parse');
var knex = require('./db/knex');

function Authors(){ return knex('authors');}
function Books(){return knex('books');}
function ABR(){return knex('author_book_relationship');}

function load_books (data) {
  for (var i = 1; i < data.length; i++) {
    Books().insert({title:data[i][1], genre:data[i][2], description:data[i][3], cover:data[i][4]}).then(function(data){
    });
  }
}

function load_authors (data, index) {
  for (var i = 1; i < data.length; i++) {
  var fullName = data[i][5] + ' ' + data[i][6];
    Authors().insert({full_name:fullName, biography:data[i][7], portrait_url: data[i][8]}).then(function(data){
    });
  }

  Authors().insert({full_name: data[1][9] + ' ' + data[1][10], biography:data[1][11], portrait_url: data[1][12]}).then(function(data){
  });

  Authors().insert({full_name:data[1][13] + ' ' + data[1][14], biography:data[1][15], portrait_url: data[1][16]}).then(function(data){
  });
}

function load_author_book_relationship (data) {
  ABR_arr = [[1,1],[1,7],[1,8],[2,2],[3,3],[4,4],[5,4],[6,4]];

  for (var i = 0; i < ABR_arr.length; i++) {
    ABR().insert({book_id:ABR_arr[i][0], author_id:ABR_arr[i][1]}).then(function(data){
    });
  }
}

var parser = parse({delimiter: ','}, function(err, data){
  // Promise.resolve(load_books(data)).then(function(){
  //   Promise.resolve(load_authors(data)).then(function(){
  //     Promise.resolve(load_author_book_relationship(data));
  //   });
  // });
});

module.exports = function(){
  fs.createReadStream(__dirname+'/data/galvanize_reads_sample_data.csv').pipe(parser);
};
