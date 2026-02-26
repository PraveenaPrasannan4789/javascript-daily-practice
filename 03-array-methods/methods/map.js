//example 1 - map
let array1=[1,2,3,4,5];
const [val,val1] = array1.map((x,y)=>{
return x,y;
})

//output is 0,1 

// Comma Operator in JS

// In JavaScript:

// a, b

// Evaluates both
// Returns last value
//output [0,1,2,3,4,5]
//destructuring gives 0,1



//example 2 -map 
let names=["John","Raghav"];

const converted= names.map((val)=>{
return val.toUpperCase()
})

console.log('converted', converted)