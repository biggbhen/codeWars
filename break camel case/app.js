// break camel case
// Complete the solution so that the function will break up camel casing, using a space between words.
function solution(string) {
	const regex = /([a-z])([A-Z])/g;
	const spaces = string.replace(regex, '$1 $2');
	return spaces;
}
solution('camelCasing');

// function solution(string) {
//   return(string.replace(/([A-Z])/g, ' $1'));

// }

// function solution(string) {
// 	string = string.split('').map(function (el) {
// 		if (el === el.toUpperCase()) {
// 			el = ' ' + el;
// 		}
// 		return el;
// 	});
// 	return string.join('');
// }
