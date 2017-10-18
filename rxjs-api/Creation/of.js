const Rx = require('rxjs/Rx');

// 依次发出提供的任意数量的值
const source = Rx.Observable.of(1,2,3,4,5);
// 输出: 1,2,3,4,5
const subscribe = source.subscribe(val => console.log(val));