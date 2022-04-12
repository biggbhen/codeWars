// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// function toCamelCase(str){
// let newArr = []
// for (let x = 0; x < str.length; x++) {
//  let element = str[x];
// if (element == '_') {
//  element = ' '
// }
// newArr.push(element)
// }
// newArr.join('');

// let camelStr = newArr.s
// }
// toCamelCase("the_stealth_warrior")



function toCamelCase(str){
let newArr = str.split('_')
let camelStr = []
for (let x = 1; x < newArr.length; x++) {
 let element = newArr[x];
 console.log(element[0]);
 let firstLetter= element[0].toUpperCase()
  // + element.slice(1, element.length);
 
 // camelStr.push(firstLetter)
}
// let finalStr = [newArr[0], ...camelStr]


// return finalStr.join('')

}

console.log(toCamelCase("the_stealth_warrior"));