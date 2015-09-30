var fizzBuzz = function() {
	
	var arr = [];
	var numb = 1;

	do {
		if (numb % 3 === 0 && numb % 5 === 0) {
			'FizzBuzz'.push(arr);
		} else if (numb % 3 === 0) {
			'Fizz'.push(arr);
		} else if (numb % 5 === 0) {
			'Buzz'.push(arr);
		} else {
			numb.push(arr);
		} numb ++;
	} while (numb < 100);
}

function newFizzBuzz() {
	document.getElementById('button').onclick = new fizzBuzz();
}