// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let check = weight / (height * height);
  console.log(check);
  let result;

  if (check <= 18.5) {
    result = 'Underweight';
  } else if (check <= 25) {
    result = 'Normal';
  } else if (check <= 30) {
    result = 'Overweight';
  } else if (check > 30) {
    result = 'Obese';
  }
  return result;
}
console.log(bmi(80, 1.8));
