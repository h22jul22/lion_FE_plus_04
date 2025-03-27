let module1 = require('./module1');
let fs = require('fs');
// let data = fs.readFileSync('./data.txt', 'utf8');
let m2 = require('newlec-hello');

// 2. 비동기형 콜백함수 사용
// let data = fs.readFile('./data.txt', 'utf8', (err, data) => {
//     console.log(data);
// });

// 3. 비동기형 promise 사용
// const promise = fs.readFile('data.txt', 'utf8');
// promise.then((data) => {
//     console.log(data);
// });

// console.log(data);
console.log(module1.add());
console.log(m2.hello());
