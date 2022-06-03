/*We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property. */

// Setup
const contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

// console.log(contacts[0].firstName);

function lookUpProfile(name, prop) {
  let result;
  for (let i = 0; i < contacts.length; i++) {
    const x = contacts[i];
    if (name === x.firstName && x.hasOwnProperty(prop) === true) {
      return (result = x[prop]);
    } else if (name !== x.firstName) {
      console.log(name, x.firstName);
      return (result = 'No such contact');
    } else if (x.hasOwnProperty(prop) === false) {
      return (result = 'No such property');
    }
  }

  return result;
}
console.log(lookUpProfile('Akira', 'likes'));
// lookUpProfile('Akira', 'likes')
