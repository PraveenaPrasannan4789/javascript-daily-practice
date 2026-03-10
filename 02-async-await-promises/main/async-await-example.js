// Exercise 1

// Create an async function that returns "Hello Async".

async function helloAsync(){
    return 'Hello Async';
}

const fetchVal = helloAsync();



// Exercise 2

// Use await with Promise.resolve(10) and print the value.
async function printValue() {
    const val= await Promise.resolve(10);
    console.log('val',val);
}

printValue()





// Exercise 3

// Write an async function that waits 2 seconds then logs "Finished".
async function printOutput(){
    await Promise.resolve().then(
        setTimeout(()=>{
      console.log('finished')
    },2000)
    )
    //or
   const res=  await new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('finished')
    }, 2000);
    })
    console.log(res);
};
printOutput();


//Predict the output 
//Problem 1
async function test() {
    return 5;
}

test().then(console.log); //5

//Problem 2
async function test() {
    const x = await Promise.resolve(10);
    console.log(x);
}

test();//10


//Problem 3
async function test() {
    await Promise.resolve();
    console.log("Done");
}

console.log("Start");
test();
console.log("End");//start end done


//Problem 4
async function test() {
    throw "Error!";
}

test().catch(console.log); //Error

//Problem 5
async function test() {
    return await Promise.resolve(20);
}

test().then(console.log); //20