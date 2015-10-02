"use strict";

(function() {

  var _stringsArray = [];
  var _outputArray;

  var FizzBuzz = function(string1, string2) {
    _stringsArray.push(string1, string2);
  }

  FizzBuzz.prototype = {
    input: function(min, max) {
      _outputArray = _generateOutput(min, max, _stringsArray);
    },
    output: function() {
      return _outputArray;
    }
  }

  module.exports = FizzBuzz;

})();
