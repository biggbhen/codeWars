// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

function sumArray(array) {
	if (array.length <= 2 || array == null) {
		return 0;
	} else {
		let sortArr = array.sort();
		sortArr.pop();
		sortArr.shift();
		return sortArr.reduce((a, b) => a + b, 0);
	}
}
console.log(sumArray([6, 2, 1, 8, 10]));
