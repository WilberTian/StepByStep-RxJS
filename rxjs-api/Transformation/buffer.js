const Rx = require('rxjs/Rx');

// 创建每1秒发出值的 observable
const myInterval = Rx.Observable.interval(1000);
// 创建页面点击事件的 observable
const bufferBy = Rx.Observable.fromEvent(document, 'click');
/*
  收集由 myInterval 发出的所有值，直到我们点击页面。此时 bufferBy 会发出值以完成缓存。
  将自上次缓冲以来收集的所有值传递给数组。
*/
const myBufferedInterval = myInterval.buffer(bufferBy);
// 打印值到控制台
// 例如 输出: [1,2,3] ... [4,5,6,7,8]
const subscribe = myBufferedInterval.subscribe(val => console.log(' Buffered Values:', val));