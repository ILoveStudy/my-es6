// let node = {
//     type: "Identifier",
//     name: "foo",
//     a:'kdlsfjldsf',
//     b:'kdsklsdkldskl'
// };
// let a = "Literal";
// let b = 5;
//
//
// console.log(a);      // undefined
// console.log(b);      // undefined
//

// let node = {
//     type: "Identifier",
//     name: "foo"
// };
//
// let { type, name, value = true } = node;
//
// console.log(type);      // "Identifier"
// console.log(name);      // "foo"
// console.log(value);     // true


// let node = {
//     type: "Identifier",
//     name: "foo"
// };
// let {a = "Literal",b = 5} = node;
//
// console.log(a);      // undefined
// console.log(b);      // undefined


// let node = {
//     type: "Identifier",
//     name: "foo"
// };
//
// let { type: aaaa, name: bbbbb } = node;
//
// console.log(aaaa);     // "Identifier"
// console.log(bbbbb);     // "foo"
//


// let node = {
//     type: "Identifier"
// };
//
// let { type: localType, name: localName = "bar" } = node;
//
// console.log(localType);     // "Identifier"
// console.log(localName);     // "bar"


//
// let node = {
//     type: "Identifier",
//     name: "foo",
//     loc: {
//         start: {
//             line: 1,
//             column: 1,
//             a: 1,
//             b: 1
//         },
//         end: {
//             line: 1,
//             column: 4
//         }
//     }
// };
//
// let { loc: { start:{line,column,a,b}}} = node;
//
//
// console.log(line,column,a,b);        // 1
//


// let colors = { red:"red", green:"green"};
//
// let {  thirdColor } = colors;
// console.log(thirdColor);        // "blue"

//
// let colors = [ "red", [ "green", "lightgreen" ], "blue" ];
//
// // later
//
// let [ firstColor, [ secondColor ] ] = colors;
//
// console.log(firstColor);        // "red"
// console.log(secondColor);       // "green"
//

// let node = {
//     type: "Identifier",
//     name: "foo",
//     loc: {
//         start: {
//             line: 1,
//             column: 1
//         },
//         end: {
//             line: 1,
//             column: 4
//         }
//     },
//     range: [0, 3]
// };
//
// let {loc: {start}, range: [startIndex]} = node;
//
// console.log(start.line);        // 1
// console.log(start.column);      // 1
// console.log(startIndex);        // 0


// // properties on options represent additional parameters
// );function setCookie(name, value, options) {
//
//     options = options || {};
//
//     let secure = options.secure,
//         path = options.path,
//         domain = options.domain,
//         expires = options.expires;
//
//     // code to set the cookie
// }
//
// // third argument maps to options
// setCookie("type", "js", {
//     secure: true,
//     expires: 60000
// });
//
//
//
// function setCookie(name, value, { secure, path, domain, expires }) {
//
// }
//
// setCookie("type", "js", null

// function setCookie(name, value, {secure = false, path = "/", domain = "example.com", expires = new Date(Date.now() + 360000000)} = {}) {
//
// }

function setCookie(name, value, {secure = false, path = "/", domain = "example.com", expires = new Date(Date.now() + 360000000)} = {domain:'hahaaha'}) {
    console.log(domain);//hahaaha
}
setCookie('a','a',{domain:'richardgong'});


