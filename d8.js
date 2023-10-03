// //arguments object
// // i.e. the number of arguments can vary right? so we make an object that stores all the arguments 

// function sum(x,y){
//     console.log(arguments)
// }
// console.log(sum(1,2,3))

function myFunction (obj){
    return obj.a.b;
}


// console.log(myFunction({
//     a:1
// }))

console.log(myFunction({
    a:{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        b:{
            c:3
        }
    }
}))