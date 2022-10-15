// Summing a number's digitsWrite a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
	let arr = Math.abs(number).toString().split('');

	// return arr.map((item) => +item).reduce((a, b) => a + b, 0);
	return arr.reduce((a, b) => +a + +b, 0);
}
console.log(sumDigits(99));
console.log(sumDigits(5526232));

// sumDigits(-32);
