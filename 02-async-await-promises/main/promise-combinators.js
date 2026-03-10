//handle multiple promises together.


// Promise.all()

// Waits for all promises to resolve.
Promise.all([
    Promise.resolve(100),
    Promise.resolve(30)
]).then(console.log);