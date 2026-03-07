// Exercise 1

// Create a promise that resolves with "Data Loaded".
Promise.resolve("Data Loaded").then((result)=>{
console.log(result)
})

//or

const myPromise =  new Promise((resolve)=>{
    resolve("Data Loaded");
})
myPromise.then((result)=>console.log(result));





// Exercise 2

// Create a promise that rejects with "Network Error".
Promise.reject("Network Error").catch((result)=>console.log(result));

//or

const myPromise2= new Promise((resolve,reject)=>{
    reject("Network Error")
})
myPromise2.catch((data)=>{
    console.log(data)
})




// Exercise 3

// Write a promise that resolves after 2 seconds using setTimeout.

const myPromise3= new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve("Finished");
   },2000)
})
myPromise3.then((res)=>console.log(res)) // myPromise3.then(console.log);

//or

Promise.resolve().then(()=>{
    setTimeout(()=>{
        console.log('Finished here')
    },2000)
})




// Exercise 4

// Use .finally() to log "Operation finished".

const myPromise4= new Promise((resolve,reject)=>{
    const status = true;
    if(status){
        resolve("done")
    }
    else{
        reject("rejected")
    }
});

myPromise4.then(console.log)
.catch(console.log)
.finally(()=>{console.log('in finally')})