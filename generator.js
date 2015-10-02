"use strict";

(function() {

  function _generateOutput(min, max, strings) {
    var string1 = strings[0] || "Fizz";
    var string2 = strings[1] || "Buzz";
    var outputArray = [];

    for(var i = min; i <= max; i++) {
      var output = "";

      if (i % 3 === 0) {
        output = string1;
      }
      if (i % 5 === 0) {
        output += string2;
      }
      if (!output) {
        output = i;
      }
      outputArray.push(output);
    }

    return outputArray;
  }

  module.exports = _generateOutput;

})();
