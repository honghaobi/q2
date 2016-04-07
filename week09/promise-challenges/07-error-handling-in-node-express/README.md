# ALL THE ERRORS

Setup:

`cd` into this directory and run:

```
npm install
```

## Objectives

By the end of this challenge you should be able to:

- Handle all of the various kinds of errors JavaScript / Node can throw _without_ crashing your app

## Background

There are several kinds of errors you'll need to know how to work with:

### Pure JavaScript

- Throwing errors
- Catching errors

Resources:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

What you need to gain from that article:

- try / catch syntax
- finally and how it works

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

What you need to know from that:

- how to throw a string
- how to throw a new error object <-- this is going to be super important in future steps

### Node-specific errors

- Errors (from synchronous calls or unhandled event emitters)
- Node-style errors in callbacks
- Error Events (such as Event Emitters)

Resources:

https://nodejs.org/api/errors.html

What you need to gain from that:

- Node-style error arguments in callbacks
- EventEmitter ErrorEvents (`on('error', fn)`)
- (nice to have) `process.on('uncaughtException')`

- https://www.joyent.com/developers/node/design/errors

What to look for here:

- The overall concept of expected runtime errors vs developer errors

### Promise Errors

- Handling rejections
- Catching errors in `then` statements

Resources:

https://www.promisejs.org/

Look for:

- What `catch` does
- How standardized `catch` is
- How you would accomplish the same thing as `catch` just using `then`

Other resources:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
- http://blog.modulus.io/promise-errors-in-iojs

### Express Errors

Typically each framework, such as Express, has its own way of handling / propagating errors.

Resources:

http://expressjs.com/en/guide/error-handling.html

What to look for:

- How to handle errors with the `next` argument to routes

## Activity #1

Run through all the exercises in order.  Look at the comments inside each file for instructions.

```
node exercises/01-javascript-try-catch-throw.js
```

## Activity #2

Run the express app with `nodemon`.

Go to `routes/index.js` and run through each exercise.

In each exercise you know you are successful when you see a stack trace in the browser.
