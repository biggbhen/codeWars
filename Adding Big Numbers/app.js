// Adding Big Numbers
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {
	let res = '',
		c = 0;
	a = a.split('');
	b = b.split('');
	while (a.length || b.length || c) {
		c += ~~a.pop() + ~~b.pop();
		res = (c % 10) + res;
		c = c > 9;
	}
	return res;
}

add('888', '222');
