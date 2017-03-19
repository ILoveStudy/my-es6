// let firstName = Symbol("robin");
// let lastName = Symbol("robin");
// console.log(firstName===lastName);

// let a = Symbol("uid");
//
// let b = Symbol("uid");
// console.log(a ===b);
//
// console.log(a,b);
//

// let uid = Symbol.for("uid");
// let object = {};
// object[uid] = "12345";
// console.log(object);
// console.log(object[uid]);       // "12345"
// console.log(uid);               // "Symbol(uid)"
// let uid2 = Symbol.for("uid");
// console.log(uid === uid2);      // true
// console.log(object[uid2]);      // "12345"
// console.log(uid2);              // "Symbol(uid)"



// let uid = Symbol.for("uid");
// let object = {
//     [uid]: "12345"
// };
//
// let symbols = Object.getOwnPropertySymbols(object);
//
// console.log(symbols.length);        // 1
// console.log(symbols[0]);            // "Symbol(uid)"
// console.log(object[symbols[0]]);    // "12345"
//







