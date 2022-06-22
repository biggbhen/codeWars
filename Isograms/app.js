// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
  //...
  let strArr = str.toLowerCase().split('');

  for (let i = 0; i < strArr.length; i++) {
    let numItem = [...strArr].filter((item) => item == strArr[i]);
    // console.log(numItem);
    if (numItem.length > 1) {
      return false;
    }
  }
  return true;
  // return newArr;
}
console.log(isIsogram('mose'));
