var FizzBuzz = require('./index.js');

var buzzer = new FizzBuzz("fizzyizzy", "buzzyzy"); // Should accept string arguments that replace 'Fizz' and 'Buzz'
buzzer.input(1, 160);

console.log(buzzer.output());
