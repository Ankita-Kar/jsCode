const btn = document.querySelector('button');

btn.addEventListener('click', function() {
	alert('you clicked!!!!!');
});

btn.addEventListener('click', function() {
	console.log('second time!!');
});

btn.addEventListener('mouseover', function() {
	btn.innerText = 'stop touching';
});

btn.addEventListener('mouseout', function() {
	btn.innerText = 'Click Me!';
});

