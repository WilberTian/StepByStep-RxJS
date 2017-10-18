const Rx = require('rxjs/Rx');

// 创建每500毫秒发出值的 observable
const source = Rx.Observable.interval(500);
// 2秒后，将缓冲值作为数组发出
const example = source.bufferTime(2000);
// 打印值到控制台
// 输出: [0,1,2]...[3,4,5,6]
const subscribe = example.subscribe(val => console.log('Buffered with Time:', val));