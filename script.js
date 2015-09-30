'use strict';

(function(){
	var outPut;
	var arr = [];
	var string;
	var valueLrg;
	var valueSml;
	
	var fizzBuzz = {
		read: function() {
			valueSml = parseInt(document.getElementById('valueSml').value);
			valueLrg = parseInt(document.getElementById('valueLrg').value);
		},
		calculate: function(sml,lrg) {
			do {
				if (sml % 3 === 0 && sml % 5 === 0) {
					arr.push('FizzBuzz');
				} else if (sml % 3 === 0) {
					arr.push('Fizz');
				} else if (sml % 5 === 0) {
					arr.push('Buzz');
				} else {
					arr.push(sml);
				} sml ++;
			} while (sml <= lrg);
		},
		write: function() {
			string = arr.toString();
			document.getElementById("write").innerHTML = string;
		}
	};

	document.getElementById('submit').addEventListener("click", function(e){
		e.preventDefault();
		fizzBuzz.read.call();
		fizzBuzz.calculate.call(undefined, valueSml, valueLrg);
		fizzBuzz.write.call();
	});
}());