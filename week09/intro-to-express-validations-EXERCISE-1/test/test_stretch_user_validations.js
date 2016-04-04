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
    it('should not be just @ symbol', function (done) {
      assert.equal(validate.emailIsValid('@'), 'Email is invalid')
      assert.equal(validate.emailIsValid('me@me.it'), '')
      done();
    });
    it('should have text before @ symbol', function (done) {
      assert.equal(validate.emailIsValid('@i.com'), 'Email is invalid')
      assert.equal(validate.emailIsValid('you@i.it'), '')
      done();
    });
    it('should have valid text after @ symbol', function (done) {
      assert.equal(validate.emailIsValid('hello@'), 'Email is invalid')
      assert.equal(validate.emailIsValid('@i.c'), 'Email is invalid')
      assert.equal(validate.emailIsValid('me@me.com'), '')
      done();
    });
    describe('Phone Number is Valid', function () {
      it('should not be blank', function (done) {
        validate.phoneIsValid.should.be.a('function');
        assert.equal(validate.phoneIsValid('  '), 'Phone number is invalid');
        done();
      });
      it('should have enough digits', function (done) {
        validate.phoneIsValid.should.be.a('function');
        assert.equal(validate.phoneIsValid('123555234'), 'Phone number is invalid');
        assert.equal(validate.phoneIsValid('1235552345'), '');
        done();
      });
      it('should accept dashes in input', function (done) {
        validate.phoneIsValid.should.be.a('function');
        assert.equal(validate.phoneIsValid('123-555-2345'), '');
        done();
      });
    });
  });
});
