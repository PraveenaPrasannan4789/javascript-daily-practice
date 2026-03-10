// Exercise
// Exercise 1

// Use Promise.all to combine 3 resolved promises.

Promise.all([
    new Promise(res=>res(100)),
    new Promise(res=> res(200))
]).then(console.log)





// Exercise 2

// Create two promises with timers and test Promise.race.

Promise.race([
    new Promise(res=>{
        setTimeout(()=>{
            res('first promise')
        },3000)
    }),
    new Promise(res=>{
        setTimeout(()=>{
            res('second promise')
        },1000)
    })
]).then(console.log)





// Exercise 3

// Use Promise.allSettled with one failing promise.
Promise.allSettled(
    [
        new Promise((res)=>res('resolved')),
        new Promise((res,rej)=>rej('rejected'))
    ]
).then(console.log)