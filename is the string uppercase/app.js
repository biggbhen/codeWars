// Create a method to see whether the string is ALL CAPS.
/*Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True */

// isUpperCase = function (str) {
//   let element;
//   let arrStr = str.split('');
//   const newstr = arrStr.filter((i) => i != ' ');
//   for (let i = 0; i < newstr.length; i++) {
//     element = newstr[i];
//     if (element !== element.toUpperCase()) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isUpperCase('HELLO I AM DONALD'));

String.prototype.isUpperCase = function () {
  return this == this.toUpperCase();
};
