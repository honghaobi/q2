exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function (table) {
    table.increments('id').primary();
    table.string('title').unique().notNullable();
    table.string('genre');
    table.text('description');
    table.string('cover');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
