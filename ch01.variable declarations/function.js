// let robbin = () => {
//
// }
//


// let obj = {
//     say(){
//         console.log(this.name);
//         let show = function () {
//             console.log(this);
//
//         }
//         show();
//     },
//     name: 'richardgong'
// }
//
// obj.say();

// let obj = {
//     say(){
//         let show = function () {
//             console.log(this.name);
//         }
//
//         show.call(this);
//     },
//     name: 'richardgong'
// }
//
// obj.say();

// let obj = {
//     say(){
//         let show = () => {
//             console.log(this.name);
//         }
//         show();
//     },
//     name: 'richardgong'
// }
//
// obj.say();
//


// let  add = (first = second, second) =>{
//     return first + second;
// }


// function add (robin = 1000) {
//     console.log(robin);
// }
//
//
// add(90900);

// function makeRequest(url, timeout = 2000, callback = function () {
//     console.log('im defautl function');
// }) {
//
//
//     callback();
//
// }
//
// makeRequest('','',function () {
//     console.log('i am klfdsjlfdsjlfds');
// });

// let value = 5;
//
// function getValue() {
//     return value++;
// }
//
// function add(first=1, second = getValue()) {
//     console.log(second);
//     return first + second;
// }
//
// console.log(add());


// function add(first, second = first, third = second) {
//     return first * second * third;
// }
//
//
// console.log(add(10))
//


// function getValue(value) {
//     return value + 5;
// }
//
// function add(first, second = getValue(first)) {
//     return first + second;
// }
//
// console.log(add(1, 1));     // 2
// console.log(add(1));        // 7
//


// function aa(...values) {
//     console.log(Math.max(...values));
// }
// aa(2, 3, 5, 5, 6, 6, 100, 2000, 20023023, 100)

// let values = [25, 50, 75, 100]
// console.log(Math.max(...values));


// function Person(name) {
//     if (typeof new.target !== "undefined") {
//         this.name = name;   // using new
//     } else {
//         //throw new Error("You must use new with Person.")
//     }
// }
//
// var person = new Person("Nicholas");
// var notAPerson = Person.call(person, "Michael");    // error!
//
// console.log(person, notAPerson);
//


// if (true) {
//
//     // Throws a syntax error in ES5, not so in ES6
//     function doSomething() {
//         // ...
//     }
// }
//
// console.log(typeof doSomething);  // "undefined"
//

var name ='aaa';
var id='id';

var obj = {
    [name]:'klfdsjlkfs',
    id
}


console.log(obj.aaa);

