var knex = require('../lib/knex');

module.exports = function () {
  return Promise.all([
    knex('users'),
    knex('meetups'),
    knex('locations'),
  ])
}
