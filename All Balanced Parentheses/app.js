// All Balanced Parentheses

// Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses

// Examples
// balancedParens(0) => [""]
// balancedParens(1) => ["()"]
// balancedParens(2) => ["()()","(())"]
// balancedParens(3) => ["()()()","(())()","()(())","(()())","((()))"]

function balancedParens(n) {
	const solution = [];

	const generateCombo = (leftPCount, rightPCount, partial) => {
		// lets check for invalid
		if (leftPCount > rightPCount) return;
		if (!leftPCount && !rightPCount) solution.push(partial);
		// check for valid parentheses
		if (leftPCount > 0)
			generateCombo(leftPCount - 1, rightPCount, partial + '(');
		if (rightPCount > 0)
			generateCombo(leftPCount, rightPCount - 1, partial + ')');
	};
	generateCombo(n, n, '');
	return solution;
}
console.log(balancedParens(1));
