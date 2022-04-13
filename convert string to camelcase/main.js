// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"




function toCamelCase(str){
let newArr = str.replace(/[^a-z0-9]/gi,' ').split(' ') 
capitalizer = []
let joinArr =[]
for(let i = 1; i < newArr.length; i++){
 let x = newArr[i];
 let toCap = x[0].toUpperCase() + x.slice(1, x.length)
capitalizer.push(toCap)
} 
joinArr.push(newArr[0], ...capitalizer);
return joinArr.join('')
}
console.log(toCamelCase("the_stealth_warrior")); 