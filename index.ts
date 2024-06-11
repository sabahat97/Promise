let Promise1 = new Promise ((re,rej)=>{
    re ("hello world".toUpperCase());
})
Promise1.then((data)=>console.log(data))
.catch((err)=>console.log(err));