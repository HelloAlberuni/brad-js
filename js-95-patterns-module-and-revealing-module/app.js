/* 95. Module & Revealing Module pattern
======================================================= */
// () declare IIFE
// write Anonymous function in IIFE
// (function(){

// })


// (function(){

// })(); // () represnts Execute IIFE

// Full Blueprint / Stracture
// (function(){
//     // declare private var and function definations here

//     return {
//         // declare public var and nd functions
//     }
// })(); // () represnts Execute IIFE

// Standard module pattern
let UIController = (function(){
    let text = 'Hello Alberuni';

    let changeText = function(){
        let element = document.querySelector('h4');
            element.textContent = text;
    }

    return {
        callChageText: function(){
            changeText();
            console.log(text);
        }
    }
})();

// UIController.callChageText();
// console.log(UIController.changeText()); // Uncaught TypeError: UIController.changeText is not a function. Because changeText function is private
// console.log(UIController.text); // undefined

/* Revealing Module Pattern
======================================================= */
let itemController = (function(){
    let items = [];

    function add(item){
        items.push(item);
    }

    function get(id){
        return items.find( item => {
            return item.id === id;
        } );
    }

    return {
        add: add, // Revealing here
        get: get
    }
})();

itemController.add({name: 'Alberuni', id: 1});
itemController.add({name: 'Azad', id: 2});
console.log(itemController.get(2)); // Object { name: "Azad", id: 2 }

/*
/// Summary ///
- From ES6 introduced actual modules in JavaScript
- This is still not supported in browsers
- We need to use a compiler like BABBEL along with a module loader like Webpack for that to work
- We can use separate files to export modules which are just custom pieces of code and import them into a new file (WHY?)
- IIFE (New keyword) An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. It is a design pattern which is also known as a Self-Executing Anonymous Function. (HOW?)
- Revealing Module looks cleaner
- Sinngleton is another variable of the module pattern

- let _data; here _ represnts private variable

// From Sumit:
*/