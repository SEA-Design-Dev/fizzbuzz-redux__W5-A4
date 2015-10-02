module.exports = (function() {  
  // defining _FizzBuzz as a constructor function
  var _FizzBuzz = function(word1,word2) {
    this.word1 = word1 || 'Fizz';
    this.word2 = word2 || 'Buzz';
  }; 
  
  // PRIVATE function, not a method on _FizzBuzz
  // start and stop come from the INPUT function where doFizzBuzz is called
  function doFizzBuzz(start,stop,word1,word2) {  
    // array to store the results
    var resultArr = [];
    // for loop to generate results
    for (var i = start; i < stop + 1; i++) {
      if (i % 3 === 0 && i % 5 !== 0) {
        resultArr.push(word1); 
      } else if (i % 5 === 0 && i % 3 !== 0) {
        resultArr.push(word2); 
      } else if (i % 3 === 0 && i % 5 === 0) {
        resultArr.push(word1 + word2); 
      } else {
        resultArr.push(i); 
      }
    }
    // return the array so it can be assigned to this.result in INPUT
    return resultArr; 
  };
  
  _FizzBuzz.prototype.input = function(min,max) {
    this.min = min;
    this.max = max + 1;
    // pass values into doFizzBuzz
    this.result = doFizzBuzz(min,max,this.word1,this.word2);
    // error checking
    if (min >= max) {
      alert('Your stop value must be larger than your start value.');
    }
  };
  
  _FizzBuzz.prototype.output = function() { 
    return this.result;
  };
  return _FizzBuzz; 
})();
