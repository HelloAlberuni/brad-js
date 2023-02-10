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
console.log(http);

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

// Delete request
// document.addEventListener('DOMContentLoaded', function(){
//     http.delete('http://localhost:3000/posts/2')
//     .then( res => console.log(res) )
//     .catch( err => console.log(err) )
// });


import { ui } from './UI';

// Initial state of the App
document.addEventListener('DOMContentLoaded', displayPosts );

// Listen for add/update post
ui.submiBtn.addEventListener('click', submitPost );

// Listen to enable edit state
ui.posts.addEventListener('click', enableEditState );

// Listen for delete
ui.posts.addEventListener('click', deletePost );

// Display posts
function displayPosts(){
    http.get('http://localhost:3000/posts')
    .then( res => ui.displayPosts(res) )
    .catch( err => console.log(err) )
}

// Reload post list when any post is added/edited/deleted
function reloadPosts(){
    http.get('http://localhost:3000/posts')
    .then(res => ui.displayPosts(res))
    .then(err => console.log(err))
}

// Listen for add/update post
function submitPost(e){
    e.preventDefault();

    // Validation
    if(ui.titleInput.value === '' || ui.bodyInput.value === ''){
        ui.displayMessage('Please fill in all the fields', 'alert alert-danger')
        return;
    }

    
    if( !ui.idInput.value ){
        // Add
        http.post('http://localhost:3000/posts', {
            title: ui.titleInput.value,
            body: ui.bodyInput.value
        })
        .then( res => {
            alert('Post Added!');
            ui.clearForm();
            reloadPosts()
        } )
        .catch( err => console.log(err) )
    } else if( ui.idInput.value ){
        // Update
        http.put(`http://localhost:3000/posts/${ui.idInput.value}`, {
            title: ui.titleInput.value,
            body: ui.bodyInput.value
        })
        .then( res => {
            alert('Post Updated!');
            ui.clearForm();
            reloadPosts()
        } )
        .catch( err => console.log(err) )
    }
}

// Listen for enable edit state
function enableEditState(e){
    e.preventDefault();
    
    if(e.target.parentElement.classList.contains('edit')){
        let id = e.target.parentElement.dataset.id;
        let title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        let desc = e.target.parentElement.previousElementSibling.textContent;

        let data = {
            id, title, desc
        }

        ui.fillForm(data);
    }
}

// Listen for delete
function deletePost(e){
    e.preventDefault();

    if(e.target.parentElement.classList.contains('delete')){
        if( confirm('Do you want to delete the post!') ){
            let id = e.target.parentElement.dataset.id;
            http.delete(`http://localhost:3000/posts/${id}`)
            .then( res => {
                alert('Post Deleted!');
                reloadPosts();
            })
            .catch( err => console.log(err) )
        }
    }
}