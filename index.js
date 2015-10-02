function FizzBuzz(word1, word2) {

	this.word1 = word1;
	this.word2 = word2;

	if (word1 === undefined) {
		this.word1 = "fizz";
	}
	if (word2 === undefined) {
		this.word2 = "buzz";
	}

	this.word3 = this.word1 + this.word2;

	this.input = function(num1, num2) {
		this.begin = num1;
		this.end = num2;
	};
	
	this.output = function() {
		
		var words = [];
		
		for (var i = this.begin; i < (this.end + 1); i++) {
		
			if (i%3 === 0 && i%5 !== 0) {
				words.push(this.word1);
			}
			else if (i%5 === 0 && i%3 !== 0) {
				words.push(this.word2);
			}
			else if ( i%3 === 0 && i%5 === 0) {
				words.push(this.word3);
			}
			else {
				words.push(i);
			}
		}
		return words;
	};	
}

exports.FizzBuzz = function(word1, word2) {
  return new FizzBuzz(word1, word2);
}