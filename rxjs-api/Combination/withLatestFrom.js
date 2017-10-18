const Rx = require('rxjs/Rx');

// 每5秒发出值
const source = Rx.Observable.interval(5000);
// 每1秒发出值
const secondSource = Rx.Observable.interval(1000);
const example = source
  .withLatestFrom(secondSource)
  .map(([first, second]) => {
    return `First Source (5s): ${first} Second Source (1s): ${second}`;
  });
/*
  输出:
  "First Source (5s): 0 Second Source (1s): 4"
  "First Source (5s): 1 Second Source (1s): 9"
  "First Source (5s): 2 Second Source (1s): 14"
  ...
*/
const subscribe = example.subscribe(val => console.log(val));\