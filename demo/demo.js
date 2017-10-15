const Rx = require('rxjs/Rx');

const api = require('./api');

const eventBus$ = new Rx.Subject()
	.map(events => events);

const friendList$ = eventBus$.filter(events => events.includes('friend'))
	.switchMap(() => Rx.Observable.fromPromise(api.query_friendList_api()))
	.map((friendList) => {
		const temp = {};
		friendList.forEach((friendItem) => {
			temp[friendItem.id] = friendItem.name + Math.random();
		})
		return temp;
	});

const friendList$$ = new Rx.BehaviorSubject();
//friendList$.subscribe(friendList$$);

const commentList$ = eventBus$.filter(events => events.includes('comment'))
	.switchMap(() => Rx.Observable.fromPromise(api.query_commentList_api()))
	.map((commentList) => {
		const temp = {};
		commentList.forEach((commentItem) => {
			temp[commentItem.id] = commentItem;
		})
		return temp;
	});

const commentList$$ = new Rx.BehaviorSubject();
//commentList$.subscribe(commentList$$);

const msgList$ = eventBus$.filter(events => events.includes('msg'))
	.switchMap(() => Rx.Observable.fromPromise(api.query_msgList_api()))
	.combineLatest(friendList$, commentList$)
	.map(([msgList, friendList, commentList]) => {
		const temp = JSON.parse(JSON.stringify(msgList));
		
		temp.forEach((msgItem) => {
			msgItem.liked_by = msgItem.liked_by.map((friendId) => {
				return friendList[friendId];
			});
			
			msgItem.comments = msgItem.comments.map((commnetId) => {
				return commentList[commnetId];
			})
		})
		return temp;
	});

const msgList$$ = new Rx.BehaviorSubject();
//msgList$.subscribe(msgList$$);


msgList$.subscribe((data) => {
	console.log(data);
});


eventBus$.next(['msg', 'friend', 'comment']);


setTimeout(() => {
	eventBus$.next(['msg']);

}, 3000)






