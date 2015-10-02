var FizzBuzz = (function () {
  var aVal, zVal

  var _fizzbuzz = function(newString1, newString2) {
    this.newString1 = newString1 || "Fuzz";
    this.newString2 = newString2 || "Bizz";
  };

  var calculate = function(aVal, zVal, newString1, newString2){
  var myArray =[];
    for ( aVal ; aVal <= zVal; aVal ++) {
      if (aVal % 5 === 0 && aVal % 3 === 0) {
        myArray.push(newString1+newString2)
      } else if ( aVal % 3 === 0) {
        myArray.push(newString1);
      } else if (aVal % 5 === 0) {
        myArray.push(newString2);
      } else {
        myArray.push(aVal);
      }
    }
    return myArray;
  };


  _fizzbuzz.prototype = {
    input: function (aVal, zVal) {
      this.result = calculate(aVal, zVal, this.newString1, this.newString2);
      },
    output: function(){
      console.log(this.result);
    }
  }

  return _fizzbuzz;

}());
