/* 91. Destructuring Assignment 
======================================================= */
let a,b;
// [a,b] = [3,5];
// console.log(a); // 3

// Rest pattern
// [a,b, ...rest] = [3, 5, 8, 9, 10, 11]; //rest is a variable here
// console.log(rest); // Array(4) [ 8, 9, 10, 11 ]

// [a,b,c, ...rest] = [3, 5, 8, 9, 10, 11]; //rest is a variable here
// console.log(rest); // Array(3) [ 9, 10, 11 ] // 8 assigned into the variable c

// ({a, b,} = {a: 5, b: 6, c:7});
// ({a, b, ...rest} = {a: 5, b: 6, c:7, d: 8});
// console.log(rest); // Object { c: 7, d:8 }

// Array Destructuring
// let people = ['Alberuni', 'Azad', 'Zenaul'];
// let [person1, person2, person3] = people;
// console.log(person2); // Azad

// Parse array return from function
// function getPeople(){
//     return ['Alberuni', 'Azad', 'Zenaul'];
// }
// let [person1, person2, person3] = getPeople();
// console.log(person3); // Zenaul

// Object Destructuring
// let people = {one: 'Alberuni', two: 'Azad', three: 'Zenaul'}
// let {one, person2, person3} = people;
// console.log(person1); // undefined. because person1 is not in the properties
// console.log(one, person2); // Alberuni undefined because person2 is not in the properties

// let person = {
//     name: 'Alberuni',
//     city: 'Dhaka',
//     country: 'Bangladesh',
//     gender: 'Male',
//     // even we can use function
//     sayHello: function(){
//         console.log('Say hello');
//     }
// }

// Old ES5 way
// let name = person.name,
//     country = person.country,
//     gender = person.gender;

// console.log(name,country,gender); // Alberuni Banglades Male

// New ES6 way (cleaner & easy way)
// let {name, country, gender, sayHello} = person;
// console.log(name, gender); // Alberuni Male

// sayHello(); // Say hello

/*
/// Summary ///
- Destructuring introduced int ES6
- It gives us more cleaner & easy way to assigning & extracting variables than ES5 way
- Rest pattern (New keyword)
- Whatever is leftover into an array into a variable is called rest
- Array Destructuring, Object Destructuring (New keyword)

From google:
- Destructuring Assignment is a JavaScript expression that allows to unpack values from arrays, or properties from objects, into distinct variables data can be extracted from arrays, objects, nested objects and assigning to variables.
*/