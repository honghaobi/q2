
exports.up = function(knex, Promise) {
  return knex.schema.createTable('memberships', function (table) {
    table.increments();
    table.integer('meetup_id').references('meetups.id');
    table.integer('user_id').references('users.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('memberships');
};
