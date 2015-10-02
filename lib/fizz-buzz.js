'use strict';

var FizzBuzz = (function(){

	var fizzBuzz = function () {};
	var arr = [];
	var str;
	var valueLrg;
	var valueSml;
	var wordOne;
	var wordTwo;

	fizzBuzz.prototype = {
		input: function(valueSml, valueLrg, wordOne, wordTwo) {
			valueSml = valueSml;
			valueLrg = valueLrg;
			wordOne = wordOne;
			wordTwo = wordTwo;
		},
		calculate: function() {
			do {
				if (valueSml % 3 === 0 && valueSml % 5 === 0) {
					arr.push(wordOne + wordTwo);
				} else if (valueSml % 3 === 0) {
					arr.push(wordOne);
				} else if (valueSml % 5 === 0) {
					arr.push(wordTwo);
				} else {
					arr.push(valueSml);
				} valueSml ++;
			} while (valueSml <= valueLrg);
		},
		output: function() {
			str = arr.toString();
			console.log(str);
			return str;
		}
	};
	return fizzBuzz;
}());

function fizzBuzzCall(valueSml, valueLrg, wordOne, wordTwo){

	var fb = new FizzBuz();
	fb.input(valueSml, valueLrg, wordOne, wordTwo);
	fb.calculate();	
	fb.output();

};

module.exports = FizzBuzz