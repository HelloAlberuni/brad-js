/* 86. Regular expressions part 4 - Shorthand Character Classes
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

// Shorthand Character Classes
re = /\w/; // 3x3x3x3x = 3. Word character - alphanumeric or _
re = /\w+/; // 3x3x3x3x = 3x3x3x3x. + refers one or more.
// if we put str = '[]', str = '()' etc except alphanumeric it wont work. 
// [hello matches "hello"
re = /\W+/; // []. Non wordcharacters
re = /\d+/; // Match any digit. "hello123 azad134" matches "123"
re = /\D+/; // Non digit. "hello123 azad134" matches "hello"
re = /\s+/; // Match whitespace characters. "hello123 azad134" matches ""
re = /\S+/; // Non whitespace characters. "hello123 azad134" matches "hello123"
re = /Hell\b/i; // Word boundary. "Hello welcome to hell" matches "hell"

// Assertions - "conditional, demand, চাহিদা, দাবি, দাবী, সন্ধান, টান"
re = /x(?=y)/i; // Match x followed by y. "Hi xyelcome" matches "x"
re = /x(?!y)/i; // Match x if not followed by y. "Hi xyelcome xcome" matches "x of xcome"

// String to match
const str = 'Hi xyelcome xcome';  

// Log result
const result =re.exec(str);
console.log(result);

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
- \w    refers Word character (alphanumeric or _)
- \w+   here + refers one or more character
- \W    refers Non Word character (uppercase W). Means anything but not but not letters, numbers or underscore.
- \d    refers any digit.
- \D    refers non digit.
- \D+   refers one or more non digit
- \s    refers whitespace characters.
- \S    refers non-whitespace characters.
- \b    refers word boundary.
- x(?=y)    means, match x followed by y.
- x(?!y)    means, match x not followed by y.
*/