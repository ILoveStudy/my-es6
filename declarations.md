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

