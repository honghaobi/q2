var knex = require('./db/knex');

//SELECTING/READING

// knex('movies').select(['title','description']).then(function(data) {
//   console.log(data);
//   process.exit(1);
// });

// knex('movies').select().where({title: 'Cars'}).orWhere({title: 'Gigli'}).then(function(data) {
//   console.log(data);
//   process.exit(1);
// });

// knex('movies').select().orderBy('rating', 'desc').then(function(data) {
//   console.log(data);
//   process.exit(1);
// });

// knex('movies').select().orderBy('rating', 'desc').limit(5).then(function(data){
//   console.log(data);
//   process.exit(1);
// });

// QUERY EXERCISES

// knex('movies').select(['title','description', 'rating']).where({rating: 1}).then(function(data){
//   console.log(data);
//   process.exit(1);
// });

// knex('movies').select().where({title: 'Gigli'}).orWhere({title: 'Mad Max: Fury Road'}).then(function(data){
//   console.log(data);
//   process.exit(1);
// });

// knex('movies').select(['id','title']).orderBy('id','desc').limit(5).then(function(data){
//   console.log(data);
//   process.exit(1);
// });

// knex('movies').select().where('rating', '>=', 4).where('rating', '<=', 7).then(function(data){
//   console.log(data);
//   process.exit(1);
// });

// UPDATING

// knex('movies').where({title: 'Gigli'}).update({rating: 10}).then(function() {
//   knex('movies').select().where({title: 'Gigli'}).then(function(data) {
//     console.log(data);
//     process.exit(1);
//   });
// });

// **Another way to write the update (at least with PostgreSQL, this won't work for some other relational databases) is to also pass a returning argument in addition to the data being updated.** shown below:

// knex('movies').where({title: 'Gigli'}).update({rating: 2}, '*').then(function(data) {
//   console.log(data);
//   process.exit(1);
// });


//DELETING

// knex('movies').where({title: 'Gigli'}).del().then(function(){
//   knex('movies').select().where({title: 'Gigli'}).then(function(data){
//     console.log(data);
//     process.exit(1);
//   });
// });

//INSERTING

// knex('movies').insert({title: 'Gigli', description: 'Best movie evar', rating: 10}, '*').then(function(data){
//   console.log(data);
//   process.exit(1);
// });
