const stuff = {}

stuff['one'] = 50
console.log(stuff)

stuff["two"] = 30  
console.log(stuff)

stuff.two = 15
console.log(stuff)

stuff.two +=15
console.log(stuff)


//Nested Arrays - 
const student = {
	firstName : 'David',
	lastName  : 'Jones',
	strengths : [ 'Music', 'Art' ],
	exams     : {
		midterm : 92,
		final   : 88
	}
};

console.log((student.exams.final + student.exams.midterm)/2)

console.log(student.strengths[1])

//Array of Objects
const shoppingCart = [
	{
		product  : 'Jenga Classic',
		price    : 6.88,
		quantity : 1
	},
	{
		product  : 'Echo Dot',
		price    : 29.99,
		quantity : 3
	},
	{
		product  : 'Fire Stick',
		price    : 39.99,
		quantity : 2
	}
];

//Array having arrays and objects
const game = {
	player1 : {
		username  : 'Blue',
		playingAs : 'X'
	},
	player2 : {
		username  : 'Muffins',
		playingAs : 'O'
	},
	board   : [ [ 'O', null, 'X' ], [ 'X', 'O', 'X' ], [ null, 'O', 'X' ] ]
};