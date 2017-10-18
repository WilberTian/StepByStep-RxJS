const Rx = require('rxjs/Rx');

// 创建每1秒发出值的 observable
const source = Rx.Observable.interval(1000);
// 在发出3个值后，将缓冲的值作为数组传递
const bufferThree = source.bufferCount(3);
// 打印值到控制台
// 输出: [0,1,2]...[3,4,5]
const subscribe = bufferThree.subscribe(val => console.log('Buffered Values:', val));