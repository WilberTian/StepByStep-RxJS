const Rx = require('rxjs/Rx');

// 发出 (1,2,3,4,5)
const source = Rx.Observable.from([1,2,3,4,5]);
// 过滤掉奇数
const example = source.filter(num => num % 2 === 0);
// 输出: "Even number: 2", "Even number: 4"
const subscribe = example.subscribe(val => console.log(`Even number: ${val}`));