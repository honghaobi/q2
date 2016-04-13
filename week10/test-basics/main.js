module.exports = {
  helloWorld: (done) => {
    return 'Hello, World!';
  },

  leapYear: (year) => {
    // if (year % 100 === 0 && year % 400 !== 0 ){
    //   return false;
    // } else if (year % 4 === 0) {
    //   return true;
    // }

    return year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0) ? true : false
  },

  calculate: (money) => {
    if (money <= 10) {
      return money*.1;
    } else if (money > 10 && money <= 20) {
      return 1 + (money - 10) * .07;
    } else if (money > 20 && money <= 30) {
      return 1 + .7 + (money - 20) * .05
    } else if (money > 30) {
      return 1 + .7 + .5 + (money - 30 ) * .03
    }
  }

}
