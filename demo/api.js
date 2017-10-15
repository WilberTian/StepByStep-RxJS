const friendList = [
    {
        "id": 1,
        "name": "July"
    }, {
        "id": 2,
        "name": "June"
    }, {
        "id": 3,
        "name": "Will"
    }, {
        "id": 4,
        "name": "Peter"
    }, {
        "id": 5,
        "name": "Lucy"
    }, {
        "id": 6,
        "name": "Sharon"
    }
];

const query_friendList_api = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('get friend')
			resolve(friendList);
		}, 500)
	});
}

const commentList = [
    {
        "id": 1,
        "from_friend": 2,
        "comment_content": "是啊，一起跑步吧"
    }, {
        "id": 2,
        "from_friend": 3,
        "comment_content": "好久没有这么好的天气了"
    }
];

const query_commentList_api = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(commentList);
		}, 500)
	});
};

const msgList = [
    {
        "id": 1,
        "msg_content": "今天天气真好",
        "owner": 1,
        "msg_date": "2017-10-15 11:00:00",
        "liked_by": [2, 3, 4],
        "comments": [1, 2]
    }
];

const query_msgList_api = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(msgList);
		}, 500)
	});
};

module.exports = {
	query_friendList_api,
	query_commentList_api,
	query_msgList_api
};