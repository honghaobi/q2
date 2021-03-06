
exports.up = function(knex, Promise) {
  return knex.schema.createTable('meetups', function (table) {
    table.increments();
    table.string('name');
    table.text('description');
    table.integer('location_id').references('locations.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('meetups');
};
