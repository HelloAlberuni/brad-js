/* 97. Factory pattern
======================================================= */
// Member Factory
function MemberFactory(){
    this.createMember = function(name, type){
        let member;

        if( type === 'simple' ){
            member = new simpleMembership('Alberuni');
        }else if( type === 'standard' ){
            member = new standardMembership('Azad');
        }else if( type === 'super' ){
            member = new superMembership('Mahmudur');
        }
        
        member.type = type;
        member.define = function(){
            console.log(`${this.type} ${this.name} ${this.cost}`);
        }

        return member;
    }
    this.name = 'Alberuni';
    this.type = 'default';
}

let simpleMembership = function(name, cost){
    this.name = name;
    this.cost = '$5';
}

let standardMembership = function(name, cost){
    this.name = name;
    this.cost = '$10';
}

let superMembership = function(name, cost){
    this.name = name;
    this.cost = '$15';
}

let members = [];
let factory = new MemberFactory();

members.push(factory.createMember('Alberuni', 'simple'))
members.push(factory.createMember('Zenaul', 'standard'))
members.push(factory.createMember('Mahmudur', 'super'))

// console.log(members);
members.forEach(function(member){
    member.define();
});



// From DevSage:
function Developer( name ){
    this.name = name;
    this.type = 'developer';
}

function Tester( name ){
    this.name = name;
    this.type = 'tester';
}

function EmployeeFactory(){
    this.create = (name, type) => {
        switch (type) {
            case 'developer':
                return new Developer(name);
                break;
        
            case 'tester':
                return new Tester(name);
                break;
        }
    }
}

function say(){
    console.log(`Hi, I am ${this.name} and I am a ${this.type}`);
}

let employeeFactory = new EmployeeFactory();

// tmporary database (arr)
let employees = [];

// start inserting our employees in our database/arr
employees.push(employeeFactory.create('Alberuni', 'developer'));
employees.push(employeeFactory.create('Zenaul', 'developer'));
employees.push(employeeFactory.create('Mahmudur', 'tester'));

employees.forEach( emp => {
    say.call(emp); // see @https://www.w3schools.com/js/js_function_call.asp
} );


/*
/// Summary ///
- Factory methods are often used in applications to manage and maintain, manipulate collections of objects that are different but at the same time have many common characteristics. A good example is a member of membership website

// From DevSage:
- A Factory is a building where things are manufactured, in programming sense a Factory is a object that creates or manufactures different objects (What?)
- There are 3 main types of design pattern
    - Creational 
    - Stractural and
    - Behavioural pattern
- Factory pattern is of the Creational category
- It is helpfull when we need to create many differnt types of objects (Why?)
- It is very clean, help keep record, very consise (Why?)

- Factory allows to handle all of your object creation in a centralized location so we don't have to worry about const object = new Object(); const object2 = new Object() and so on


// From Sumit:
*/