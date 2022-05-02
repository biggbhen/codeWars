// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// example: " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"

function generateHashtag(str) {
  let newStr = str.split(' ');
  let newArr = newStr.filter((x) => {
    return x != '';
  });

  let capitalizer = [];
  newArr.forEach((x) => {
    let firstLetter = x[0].toUpperCase() + x.slice(1, x.length);
    capitalizer.push(firstLetter);
  });
  // console.log(capitalizer);
  let figo = capitalizer.join('');
  // console.log(capitalizer, figo);
  if (figo.length == 0 || figo.length > 140) {
    return false;
  } else {
    figo += '#';
  }
  return figo;
}

console.log(
  generateHashtag(
    'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'
  )
);
