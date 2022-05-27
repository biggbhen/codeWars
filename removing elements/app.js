// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr) {
  let newArr = [];
  // console.log(arr);
  for (let i = 0; i < arr.length; i += 2) {
    const element = arr[i];
    newArr.push(element);
  }
  return newArr;
}
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));

// ['Hello', 'Hello Again'];

// function removeEveryOther(arr) {
//   return arr.filter(function (elem, index) {
//     return index % 2 === 0;
//   });
// }
