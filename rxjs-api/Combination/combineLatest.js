const Rx = require('rxjs/Rx');

// timerOne 在1秒时发出第一个值，然后每4秒发送一次
const timerOne = Rx.Observable.timer(1000, 4000);
// timerTwo 在2秒时发出第一个值，然后每4秒发送一次
const timerTwo = Rx.Observable.timer(2000, 4000)
// timerThree 在3秒时发出第一个值，然后每4秒发送一次
const timerThree = Rx.Observable.timer(3000, 4000)

// 当一个 timer 发出值时，将每个 timer 的最新值作为一个数组发出
const combined = Rx.Observable
.combineLatest(
    timerOne,
    timerTwo,
    timerThree
);

const subscribe = combined.subscribe(latestValues => {
  // 从 timerValOne、timerValTwo 和 timerValThree 中获取最新发出的值
	const [timerValOne, timerValTwo, timerValThree] = latestValues;
  /*
  	示例:
    timerOne first tick: 'Timer One Latest: 1, Timer Two Latest:0, Timer Three Latest: 0
    timerTwo first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 0
    timerThree first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 1
  */
  console.log(
    `Timer One Latest: ${timerValOne}, 
     Timer Two Latest: ${timerValTwo}, 
     Timer Three Latest: ${timerValThree}`
   );
});