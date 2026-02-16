//globalScope
let globalVar = "I'm global";

function showVar() {
  console.log(globalVar); // Accessible here
}

showVar();
console.log(globalVar); // Accessible here too







//functionScope

function localScopeExample() {
  let localVar = "I'm local";
  console.log(localVar); // Accessible here
}

localScopeExample();
console.log(localVar); // ❌ Error: localVar is not defined








//block scope
if (true) {
  let blockVar = "Block scoped";
  var funcVar = "Function scoped";
  console.log(blockVar); // ✅
  console.log(funcVar); // ✅
}

console.log(blockVar); // ❌ Error
console.log(funcVar);  // ✅ Accessible (var ignores block)







//lexical scope
function lex(){
    let data='lexicalScope';
    function access(){
        console.log('inside access', data);// Inner function can access outer function variables
    }
    access();
}

lex();





//combined Example
let globalScope = 5;
const scopeExample=()=>{
    let functionScope= 10;
    function printData(){
        let blockScope=20;
        console.log("function Scope", functionScope);
        console.log('block scope inside',blockScope)
    }
    //console.log('block scope',blockScope)
    printData();
}
scopeExample();

console.log("global Scope",globalScope);