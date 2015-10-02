"use strict";

(function() {

  var FizzBuzz = require("./module/index.js");

  var fizzy = new FizzBuzz("Bull", "Shit");

  fizzy.input(1, 30);
  console.log(fizzy.output());

})();
