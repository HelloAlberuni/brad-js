// Iterator example
function nameIterator( names ){
    let count = names.length;
    return {
        next: function(){
            if( count > 0 ){
                count--;
                return {
                    done: false,
                    value: names[count]
                }
            } else {
                return {
                    done: false
                }
            }
        }
    }
}

let namesArr = ["Alberuni", "Azad", "Denny"];
let names = nameIterator(namesArr);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);

/* Generator
======================================================= */
function* sayNames(){
    yield 'Alberuni';
    yield 'Azad';
    yield 'Denny';
}

let names2 = sayNames();
console.log(names2.next());
console.log(names2.next());
console.log(names2.next());
console.log(names2.next());

function* idCreator(){
    let count = 0;
    while(true){
        yield count++;
    }
}

let ids = idCreator();
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());

/*
/// Summary ///
- Iterators and Generators are both part of ES6 standards
- Iterators are kind of advanced loops that can be paused
- Generators are functions that can be paused and can return multiple values

From Sumit:
- for of array loop is iterable
- object is not iterable
- surprisingly string is also iterable
- number is not iterable
- iterable is what in which there is Symbol.iterator is present in the __proto__
- The main benifit of using iterator is we can render values from a big list chuck by chuck with pause support.
The pause mechanisom is not like the aysnchronus pause using event loop.
- This pause behavior is real time pause
- Iterator protocall (a term) // is a set of rules
Rule 1: Must be an object
Rule 2: It needs to implement a next() method
Rule 3: next() must return an object with done: and value:
- Spread operator only works for iterable
- ... is called Spread operator
- ... operator used to get elemments for iterable by sperading
- console.log([..."hello"]) example of Spread operator
- spread operator use Iterator behind the schene
- Generator is a upgraded version of iterator


To be iterable must have below protocalls
1. Must hav a sysbbol.iterator function property
2. The sysbbol.iterator must return an Iterator
*/