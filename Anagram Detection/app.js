// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

var isAnagram = function (test, original) {
	let Arr = [...test].map((item) => item.toLowerCase()).sort(),
		checkArr = [...original].map((item) => item.toLowerCase()).sort();
	return (
		Arr.length === checkArr.length &&
		Arr.every((item, index) => item === checkArr[index])
	);
};
console.log(isAnagram('Buckethead', 'DeathCubeK'));
console.log(isAnagram('dumble', 'bumble'));
