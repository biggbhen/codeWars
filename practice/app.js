const catchOnly = (arr) => {
	console.log(arr);

	arr.filter((item) => {
		if (arr.indexOf(item) === arr.lastIndexOf(item)) {
			console.log(item);
		}
	});
};
catchOnly([1, 1, 1, 1, 2, 1, 1]);
