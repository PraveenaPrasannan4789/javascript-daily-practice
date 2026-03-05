//example 1
// Return total price from object:

// const cart = {
//   item1: 200,
//   item2: 300,
//   item3: 500
// };

// Expected output → 1000

const cart = {
  item1: 200,
  item2: 300,
  item3: 500
};

const{item1,item2,item3}=cart;
const total= item1+item2+item3;
console.log('total',total);

//example 2
// Rename name to fullName using destructuring.

// const user = { name: "Rahul", age: 22 };

const user = { name: "Rahul", age: 22 };
const {name:fullName, age}= user;
console.log('fullName',fullName);


//example 3
// Extract city from nested object.

// const data = {
//   user: {
//     address: {
//       city: "Mumbai"
//     }
//   }
// };

const data = {
  user: {
    address: {
      city: "Mumbai"
    }
  }
};

const {address}= data.user;
const{city} = address;
console.log('city',city)

// example 4
// Add new property isLoggedIn = true without mutating original object.

data.isLoggedIn = true;
console.log('data now',data)


// Write a function that takes:

// { price, quantity }

// And returns price * quantity using destructuring in parameters.

const newData = {
    price:1000,
    quantity:2
}

function fetch({price,quantity}){
const total= price * quantity;
console.log('total',total);
}

fetch(newData)

//todo
//interview-level tricky problems

//real-world API-style problems

//mini mock interview questions