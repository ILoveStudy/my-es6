#07-Sets-And-Maps.md

##Creating Sets and Adding Items

```
let set = new Set();
set.add(5);
set.add("5");

console.log(set.size);    // 2



let set = new Set(),
    key1 = {},
    key2 = {};

set.add(key1);
set.add(key2);

console.log(set.size);    // 2




let set = new Set();
set.add(5);
set.add("5");    // duplicate - this is ignored
set.add("5");
set.add(5);     // duplicate - this is ignored

console.log(set.size);    // 2



duplicate - this is ignored
let set = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(set.size);    // 5
```


You can test which values are in a set using the has() method, like this:

```
let set = new Set();
set.add(5);
set.add("5");

console.log(set.has(5));    // true
console.log(set.has(6));    // false
```

##Removing Values

It's also possible to remove values from a set. You can remove single value by using the delete() method, or you can remove all values from the set by calling the clear() method. This code shows both in action:

```
let set = new Set();
set.add(5);
set.add("5");

console.log(set.has(5));    // true

set.delete(5);

console.log(set.has(5));    // false
console.log(set.size);      // 1

set.clear();

console.log(set.has("5"));  // false
console.log(set.size);      // 0
```


##the forEach() Method for Sets
```
let set = new Set([1, 2]);

set.forEach(function(value, key, ownerSet) {
    console.log(key + " " + value);
    console.log(ownerSet === set);
});


1 1
true
2 2
true
```



Also the same as arrays, you can pass a this value as the second argument to forEach() if you need to use this in your callback function:

```
let set = new Set([1, 2]);

let processor = {
    output(value) {
        console.log(value);
    },
    process(dataSet) {
        dataSet.forEach(function(value) {
            this.output(value);
        }, this);
    }
};

processor.process(set);



or 



let set = new Set([1, 2]);

let processor = {
    output(value) {
        console.log(value);
    },
    process(dataSet) {
        dataSet.forEach((value) => this.output(value));
    }
};

processor.process(set);
```

##Converting a Set to an Array

```
let set = new Set([1, 2, 3, 3, 3, 4, 5]),
    array = [...set];

console.log(array);             // [1,2,3,4,5]
```

This approach is useful when you already have an array and want to create an array without duplicates. For example:

```
function eliminateDuplicates(items) {
    return [...new Set(items)];
}

let numbers = [1, 2, 3, 3, 3, 4, 5],
    noDuplicates = eliminateDuplicates(numbers);

console.log(noDuplicates);      // [1,2,3,4,5]

```


##Weak Sets
 As long as a reference to that Set instance exists, the object cannot be garbage collected to free memory. For example:
 
 
```
let set = new Set(),
    key = {name:'aaaa'};

set.add(key);
console.log(set.size);      // 1

// eliminate original reference
key = null;
console.log(key);//null
console.log(set.size);      // 1

// get the original reference back
key = [...set][0];
console.log(key);//{ name: 'aaaa' }


```

##Creating a Weak Set

```
let set = new WeakSet(),
    key = {};

// add the object to the set
set.add(key);

console.log(set.has(key));      // true

set.delete(key);

console.log(set.has(key));      // false
```


##Key Differences Between Set Types

The biggest difference between weak sets and regular sets is the weak reference held to the object value. Here's an example that demonstrates that difference:

```
let set = new WeakSet(),
    key = {};

// add the object to the set
set.add(key);

console.log(set.has(key));      // true

// remove the last strong reference to key, also removes from weak set
key = null;
```


#Maps in ECMAScript 6


The ECMAScript 6 Map type is an ordered list of key-value pairs, where both the key and the value can have any type. 


```
let map = new Map();
map.set("name", "Nicholas");
map.set("age", 25);

console.log(map.size);          // 2

console.log(map.has("name"));   // true
console.log(map.get("name"));   // "Nicholas"

console.log(map.has("age"));    // true
console.log(map.get("age"));    // 25

map.delete("name");
console.log(map.has("name"));   // false
console.log(map.get("name"));   // undefined
console.log(map.size);          // 1

map.clear();
console.log(map.has("name"));   // false
console.log(map.get("name"));   // undefined
console.log(map.has("age"));    // false
console.log(map.get("age"));    // undefined
console.log(map.size);          // 0

```

##Map Methods

has(key) - Determines if the given key exists in the map

delete(key) - Removes the key and its associated value from the map

clear() - Removes all keys and values from the map

##The forEach Method on Maps

```
let map = new Map([ ["name", "Nicholas"], ["age", 25]]);

map.forEach(function(value, key, ownerMap) {
    console.log(key + " " + value);
    console.log(ownerMap === map);
});
```

##Weak Maps

Weak maps are to maps what weak sets are to sets: they're a way to store weak object references. In weak maps, every key must be an object (an error is thrown if you try to use a non-object key), and those object references are held weakly so they don't interfere with garbage collection. When there are no references to a weak map key outside a weak map, the key-value pair is removed from the weak map.

##Using Weak Maps

```
let map = new WeakMap(),
    element = document.querySelector(".element");

map.set(element, "Original");

let value = map.get(element);
console.log(value);             // "Original"

// remove the element
element.parentNode.removeChild(element);
element = null;

// the weak map is empty at this point
```


##Weak Map Methods
```
let map = new WeakMap(),
    element = document.querySelector(".element");

map.set(element, "Original");

console.log(map.has(element));   // true
console.log(map.get(element));   // "Original"

map.delete(element);
console.log(map.has(element));   // false
console.log(map.get(element));   // undefined
```