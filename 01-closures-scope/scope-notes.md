# Scope in JavaScript

## Scope determines where variables are accessible in your code. JavaScript has three main types of scope:



## a) Global Scope

Variables declared outside any function or block have global scope.

They are accessible anywhere in the code.

let globalVar = "I'm global";

function showVar() {
  console.log(globalVar); // Accessible here
}

showVar();
console.log(globalVar); // Accessible here too



## b) Function Scope

Variables declared inside a function are local to that function.

They cannot be accessed outside the function.

function localScopeExample() {
  let localVar = "I'm local";
  console.log(localVar); // Accessible here
}

localScopeExample();
console.log(localVar); // ❌ Error: localVar is not defined



## c) Block Scope (ES6)

let and const are block-scoped, meaning they exist only inside { }.

var is function-scoped, so it ignores block scope.

if (true) {
  let blockVar = "Block scoped";
  var funcVar = "Function scoped";
  console.log(blockVar); // ✅
  console.log(funcVar); // ✅
}

console.log(blockVar); // ❌ Error
console.log(funcVar);  // ✅ Accessible (var ignores block)



## d) Lexical Scope

JavaScript resolves variables using where the function is declared, not where it’s called.

This is important for understanding closures.

let name = "Global";

function outer() {
  let name = "Outer";
  function inner() {
    console.log(name); // Inner function can access outer function variables
  }
  inner();
}

outer(); // Output: "Outer"
