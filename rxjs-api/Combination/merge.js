const Rx = require('rxjs/Rx');

// 每2.5秒发出值
const first = Rx.Observable.interval(2500);
// 每2秒发出值
const second = Rx.Observable.interval(2000);
// 每1.5秒发出值
const third = Rx.Observable.interval(1500);
// 每1秒发出值
const fourth = Rx.Observable.interval(1000);

// 从一个 observable 中发出输出值
const example = Rx.Observable.merge(
  first.mapTo('FIRST!'),
  second.mapTo('SECOND!'),
  third.mapTo('THIRD'),
  fourth.mapTo('FOURTH')
);
// 输出: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
const subscribe = example.subscribe(val => console.log(val));