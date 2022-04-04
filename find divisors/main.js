// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

function divisors(integer) {
  let numbArray = [];
  let isPrime;
  for (let i = 2; i < integer; i++) {
    if (integer % i == 0) {
      numbArray.push(i);
      // console.log(numbArray);
    }
  }
   if (numbArray != []){
      console.log(`${integer} is not prime`);
    }
    else {
      console.log(`${integer} is prime`);
    }
  console.log(numbArray);
}
divisors(13);
