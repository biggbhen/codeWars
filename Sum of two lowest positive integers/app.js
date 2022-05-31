// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

function sumTwoSmallestNumbers(numbers) {
  //Code here
  let positiveArr = numbers.filter((n) => n > 0);
  let sortedArr = positiveArr.sort((a, b) => a - b);
  return sortedArr[0] + sortedArr[1];
}
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
