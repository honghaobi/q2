# Intro - Chaining & Errors

Now that we better understand how Promises chain together, let's work through our own example. Go to your `spec/example.spec.js` file and remove the 'x' from the remaining tests. Let's get all of these to pass!

We're going to create four new functions:

* __add10Promise__: This function should take a single argument (a number) and return a Promise that returns that argument + 10. If it's given no number, the argument should default to 0.
* __reject__: This function should take a single argument (a number) and return a Promise that only rejects. It should reject with the same number it was given.
* __sum50__: This function will take no arguments but will return a chain of Promises using the above `add10Promise()` function.

* * *

##### Before moving on to the next section, answer the following:

1. Get all of the tests to pass inside of `src/example.spec.js`. 
1. Inside of the `sum50` function, add a `.then(reject)` to the middle of the chain and re-run the tests.
  * If you get an `Error: Timeout` issue, that's likely because there's no `.catch()` case. Add one so that you still return a number.
  * If you receive an error like this, great job! `Failures ... Expected 30 to equal 50.` Keep the `.then(reject)` call where it is and still get the test to pass by adding more to the chain.

[[Back](step-3.md)] - [[Continue](step-5.md)]