const greet = (name, greeting = "Hey") => {
    return `${name}, ${greeting}!`
}

// console.log(greet('minimik'))

const nums = [2,4,1,3,5,6]
// console.log(Math.max(...nums))


const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];

const mollusca = [...cephalopods, ...gastropods]
// console.log(mollusca)

//spread usually used to make copies.
//i.e. they reference to different addresses.

// console.log("abcdefg".split(''))
// console.log([..."abcdefg"])

//spread in object literals


const feline = {
    legs: 4,
    family: 'Felidae'
  };
  
  const canine = {
    family: 'Caninae',
    furry: true,
    legs: 4
  };
  
const dog = {
    ...canine,
    isPet : true,
    adorable : true
}
// console.log(dog)

const catDog = {
    ...canine,
    ...feline
}
// console.log(catDog)
//props override each other (order matters in which you mention)

//we cannot spread objects

console.log({...[1,2,3,4,5]})