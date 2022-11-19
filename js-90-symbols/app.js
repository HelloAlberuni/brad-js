/* 90. Symbols
======================================================= */
// Create a symbol
const sym = Symbol();
const sym2 = Symbol('sym2');

// console.log(sym);
// console.log(sym2);
// console.log(typeof sym2); // symbol
// console.log(Symbol() == Symbol()); // false

// Unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {}
myObj[KEY1] = 'Prop 1';
myObj[KEY2] = 'Prop 2';
myObj.key3 = 'Prop 3';
myObj.key4 = 'Prop 4';

// console.log(myObj[KEY1]); // Prop 1
// console.log(myObj[KEY2]); // Prop 2

// sysmbols will not show up
// for( let i in myObj ){
//     console.log(i + `:${myObj[i]}`);
// }

// From Sumit
let symbol1 = Symbol.for('Symbol 1');
let symbol2 = Symbol.for('Symbol 1');

// console.log(symbol1 == symbol2); // returns true because when we use only one instanlce is create for each symbol

var name2 = Symbol();
var name3 = Symbol();
let obj1 = {
    name: 'Alberuni Azad',
    [name2]: 'Sakib',
    [name3]: 'Hassan'
}

console.log(obj1);

/*
/// Summary ///
- Symbols are not enumerable in for...in loop
- Symbols are ignored by JSON.stringify()

From Sumit:
- It is introduced from ES6
- Symbol is a new data type like the data types we already know like string, boolean
- It is a primitive data type (There are two kinds of data types primitive & reference)
- We can't use the "new" keyword to create a symbol
- All functions in JS have a constructor but the exception is Symbol() is not a constructor function
- Symbols are Unique
- Symbol shows in console with "orange color"
- Each time we call Symbol returns a Unique id (identifier) but that is hidden
- Using Symbol.for() should be avoid
- We can use Symbol as a property of an object, but the property name should be wrapped by []
- Symbols are excluded when we use loop / object.keys(obj1), this is one of the main use cases of a symbol
- Another main use case of Symbol is, that we can change the behavior of a JavaScript core method without hurting its default behavior. e.g:
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let index = fruits.indexOf("Apple"); // will return 2

// What if I want

fruits.indexOf("Apple"); // will return 'two' ?

Means instead of number '2' I want to return 'two' (string).
But still use the same method indexOf().

This is when Symbols can be used to implement custom behavior of the indexOf() method. 

- It works as like other premitive data types
- Sigletone means, we can instantiate a class e.g new Person() only one time 
- Console.log(Array.prototype) can be used to get the methods which can be used for Array. E.g: Array.keys()
- For example we want a new keys() method can can be used with Array.keys() with differnt behavior,
this is where we can use symbol. And this is the main reason symbol intented
- Well known symbols (new keyword)
*/