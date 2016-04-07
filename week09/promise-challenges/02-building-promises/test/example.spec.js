var chai           = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    should         = chai.should(),
    Example        = require('../src/example');
chai.use(chaiAsPromised);

describe('Example', function () {  
  describe('#simplePromise', function () {
    xit('returns OK when given true', function () {
      return Example.simplePromise(true).should.eventually.equal('OK');
    });

    xit('returns BAD when given false', function () {
      return Example.simplePromise(false).should.eventually.equal('BAD');
    });
  });

  describe('#add10Promise', function () {
    xit('adds 10 to the given number', function () {
      return Example.add10Promise(15).should.eventually.equal(25);
    });

    xit('adds 10 to 0 when no number is given', function () {
      return Example.add10Promise().should.eventually.equal(10);
    });
  });

  describe('#reject', function () {
    xit('rejects in a promise, returning whatever was given to it', function () {
      return Example.reject(10).should.be.rejectedWith(10);
    });
  });

  describe('#sum50', function () {
    xit('returns the number 50', function () {
      return Example.sum50().should.eventually.equal(50);
    });
  });
});