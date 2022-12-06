// // Count the smiley faces!
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

function countSmileys(arr) {
	let result = 0;
	let a = ':)',
		b = ':~)',
		c = ':-)',
		d = ';)',
		e = ';~)',
		f = ';-)',
		g = ':D',
		h = ':~D',
		i = ':-D',
		j = ';D',
		k = ';~D',
		l = ';-D';

	arr.forEach((item) => {
		if (
			item === a ||
			item === b ||
			item === c ||
			item === d ||
			item === e ||
			item === f ||
			item === g ||
			item === h ||
			item === i ||
			item === j ||
			item === k ||
			item === l
		) {
			result++;
		} else {
			return result;
		}
	});
	console.log(result);
	// return result;
}

function countSmileys(arr) {
	return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length;
}

// countSmileys([':D', ':~)', ';~D', ':)']);
// countSmileys([':)', ':(', ':D', ':O', ':;']);
// countSmileys([':)', ';(', ';}', ':-D']);
