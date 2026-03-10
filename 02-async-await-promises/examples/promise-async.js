//promise version

// fetch('url')
// .then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log('error',err));

//converted to async await 

async function fetchData() {
    try{
    const res =await fetch("url");
    const data = await res.json();
    console.log('data',data)
    }
    catch(e){
        console.log('error',e)
    }
}



// Exercise 1

// Convert this to async/await:

// Promise.resolve(100).then(console.log);
 Promise.resolve(100).then(console.log);

 async function convertFn(){
    const data= await Promise.resolve(100);
    console.log('data',data);
 }

 convertFn();


// Exercise 2

// Convert this:

// fetch("url").then(res => res.json());
fetch("url").then(res => res.json());

async function fetchUrl(){
    try{
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    console.log(data);
    }
    catch(e){
        console.log('error',e)
    }
}

fetchUrl();
