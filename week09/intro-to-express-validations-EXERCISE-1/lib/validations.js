module.exports = {
  nameIsNotBlank: function (input) {
    return !input.trim() ? 'Name cannot be blank' : '';
  }
}
