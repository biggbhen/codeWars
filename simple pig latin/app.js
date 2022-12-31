// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
	let regex = /[^A-Za-z0-9]/g;
	return str
		.split(' ')
		.map((e) => (e.match(regex) ? e : e.substr(1) + e[0] + 'ay'))
		.join(' ');
}

console.log(pigIt('Hello world !'));
// 'igPay atinlay siay oolcay'
// pigIt("This is my string")
// 'hisTay siay ymay tringsay'
