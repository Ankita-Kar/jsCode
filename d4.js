//arrow mein we can minimize a function into one single line
const square = (x) => x*x;
// console.log(square(2))

let movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
  ]
  
//first movie that includes 'Mrs' in its title:
//here it uses block body with {}
const movie1 = movies.find(movie => {
    return movie.includes("Mrs.")
})

//first movie that begins with 'Mrs':
//here it uses expression body with ()
const movie = movies.find(m => (m.indexOf("Mrs") === 0))
// console.log(movie)
  
// The choice between using a block body {} and an expression body () depends on your preference and the complexity of the code you want to include inside the arrow function. 

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
  //Find first book w/ rating over 4.3
  const book1 = books.find(book => book.rating > 4.3)

  //Find first book with Neil Gaiman as an author:
  const neilBook = books.find(book => book.authors.includes("Neil Gaiman"))
  console.log(neilBook)