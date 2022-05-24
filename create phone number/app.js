// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
function createPhoneNumber(numbers) {
  let format = '(xxx) xxx-xxx';
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    format = format.replace('x', element);
  }
  return format;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
//  createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
