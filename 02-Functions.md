#Functions

#Default Parameter Values in ECMAScript 6

```
function makeRequest(url, timeout = 2000, callback = function() {}) {

    // the rest of the function

}


let value = 5;

function getValue() {
    return value++;
}

function add(first, second = getValue()) {
    return first + second;
}

console.log(add(1, 1));     // 2
console.log(add(1));        // 6
console.log(add(1));        // 7



function add(first, second = first) {
    return first + second;
}

console.log(add(1, 1));     // 2
console.log(add(1));        // 2



function getValue(value) {
    return value + 5;
}

function add(first, second = getValue(first)) {
    return first + second;
}

console.log(add(1, 1));     // 2
console.log(add(1));        // 7





```

##Default Parameter Value Temporal Dead Zone

```
function add(first = second, second) {
    return first + second;
}

console.log(add(1, 1));         // 2
console.log(add(undefined, 1)); // throws error

same with below:

// JavaScript representation of call to add(1, 1)
let first = 1;
let second = 1;

// JavaScript representation of call to add(undefined, 1)
let first = second;
let second = 1;
```



##Rest Parameters(可变参数)

```
function pick(object, ...keys) {
 
}

let values = [25, 50, 75, 100]

// equivalent to
// console.log(Math.max(25, 50, 75, 100));
console.log(Math.max(...values));           // 100
```

##The new.target MetaProperty

```
function Person(name) {
    if (typeof new.target !== "undefined") {
        this.name = name;   // using new
    } else {
        throw new Error("You must use new with Person.")
    }
}

var person = new Person("Nicholas");
var notAPerson = Person.call(person, "Michael");    // error!

```

##Block-Level Functions

```
"use strict";
if (true) {

    // Throws a syntax error in ES5, not so in ES6
    function doSomething() {
        // ...
    }
}

console.log(typeof doSomething);  // "undefined"
```

##Arrow Functions

No arguments Binding

```
var comparator = (a, b) => {
    return arguments[0];
};

console.log(comparator(200000));//{}

```



