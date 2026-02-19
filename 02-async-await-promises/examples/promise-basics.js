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

//example 2

const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Done!");
    } else {
        reject("Error occurred");
    }
});

myPromise
    .then(result => console.log(result))   // Done!
    .catch(error => console.log(error));