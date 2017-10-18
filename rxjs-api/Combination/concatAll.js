const Rx = require('rxjs/Rx');

const obs1 = Rx.Observable.interval(1000).take(5);
const obs2 = Rx.Observable.interval(500).take(2);
const obs3 = Rx.Observable.interval(2000).take(1);
// 发出3个 observables
const source = Rx.Observable.of(obs1, obs2, obs3);
// 按顺序订阅每个内部 obserable，前一个完成了再订阅下一个
const example = source.concatAll();
/*
  输出: 0,1,2,3,4,0,1,0
  怎么运行的...
  订阅每个内部 observable 并发出值，当一个完成了才订阅下一个
  obs1: 0,1,2,3,4 (complete)
  obs2: 0,1 (complete)
  obs3: 0 (complete)
*/

const subscribe = example.subscribe(val => console.log(val));