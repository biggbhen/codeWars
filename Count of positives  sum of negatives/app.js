// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// function countPositivesSumNegatives(input) {
//   let counter = 0;
//   let result = [];
//   let sum = 0;
//   if (input.length > 0) {
//     for (let i = 0; i < input.length; i++) {
//       const element = input[i];
//       if (element > 0) {
//         counter++;
//       } else if (element < 0) {
//         sum += element;
//       }
//     }
//     result = [counter, sum];
//   }
//   return result;
// }

function countPositivesSumNegatives(input) {
  let counter = 0;
  let result = [];
  let sum = 0;
  if (input == null) {
    result = [];
  } else if (input.length > 0) {
    for (let i = 0; i < input.length; i++) {
      const element = input[i];
      if (element > 0) {
        counter++;
      } else if (element < 0) {
        sum += element;
      }
    }
    result = [counter, sum];
  }

  return result;
}
let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
countPositivesSumNegatives(testData);
