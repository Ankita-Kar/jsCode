//basic js overview in the browser

const myImg = document.createElement('img');
myImg.src = "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=962&q=80"

myImg.style.width = "200px"
document.body.append(myImg);
myImg.style.transition = "all 2s"

const allEls = document.body.children;

setInterval(() => { 
           for(let el of allEls){
           const rotation = Math.floor(Math.random() * 360)
           const x = Math.floor(document.body.clientWidth * Math.random())
            myImg.style.transform = "translate(300px,200px)";
           const y = Math.floor(document.body.clientWidth * Math.random())
            
            myImg.style.transform = `translate(${x}px,${y}px) rotate(${rotation}deg)`;
           }
    
           },2000)