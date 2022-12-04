/* 99. Mediator pattern
======================================================= */
// Create constructor fuction
const User = function(name){
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(message, to){
        this.chatroom.send(message, this, to);
    },
    receive: function(message, from){
        console.log(`${from.name} to ${this.name} message: ${message}`);
    }
}

const ChatRoom = function(){
    let users = {} // users list

    return {
        register: function(user){
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to){
            if(to){
                // single user messgage
                to.receive(message, from);
            } else { // group message
                 for(key in users){
                    if(users[key] !== from){
                        users[key].receive(message, from);
                    }
                 }
            }
        }
    }
    
}

const Alberuni = new User('Alberuni');
const Mahmudur = new User('Mahmudur');
const Zenaul = new User('Zenaul');

const chatroom = new ChatRoom();

chatroom.register(Alberuni);
chatroom.register(Mahmudur);
chatroom.register(Zenaul);

Alberuni.send('Hello Mahmudur vai', Mahmudur);
Mahmudur.send('Hello Azad vai are you there?', Alberuni);

/*
/// Summary ///
- It is a Behavioural pattern
- Basically it is an interface for communicating called colleagues which are just mediated object.
- The best example of this pattern is a chatroom


// From google
- mediator = মধ্যস্থতাকারী, মীমাংসক, শান্তিসংস্থাপক, peacemaker
- mediator = a person who attempts to make people involved in a conflict come to an agreement

// From Sumit:

// From DevSage:

*/