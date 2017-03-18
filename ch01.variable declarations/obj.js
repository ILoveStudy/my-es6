/**
 * Created by richard.g on 18/03/2017.
 */


// function createPerson(name, age) {
//
//     return {
//         name: name,
//         age: age
//     };
// }
//
// console.log(new createPerson());
//

// function createPerson(name, age) {
//     return {
//         name,
//         age,
//         wenjun(){
//             console.log(this.name);
//         }
//     };
// }
//
// var c = new createPerson('aa','bbb');
// console.log(c);
// c.wenjun()

// var name = 'aaa';
// var obj = {
//     [name]:'klfdsjlfdsjklfsd'
// }
//
//
// console.log(obj.aaa);
//

// var receiver = {type:'.js'};
//
// Object.assign(receiver, {type: "js", name: "file.js"}, {type: "css"});
//
// console.log(receiver.type,receiver.name);


// var person = {
//     name: "Nicholas",
//     name: "Greg"        // no error in ES6 strict mode
// };
//
//
//
// console.log(person.name);       // "Greg"
//

// var obj = {
//     a: 1,
//     0: 1,
//     c: 1,
//     2: 1,
//     b: 1,
//     1: 1
// };
//
// obj.d = 1;
//
// console.log(Object.getOwnPropertyNames(obj));     // "012acbd"
//
//

let human = {
    getGreeting() {
        return "human ...";
    }
}

let person = {
    getGreeting() {
        return "Hello";
    }
};

// prototype is person
let friend = {
    getGreeting() {
        return super.getGreeting() + ", hi!";
    }
};
Object.setPrototypeOf(person,human);

Object.setPrototypeOf(friend, person);


// prototype is friend
let relative = friend

// console.log(person.getGreeting());                  // "Hello"
// console.log(friend.getGreeting());                  // "Hello, hi!"
// console.log(relative.getGreeting());                // "Hello, hi!"

