/* 83. Regular expressions part 2 - Matchcharacter Symbols
======================================================= */
let re;
// litteral characters
re = /hello/;

// Matchcharacter Symbols
re = /^h/i;         // hello Must start with
re = /d$/i;         // azad  Must end with
re = /^hello$/i;    // hello Must start and end with
re = /^h.llo$/i;    // h1llo Mathes one characters, like wildcard. the character at . will not match but match before and after.
re = /^h*llo$/i;    // h1111llo,hllo Matches any character 0 or more times.
re = /gre?a?y/i;    // gray,grey,gry Optional character
re = /gre?a?y\?/i;   // gr, Escape character. (Didn't understnad it properly)


// String to match
const str = 'gra4?';

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