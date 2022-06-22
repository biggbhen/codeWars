// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
function oddCount(n) {
  // your code here
  let newArr = [];
  for (let i = 1; i < n; i++) {
    if (i % 2 !== 0) {
      newArr.push(i);
    }
  }
  return newArr.length;
}
console.log(oddCount(7));
