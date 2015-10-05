var FizzBuzz = require('./lib/fizz-buzz.js');

(function(){
	document.getElementById('submit').addEventListener("click", function(e){
		e.preventDefault();
		var fb = new FizzBuz();
		var valueLrg;
		var valueSml;
		var wordOne;
		var wordTwo;
		valueSml = parseInt(document.getElementById('valueSml').value);
		valueLrg = parseInt(document.getElementById('valueLrg').value);
		wordOne = document.getElementById('wordOne').value;
		wordTwo = document.getElementById('wordTwo').value;
		fb.calculate(valueSml, valueLrg, wordOne, wordTwo);		
		document.getElementById("write").innerHTML = fb.write();
	});
}());