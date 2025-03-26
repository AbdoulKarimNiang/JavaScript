// # Array Method Challenges

// ## Challenge 1

// **Instructions:**

// Take the `people` array and create an array called `youngPeople` that stores objects with ONLY `name` and `email` properties of all the people that are 25 and under. The `name` property should have their first and last name.

// ```JavaScript

const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];


// **Expected Result:**

// JavaScript
// console.log(youngPeople);

// [
//   {name: 'Jane Poe', email:'jane@gmail.com'},
//   {name: 'Sara Soe', email:'sara@gmail.com'},
//   {name: 'Jose Koe', email:'jose@gmail.com'}
// ]

// ```


// const youth = people.forEach(el => el.filter( element=> element.age < 25))

const youth = people
  .filter(el => el.age <25)
  .map(
      el => ({
          name : el.firstName + ' ' + el.lastName,
          email : el.email
        })
      )
console.log(youth)


// testing for loop

for (let human in people){
  console.log(human.firstName)
}


// ## Challenge 2

// **Instructions:**

// Add all of the positive numbers in the array.

// **Expected Result:**

// ```JavaScript

 const numbers = [2, -30, 50, 20, -12, -9, 7];

// console.log(positiveSum); // 79

function accumulatorSum(value){
  if (value > 0 ){
    return value
  } else {
    return 0
  }
}



const total = numbers.reduce( (accumulator, currentvalue) => accumulator + accumulatorSum(currentvalue ) )

console.log(total)



// ## Challenge 3

// **Instructions:**

// Create a new array called `capitalizedWords` with the words from the `words` array with the first letter of each word capitalized.

// **Expected Result:**

// ```JavaScript
const words = ['coder', 'programmer', 'developer'];

// console.log(capitalizedWords); // ['Coder', 'Programmer', 'Developer']
// ```


const capitalizedWords = words.map( el => el[0].toLocaleUpperCase() + el.slice(1,el.length) )

console.log(capitalizedWords)