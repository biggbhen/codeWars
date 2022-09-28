// // Split Strings

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
	let strArr = [...str];
	let newArr = [];
	if (strArr.length % 2 != 0) {
		strArr.push('_');
	}
	for (let i = 0; i < strArr.length; i += 2) {
		const item = strArr[i] + strArr[i + 1];
		newArr.push(item);
		// console.log(item);
	}
	return newArr;
}

solution('abcdefg');
