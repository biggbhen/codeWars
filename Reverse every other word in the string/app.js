// Reverse every other word in the string
// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str) {
	let arr = str.split(' ');
	let newArr = [];

	//map thru the arr
	// target the second idx and reverse
	//join the arr

	const filtered = arr.filter((item) => item !== '');

	for (let i = 0; i < filtered.length; i++) {
		let item = filtered[i];
		if (i % 2 !== 0) {
			item = item.split('').reverse().join('');
		}
		newArr.push(item);
	}
	return newArr.join(' ');
}
console.log(reverse("I really don't like reversing  strings!"));

// function reverse(str) {
// 	let arr = str.split(' ');

// 	for (var i = 1; i < arr.length; i += 2) {
// 		arr[i] = arr[i].split('').reverse().join('');
// 	}

// 	return arr.join(' ').trim();
// }
