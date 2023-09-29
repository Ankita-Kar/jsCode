//for...of loop

let info = ['soccer', 'popheads', 'books','cringe']

for(let inf of info){
    console.log(inf)
}

for(let char of "javascript"){
    console.log(char)
}

const square = [
    [2,7,6],
    [9,5,1],
    [4,3,8]
]
for(let row of square){
    let sum = 0
    for(let val of row){
        sum += val
    }
    console.log(`${row} = ${sum}`)
}

//objects are not iterable
//but we can itrate in the way given below - 

const movieReviews = {
	Arrival                : 9.5,
	Alien                  : 9,
	Amelie                 : 8,
	'In Bruges'            : 9,
	Amadeus                : 10,
	'Kill Bill'            : 8,
	'Little Miss Sunshine' : 8.5,
	Coraline               : 7.5
};

//this shows error :-
// for (let x of movieReviews) {
// 	console.log(x);
// }

for (let movie of Object.keys(movieReviews)) {
	console.log(`You rated ${movie} - ${movieReviews[movie]}`);
}

//for...in loop
// this loops ofver the keys of an object automatically

const score = {
    one : 100,
    two : 200,
    three : 300,
    four : 400
}

for( let val in score){
    console.log(val)
}

for( let k in [11,23,17,65,9,33]){
    console.log(k)
}
// this here prints the indices of the aray i.e-basically the keys of these alues
