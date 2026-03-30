//array operations
const arr = [1, 2];
arr.push(6);
console.log('arr', arr)
arr.pop();
console.log('arr', arr)


const array2 = [3,5,6,7];
array2.unshift(0);
console.log('array2', array2);
array2.shift();
console.log('array2',array2);


//spread operator
const array3=[3,5,6,8];
const newArray = [...array3,4];
console.log('newArray', newArray);

//remove duplicates
const arrayDuplicates= [7,5,4,4,7,5];
const removeDuplicates= [...new Set(arrayDuplicates)];
console.log('modified array', removeDuplicates);
