# Middleware example

Setting up this application:

```bash
npm install
createdb form-based-auth
touch .env
knex migrate:latest
knex seed:run
nodemon
```

This should create a functional form-based authentication app that we can set up authorization for.

Our 3 seeded users emails are `user1@test.com`, `user2@test.com`, and `user3@test.com`. The associated passwords are simply `user1`, `user2`, and `user3`, respectively. Feel free to create your own user if you prefer.
