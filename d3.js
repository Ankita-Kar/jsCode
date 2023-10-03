const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

const doubles = numbers.map(function (num){
    return num*2
})

// console.log(doubles)


//correct but very dumb approach 
//i am dumb!!
const checkEven = numbers.map(function(num){
    if(num%2 == 0){
        return {
            number : num,
            isEven : true
        }
    }
    else{
        return {
            number : num,
            isEven : false
        }
    }
})


//better approach
const checkNum = numbers.map(function(num){
    return {
        number : num,
        isEVen : num%2 == 0
    }
})
    
// console.log(checkEven)

const abbrevs = words.map(function (word) {
    return word.toUpperCase().split('').join('.');
  })


const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
  }
]

const titles = books.map(function (b) {
  return b.title;
})