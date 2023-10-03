function callThree(f) {
    f();
    f();
    f();
  }
  
  function cry() {
    console.log("sad");
  }
  
  function rage() {
    console.log("angry");
  }
  
  function repeatNTimes(action, num) {
    for (let i = 0; i < num; i++) {
      action();
    }
  }
  
//   repeatNTimes(rage, 3);
  

  function pickOne(f1, f2) {
    let rand = Math.random();
    console.log(rand)
    if (rand < 0.5) {
      f1();
    } else {
      f2();
    }
  }

//   pickOne(cry, rage)