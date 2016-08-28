#Objects

##Property Initializer Shorthand

In ECMAScript 5 and earlier, object literals were simply collections of name-value pairs. That meant there could be some duplication when property values are initialized. For example:

```
es5
function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
}

es6

function createPerson(name, age) {
    return {
        name,
        age
    };
}

```

##Concise Methods

```

es5
var person = {
    name: "Nicholas",
    sayName: function() {
        console.log(this.name);
    }
};


es6

var person = {
    name: "Nicholas",
    sayName() {
        console.log(this.name);
    }
};


```

##Computed Property Names

```
es5
var person = {
    "first name": "Nicholas"
};

console.log(person["first name"]);
  
  
es6
  
var lastName = "last name";

var person = {
    "first name": "Nicholas",
    [lastName]: "Zakas"
};

console.log(person["first name"]);      // "Nicholas"
console.log(person[lastName]);          // "Zakas"


  
var suffix = " name";

var person = {
    ["first" + suffix]: "Nicholas",
    ["last" + suffix]: "Zakas"
};

console.log(person["first name"]);      // "Nicholas"
console.log(person["last name"]);       // "Zakas"
    
```

##The Object.is() Method

```
console.log(+0 == -0);              // true
console.log(+0 === -0);             // true
console.log(Object.is(+0, -0));     // false

console.log(NaN == NaN);            // false
console.log(NaN === NaN);           // false
console.log(Object.is(NaN, NaN));   // true

console.log(5 == 5);                // true
console.log(5 == "5");              // true
console.log(5 === 5);               // true
console.log(5 === "5");             // false
console.log(Object.is(5, 5));       // true
console.log(Object.is(5, "5"));     // false
```

##The Object.assign() Method

Mixins object ,same with extend() 

var receiver = {};

Object.assign(receiver,
    {
        type: "js",
        name: "file.js"
    },
    {
        type: "css"
    }
);

console.log(receiver.type);     // "css"
console.log(receiver.name);     // "file.js"



##Duplicate Object Literal Properties

```
var person = {
    name: "Nicholas",
    name: "Greg"        // no error in ES6 strict mode
};

console.log(person.name);       // "Greg"

```

##Own Property Enumeration Order

Object.getOwnPropertyNames()  return the key  as a array  in order;

```
var obj = {
    a: 1,
    0: 1,
    c: 1,
    2: 1,
    b: 1,
    1: 1
};

obj.d = 1;

console.log(Object.getOwnPropertyNames(obj).join(""));     // "012acbd"
```

##Changing an Object's Prototype

```
es5

let person = {
    getGreeting:function() {
        return "Hello";
    }
};


es6
let person = {
    getGreeting() {
        return "Hello";
    }
};

```

##super word

```
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
Object.setPrototypeOf(friend, person);


// prototype is friend
let relative = Object.create(friend);

console.log(person.getGreeting());                  // "Hello"
console.log(friend.getGreeting());                  // "Hello, hi!"
console.log(relative.getGreeting());                // "Hello, hi!"


```