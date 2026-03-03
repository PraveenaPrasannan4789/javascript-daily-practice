//examples

//printing and manipulating
const nums = [1, 2, 3, 4];

const doubled = nums.map(n => n * 2);

console.log(doubled); // [2, 4, 6, 8]
console.log(nums);    // [1, 2, 3, 4] (original unchanged)


const nums1 = [1, 2, 3, 4];

nums1.forEach(n => {
  console.log(n * 2);
});


//Convert array of users to names
const users=[{
    name:'abc',
    age:23
},
{
    name:'xyz',
    age:35
}]

const newUserData = users.map((user)=>{ //map
    return user.name
})

const userData = [];
users.forEach((user)=>{
    userData.push(user.name)// forEach
})

console.log('map result', newUserData);
console.log('forEach Result', userData);
