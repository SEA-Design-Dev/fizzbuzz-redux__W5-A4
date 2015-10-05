var FizzBuz = (function(){

	var fizzBuzz = function () {};
	var arr = [];
	var str;

	fizzBuzz.prototype = {
		calculate: function(valueSml, valueLrg, wordOne, wordTwo) {
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
		write: function() {
			str = arr.toString();
			return str;
		}
	};
	return fizzBuzz;
}());

module.exports = FizzBuzz;