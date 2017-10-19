const Rx = require('rxjs/Rx');

// 每1秒发出值
const source = Rx.Observable.interval(1000);
// throttle 2秒后才发出最新值
const example = source.throttle(val => Rx.Observable.interval(2000));
// 输出: 0...3...6...9
const subscribe = example.subscribe(val => console.log(val));