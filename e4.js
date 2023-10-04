const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
// 	alert('you clicked!!!!!');
// });

// btn.addEventListener('click', function() {
// 	console.log('second time!!');
// });

// btn.addEventListener('mouseover', function() {
// 	btn.innerText = 'stop touching';
// });

// btn.addEventListener('mouseout', function() {
// 	btn.innerText = 'Click Me!';
// });

btn.addEventListener('mouseover', function() {
	console.log("moused over!!");

	const height = Math.floor(Math.random() * window.innerHeight);
	const width = Math.floor(Math.random() * window.innerWidth);

	btn.style.top = `${height}px`
	btn.style.left = `${width}px`
});
btn.addEventListener('click', function() {
	btn.innerText = "Congrats you clicked me!"
	document.body.style.backgroundColor = "green";
});