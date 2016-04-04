var chai = require('chai');
var assert = require('assert');
var should = chai.should();
var validate = require('../lib/validations');

describe('User Validations', function () {
  describe('Name is Valid', function() {
    it('Name cannot be blank', function (done) {
      validate.nameIsNotBlank.should.be.a('function');
      assert.equal(validate.nameIsNotBlank('   '), 'Name cannot be blank');
      assert.equal(validate.nameIsNotBlank('George Orwell'), '');
      done();
    });
  });
  describe('Email is Valid', function () {
    it('should not be blank', function (done) {
      validate.emailIsValid.should.be.a('function');
      assert.equal(validate.emailIsValid('    '), 'Email is invalid')
      assert.equal(validate.emailIsValid('me@me.com'), '')
      done();
    });
  });
  describe('Phone Number is Valid', function () {
    it('should not be blank', function (done) {
      validate.phoneIsValid.should.be.a('function');
      assert.equal(validate.phoneIsValid('  '), 'Phone number is invalid');
      done();
    });
  });
});
