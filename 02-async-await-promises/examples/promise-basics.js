const promise = new Promise((resolve,reject)=>{
const data=true;
if(data){
resolve('resolved promise');
}
else{
    reject('rejected promise')
}
})

promise.then((val)=>{
    console.log(val)
});
promise.catch((val)=>{
    console.log(val)
})

//example 2

const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Done!");
    } else {
        reject("Error occurred");
    }
});

myPromise
    .then(result => console.log(result))   // Done!
    .catch(error => console.log(error));



   // Converting Promise to Async/Await
   //example 1

    // Promise
fetch("https://api.example.com/data")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

// Async/Await
async function getData() {
    try {
        const res = await fetch("https://api.example.com/data");
        const data = await res.json();
        console.log(data);
    } catch(err) {
        console.error(err);
    }
}
getData();


//example 2

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User fetched");
    }, 1000);
  });
}

function showUser() {
  getUser()
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });
}

showUser();



function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User fetched");
    }, 1000);
  });
}

async function showUser() {
  try {
    const result = await getUser();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

showUser();