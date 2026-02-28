//examples
const data= [10, 20, 1,8,9,0,5,8,9];
const swapData = data.sort();
console.log('swapped data', swapData);

// [
//   0, 1, 10, 20, 5,
//   8, 8,  9,  9
// ]  Incorrect numeric order
// Because it compares as strings:

const ascSwap =  data.sort((a,b)=>a-b);
const descSwap = data.sort((a,b)=> b-a);
console.log('ascending order', ascSwap);
console.log('descending order', descSwap);

//sort mutates the array, so create a copy and do the change
// or use toSorted If environment supports ES2023

const newAscSwap =  [...data].sort((a,b)=>a-b);
const newDescSwap = [...data].sort((a,b)=> b-a); //It creates a copy of an array.Spreads elements into a new array.
console.log('ascending order', newAscSwap);
console.log('descending order', newDescSwap);