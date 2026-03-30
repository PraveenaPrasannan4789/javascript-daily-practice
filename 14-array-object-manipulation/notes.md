## Add / Remove Elements
const arr = [1, 2];

arr.push(3);   // [1,2,3]
arr.pop();     // [1,2]

arr.unshift(0); // [0,1,2]
arr.shift();    // [1,2]
## Spread Operator (VERY IMPORTANT)
const arr = [1, 2];
const newArr = [...arr, 3];

console.log(newArr); // [1,2,3]
## Remove duplicates
const nums = [1, 2, 2, 3];
const unique = [...new Set(nums)];

console.log(unique); // [1,2,3]