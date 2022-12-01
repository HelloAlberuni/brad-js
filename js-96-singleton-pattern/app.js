/* 96. Sinngleton pattern
======================================================= */
let SinngletonP = (function(){
    let instancee;

    let createInstance = function(){
        let obj = new Object({name: 'Azad'});
        return obj;
    }
    
    return {
        getInstance: function(){
            if( !instancee ){
                instancee = createInstance();
            }
    
            return instancee;
        }
    }
})();

let ins1 = SinngletonP.getInstance();
let ins2 = SinngletonP.getInstance();

// console.log(ins1 == ins2); // true (same instance)
console.log(ins1); // {name: 'Azad'}

/*
/// Summary ///
- Actually a menifestation of module pattern
- Sinngleton object is a Immediate Anonymous function and can only return one instance of an object at a time
- Repeated calls to the constructor will just return the same instance.
- Like the module pattern, it maintains a private reference which nothing from the outsite can access
- An example of using Sinngleton pattern is: one user object created at a time, maybe a logged in user
- Sinngleton gives us a global point of access rather than embracing encapsulation
- It is a well known pattern across all programming languages

// From Sumit:
*/