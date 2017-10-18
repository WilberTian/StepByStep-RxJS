const Rx = require('rxjs/Rx');

const subject = new Rx.Subject();
// 基础的 scan 示例，从0开始，随着时间的推移计算总数
const example = subject
  .startWith(0)
  .scan((acc, curr) => acc + curr);
// 输出累加值
const subscribe = example.subscribe(val => console.log('Accumulated total:', val));
// subject 发出的值会添加到当前的总数中
subject.next(1); //1
subject.next(2); //3
subject.next(3); //6




const subject = new Rx.Subject();
// scan 示例，随着时间的推移构建对象
const example = subject.scan((acc, curr) => Object.assign({}, acc, curr), {});
// 输出累加值
const subscribe = example.subscribe(val => console.log('Accumulated object:', val));
// subject 发出的值会被添加成对象的属性
subject.next({name: 'Joe'}); // {name: 'Joe'}
subject.next({age: 30}); // {name: 'Joe', age: 30}
subject.next({favoriteLanguage: 'JavaScript'}); // {name: 'Joe', age: 30, favoriteLanguage: 'JavaScript'}
