#Symbols

##Creating Symbols
```
let firstName = Symbol("first name");
let person = {};

person[firstName] = "Nicholas";

console.log("first name" in person);        // false
console.log(person[firstName]);             // "Nicholas"
console.log(firstName);                     // "Symbol(first name)"
```

##Sharing Symbols

The Symbol.for() method first searches the global symbol registry to see if a symbol with the key "uid" exists. If so, the method returns the existing symbol. If no such symbol exists, then a new symbol is created and registered to the global symbol registry using the specified key. 

```
let uid = Symbol.for("uid");
let object = {};

object[uid] = "12345";

console.log(object[uid]);       // "12345"
console.log(uid);               // "Symbol(uid)"
```

```
let uid = Symbol.for("uid");
let object = {
    [uid]: "12345"
};

console.log(object[uid]);       // "12345"
console.log(uid);               // "Symbol(uid)"

let uid2 = Symbol.for("uid");

console.log(uid === uid2);      // true
console.log(object[uid2]);      // "12345"
console.log(uid2);              // "Symbol(uid)"
```

compare to

```
let uid = Symbol("uid");
let object = {
    [uid]: "12345"
};

console.log(object[uid]);       // "12345"
console.log(uid);               // "Symbol(uid)"

let uid2 = Symbol("uid");

console.log(uid === uid2);      // false
console.log(object[uid2]);      // "undefined"
console.log(uid2);              // "Symbol(uid)"
```


unique aspect of shared symbols is that you can retrieve the key associated with a symbol in the global symbol registry by calling the Symbol.keyFor() method. For example:

```
let uid = Symbol.for("uid");
console.log(Symbol.keyFor(uid));    // "uid"

let uid2 = Symbol.for("uid");
console.log(Symbol.keyFor(uid2));   // "uid"

let uid3 = Symbol("uid");
console.log(Symbol.keyFor(uid3));   // undefined
```

The symbol uid3 doesn't exist in the global symbol registry, so it has no key associated with it and Symbol.keyFor() returns undefined


##Symbol Coercion

```
let uid = Symbol.for("uid"),
    desc = String(uid);

console.log(desc);              // "Symbol(uid)"

```

 Cannot convert a Symbol value to a string,in implicit data conversion
 
```
let uid = Symbol.for("uid"),
    desc = uid + "";            // error!
    
    let uid = Symbol.for("uid"),
        sum = uid / 1;            // error!
```

##Retrieving Symbol Properties

The return value of Object.getOwnPropertySymbols() is an array of own property symbols.

```
let uid = Symbol.for("uid");
let object = {
    [uid]: "12345"
};

let symbols = Object.getOwnPropertySymbols(object);

console.log(symbols.length);        // 1
console.log(symbols[0]);            // "Symbol(uid)"
console.log(object[symbols[0]]);    // "12345"

```



##Exposing Internal Operations with Well-Known Symbols

The well-known symbols are:

Symbol.hasInstance - A method used by instanceof to determine an object's inheritance.

Symbol.isConcatSpreadable - A Boolean value indicating that Array.prototype.concat() should flatten the collection's elements if the collection is passed as a parameter to Array.prototype.concat().

Symbol.iterator - A method that returns an iterator. (Iterators are covered in Chapter 7.)

Symbol.match - A method used by String.prototype.match() to compare strings.

Symbol.replace - A method used by String.prototype.replace() to replace substrings.

Symbol.search - A method used by String.prototype.search() to locate substrings.

Symbol.species - The constructor for making derived objects. (Derived objects are covered in Chapter 8.)

Symbol.split - A method used by String.prototype.split() to split up strings.

Symbol.toPrimitive - A method that returns a primitive value representation of an object.

Symbol.toStringTag - A string used by Object.prototype.toString() to create an object description.

Symbol.unscopables - An object whose properties are the names of object properties that should not be included in a with statement.

##The Symbol.hasInstance Property

```
let obj = [];

console.log(obj instanceof Array);//true

console.log(Array[Symbol.hasInstance](obj));//true

```

For instance, suppose you want to define a function that claims no object as an instance. You can do so by hardcoding the return value of Symbol.hasInstance to false, such as:


```
function MyObject() {
    // ...
}

Object.defineProperty(MyObject, Symbol.hasInstance, {
    value: function(v) {
        return false;
    }
});

let obj = new MyObject();

console.log(obj instanceof MyObject);       // false
```


```
function SpecialNumber() {
    // empty
}

Object.defineProperty(SpecialNumber, Symbol.hasInstance, {
    value: function(v) {
        return (v instanceof Number) && (v >=1 && v <= 100);
    }
});

let two = new Number(2),
    zero = new Number(0);

console.log(two instanceof SpecialNumber);    // true
console.log(zero instanceof SpecialNumber);   // false
```

##The Symbol.isConcatSpreadable Symbol
```
let collection = {
    0: "Hello",
    1: "world",
    length: 2,
    [Symbol.isConcatSpreadable]: true
};

let messages = [ "Hi" ].concat(collection);

console.log(messages.length);    // 3
console.log(messages);           // ["hi","Hello","world"]



let collection = {
    0: "Hello",
    1: "world",
    length: 2,
    [Symbol.isConcatSpreadable]: false
};

let messages = [ "Hi" ].concat(collection);

console.log(messages.length);    // 2
console.log(messages);          [ 'Hi', { '0': 'Hello', '1': 'world', length: 2 } ]






// effectively equivalent to /^.{10}$/
let hasLengthOf10 = {
    [Symbol.match]: function (value) {
        return value.length === 10 ? [value.substring(0, 10)] : null;
    },
    [Symbol.replace]: function (value, replacement) {
        console.log('replacement:',replacement);
        return value.length === 10 ?
        replacement + value.substring(10) : value;
    },
    [Symbol.search]: function (value) {
        return value.length === 10 ? 0 : -1;
    },
    [Symbol.split]: function (value) {
        return value.length === 10 ? ["", ""] : [value];
    }
};

let message1 = "Hello world",   // 11 characters
    message2 = "Hello John";    // 10 characters


let match1 = message1.match(hasLengthOf10),
    match2 = message2.match(hasLengthOf10);

console.log(match1);            // null
console.log(match2);            // ["Hello John"]

let replace1 = message1.replace(hasLengthOf10,'aaaaaaaaaaa'),
    replace2 = message2.replace(hasLengthOf10);

console.log(replace1);          // "Hello world"
console.log(replace2);          // "Hello John"

let search1 = message1.search(hasLengthOf10),
    search2 = message2.search(hasLengthOf10);

console.log(search1);           // -1
console.log(search2);           // 0

let split1 = message1.split(hasLengthOf10),
    split2 = message2.split(hasLengthOf10);

console.log(split1);            // ["Hello world"]
console.log(split2);            // ["", ""]



```



##The Symbol.toPrimitive Symbol
```
function Temperature(degrees) {
    this.degrees = degrees;
}

Temperature.prototype[Symbol.toPrimitive] = function(hint) {

    switch (hint) {
        case "string":
            return this.degrees + "\u00b0"; // degrees symbol

        case "number":
            return this.degrees;

        case "default":
            return this.degrees + " degrees";
    }
};

let freezing = new Temperature(32);

console.log(freezing + "!");            // "32 degrees!"
console.log(freezing / 2);              // 16
console.log(String(freezing));          // "32°"
```

##The Symbol.toStringTag Symbol

```
unction Person(name) {
    this.name = name;
}

Person.prototype[Symbol.toStringTag] = "Person";

let me = new Person("Nicholas");

console.log(me.toString());                         // "[object Person]"
console.log(Object.prototype.toString.call(me));    // "[object Person]"



function Person(name) {
    this.name = name;
}

Person.prototype[Symbol.toStringTag] = "Person";

Person.prototype.toString = function() {
    return this.name;
};

let me = new Person("Nicholas");

console.log(me.toString());                         // "Nicholas"
console.log(Object.prototype.toString.call(me));    // "[object Person]"




```