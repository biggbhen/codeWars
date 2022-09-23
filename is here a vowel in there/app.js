// //is there a owel in there?

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(arr) {
	let newArr = [];

	arr.map((num) => {
		if (num === 97) {
			num = 'a';
		} else if (num === 101) {
			num = 'e';
		} else if (num === 105) {
			num = 'i';
		} else if (num === 111) {
			num = 'o';
		} else if (num === 117) {
			num = 'u';
		}
		newArr.push(num);
	});
	return newArr;
}

isVow([
	118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120,
	106,
]);
