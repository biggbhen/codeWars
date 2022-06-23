// Square(n) Sum
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
  return numbers.map((x) => x * x).reduce((a, b) => a + b, 0);
}
