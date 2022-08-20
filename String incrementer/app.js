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
	// return incrementedString
	let string = strng.replace(/[0-9]/g, '');

	let len = strng.length - string.length;

	let str = strng.slice(string.length) || '0';

	str = (parseInt(str) + 1).toString();

	while (str.length < len) {
		str = '0' + str;
	}

	return string.concat(str);
}

incrementString('foobar0001');
