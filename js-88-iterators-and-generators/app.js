// Iterator example
function nameIterator(){

}


/*
/// Summary ///
- Iterators and Generators are both part of ES6 standards
- Iterators are kind of advanced loops that can be paused
- Generators are functions that can be paused and can return multiple values

From Sumit:
- for of array loop is iterable
- object is not iterable
- surprisingly string is also iterable
- number is not iterable
- iterable is what in which there is Symbol.iterator is present in the __proto__
- The main benifit of using iterator is we can render values from a big list chuck by chuck with pause support.
The pause mechanisom is not like the aysnchronus pause using event loop.
- This pause behavior is real time pause
- Iterator protocall (a term) // is a set of rules
Rule 1: Must be an object
Rule 2: It needs to implement a next() method
Rule 3: next() must return an object with done: and value:
- Spread operator only works for iterable
- ... is called Spread operator
- ... operator used to get elemments for iterable by sperading
- console.log([..."hello"]) example of Spread operator
- spread operator use Iterator behind the schene
- Generator is a upgraded version of iterator


To be iterable must have below protocalls
1. Must hav a sysbbol.iterator function property
2. The sysbbol.iterator must return an Iterator
*/