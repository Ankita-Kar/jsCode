const yesOrNo = new Promise((resolve, reject) => {
    const random = Math.random();
    if(random<0.5)
    resolve();

    else
    reject();
})

yesOrNo.then(() => {
    console.log("Yes");
})
yesOrNo.catch(() => {
    console.log("No");
})