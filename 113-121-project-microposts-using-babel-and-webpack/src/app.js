// CommonJS module syntax
// const person = require('./module1');

// ES2015 Module

// Importing multiple modules
// import { person, person2, sayHello } from './module2';
// console.log(sayHello()); // need () for the function calling

// Import all modules of a file
import * as myallmodule from './module2'; // All modules are exported into the myallmodule alias/variable

// console.log(myallmodule.person3.name); // leads error cause the person3 module exported in the file as defuault

// console.log(myallmodule.sayHello());

// import person3 from './module2'; // person3 module is exported as default in the file, so no need to use {person3}
// console.log(person3.name);

import { http } from './http';

// Get posts on dom load
// document.addEventListener('DOMContentLoaded', function(){
//     http.get('http://localhost:3000/posts')
//     .then( res => console.log(res) )
//     .catch( err => console.log(err) )
// });

// Post request
// document.addEventListener('DOMContentLoaded', function(){
//     http.post('http://localhost:3000/posts', {
//         "title": "New post 1",
//         "author": "azad"
//     })
//     .then( res => console.log(res) )
//     .catch( err => console.log(err) )
// });

// Put request
// document.addEventListener('DOMContentLoaded', function(){
//     http.put('http://localhost:3000/posts/2', {
//         "title": "New post title",
//         "author": "azadd"
//     })
//     .then( res => console.log(res) )
//     .catch( err => console.log(err) )
// });

import { ui } from './UI';

// Delete request
document.addEventListener('DOMContentLoaded', function(){
    http.get('http://localhost:3000/posts')
    .then( res => ui.displayPosts(res) )
    // .then( res => console.log(res) ),
    .catch( err => console.log(err) )
});