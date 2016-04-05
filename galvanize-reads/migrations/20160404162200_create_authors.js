exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', function (table) {
    table.increments('id').primary();
    table.string('full_name').unique().notNullable();
    table.text('biography');
    table.string('portrait_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors');
};
