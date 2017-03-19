// function *createIterator(items) {
//     for (let i = 0; i < items.length; i++) {
//         yield items[i];
//     }
// }
//
// let iterator = createIterator([1, 2, 3]);
//
//
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


// function *createIterator() {
//     yield a();
//     yield b();
//     yield c();
// }
// let iterator = createIterator();
// var a = function () {
//     setTimeout(function (){
//         console.log('a');
//         iterator.next();
//     },300)
// };
// var b = function () {
//     setTimeout(function (){
//         console.log('b');
//         iterator.next();
//     },200)
// };
// var c = function () {
//     setTimeout(function (){
//         console.log('c');
//     },100)
// };
//
// iterator.next();


// var sleep = function (time) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve();
//         }, time);
//     })
// };
//
// var start = async function () {
//     // 在这里使用起来就像同步代码那样直观
//     console.log('start');
//     await sleep(3000);
//     console.log('end');
// };
//
// start();





