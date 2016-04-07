// var myNum = 10;
// var promise = new Promise(function (resolve,reject) {
//   if (myNum % 2 === 0) {
//     resolve('even');
//   } else {
//     reject('odd');
//   }
// });
//
// console.log(promise);
// // Promise {'even'}


var add10 = function(num) {
  return new Promise(function (resolve,reject) {
    resolve(num + 10);
  });
};

var times2 = function(num) {
  return new Promise(function (resolve,reject) {
    resolve(num * 2);
  });
};

var math = function(num) {
  return add10(num).then(function(num){
    return add10(num);
  }).then(function(num){
    return add10(num);
  }).then(function(num){
    return add10(num);
  }).then(function(num){
    return times2(num);
  });
};

math(0).then(function(ans){
  console.log(ans);
});



// console.log(evenPromise(6));

// console.log(evenPromise(10).then(function(val) {
//   console.log(val);
// }));
// console.log(evenPromise(13));
//
// evenPromise(10).then(function(val) {
//   console.log(val);
// });
