module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/validate-users'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};
