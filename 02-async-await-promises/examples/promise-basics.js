const promise = new Promise((resolve,reject)=>{
const data=true;
if(data){
resolve('resolved promise');
}
else{
    reject('rejected promise')
}
})

promise.then((val)=>{
    console.log(val)
});
promise.catch((val)=>{
    console.log(val)
})