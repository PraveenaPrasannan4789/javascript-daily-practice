// exercise 1
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C"); //A,C,B



// exercise 2
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 1000);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End"); // start,end,promise,timeout



//exercise 3
function one() {
  console.log("One");
}

function two() {
  one();
  console.log("Two");
}

two(); //one,two


//exercise 4
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End"); //start,end,promise,timer
