// passsword validation example

function isValidPassword(password, username){
    if(password.length < 8 || password.includes(" ") || password.includes(username)){
        return false
    }

    return true
}

console.log(isValidPassword("wowowo owowow","wow"))

// average example
function average(arr){
    let sum=0
    for(let val of arr){
        sum += val
    }
    return sum/arr.length
}

console.log(average([1,2,3,4]))


// pangram challenge
function isPangram(string){
    let line = string.toLowerCase()
    for(let char of "qwertyuiopasdfghjklzxcvbnm"){
        if(!line.includes(char)){
            return false
        }
    }
    return true
}

console.log(isPangram("The five boxing wizards jump quick"))


// playing card challenge

function getCard(){
    let vals = ['2','3','4','5','6','7','8','9','10','A','J','Q','K']
    let suits = ['clubs','spades','hearts','diamonds']
    
    let val = vals[Math.floor(Math.random()*13)]
    let suit = suits[Math.floor(Math.random()*4)]

    let cardObj = {
        cardVal : val,
        cardSuit : suit
    }

    return cardObj
    
}

console.log(getCard())