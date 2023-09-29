const Students = [
	{
		firstName : 'One',
		grade     : 86
	},
	{
		firstName : 'Two',
		grade     : 97
	},
	{
		firstName : 'Three',
		grade     : 72
	},
	{
		firstName : 'Four',
		grade     : 90
	}
];

for (let i = 0; i < Students.length; i++) {
	let student = Students[i];
	console.log(`${student.firstName} : ${student.grade}`);
}

let total = 0; 
for (let i = 0; i < Students.length; i++) {
	let student = Students[i];
	total += student.grade; 
}
console.log(`Average : ${total/Students.length}`);



const word = 'stressed';

let reverse = ''; 
for (let i = word.length - 1; i >= 0; i--) {
	reverse += word[i]; 
}
console.log(reverse);


const gameBoard = [
	[ 4, 32, 8, 4 ],
	[ 64, 8, 32, 2 ],
	[ 8, 32, 16, 4 ],
	[ 2, 8, 4, 2 ]
];
let sum = 0;
for (let i = 0; i < gameBoard.length; i++) {
	let row = gameBoard[i];
	for (let j = 0; j < row.length; j++) {
		sum += row[j];
	}
}
console.log(sum)

//number guessing game
let target = Math.floor(Math.random() * 10)

let guess = Math.floor(Math.random() * 10)
while(guess !== target){
    console.log(`Target = ${target} Guess = ${guess} \n`)
    guess = Math.floor(Math.random() * 10)
}

console.log(`Target = ${target} Guess = ${guess} \n`)
console.log("You Win!!!")
