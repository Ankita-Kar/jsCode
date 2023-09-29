let nums = [1,2,3];
let nums2 = [1,2,3];

//nums === nums2 gives false
//both have same values but pointing to different memory locations

let num1 = [1,2,3];
let num2 = num1;

//now mun1 == num2,  num1===num2 is true

const user = {
    username : "minimik",
    email : "mikyong.min@gmail.com",
    notification : []
};
if(!user.notification.length){
    console.log("nope")
}

//without loops we can't easily compare two or more arrays fo requality of values. Same goes for objects

