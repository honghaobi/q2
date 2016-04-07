# Intro - Visualizing

After the last step, you should have gotten something like the following:

```javascript
function simplePromise (bool) {
  return new Promise(function (resolve, reject) {
    bool ? resolve('OK') : reject('BAD');
  }).catch(function (result) {
    return result;
  });
};
```

Remember, the test has its own `.then()` statement that evaluates the result. In the case of a resolve, the Promise chain will skip the `.catch()` in `simplePromise()` and go straight to the test's `.then()` statement. In the case of a reject, the Promise chain will go to the `.catch()` first, and then go to the `.then()` inside of the test.

To visualize this process, check out this Promises visualizer, [Promisees](http://bevacqua.github.io/promisees/). Copy the following code into the editor:

```javascript
new Promise(function (resolve, reject) {
    // resolve('OK');
    // reject('BAD');
  }).catch(function (result) {
    return result;
  }).then(function (result) {
    console.log(result);
  });
```

In the editor, you should see each part of the Promise.

First, try un-commenting `reject('BAD')`. You should see that the initial Promise was rejected and both the `.catch()` and `.then()` were fulfilled. Now, switch it so that only the resolve statement runs. You should see the `.catch()` part of the chain disappear completely! You can also use the ◀ and ▶ tools on the right-hand side to slowly walk your way through the Promise chain.

* * *

##### Before moving on to the next section, answer the following:

1. Refresh the page and take a look at the Basic example on the front-page. Slowly walk your way through the chain using the ◀ and ▶ tools.
  * Why does the one `.then()` statement fail?
1. Try adding more `.then()` and `.catch()` statements until you feel comfortable understanding how each method is working.

[[Back](step-2.md)] - [[Continue](step-4.md)]