#Let Declarations
###0,no Hoisting
###1.Block-Level Declarations,
###2.No Redeclaration


#Constant Declarations

 Variables declared using const are considered constants, meaning their values cannot be changed once set. For this reason, every const variable must be initialized on declaration
 
###0,no Hoisting
###1,must to be initialization
###2.Block-Level Declarations,
###3.No Redeclaration
```
const a="a";
const a="a";//error Redeclaration

```

**OR**

```
let a="a";
const a="a";//error Redeclaration

```

###4.no reset value
```
const maxItems = 5;

maxItems = 6;      //error
```
 
###5. Declaring Objects with Const

```
const person = {
    name: "Nicholas"
};

// works
person.name = "Greg";

// throws an error
person = {
    name: "Greg"
};

```
can not use "typeof"


###Functions in Loops

The characteristics of var have long made creating functions inside of loops problematic, because the loop variables are accessible from outside the scope of the loop. Consider the following code:
```
var funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function() { console.log(i); });
}

funcs.forEach(function(func) {
    func();     // outputs the number "10" ten times
});




let funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function() { console.log(i); });//1,2,3,4,5
}

funcs.forEach(function(func) {
    func();     //1,2,3,4,5
});





for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i); /1,2,3,4
    }, 0)
}


```

That's because i is shared across each iteration of the loop, meaning the functions created inside the loop all hold a reference to the same variable.

