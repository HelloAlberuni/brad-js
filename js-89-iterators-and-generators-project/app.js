/**
 * Plan
 * 
 * On load page for first time
 * request for the profiles data
 * save the data to local storage & update ui
 * 
 * user reload the webpage
 * get the data from localStorage & update ui
 */

// resource https://stackoverflow.com/questions/70374293/how-to-iterate-using-iterator-over-api-object-using-javascript

// document addEventListener('DOMContentLoaded')

    // profile = getData();


 // getData(){
    // If data is set to local storage
        // Get the data from localstorage 
        // profile = profiles.next().value;
        // return profile
    // else
        // Requst data from api and save it to local storage
        // Get the data from localstorage 
        // profile = profiles.next().value;
        // return profile
//  }   

// const data = JSON.parse(localStorage.getItem('users'));

// // For the first time take the data from API and save it to localstorage
// var obj;

// if( !data ){
//     fetch('https://randomuser.me/api/?results=10')
//     .then(res => res.json())
//     .then(data => {
//         obj = data;
//     })
//     .then(() => {
//         // Set data to localstorage
//         localStorage.setItem('users', JSON.stringify(obj.results));

//         // updateUI( data[0] );
//     });
// } {
//     // On load
//     window.addEventListener('DOMContentLoaded', updateUI());

//     document.querySelector('#next').addEventListener('click', updateUI);
// }


// function updateUI( profile = null ){

//     console.log(!profile);
//     const profiles = profileIterator( data );
//     profile = profiles.next().value;

//     if( !profile ){
        
//         // On click next button
        
//         console.log(profile);
//     }

//     if( profile == undefined ){
//         alert("No more profiles");
//         window.location.reload();
//         return;
//     }

//     // Iterator through the data and show the first user info then 2nd ans so on    
//     document.querySelector('#imageDisplay').innerHTML = `<img src="${profile.picture.large}" />`;

//     let html = `
//     <ul class="list-group">
//         <li class="list-group-item">Name: ${profile.name.first} ${profile.name.last}</li>
//         <li class="list-group-item">Age: ${profile.dob.age}</li>
//         <li class="list-group-item">Email: ${profile.email}</li>
//         <li class="list-group-item">Address: ${profile.location.city}, ${profile.location.country}</li>
//         <li class="list-group-item">Phone: ${profile.phone}</li>
//     </ul>
//     `;
//     document.querySelector('#profileDisplay').innerHTML = html;
// }

// /**
//  * It takes an array and iterate through it
//  * 
//  * @param profiles - an array of profiles
//  * @returns An object with a next method.
//  */
// function profileIterator( profiles ){
//     let count = profiles.length;

//     return {
//         next: function(){
//             if( count > 0 ){
//                 count--;

//                 return {
//                     done: false,
//                     value: profiles[count]
//                 }
//             } else {
//                 return {
//                     done: true,
//                 }
//             }
//         }
//     }
// }