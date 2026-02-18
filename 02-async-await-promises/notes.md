## 1. Promises

A Promise represents a value that may be available now, later, or never.

States:

Pending → Initial state

Fulfilled → Operation successful

Rejected → Operation failed

Creating a Promise:

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
    .catch(error => console.log(error));  // Error occurred


Key Points:

then() → Runs on success

catch() → Runs on failure

finally() → Runs always, after then/catch

## 2. Async/Await

async functions always return a Promise.
await pauses execution until the promise resolves.

Example:

async function fetchData() {
    try {
        const data = await fetch("https://api.example.com/data");
        const json = await data.json();
        console.log(json);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchData();


Key Points:

Makes async code look synchronous

Must use try/catch for error handling

Only works inside async functions

## 3. Converting Promise to Async/Await
// Promise
fetch("https://api.example.com/data")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

// Async/Await
async function getData() {
    try {
        const res = await fetch("https://api.example.com/data");
        const data = await res.json();
        console.log(data);
    } catch(err) {
        console.error(err);
    }
}
getData();

## 4. Promise Combinators

Promise.all([...]) → Waits for all promises to resolve; fails fast if one rejects

Promise.allSettled([...]) → Waits for all promises to settle, gives success/failure results

Promise.race([...]) → Resolves/rejects as soon as first promise settles

Promise.any([...]) → Resolves as soon as first fulfilled promise; rejects if all fail

Example:

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);

Promise.all([p1, p2]).then(console.log); // [10, 20]

## 5. Common Patterns

Sequential execution:

async function sequential() {
    const a = await fetchDataA();
    const b = await fetchDataB();
    return [a, b];
}


Parallel execution (faster):

async function parallel() {
    const [a, b] = await Promise.all([fetchDataA(), fetchDataB()]);
    return [a, b];
}