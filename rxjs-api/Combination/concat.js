const Rx = require('rxjs/Rx');

// 发出 1,2,3
const sourceOne = Rx.Observable.of(1,2,3);
// 发出 4,5,6
const sourceTwo = Rx.Observable.of(4,5,6);
// 先发出 sourceOne 的值，当完成时订阅 sourceTwo
const example = sourceOne.concat(sourceTwo);
// 输出: 1,2,3,4,5,6
const subscribe = example.subscribe(val => console.log('Example: Basic concat:', val));