// String incrementer
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng) {
	let numberPattern = /\d+/g;
	let numstr = [...strng.match(numberPattern).toString()];
	let letters = strng.slice(0, -numstr.length);
	let spliceIndx;
	for (let i = 0; i < numstr.length; i++) {
		let item = numstr[i],
			nextIndex = i + 1;
		if (p > 0) {
			spliceIndx = i;
		}
	}
	let count = Number(numstr.splice(spliceIndx + 1));
	count += 1;
	numstr.push(count.toString());
	console.log(numstr, count);
}

incrementString('foobar0001');
