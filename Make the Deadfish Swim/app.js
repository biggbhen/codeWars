// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

// Return the output array, and ignore all non-op characters
function parse(data) {
	const newArr = [...data];
	let counter = 0;
	let modArr = [];
	newArr.filter((item) => {
		switch (item) {
			case 'i':
				counter++;
				break;
			case 'd':
				counter--;
				break;
			case 's':
				counter = counter * counter;
				break;
			case 'o':
				modArr.push(counter);
				break;
		}
	});
	return modArr;
}
parse('iiisdoso'); //[8, 64];
