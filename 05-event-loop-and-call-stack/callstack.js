function third(){
    console.log('third');
    const total=100;
    console.log(`john have ${total} cars`)
}

function second(){
    console.log('second') //JavaScript is synchronous by default.
    //Read line
    // Execute line
    // Move to next line
    third();
    const total=200;
    console.log(`Anoop have ${total} cars`)
}

function first(){
    console.log('first')
    second();
}

first();


//Call Stack tracks:

// Function calls

// Execution order

// Call Stack does NOT track:

// Variables

// Objects

// Arrays

// Those go to memory (heap).



