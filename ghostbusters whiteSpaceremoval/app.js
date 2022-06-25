// Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

// In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

// So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

// Example:

// ghostBusters("Sky scra per");
// Should return:

// "Skyscraper"
// If the building contains no ghosts, return the string:

// "You just wanted my autograph didn't you?"

// function ghostBusters(building) {
//   let arr = building.split('');
//   let ans;
//   if (arr.length > 1) {
//     let ans = arr.filter((item) => item != ' ');
//     return ans.join('');
//   }
//   return (ans = []);
// }

function ghostBusters(building) {
  let arr = building.split(' ');

  // if (arr.length > 1) {
  //   return arr.join('')
  // }
  // return "You just wanted my autograph didn't you?";
  return arr.length > 1
    ? arr.join('')
    : "You just wanted my autograph didn't you?";
}
console.log(ghostBusters('Factor y'));
