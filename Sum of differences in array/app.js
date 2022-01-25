// Sum of differences in array
// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

function sumOfDifferences(arr) {
	let sum = 0;
	let sortArr = arr.sort((a, b) => b - a);
	for (let i = 0; i < sortArr.length - 1; i++) {
		sum += sortArr[i] - sortArr[i + 1];
	}
	return sum;
}
console.log(sumOfDifferences([10, 2, 1]));
// sumOfDifferences([-3, -2, -1]);
