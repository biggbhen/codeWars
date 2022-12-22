// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// if good == 2 || good == 1 return Publish
// if good > 2 return I smell a series!
// if there no goo return fail

function well(x) {
	const goodIdea = x.filter((x) => x === 'good').length;
	return goodIdea < 1
		? 'Fail!'
		: goodIdea < 3
		? 'Publish!'
		: 'I smell a series!';
}
// return x

console.log(well(['bad', 'bad', 'bad', 'good', 'good', 'good', 'good']));
//  "I smell a series!"

// well(["good", "bad", "bad", "bad", "bad"])
// "Publish!"

// well(["bad", "bad", "bad"])
// "Fail!"
