/* 85. Regular expressions part 3 - Character Sets & Quantifires
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

// Brackets [] - Character sets
re = /gr[ae]y/i;     // gray,grey Matches an a or e
re = /[GP]ray/;      // Gray,Pray Matches a G or P with case sensative
re = /[^GP]ray/;     // except Gray,Pray everyting. Match anything except G or P. Opposite of the above. Inside brace ^ represnts "not".
re = /[A-Z]ray/;     // Gray, Pray, Tray etc. Matches any uppercase letters.
re = /[a-z]ray/;     // gray, pray, tray etc. Matches any lowercase letters.
re = /[A-Za-z]ray/;  // gray, Tray, tray etc. Matches any lower or upper case letters.
re = /[0-9]ray/;     // 9ray, 1ray, hello1ray etc. Matches any digit.

// Braces {} - Quantifires
re = /Hel{2}o/;      // hello Must have 'l" 2 amount of times.
re = /Hel{2,4}o/;    // Helllo Must have 'l" 2-4 amount of times. "," represnts range here.
re = /Hel{2,}o/;     // Helllo Must have 'l" at least 2 amount of times.

// Paretheses () - Used for Groping
re = /([0-9]x){3}/;  // 9x9x9x,3x3x3x3x. [0-9]x must have 3 amout of times.

// String to match
const str = '3x3x3x3x';  

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
- ^,$,? called as litteral
- ^ generally refers as "Start with" 
- ^ inside [] refers except
- [] refers Character Sets
- {} refers Quantifires / Quantity
- () used for Grouping
*/