# Closures in JavaScript

A closure is a function that “remembers” variables from its outer scope, even after the outer function has finished execution.

## Why closures happen

When a function is defined inside another function, the inner function keeps access to the outer function’s variables.


## Example 1: Basic Closure
function outerFunction() {
  let outerVar = "I am outside!";

  function innerFunction() {
    console.log(outerVar);
  }

  return innerFunction;
}

const myClosure = outerFunction(); // outerFunction finishes execution
myClosure(); // ✅ Output: "I am outside!"


Here:

innerFunction remembers outerVar even after outerFunction has returned.

This is the essence of a closure.





## Example 2: Private Variables with Closures

Closures allow us to create private variables, a common pattern in JavaScript.

function counter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const myCounter = counter();
myCounter(); // 1
myCounter(); // 2
myCounter(); // 3


count is not accessible outside, but the returned function can manipulate it.

This is often used in module patterns.





## Example 3: Closures with Loops (Common Pitfall)
for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
// Output: 4 4 4


Why? var is function-scoped; all functions share the same i.

Fix using let (block-scoped):

for (let i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
// Output: 1 2 3
