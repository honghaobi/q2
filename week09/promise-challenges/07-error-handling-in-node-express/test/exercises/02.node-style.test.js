var library = require('../../exercises/02-node-style');

describe("Handling errors with callbacks", function () {

  describe("#errorCallbacks", function () {

    it("calls the success callback when given a valid path", function () {
      var text, error;
      var successCallback = function (string) {
        text = string;
      }
      var failureCallback = function(err) {
        error = err
      };

      library.errorCallbacks('./README.md', successCallback, failureCallback);

      expect(text).to.contain('ALL THE ERRORS');
      expect(error).to.be.an('undefined');
    });

    it("calls the failure callback when given a path that does not exist", function () {
      var text, error;
      var successCallback = function (string) {
        text = string;
      }
      var failureCallback = function(err) {
        error = err
      };

      library.errorCallbacks('this path does not exist', successCallback, failureCallback);

      expect(error).to.be.an(Error);
      expect(error.message).to.eq("ENOENT");
      expect(text).to.be.an('undefined');
    });

  });

});
