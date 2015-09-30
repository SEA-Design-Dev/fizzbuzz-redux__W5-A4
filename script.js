'use strict';

(function(){
	
	var string;
	
	var fizzBuzz = { 
		read: function(sml,lrg) {
			var arr = [];
			var outPut;

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
			string = arr.toString();
			console.log(outPut);
		},
		write: function() {
			document.getElementById("write").innerHTML = string;
		}
	};

	document.getElementById('submit').addEventListener("click", function(e){
		e.preventDefault();
		var valueSml = parseInt(document.getElementById('valueSml').value);
		var valueLrg = parseInt(document.getElementById('valueLrg').value);
		fizzBuzz.read.call(undefined, valueSml, valueLrg);
		fizzBuzz.write.call();
	});
}());