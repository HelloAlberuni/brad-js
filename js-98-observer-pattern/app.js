/* 98. Objserver pattern
======================================================= */
// Create a constructor function
function EventObserver(){
    this.observers = [];
}

// Create prototype
EventObserver.prototype = {
    subscribe: function(fn){
        this.observers.push(fn);
        console.log(`You are subscribed to ${fn.name}`);
    },
    unsubscribe: function(fn){
        this.observers = this.observers.filter(function(item){
            if(item !== fn){
                return item;
            }

            console.log(`You are now unsubscribed to ${fn.name}`);
        });
    },
    fire: function(){
        this.observers.forEach(function(item){
            item.call();
        });
    }
}

let click = new EventObserver();

// Event listeners
document.querySelector('.sub-ms').addEventListener('click', function(e){
    click.subscribe(getCurrMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function(e){
    click.unsubscribe(getCurrMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function(e){
    click.subscribe(getCurrSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function(e){
    click.unsubscribe(getCurrSeconds);
});

document.querySelector('.fire').addEventListener('click', function(e){
    click.fire();
});

// Click handler
let getCurrMilliseconds = function(){
    console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);
}

let getCurrSeconds = function(){
    console.log(`Current seconds: ${new Date().getSeconds()}`);
}

/*
/// Summary ///


// From Sumit:

// From DevSage:
- Observer pattern is very usefull and commonly used when it comes to creating event handling systems
*/