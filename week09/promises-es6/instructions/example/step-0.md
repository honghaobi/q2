# Intro - Basics

> The Promise object is used for deferred and asynchronous computations. A Promise represents an operation that hasn't completed yet, but is expected in the future.

> [Mozilla - Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Promises, at their most basic level, allow us to chain functions together. While we typically want to use Promises to block asynchronicity, we can just chain functions together to build up a context. It's a bit easier to understand what's happening with Promises if we do this, so let's try building some really simple Promise examples to understand the syntax and generally how they work.

First, let's learn how to instantiate a new Promise:

```javascript
new Promise(executor);
new Promise(function (resolve, reject) {
  // code that includes a 'resolve' and a 'reject'
});
```

As mentioned in the Mozilla Docs, promises come with an `executor` function which have two arguments:

> Function object with two arguments resolve and reject. The first argument fulfills the promise, the second argument rejects it. We can call these functions once our operation is completed.

These two arguments are functions which tell the promise how it should branch and allow you to return different values. For example, let's have a promise simply check to see if a number is odd or not. Open up a node repl and paste in the following code.

```javascript
var myNum = 10;
var promise = new Promise(function (resolve, reject) {
  if ( myNum % 2 === 0 ) {
    resolve('even');
  } else {
    reject('odd');
  }
});

promise;
```

* * *

##### Before moving on to the next section, answer the following:

1. What type of object is the output? What's the inner value?
1. If you change myNum, the promise doesn't change. Why is that?

[[Continue](step-1.md)]