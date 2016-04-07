// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/knex-associations-development'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/knex-associations-test'
  }

};
