/**Write a function that checks if a given string (case insensitive) is a palindrome. */

function isPalindrome(x) {
	// your code here
	let str = x.toLowerCase();

	return str === [...str].reverse().join('') ? true : false;
}

isPalindrome('hello');
