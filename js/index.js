var FizzBuzz = (function () {

  'use strict';

  var _fizzBuzz = function (x, y) {
    this.wordOne = x || "Fizz";
    this.wordTwo = y || "Buzz";
  };

  _fizzBuzz.prototype = {

    input: function (min, max) {
      this.fizzArray = [];
      for (var i = min; i <= max; i++) {
        this.fizzArray.push(i % 15 === 0 ? this.wordOne + this.wordTwo : i % 3 === 0 ? this.wordOne : i % 5 === 0 ? this.wordTwo : i);
      }
      return this.fizzArray;
    },

    output: function () {
      return this.fizzArray;
    }
  };

  return _fizzBuzz;

}());

module.exports = FizzBuzz;
