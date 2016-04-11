module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/form-based-auth'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
};
