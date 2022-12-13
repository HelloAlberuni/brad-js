/* 93. ES6 Sets
======================================================= */
let set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'Alberuni', gender: 'Male'});
set1.add(true);
set1.add(100); // it will not add because already has the value. Values should be unique.

// console.log(set1); // Set(4) [ 100, "A string", {…}, true ]

// Add all values together
let set2 = new Set([100, 'A string', {name: 'Alberuni', gender: 'Male'}, true]);
// console.log(set2);

// Count
// console.log(set2.size);

// Has method
// console.log(set2.has(100)); // true
// console.log(set2.has(50+50)); // true
// console.log(set2.has({name: 'Alberuni'})); // false

// console.log( {name: 'Alberuni'} == {name: 'Alberuni'} ); // false, because Obeject is pointing to different location of memory. It's not a premitive type like string, number, boolean
// console.log( 'hello' == 'hello' ); // true, becuase this is premitive type

// Delete from set
// set2.delete(100);
// console.log(set2);

// Delete object from set
// let person = {name: 'Alberuni', gender: 'Male'}
// let set3 = new Set([100, 'A string', person, true]);
// set3.delete(person);
// console.log(set3); // Set(3) [ 100, "A string", true ] // person is deleted, because we save it to a variable so the reference is same

// Iteratign through set
// for ... of
// for(let x of set2){ // set2.keys(), set2.values() or set2.entries() can be used to
//     console.log(x);
// }

// for each loop
// set2.forEach(function(item){
//     console.log(item);
// });

// Convert set to Array
// let setArr = Array.from(set2);
// console.log(setArr); // Array(4) [ 100, "A string", {…}, true ]

// From Sumit

// Convert array to set
// let myArray = [1,2,4,5];
// let mySet = new Set('Bangladesh');
// let mySet = new Set(myArray);
// console.log(mySet);

// Convert set to array
// let set11 = new Set('Bangladesh');
// console.log( [...set11] ); // Array(9) [ "B", "a", "n", "g", "l", "d", "e", "s", "h" ] // Method:1
// console.log(Array.from(set11)); // Array(9) [ "B", "a", "n", "g", "l", "d", "e", "s", "h" ] // Method:2

// Store object is set
// In the example below 3 objects are added and the mySet variable will containt 3 elements which is Obeject. Since object is reference type data and each time we are adding new object, passing a new reference corresponding the data. In the Example:2 shown how unique Obejects can be stored in set.
// Example: 1
// let mySet = new Set();
// mySet.add({
//     a: 'Alberuni',
//     b: 'Azad'
// });
// mySet.add({
//     a: 'Alberuni',
//     b: 'Azad'
// });
// mySet.add({
//     a: 'Alberuni',
//     b: 'Azad'
// });

// console.log(mySet);
// console.log(mySet.size); // 3

// Example: 2
// In this example, the object is instatiate only 1 time and saved it to a variable. This way the mySet will contain only one object. Because now, each time we are adding the object is treating as same value (reference).
// let info = {
//     a: 'Alberuni',
//     b: 'Azad'
// }
// mySet.add(info);
// mySet.add(info);
// mySet.add(info);
// console.log(mySet);
// console.log(mySet.size); // 1

/* Use cases:
======================================================= */

// Get unique values of an array without using any loop or other ways
// let arr = [1,2,3,3,4,2,4,5,6];
// convert array to a Set
// let mySet = new Set(arr); // Set(6) [ 1, 2, 3, 4, 5, 6 ]
// Then convert the set to an array
// console.log([...mySet]); //Array(6) [ 1, 2, 3, 4, 5, 6 ]

// Union operation
let seta = new Set([1,3,5,3]);
let setb = new Set([3,4,6,5]);

// let Union = new Set([...seta, ...setb]); // Set(5) [ 1, 3, 5, 4, 6 ]=
// console.log(Union);

// intersection
// let intersection = new Set([...seta].filter(x => setb.has(x)));
// console.log( intersection ); // Set [ 3, 5 ]

// difference
// let difference = new Set([...seta].filter(x => !setb.has(x)));
// console.log( difference ); // Set [ 1 ] // seta - setb = the elements in seta is not exists in setb. setb -(minus) seta = opposite.

/* WeakSet
======================================================= */
// WeakSet only accept object
let ws = new WeakSet( {a: 'Alberuni', b: 'Azad'} );
// let ws = new WeakSet( 'Bangladesh' ); // it will through an "Uncaught TypeError: WeakSet value must be an object, got nextValue"
console.log(ws);


/*
/// Summary ///
- Store unique values of any type

// From Sumit:
- Set is a list of unique values
- One of the most beautiful feature of ES6 is set
- Set is like array
- Set is used to store unique data
- We are used to work with the Array / Obeject type data structure in our use case
- But there are some other data structures Set, Map, WeakSet, WeakMap are the data structure as like array or Obeject
- Set is reference data type like array or Obeject
- We can't use literal syntax. We must use constructor syntext to define set. e.g: let set1 = new Set();
- We can use method chain for set. e.g: set1.add(3).add(3).add(8).delete(3)
- We can pass any iterable only in the set. e.g: new set(iterablVar1)
- Array is iterable
- Obeject is not iterable, so we can't pass Obeject while passing in new Set()
- Sring is iterable so we can use. new set('bangladesh');
- Set is an iterable object, so we can use for ... of to iterate
- We can convert set to an array. e.g: [...set1]
- Set is mainly used to perform operation like Union, intersection, difference etc
- For any operation in set, first we covert it to an array then perform operation on the array and finally we convert the performed operation into a set. This is a common pattern of using set. But the main purpose is set always store unique values.

Weak Set:
- The difference of Weak set with Set is, it is only work with Obeject but set works with any kind premitive data type, like string, boolean etc.
- Weak set are not iterable, but it takes iterable which is object.
- WeakSet are rarely used.
*/