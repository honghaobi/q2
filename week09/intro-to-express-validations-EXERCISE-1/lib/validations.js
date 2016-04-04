module.exports = {
  nameIsNotBlank: function (input) {
    return !input.trim() ? 'Name cannot be blank' : '';
  },
  emailIsValid: function (input) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(input) ? 'Email is invalid' : '';
  },
  phoneIsValid: function (input) {
    var re = /\d{3}\-*\d{3}\-*\d{4}/;
    return !re.test(input) ? 'Phone number is invalid' : '';
  }
}
