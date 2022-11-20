/* 91. Destructuring Assignment 
======================================================= */
// let a,b;
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

/* Array Destructuring
======================================================= */
// let people = ['Alberuni', 'Azad', 'Zenaul'];
// let [person1, person2, person3] = people;
// console.log(person2); // Azad

// Parse array return from function
// function getPeople(){
//     return ['Alberuni', 'Azad', 'Zenaul'];
// }
// let [person1, person2, person3] = getPeople();
// console.log(person3); // Zenaul

/* Object Destructuring
======================================================= */
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

/* From Sumit
======================================================= */
let user = {
    id: 20,
    name: 'Alberuni',
    gender: 'Male',
    // nested object
    education: {
        degree: "Bachelor"
    }
}

// let { name } = user;
// console.log(name); // Alberuni

// How to take the name properties value into a new variable named 'name1' ?
// let { name1 } = user;
// console.log(name1); // undefined, this way doesn't work. In this case we need to use alias

// Using alias
// let { name: name1 } = user;
// console.log(name1); // Alberuni. Now the value of name property is saved to the name1 variable

// Accessing degree propety from the nested object
// let { education: { degree: degree } } = user;
// console.log(degree); // Bachelor

// let { education: { degree: x } } = user;
// console.log(x); // Bachelor. Using alias

// What happen when education is not defined in the object but still Accessing the degree?
let user2 = {
    id: 20,
    name: 'Alberuni',
    gender: 'Male',
    // nested object
    // education: {
    //     degree: "Bachelor"
    // }
}
// let {education: {degree}} = user2;
// console.log(degree); // Type Error: user2.education is undefined (it will stop executon)

// in this case we can use defaut value if the nested object is missing from API or any object
// let {education: {degree} = {}} = user2;
// console.log(degree); // degree is undefined (now it is not stop executon)

// Skipping varibles
// let numbers = [2,3,4,5,6];
// lets say we want to take 3 & 6 into the variables a & b
// let [, a, , , b] = numbers;
// console.log(a,b); // 3 6

let numbers = [2,3,[400,4,600],5,6];
// we will extract 4
let [, , [,a]] = numbers; // In normal way we had to use for loop to get the 4
console.log(a); // 4

/*
/// Summary ///
- Destructuring introduced int ES6
- It gives us more cleaner & easy way to assigning & extracting variables than ES5 way
- Rest pattern (New keyword)
- Whatever is leftover into an array into a variable is called rest
- Array Destructuring, Object Destructuring (New keyword)

From google:
- Destructuring Assignment is a JavaScript expression that allows to unpack values from arrays, or properties from objects, into distinct variables data can be extracted from arrays, objects, nested objects and assigning to variables.

From sumit:
- The most beautiful feature of JS
- Using alias for assigning value in in different variable 
- We can skip variable using ,
- Accessing nested objects
- Using defaut value in case of a property is missing from an API or object to avoid error & stop executon of the script
- Both side of the = operator should be same type like (array or object)
- In old way to access value from a nested object, we had to use loop but using Destructuring we can do it easily without using loop.
*/