#String 

##The repeat() Method

##Template Literals

```
let count = 10,
    price = 0.25,
    message = `${count} items cost $${(count * price).toFixed(2)}.`;

console.log(message);       // "10 items cost $2.50."
```

##Tagged Templates
```
let message = tag`Hello world`;

function tag(literals, ...substitutions) {
    // return a string
}


```