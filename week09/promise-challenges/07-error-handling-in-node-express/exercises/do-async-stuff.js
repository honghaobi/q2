// this is a simple utility function for this exercise
// call doAsyncStuff('reject') to guarantee a rejection
// call doAsyncStuff('error') to make it throw an error
// call doAsyncStuff() to make it resolve
module.exports = function doAsyncStuff(howToFail) {
  if (howToFail === 'reject') {
    return Promise.reject("doh!");
  } else if (howToFail === 'error') {
    throw "Somethign bad happened";
  } else {
    return Promise.resolve("happy");
  }
}
