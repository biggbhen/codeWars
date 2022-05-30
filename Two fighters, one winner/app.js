/*   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins. */

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () {
    return this.name;
  };
}
function declareWinner(fighter1, fighter2, firstAttacker) {
  let winner;

  if (firstAttacker === fighter1.name) {
    while (fighter1.health > 0 && fighter2.health > 0) {
      fighter1.health -= fighter2.damagePerAttack;
      if (fighter1.health <= 0) {
        winner = fighter2.name;
      }
      fighter2.health -= fighter1.damagePerAttack;
      if (fighter2.health <= 0) {
        winner = fighter1.name;
      }
      console.log(fighter1.health, fighter2.health);
    }
  } else {
    while (fighter1.health > 0 && fighter2.health > 0) {
      fighter2.health -= fighter1.damagePerAttack;
      if (fighter2.health <= 0) {
        winner = fighter1.name;
      }
      fighter1.health -= fighter2.damagePerAttack;
      if (fighter1.health <= 0) {
        winner = fighter2.name;
      }
      // console.log(fighter1.health, fighter2.health);
    }
  }
  return winner;
}
console.log(
  declareWinner(
    new Fighter('Harald', 20, 5),
    new Fighter('Harry', 5, 4),
    'Harald'
  )
);
// console.log(
//   declareWinner(
//     new Fighter('Jerry', 30, 3),
//     new Fighter('Harald', 20, 5),
//     'Harald'
//   )
// );
// console.log(
//   declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Lew')
// );

// 'Harald';
