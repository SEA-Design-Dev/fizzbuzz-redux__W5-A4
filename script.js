'use strict';

(function(){
	var FizzBuz = (function(){

		var fizzBuzz = function () {};
		var arr = [];
		var str;
		var valueLrg;
		var valueSml;

		fizzBuzz.prototype = {
			read: function() {
				valueSml = parseInt(document.getElementById('valueSml').value);
				valueLrg = parseInt(document.getElementById('valueLrg').value);
			},
			calculate: function() {
				do {
					if (valueSml % 3 === 0 && valueSml % 5 === 0) {
						arr.push('FizzBuzz');
					} else if (valueSml % 3 === 0) {
						arr.push('Fizz');
					} else if (valueSml % 5 === 0) {
						arr.push('Buzz');
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

	document.getElementById('submit').addEventListener("click", function(e){
		e.preventDefault();
		var fb = new FizzBuz();
		fb.read();
		fb.calculate();		
		document.getElementById("write").innerHTML = fb.write();
	});
}());