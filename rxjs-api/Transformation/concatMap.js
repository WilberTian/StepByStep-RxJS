const Rx = require('rxjs/Rx');

// 发出 'Hello' 和 'Goodbye'
const source = Rx.Observable.of('Hello', 'Goodbye');
// 将 source 的值映射成内部 observable，当一个完成发出结果后再继续下一个
const example = source.concatMap(val => Rx.Observable.of(`${val} World!`));
// 输出: 'Example One: 'Hello World', Example One: 'Goodbye World'
const subscribe = example
  .subscribe(val => console.log('Example One:', val));





const concatMapSub = Rx.Observable.of(2000, 1000)
  .concatMap(v => Rx.Observable.of(v).delay(v))
  // concatMap: 2000, concatMap: 1000
  .subscribe(v => console.log('concatMap:', v))

const mergeMapSub = Rx.Observable.of(2000, 1000)
  .mergeMap(v => Rx.Observable.of(v).delay(v))
  // mergeMap: 1000, mergeMap: 2000
  .subscribe(v => console.log('mergeMap:', v))  