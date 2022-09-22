// break camel case
// Complete the solution so that the function will break up camel casing, using a space between words.
function solution(string) {
	const regex = /([a-z])([A-Z])/g;
	const spaces = string.replace(regex, '$1 $2');
	return spaces;
}
solution('camelCasing');
