// Create a Person class with a greet method that returns the first and last name of the person with a greeting. For example if the first name is 'Bob' and the last name is 'Smith' then it should return 'Hello, Bob Smith!'.

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greet() {
    return `Hello, ${this.firstName} ${this.lastName}!.`;
  }
}
const person = new Person('Bob', 'smith');
console.log(person.greet());
//  'Hello, Bob Smith!'
