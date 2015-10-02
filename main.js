
function onButtonClick () {
	var start = parseInt(document.getElementById("start-input").value);
	var end = parseInt(document.getElementById("end-input").value);
	
	document.getElementById("start").innerHTML = "Start: " + start;
	document.getElementById("end").innerHTML = "End: " + end;

	var fizz = new FizzBuzz("fizz","buzz");
	fizz.input(start,end);

	fizz.output(document.getElementById("output"));
}
