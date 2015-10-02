# Alina's FizzBuzz Calculator
### Code Fellows Front-End DA Assignment: fizzbuzz-redux__W5-A4

FizzBuzz object with input and output methods. FizzBuzz object can accept two new strings as arguments to replace the words "Fizz" and "Buzz". The input method accepts two arguments of "min" and "max" for the range to be calculated. The output method returns an array.

GitHub: [Alina's FizzBuzz Calculator](https://github.com/toalina/fizzbuzz-redux__W5-A4)

npm module: [Alina's FizzBuzz Calculator](https://www.npmjs.com/package/sea-d44-fizz-buzz-at) is published to the npm registry. Module exposes a function using the CommonJS "module.exports" construct.

Download by: ``` npm install sea-d44-fizz-buzz-at ```

To use: (Example)

```
var FizzBuzz = require('sea-d44-fizz-buzz-at');

var buzzer = new FizzBuzz(); // Should accept string arguments that replace 'Fizz' and 'Buzz'
buzzer.input(1, 120);

console.log(buzzer.output());
```

