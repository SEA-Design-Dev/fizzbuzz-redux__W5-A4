//Benton Green
module.exports = (function() { 

  function FizzBuzz(input1, input2){
    this.input1 = input1 || "Fizzy";
    this.input2 = input2 || "Buzzer";
  }
    
  FizzBuzz.prototype.input = function(startNum, endNum){
    this.startNum = startNum;
    this.endNum = endNum + 1; //added one to stopNum so that it would include ending number in list
    this.finalOutput = writeFizzBuzz(startNum,endNum,this.input1,this.input2);
  };

  FizzBuzz.prototype.output = function(){
    return this.finalOutput; 
  };

  this.writeFizzBuzz = function(startNum, endNum, input1, input2) {

    var outputArray = [];

    for(var x = this.startingNum; x < this.endingNum; x++) {
      if(x%3 === 0 && x%5 === 0){
        outputArray.push(x + " " + input1 + " " + input2);
      }
        else if(x%3 === 0){
          outputArray.push(x + " " + input1);  
        }
          else if(x%5 === 0){
            outputArray.push(x + " " + input2);
          }
          else{
            outputArray.push(x);
          }
    }
    return outputArray;
  };

  return FizzBuzz;

})();
