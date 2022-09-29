// // IndexOf Array in Array
// JavaScript's indexOf does not work with arrays as input. This is because [1,2] === [1,2] will return false in JavaScript. Many other languages have similar quirks.

// However, sometimes it is useful to search for an Array. Write a function that looks for an array within a two-dimensional array and returns the index of the first matching element. If there is no match, your function should return -1.

// See some examples:

// var arrayToSearch = [[1,2],[3,4],[5,6]];
// var query = [1,2]; // => 0
// query = [5,6]; // => 2
// query = [9,2]; // => -1
// You will be required to validate the inputs on the following criteria:

// each element of the array to be searched should be an array;
// each sub-array in the two-dimensional array should be of length two; and
// query should be an array of length two.
// If the inputs are not valid you should throw an Error.

// See some examples:

// var arrayToSearch = [[1,2],[3,4],[5,6],[7,8,9]]; // => throw Error
// arrayToSearch = [1,2,3,4,5,6]; // => throw Error
// arrayToSearch = [[1,2],[3,4],[5,6]]; // => valid input
// var query = [1,2]; // => valid input
// query = 5; // => throw Error
// query = [9,2,1]; // => throw Error

let bigArray = [
	[2, 3],
	[7, 2],
	[9, 20],
	[1, 2],
	[7, 2],
	[45, 4],
	[7, 87],
	[4, 5],
	[2, 7],
	[6, 32],
];

let searchFor = [9, 20];

let searchArray = function (arrayToSearch, query) {
	if (query.length !== 2 || !Array.isArray(query)) throw 'Error';

	for (let i = 0; i < arrayToSearch.length; i++) {
		if (arrayToSearch[i].length != 2) throw 'Error';
		if (arrayToSearch[i][0] == query[0] && arrayToSearch[i][1] == query[1]) {
			return i;
			// console.log(i);
		}
	}
	return -1;
};

console.log(searchArray(bigArray, searchFor));
