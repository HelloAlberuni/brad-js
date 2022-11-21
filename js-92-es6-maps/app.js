/* 91. ES6 Maps
======================================================= */
let map1 = new Map();

// Set keys
let key1 = 'Key 1',
    key2 = {},
    key3 = function(){};

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key
// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));

// Count values inside the map
// console.log(map1.size); // 3

// Iterating through map
// Using for ... of to get keys and values
// for( let [key,value] of map1 ){
//     console.log(`${key} = ${value}`);
// }

// Iterate only keys
// for( let key of map1.keys() ){
//     console.log(`${key}`);
// }

// Iterate values only
// for( let value of map1.values() ){
//     console.log(`${value}`);
// }

// Loop with foreach
// map1.forEach(function(key, value){
//     console.log(`${key} = ${value}`);
// });

// map1.forEach(function(key, value){
//     console.log(`${value}`);
// });

// Convert into array
// let keyValArr = Array.from(map1);
// console.log(keyValArr);

// Create an array of the values
// let valArr = Array.from(map1.values());
// console.log(valArr);

// Create an array of the keys
let keyArr = Array.from(map1.keys());
console.log(keyArr);



/*
/// Summary ///
- Maps are key value paired
- We can use any type as key or value
- We can set map values by key
- "size" property used to count values inside the map
- We can Iterate through elements
- For ... of or For in loop can be used to get get map values or keys
- Array.from can be used to convert map to an array
- Map keys can ber converted to an array using Array.from(map1.keys())
- Map values can ber converted to an array using Array.from(map1.values())

// From Sumit:
- Obeject keys are alwasy 'string' data type
- Map intended to use the kay as any data type
- A map holds key-value pairs where the keys can be any datatype
- A map remember the order of the key-vlaue insertion
- Keys are not well ordered in Obeject but for Map keys are ordered by insertion
- Obeject is not directly iterable but Map is iterable
- We can insert an array in the map with key-value pair like this new map([ ["key1", value1],["key2": value] ]);
- Sets & Map are similar just another data structure
- Map has only one property called "size"
- has(key) method
- Kyes must be string or symbol for the Obeject
- entries() method returns an iterator Obeject with  the key-value in a map.
*/