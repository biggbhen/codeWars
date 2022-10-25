let array1 = [1, 2, 3],
	k = 3;
(array2 = []), (array3 = []);

let checker = (arr, target) => {
	for (let i = 0; i <= k; i++) {
		array2.push(i);
	}
	array2.forEach((item) => {
		if (array1.includes(item)) {
			array3.push(true);
		} else {
			array3.push(false);
		}
	});
	if (array3.pop() == false) {
		return false;
	} else {
		return true;
	}
};

console.log(checker(array2, array1));
