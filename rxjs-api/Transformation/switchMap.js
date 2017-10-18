const Rx = require('rxjs/Rx');

// 立即发出值， 然后每5秒发出值
const source = Rx.Observable.timer(0, 5000);
// 当 source 发出值时切换到新的内部 observable，发出新的内部 observable 所发出的值
const example = source.switchMap(() => Rx.Observable.interval(500));
// 输出: 0,1,2,3,4,5,6,7,8,9...0,1,2,3,4,5,6,7,8
const subscribe = example.subscribe(val => console.log(val));




// 发出每次点击
const source = Rx.Observable.fromEvent(document, 'click');
// 如果3秒内发生了另一次点击，则消息不会被发出
const example = source.switchMap(val => Rx.Observable.interval(3000).mapTo('Hello, I made it!'));
// (点击)...3s...'Hello I made it!'...(点击)...2s(点击)...
const subscribe = example.subscribe(val => console.log(val));