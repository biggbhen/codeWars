// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// function fakeBin(x) {
//   let numArr = [...x];
//   // numArr.map(x=> Number(x))
//   let newBinary = [];
//   let otherArr = numArr.map((x) => Number(x));
//   otherArr.forEach((x) => {
//     if (x >= 5) {
//       x = '1';
//       newBinary.push(x);
//     } else {
//       x = '0';
//       newBinary.push(x);
//     }
//     // return x;
//   });
//   console.log(newBinary);
// }

function fakeBin(x) {
  let numArr = [...x];
  // numArr.map(x=> Number(x))
  function fakeBin(x) {
    return [...x]
      .map((x) => Number(x))
      .map((x) => (x >= 5 ? (x = '1') : (x = '0')))
      .join('');
  }
}

//   if (x >= 5) {
//     x = '1';
//     newBinary.push(x);
//   } else {
//     x = '0';
//     newBinary.push(x);
//   }
//   // return x;
// });

console.log(fakeBin('45385593107843568'));
