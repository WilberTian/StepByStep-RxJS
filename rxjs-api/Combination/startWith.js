const Rx = require('rxjs/Rx');

// 发出 (1,2,3)
const source = Rx.Observable.of(1,2,3);
// 从0开始
const example =  source.startWith(0);
// 输出: 0,1,2,3
const subscribe = example.subscribe(val => console.log(val));