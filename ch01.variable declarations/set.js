// var a = ['aa','aa','aa','aa','aaa','aada','aaab','aaa',1,2,2,3,3,3,3,3,3,null,null,undefined,undefined,{},{},[]]
//
// console.log(([...new Set(a)]) instanceof Array);
//


// let set = new Set(),
//     key = {name: 'aaaa'};
//
// set.add(key);
//
// key = null;
// console.log(key);
//
// key = [...set][0];
// console.log(key);

// let set = new WeakSet(),
//     key = {};
//
// // add the object to the set
// set.add(key);
//
// console.log(set.has(key));      // true
//
// set.delete(key);
//
// console.log(set.has(key));      // false

// let set = new WeakSet(),
//     key = {};
//
// // add the object to the set
// set.add(key);
//
// console.log(set.has(key));      // true
//
// // remove the last strong reference to key, also removes from weak set
// key = null;
//
//
// console.log(set.has(key));


// let set = new WeakSet(),
//     key = {name: 'aaaa'};
//
// set.add(key);
// console.log(set);
// key = null;
// console.log(set);
// console.log(key);
//
// console.log(key);
// console.log(set);


let set = new WeakSet();
let k = key = {id: 'richardgong'};

set.add(key);
set.has(key);
console.log(set);
key = null;
console.log(set.has(k));

