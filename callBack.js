const btn = document.querySelector('button');

// setTimeout(() => {
//     btn.style.transform = `translateX(100px)`;
//     setTimeout(() => {
//         btn.style.transform = `translateX(200px)`;
//     },2000)
// },1000)

const moveX = function(element, amount, delay, callback){
    const bodyBoundary = document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right;
    const currLeft = element.getBoundingClientRect().left;

    if(elRight+amount > bodyBoundary){
        console.log("Done");
    }


    setTimeout(() => {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        if(callback) callback();
    },delay)
}

moveX(btn,100,1000,() => {
    moveX(btn,100,1000,() => {
        moveX(btn,100,1000,() => {
            moveX(btn,100,1000,() => {
                moveX(btn,100,1000);
            })
        })
    })
})