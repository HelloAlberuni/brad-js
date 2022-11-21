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
let setArr = Array.from(set2);
console.log(setArr); // Array(4) [ 100, "A string", {…}, true ]

/*
/// Summary ///
- Store unique values of any type

// From Sumit:
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
*/