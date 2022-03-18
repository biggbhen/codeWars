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

// let searchArray = function (arrayToSearch, query) {
//   // TODO your code here
//   // console.log(query);
//   let newArr = [query];

//   arrayToSearch.forEach((element, ind) => {
//     if (newArr.includes(element)) {
//       console.log(element);
//     }
//   });
// };
// let bigArray = [
//   [2, 3],
//   [7, 2],
//   [9, 20],
//   [1, 2],
//   [7, 2],
//   [45, 4],
//   [7, 87],
//   [4, 5],
//   [2, 7],
//   [6, 32],
// ];
// let searchFor = [9, 20];
// console.log(searchArray(bigArray, searchFor));
// // searchFor = [1, 12];
// // searchArray(bigArray, searchFor);
