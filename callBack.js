const btn = document.querySelector('button');

// setTimeout(() => {
//     btn.style.transform = `translateX(100px)`;
//     setTimeout(() => {
//         btn.style.transform = `translateX(200px)`;
//     },2000)
// },1000)

const moveX = function(element, amount, delay, callback){
    setTimeout(() => {
        element.style.transform = `translateX(${amount}px)`;
        if(callback) callback();
    },delay)
}

moveX(btn,100,1000,() => {
    moveX(btn,200,1000,() => {
        moveX(btn,300,1000,() => {
            moveX(btn,400,1000,() => {
                moveX(btn,500,1000);
            })
        })
    })
})