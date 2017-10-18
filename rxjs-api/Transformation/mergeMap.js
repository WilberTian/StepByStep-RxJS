const Rx = require('rxjs/Rx');

// 发出 'Hello'
const source = Rx.Observable.of('Hello');
// 映射成 observable 并将其打平
const example = source.mergeMap(val => Rx.Observable.of(`${val} World!`));
// 输出: 'Hello World!'
const subscribe = example.subscribe(val => console.log(val));