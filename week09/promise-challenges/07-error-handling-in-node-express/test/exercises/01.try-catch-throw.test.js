var library = require('../../exercises/01-try-catch-throw');

describe("Catching and throwing error messages", function () {

  describe("#catchThisError", function () {

    it("returns the file text if the file exists", function () {
      expect(library.catchThisError('./README.md')).to.contain('ALL THE ERRORS');
    });

    it("returns 'doh!' if the file does not exist", function () {
      expect(library.catchThisError('some path that does not exist')).to.equal("doh!");
    });

  });

  describe("#catchAndThrowString", function () {

    it("returns the file text if the file exists", function () {
      expect(library.catchAndThrowString('./README.md')).to.contain('ALL THE ERRORS');
    });

    it("throws and string error 'doh!' if the file does not exist", function () {
      var fn = library.catchAndThrowString.bind({}, 'some path that does not exist');
      expect(fn).to.throw('doh!');
      expect(fn).to.not.throw(Error);
    });

  });

  describe("#catchAndThrowError", function () {

    it("returns the file text if the file exists", function () {
      expect(library.catchAndThrowError('./README.md')).to.contain('ALL THE ERRORS');
    });

    it("throws an error object with 'doh!' if the file does not exist", function () {
      var fn = library.catchAndThrowError.bind({}, 'some path that does not exist');
      expect(fn).to.throw(Error).and.throw('doh!');
    });

  });

});
