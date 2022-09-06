/*Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
*/

const snail = (arr) => {
	let sortArr = [];
	while (arr.length) {
		//get the first row (first array in the array)
		sortArr.push(...arr.shift());
		//get the items at the end of each array (right side)
		for (let i = 0; i < arr.length; i++) {
			sortArr.push(arr[i].pop());
		}
		//get the bottom row from end to front (bottom row reversed)
		sortArr.push(...(arr.pop() || []).reverse());
		//get the items at the beginning of the arrays (left side)
		for (let i = arr.length - 1; i >= 0; i--) {
			sortArr.push(arr[i].shift());
		}
	}
	return sortArr;
};
snail([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]);
