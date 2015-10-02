#fizzbuzz-redux__W5-A4

##This assignment was to:

Refactor your FizzBuzz into a library and publish it to the npm registry.

We were asked to refactor the object to have an `input` and an `output` method, instead of the "read" and "write" methods.

Our constructor needs to accept arguments that will change the strings "Fizz" and "Buzz" (e.g. `new FizzBuzz('Bleep', 'Blorp')`). The `input` method needs to accept two arguments, `min` and `max` — we can safely assume they will be `Numbers`. `output` does not need to not take any arguments, but _must_ return an array.

Our module should expose a function using the CommonJS `module.exports` construct. A user should be able to `npm install <the-module>` and use it like so:

```
var FizzBuzz = require('<the-module>');

var buzzer = new FizzBuzz(); // Should accept string arguments that replace 'Fizz' and 'Buzz'
buzzer.input(1, 120);

console.log(buzzer.output());
```
###To turn in the assignment:

Name your module `sea-d44-fizz-buzz-<your initials>` and publish it to the npm registry. And, as usual, fork this repo and submit a PR.


