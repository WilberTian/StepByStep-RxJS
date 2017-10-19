const Rx = require('rxjs/Rx');

// 每1秒发出值
const interval = Rx.Observable.interval(1000);
// 取前5个发出的值
const example = interval.take(5);
// 输出: 0,1,2,3,4
const subscribe = example.subscribe(val => console.log(val));