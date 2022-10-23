/* 83. Regular expressions part 2 - Matchcharacter Symbols
======================================================= */
let re;
// litteral characters
re = /hello/;

// Matchcharacter Symbols
re = /^h/i; // Must start with

// String to match
const str = 'hello world';

// Log result
function reTest(re, str){
    if( re.test(str) ){
        console.log(` ${str} matches ${re.source} `);
    } else {
        console.log(` ${str} does not matches ${re.source} `);
    }
}

reTest(re, str);

/*
/// Summary ///
- 
*/