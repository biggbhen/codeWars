

function maskify(cc) {
 let maskedVal;
  let firstTwelve= cc.slice(0, 12)
  let lastFour= cc.slice(12);
  newStr=''

  for ( i = 0; i < firstTwelve.length; i++) {
if(lastFour.length == 4){
newStr +='#'
// console.log(newStr);
}else{
 return cc
}
  }
maskedVal=newStr+=lastFour;
 // console.log( maskedVal);
}
maskify('4556364607935616');