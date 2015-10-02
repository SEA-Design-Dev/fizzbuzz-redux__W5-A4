(function() {
  var myFizzy = new FizzBuzz("front", "end");
  var button = document.getElementById("submitBuzz");

  button.addEventListener("click", function (e) {
    e.preventDefault();

    var min = parseInt(document.getElementById("first-value").value);
    var max = parseInt(document.getElementById("second-value").value);
    var fizzBuzzList = document.getElementById("fizz-list");

    myFizzy.input(min, max);

    if (!document.getElementById("check-box").checked) { // If the check-box is checked,
      while (fizzBuzzList.hasChildNodes()) { // Remove all child nodes from elementID
        fizzBuzzList.removeChild(fizzBuzzList.firstChild);
      }
    }

    if (isNaN(min) || isNaN(max)) { // Throw up an alert if there isn't one or both values
      alert("Please enter a number");
    } else if (min >= max) {
      alert("First value must be less than the second");
    } else {
      myFizzy.output(fizzBuzzList);
    }
  });
})();
