# Intro - Bluebird

Having Promises natively supported is great! But more often than not you'll be working with a library to implement Promises. Libraries come with a ton of additional functions and features and are likely faster than ES6's Promises. We're going to use the [Bluebird](http://bluebirdjs.com/docs/why-bluebird.html) Promise library which works just like ES6's Promises. In fact, using it will be a simple copy and paste job!

Go to your `src/example.js` file and add the following line to the top of your file:

```javascript
var Promise = require('bluebird');
```

We're replacing the native Promise with Bluebird's Promise. Try running your tests now; everything should still pass!

How do you know we're doing anything different though? Try adding the following to the bottom of your `example.js`:

```javascript
new Promise(function(resolve, reject) {
  console.log('A promise.');
  throw 'Boom!';
});
```

Then run the file (e.g. `node src/example.js`) and take a look at the result. If you've required Bluebird, you should see something like:

```
A promise.
Unhandled rejection Boom!
```

Try commenting out the require statement for Bluebird and re-running the file. That `Unhandled rejection` will disappear. A nice feature of Bluebird is that it surfaces these errors to you; ES6 Promises won't do that.

* * *

##### Before moving on to the next section, answer the following:

1. What are some other promise libraries? Find at least 3.
1. You can handle the above thrown error with a `.catch()`; implement this on the above example so that the error logs the following message:
  
  ```
  Error during the promise chain: Boom!
  ```
1. Check out [Promise.method](http://bluebirdjs.com/docs/api/promise.method.html).
  * Rewrite `simplePromise()` using `Promise.method`.

[[Back](step-4.md)] - [[Continue](step-6.md)]