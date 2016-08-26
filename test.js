"use strict"

let colors = [ "red", "green", "blue" ],
    a = "black",
    b = "purple";

[ a,b ] = colors;

console.log(a);        // "red"
console.log(b);       // "green"