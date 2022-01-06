/**Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

function findShort(s) {
	let newArr = [];

	s.split(' ').filter((item) => newArr.push(item.length));
	newArr.sort((a, b) => a - b);
	return newArr[0];
}
findShort('bitcoin take over the world maybe who knows perhaps');
