/* 82. Learn & Practice error handling
======================================================= */


// myFunction();

// Variable used to produce our own error
let user = {email: 'jdoe@gmail.com'}

try {
    /// Global or Core Errors ///

    // Produce a ReferenceError
    // myFunction();

    // Produce a TypeError
    // null.myFunction();

    // Produce a SyntaxError
    // console.log(eval('hello')); // evaluating hello as variable. ReferenceError: hello is not defined
    // console.log(eval('"hello"')); // evaluating hello as string. ReferenceError: hello is not defined
    // eval('Hello World'); // SyntaxError: unexpected token: identifier

    // Produce a URIError
    // decodeURIComponent('%');  // URIError: malformed URI sequence

    // Product / crate our Own error
    if( !user.name ){
        // throw 'User has no name'; // Our own error

        // We can also formate it on a certain type or Error
        throw new SyntaxError('User has no name');

    }

} catch (error) {
    // console.log(error);
    // console.log(error.message); // to get only the message
    // console.log(error.name); // to get the type of error
    // console.log(error instanceof ReferenceError); // to get what kind of error is this [return true]
    // console.log(error instanceof TypeError); // to get what kind of error is this [return false]

    // For our own error
    console.log(`User Erorr:' ${error.message}`);
} finally{ // 3rd piece of block
    console.log('Finally run regardless of the result, no matther what happes.');
}

console.log('Program continues');

/*
/// Summary ///
- Try catch used to handle errors
- Using this we can hanle errors without stopping the entire scritps
- Some core error types are [ReferenceError, TypeError, SyntaxError, URIError]
- We can create our own error type using 'throw' keyword
- We can also convert our own error into any of the core error types using throw new SyntaxError('User has no name');
- We can get the error informations in the catch block
    - error message
    - error type
    - check the error if it is of any kind of core errros
*/