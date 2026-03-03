// Exercise 1
// Add 18% GST to each price and return a new array of final prices (rounded to 2 decimals).

// const prices = [100, 250, 80, 460];
// Expected Output:
// [118, 295, 94.4, 542.8]


const prices= [100, 250, 80, 460];
const newPrices = prices.map((x)=>{
    let finalAmount = x* 1.18;
    return Number(finalAmount.toFixed(2));
    }
);

//Exercise 2
// You are given an array of students:

// const students = [
//   { name: "Asha", marks: 45 },
//   { name: "Rahul", marks: 78 },
//   { name: "Priya", marks: 32 },
//   { name: "Arjun", marks: 90 }
// ];

// Return only students who passed (marks >= 40)

// Check if any student scored above 85.

// 🎯 Expected Output:
// Passed Students: [ {Asha...}, {Rahul...}, {Arjun...} ]
// Any Topper: true

const students = [
  { name: "Asha", marks: 45 },
  { name: "Rahul", marks: 78 },
  { name: "Priya", marks: 32 },
  { name: "Arjun", marks: 90 }
];

const passedStudents= students.filter((x)=>x.marks>=40);
const ifPassedStudent= students.some((x)=>x.marks>85);
console.log('Passed Students:', passedStudents);
console.log('Any Topper:',ifPassedStudent);

//Exercise 3
// Find the total cart value.

// const cart = [
//   { item: "Shoes", price: 2000, qty: 2 },
//   { item: "T-shirt", price: 500, qty: 3 },
//   { item: "Cap", price: 300, qty: 1 }
// ];
// 🎯 Expected Output:
// Total = 2000*2 + 500*3 + 300*1
// Total = 5800

const cart = [
  { item: "Shoes", price: 2000, qty: 2 },
  { item: "T-shirt", price: 500, qty: 3 },
  { item: "Cap", price: 300, qty: 1 }
];

const total = cart.reduce((acc,res)=>{
    acc = acc + (res.price*res.qty);
    return acc;
},0)

let sumExp='';
cart.forEach((X,index)=>{
    sumExp = sumExp+ `${X.price} * ${X.qty}`;
    if(index!= cart.length-1){
        sumExp+='  +  ';
    }
});

//another way

const sumStatement= cart.map((x)=>`${x.price} * ${x.qty}`)
                        .join('+');

console.log('Total=',sumStatement);
console.log('Total =',total)

