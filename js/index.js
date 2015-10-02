var FizzBuzz = (function () {

  'use strict';

  var _fizzBuzz = function (x, y) {
    this.wordOne = x || "Fizz";
    this.wordTwo = y || "Buzz";
  };

  var makeArray = function (min, max, fizz, buzz, array) {
    for (var i = min; i <= max; i++) {
        array.push(i % 15 === 0 ? fizz + buzz : i % 3 === 0 ? fizz : i % 5 === 0 ? buzz : i);
      }
    return array;
  };

  _fizzBuzz.prototype = {

    input: function (min, max) {
      this.fizzArray = [];
      makeArray(min, max, this.wordOne, this.wordTwo, this.fizzArray);
    },

    output: function () {
      return this.fizzArray;
    }
  };

  return _fizzBuzz;

}());

module.exports = FizzBuzz;
