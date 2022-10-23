/* 83. Regular expressions
======================================================= */

let re;
re = /hello/; // this is itself is a regular expression
// re = /hello/i; // i = define the expression as case insensative
// re = /hello/g; // g = global. Gonna search entire this for all instances of hello not just the first one we find

// console.log(re); // expression with the slashes around it
// console.log(re.source); // actual expression disregards the slashes

// const result = re.exec('hello World'); // Mathced
// const result = re.exec('hi World'); // reutrns null. Does not matched
// const result = re.exec('helloazad World'); // Mathced
// console.log(result);

// test()
// re.test('Hello'); // return false
// re.test('Hello'); // returns true because we make the expression case insensative

// match()
// const str = 'Hello there';
// const result = str.match(re);
// console.log(result);

// search()
// const str = "hello there hello azad";
// const result = str.search(re);
// console.log(result);

// replace()
const str = "hello there hello azad";
const newStr = str.replace(re, 'hi'); //return hi there hello azad when 'g' flag is not present.
console.log(newStr);

/*
/// Summary ///
- Regular expressions is basicly used to describe a pattern of characters
- Used for pattern matching, searching, pulling things
- Commonly used for validation
- For example email address, phone number has a certain pattern
- expression wraped with slashes instead quotation
- i used used to define expression case insensative

Functions is JS used to valuate the regular expressions
- exec() - Return result in an array if matched or null
- test() - Return true or false
- match()  - Return result array or null. similar to exec but a little different. kind of opposite how exec works
- search() - Returns index of the first match if not return -1
- replace - Return a new string with some or all matches of a pttern
*/