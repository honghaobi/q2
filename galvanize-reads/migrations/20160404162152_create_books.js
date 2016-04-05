exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function (table) {
    table.increments('id').primary();
    table.string('title');
    table.string('genre');
    table.string('description');
    table.string('cover');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
