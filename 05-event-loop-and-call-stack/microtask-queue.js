console.log('start');

Promise.resolve().then(()=>{
    console.log('inside promise');
})

setTimeout(()=>{
console.log('inside settimeout');
},5000)

console.log('end');

//Promises go to Microtask Queue, which has higher priority.