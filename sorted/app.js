// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
  let sortedArr = array.sort((a, b) => a - b);
  console.log(array);
  // if (array == sorted) {
  //   console.log('yeah');
  // } else {
  //   console.log('no');
  // }
}
isSortedAndHow([2, 1]);
