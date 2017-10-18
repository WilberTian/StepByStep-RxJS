const Rx = require('rxjs/Rx');

const source = Rx.Observable.from([
  {name: 'Joe', age: 30, job: {title: 'Developer', language: 'JavaScript'}},
  // 当找不到 job 属性的时候会返回 undefined
  {name: 'Sarah', age:35}
]);
// 提取 job 中的 title 属性
const example = source.pluck('job', 'title');
// 输出: "Developer" , undefined
const subscribe = example.subscribe(val => console.log(val));