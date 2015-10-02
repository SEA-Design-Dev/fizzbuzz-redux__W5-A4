
var Fizzbuzz = (function () {
  var answer = [];

  var _fizzbuzz = function(word1, word2) {
    this.word1 = word1;
    this.word2 = word2;
  };

  var doFizzBuzz = function(start, end, word1, word2) {
    for (start; start <= end; start++) {
      if ((start % 3 === 0) && (start % 5 === 0)) {
        answer.push(word1 + word2);
      } else if (start % 3 === 0) {
        answer.push(word1);
      } else if (start % 5 === 0) {
        answer.push(word2);
      } else {
        answer.push(start);
      }
    }
  };

  _fizzbuzz.prototype = {

    input: function(min, max) {
      this.min = min;
      this.max = max;
      this.result = doFizzBuzz(min, max, this.word1, this.word2);
    },

    output: function() {
      return answer;
    }
  };

  return _fizzbuzz;
})();

module.exports = Fizzbuzz

