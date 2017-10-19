const Rx = require('rxjs/Rx');

//only output distinct values, based on the last emitted value
// 基于最新发出的值进行比较，只输出不同的值
const myArrayWithDuplicatesInARow = Rx.Observable
  .from([1,1,2,2,3,1,2,3]);
  
const distinctSub = myArrayWithDuplicatesInARow
	.distinctUntilChanged()
  	// 输出 : 1,2,3,1,2,3
	.subscribe(val => console.log('DISTINCT SUB:', val));
  
const nonDistinctSub = myArrayWithDuplicatesInARow
	// 输出 : 1,1,2,2,3,1,2,3
	.subscribe(val => console.log('NON DISTINCT SUB:', val));