// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
	let cache = {};
	string.split('').map((v) => {
		// cache[v] = cache[v] + 1 || 1;
		cache[v] = cache[v] ? cache[v] + 1 : 1;
	});
	console.log(cache);
	// return cache;
}

count('aba');
