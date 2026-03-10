//async function
async function printHello(){
    return'hello'
}

const data = printHello()
console.log('data',data)


//await pauses the async function until the promise resolved

async function fetchDataS() {
    const getData= await Promise.resolve("resolved");
    console.log(getData);
}
fetchDataS();


//try-catch-error handling

async function filename() {
    try{
    const finalValue = await fetch("url");
    console.log('finalValue',finalValue);
    }
    catch(err){
    console.log('inside the catch block', err)
    }
}

filename();