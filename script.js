//(function(){
	var fizzBuzz = { 
		read: function(sml,lrg) {
			var arr = [];
			var numb = sml;
			var outPut;

			do {
				if (numb % 3 === 0 && numb % 5 === 0) {
					arr.push('FizzBuzz');
				} else if (numb % 3 === 0) {
					arr.push('Fizz');
				} else if (numb % 5 === 0) {
					arr.push('Buzz');
				} else {
					arr.push(numb);
				} numb ++;
			} while (numb < lrg);
			outPut = arr.toString();
			return outPut
			console.log(outPut);
		},
		write: function() {
			document.body.innerHTML = fizzBuzz.string.outPut; 
		}
	};

	document.getElementById('submit').addEventListener("click", function(e){

		e.preventDefault();
		var valueSml = parseInt(document.getElementById('valueSml').value);
		var valueLrg = parseInt(document.getElementById('valueLrg').value);
		fizzBuzz.read.call(undefined, valueSml, valueLrg);
		fizzBuzz.write.call('undefined');

});
//}());