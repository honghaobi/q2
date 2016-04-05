# Example base app to add authentication to

We have some basic routes and views setup here, but nothing works yet!

Let's get our express app working first.

```bash
npm install
createdb form-based-auth
knex migrate:latest
```

Next, we need to get our session working properly. There's some code in the app for it, but we need to add our own personal secret keys to the .env file:

```bash
echo SESSION_KEY1=$(node -e "require('crypto').randomBytes(48, function(ex, buf) { console.log(buf.toString('hex')) });") >> .env
echo SESSION_KEY2=$(node -e "require('crypto').randomBytes(48, function(ex, buf) { console.log(buf.toString('hex')) });") >> .env
```

That's a whole bunch of node sorcery that just generates 2 strings of arbitrary characters and throws them into your .env file.

If you start `nodemon`, you'll see that we have routes setup for creating users and signing in, but creating doesn't work, and sign in doesn't seem to care what data we give it. We're going to need to add some functionality to our `users` model and to our routes to make all of this work properly.
