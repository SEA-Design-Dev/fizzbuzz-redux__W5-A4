'use strict';

var FizzBuzz = (function() { // IIFE

  var Fizzbuzz = function(newFizz, newBuzz) { // the constructor!
    this.result = [];
    this.newFizz = newFizz || "Fizz";
    this.newBuzz = newBuzz || "Buzz";
  };

  Fizzbuzz.prototype.input = function(min, max) {
    for (var i = min; i <= max; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        this.result.push(this.newFizz + this.newBuzz);
      }
      else if (i % 5 === 0) {
        this.result.push(this.newBuzz);
      }
      else if (i % 3 === 0) {
        this.result.push(this.newFizz);
      }
      else {
        this.result.push(i);
      }
    }
  };

  Fizzbuzz.prototype.output = function() {
    return this.result;
  };
  return Fizzbuzz;
}());

module.exports = FizzBuzz;
