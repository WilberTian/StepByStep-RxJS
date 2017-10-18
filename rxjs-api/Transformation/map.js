const Rx = require('rxjs/Rx');

// 发出 ({name: 'Joe', age: 30}, {name: 'Frank', age: 20},{name: 'Ryan', age: 50})
const source = Rx.Observable.from([{name: 'Joe', age: 30}, {name: 'Frank', age: 20},{name: 'Ryan', age: 50}]);
// 提取每个 person 的 name 属性
const example = source.map(person => person.name);
// 输出: "Joe","Frank","Ryan"
const subscribe = example.subscribe(val => console.log(val));