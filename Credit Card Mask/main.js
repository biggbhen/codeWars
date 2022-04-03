// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
  let lastFour = cc.slice(-4)
  let maskedVal= cc.split('');
  maskedVal.splice(-4, 4);
  let newStr;
   for (let i = 0; i < maskedVal.length; i++) {
maskedVal[i]='#'
 }
let joinArray= maskedVal.join('')
newStr = joinArray + lastFour
// return newStr
console.log(newStr)
}
maskify('11111');

