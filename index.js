var FizzBuzz = (function () {
  var aVal, zVal;

  var _fizzbuzz = function(newString1, newString2) {
    this.newString1 = newString1 || "Fizz";
    this.newString2 = newString2 || "Buzz";
  };

  _fizzbuzz.prototype = {
    input: function (aVal, zVal) {
      this.result =[];
      for ( aVal ; aVal <= zVal; aVal ++) {
        if (aVal % 5 === 0 && aVal % 3 === 0) {
          this.result.push(this.newString1+this.newString2)
        } else if ( aVal % 3 === 0) {
          this.result.push(this.newString1);
        } else if (aVal % 5 === 0) {
          this.result.push(this.newString2);
        } else {
          this.result.push(aVal);
        }
      }
      return this.result;
      },
    output: function(){
      return this.result;
    }
  }

  return _fizzbuzz;

}());

module.exports = FizzBuzz;


