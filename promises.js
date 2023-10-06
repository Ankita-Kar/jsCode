// const yesOrNo = new Promise((resolve, reject) => {
//     const random = Math.random();
//     if(random<0.5)
//     resolve();

//     else
//     reject();
// })

// yesOrNo.then(() => {
//     console.log("Yes");
// })
// yesOrNo.catch(() => {
//     console.log("No");
// })

// const question = function(){
//     return yesOrNo = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const random = Math.random();
//             if(random<0.5)
//             resolve();
        
//             else
//             reject();
//         },5000)
//     })
// }

// question()
//     .then(() => {
//         console.log("Yes");
//     })
//     .catch(() => {
//         console.log("No");
//     })

//This is a FAKE Http Request Function
//It takes 1 second to resolve or reject the promise, depending on the url that is passed in
const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users' : [
					{ id: 1, username: 'Bilbo' },
					{ id: 5, username: 'Esmerelda' }
				],
				'/about' : 'This is the about page!'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data }); //resolve with a value!
			}
			else {
				reject({ status: 404 }); //reject with a value!
			}
		}, 1000);
	});
};

fakeRequest('/users')
	.then((res) => {
		console.log('Status Code', res.status);
		console.log('Data', res.data);
		console.log('REQUEST WORKED!');
	})
	.catch((res) => {
		console.log(res.status);
		console.log('REQUEST FAILED');
	});

fakeRequest('/dogs')
	.then((res) => {
		console.log('Status Code', res.status);
		console.log('Data', res.data);
		console.log('REQUEST WORKED!');
	})
	.catch((res) => {
		console.log(res.status);
		console.log('REQUEST FAILED');
	});